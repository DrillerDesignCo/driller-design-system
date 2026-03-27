# Waste Falcon — Site-Wide Enhancement Plan

> Generated: 2026-03-25

---

## Overview

Comprehensive enhancement plan covering: dynamic footer year, GSAP animations, M3 color expansion from brand colors, WCAG compliance, Lighthouse optimization, FAQ strategy, page summaries, and building 6 priority content pages.

---

## Task Checklist

### Phase 1 — Infrastructure & Design System
- [ ] Install GSAP via npm
- [ ] Dynamic footer year (client-side `<script>`)
- [ ] Expand M3 color token system from 3 brand colors (primary/dark/light → full tonal palettes)
- [ ] Audit & fix WCAG AA contrast ratios across all token pairings
- [ ] Remove Tailwind directives from `global.css` (not installed, causing unused imports)
- [ ] Create `PageSummary.astro` component (article TL;DR for GEO/ranking)
- [ ] Add FAQ schema fields to service & city content collection schemas
- [ ] Enhance `FAQAccordion.astro` to auto-inject FAQPage JSON-LD

### Phase 2 — GSAP Animations
- [ ] Create `gsap-init.ts` global animation setup (ScrollTrigger)
- [ ] Add fade-in / stagger animations to cards, feature grids, steps
- [ ] Add counter-up animation to proof-bar numbers
- [ ] Add subtle parallax to hero sections
- [ ] Ensure all animations respect `prefers-reduced-motion`

### Phase 3 — Content Pages (Priority 1)
- [ ] Page 1: Homepage (`index.astro`) — full rewrite per content brief
- [ ] Page 6: About (`about.astro`) — new page per content brief
- [ ] Page 2: Construction Hub — update content collection entry + template sections
- [ ] Page 3: Commercial Hub — update content collection entry + template sections
- [ ] Page 4: CS × Construction city page — update content collection entry
- [ ] Page 5: CS × Commercial city page — update content collection entry

### Phase 4 — Cross-Cutting Enhancements
- [ ] Add phone number display component (for consistent `tel:` link formatting)
- [ ] Audit every page for FAQ sections (add where natural)
- [ ] Add `PageSummary` to all hub and city pages
- [ ] Update `Hero.astro` to support phone CTA variant

### Phase 5 — Verification
- [ ] Lighthouse audit (Performance, Accessibility, Best Practices, SEO — target 100)
- [ ] WCAG AA contrast check on all text/background combinations
- [ ] `astro check` — zero type errors
- [ ] `astro build` — clean production build
- [ ] Manual browser review of all 6 priority pages

### Phase 6 — Documentation
- [ ] Run `/update-codemaps` workflow
- [ ] Run `/update-docs` workflow

---

## Proposed Changes

### Infrastructure — Design Tokens & Dependencies

#### [MODIFY] `package.json`
- Add `gsap` as a dependency (`npm install gsap`)

#### [MODIFY] `src/styles/tokens.css`
- Expand M3 color system with full tonal palette derived from 3 brand colors:
  - **Primary** `#0081ca` → P10–P99 tonal range
  - **Secondary** derived from dark `#032b4d` → S10–S99
  - **Tertiary** complementary tone (amber/warm) for visual contrast
  - **Neutral** / **Neutral Variant** for surfaces, text, outlines
- All values hand-tuned for WCAG AA (4.5:1 body text, 3:1 large text / UI)
- Keep existing `--color-primary`, `--color-dark`, `--color-light` as backward-compatible aliases

#### [MODIFY] `src/styles/md/md-tokens.css`
- Map expanded tonal tokens into M3 `--md-sys-color-*` variables
- Add `--md-sys-color-tertiary`, `--md-sys-color-on-tertiary`, `--md-sys-color-tertiary-container`

#### [MODIFY] `src/styles/global.css`
- **Remove** `@tailwind base/components/utilities` directives (Tailwind not installed)

---

### Infrastructure — Layout & Components

#### [MODIFY] `src/layouts/BaseLayout.astro`
- Add client-side `<script>` for dynamic footer year
- Add GSAP import via `<script>` (module import from node_modules)
- Add `prefers-reduced-motion` media query to disable GSAP when appropriate

#### [NEW] `src/components/PageSummary.astro`
- Article summary / TL;DR component for top of content pages
- Props: `summary: string`, `keywords?: string[]`
- Styled as a subtle surface card with M3 tokens
- Placed below breadcrumbs, above main content on hub and city pages

#### [MODIFY] `src/components/Hero.astro`
- Add optional `phone?: boolean` prop to show phone number inline
- When true, renders phone as a clickable `tel:` link with Material Symbol `call` icon

#### [MODIFY] `src/components/FAQAccordion.astro`
- Add automatic FAQPage JSON-LD generation from items array
- Inject `<script type="application/ld+json">` directly in component output

#### [NEW] `src/components/PhoneCTA.astro`
- Reusable phone number display: `<a href="tel:...">` with `call` icon

---

### GSAP Animations

#### [NEW] `src/scripts/gsap-init.ts`
- Import gsap + ScrollTrigger (tree-shakeable)
- Check `prefers-reduced-motion` — skip all animations if enabled
- Utility functions: `fadeUp()`, `staggerCards()`, `counterUp()`
- All animations use `data-animate` attributes

---

## Content Briefs — Priority 1 (6 Pages)

### Copy Checklist — Every Page
- One H1 (contains primary keyword naturally)
- 3–5 H2 sections minimum
- Primary keyword in first 100 words
- Phone number `(877) 779-2783` at least once
- One clear CTA per scroll screen
- Mention at least 2 nearby cities (internal link opportunities)
- 300+ words minimum (500–800 ideal for hubs, 400–600 for city pages)

---

### Page 1 — Homepage

| Field | Value |
|-------|-------|
| URL | `/` |
| Intent | 🟡 Mixed — navigational + commercial investigation |
| Primary Keyword | dumpster rental college station |
| Secondary | dumpster rental near me, roll-off dumpster rental, construction dumpster rental |
| LSI | waste management, debris removal, Brazos Valley, same-day delivery |
| Target Length | 600–900 words |

#### H-Tag Structure
```
H1: Dumpster Rental in College Station & Bryan, TX
  H2: Our Services (overview cards linking to 4 hubs)
    H3: Construction Dumpster Rental
    H3: Commercial Dumpster Rental
    H3: Roll-Off Dumpster Rental
    H3: Demolition Services
  H2: Why Choose Waste Falcon
  H2: Areas We Serve
  H2: How It Works (3-step process)
  H2: Ready to Rent a Dumpster? (CTA)
```

#### Section Guide
| Section | What to Write | Tips |
|---------|---------------|------|
| Hero | Bold headline + value prop + CTA + phone | Lead with primary keyword |
| Services | 2–3 sentences per pillar + link to hub | Action language: "We deliver," "We haul" |
| Why Choose Us | 3–5 differentiators | Include Caleb's name for E-E-A-T |
| Areas We Serve | Tier 1 + Tier 2 cities as linked text | Builds topical authority |
| How It Works | Call/Book → Deliver → Pick Up | Keep dead simple |
| CTA | Phone + "Get a Free Quote" | Urgency: "Same-day delivery available" |

#### Auto-Injected: LocalBusiness + Organization + WebSite JSON-LD, OG tags, sitelinks markup

---

### Page 2 — Construction Dumpster Rental Hub

| Field | Value |
|-------|-------|
| URL | `/services/construction-dumpster-rental/` |
| Intent | 🔴 Commercial — ready to rent |
| Primary Keyword | construction dumpster rental |
| Secondary | construction debris dumpster, roofing dumpster rental, contractor dumpster |
| LSI | job site, roll-off container, new construction, remodel, tear-off |
| Target Length | 600–800 words |

#### H-Tag Structure
```
H1: Construction Dumpster Rental
  H2: Built for Construction Professionals
  H2: What Goes in a Construction Dumpster
  H2: Available Sizes
    H3: 10 Yard | H3: 20 Yard | H3: 30 Yard | H3: 40 Yard
  H2: How Our Service Works
  H2: Areas We Serve (link to city pages)
  H2: FAQ
  H2: Get a Construction Dumpster Today (CTA)
```

#### Auto-Injected: Service schema, FAQPage schema, BreadcrumbList

---

### Page 3 — Commercial Dumpster Rental Hub

| Field | Value |
|-------|-------|
| URL | `/services/commercial-dumpster-rental/` |
| Intent | 🔴 Commercial — B2B, high lifetime value |
| Primary Keyword | commercial dumpster rental |
| Secondary | business dumpster rental, warehouse dumpster, ongoing dumpster service |
| LSI | scheduled pickup, monthly service, permanent dumpster, waste contract |
| Target Length | 600–800 words |

#### H-Tag Structure
```
H1: Commercial Dumpster Rental
  H2: Ongoing Waste Service for Your Business
  H2: Industries We Serve
    H3: Warehouses & Distribution
    H3: Construction Company HQs
    H3: Apartment Complexes & Property Management
    H3: Restaurants & Retail
  H2: How Commercial Service Works
  H2: Why Businesses Choose Waste Falcon
  H2: Service Areas (city links)
  H2: FAQ
  H2: Set Up Your Commercial Account (CTA)
```

#### Auto-Injected: Service schema, FAQPage schema, BreadcrumbList

---

### Page 4 — Construction Dumpster Rental in College Station

| Field | Value |
|-------|-------|
| URL | `/services/construction-dumpster-rental/college-station/` |
| Intent | 🔴 Transactional — ready to buy, local |
| Primary Keyword | construction dumpster rental college station |
| Secondary | construction dumpster college station tx, roofing dumpster college station |
| LSI | Texas A&M, University Drive, Highway 6, Rock Prairie, Brazos County |
| Target Length | 400–600 words |

#### H-Tag Structure
```
H1: Construction Dumpster Rental in College Station, TX
  H2: Construction Projects We Support
  H2: Why College Station Contractors Choose Waste Falcon
  H2: Serving All of College Station (+ nearby Tier 3)
  H2: Get a Dumpster Delivered Today (CTA)
```

> **TIP**: Localize aggressively. Mention specific roads, neighborhoods, landmarks.

#### Auto-Injected: Service + areaServed, LocalBusiness, BreadcrumbList, cross-links

---

### Page 5 — Commercial Dumpster Rental in College Station

| Field | Value |
|-------|-------|
| URL | `/services/commercial-dumpster-rental/college-station/` |
| Intent | 🔴 Transactional — B2B buyer, local |
| Primary Keyword | commercial dumpster rental college station |
| Secondary | business dumpster college station, warehouse dumpster rental college station tx |
| LSI | Texas A&M, student housing, move-out, Northgate, retail |
| Target Length | 400–600 words |

#### H-Tag Structure
```
H1: Commercial Dumpster Rental in College Station, TX
  H2: Businesses We Serve in College Station
  H2: How Our Commercial Service Works
  H2: College Station Commercial Advantages
  H2: Set Up Your Commercial Account (CTA)
```

#### Auto-Injected: Service + areaServed, LocalBusiness, BreadcrumbList, cross-links

---

### Page 6 — About / Caleb Barnett

| Field | Value |
|-------|-------|
| URL | `/about/` |
| Intent | 🟢 Informational / Trust |
| Primary Keyword | waste falcon about, caleb barnett waste falcon |
| Secondary | dumpster rental company college station, local waste management company |
| LSI | owner, family-owned, Brazos Valley, experience, BCS Junk Removal |
| Target Length | 500–700 words |

#### H-Tag Structure
```
H1: About Waste Falcon
  H2: Meet Caleb Barnett — Owner & Operator
  H2: Our Story
  H2: What Makes Us Different
  H2: Our Sister Company — BCS Junk Removal
  H2: Certifications & Credentials
  H2: Ready to Work With Us? (CTA)
```

> **IMPORTANT**: This page is the E-E-A-T foundation. Google uses Person schema to build entity authority. The more specific and verifiable the credentials, the stronger every other page ranks.

#### Auto-Injected: Person schema, Organization schema (both companies), headshot

---

## Quick Reference — All 6 Pages

| # | Page | Intent | Primary Keyword | Words |
|---|------|--------|-----------------|-------|
| 1 | Homepage | Mixed | dumpster rental college station | 600–900 |
| 2 | Construction Hub | Commercial | construction dumpster rental | 600–800 |
| 3 | Commercial Hub | Commercial | commercial dumpster rental | 600–800 |
| 4 | CS × Construction | Transactional | construction dumpster rental college station | 400–600 |
| 5 | CS × Commercial | Transactional | commercial dumpster rental college station | 400–600 |
| 6 | About | Trust/Info | caleb barnett waste falcon | 500–700 |

> **Start with #1 (Homepage) and #6 (About)** — these power every other page.

---

## Approved Copy

All finalized copy lives in `docs/copy/`. Each file contains the full page copy, H-tag structure, strategic notes, SEO alignment details, and open items for Caleb.

| # | Page | Copy File | Status | Words |
|---|------|-----------|--------|-------|
| 1 | Homepage | [`homepage-v2.md`](copy/homepage-v2.md) | ✅ v2 approved | ~820 |
| 2 | Construction Hub | [`construction-hub-v1.md`](copy/construction-hub-v1.md) | ✅ v1 approved | ~750 |
| 3 | Commercial Hub | [`commercial-hub-v1.md`](copy/commercial-hub-v1.md) | ✅ v1 approved | ~780 |
| 4 | CS × Construction | — | ❌ Not yet written | — |
| 5 | CS × Commercial | [`commercial-college-station-v1.md`](copy/commercial-college-station-v1.md) | ✅ v1 approved | ~530 |
| 6 | About | [`about-v1.md`](copy/about-v1.md) | ✅ v1 approved | ~650 |

### URL Structure Decision Needed

The original briefs used `/services/...` URLs. The copy files use `/dumpster-rental/...` URLs per the Notion IA. **Confirm which URL structure before building:**

| Page | Brief URL | Copy URL (Notion IA) |
|------|-----------|---------------------|
| Construction Hub | `/services/construction-dumpster-rental/` | `/dumpster-rental/construction/` |
| Commercial Hub | `/services/commercial-dumpster-rental/` | `/dumpster-rental/commercial/` |
| CS × Construction | `/services/construction-dumpster-rental/college-station/` | `/dumpster-rental/construction/college-station/` |
| CS × Commercial | `/services/commercial-dumpster-rental/college-station/` | `/dumpster-rental/commercial/college-station/` |

### Open Items From Caleb (Across All Pages)

| Priority | Item | Affects |
|----------|------|---------|
| 🔴 | Personal bio — 1-2 sentences (how he got started, why BCS) | About |
| 🔴 | Dimensions & weight limits per dumpster size (L×W×H, max tonnage) | Construction Hub |
| 🔴 | Does he offer monthly flat-rate commercial accounts? | Commercial Hub, CS × Commercial |
| 🔴 | Does he service apartment complexes during move-out season? | Commercial Hub, CS × Commercial |
| 🟡 | Does he accept concrete/heavy demo debris? | Construction Hub |
| 🟡 | Volume pricing / recurring schedule discounts — real offer? | Construction Hub, Commercial Hub |
| 🟡 | Multi-property management billing capability | Commercial Hub |
| 🟡 | Certifications / permits / licenses beyond "licensed & insured" | About |
| 🟡 | Confirm BCS Junk Removal URL (bcsjunkremoval.com) | All pages |
| 🟡 | Confirm booking URL (book.wastefalcon.com) | All pages |
| 🟢 | Hard stat: jobs completed, tons hauled, dumpsters delivered | Homepage, About |
| 🟢 | Any existing commercial clients (even anonymized) | Commercial Hub |
| 🟢 | Community involvement details | About |

---

## Google Reviews — Sorted & Assigned

Full analysis: [`reviews-sorted.md`](copy/reviews-sorted.md)

**91 total reviews · 5-star rating · 1 negative outlier (pre-Caleb ownership)**

### Distribution by Category

| Category | Count | % |
|----------|-------|---|
| Construction / Renovation | 8 | 9% |
| Junk Removal / Cleanout | 8 | 9% |
| Commercial / Recurring | 3 | 3% |
| Demolition | 0 | 0% |
| HOA / Community | 1 | 1% |
| General (with quotes) | 38 | 42% |
| General (rating only) | 14 | 15% |

### Testimonials Assigned Per Page

**Homepage (proof bar / social proof section):**
- Vernon Wilkerson: *"exceeded my expectations"*
- Justin Thompson: *"beat several other companies on price by over a hundred dollars"*
- Danielle Lyon: *"our go-to in College Station—5 stars"*

**Construction Hub:**
- JUMUN CONSTRUCTION: *"reliable, responsive, and professional"*
- Todd Chapman: *"bathroom and kitchen floor tear out"*
- Linda Roberts: *"remodeled our kitchen…arrived on time"*

**Commercial Hub:**
- Liana Trevino: *"Awesome every time!!"* (recurring customer)
- Joshua Kelley: *"Worked with my company"* (B2B)

**About Page (trust / empathy):**
- Amber Paul: *"most professional people I've ever worked with"*
- Erin King: *"Caleb was incredible from start to finish"*
- Rene Crawford: *"even gave us a great deal once they heard the reason"*

### Review Gaps

| Gap | Impact | Action |
|-----|--------|--------|
| 🔴 Zero demolition reviews | No social proof for demo services | Ask Caleb to request reviews after demo jobs |
| 🔴 Zero property mgmt / apartment reviews | Commercial page claims unsupported | Priority review request for any commercial accounts |
| 🟡 No reviews mention dumpster sizes | Can't reinforce size pages | Ask satisfied customers to mention size |
| 🟡 No reviews mention move-out season | Key commercial angle has no proof | Target property managers for reviews in May/Aug |

---

## Verification Plan

1. `npx astro check` — zero type errors
2. `npm run build` — clean production build
3. Lighthouse audit: Performance ≥ 95, Accessibility = 100, Best Practices = 100, SEO = 100
4. WCAG AA contrast check on all text/background combinations
5. Visual inspection: footer year, GSAP animations, FAQ accordions, phone links, M3 icons
6. Content review against briefs (user)
7. Testimonials on each page match the assigned reviews above

---

## Open Questions

1. **Tertiary color** — derive warm amber/gold from blue primary, or specific third brand color?
2. **Caleb headshot** — photo available for `/public/`, or use placeholder?
3. **Stub pages** — briefs reference `/dumpster-sizes/`, `/pricing/`, `/areas-served/`, `/contact/` — create stubs now or separate task?
