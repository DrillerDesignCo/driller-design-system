# 🦅 Waste Falcon — Brand Design Tokens

> **Source of Truth** for all colors, typography, icons, and design decisions.
> All styling flows through CSS custom properties in [`tokens.css`](file:///c:/Users/Garrett/Documents/Websites/Waste%20Falcon/src/styles/tokens.css) and [`md-tokens.css`](file:///c:/Users/Garrett/Documents/Websites/Waste%20Falcon/src/styles/md/md-tokens.css).
> **Never hardcode values** — always reference tokens.

---

## 1. Brand Primitives

| Role | Token | Hex | WCAG on White | Usage |
|------|-------|-----|:------------:|-------|
| **Primary Blue** | `--color-primary` | `#0074B8` | **5.01:1** ✅ AA | CTAs, buttons, interactive elements |
| **Dark Navy** | `--color-dark` | `#032B4D` | **14.42:1** ✅ AAA | Body text, headings, dark sections |
| **White** | `--color-white` | `#FFFFFF` | — | Backgrounds, light surfaces |
| **On-Primary** | `--color-on-primary` | `#FFFFFF` | 5.01:1 on primary ✅ | Text on primary surfaces |
| **Primary Hover** | `--color-primary-hover` | `#005F9C` | **6.74:1** ✅ AA | Hover state for primary |
| **Accent Text** | `--color-accent-text` | `#0068A3` | **5.98:1** ✅ AA | Inline links on light backgrounds |
| **Error** | `--color-error` | `#BA1A1A` | **6.46:1** ✅ AA | Error states, validation |

---

## 2. Typography

| Role | Token | Value |
|------|-------|-------|
| **Display / Headings** | `--font-display` | Poppins Bold (700) |
| **Body** | `--font-body` | Poppins Regular (400) |
| **Labels / UI** | `--font-body` (weight 600) | Poppins SemiBold (600) |
| **Buttons** | `--font-body` (weight 500) | Poppins Medium (500) |

Self-hosted from `/fonts/` with `font-display: swap`.

---

## 3. Icons

| Property | Value |
|----------|-------|
| **Font** | [Google Material Symbols Outlined](https://fonts.google.com/icons) |
| **Token** | `--md-icon-font: 'Material Symbols Outlined'` |
| **Component** | [`Icon.astro`](file:///c:/Users/Garrett/Documents/Websites/Waste%20Falcon/src/components/md/Icon.astro) |
| **Default Size** | 24px (configurable via `size` prop) |
| **Loaded Via** | Google Fonts CDN in `BaseLayout.astro` |

**Usage:**
```astro
<Icon name="recycling" />
<Icon name="local_shipping" filled size={32} />
```

> [!IMPORTANT]
> Never hardcode icon names in component internals. Always pass via the `name` prop.
> Never use raw `<span class="material-symbols-outlined">` — use the `Icon` component.

---

## 4. Material Design 3 Color Roles

### Light Mode (`:root`)

| M3 Role | Token | Resolves To |
|---------|-------|-------------|
| Primary | `--md-sys-color-primary` | `#0074B8` |
| On Primary | `--md-sys-color-on-primary` | `#FFFFFF` |
| Primary Container | `--md-sys-color-primary-container` | `rgba(0,116,184,0.12)` |
| On Primary Container | `--md-sys-color-on-primary-container` | `#032B4D` |
| Secondary | `--md-sys-color-secondary` | `#032B4D` |
| On Secondary | `--md-sys-color-on-secondary` | `#FFFFFF` |
| Surface | `--md-sys-color-surface` | `#F0F6FB` |
| On Surface | `--md-sys-color-on-surface` | `#032B4D` |
| On Surface Variant | `--md-sys-color-on-surface-variant` | `#3A5068` |
| Outline | `--md-sys-color-outline` | `rgba(3,43,77,0.20)` |
| Error | `--md-sys-color-error` | `#BA1A1A` |
| On Error | `--md-sys-color-on-error` | `#FFFFFF` |

### Dark Section (`.dark-section`)

| M3 Role | Resolves To |
|---------|-------------|
| Surface | `#052E52` |
| On Surface | `#FFFFFF` |
| On Surface Variant | `rgba(255,255,255,0.75)` |

---

## 5. Semantic Tokens

| Purpose | Token | Light | Dark Section |
|---------|-------|-------|-------------|
| Background | `--bg` | `#FFFFFF` | `#032B4D` |
| Surface | `--surface` | `#F0F6FB` | `#052E52` |
| Body Text | `--text` | `#032B4D` (14.42:1) | `#FFFFFF` |
| Muted Text | `--text-muted` | `#3A5068` (8.31:1) | `rgba(255,255,255,0.75)` |
| Faint Text | `--text-faint` | `#5D7282` (5.01:1) | `rgba(255,255,255,0.50)` |
| Accent | `--accent` | `#0068A3` (5.98:1) | `#0074B8` |
| Border | `--line` | `rgba(3,43,77,0.10)` | `rgba(255,255,255,0.15)` |
| Strong Border | `--line-strong` | `rgba(3,43,77,0.20)` | `rgba(255,255,255,0.30)` |

---

## 6. WCAG 2.1 AA Compliance — All Pairs Pass ✅

| Pairing | Ratio | AA Normal (4.5:1) | AA Large (3:1) |
|---------|------:|:-----------------:|:--------------:|
| Dark on White | **14.42:1** | ✅ AAA | ✅ |
| Dark on Surface | **13.24:1** | ✅ AAA | ✅ |
| Muted on White | **8.31:1** | ✅ AAA | ✅ |
| Muted on Surface | **7.63:1** | ✅ AAA | ✅ |
| Accent-Text on White | **5.98:1** | ✅ | ✅ |
| Accent-Text on Surface | **5.49:1** | ✅ | ✅ |
| **Primary on White** | **5.01:1** | ✅ | ✅ |
| **Primary on Surface** | **4.60:1** | ✅ | ✅ |
| **Faint on White** | **5.01:1** | ✅ | ✅ |
| **Faint on Surface** | **4.60:1** | ✅ | ✅ |
| White on Primary | **5.01:1** | ✅ | ✅ |
| White on Primary Hover | **6.74:1** | ✅ | ✅ |
| White on Dark | **14.42:1** | ✅ AAA | ✅ |
| White on Error | **6.46:1** | ✅ | ✅ |
| Error on White | **6.46:1** | ✅ | ✅ |

---

## 7. Token Architecture

```
Primitives (tokens.css)       → Brand hex values
    ↓
Semantic (tokens.css)         → Purpose-driven aliases
    ↓
M3 Sys Tokens (md-tokens.css) → Material Design 3 roles
    ↓
Component Tokens (md-tokens.css) → Consumed by UI components
```

---

## 8. File Reference

| File | Purpose |
|------|---------|
| [tokens.css](file:///c:/Users/Garrett/Documents/Websites/Waste%20Falcon/src/styles/tokens.css) | Primitives, semantic, component tokens |
| [md-tokens.css](file:///c:/Users/Garrett/Documents/Websites/Waste%20Falcon/src/styles/md/md-tokens.css) | M3 sys-color, shape, motion, MD3 component tokens |
| [global.css](file:///c:/Users/Garrett/Documents/Websites/Waste%20Falcon/src/styles/global.css) | Base styles, button classes — consumes tokens only |
| [Icon.astro](file:///c:/Users/Garrett/Documents/Websites/Waste%20Falcon/src/components/md/Icon.astro) | Material Symbols icon component |
| `src/components/md/*.astro` | 31 Astro components — zero hardcoded colors |

---

*Last updated: March 13, 2026*
*Notion source: [Waste Falcon](https://www.notion.so/Waste-Falcon-31ecc6b72e33801d8b18da02375a5ae5)*
