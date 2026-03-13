# Wave Log

> This is a cumulative, append-only log maintained by the Manager after each wave completes. All agents can read this for historical context.

---

<!-- Append new wave entries below this line. Most recent wave at the top. -->

## Wave 33 — Buyer Protection & Dispute Resolution (2026-03-12)

**Theme:** Buyer Protection & Dispute Resolution

**Agents:**
- Agent 1: Backend — DisputePlugin (entity, service, resolvers, API, plugin)
- Agent 2: Frontend — Buyer claim UI + community standards page
- Agent 3: Frontend — Admin disputes page + AdminNav update
- Agent 4: Bug Fix — Mobile CSS issues (nav overlap, hover, swipe)

### Result: ✅ PASS
- The user completed the wave and inspector audit perfectly.
- Build: clean
- Pushed: pending

### Files Added
- `apps/server/src/plugins/dispute/api-extensions.ts`
- `apps/server/src/plugins/dispute/dispute.entity.ts`
- `apps/server/src/plugins/dispute/dispute.plugin.ts`
- `apps/server/src/plugins/dispute/dispute.resolver.ts`
- `apps/server/src/plugins/dispute/dispute.service.ts`
- `apps/storefront/src/components/disputes/OpenClaimModal.astro`
- `apps/storefront/src/pages/community-standards.astro`
- `apps/storefront/src/pages/admin/disputes.astro`

### Files Modified
- `apps/server/src/vendure-config.ts`
- `apps/storefront/src/pages/account/orders/[code].astro`
- `apps/storefront/src/components/admin/AdminNav.astro`
- `apps/storefront/src/styles/global.css`

## Wave 31 — Stripe Connect Frontend Wiring + Order Tracking + Admin Navigation (2026-03-12)

**Theme:** Stripe Connect Frontend Wiring + Order Tracking + Admin Navigation

**Agents:**
- Agent 1: Frontend: Wire Stripe Connect into seller payouts page (onboarding CTA + status display)
- Agent 2: Frontend: Add tracking code input to seller order fulfillment
- Agent 3: Frontend: Admin navigation component + integrate into 4 admin pages
- Agent 4: Backend: Expose `generateStripeConnectLink` mutation on Shop API

### Result: ✅ PASS
- The user completed the wave and inspector audit perfectly.
- Build: clean
- Pushed: `79519df` on `main`

### Files Added
- `apps/storefront/src/components/admin/AdminNav.astro`

### Files Modified
- `apps/storefront/src/pages/seller/payouts.astro`
- `apps/storefront/src/pages/seller/orders/[code].astro`
- `apps/storefront/src/pages/admin/dashboard.astro`
- `apps/storefront/src/pages/admin/applications.astro`
- `apps/storefront/src/pages/admin/listings.astro`
- `apps/storefront/src/pages/admin/sellers.astro`
- `apps/server/src/plugins/stripe-connect/api-extensions.ts`
- `apps/server/src/plugins/stripe-connect/stripe-connect.resolver.ts`

## Wave 30 — Admin Dashboard & Marketplace Operations (2026-03-12)

**Theme:** Admin dashboard stats, listing moderation, seller management, new message email notifications.

**Agents:**
- Agent 1: Backend `AdminOperationsPlugin` (GraphQL queries/mutations for dashboard stats, listing moderation, seller suspension)
- Agent 2: Frontend Admin Dashboard (`/admin/dashboard`) with 6 stats cards + quick links
- Agent 3: Frontend Admin Listings (`/admin/listings`) + Sellers (`/admin/sellers`) with filter tabs, tables/cards, modals
- Agent 4: Backend + Email — `NewMessageEvent` + `new-message` email template + handler registration

### Result: ✅ PASS
- All deliverables met specifications without requiring fixes
- Zero hardcoded hex colors in frontend pages
- All GraphQL contracts match between frontend and backend
- Build: clean (backend typecheck + `astro check` + `pnpm run build` all exit 0)
- SEO audit: all 3 pages have unique `<title>`, `<meta description>`, single `<h1>`, semantic HTML
- Brand audit: all design tokens used correctly, no violations
- Accessibility audit: proper ARIA roles, labels, focus management, keyboard support

### Files Added
- `apps/server/src/plugins/admin-operations/api-extensions.ts`
- `apps/server/src/plugins/admin-operations/admin-operations.service.ts`
- `apps/server/src/plugins/admin-operations/admin-operations.resolver.ts`
- `apps/server/src/plugins/admin-operations/admin-operations.plugin.ts`
- `apps/storefront/src/pages/admin/dashboard.astro`
- `apps/storefront/src/pages/admin/listings.astro`
- `apps/storefront/src/pages/admin/sellers.astro`
- `apps/storefront/src/components/admin/AdminNav.astro`
- `apps/server/src/plugins/messaging/messaging.events.ts`
- `apps/server/src/email-templates/new-message/body.hbs`

### Files Modified
- `apps/server/src/vendure-config.ts` — registered AdminOperationsPlugin
- `apps/server/src/plugins/messaging/messaging.service.ts` — emit NewMessageEvent after sendMessage
- `apps/server/src/config/email-handlers.ts` — added newMessageHandler + registered in emailHandlers array
- `apps/storefront/src/pages/admin/applications.astro` — added AdminNav component

---

## Wave 29 — Buyer-Seller Messaging System (2026-03-12)

**Theme:** Full vertical slice — backend plugin + buyer inbox + seller inbox + initiation buttons.

**Agents:**
- Agent 1: Backend `MessagingPlugin` (Conversation + Message entities, service, resolvers, GraphQL API)
- Agent 2: Buyer inbox pages (`/account/messages` list + `/account/messages/[id]` thread)
- Agent 3: Seller inbox pages (`/seller/messages` list + `/seller/messages/[id]` thread)
- Agent 4: "Message Seller" button on product page + "Message Buyer" button on seller order page

### Result: ⚠️ PASS WITH FIXES
- Inspector found and fixed **5 critical GraphQL contract mismatches:**
  1. `markConversationAsRead` mutation queried sub-fields but returns `Boolean!` (buyer + seller thread)
  2. `senderType` comparisons used `'BUYER'`/`'SELLER'` but backend stores `'customer'`/`'seller'` (buyer + seller thread)
  3. `sendMessage` mutation used flat arguments instead of `SendMessageInput` wrapper (seller thread)
  4. `startConversation` input used `sellerId` instead of `sellerChannelId` (product page)
  5. `startConversation` input used `customerId` (not in schema) instead of `sellerChannelId` (seller orders page)
- Root cause: agents worked in isolation without shared API contract reference
- Build: clean (`pnpm run build` exit code 0)
- Pushed: `45e7910` on `main`

### Files Added
- `apps/server/src/plugins/messaging/conversation.entity.ts`
- `apps/server/src/plugins/messaging/message.entity.ts`
- `apps/server/src/plugins/messaging/messaging.service.ts`
- `apps/server/src/plugins/messaging/messaging.resolver.ts`
- `apps/server/src/plugins/messaging/api-extensions.ts`
- `apps/server/src/plugins/messaging/messaging.plugin.ts`
- `apps/storefront/src/pages/account/messages/index.astro`
- `apps/storefront/src/pages/account/messages/[id].astro`
- `apps/storefront/src/pages/seller/messages/index.astro`
- `apps/storefront/src/pages/seller/messages/[id].astro`

### Files Modified
- `apps/server/src/vendure-config.ts` — registered MessagingPlugin
- `apps/storefront/src/pages/account/index.astro` — added Messages sidebar link
- `apps/storefront/src/layouts/SellerLayout.astro` — added Messages sidebar link
- `apps/storefront/src/pages/product/[slug].astro` — "Message Seller" button + modal
- `apps/storefront/src/pages/seller/orders/[code].astro` — "Message Buyer" button + modal
- `apps/storefront/src/styles/global.css` — messaging styles

---

## Wave 28 — Product Review System (2026-03-12)

**Theme:** Full vertical slice — backend plugin + frontend display + frontend submit.

**Agents:**
- Agent 1: Backend `ProductReviewPlugin` (entity, service, resolvers, GraphQL API, plugin registration)
- Agent 2: Review display on product detail page — summary stars, rating distribution bars, review cards
- Agent 3: "Leave a Review" form on order detail page — star picker, validation, submit mutation, success state

**Key Files Created:**
- `apps/server/src/plugins/product-review/product-review.entity.ts`
- `apps/server/src/plugins/product-review/api-extensions.ts`
- `apps/server/src/plugins/product-review/product-review.service.ts`
- `apps/server/src/plugins/product-review/product-review.resolver.ts`
- `apps/server/src/plugins/product-review/product-review.plugin.ts`

**Key Files Modified:**
- `apps/server/src/vendure-config.ts` — registered ProductReviewPlugin
- `apps/storefront/src/pages/product/[slug].astro` — review summary + reviews section
- `apps/storefront/src/pages/account/orders/[code].astro` — review form for delivered orders

**Inspector:** ✅ PASS — 0 issues found. All design tokens correct, no hardcoded colors.

**Build:** ✅ Passed. Commit: `763b23e`.

---

## Wave 27 — Multi-Image Upload + Admin Seller Application Queue (2026-03-12)

**Theme:** Quick V1 wins — multi-image product management + admin tooling.

**Agents:**
- Agent 1: Multi-image management on product edit page (upload, remove, reorder, 8-max, featured badge)
- Agent 2: Enhanced new product form (8-image max, drag-to-reorder, featured badge)
- Agent 3: Admin seller application queue page at `/admin/applications` (filter, approve, reject)

**Key Files:**
- `apps/storefront/src/pages/seller/products/[id]/edit.astro` — modified
- `apps/storefront/src/pages/seller/products/new.astro` — modified
- `apps/storefront/src/pages/admin/applications.astro` — created

**Inspector Fix:** Replaced hardcoded `#D4A017` in edit.astro featured badge with `var(--md-sys-color-primary)`.

**Build:** ✅ Passed. Commit: `c75c396`.

---

## Wave 25 — Seller Channel Scoping & Vendor Application Events (2026-03-12)

### Scope
- Agent 1: Seller channel token auth scoping & approval/rejection emails (4 files)
- Agent 4: Event generation for vendor application approvals and rejections (3 files)

### Result: ✅ PASS
- Event handlers created, scopes bound mathematically exactly, typecheck and build succeeded. Inspector applied minor fixes inline.
- Build: clean
- Pushed: `9e74d14` on `main`

### Files Added/Modified
- `apps/storefront/src/lib/auth.ts`
- `apps/storefront/src/lib/seller-products.ts`
- `apps/server/src/email-templates/vendor-application-approved/body.hbs`
- `apps/server/src/email-templates/vendor-application-rejected/body.hbs`
- `apps/server/src/plugins/vendor-application/vendor-application.events.ts`
- `apps/server/src/plugins/vendor-application/vendor-application.service.ts`
- `apps/server/src/config/email-handlers.ts`


## Wave 24 — Seller Application Email Handlers (2026-03-12)

### Scope
- Agent 1: HTML Email Template `vendor-application-received/body.hbs` (1 file)
- Agent 4: Event generation, integration into Service, Event handlers (3 files)

### Result: ✅ PASS
- Build: clean
- Pushed: `71505ec` on `main`

### Files Added/Modified
- `apps/server/src/email-templates/vendor-application-received/body.hbs`
- `apps/server/src/plugins/vendor-application/vendor-application.events.ts`
- `apps/server/src/plugins/vendor-application/vendor-application.service.ts`
- `apps/server/src/config/email-handlers.ts`


## Wave 23 — Vendure 3.6 Upgrade & Product Search Mappings (2026-03-12)

**Commit:** `99dd1dc` (plan & results) on `main`
**Inspector verdict:** ✅ PASS

### Scope
| Agent | Task | Status |
|---|---|---|
| Agent 1 | Upgrade `@vendure/*` packages to `^3.6.4` to enable `customProductMappings` in Search | ✅ Complete (with Inspector fixes) |
| Agent 2 | Consume `fulfillmentType`, `sellerName`, and `condition` in search cards | ✅ Complete |
| Agent 3 | Add Google OAuth credentials to `.env.example`s | ✅ Complete |
| Agent 4 | Add `fulfillmentType`, `sellerName`, and `condition` to `DefaultSearchPlugin` custom mappings | ✅ Complete |

### Results
- **Agent 1:** Upgraded all Vendure packages from `^3.5.5` to `^3.6.4` in `apps/server/package.json`. Inspector fixed a preview version (`3.6.0-minor-202603120302`) to ensure stability. Build succeeds.
- **Agent 2:** Updated `PRODUCT_CARD_FRAGMENT` in `fragments.ts` to query `condition` and `fulfillmentType`. `ProductCard.astro` leverages them as intended and gracefully handles null values.
- **Agent 3:** Documented `GOOGLE_CLIENT_ID` in `apps/server/.env.example` and `PUBLIC_GOOGLE_CLIENT_ID` in `apps/storefront/.env.example` successfully.
- **Agent 4:** Added `customProductMappings` and `customProductVariantMappings` logic successfully in `apps/server/src/vendure-config.ts` without introducing TS errors, mapping condition & fulfillment logic from `customFields`.

### Files Modified
- `apps/server/package.json`
- `apps/server/src/vendure-config.ts`
- `apps/storefront/src/lib/fragments.ts`
- `apps/storefront/src/components/product/ProductCard.astro`
- `apps/server/.env.example`
- `apps/storefront/.env.example`

## Wave 22 — Seller Settings Persistence & Hydration (2026-03-12)

**Commit:** `f7e7252` (plan), `647d3bc` (results) on `main`
**Inspector verdict:** ✅ PASS

### Scope
| Agent | Task | Status |
|---|---|---|
| Agent 1 | Wire Storefront Identity and Location settings to `UpdateSeller` Admin API mutation (1 file) | ✅ Complete |
| Agent 2 | Add `flatShippingRate` & `freeShippingThreshold` custom fields to `Seller` entity (1 file) | ✅ Complete |
| Agent 3 | Wire Shipping form to `UpdateSeller` Admin API mutation (1 file) | ✅ Complete |
| Agent 4 | Pre-populate Storefront & Shipping forms on load via GraphQL query (2 files) | ✅ Complete |

### Results
- **Agent 1:** Wired Identity and Location forms in `storefront.astro` to submit `UpdateSeller` mutation successfully with real user values via FormData extraction.
- **Agent 2:** Added nullable `flatShippingRate` and `freeShippingThreshold` custom `int` fields to the `Seller` entity configuration in `vendure-config.ts`.
- **Agent 3:** Wired shipping settings in `shipping.astro`. Properly parses decimals from input and converts them into integer cents (`Math.round()` prior to submit) for the Vendure `UpdateSeller` operation, replacing blanks with `null`.
- **Agent 4:** Added dynamic pre-population fetching script to `storefront.astro` and `shipping.astro`. Maps variables smoothly back from cents to numbers formatted correctly `.toFixed(2)` for the monetary inputs. 

### Files Added/Modified
- `apps/storefront/src/pages/seller/storefront.astro`
- `apps/server/src/vendure-config.ts`
- `apps/storefront/src/pages/seller/shipping.astro`

## Wave 21 — Token Cleanup + CI Modernization + Email Bug Fix (2026-03-11)

**Commit:** `7fbdb51` (plan), `75cb04b` (results) on `main`
**Inspector verdict:** ⚠️ PASS WITH FIXES

### Scope
| Agent | Task | Status |
|---|---|---|
| Agent 1 | Remove unnecessary CSS fallbacks for `--color-*` tokens (7 files) | ✅ Complete (with Inspector fixes) |
| Agent 2 | Hardcoded `border-radius: 9999px` → `var(--md-sys-shape-full)` (7 files) | ✅ Complete |
| Agent 3 | Update GitHub Actions deploy.yml Node.js version 20 → 22 (1 file) | ✅ Complete |
| Agent 4 | Fix EmailPlugin template path bug + create `.env.example` (2 files) | ✅ Complete |

### Results
- **Agent 1:** Removed unnecessary inline fallbacks for `--color-info`, `--color-warning`, `--color-success`, and `--md-sys-color-error`. The Inspector found and fixed missed replacements in multiple files (`account/index.astro`, `account/orders/*`, `seller/orders/*`, `seller/products/index.astro`, `order/lookup.astro`, `account/settings.astro`, `seller/dashboard.astro`).
- **Agent 2:** Standardized 8 instances of `border-radius: 9999px` to use `var(--md-sys-shape-full)` across 7 non-component page files.
- **Agent 3:** Bumped `node-version: 20` to `22` in `deploy.yml` to avoid upcoming deprecations.
- **Agent 4:** Fixed a critical path resolution bug in `vendure-config.ts` where the EmailPlugin looked for `dist/src/email-templates` instead of `src/email-templates`. Created an `.env.example` mapping out all necessary environment variables for the backend.
- **Builds:** Both Astro frontend and Vendure backend compiled successfully with 0 errors.

### Files Added/Modified
- `apps/storefront/src/pages/seller/orders/[code].astro`
- `apps/storefront/src/pages/seller/orders/index.astro`
- `apps/storefront/src/pages/account/index.astro`
- `apps/storefront/src/pages/account/orders/[code].astro`
- `apps/storefront/src/pages/account/orders/index.astro`
- `apps/storefront/src/pages/seller/pickup-locations.astro`
- `apps/storefront/src/pages/seller/shipping.astro`
- `apps/storefront/src/pages/account/verify.astro`
- `apps/storefront/src/pages/seller/products/index.astro`
- `apps/storefront/src/pages/order/lookup.astro`
- `apps/storefront/src/pages/account/settings.astro`
- `apps/storefront/src/pages/seller/dashboard.astro`
- `apps/storefront/src/pages/seller/plan.astro`
- `apps/storefront/src/components/search/SearchOverlay.astro`
- `.github/workflows/deploy.yml`
- `apps/server/src/vendure-config.ts`
- `apps/server/.env.example`

## Wave 20 — Design Token Compliance + Stripe Peer Dep Fix (2026-03-11)

**Commit:** `700d15d`, `98cf620` on `main`
**Inspector verdict:** ⚠️ PASS WITH FIXES

### Scope
| Agent | Task | Status |
|---|---|---|
| Agent 1 | Hardcoded `rgba()` cleanup — seller dashboard + orders (4 files) | ✅ Complete |
| Agent 2 | Hardcoded `rgba()` cleanup — auth + buyer account (4 files) | ✅ Complete |
| Agent 3 | Hardcoded `rgba()` cleanup — product pages, pickup, misc (3 files) | ✅ Complete |
| Agent 4 | Downgrade `stripe` from `^17.7.0` to `^13.3.0` (1 file) | ✅ Complete |

### Results
- **Agent 1:** Replaced 16 `rgba()` values across `dashboard.astro`, `orders/index.astro`, `orders/[code].astro`, `products/index.astro` with `color-mix(in srgb, ...)` using design tokens.
- **Agent 2:** Replaced 18 `rgba()` values across `login.astro`, `register.astro`, `account/index.astro`, `auth/google/callback.astro` with `color-mix()` tokens.
- **Agent 3:** Replaced 7 `rgba()` values across `pickup-locations.astro`, `products/new.astro`, `products/[id]/edit.astro`. `plan.astro` and `sell.astro` were already clean.
- **Agent 4:** Downgraded `stripe` to `^13.3.0` in `apps/server/package.json`. Only file importing stripe (`stripe-connect.service.ts`) uses APIs identical across v13/v17. `tsc --noEmit` clean.

### Inspector Fixes
- Agent 3 missed several `rgba()` occurrences in assigned files — Inspector ran a sweep and fixed remaining instances
- Full codebase `rgba()` audit: migrated leftover hardcoded theme colors in 15 additional files
- Remaining `rgba(0, 0, 0, ...)` and `rgba(255, 255, 255, ...)` for shadows/overlays reviewed and deliberately left as acceptable
- Frontend build: 0 errors

### Modified Files
- `apps/storefront/src/pages/seller/dashboard.astro`
- `apps/storefront/src/pages/seller/orders/index.astro`
- `apps/storefront/src/pages/seller/orders/[code].astro`
- `apps/storefront/src/pages/seller/products/index.astro`
- `apps/storefront/src/pages/login.astro`
- `apps/storefront/src/pages/register.astro`
- `apps/storefront/src/pages/account/index.astro`
- `apps/storefront/src/pages/auth/google/callback.astro`
- `apps/storefront/src/pages/seller/pickup-locations.astro`
- `apps/storefront/src/pages/seller/products/new.astro`
- `apps/storefront/src/pages/seller/products/[id]/edit.astro`
- `apps/storefront/src/pages/sell.astro` (inspector sweep)
- `apps/storefront/src/pages/seller/plan.astro` (inspector sweep)
- `apps/storefront/src/pages/account/verify.astro` (inspector sweep)
- `apps/storefront/src/pages/account/settings.astro` (inspector sweep)
- `apps/storefront/src/pages/account/reset-password.astro` (inspector sweep)
- `apps/storefront/src/pages/account/orders/index.astro` (inspector sweep)
- `apps/storefront/src/pages/account/orders/[code].astro` (inspector sweep)
- `apps/storefront/src/pages/order/[code]/confirmation.astro` (inspector sweep)
- `apps/storefront/src/pages/order/lookup.astro` (inspector sweep)
- `apps/storefront/src/pages/product/[slug].astro` (inspector sweep)
- `apps/storefront/src/pages/roadmap.astro` (inspector sweep)
- `apps/storefront/src/components/checkout/AddressSection.astro` (inspector sweep)
- `apps/storefront/src/components/checkout/PaymentSection.astro` (inspector sweep)
- `apps/server/package.json` (stripe downgrade)

### Notes
- `--color-warning` and `--color-info` tokens not yet in `tokens.css` — agents used inline fallbacks (`var(--color-warning, #E65100)`, `var(--color-info, #1565C0)`)
- Stripe v13 API is compatible with existing `stripe-connect.service.ts` code (uses `accounts.create`, `accounts.retrieve`, `accountLinks.create`)
- This resolves issue_notes.md issue #7 (hardcoded rgba colors)
- Infrastructure backlog item "Fix Stripe peer dependency mismatch" is now resolved

---

## Wave 19 — Bug Fixes, Search UX Upgrade, Search Plugin Config (2026-03-11)

**Commit:** `2235142` on `main`
**Inspector verdict:** ⚠️ PASS WITH FIXES

### Scope
| Agent | Task | Status |
|---|---|---|
| Agent 1 | Fix Sign Out button color (remove error-red `.btn-secondary` override) + fix Member Since stat icon (blue → primary) | ✅ Complete |
| Agent 2 | Fix comparison table scroll-hint gradient (outer wrapper) + wire ProductCard condition from `customProductMappings` | ✅ Complete |
| Agent 3 | Create search overlay modal + wire into Header search button | ✅ Complete |
| Agent 4 | Configure `DefaultSearchPlugin.init()` with `customProductMappings` | ⚠️ Partial |

### Results
- **Agent 1:** Removed local `.btn-secondary` override in `settings.astro`; Sign Out button now uses global design tokens. Updated all three stat-icon classes in `account/index.astro` to use `color-mix(in srgb, var(--md-sys-color-primary) 10%, transparent)` instead of hardcoded rgba values.
- **Agent 2:** Wrapped comparison table in `.comparison__table-outer` div so `::after` gradient stays fixed during horizontal scroll. Wired ProductCard to read condition/fulfillmentType/sellerName from `customProductMappings` with fallback defaults.
- **Agent 3:** Created `SearchOverlay.astro` — full-screen Material Design search modal with live debounced search (300ms), focus trapping, keyboard navigation, Escape to close, backdrop click to close, "View all results →" link. Header search icon now opens overlay instead of navigating to `/search`.
- **Agent 4:** Added explicit `DefaultSearchPlugin.init()` with `indexStockStatus: true`. **BLOCKER:** `customProductMappings` and `customProductVariantMappings` are NOT supported in `@vendure/core@3.5.5` — the feature requires a later version (likely v3.6+). Config is included as commented-out code ready for upgrade.

### Inspector Fixes
- Replaced hardcoded `box-shadow` in `SearchOverlay.astro` with `var(--elevation-4)` token

### Modified Files
- `apps/storefront/src/pages/account/settings.astro`
- `apps/storefront/src/pages/account/index.astro`
- `apps/storefront/src/components/landing/ComparisonSection.astro`
- `apps/storefront/src/components/product/ProductCard.astro`
- `apps/storefront/src/components/search/SearchOverlay.astro` (NEW)
- `apps/storefront/src/components/Header.astro`
- `apps/server/src/vendure-config.ts`

### Notes
- The `@vendure/core` package needs upgrading from `^3.3.1` (resolves to 3.5.5) to 3.6+ to unlock `customProductMappings`. Add this to backlog.
- The `/search` page still works independently — the overlay is an enhancement, not a replacement.
- ProductCard condition/fulfillmentType will show fallback defaults until the Vendure version is upgraded and search index is rebuilt.

---

## Wave 18 — Backend Fixes + Frontend Polish (2026-03-11)

### Scope
- Agent 1: Wire condition filter on shop page + add condition/fulfillmentType to product fragments (2 files)
- Agent 2: Fulfillment type display at checkout + confirmation page fulfillment section (2 files)
- Agent 3: Footer order lookup link (1 file)
- Agent 4: Add `condition` custom field to ProductVariant + expose Stripe Connect on Shop API (4 files)

### Results
- **Inspector verdict:** ✅ PASS WITH FIXES
- Inspector fixed hardcoded colors in `FulfillmentSection.astro` `.form-error` class (hex → `color-mix()` with design tokens)
- Frontend: 0 errors, 0 warnings
- Backend: clean `tsc --noEmit`
- **Commit:** `0a791da`

### Files Modified
- `apps/storefront/src/lib/fragments.ts` — added `customProductMappings { condition }` to PRODUCT_CARD_FRAGMENT, `condition` to PRODUCT_DETAIL_FRAGMENT variants
- `apps/storefront/src/pages/shop/index.astro` — reads `?condition=` param, client-side filtering, passes `currentConditions` to FilterBar
- `apps/storefront/src/components/checkout/FulfillmentSection.astro` — fulfillment type detection (digital/pickup/shipping), type-specific icons, smart price labels, accessibility focus states
- `apps/storefront/src/pages/order/[code]/confirmation.astro` — fulfillment section with type detection, GraphQL query extended with shippingLines + fulfillments
- `apps/storefront/src/components/Footer.astro` — added Order Lookup link in Company column
- `apps/server/src/vendure-config.ts` — added `condition` custom field to ProductVariant
- `apps/server/src/plugins/stripe-connect/api-extensions.ts` — added `shopApiExtensions` export
- `apps/server/src/plugins/stripe-connect/stripe-connect.resolver.ts` — added `StripeConnectShopResolver` for Shop API
- `apps/server/src/plugins/stripe-connect/stripe-connect.plugin.ts` — registered shop API extensions + resolver

### Notes
- Condition filtering is client-side because Vendure search doesn't support `customFieldFilters`. Requires backend `customProductMappings` config for `condition` to be indexed.
- ProductCard still hardcodes `condition = 'New'` — needs future wave to read from search result `customProductMappings`.
- Fulfillment type detection is heuristic (checks name/code for "digital", "pickup" keywords). Defaults to shipping.
- Stripe Connect Shop API only exposes the query, not the `generateStripeConnectLink` mutation (admin-only).

---

## Wave 17 — Stripe Dashboard + Contact Seller + Condition Filter (2026-03-11)

### Scope
- Agent 1: Wire Stripe Connect status to seller dashboard onboarding checklist + payout stat card (2 files)
- Agent 2: Contact Seller mailto button on SellerInfo + pass props from PDP (2 files)
- Agent 3: Condition filter checkboxes on FilterBar + rewrite guest order lookup to actually work (2 files)

### Results
- **Inspector verdict:** ✅ PASS WITH FIXES
- Inspector fixed hardcoded colors in `order/lookup.astro` (error box, status badges → `color-mix()`)
- Inspector added missing `:focus-visible` states to buttons in `order/lookup.astro`
- Frontend: 0 errors, 0 warnings
- **Commit:** `63ac2af`

### Files Modified
- `apps/storefront/src/lib/seller-payouts.ts` — `getStripeConnectStatus()` wired to real GraphQL query
- `apps/storefront/src/pages/seller/dashboard.astro` — 3-state Stripe checklist + connected badge
- `apps/storefront/src/components/product/SellerInfo.astro` — Contact Seller mailto button
- `apps/storefront/src/pages/product/[slug].astro` — passes productName/productUrl to SellerInfo
- `apps/storefront/src/components/shop/FilterBar.astro` — static Condition checkbox filter
- `apps/storefront/src/pages/order/lookup.astro` — rewritten to query orderByCode + email verification

### Notes
- Stripe status query goes to Shop API but the resolver is on Admin API — gracefully falls back to "disconnected". Backend fix needed to expose on Shop API.
- Condition filter stores params in URL but doesn't filter server-side yet (shop page doesn't read `?condition` param). Needs future wiring when Vendure Condition facet is configured.
- Order lookup was rewritten from a simple redirect to actual inline API query with email verification + detailed results display.

---

## Wave 16 — V1 Gap Close: Impact Pass (2026-03-11)

### Scope
- Agent 1: Guest checkout — guest banner on checkout.astro + guest callout on order confirmation (2 files modified)
- Agent 2: Product condition field — condition dropdown on seller new/edit forms + wire ConditionBadge to real data (3 files modified)
- Agent 3: Favorites remove wiring + seller shipping settings page (1 modified, 1 new)

### Results
- **Inspector verdict:** ✅ PASS WITH FIXES
- Inspector fixed hardcoded colors in edit.astro, confirmation.astro, new.astro, favorites.astro (replaced with design tokens using `color-mix`)
- Inspector added `'shipping'` to SellerLayout.astro activePage type union + sidebar nav link (build fix)
- Frontend: 0 errors, 0 warnings (11 hints)
- **Commit:** `9235b86`

### Files Added/Modified
- `apps/storefront/src/pages/checkout.astro` — guest banner
- `apps/storefront/src/pages/order/[code]/confirmation.astro` — guest callout
- `apps/storefront/src/pages/seller/products/new.astro` — condition dropdown
- `apps/storefront/src/pages/seller/products/[id]/edit.astro` — condition dropdown (pre-populated)
- `apps/storefront/src/components/product/ProductInfo.astro` — ConditionBadge wired to real data
- `apps/storefront/src/pages/account/favorites.astro` — remove button wired with mutation
- `apps/storefront/src/pages/seller/shipping.astro` — NEW: seller shipping settings page
- `apps/storefront/src/layouts/SellerLayout.astro` — added 'shipping' to activePage type + sidebar link (Inspector fix)

### Notes
- Guest checkout was 90% already built — AddressSection.astro already called setCustomerForOrder. Wave 16 just added UX banners.
- Shipping settings form is client-side only (shows success toast but doesn't persist). Backend mutation needed in future wave.
- Favorites removal uses updateCustomer mutation with customFields.favoriteProductIds.

---

## Wave 15 — V1 Gap Close: Report Listing, Seller Filters, Category Nav, Stripe Status (2026-03-11)

### Scope
- Agent 1: "Report This Listing" button + modal on product detail page (1 file)
- Agent 2: Seller product filter tabs JS wiring + "Save as Draft" button (2 files)
- Agent 3: Shop `CategoryNav.astro` sidebar/chips component (2 files — 1 new, 1 modified)
- Agent 4: Stripe Connect `stripeConnectStatus` query — backend (3 files)

### Results
- **Inspector verdict:** ✅ PASS WITH FIXES
- Inspector fixed TypeScript errors in Agent 2's work (`item.style.display` casting, `requestSubmit` null check)
- Frontend: 0 errors, 0 warnings (11 hints)
- Backend: clean `tsc --noEmit`
- **Commit:** `f6bc048`

### Infrastructure Added This Wave
- `.agents/skills/backend-worker.md` — Backend worker skill for Vendure-specific patterns
- `.agents/prompts/agent-4.md` — 4th agent slot (backend)
- `.agents/state/board.md` — Community board for agent self-assignment
- `.agents/workflows/agent.md` — `/agent` workflow for auto-claiming tasks
- Updated `manager.md`, `worker.md`, `inspector.md`, `multi-agent-setup.md` with backend + board awareness

## Wave 14 — Launch Readiness: OG Image, Load More, Order Tracking (2026-03-11)

### Scope
- Agent 1: Generate branded OG default image (1 file)
- Agent 2: Pagination component + shop/search wiring (3 files)
- Agent 3: Buyer order fulfillment/tracking display (2 files)

### Result: ⚠️ PASS WITH FIXES
- Inspector: ✅ PASS — 0 errors, build clean
- Manual fix: Replaced traditional page-number pagination with "Load More" button (user preference)
- Manual fix: Regenerated OG image using actual brand logo from logo kit
- Build: clean (0 errors)
- Pushed: `c54915e` on `main`

### Files Added/Modified
- `apps/storefront/public/assets/og-default.png` (new — branded OG image)
- `apps/storefront/src/components/shop/Pagination.astro` (new — "Load More" component)
- `apps/storefront/src/pages/shop/index.astro` (mod — wired Load More)
- `apps/storefront/src/pages/search.astro` (mod — wired Load More)
- `apps/storefront/src/pages/account/orders/[code].astro` (mod — fulfillment tracking section)
- `apps/storefront/src/lib/auth.ts` (mod — added fulfillment fields to order query)

## Wave 13 — Pre-Launch Polish (2026-03-11)

### Scope
- Agent 1: OG/Twitter meta tags in BaseLayout + custom 404 page
- Agent 2: "Learn more →" links on /sell Who Sells cards → 5 persona pages
- Agent 3: Sort dropdown wiring + price filter on `/shop` and `/search` pages

### Results
- Agent 1: ✅ COMPLETE — 6 OG tags + 4 Twitter tags + optional `image` prop + branded 404 page
- Agent 2: ✅ COMPLETE — 5 links added (all except Digital creators which has no persona page)
- Agent 3: ✅ COMPLETE — Sort & price filter on shop/search, URL param driven, mobile responsive
- Inspector: ✅ PASS — 0 errors, 0 warnings, build passed
- Build: clean (typecheck + build both passed)

### Files Added
- `apps/storefront/src/pages/404.astro`

### Files Modified
- `apps/storefront/src/layouts/BaseLayout.astro` (OG/Twitter meta tags)
- `apps/storefront/src/pages/sell.astro` (persona links on Who Sells cards)
- `apps/storefront/src/lib/queries.ts` (sort + priceRange params on SEARCH_PRODUCTS)
- `apps/storefront/src/components/shop/FilterBar.astro` (wired sort, added price filter)
- `apps/storefront/src/pages/shop/index.astro` (SSR sort/price, FilterBar props)
- `apps/storefront/src/pages/search.astro` (FilterBar integration, sort/price params)

### Follow-up
- Create `/public/assets/og-default.png` (1200×630px) for social sharing
- Verify `PriceRangeInput` and `SearchResultSortParameter` Vendure types at runtime


## Wave 12 — Seller Persona Landing Pages (2026-03-11)

### Scope
- Agent 1: Boutiques (`/sell/boutiques`), Closet Resale (`/sell/closet`), Church Bookstores (`/sell/churches`) — 3 new pages
- Agent 2: Missions Fundraisers (`/sell/missions`), Youth Camp Stores (`/sell/camp`) — 2 new pages
- Agent 3: Bakers & Local Sellers (`/sell/local`), Crafters & Handmade Sellers (`/sell/handmade`) — 2 new pages

### Result: ⚠️ PASS WITH FIXES
- Inspector: fixed mobile media query padding on `missions.astro` and `camp.astro`
- A follow-up CSS refactor ensured `local.astro` also had consistent mobile padding
- Build: clean (typecheck + build both passed)
- Pushed: `474fb6d` on `main`

### Files Added
- `apps/storefront/src/pages/sell/boutiques.astro` (created)
- `apps/storefront/src/pages/sell/closet.astro` (created)
- `apps/storefront/src/pages/sell/churches.astro` (created)
- `apps/storefront/src/pages/sell/missions.astro` (created)
- `apps/storefront/src/pages/sell/camp.astro` (created)
- `apps/storefront/src/pages/sell/local.astro` (created)
- `apps/storefront/src/pages/sell/handmade.astro` (created)

### Notes
- All 7 pages use BEM naming with unique prefixes (`bp-`, `cl-`, `ch-`, `ms-`, `cp-`, `lp-`, `hm-`) to avoid CSS collisions
- All CTAs link to `/sell#sell-form-heading` (existing application form)
- Copy sourced verbatim from `project-specifications/01-*` through `07-*` spec files
- FAQ sections use native `<details>/<summary>` for accessible accordions (no JS)
- Mobile-first responsive with `@media (min-width: 768px)` breakpoint

---

## Wave 10B — Seller Image Upload (2026-03-11)

### Scope
- Agent 1: Frontend utility for GraphQL multipart uploads to `createAssets` + Seller Storefront settings logo/banner upload UI.
- Agent 2: Product Image upload fieldset in "Add New Product" form.

### Result: ⚠️ PASS WITH FIXES
- Inspector: fixed hardcoded CSS colors and a broken import path
- Build: clean
- Pushed: `659533e` on `main`

### Files Added/Modified
- `apps/storefront/src/lib/seller-assets.ts` (created)
- `apps/storefront/src/pages/seller/storefront.astro` (modified)
- `apps/storefront/src/pages/seller/products/new.astro` (modified)

### Notes
- Uses GraphQL multipart request spec for native Vendure Asset creation.
- Image IDs attached correctly via `UpdateSeller` and `CreateProduct` mutations.

---## Wave 11 — Homepage Redesign + Sell Page Polish (2026-03-11)

### Scope
- Agent 1: Hero CTAs + WhatIsSection + ValuePropSection (6 cards) + index.astro restructure (4 files)
- Agent 2: SellerTypesSection (6 cards) + HowItWorksSection + BuyerSection (3 new files)
- Agent 3: ComparisonSection + TrustSection + FAQSection + FinalCTASection (4 new files)
- Manager: Sell page polish — pricing restructure, How It Works merge (5→4 steps), social media removal, 6th Who Sells card, copy fixes

### Result: ⚠️ PASS WITH FIXES
- Inspector: fixed section order in index.astro (TrustSection before ComparisonSection)
- Manager: post-wave fixes to sell.astro (pricing layout, steps merge, copy updates) and WhatIsSection.astro (social media removal)
- Build: clean
- Pushed: `6b8d69f` on `main`

### Files Added/Modified
- `apps/storefront/src/pages/index.astro` (modified — removed CategorySection/NewArrivals, added 10 new sections)
- `apps/storefront/src/components/landing/HeroSection.astro` (modified — waitlist form → dual CTAs)
- `apps/storefront/src/components/landing/ValuePropSection.astro` (modified — 4→6 benefit cards)
- `apps/storefront/src/components/landing/WhatIsSection.astro` (created — marketplace explainer)
- `apps/storefront/src/components/landing/SellerTypesSection.astro` (created — 6 seller persona cards)
- `apps/storefront/src/components/landing/HowItWorksSection.astro` (created — 4-step process)
- `apps/storefront/src/components/landing/BuyerSection.astro` (created — buyer value prop)
- `apps/storefront/src/components/landing/ComparisonSection.astro` (created — vs Etsy/Shopify/FB)
- `apps/storefront/src/components/landing/TrustSection.astro` (created — trust messaging)
- `apps/storefront/src/components/landing/FAQSection.astro` (created — 7 FAQs)
- `apps/storefront/src/components/landing/FinalCTASection.astro` (created — dark CTA block)
- `apps/storefront/src/pages/sell.astro` (modified — pricing restructure, 4 steps, 6 Who Sells cards, copy fixes)
- `apps/storefront/src/components/landing/WhatIsSection.astro` (modified — removed social media reference)
- `apps/storefront/src/components/Header.astro` (modified — mobile icon cleanup)
- `apps/storefront/src/components/Footer.astro` (modified — mobile icon cleanup)
- `apps/storefront/src/components/search/SearchResults.astro` (modified — search fix)
- `apps/storefront/src/components/shop/FilterBar.astro` (modified — search fix)
- `apps/storefront/src/pages/search.astro` (modified — search fix)

### Notes
- Homepage now has 10 marketing sections optimized for conversion
- Sell page pricing leads with $45.75 hero amount (most compelling info first)
- Social media references removed from all copy per brand guidelines
- All project specification files committed (00-homepage through 07-crafters-handmade)

---


## Wave 9B — Mobile Responsiveness + Error State Fixes (2026-03-11)

### Scope
- Agent 1: Header + BottomNav navigation fixes (double-line bug, touch targets)
- Agent 2: Homepage landing components mobile polish
- Agent 3: Auth pages mobile + inline error states
- Agent 4: Cart + Checkout pages mobile polish
- Agent 5: Sell page mobile polish + form error states

### Result: ✅ PASS
- Inspector: Minor CSS fixes applied to AddressSection for checkout red borders on invalid states.
- Build: clean
- Pushed: pending

---

## Wave 10A — Stripe Live Payments (2026-03-11)

### Scope
- Agent 1: Stripe Payment Element integration in PaymentSection (1 modified)
- Agent 2: Stripe.js CDN in BaseLayout + checkout data injection (2 modified)

### Result: ✅ PASS
- Inspector: all checklist items green, no fixes required
- Build: clean (typecheck + build both passed)

### Files Modified
- `apps/storefront/src/components/checkout/PaymentSection.astro` (rewritten — full Stripe Payment Element integration)
- `apps/storefront/src/layouts/BaseLayout.astro` (modified — added Stripe.js CDN script)
- `apps/storefront/src/pages/checkout.astro` (modified — added `define:vars` block for Stripe PK + order code)

### Notes
- PaymentSection now creates a real payment intent via `createStripePaymentIntent` mutation
- Stripe Elements mounted with appearance tokens matching design system
- `any` types on Stripe vars intentional (no `@stripe/stripe-js` types — per scoping rules)
- Requires `PUBLIC_STRIPE_PUBLISHABLE_KEY` env var to function
- ECONNREFUSED during build is pre-existing (Vendure not running during CI)

---

## Wave 9A — Content Pages, Polish & Public Roadmap (2026-03-11)

### Scope
- Agent 1: Public `/roadmap` page with localStorage-based feature voting (1 new)
- Agent 2: Full `/sell` page rewrite with marketing content from spec (1 modified)
- Agent 3: New `/shop-on-apostolic-shop` buyer marketing page + CategorySection CSS fix (1 new, 1 modified)

### Result: ✅ PASS
- Inspector: fixed typecheck error in roadmap.astro, replaced hardcoded colors in sell.astro error banner, plus bonus fixes to BottomNav/search/dashboard token compliance
- Build: clean (typecheck + build both passed)
- Pushed: `c73c765` on `main`

### Files Added/Modified
- `apps/storefront/src/pages/roadmap.astro` (created — V1–V4 feature roadmap with voting)
- `apps/storefront/src/pages/sell.astro` (rewritten — 10 marketing sections + preserved form JS)
- `apps/storefront/src/pages/shop-on-apostolic-shop.astro` (created — 8-section buyer marketing page)
- `apps/storefront/src/components/home/CategorySection.astro` (modified — CSS token fix)
- `apps/storefront/src/components/BottomNav.astro` (modified — iOS safe area fix by Inspector)
- `apps/storefront/src/pages/search.astro` (modified — padding + token fix by Inspector)
- `apps/storefront/src/components/search/SearchResults.astro` (modified — token fix by Inspector)
- `apps/storefront/src/pages/seller/dashboard.astro` (modified — token fix by Inspector)

### Notes
- Roadmap page sources features from `project-specifications/apostolic-shop-feature-roadmap.md`
- Sell page preserves existing `submitVendorApplication` mutation + all form IDs/JS verbatim
- 3 new spec files also committed: `apostolic-shop-feature-roadmap.md`, `sell-on-apostolic-shop.md`, `shop-on-apostolic-shop.md`
- Inspector went beyond scope with bonus token fixes — changes are all correct (hardcoded hex → design tokens)

---

## Wave 8A — Buyer Service Fee Surcharge (2026-03-11)

### Scope
- Agent 1: Create `buyer-fee-order-process.ts` (OrderProcess with auto-surcharge at ArrangingPayment) + wire into `vendure-config.ts` (1 created, 1 modified)
- Agent 2: Update `GET_ACTIVE_ORDER` query to fetch surcharges + update `ReviewSection.astro` to display real surcharges (2 modified)

### Result: ✅ PASS
- Inspector: all checklist items green, no fixes required
- Build: clean (typecheck + build both passed)

### Files Added/Modified
- `apps/server/src/config/buyer-fee-order-process.ts` (created)
- `apps/server/src/vendure-config.ts` (modified — added buyerFeeOrderProcess to orderOptions.process)
- `apps/storefront/src/lib/queries.ts` (modified — added surcharges fields to GET_ACTIVE_ORDER)
- `apps/storefront/src/components/checkout/ReviewSection.astro` (modified — dynamic surcharge display replacing hardcoded fee)

### Notes
- Surcharge is 5% of `order.subTotalWithTax`, SKU `BUYER-SERVICE-FEE`, with `listPriceIncludesTax: true` and `taxRate: 0`
- Duplicate surcharge prevention via SKU check before adding
- Agent 1 fixed Vendure 3 API discrepancies from the prompt (injector pattern, removeSurchargeFromOrder args)
- Surcharges added inline in GET_ACTIVE_ORDER query (not in ORDER_FRAGMENT — other queries won't return surcharges yet)

---

## Wave 7A — Bug Fixes & Fee Restructure (2026-03-10)

### Scope
- Agent 1: Sell page CSS fix (success state showing by default) + success copy update + jewelry reference check (1 file)
- Agent 2: Flat 5% seller fee — replaced 8%/5% tiered model (1 file)
- Agent 3: Buyer 5% service fee display in checkout ReviewSection (1 file)

### Result: ✅ PASS
- Inspector: all checklist items green, no fixes required
- Build: clean (typecheck + build both passed)

### Files Modified
- `apps/storefront/src/pages/sell.astro`
- `apps/server/src/config/multivendor-order-seller-strategy.ts`
- `apps/storefront/src/components/checkout/ReviewSection.astro`

### Notes
- Sell page success div CSS `.sell-success { display: flex }` was overriding the HTML `hidden` attribute — fixed with `.sell-success[hidden] { display: none }`
- Platform fee changed from tiered (8% free / 5% pro) to flat 5% for all sellers
- Buyer service fee (5%) shown in checkout summary — actual Vendure Surcharge is future work

---

## Wave 6A — Role Detection Wiring (2026-03-10)

### Scope
- Agent 1: Customer `role` custom field + GraphQL query update + auth helper update (3 files)
- Agent 2: VendorApplication approval hook to set Customer role to `'seller'` (1 file)

### Result: ⚠️ PASS WITH FIXES
- Inspector: removed obsolete TODO comment from `getCustomerRole` docstring
- Build: clean (typecheck + build both passed)

### Files Modified
- `apps/server/src/vendure-config.ts` (added `role` custom field to Customer)
- `apps/storefront/src/lib/queries.ts` (added `customFields { role }` to GET_ACTIVE_CUSTOMER)
- `apps/storefront/src/lib/auth.ts` (updated ActiveCustomer interface + getCustomerRole)
- `apps/server/src/plugins/vendor-application/vendor-application.service.ts` (added setCustomerRole on approve)

### Notes
- Role detection reads `customer.customFields.role` — defaults to 'buyer'
- VendorApplication `approve()` sets the Customer's role to 'seller' if they have an account
- Admin detection via role field (set manually or via env var comparison)

---

## Wave 5C — Login Redirects, Seller Migration & Bug Fixes (2026-03-10)

### Scope
- Agent 1: Login redirect logic + account/redirect.astro + Header logo size fix (3 files)
- Agent 2: Seller page migration to SellerLayout (dashboard, orders, storefront, payouts) + /sell bug fix (5 files)
- Agent 3: Remaining seller page migrations (products, products/new, plan, pickup-locations) (4 files)

### Result: ⚠️ PASS WITH FIXES
- Inspector corrected Agent 1 omissions
- Build: clean after fixes

### Files Added/Modified
- `apps/storefront/src/pages/account/redirect.astro` (created)
- `apps/storefront/src/lib/auth.ts` (modified — added getRoleRedirect, getCustomerRole)
- `apps/storefront/src/components/Header.astro` (modified — Logo size="lg")
- `apps/storefront/src/pages/seller/dashboard.astro` (modified — uses SellerLayout)
- `apps/storefront/src/pages/seller/orders/index.astro` (modified — uses SellerLayout)
- `apps/storefront/src/pages/seller/storefront.astro` (modified — uses SellerLayout)
- `apps/storefront/src/pages/seller/payouts.astro` (modified — uses SellerLayout)
- `apps/storefront/src/pages/seller/products/index.astro` (modified — uses SellerLayout)
- `apps/storefront/src/pages/seller/products/new.astro` (modified — uses SellerLayout)
- `apps/storefront/src/pages/seller/plan.astro` (modified — uses SellerLayout)
- `apps/storefront/src/pages/seller/pickup-locations.astro` (modified — uses SellerLayout)

---

## Wave 5B — Navigation Overhaul (2026-03-10)

### Scope
- Agent 1: Header component update — Logo size, UserMenu integration, mobile menu (1 file)
- Agent 2: BottomNav component — persistent mobile bottom navigation (1 file)
- Agent 3: Footer update — navigation columns, Logo size="lg" (1 file)

### Result: ✅ PASS
- Build: clean (typecheck + build both passed)

### Files Added/Modified
- `apps/storefront/src/components/Header.astro` (modified)
- `apps/storefront/src/components/BottomNav.astro` (created)
- `apps/storefront/src/components/Footer.astro` (modified)

---

## Wave 5A — Core Infrastructure (2026-03-10)

### Scope
- Agent 1: Auth middleware for role-based routing (1 file)
- Agent 2: SellerLayout component — shared sidebar layout for all seller pages (1 file)
- Agent 3: UserMenu component — dropdown with role-appropriate links (1 file)

### Result: ✅ PASS
- Build: clean (typecheck + build both passed)

### Files Added/Modified
- `apps/storefront/src/middleware/auth.ts` (created)
- `apps/storefront/src/layouts/SellerLayout.astro` (created)
- `apps/storefront/src/components/UserMenu.astro` (created)

---

## Wave 4D — Payout History + Pro Plan UI (2026-03-10)

### Scope
- Agent 1: Seller payouts page (`/seller/payouts`) — Stripe Connect CTA + payout history
- Agent 2: Seller plan page (`/seller/plan`) — Free vs Pro comparison + upgrade CTA
- Agent 3: Seller payouts helper library (`seller-payouts.ts`) — v1 stubs

### Result: ✅ PASS
- Inspector: all checklist items green, no fixes required
- Build: clean (typecheck + build both passed)

### Files Added
- `apps/storefront/src/pages/seller/payouts.astro`
- `apps/storefront/src/pages/seller/plan.astro`
- `apps/storefront/src/lib/seller-payouts.ts`

### Notes
- Payouts page shows Stripe Connect CTA for v1 (payout history hidden until Stripe wired)
- Plan upgrade uses `mailto:` for v1 (Stripe Billing subscription is future work)
- All stubs are well-documented with TODO comments

---

## Wave 4C — Static Pages + Seed Data (2026-03-10)

### Scope
- Agent 1: About, Terms of Service, Privacy Policy (3 new static pages)
- Agent 2: Marketplace Standards, Help/FAQ, Contact (3 new static pages)
- Agent 3: Seed data script (collections, facets, countries, shipping methods)

### Result: ✅ PASS
- Inspector: all checklist items green, no fixes required
- Build: clean (typecheck + build both passed)

### Files Added
- `apps/storefront/src/pages/about.astro`
- `apps/storefront/src/pages/terms.astro`
- `apps/storefront/src/pages/privacy.astro`
- `apps/storefront/src/pages/standards.astro`
- `apps/storefront/src/pages/help.astro`
- `apps/storefront/src/pages/contact.astro`
- `apps/server/src/config/seed-data.ts`

### Notes
- All footer links now resolve to real pages
- Terms + Privacy ready for Google OAuth verification submission
- Contact form uses `mailto:` for v1 (no server-side processing)
- Seed data exports `initialData` + `facetDefinitions` for use with Vendure populate

---

## Wave 4B — Digital Fulfillment + Email (2026-03-10)

### Scope
- Agent 1: Digital Fulfillment Plugin — handler + auto-fulfill on PaymentSettled (3 files)
- Agent 2: 5 v1-critical email handlers + Handlebars templates (6 files)
- Manager: Wired `DigitalFulfillmentPlugin` + `emailHandlers` into `vendure-config.ts`

### Result: ⚠️ PASS WITH FIXES
- Inspector fixed Vendure 3 type compatibility in digital-fulfillment handler/plugin (OrderLineInput shape, OnApplicationBootstrap removal, OrderService usage)
- Build: clean after fixes

### Files Added/Modified
- `apps/server/src/plugins/digital-fulfillment/digital-fulfillment.handler.ts` (created, fixed)
- `apps/server/src/plugins/digital-fulfillment/digital-fulfillment.plugin.ts` (created, fixed)
- `apps/server/src/plugins/digital-fulfillment/index.ts` (created)
- `apps/server/src/config/email-handlers.ts` (created)
- `apps/server/src/email-templates/order-confirmation/body.hbs` (created)
- `apps/server/src/email-templates/item-shipped/body.hbs` (created)
- `apps/server/src/email-templates/email-verification/body.hbs` (created)
- `apps/server/src/email-templates/password-reset/body.hbs` (created)
- `apps/server/src/email-templates/new-order-seller/body.hbs` (created)
- `apps/server/src/vendure-config.ts` (modified — added plugin + email handlers)

### Notes
- Seller email in new-order-seller handler uses buyer email as placeholder (TODO: resolve from Channel → Seller)
- Email templates use inline styles (email client compatibility)
- Digital auto-fulfillment transitions: PaymentSettled → create fulfillment → Shipped → Delivered

---

## Wave 4A — Local Pickup Plugin (2026-03-10)

### Scope
- Agent 1: Local Pickup Plugin backend — PickupLocation entity, service, resolvers, API extensions, fulfillment handler, plugin registration (5 new + 1 modified)
- Agent 2: Seller pickup locations management page (`/seller/pickup-locations`) — CRUD UI (1 new)
- Agent 3: Seller pickup helper library (`src/lib/seller-pickup.ts`) — Admin API wrapper (1 new)
- Manager: Wired `LocalPickupPlugin` into `vendure-config.ts`

### Result: ✅ PASS
- Inspector: all checklist items green, no fixes required
- Build: clean (typecheck + build both passed)

### Files Added/Modified
- `apps/server/src/plugins/local-pickup/pickup-location.entity.ts` (created)
- `apps/server/src/plugins/local-pickup/local-pickup.service.ts` (created)
- `apps/server/src/plugins/local-pickup/api-extensions.ts` (created)
- `apps/server/src/plugins/local-pickup/local-pickup.resolver.ts` (created)
- `apps/server/src/plugins/local-pickup/pickup-fulfillment.handler.ts` (created)
- `apps/server/src/plugins/local-pickup/index.ts` (modified — stub → full plugin)
- `apps/storefront/src/pages/seller/pickup-locations.astro` (created)
- `apps/storefront/src/lib/seller-pickup.ts` (created)
- `apps/server/src/vendure-config.ts` (modified — added LocalPickupPlugin import + registration)

### Notes
- Custom fields (`fulfillmentType`, `pickupLocationId`, `isPickup`) were already in config from Wave 0A
- TypeORM migration needed to create `pickup_location` table (auto-sync handles dev)
- sellerId hardcoded to "1" in pickup-locations.astro client JS — needs auth scoping later

---

## Wave 3E — Seller Order Management (2026-03-10)

### Scope
- Agent 1: Seller orders helper library (`src/lib/seller-orders.ts`) — Admin API queries/mutations for order listing, detail, fulfillment (1 file)
- Agent 2: Order detail page (`/seller/orders/[code]`) — view order info, items, customer, shipping, fulfillment actions (1 file)
- Agent 3: Wire orders list page to real Admin API data + filter tabs + fulfill redirect (1 modified)

### Result: ⚠️ PASS WITH FIXES
- Inspector fixed TS casting for `currencyCode` in `index.astro`, added explicit types to script context, cleaned up unused variable in `[code].astro`
- Build: clean (typecheck + build both passed)

### Files Added/Modified
- `apps/storefront/src/lib/seller-orders.ts` (created)
- `apps/storefront/src/pages/seller/orders/[code].astro` (created, then fixed)
- `apps/storefront/src/pages/seller/orders/index.astro` (modified — wired to real Admin API data, then fixed)

### Notes
- All seller order pages use Vendure Admin API, scoped to the seller's Channel
- Fulfillment on list page redirects to detail page where actual mutation lives
- `getDisplayStatus()` maps Vendure states (PaymentSettled, Shipped, etc.) to user-friendly names (Pending, Shipped, Completed)

---

## Wave 3D — Product Listing CRUD (2026-03-10)

### Scope
- Agent 1: Seller product helper library (`src/lib/seller-products.ts`) — Admin API queries/mutations for product CRUD (1 file)
- Agent 2: Add Product page (`/seller/products/new`) — form for creating a new product (1 file)
- Agent 3: Edit Product page (`/seller/products/[id]/edit`) + wired products list page to real data (1 created, 1 modified)

### Result: ⚠️ PASS WITH FIXES
- Inspector fixed generic `Promise<any>` return types in `seller-products.ts` → `Promise<SellerProduct['variants'][0] | null>`
- Build: clean (typecheck + build both passed)

### Files Added/Modified
- `apps/storefront/src/lib/seller-products.ts` (created, then fixed)
- `apps/storefront/src/pages/seller/products/new.astro` (created)
- `apps/storefront/src/pages/seller/products/[id]/edit.astro` (created)
- `apps/storefront/src/pages/seller/products/index.astro` (modified — wired to real Admin API data)

### Notes
- All seller product pages use Vendure Admin API (not Shop API), scoped to seller's Channel
- No image upload in this wave — will be addressed in a future wave if needed
- Admin API auth for sellers assumed via `credentials: 'include'` on client-side mutations

---

## Wave 3B — Seller Application & Dashboard (2026-03-10)

### Scope
- Agent 1: `/sell` public application page
- Agent 2: `/seller/dashboard` & `/seller/storefront` settings page
- Agent 3: `/seller/products` & `/seller/orders` list scaffolding

### Result: ✅ PASS
- Build: clean (typecheck + build passed)
- Pushed: `e56739b` on `main`

### Files Added/Modified
- `apps/storefront/src/pages/sell.astro` (created)
- `apps/storefront/src/pages/seller/dashboard.astro` (created)
- `apps/storefront/src/pages/seller/storefront.astro` (created)
- `apps/storefront/src/pages/seller/products/index.astro` (created)
- `apps/storefront/src/pages/seller/orders/index.astro` (created)

### Notes
- Combined planned Waves 3B and 3C logic
- All seller pages implement standard auth guards + sidebars
- `/sell` handles form parsing to API nicely
- No actual store creation UI tied back yet, but mutation `submitVendorApplication` is fully integrated.

---

## Wave 3A — Auth + Buyer Account (2026-03-10)

### Scope
- Agent 1: Google Auth plugin + frontend auth library (3 create, 2 modify = 5 files)
- Agent 2: Login, Register, Verify, Reset Password, Google Callback pages (5 files)
- Agent 3: Account Dashboard, Order History, Order Detail, Favorites, Settings pages (5 files)

### Result: ✅ PASS
- Build: clean (typecheck + build both passed)
- Pushed: `3cae115` on `main`

### Files Added/Modified
- `apps/server/src/plugins/google-auth/google-auth.strategy.ts` (created)
- `apps/server/src/plugins/google-auth/google-auth.plugin.ts` (created)
- `apps/storefront/src/lib/auth.ts` (created)
- `apps/server/src/vendure-config.ts` (modified — added GoogleAuthPlugin)
- `apps/storefront/src/env.d.ts` (modified — added PUBLIC_GOOGLE_CLIENT_ID)
- `apps/storefront/src/pages/login.astro` (created)
- `apps/storefront/src/pages/register.astro` (created)
- `apps/storefront/src/pages/account/verify.astro` (created)
- `apps/storefront/src/pages/account/reset-password.astro` (created)
- `apps/storefront/src/pages/auth/google/callback.astro` (created)
- `apps/storefront/src/pages/account/index.astro` (created)
- `apps/storefront/src/pages/account/orders/index.astro` (created)
- `apps/storefront/src/pages/account/orders/[code].astro` (created)
- `apps/storefront/src/pages/account/favorites.astro` (created)
- `apps/storefront/src/pages/account/settings.astro` (created)

### Notes
- Google OAuth code is built but requires Google Cloud Console setup (CLIENT_ID + SECRET env vars) to be functional
- Native email/password auth works immediately via Vendure's built-in Shop API
- Favorites "Remove" button is UI-only — mutation will be wired in a later wave
- `formatDate` and `formatPrice` utilities used from `src/lib/utils.ts`

---

## Wave 2C-fix — Stripe Dep + Env Var Fix + Deploy Script (2026-03-10)

### Scope
- Agent 1: Add `stripe` dependency to server package.json (1 file)
- Agent 2: Fix env var name mismatch across storefront files (6 files)
- Agent 3: Create deploy script + production env template (2 files)

### Result: ✅ PASS
- Build: clean
- Pushed: `11418ad` on `main`
- Deployed to production

### Files Added/Modified
- `apps/server/package.json` (modified — added `stripe` dependency)
- `apps/storefront/src/lib/graphql-client.ts` (modified — env var rename)
- `apps/storefront/src/components/cart/CartItem.astro` (modified — env var rename)
- `apps/storefront/src/components/checkout/AddressSection.astro` (modified — env var rename)
- `apps/storefront/src/components/checkout/FulfillmentSection.astro` (modified — env var rename)
- `apps/storefront/src/components/checkout/PaymentSection.astro` (modified — env var rename)
- `apps/storefront/src/components/product/ProductInfo.astro` (modified — env var rename)
- `scripts/deploy.sh` (created)
- `.env.production.example` (created)

---

## Wave 2C — Cart + Checkout + Order Confirmation (2026-03-10)

### Scope
- Agent 1: Cart page — CartItem, CartSellerGroup, CartSummary, cart.astro (4 files)
- Agent 2: Checkout page — AddressSection, FulfillmentSection, PaymentSection, ReviewSection, checkout.astro (5 files)
- Agent 3: Order confirmation + lookup — order/[code]/confirmation.astro, order/lookup.astro (2 files)

### Result: ✅ PASS
- Build: clean
- Pushed to `main`

### Files Added/Modified
- `apps/storefront/src/components/cart/CartItem.astro`
- `apps/storefront/src/components/cart/CartSellerGroup.astro`
- `apps/storefront/src/components/cart/CartSummary.astro`
- `apps/storefront/src/pages/cart.astro`
- `apps/storefront/src/components/checkout/AddressSection.astro`
- `apps/storefront/src/components/checkout/FulfillmentSection.astro`
- `apps/storefront/src/components/checkout/PaymentSection.astro`
- `apps/storefront/src/components/checkout/ReviewSection.astro`
- `apps/storefront/src/pages/checkout.astro`
- `apps/storefront/src/pages/order/[code]/confirmation.astro`
- `apps/storefront/src/pages/order/lookup.astro`

---

## Wave 2B — Product Detail, Search, Vendor Storefront (2026-03-09)

### Scope
- Agent 1: Product detail page (1 file)
- Agent 2: Search results page (1 file)
- Agent 3: Vendor storefront page (1 file)

### Result: ✅ PASS
- Build: clean
- Pushed to `main`

### Files Added/Modified
- `apps/storefront/src/pages/product/[slug].astro`
- `apps/storefront/src/pages/search.astro`
- `apps/storefront/src/pages/store/[vendor-slug].astro`

---

## Wave 2A — Homepage + Browse + Product Card (2026-03-09)

### Scope
- Agent 1: Homepage (1 file)
- Agent 2: Shop All + Category pages (2 files)
- Agent 3: ProductCard component (1 file)

### Result: ✅ PASS
- Build: clean
- Pushed to `main`

### Files Added/Modified
- `apps/storefront/src/pages/index.astro`
- `apps/storefront/src/pages/shop/index.astro`
- `apps/storefront/src/pages/shop/[category].astro`
- `apps/storefront/src/components/ProductCard.astro`

---

## Wave 1C — Stripe Connect Integration (2026-03-08)

### Scope
- Stripe Connect Express account onboarding
- Webhook endpoint for Stripe events
- Payment testing integration

### Result: ✅ PASS

---

## Wave 1B — Vendor Application Plugin (2026-03-08)

### Scope
- VendorApplication entity
- GraphQL mutations for apply/approve/reject
- Email event integration

### Result: ✅ PASS

---

## Wave 1A — Vendure Core Config + GraphQL Client (2026-03-07)

### Scope
- Vendure configuration
- Multi-vendor Channel/Seller setup
- GraphQL client library for storefront

### Result: ✅ PASS

### Files Added/Modified
- `apps/server/src/vendure-config.ts`
- `apps/storefront/src/lib/graphql-client.ts`

---

## Wave 0C — Pre-launch Landing Page (2026-03-06)

### Scope
- Hero section, value proposition, email signup, footer

### Result: ✅ PASS

---

## Wave 0B — Driller Design System + Base Layout (2026-03-05)

### Scope
- 31 M3 Astro components in `src/components/md/`
- BaseLayout.astro
- tokens.css + global.css

### Result: ✅ PASS

---

## Wave 0A — Monorepo + Astro + Vendure Init (2026-03-04)

### Scope
- pnpm workspace monorepo setup
- Astro frontend init
- Vendure backend init
- Tailwind CSS + design tokens

### Result: ✅ PASS
