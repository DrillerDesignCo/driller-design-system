# Wave 34 Inspector Prompt

## Files to Audit

All modified files must pass build and typechecks.

- `apps/storefront/src/pages/login.astro`
- `apps/storefront/src/pages/register.astro`
- `apps/storefront/src/components/UserMenu.astro`
- `apps/storefront/src/components/Header.astro`
- `apps/storefront/src/components/checkout/PaymentSection.astro`
- `apps/storefront/src/pages/checkout.astro`
- `apps/storefront/src/components/AccountSidebar.astro`
- `apps/storefront/src/pages/account/index.astro`
- `apps/storefront/src/pages/account/orders/index.astro`
- `apps/storefront/src/pages/account/orders/[code].astro`
- `apps/storefront/src/pages/account/settings.astro`
- `apps/storefront/src/pages/account/messages/index.astro`
- `apps/storefront/src/pages/account/messages/[id].astro`
- `apps/storefront/src/pages/account/favorites.astro`
- `apps/storefront/src/layouts/SellerLayout.astro`
- `apps/server/src/auth/google-auth.strategy.ts` (if exists and modified)
- `apps/server/src/plugins/stripe-connect/stripe-connect.resolver.ts` (if modified)

## Checklist

- [ ] Does Google Auth capture the `vendure-auth-token` correctly?
- [ ] Is the Seller menu perfectly hidden from non-verified sellers (including pending applicants)?
- [ ] Does Stripe load correctly on the component and process without errors?
- [ ] Is the sidebar UI glitch (hidden under the header) resolved via CSS padding/offset?
- [ ] Are typechecks passing?

## Run Verification

- Frontend: `cd apps/storefront && pnpm run typecheck && pnpm run build`
- Backend: `cd apps/server && pnpm run typecheck`

## Quality Check
- Run brand guardian checklist in `.agents/skills/brand-guardian.md` and accessible checks.

## Hand-off
Write your report to `.agents/handoffs/inspector-report.md`.
