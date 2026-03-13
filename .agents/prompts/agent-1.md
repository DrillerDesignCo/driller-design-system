# Wave 34 — Final Bug Fixes & Critical Site Issues

> ⛔ **STRICT COMPLIANCE — READ BEFORE DOING ANYTHING**
> 1. Do ONLY what this prompt says. Nothing more.
> 2. Do NOT add features, files, or improvements not listed in the deliverables.
> 3. Do NOT refactor, reorganize, or "improve" existing code.
> 4. Do NOT install packages, modify config files, or touch files outside your scope.
> 5. If something seems like a good idea but isn't in your deliverables — **DON'T DO IT.**
> 6. When you finish your listed tasks, **STOP. Do not look for more work.**

You are a Worker Agent on the Apostolic Shop project.

Read `agents.md` at `c:\Users\Garrett\Documents\Apostolic Shop\agents.md`.
Read the worker behavioral contract at `c:\Users\Garrett\Documents\Apostolic Shop\.agents\skills\worker.md`.

Also read for context:
- `apps/storefront/src/pages/login.astro`
- `apps/storefront/src/pages/register.astro`
- `apps/storefront/src/components/UserMenu.astro`
- `apps/storefront/src/components/Header.astro`
- `apps/storefront/src/layouts/SellerLayout.astro`

**Your job:** Fix Google Authentication error + Access Control glitch

## Deliverables — 4 files

### 1. `apps/storefront/src/pages/login.astro`
- Fix the Google authentication flow which is currently returning an error or failing to log the user in.
- The `handleGoogleCredentialResponse` mutation succeeds but fails to capture the `vendure-auth-token` cookie. Add the same 4-line cookie capture pattern used in the email/password handler. Check for any other errors during the flow.

### 2. `apps/storefront/src/pages/register.astro`
- Apply the same Google authentication fix here for consistency.

### 3. `apps/storefront/src/components/UserMenu.astro`
- **Issue:** Non-approved and non-applied users (buyers and guests) are seeing the seller access menu. 
- Ensure that the seller dashboard link is ONLY visible to users who are actually verified sellers or admins. You may need to refine the `isSeller` check or ensure `UserMenu.astro` isn't incorrectly assuming seller status based on nulls or bad states.

### 4. `apps/storefront/src/components/Header.astro`
- Similar to `UserMenu.astro`, ensure the "Dashboard" and other seller-specific links are only rendered for actual verified sellers/admins.
- Ensure the seller access menu logic is fully secured on the frontend display.

## ⛔ Scoping Rules (MANDATORY)
1. ONLY create/modify the 4 files listed above.
2. Do NOT modify any other existing files.
3. If you finish early, STOP.

## Completion
When done, write your report to `.agents/handoffs/agent-1-report.md` using the template format defined in `skills/worker.md`.
