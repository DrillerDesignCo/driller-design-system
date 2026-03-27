<!-- Generated: 2026-03-27 | Files scanned: 68 | Token estimate: ~200 -->

# Backend

## Overview

**No runtime backend.** Fully static Astro 6 site with no server-side routes, APIs, or middleware. All dynamic routes are resolved at build time via `getStaticPaths()`.

## Build-Time Processing

| Step | Tool | Output |
|------|------|--------|
| Content resolution | Astro Content Collections | Markdown → HTML via glob loaders |
| Static path generation | `getStaticPaths()` | Dynamic routes for services + cities |
| CSS processing | Tailwind CSS v4 via `@tailwindcss/vite` | Utility classes compiled at build time |
| Type checking | `astro check` | TypeScript validation |
| Static build | `astro build` | HTML + CSS + JS bundles in `dist/` |
| Dev server | `astro dev` | Hot-reload file server |

## Build-Time Data Pipeline

```
src/content/services/*.md ──► getCollection('services') ──► [service].astro
src/content/cities/*.md   ──► getCollection('cities')   ──► [service]/[city].astro
src/config/brand.ts       ──► imported directly by layouts/pages/components
src/config/schema.ts      ──► JSON-LD injected as <script type="application/ld+json">
```

## Notes

- Homepage form POSTs to `/contact/` (action attribute, no handler yet)
- The `apply.astro` form has no submission handler — form backend TBD
- No SSR adapter configured (`astro.config.mjs` uses `@tailwindcss/vite` plugin only)
- Blog collection defined in `content.config.ts` but no entries exist yet
- GSAP + ScrollTrigger bundled as client-side JS on homepage only
