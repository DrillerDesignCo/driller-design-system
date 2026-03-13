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
Read the worker behavioral contract at `c:\Users\Garrett\Documents\Apostolic Shop\.agents\skills\backend-worker.md`.

Also read for context:
- `apps/server/src/plugins/stripe-connect/stripe-connect.resolver.ts`
- `apps/server/src/auth/google-auth.strategy.ts` (if it exists, else check Vendure auth config)
- `apps/server/src/vendure-config.ts`

**Your job:** Backend Hardening for Google Auth & Stripe

## Deliverables — 2 files

### 1. `apps/server/src/auth/google-auth.strategy.ts` (or equivalent file)
- **Issue:** Harden the backend strategy for Google Auth to ensure strict token validation and no unhandled promise rejections or mis-captured customer entities.
- Ensure the `AuthenticationStrategy` handles edge cases cleanly.

### 2. `apps/server/src/plugins/stripe-connect/stripe-connect.resolver.ts` (or equivalent Stripe server file)
- **Issue:** Investigate any backend Stripe API omissions or flaws that prevent the frontend gateway from functioning properly. Ensure `createStripePaymentIntent` actually returns valid client secrets correctly for the shop API. Fix any obvious runtime gaps.

## ⛔ Scoping Rules (MANDATORY)
1. ONLY create/modify the 2 files listed above (or the exact path they exist at).
2. Do NOT modify any other existing files.
3. If you finish early, STOP.

## Completion
When done, write your report to `.agents/handoffs/agent-4-report.md` using the template format defined in `skills/worker.md`.
