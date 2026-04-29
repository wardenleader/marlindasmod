from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
import uuid
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
from datetime import datetime, timezone

import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

# MongoDB
mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

# Resend
RESEND_API_KEY = os.environ.get("RESEND_API_KEY", "")
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev")
CONTACT_RECIPIENT = os.environ.get("CONTACT_RECIPIENT", "info@marlindas.com")
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

app = FastAPI(title="Marlinda's Mod Skincare API")
api_router = APIRouter(prefix="/api")

# Logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


# ---------- Models ----------
class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    email_sent: bool = False


class ContactCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=40)
    message: str = Field(..., min_length=1, max_length=5000)


# ---------- Helpers ----------
def _build_html(submission: ContactSubmission) -> str:
    return f"""
    <table style="width:100%;font-family:Arial,sans-serif;color:#2C2C2C;padding:24px;background:#F5F1EA;">
      <tr><td>
        <h2 style="color:#7A8B6F;margin:0 0 16px 0;font-family:Georgia,serif;">New Contact — Marlinda's Mod Skincare</h2>
        <table style="width:100%;background:#FFFFFF;border-radius:12px;padding:20px;border:1px solid rgba(122,139,111,0.2);">
          <tr><td><strong>Name:</strong> {submission.name}</td></tr>
          <tr><td><strong>Email:</strong> {submission.email}</td></tr>
          <tr><td><strong>Phone:</strong> {submission.phone or "—"}</td></tr>
          <tr><td style="padding-top:12px;"><strong>Message:</strong><br/>{submission.message}</td></tr>
          <tr><td style="padding-top:16px;color:#7A8B6F;font-size:12px;">Submitted at {submission.created_at.isoformat()}</td></tr>
        </table>
      </td></tr>
    </table>
    """


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Marlinda's Mod Skincare API"}


@api_router.get("/health")
async def health():
    return {"status": "ok", "resend_configured": bool(RESEND_API_KEY)}


@api_router.post("/contact", response_model=ContactSubmission)
async def create_contact(payload: ContactCreate):
    submission = ContactSubmission(**payload.model_dump())

    # Try sending email via Resend (non-blocking)
    if RESEND_API_KEY:
        try:
            params = {
                "from": SENDER_EMAIL,
                "to": [CONTACT_RECIPIENT],
                "reply_to": submission.email,
                "subject": f"New Contact from {submission.name} — Marlinda's Mod Skincare",
                "html": _build_html(submission),
            }
            await asyncio.to_thread(resend.Emails.send, params)
            submission.email_sent = True
        except Exception as e:
            logger.error(f"Resend send failed: {e}")
            submission.email_sent = False
    else:
        logger.warning("RESEND_API_KEY not configured — submission stored only.")

    # Persist to MongoDB
    doc = submission.model_dump()
    doc["created_at"] = doc["created_at"].isoformat()
    await db.contacts.insert_one(doc)

    return submission


@api_router.get("/contact", response_model=List[ContactSubmission])
async def list_contacts(limit: int = 100):
    items = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for it in items:
        if isinstance(it.get("created_at"), str):
            it["created_at"] = datetime.fromisoformat(it["created_at"])
    return items


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
