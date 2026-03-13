---
description: Brand consistency checklist for Inspector and Workers
---

# Brand Guardian — Skill Module

> **Who uses this:** The Inspector activates this checklist when auditing UI components and pages. Workers reference it to ensure brand compliance from the start.
>
> Adapted from [agency-agents/design-brand-guardian](https://github.com/msitarzewski/agency-agents) and tailored for the Apostolic Shop brand system.

---

## When to Activate

- **Inspector:** Run §1 (Visual Identity) on every frontend file in the wave. Run §2 (Voice & Tone) on any page with user-facing copy (headings, descriptions, CTAs, error messages).
- **Workers:** Reference §1 and §2 while building components. You are not expected to run §3 — that's for periodic brand audits by the Manager.

---

## Apostolic Shop Brand Identity

### Brand Promise
A trusted, community-centered marketplace where Apostolic makers, boutiques, and individuals can sell to their community — simpler, cheaper, and more personal than generic platforms.

### Brand Personality
| Trait | Expression |
|---|---|
| **Trustworthy** | Clean design, transparent pricing, clear policies |
| **Warm** | Welcoming copy, soft color palette, approachable UI |
| **Community-first** | Vendor spotlight, local pickup, personal connection |
| **Simple** | Uncluttered layouts, clear navigation, easy checkout |
| **Quality** | Polished typography, consistent spacing, no janky UI |

### Visual Identity Rules

| Element | Rule | Token Reference |
|---|---|---|
| Primary accent | Deep Red — sparingly (3–5% of page area) | `var(--md-sys-color-primary)` / `#722F37` |
| Backgrounds | White dominates (75–85%) | `var(--md-sys-color-surface)` / `#FFFFFF` |
| Neutral surfaces | Warm off-white for cards, sections | `var(--md-sys-color-surface-container)` / `#F3F1EF` |
| Text color | Black for body text ONLY | `var(--md-sys-color-on-surface)` / `#111111` |
| Secondary text | Muted gray for captions, metadata | `var(--md-sys-color-on-surface-variant)` / `#9B9591` |
| Borders | Light warm border | `var(--md-sys-color-outline)` / `#E4E1DE` |
| Headlines | Playfair Display, weight 500 | `var(--font-display)` |
| Body text | Inter, weight 400–700 | `var(--font-body)` |
| Logo wordmark | Playfair SemiBold (600) — "APOSTOLIC" only | Never elsewhere |
| Logo script | Patung — "Shop" only | Never for headings, body, buttons, or nav |

---

## §1 — Visual Identity Checklist

Run on every frontend component and page:

### Color Compliance
- [ ] No hardcoded hex/rgb values — all colors use `var(--md-sys-color-*)` tokens
- [ ] White space dominates (75–85% of visible area)
- [ ] Deep Red (`--primary`) used only for CTAs, accents, active states — never as a background fill
- [ ] Black used only for text — never as a background or decorative color
- [ ] No "new" colors introduced that aren't in `tokens.css`

### Typography Compliance
- [ ] Headlines use `var(--font-display)` (Playfair Display)
- [ ] Body/UI text uses `var(--font-body)` (Inter)
- [ ] Playfair Display headline weight is 500 unless locally overridden for emphasis
- [ ] Patung font is NOT used anywhere except the Logo component
- [ ] Playfair (non-Display) is NOT used anywhere except the "APOSTOLIC" wordmark
- [ ] No browser-default fonts visible (serif fallbacks rendering unexpectedly)
- [ ] Font sizes use project tokens or `rem` units — no `px` for body text

### Spacing & Shape Compliance
- [ ] Spacing uses `var(--spacing-*)` tokens (4px grid)
- [ ] Button/input corners: `var(--md-sys-shape-sm)` (8px)
- [ ] Card corners: `var(--md-sys-shape-md)` (12px)
- [ ] Large container corners: `var(--md-sys-shape-lg)` (16px)
- [ ] No arbitrary border-radius values

### Elevation Compliance
- [ ] Level 0 (flat): white background, no shadow
- [ ] Level 1 (cards): `#F3F1EF` background or `1px #E4E1DE` border
- [ ] Level 2 (dropdowns): `0 1px 3px rgba(0,0,0,0.08)` shadow
- [ ] Level 3 (modals): `0 4px 12px rgba(0,0,0,0.1)` shadow
- [ ] No rogue box-shadows with unexpected colors or sizes

### Component Patterns
- [ ] Buttons: label-large text (Inter 500 14px), shape-sm radius
- [ ] Cards: shape-md radius, spacing-md padding
- [ ] Form inputs: shape-sm radius, 1px `--outline` border, focus uses `--primary` border
- [ ] Icons are consistent weight/style across the page

---

## §2 — Voice & Tone Checklist

Run on pages with user-facing text:

### Writing Style
- [ ] Warm and approachable — not corporate or sterile
- [ ] Second person ("you", "your") — not third person
- [ ] Short, clear sentences — reading level should be accessible
- [ ] Action-oriented CTAs ("Start selling", "Browse products") — not vague ("Learn more", "Click here")

### Vocabulary
| ✅ Use | ❌ Avoid |
|---|---|
| Sellers, vendors | Merchants, retailers |
| Community | Users, customers (except in technical contexts) |
| Shop, browse | Purchase, acquire |
| Start selling | Become a merchant |
| Handmade, crafted | Manufactured, produced |
| Apostolic community | Target market, demographic |

### Error & Empty States
- [ ] Friendly tone — "We couldn't find any products" not "No results"
- [ ] Helpful guidance — suggest next action ("Try a different search" / "Browse categories")
- [ ] No technical jargon in user-facing errors (no "500 error", "null reference")
- [ ] No blame language ("You entered an invalid...") — reframe constructively

### Consistency
- [ ] Brand name is always "Apostolic Shop" (capitalized, two words)
- [ ] Product categories use consistent naming (match Vendure taxonomy)
- [ ] Currency format is consistent ($XX.XX with two decimals)
- [ ] Date formats are consistent (e.g., "March 11, 2026" or "Mar 11, 2026")

---

## §3 — Brand Health Audit (Periodic)

> For the **Manager** to run periodically (every 5–10 waves), not per-wave.

- [ ] Color ratio audit: measure actual white/neutral/red distribution across key pages
- [ ] Typography audit: verify no pages use Patung or Playfair incorrectly
- [ ] Tone audit: read all user-facing copy for consistency with voice guidelines
- [ ] Navigation audit: verify consistent labeling across header, footer, mobile nav
- [ ] Visual consistency: spot-check spacing, borders, elevation across all page types

---

## Report Format (Inspector)

When brand issues are found, add this section to the Inspector report:

```markdown
## Brand Compliance

| File | Issue | Rule Violated | Severity | Fixed? |
|---|---|---|---|---|
| `Header.astro` | Patung font used in nav link | Typography §1 | 🔴 High | ✅ |
| `product-detail.astro` | Hardcoded `#333` for text | Color §1 | 🟡 Med | ✅ |
| `checkout.astro` | Error says "Invalid input" | Voice §2 | 🟢 Low | ❌ |
```
