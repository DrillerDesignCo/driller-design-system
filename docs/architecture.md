<!-- Generated: 2026-03-27 | Files scanned: 68 | Token estimate: ~750 -->

# Architecture

## System Overview

Static marketing site built on **Astro 6** with **Tailwind CSS v4** and a custom **Material Design 3** component library ("Driller Design System"). Uses **GSAP** for scroll-triggered animations on the homepage. Brand-driven via single config file. **Astro Content Collections** power service and city pages.

## Data Flow

```
brand.ts (identity, colors, fonts, nav w/ dropdowns, footer columns, CTAs, owner, sister brand)
  │
  ├─► BaseLayout.astro ─── sticky header + dropdown nav + mobile drawer + floating card footer
  │     ├─ <head>  meta, fonts, Material Symbols CDN, dark/light favicon
  │     ├─ <header> nav with dropdown children, logo, CTA button, mobile toggle
  │     ├─ <main>   slot → page content
  │     └─ <footer> 4-col floating card (brand, services, company, areas) + watermark
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

content.config.ts ─── Content Collections (Zod schemas via astro/zod)
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
  → Astro 6 compiler + Tailwind CSS v4 (via @tailwindcss/vite plugin)
  → Content Collections resolved at build time (glob loaders)
  → getStaticPaths() generates dynamic routes
  → GSAP animations bundled as page-level <script> (homepage)
  → Static HTML + CSS (zero JS unless component has <script>)
  → Output: dist/
```

## Key Directories

| Path | Purpose |
|------|---------|
| `src/config/brand.ts` | Single-file brand config (nav dropdowns, footer columns, owner, sister brand) |
| `src/config/schema.ts` | JSON-LD structured data utilities (167 lines) |
| `src/content.config.ts` | Content Collection definitions (services, cities, blog) |
| `src/content/services/` | 6 service hub markdown entries |
| `src/content/cities/` | 8 city landing page markdown entries |
| `src/layouts/` | BaseLayout (only layout, 299 lines) |
| `src/pages/` | Route pages (index, about, apply, services/*, component-showcase) |
| `src/components/` | Page components (Hero, CTABlock, FAQAccordion, Breadcrumbs, PhoneCTA, PageSummary) |
| `src/components/md/` | 31 Material Design 3 Astro components |
| `src/styles/` | Global CSS, 3-layer tokens |
| `src/styles/md/` | MD3 system tokens (elevation, ripple, focus-ring) |
| `public/fonts/` | Self-hosted Poppins (4 weights) |

## External Dependencies

- **Google Material Symbols** — icon font loaded via CDN
- **GSAP + ScrollTrigger** — scroll-triggered animations (homepage)
- **Tailwind CSS v4** — utility classes via Vite plugin
- **Poppins** — self-hosted font (Regular, Medium, SemiBold, Bold)
