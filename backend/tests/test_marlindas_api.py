"""Backend API tests for Marlinda's Mod Skincare."""
import os
import re
import pytest
import requests
from datetime import datetime

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://luxury-skincare-spa-1.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
class TestHealth:
    def test_health_ok(self, client):
        r = client.get(f"{API}/health", timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data.get("status") == "ok"
        assert "resend_configured" in data
        assert isinstance(data["resend_configured"], bool)

    def test_root(self, client):
        r = client.get(f"{API}/", timeout=15)
        assert r.status_code == 200
        assert "message" in r.json()


# ---------- Contact ----------
class TestContact:
    def test_create_contact_valid(self, client):
        payload = {
            "name": "TEST_Jane Doe",
            "email": "TEST_jane@example.com",
            "phone": "+1-650-555-0100",
            "message": "Hi, I'd like to book a DiamondGlow facial.",
        }
        r = client.post(f"{API}/contact", json=payload, timeout=20)
        assert r.status_code == 200, r.text
        data = r.json()
        # Field validations
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["phone"] == payload["phone"]
        assert data["message"] == payload["message"]
        # id must be UUID-ish
        assert isinstance(data["id"], str) and len(data["id"]) >= 8
        # created_at ISO datetime
        assert isinstance(data["created_at"], str)
        datetime.fromisoformat(data["created_at"].replace("Z", "+00:00"))
        # email_sent expected False since RESEND_API_KEY is empty in test env
        assert data["email_sent"] is False
        # No mongodb _id leak
        assert "_id" not in data

    def test_create_contact_no_phone(self, client):
        payload = {
            "name": "TEST_NoPhone",
            "email": "TEST_nophone@example.com",
            "message": "Phone optional test.",
        }
        r = client.post(f"{API}/contact", json=payload, timeout=20)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["phone"] is None
        assert "id" in data

    def test_create_contact_missing_name(self, client):
        payload = {"name": "", "email": "x@example.com", "message": "Hello"}
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422, r.text

    def test_create_contact_invalid_email(self, client):
        payload = {"name": "Foo", "email": "not-an-email", "message": "Hello"}
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422, r.text

    def test_create_contact_missing_message(self, client):
        payload = {"name": "Foo", "email": "foo@example.com"}
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422, r.text

    def test_list_contacts(self, client):
        r = client.get(f"{API}/contact", timeout=20)
        assert r.status_code == 200, r.text
        items = r.json()
        assert isinstance(items, list)
        assert len(items) >= 1
        # Verify no _id leak and required fields present
        for it in items[:5]:
            assert "_id" not in it
            assert "id" in it
            assert "name" in it
            assert "email" in it
            assert "created_at" in it
        # Verify our TEST_ submission persisted
        emails = [it.get("email") for it in items]
        assert any(e and e.startswith("TEST_") for e in emails)
