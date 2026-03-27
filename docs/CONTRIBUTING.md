# Contributing to Waste Falcon (Driller Starter)

> Development environment setup, available scripts, and workflow guidelines.

---

## Prerequisites

- **Node.js** ≥ v22.12.0 (even-numbered LTS only; odd versions like v23 are unsupported)
- **npm** (ships with Node)
- **Git**
- **VS Code** with the [Astro extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)

## Getting Started

```bash
git clone <repo-url>
cd Waste\ Falcon
npm install
npm run dev          # → http://localhost:4321
```

---

## Project Structure

```
Waste Falcon/
├─ public/               # Static assets (copied verbatim to dist/)
│  └─ fonts/             # Self-hosted Poppins (4 weights)
├─ src/
│  ├─ components/        # Page components (Hero, CTABlock, FAQAccordion, etc.)
│  │  └─ md/             # 31 Material Design 3 Astro components
│  ├─ config/brand.ts    # Client-specific brand config (nav, footer, owner, etc.)
│  ├─ config/schema.ts   # JSON-LD structured data factory functions
│  ├─ content/           # Content Collections (services/, cities/)
│  ├─ content.config.ts  # Collection schemas (Zod via astro/zod)
│  ├─ layouts/           # BaseLayout.astro
│  ├─ pages/             # Route-based pages (index, about, apply, services, showcase)
│  └─ styles/
│     ├─ global.css      # Global styles
│     ├─ tokens.css      # Design tokens
│     └─ md/             # MD3 token & utility styles
├─ astro.config.mjs      # Astro config + Tailwind CSS v4 Vite plugin
├─ tsconfig.json         # TypeScript (strict mode, extends astro/tsconfigs/strict)
└─ package.json
```

---

<!-- AUTO-GENERATED:SCRIPTS-START -->
## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Astro dev server with hot reload (`http://localhost:4321`) |
| `npm run build` | Production build with static site generation |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Run Astro's type-checking and diagnostics (`astro check`) |
| `npx astro` | Direct access to the Astro CLI for advanced commands |
<!-- AUTO-GENERATED:SCRIPTS-END -->

---

## Brand Configuration

All client-specific values live in **`src/config/brand.ts`**. This is the only file that changes per client deployment:

- Identity (name, tagline, location, URL)
- Color palette (primary, dark, light, accent, semantic colors)
- Typography (font families)
- Contact info (phone, email)
- Navigation items (with optional dropdown children)
- Footer columns (services, company, service areas)
- CTA labels & links
- Social media URLs
- Legal page links
- Owner info (name, title, experience — for E-E-A-T)
- Sister brand (BCS Junk Removal)

---

## Component Library

The project includes **31 Material Design 3 components** in `src/components/md/`:

Badge, Button, Card, Checkbox, Chip, ChipSet, CircularProgress, Dialog, Divider, FAB, Icon, IconButton, LinearProgress, List, ListItem, Menu, MenuItem, NavigationBar, NavigationDrawer, NavigationTab, Radio, SegmentedButton, SegmentedButtonSet, Select, SelectOption, Slider, SubMenu, Switch, Tab, Tabs, TextField

Additionally, **6 page-level components** in `src/components/`:

Hero, CTABlock, FAQAccordion, Breadcrumbs, PageSummary, PhoneCTA

### Component Guidelines

1. Components are **pure Astro** (`.astro` files) — no framework runtime
2. Each component is a single file with embedded `<style>` block
3. Interactive behavior uses vanilla `<script>` tags
4. Style tokens reference CSS custom properties from `src/styles/md/md-tokens.css`

---

## Testing

```bash
npm run check          # Type-check all .astro and .ts files
```

Visual verification: open `http://localhost:4321/component-showcase` to inspect all components.

---

## Code Style

- **TypeScript**: strict mode (`astro/tsconfigs/strict`)
- **Astro components**: Props interface at top of frontmatter
- **CSS**: Tailwind v4 utility classes + vanilla CSS with custom properties
- **Naming**: kebab-case for CSS classes prefixed with `md-` for design system components
- **Animations**: GSAP with `data-gsap` attributes for scroll-triggered effects

---

## PR Submission Checklist

- [ ] `npm run check` passes with no errors
- [ ] Component showcase renders correctly
- [ ] New components include `<style>` block (no external CSS imports)
- [ ] `brand.ts` not modified (unless intentionally rebranding)
- [ ] Commit messages use conventional format (`feat:`, `fix:`, `docs:`, etc.)
