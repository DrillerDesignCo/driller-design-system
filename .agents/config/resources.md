# Resource Catalog

> **Optional resources** the Manager can reference when setting up a project. These are external repos/tools — not included in this template, but available for agents to pull when needed.

---

## Component Libraries

### Driller Design System (M3 Astro Components)
- **Repo:** `https://github.com/DrillerDesignCo/driller-design-system`
- **What it is:** A Material 3-based design system built with Astro. Includes 31 pre-built, accessible UI components styled with CSS custom properties. Forked from Google's Material Web (material-web.dev).
- **When to use:** Any Astro project that needs a polished component library out of the box.
- **How to add:**
  ```bash
  # Clone and use as a complete starter
  git clone https://github.com/DrillerDesignCo/driller-design-system.git my-project
  cd my-project
  npm install
  npm run dev
  # Visit localhost:4321/component-showcase to see all 31 components
  ```

  Or copy just the components into an existing project:
  ```bash
  # Copy components + styles into your project
  cp -r driller-design-system/src/components/md/ your-project/src/components/md/
  cp -r driller-design-system/src/styles/ your-project/src/styles/
  ```

- **31 Components** (in `src/components/md/`):
  Buttons, Cards, TextFields, FABs, Icons, Dialogs, Sliders, Checkboxes, Radio buttons, Switches, Chips, Navigation, Tabs, and more — all with M3 variants.

- **Design Tokens** (`src/styles/tokens.css`):
  ```css
  :root {
    --color-primary: #6750a4;
    --surface: #fffbfe;
    --text: #1d1b20;
    /* ... full M3 token set */
  }
  ```
  Customize the entire design system by editing token values.

- **Component Usage:**
  ```astro
  ---
  import Button from '../components/md/Button.astro';
  import Icon from '../components/md/Icon.astro';
  import Card from '../components/md/Card.astro';
  import TextField from '../components/md/TextField.astro';
  ---

  <!-- Button variants: elevated, filled, filled-tonal, outlined, text -->
  <Button variant="filled">
    <Icon slot="icon" name="add" />
    Create
  </Button>

  <!-- Card variants: elevated, filled, outlined -->
  <Card variant="elevated">
    <h3>Card Title</h3>
    <p>Content goes here.</p>
  </Card>

  <!-- TextField variants: filled, outlined -->
  <TextField variant="outlined" label="Email" type="email" />
  ```

- **Manager note:** When writing worker prompts for projects using this library, list the available components and their props so agents import them instead of building from scratch. Reference `component-showcase.astro` as a living API reference.

---

## Starter Templates

### Driller Starter (Astro + M3 Design System)
- **Repo:** `https://github.com/DrillerDesignCo/driller-design-system` (same repo — includes the complete starter)
- **What it is:** A pre-configured Astro project with BaseLayout, 31 M3 components, design tokens, global styles, and a component showcase page.
- **When to use:** Starting a new Astro-based web project from scratch.
- **How to start:**
  ```bash
  git clone https://github.com/DrillerDesignCo/driller-design-system.git my-project
  cd my-project
  rm -rf .git
  git init
  npm install
  npm run dev
  ```
- **Getting started steps:**
  1. Delete `component-showcase.astro` (it's a demo page)
  2. Edit `src/styles/tokens.css` to match your brand colors
  3. Modify `src/layouts/BaseLayout.astro` with your site's meta/nav/footer
  4. Build your pages in `src/pages/` using the components
- **Project structure:**
  ```
  driller-starter/
  ├── src/
  │   ├── components/
  │   │   └── md/              ← 31 Driller Design components
  │   ├── layouts/
  │   │   └── BaseLayout.astro
  │   ├── pages/
  │   │   ├── index.astro
  │   │   └── component-showcase.astro
  │   └── styles/
  │       ├── tokens.css       ← Design tokens (colors, typography, spacing)
  │       ├── global.css       ← Global reset & base styles
  │       └── md/              ← Component foundation styles (ripple, elevation, focus-ring)
  ├── public/                  ← Static assets (images, fonts, favicon)
  ├── agents.md
  ├── astro.config.mjs
  ├── package.json
  └── tsconfig.json
  ```

---

## How the Manager Should Use This

When planning a new project's Wave 0 (foundation), the Manager should:

1. **Check this catalog** for relevant resources
2. **Ask the user** if they want to use the Driller Design System or start from scratch
3. **If using Driller:** Include the component list and import paths in worker prompts so agents use existing components instead of rebuilding them
4. **Reference component APIs** in prompts — e.g., `Button` accepts `variant` (elevated, filled, filled-tonal, outlined, text)
5. **Point agents to `tokens.css`** so they use CSS custom properties instead of hardcoded values

### Example Manager Prompt Snippet (using Driller):

```markdown
## Context — Available Components

This project uses the Driller Design System (M3 components) at `src/components/md/`.

Available components you may use:
| Component | Import Path | Key Props |
|---|---|---|
| Button | `../components/md/Button.astro` | `variant` (filled, outlined, text, elevated, filled-tonal) |
| Card | `../components/md/Card.astro` | `variant` (elevated, filled, outlined) |
| TextField | `../components/md/TextField.astro` | `variant` (filled, outlined), `label`, `type` |
| Icon | `../components/md/Icon.astro` | `name` (Material Symbols name) |
| FAB | `../components/md/FAB.astro` | `variant` (surface, primary, secondary, tertiary), `label`, `icon` |

**Do NOT recreate these components** — import and use them as shown above.
Design tokens are in `src/styles/tokens.css` — use `var(--token-name)` for all colors, fonts, and spacing.
```

---

## Adding Your Own Resources

Add entries following this format:

```markdown
### Resource Name
- **Repo:** `https://github.com/username/repo`
- **What it is:** One-line description
- **When to use:** When is this relevant
- **How to add:** Commands to integrate into a project
```

> This catalog is read by the Manager, not by Workers directly. The Manager extracts relevant info and includes it in worker prompts.
