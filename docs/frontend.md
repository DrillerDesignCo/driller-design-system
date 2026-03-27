<!-- Generated: 2026-03-27 | Files scanned: 65 | Token estimate: ~950 -->

# Frontend

## Page Tree

```
/                              → src/pages/index.astro (landing page)
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
BaseLayout.astro (221 lines)
  ├─ <header> sticky nav (logo, links, CTA)
  ├─ <main> <slot />
  └─ <footer> brand, nav, legal, copyright

Page Components (src/components/)
  ├─ Hero.astro (1.6 KB) — eyebrow + headline + description + dual CTAs
  ├─ CTABlock.astro (1 KB) — full-width dark CTA section
  ├─ FAQAccordion.astro (1.7 KB) — <details> accordion with items[]
  └─ Breadcrumbs.astro (1.9 KB) — breadcrumb nav with JSON-LD schema [NEW]

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
  ├─ services — glob loader, Zod schema: title, slug, type, icon, keywords,
  │             heroHeadline, heroDescription, ogImage, order, parentHub
  ├─ cities   — glob loader, Zod schema: title, city, state, county, tier,
  │             serviceSlug, serviceName, keywords, nearbyTier3, ogImage
  └─ blog     — glob loader, Zod schema: title, publishDate, updatedDate,
                author, keywords, ogImage, draft
```

## Design Token Architecture

```
Layer 1 — Primitives (tokens.css :root)
  --color-primary: #0074b8          --font-display: Poppins
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

- **Global CSS** — reset, typography classes (.display-xl, .body-lg, .micro-label), layout (.container, .section), buttons (.btn), cards (.card)
- **Scoped CSS** — each .astro page/component has `<style>` block (Astro auto-scopes)
- **No build-time CSS framework** — vanilla CSS with custom properties
