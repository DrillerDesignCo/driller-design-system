<!-- Generated: 2026-03-27 | Files scanned: 65 | Token estimate: ~500 -->

# Data

## Overview

Fully static site — **no database, no CMS, no API**. All data is compile-time. Content is now managed via **Astro Content Collections** with Zod schemas.

## Data Sources

### Brand Config (`src/config/brand.ts`)

Single source of truth for all site identity. Exports `brand` as `const`.

| Field | Type | Example |
|-------|------|---------|
| `name` | string | "Waste Falcon" |
| `tagline` | string | "Fast. Reliable. Clean." |
| `location` | string | "Brazos County, TX" |
| `description` | string | SEO meta description |
| `url` | string | "https://wastefalcon.com" |
| `colors` | object | primary, dark, light, accentText, error, success, info, warning |
| `fonts` | object | display, body, serif (all Poppins) |
| `contact` | object | phone, email |
| `nav` | array | `[{ label, href }]` — 4 items |
| `cta` | object | primary `{ label, href }`, secondary `{ label, href }` |
| `social` | object | facebook, google, instagram, linkedin |
| `legal` | array | `[{ label, href }]` — 2 items |

### Content Collections (`src/content.config.ts`)

#### Services (6 entries)

| Slug | Type |
|------|------|
| `apartment-move-out-dumpsters` | service |
| `commercial-dumpster-rental` | service |
| `construction-dumpster-rental` | service |
| `demolition` | service |
| `ongoing-commercial-contracts` | service |
| `roll-off-dumpster-rental` | service |

Schema: `title, description, slug, type (primary|secondary), icon, keywords[], heroHeadline, heroDescription, ogImage, order, parentHub`

#### Cities (8 entries)

| City | Service |
|------|---------|
| Bryan | Commercial Dumpster Rental |
| College Station | Commercial Dumpster Rental |
| Hearne | Commercial Dumpster Rental |
| Navasota | Commercial Dumpster Rental |
| Bryan | Construction Dumpster Rental |
| College Station | Construction Dumpster Rental |
| Hearne | Construction Dumpster Rental |
| Navasota | Construction Dumpster Rental |

Schema: `title, description, city, state, county, tier (1|2|3), serviceSlug, serviceName, keywords[], nearbyTier3[], ogImage`

#### Blog (defined, no entries yet)

Schema: `title, description, publishDate, updatedDate, author, keywords[], ogImage, draft`

### JSON-LD Structured Data (`src/config/schema.ts`)

Factory functions for SEO structured data:

| Function | Schema.org Type |
|----------|----------------|
| `organizationSchema()` | LocalBusiness |
| `personSchema()` | Person |
| `webSiteSchema()` | WebSite |
| `serviceSchema(opts)` | Service |
| `breadcrumbSchema(items)` | BreadcrumbList |
| `articleSchema(opts)` | Article |
| `faqSchema(items)` | FAQPage |

### Inline Data

- **FAQ items** — hardcoded in page frontmatter (index: 6 items, apply: 4 items)
- **Pricing tiers** — hardcoded in `src/pages/index.astro` (3 tiers)
