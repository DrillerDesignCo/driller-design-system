# Driller Starter

An Astro starter template powered by the **Driller Design System** — 31 production-ready Material Design 3 components, zero JavaScript frameworks required.

## Quick Start

### Use this template

```bash
# Clone from GitHub
git clone https://github.com/DrillerDesignCo/driller-design-system.git my-project
cd my-project/driller-starter

# Install & run
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to see your site. Visit [/component-showcase](http://localhost:4321/component-showcase) to see all 31 components in action.

## What's Included

### 31 Components (`src/components/md/`)

| Category | Components |
|----------|-----------|
| **Foundation** | Icon, Divider |
| **Actions** | Button, IconButton, FAB |
| **Forms** | Checkbox, Radio, Switch, Slider, TextField, Select, SelectOption |
| **Collections** | Chip, ChipSet, List, ListItem, Menu, MenuItem, SubMenu |
| **Navigation** | Tabs, Tab, NavigationBar, NavigationTab, NavigationDrawer |
| **Selection** | SegmentedButton, SegmentedButtonSet |
| **Feedback** | Dialog, CircularProgress, LinearProgress |
| **Display** | Badge, Card |

### Design Tokens (`src/styles/tokens.css`)

All components use CSS custom properties. Customize the entire design system by editing token values:

```css
:root {
  --color-primary: #6750a4;
  --surface: #fffbfe;
  --text: #1d1b20;
  /* ... */
}
```

### Project Structure

```
driller-starter/
├── src/
│   ├── components/
│   │   └── md/          ← 31 Driller Design components
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── component-showcase.astro
│   └── styles/
│       ├── tokens.css   ← Design tokens (colors, typography, spacing)
│       ├── global.css   ← Global reset & base styles
│       └── md/          ← Component foundation styles (ripple, elevation, focus-ring)
├── public/              ← Static assets (images, fonts, favicon)
├── agents.md            ← Multi-agent workflow assignments
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Usage

### Import a component

```astro
---
import Button from '../components/md/Button.astro';
import Icon from '../components/md/Icon.astro';
---

<Button variant="filled">
  <Icon slot="icon" name="add" />
  Create
</Button>
```

### Available component variants

```astro
<!-- Buttons: elevated, filled, filled-tonal, outlined, text -->
<Button variant="outlined">Outlined</Button>

<!-- Cards: elevated, filled, outlined -->
<Card variant="elevated">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>

<!-- Text Fields: filled, outlined -->
<TextField variant="outlined" label="Email" type="email" />

<!-- FABs: surface, primary, secondary, tertiary -->
<FAB variant="primary" label="Create" icon="add" />
```

## Commands

| Command | Action |
|:--------|:-------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run check` | Run Astro type checking |

## Starting a New Project

1. Delete `component-showcase.astro` (it's just a demo page)
2. Edit `src/styles/tokens.css` to match your brand colors
3. Modify `src/layouts/BaseLayout.astro` with your site's meta/nav/footer
4. Build your pages in `src/pages/` using the components

## License

Copyright 2026 Driller Design Co.  
Licensed under the Apache License, Version 2.0.
