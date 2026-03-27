<!-- Generated: 2026-03-27 | Files scanned: 68 | Token estimate: ~950 -->

# Frontend

## Page Tree

```
/                              → src/pages/index.astro (landing page w/ GSAP animations)
/about                         → src/pages/about.astro (about page w/ owner bio, credentials)
/apply                         → src/pages/apply.astro (consultation form)
/services                      → src/pages/services/index.astro (service grid)
/services/[service]            → src/pages/services/[service].astro (dynamic — 6 hubs)
/services/[service]/[city]     → src/pages/services/[service]/[city].astro (dynamic — 8 geo pages)
/component-showcase            → src/pages/component-showcase.astro (MD3 demo gallery)
```

### Dynamic Routes

| Template | Collection | Entries | Description |
|----------|-----------|---------|-------------|
| `[service].astro` | services | 6 | Service hub pages with city grid + cross-links |
| `[service]/[city].astro` | cities | 8 | Geo landing pages with nearby communities + sibling links |

## Component Hierarchy

```
BaseLayout.astro (299 lines)
  ├─ <header> sticky nav w/ dropdown menus, logo, CTA, mobile toggle
  │    ├─ Desktop: brand.nav items with optional children[] dropdowns
  │    └─ Mobile: collapsible drawer with nested child links
  ├─ <main> <slot />
  └─ <footer> floating card (gradient bg, watermark, 4-col grid, legal)

Page Components (src/components/)
  ├─ Hero.astro (1.9 KB) — eyebrow + headline + description + dual CTAs
  ├─ CTABlock.astro (1.2 KB) — full-width dark CTA section
  ├─ FAQAccordion.astro (1.9 KB) — <details> accordion with items[]
  ├─ Breadcrumbs.astro (1.9 KB) — breadcrumb nav with JSON-LD schema
  ├─ PageSummary.astro (1.5 KB) — stats bar (value/label pairs)
  └─ PhoneCTA.astro (1.5 KB) — phone call-to-action banner

Material Design 3 Components (src/components/md/) — 31 total
  ├─ Inputs:    Button, Checkbox, Chip/ChipSet, FAB, IconButton, Radio,
  │             SegmentedButton/Set, Select/SelectOption, Slider, Switch, TextField
  ├─ Display:   Badge, Card, CircularProgress, Divider, Icon, LinearProgress
  ├─ Navigation: Menu/MenuItem/SubMenu, NavigationBar/Tab, NavigationDrawer,
  │             Tab/Tabs
  ├─ Layout:    Dialog, List/ListItem
  └─ All components are self-contained .astro SFCs with scoped <style>
```

## Content Collections

```
src/content.config.ts
  ├─ services — glob loader, Zod schema: title, description, slug, type, icon, keywords,
  │             heroHeadline, heroDescription, ogImage, order, parentHub
  ├─ cities   — glob loader, Zod schema: title, description, city, state, county, tier,
  │             serviceSlug, serviceName, keywords, nearbyTier3, ogImage
  └─ blog     — glob loader, Zod schema: title, description, publishDate, updatedDate,
                author, keywords, ogImage, draft
```

## Design Token Architecture

```
Layer 1 — Primitives (tokens.css :root)
  --color-primary: #0081ca          --font-display: Poppins
  --color-dark: #032b4d             --font-body: Poppins
  --color-light: #ffffff            --font-serif: Poppins
  + full M3 typescale (display/headline/title/body/label × S/M/L)

Layer 2 — Semantic (tokens.css :root + .dark-section)
  --bg, --surface, --text, --text-muted, --accent, --line
  .dark-section overrides all semantic vars for inverted sections

Layer 3 — Component (tokens.css :root)
  --btn-primary-*, --btn-secondary-*, --container-*

MD3 Tokens (md-tokens.css)
  M3 color scheme, shape, state-layer, motion tokens
  + elevation.css, ripple.css, focus-ring.css
```

## Styling Approach

- **Tailwind CSS v4** — utility classes via `@tailwindcss/vite` plugin in `astro.config.mjs`
- **Global CSS** — reset, typography classes (.display-xl, .body-lg, .micro-label), layout (.container, .section), buttons (.btn), cards (.card)
- **Scoped CSS** — each .astro page/component has `<style>` block (Astro auto-scopes)
- **GSAP** — scroll-triggered animations on homepage (hero, service cards, features, process, CTA)
