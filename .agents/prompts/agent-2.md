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
- `apps/storefront/src/components/checkout/PaymentSection.astro`
- `apps/storefront/src/pages/checkout.astro`

**Your job:** Fix Stripe Frontend Gateway Issue

## Deliverables — 2 files

### 1. `apps/storefront/src/components/checkout/PaymentSection.astro`
- **Issue:** Stripe is not functioning correctly on the frontend.
- Investigate and fix why the Stripe Elements integration or Payment Gateway is failing to load or process payments properly. Make sure the clientSecret is fetched correctly and passed to Elements, and that there are no CSS or JS console errors breaking the integration. You may need to use the `Stripe` MCP tool if you need to look up documentation.

### 2. `apps/storefront/src/pages/checkout.astro`
- Ensure any required `define:vars` or Stripe.js script tags are correctly configured and have the proper publishable key without causing errors.

## ⛔ Scoping Rules (MANDATORY)
1. ONLY create/modify the 2 files listed above.
2. Do NOT modify any other existing files.
3. If you finish early, STOP.

## Completion
When done, write your report to `.agents/handoffs/agent-2-report.md` using the template format defined in `skills/worker.md`.
