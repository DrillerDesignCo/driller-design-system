# Agent 4 Handoff Report — Wave 34

**Task:** Backend Hardening Google/Stripe  
**Status:** ✅ Complete  
**Completed At:** 2026-03-12T21:00:00-05:00

---

## Files Modified

| File | Action |
|---|---|
| `apps/server/src/plugins/google-auth/google-auth.strategy.ts` | Modified |
| `apps/server/src/plugins/stripe-connect/stripe-connect.resolver.ts` | Modified |

---

## Changes Summary

### 1. `google-auth.strategy.ts` — Hardened Google Auth Strategy

**Issues found and fixed:**

1. **Missing `GOOGLE_CLIENT_ID` guard** — If the env var was not set, all Google logins would silently fail (evaluating `tokenInfo.aud !== undefined` → always `true`). Added an early-exit guard that logs a clear server error and returns a user-facing message instead of `false`.

2. **Unstable external identifier** — The original code used `tokenInfo.email` as the `externalIdentifier` for both lookup and creation. Google emails can change; the `sub` claim is the canonical stable identifier. **Fix:** New users are now created with `externalIdentifier: tokenInfo.sub`. Existing legacy accounts (email-keyed) are still served via a fallback `findCustomerUser(email)` call so no existing user is broken.

3. **Missing `sub` field in `GoogleTokenInfo`** — Added the `sub` claim type. Added a guard requiring `sub` to be present (malformed tokens without it are rejected).

4. **Network vs DB error conflation** — The original single `try/catch` wrapped both the `fetch()` to Google's API and the Vendure DB calls. A network timeout was indistinguishable from a DB error. **Fix:** Split into two separate `try/catch` blocks:
   - Phase 1: `fetch()` network failure → returns user-visible message string.
   - Phase 2: DB operations → returns `false` after retry attempt.

5. **Race condition / duplicate-key recovery** — If two requests for the same new Google user arrive concurrently, `createCustomerAndUser` can throw a duplicate-key DB error on the second request. Added a retry `findCustomerUser(sub)` in the DB `catch` block to recover the winning creation and return the existing user rather than failing.

6. **Added `VALID_ISSUERS` constant** — Moved issuer strings to a named constant for clarity.

---

### 2. `stripe-connect.resolver.ts` — Hardened Stripe Connect Resolver

**Issues found and fixed:**

1. **No error handling on service calls** — All resolver methods called service methods without any `try/catch`. If `StripeConnectService` threw (network error to Stripe API, DB failure, etc.), raw Node.js errors would leak through to the GraphQL response. **Fix:** Wrapped all service calls in `try/catch` with `Logger.error` and re-thrown as Vendure typed errors (`InternalServerError`).

2. **`generateStripeConnectLink` callable by buyers** — Both the admin and shop resolver exposed this mutation with only `Permission.Authenticated`, meaning any logged-in buyer could call it and cause a runtime error in the service (which throws `'This operation can only be performed by a Seller in a Seller Channel'`). **Fix:** Added explicit `ctx.channel.sellerId` guard at the resolver level, returning a descriptive `UserInputError` before hitting the service.

3. **`stripeConnectStatus` returning null vs error for non-sellers (Shop API)** — A buyer querying `stripeConnectStatus` on the default channel would reach the service, which returns `null` — but without the guard the service call was still wasteful. **Fix:** The shop resolver now short-circuits with `return null` immediately if `ctx.channel.sellerId` is absent, with no DB/Stripe calls made.

4. **Added `loggerCtx` constant** — All log lines now include the resolver context identifier.

---

## Verification

- ✅ `npx tsc --noEmit` — passes with zero errors or warnings.
- ✅ No files outside the 2 assigned files were modified.
- ✅ No new packages installed.
- ✅ No config files modified.

---

## Notes for Inspector

- The `createStripePaymentIntent` mutation visible in the shop GraphQL schema is **correctly provided by `@vendure/payments-plugin/package/stripe`'s `StripePlugin`** and is NOT a custom resolver. It was not modified. The frontend's `PaymentSection.astro` calls this built-in mutation correctly.
- The `StripeConnectPlugin` (our custom plugin) handles seller *onboarding* only — it is a separate concern from checkout payment intents.
- If `createStripePaymentIntent` returns null on the frontend, the root cause is likely: (a) no Stripe payment method configured in the Vendure Admin UI, or (b) `STRIPE_SECRET_KEY` env var not set — these are operational/config issues, not code issues.
