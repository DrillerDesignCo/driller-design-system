<!-- Generated: 2026-03-27 | Files scanned: 65 | Token estimate: ~200 -->

# Backend

## Overview

**No runtime backend.** Fully static Astro site with no server-side routes, APIs, or middleware. All dynamic routes are resolved at build time via `getStaticPaths()`.

## Build-Time Processing

| Step | Tool | Output |
|------|------|--------|
| Content resolution | Astro Content Collections | Markdown → HTML via glob loaders |
| Static path generation | `getStaticPaths()` | Dynamic routes for services + cities |
| Type checking | `astro check` | TypeScript validation |
| Static build | `astro build` | HTML + CSS in `dist/` |
| Dev server | `astro dev` | Hot-reload file server |

## Build-Time Data Pipeline

```
src/content/services/*.md ──► getCollection('services') ──► [service].astro
src/content/cities/*.md   ──► getCollection('cities')   ──► [service]/[city].astro
src/config/brand.ts       ──► imported directly by layouts/pages/components
src/config/schema.ts      ──► JSON-LD injected as <script type="application/ld+json">
```

## Notes

- The `apply.astro` form has no submission handler — form backend TBD
- No SSR adapter configured (`astro.config.mjs` is empty config)
- Blog collection defined in `content.config.ts` but no entries exist yet
