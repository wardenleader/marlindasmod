# Marlinda's Mod Skincare — PRD

## Original Problem Statement
Build a luxurious, highly animated single-page marketing website for Marlinda's Mod Skincare,
a premium skincare and beauty studio in Burlingame, CA. The site should feel elegant, modern,
and inviting — like stepping into a high-end spa.

## User Choices (verbatim)
- Backend: static site only + ONE simple contact form emailing info@marlindas.com
  (fields: name, email, phone, message). No newsletter.
- Imagery: user's uploaded photos (storefront, permanent makeup, microderm) + AI/curated stock
  for hero/about/dividers. Editorial, soft natural lighting, sage/cream/rose aesthetic.
- Team: stylized initial-based circular avatars on cream until real photos arrive.
- Booker: https://go.booker.com/location/MARLINDASModSkincare/service-menu
- Gift cards: https://go.booker.com/location/MARLINDASModSkincare/buy/gift-certificate
- Phone: (650) 340-1700  ·  Email: info@marlindas.com  ·  Address: 1199 Howard Ave #101, Burlingame, CA 94010

## Architecture
- React 19 + Tailwind + Framer Motion + react-countup + lucide-react
- FastAPI + Motor (MongoDB) + Resend (transactional email)
- Single-page composition in /app/frontend/src/App.js
- Section components under /app/frontend/src/components/
- Static data under /app/frontend/src/data/{services,team,site}.js

## Implemented (Dec 2026)
- [x] Page loader with cursive logo fade
- [x] Sticky shrinking nav (transparent over hero, cream/blur on scroll)
- [x] Mobile slide-in drawer (sage bg, staggered cream menu items)
- [x] Hero: Ken Burns bg, floating particles, staggered word reveal, dual CTAs, scroll indicator
- [x] Book Experience CTA banner
- [x] About / Welcome — sticky asymmetric column layout
- [x] Story Behind Our Beauty (parallax image + Marlinda bio)
- [x] Services grid: 13 categories + click-to-expand modal with booker CTA
- [x] DiamondGlow featured section + 3-question FAQ accordion
- [x] Team grid: 6 vertical cards with initial avatars (sage block bottom) + bio modal
- [x] Reviews: animated CountUp stats (5.0 Google, 4.7 Yelp) + star icons
- [x] Gift Cards CTA banner
- [x] Visit Us: contact info, embedded Google Map iframe, 7-day hours table, contact form
- [x] Contact form: POST /api/contact → MongoDB persist + Resend email
- [x] Footer: logo, tagline, animated social icons, quick links, copyright
- [x] Floating pulsing Book Now CTA (mobile bottom-fixed, desktop bottom-right)
- [x] Reduced-motion media query support

## Backend Endpoints
- GET /api/health → {status, resend_configured}
- POST /api/contact → ContactSubmission (name, email, phone?, message)
- GET /api/contact → list of submissions

## Testing
- 8/8 backend pytest passing (test_marlindas_api.py)
- Frontend e2e validated via Playwright (testing_agent_v3 iteration_1)

## Backlog / Next
- P0: User to provide RESEND_API_KEY so contact form emails actually send
- P0: User to provide real team photos (Marlinda, Helena, Maddie, Tina, Nanette, Summer) — drop into /app/frontend/src/data/team.js as `image` field; Team.jsx ready to swap
- P1: Add favicon using cursive logo
- P1: SEO sitemap.xml + robots.txt
- P2: Optional: gallery of treatment before/after
- P2: Optional: testimonials carousel
