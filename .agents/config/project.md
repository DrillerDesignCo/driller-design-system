# Project Configuration

> **All agents reference this file** for project context — tech stack, repo structure, design system, and build commands.

---

## Project Name

Apostolic Shop

## Summary

Apostolic Shop is a multi-vendor marketplace for the Apostolic community. It supports physical products, digital products, and local pickup. Sellers apply, get approved, and list products. Buyers browse across all vendors. Payments are split via Stripe Connect. It functions as an "Apostolic Etsy" for makers/boutiques, an "Apostolic eBay/Craigslist" for individual sellers, and a simpler/cheaper alternative to Shopify for small Apostolic vendors.

---

## Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| Frontend | **Astro** | SSR/SSG hybrid, Node.js adapter, hosted on Hostinger |
| Backend | **Vendure** | Headless commerce (TypeScript, NestJS, GraphQL) |
| Database | **MySQL / MariaDB** | Via Hostinger, charset `utf8mb4` |
| Payments | **Stripe Connect** | Express accounts via Vendure StripePlugin |
| Hosting | **Hostinger Agency Plan** | Both frontend and backend |
| Design System | **Material 3 (reference)** | Custom `.astro` components, not M3 library imports |
| Styling | **Tailwind CSS** | Custom design tokens mapped to M3 roles |
| API Protocol | **GraphQL** | Vendure Shop API (buyers) + Admin API (sellers/admins) |

---

## Repository Structure

```
apostolic-shop/
├── apps/
│   ├── storefront/              # Astro frontend
│   │   ├── src/
│   │   │   ├── components/      # .astro components (M3-based)
│   │   │   │   └── md/          # 31 Driller Design System components
│   │   │   ├── layouts/         # Base layouts (BaseLayout.astro, etc.)
│   │   │   ├── pages/           # File-based routing
│   │   │   ├── styles/          # tokens.css, tailwind config
│   │   │   └── lib/             # GraphQL client, helpers
│   │   ├── public/              # Static assets, fonts
│   │   └── astro.config.mjs
│   └── server/                  # Vendure backend
│       ├── src/
│       │   ├── plugins/         # Custom Vendure plugins
│       │   │   ├── vendor-application/
│       │   │   ├── local-pickup/
│       │   │   └── sponsored-listings/
│       │   ├── config/
│       │   └── migrations/
│       └── vendure-config.ts
├── packages/
│   └── shared/                  # Shared types, constants
├── .agents/                     # Multi-agent coordination files
│   ├── config/                  # Project-specific config
│   ├── skills/                  # Generic role definitions
│   ├── prompts/                 # Ephemeral — overwritten by Manager each wave
│   ├── handoffs/                # Structured completion reports
│   ├── state/                   # Persistent state across waves
│   └── workflows/               # Human operator playbooks
├── agents.md                    # Project-wide coding standards
├── project-specifications/      # Notion-exported spec docs
├── package.json
└── turbo.json
```

---

## Design System

| Token | Value |
|---|---|
| Primary accent | `#722F37` (Deep Red) |
| Background | `#FFFFFF` (Pure White) |
| Surface variant | `#FAFAFA` (Soft White) |
| Surface / container | `#F3F1EF` (Warm Surface) |
| Border / divider | `#E4E1DE` (Light Border) |
| Primary text | `#111111` (Pure Black) |
| Secondary text | `#9B9591` (Muted Gray) |
| Display / Headline font | **Playfair Display** (self-hosted) |
| Body / UI font | **Inter** (Google Fonts) |
| Logo wordmark font | **Playfair** (self-hosted, "APOSTOLIC" only) |
| Logo script font | **Patung** (self-hosted, "Shop" only) |
| Spacing base | 4px grid |
| Corner radius (buttons/inputs) | 8px (`shape-sm`) |
| Corner radius (cards) | 12px (`shape-md`) |
| Corner radius (large) | 16px (`shape-lg`) |

**Usage ratio:** White 75–85%, Neutrals 10–20%, Deep Red 3–5%. Black is for text only.

---

## Key Documentation

| Section | Path |
|---|---|
| Strategy & Positioning | `project-specifications/Strategy & Positioning/` |
| Design System | `project-specifications/Design System/` |
| Product & Requirements | `project-specifications/Product & Requirements/` |
| Technical Architecture | `project-specifications/Technical Architecture/` |
| Operations & Policy | `project-specifications/Operations & Policy/` |
| Action Plan | `project-specifications/Action Plan & Priority List *.md` |

---

## MCP Tools (Available to All Agents)

All agents have access to the following MCP (Model Context Protocol) servers. Use these when your task can benefit from them — they extend your capabilities beyond file editing.

| MCP Server | What It Does | When to Use |
|---|---|---|
| **Vendure Docs** | Access Vendure documentation (API reference, guides) | Backend plugin work, understanding Vendure APIs, type signatures, migration patterns |
| **Stripe** | Read/write Stripe resources (customers, products, prices, subscriptions, invoices) + search Stripe docs | Payment integration, debugging Stripe issues, creating test data |
| **GitHub** | Read/write GitHub repos, issues, PRs, branches, commits | Code review, PR management, issue tracking, reading repo files |
| **Notion** | Read/write Notion pages, databases, blocks | Project documentation, spec lookup, status updates |

> ⚠️ **Do NOT use MCP tools for tasks outside your prompt scope.** Follow the same scoping rules — only use them to complete your assigned deliverables.

---

## Build & CI Commands

Run these from the project root:

| Command | Purpose | Notes |
|---|---|---|
| `pnpm run typecheck` | Typecheck | Catches type errors — run FIRST |
| `pnpm run build` | Build | Catches compile/bundle errors — run SECOND |
| `npx astro check` | Astro typecheck | Alternative: runs from `apps/storefront/` |
| `npx astro build` | Astro build | Alternative: runs from `apps/storefront/` |

> ⚠️ The Inspector runs these in order. Both typecheck AND build must pass. `astro build` alone does NOT catch type errors!

---

## Agent Activation Commands

The human operator uses these to deploy agents in separate chat windows:

| Agent | Command |
|---|---|
| Manager | Read and follow `.agents/skills/manager.md`. Project config is in `.agents/config/project.md`. |
| Agent 1 | `Read and execute c:\Users\Garrett\Documents\Apostolic Shop\.agents\prompts\agent-1.md` |
| Agent 2 | `Read and execute c:\Users\Garrett\Documents\Apostolic Shop\.agents\prompts\agent-2.md` |
| Agent 3 | `Read and execute c:\Users\Garrett\Documents\Apostolic Shop\.agents\prompts\agent-3.md` |
| Inspector | `Read and execute c:\Users\Garrett\Documents\Apostolic Shop\.agents\prompts\inspector.md` |

---

## Phased Work Plan

| Phase | Wave | Description | Status |
|---|---|---|---|
| 0 | 0A | Monorepo + Astro + Vendure init | ✅ Done |
| 0 | 0B | Driller Design System (31 M3 components) + base layout | ✅ Done |
| 0 | 0C | Pre-launch landing page (4 sections) | ✅ Done |
| 1 | 1A | Vendure core config + GraphQL client | ✅ Done |
| 1 | 1B | Vendor Application Plugin | ✅ Done |
| 1 | 1C | Stripe Connect integration | ✅ Done |
| 2 | 2A | Homepage + browse + product card | ✅ Done |
| 2 | 2B | Product detail, search, vendor storefront | ✅ Done |
| 2 | 2C | Cart + checkout + order confirmation | ✅ Done |
| 3 | 3A | Auth + buyer account | ✅ Done |
| 3 | 3B | Seller application page | ✅ Done |
| 3 | 3C | Seller dashboard + storefront setup | ✅ Done |
| 3 | 3D | Product listing CRUD | ✅ Done |
| 3 | 3E | Seller order management | ✅ Done |
| 4 | 4A | Local Pickup Plugin | ✅ Done |
| 4 | 4B | Digital fulfillment + email | ✅ Done |
| 4 | 4C | Static pages + seed data | ✅ Done |
| 4 | 4D | Payout history + Pro plan UI | ✅ Done |
| 5 | 5A | Core infrastructure (auth middleware, SellerLayout, UserMenu) | ✅ Done |
| 5 | 5B | Navigation overhaul (Header, BottomNav, Footer) | ✅ Done |
| 5 | 5C | Login redirects, seller migration, bug fixes | ✅ Done |
| 6 | 6A | Role detection wiring (Customer role field, approval hook) | ✅ Done |
| 7 | 7A | Bug fixes & fee restructure (sell page, flat 5% seller fee) | ✅ Done |
| 8 | 8A | Buyer service fee surcharge + checkout display | ✅ Done |
| 9 | 9A | Content pages (roadmap, sell rewrite, shop) + CSS polish | ✅ Done |
| 9 | 9B | Mobile responsiveness + error state fixes | ✅ Done |
| 10 | 10A | Stripe live payments (PaymentSection + payment intent) | ✅ Done |
| 10 | 10B | Seller image upload (Vendure Asset integration) | ✅ Done |
| 11 | 11 | Homepage redesign + sell page polish | ✅ Done |
| 12 | 12 | Seller persona landing pages (7 pages) | ✅ Done |
| 13 | 13 | Pre-launch polish: SEO meta tags, 404 page, sell page persona links, sort/filter | ✅ Done |
| 14 | 14 | Launch readiness: OG image, pagination, buyer order tracking | ✅ Done |
| 15 | 15 | V1 gap close: report listing, seller filters, category nav, Stripe backend | ✅ Done |
| 16 | 16 | V1 gap close: guest checkout UX, product condition, favorites, shipping | ✅ Done |
| 17 | 17 | Stripe dashboard wiring, contact seller, condition filter | ✅ Done |
| 18 | 18 | Backend fixes + frontend polish: condition field, Stripe Shop API, fulfillment display | ✅ Done |
| 19 | 19 | Bug fixes, search overlay modal, DefaultSearchPlugin config (partial — needs Vendure upgrade) | ✅ Done |
| 20 | 20 | Design token compliance (rgba→color-mix cleanup) + Stripe peer dep fix | ✅ Done |

---

## Infrastructure Backlog

| Item | Priority | Notes |
|---|---|---|
| ~~Switch CI deploy to pull-based mode~~ | ✅ Done | Fixed: installed self-hosted GitHub Actions runner on VPS (`apostolic-vps`). Deploy jobs run directly on VPS via `runs-on: self-hosted`. Uses `git reset --hard` to prevent lockfile conflicts. |
| ~~Update GitHub Actions to Node 24~~ | ✅ Done | Bumped `node-version` from 22 to 24 in `deploy.yml`. Commit `18245d2`. |
| ~~Fix Stripe peer dependency mismatch~~ | ✅ Done | Downgraded `stripe` from `^17.7.0` to `^13.3.0` in Wave 20. `tsc --noEmit` clean, API compatible. |
| ~~Set up Google OAuth credentials~~ | ✅ Done | `GOOGLE_CLIENT_ID` + `GOOGLE_CLIENT_SECRET` added to server `.env`, `PUBLIC_GOOGLE_CLIENT_ID` added to storefront `.env`. Files chmod 600, Nginx dotfile deny rules added. |

