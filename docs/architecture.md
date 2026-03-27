<!-- Generated: 2026-03-27 | Files scanned: 65 | Token estimate: ~700 -->

# Architecture

## System Overview

Static marketing site built on **Astro 5** with a custom **Material Design 3** component library ("Driller Design System"). Zero JS by default, brand-driven via single config file. Uses **Astro Content Collections** for service and city pages.

## Data Flow

```
brand.ts (identity, colors, fonts, nav, CTAs)
  │
  ├─► BaseLayout.astro ─── injects CSS custom properties into :root
  │     ├─► <head>  meta, fonts, Material Symbols CDN
  │     ├─► <header> nav links, logo, CTA button
  │     ├─► <main>   slot → page content
  │     └─► <footer> links, legal, copyright
  │
  ├─► tokens.css ─── 3-layer token system
  │     ├─ Layer 1: Primitives  (brand colors, type scale)
  │     ├─ Layer 2: Semantic    (--bg, --text, --accent, .dark-section)
  │     └─ Layer 3: Component   (--btn-*, --container-*)
  │
  ├─► md-tokens.css ─── M3 color/shape/motion tokens for md/ components
  │
  └─► global.css ─── reset, typography classes, layout utilities, buttons, cards
        └─► imports: tokens.css, md-tokens.css, ripple.css, elevation.css, focus-ring.css

content.config.ts ─── Content Collections (Zod schemas)
  ├─► services (6 entries) → [service].astro (dynamic hub pages)
  ├─► cities (8 entries)   → [service]/[city].astro (geo landing pages)
  └─► blog (loader defined, content TBD)

schema.ts ─── JSON-LD structured data factory
  ├─► organizationSchema(), personSchema(), webSiteSchema()
  ├─► serviceSchema(), breadcrumbSchema(), articleSchema(), faqSchema()
  └─► jsonLdScript() wrapper
```

## Build Pipeline

```
astro dev / astro build
  → Astro 5 compiler
  → Content Collections resolved at build time (glob loaders)
  → getStaticPaths() generates dynamic routes
  → Static HTML + scoped CSS (zero JS unless component has <script>)
  → Output: dist/
```

## Key Directories

| Path | Purpose |
|------|---------|
| `src/config/brand.ts` | Single-file brand configuration |
| `src/config/schema.ts` | JSON-LD structured data utilities (167 lines) |
| `src/content.config.ts` | Content Collection definitions (services, cities, blog) |
| `src/content/services/` | 6 service hub markdown entries |
| `src/content/cities/` | 8 city landing page markdown entries |
| `src/layouts/` | BaseLayout (only layout) |
| `src/pages/` | Route pages (static + dynamic) |
| `src/components/` | Page components (Hero, CTABlock, FAQAccordion, Breadcrumbs) |
| `src/components/md/` | 31 Material Design 3 Astro components |
| `src/styles/` | Global CSS, 3-layer tokens |
| `src/styles/md/` | MD3 system tokens (elevation, ripple, focus-ring) |
| `public/fonts/` | Self-hosted Poppins (4 weights) |

## External Dependencies

- **Google Material Symbols** — icon font loaded via CDN
- **[StaticForms](https://staticforms.xyz)** — form submission backend for `/apply` page
- **Poppins** — self-hosted font (Regular, Medium, SemiBold, Bold)
