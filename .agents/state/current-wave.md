# Current Wave

## Wave 34 — Final Bug Fixes & Critical Site Issues

**Theme:** Resolve all remaining open bugs flagged in the user issue notes.

### Why this wave
The user has reported 4 critical issues that need to be resolved immediately to ensure optimal access control, payment processing, authentication, and UI rendering.

### Agents

| Agent | Role | Deliverables |
|-------|------|-------------|
| Agent 1 | Frontend Auth & Access | Fix Google Auth `vendure-auth-token` capture on `login.astro` and `register.astro`; Prevent non-approved sellers from seeing the seller access menu in `UserMenu.astro` and `Header.astro`. |
| Agent 2 | Frontend Stripe Fix | Investigate and fix Stripe failing to load on the frontend (`PaymentSection.astro`, `checkout.astro`). |
| Agent 3 | Frontend UI Sidebar | Extract `AccountSidebar.astro` and fix sidebars being hidden by the top navigation header on all account pages and seller pages. |
| Agent 4 | Backend Hardening | Harden Google Auth strategy and check Stripe Connect API compatibility. |
| Inspector | Audit | Build verification + code quality + board cleanup |

### Root Causes
- Google Auth missing cookie setup
- Access control logic missing deeper field checks
- Stripe Elements API issue or token issue
- CSS sticky alignment collision with the header.
