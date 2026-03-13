# Shared Context

> **Updated by the Manager** before deploying workers. Workers **read only** — do not modify this file.
>
> This file gives workers awareness of what exists in the project so they can use existing code rather than recreating it.

---

## Available Utilities & Helpers

| Module | Path | Key Exports |
|---|---|---|
| GraphQL Client | `apps/storefront/src/lib/graphql-client.ts` | `shopQuery()`, `shopMutation()` — typed fetch wrappers for Vendure Shop API |
| Asset URL Helper | `apps/storefront/src/lib/utils.ts` | `getAssetUrl()` — resolves Vendure asset URLs |

---

## Available Components

### Driller Design System (31 M3 components at `src/components/md/`)

| Component | Import Path | Key Props |
|---|---|---|
| Button | `../components/md/Button.astro` | `variant` (filled, outlined, text, elevated, filled-tonal) |
| Card | `../components/md/Card.astro` | `variant` (elevated, filled, outlined) |
| TextField | `../components/md/TextField.astro` | `variant` (filled, outlined), `label`, `type` |
| Icon | `../components/md/Icon.astro` | `name` (Material Symbols name) |
| FAB | `../components/md/FAB.astro` | `variant` (surface, primary, secondary, tertiary), `label`, `icon` |
| Checkbox | `../components/md/Checkbox.astro` | `checked`, `label` |
| Radio | `../components/md/Radio.astro` | `name`, `value`, `checked` |
| Switch | `../components/md/Switch.astro` | `checked`, `label` |
| Chip | `../components/md/Chip.astro` | `variant` (assist, filter, input, suggestion), `label` |
| Dialog | `../components/md/Dialog.astro` | `open`, `title` |
| Tabs | `../components/md/Tabs.astro` | `variant` (primary, secondary), `tabs[]` |

> **Do NOT recreate these components.** Import and use them.

### Project Components

| Component | Path | Props |
|---|---|---|
| BaseLayout | `../layouts/BaseLayout.astro` | `title`, `description` |
| ProductCard | `../components/ProductCard.astro` | `product` (Vendure product object) |
| Logo | `../components/Logo.astro` | — |
| Header | `../components/Header.astro` | — |
| Footer | `../components/Footer.astro` | — |

---

## Established Patterns

| Pattern | Example File | Notes |
|---|---|---|
| Page data fetching | `src/pages/shop/index.astro` | Use `shopQuery()` in frontmatter, pass to components |
| Scoped styles | All `.astro` files | `<style>` block at bottom with scoped CSS using design tokens |
| Design tokens | `src/styles/tokens.css` | All colors via `var(--md-sys-color-*)`, spacing via `var(--spacing-*)` |
| Component composition | `src/pages/cart.astro` | Import sub-components, compose in page layout |

---

## Known Gotchas

- `astro build` alone does NOT catch type errors — always run `astro check` first
- Vendure asset URLs need to go through `getAssetUrl()` for proper resolution
- Playfair (not Playfair Display) is only for the "APOSTOLIC" wordmark — never for headings
- Patung font is only for the "Shop" text in the logo — never for UI elements

---

## API / Data Layer

| Name | Path / Endpoint | Description |
|---|---|---|
| Shop API | Vendure GraphQL at `/shop-api` | Buyer-facing: products, collections, orders, cart |
| Admin API | Vendure GraphQL at `/admin-api` | Seller/admin-facing: manage products, orders, settings |
| GraphQL Client | `src/lib/graphql-client.ts` | `shopQuery(query, variables?)` — typed wrapper for Shop API |
