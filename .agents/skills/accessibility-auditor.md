---
description: WCAG 2.2 AA accessibility audit checklist for Inspector and Workers
---

# Accessibility Auditor — Skill Module

> **Who uses this:** The Inspector activates this checklist when auditing interactive components and pages. Workers reference it while building to avoid rework.
>
> Adapted from [agency-agents/testing-accessibility-auditor](https://github.com/msitarzewski/agency-agents) and tailored for the Apostolic Shop Astro storefront.

---

## When to Activate

- **Inspector:** Always run §1 (Automated Checks) and §2 (Manual Checks) on every frontend file in the wave. Run §3 (Component Deep Dive) only when the wave includes interactive components (modals, forms, tabs, dropdowns, carousels).
- **Workers:** Reference §1 and §2 while building. Pay special attention to §4 (Common Patterns) for correct ARIA usage.

---

## Standards

- **Target:** WCAG 2.2 Level AA conformance
- **Principle:** POUR — Perceivable, Operable, Understandable, Robust
- **Severity scale:**
  | Level | Meaning | Example |
  |---|---|---|
  | 🔴 Critical | Blocks access entirely for some users | Missing form labels, keyboard trap |
  | 🟠 Serious | Major barrier, requires workaround | Low contrast on primary CTA, no focus indicator |
  | 🟡 Moderate | Causes difficulty, workaround exists | Missing skip link, decorative image with alt text |
  | 🟢 Minor | Annoyance, doesn't block access | Inconsistent focus order, redundant ARIA |

---

## §1 — Automated Baseline (Every Wave)

These checks can be verified by reading the source code:

### Semantic Structure
- [ ] Single `<h1>` per page (WCAG 1.3.1 — Info and Relationships)
- [ ] Heading hierarchy is sequential: `h1` → `h2` → `h3`, no skipped levels
- [ ] Landmark regions present: `<header>`, `<nav>`, `<main>`, `<footer>` (WCAG 1.3.1)
- [ ] `<main>` is used exactly once per page
- [ ] Lists use `<ul>`/`<ol>`/`<li>`, not styled `<div>` chains
- [ ] Data tables use `<th>` with `scope` attribute, `<caption>` or `aria-label`

### Images & Media
- [ ] All `<img>` have `alt` attributes (WCAG 1.1.1 — Non-text Content)
- [ ] Decorative images use `alt=""` (empty string), NOT missing `alt`
- [ ] Informative images have descriptive `alt` text (not filenames like `IMG_2847.jpg`)
- [ ] Icon-only buttons/links have `aria-label` or `sr-only` text (WCAG 1.1.1)
- [ ] SVG icons have `role="img"` and `aria-label`, OR `aria-hidden="true"` if decorative

### Forms (WCAG 1.3.1, 3.3.2, 4.1.2)
- [ ] Every `<input>`, `<select>`, `<textarea>` has an associated `<label>` (via `for`/`id`)
- [ ] Required fields are indicated both visually AND programmatically (`aria-required="true"` or `required`)
- [ ] Error messages are associated with their fields via `aria-describedby`
- [ ] Form groups use `<fieldset>` + `<legend>` where appropriate
- [ ] Autocomplete attributes are set on relevant fields (`name`, `email`, `street-address`, etc.)

### Color & Contrast (WCAG 1.4.3, 1.4.11)
- [ ] Body text contrast ratio ≥ 4.5:1 against background
- [ ] Large text (≥ 18px regular or 14px bold) contrast ratio ≥ 3:1
- [ ] UI component borders and icons contrast ratio ≥ 3:1 against background
- [ ] Information is NOT conveyed by color alone (e.g., error states also use icon/text)
- [ ] Focus indicators have ≥ 3:1 contrast against adjacent colors

### Links & Buttons
- [ ] All `<a>` tags have meaningful link text (not "click here") (WCAG 2.4.4)
- [ ] Links are visually distinguishable from surrounding text (underline or color+another cue)
- [ ] Buttons use `<button>` elements, not `<div onclick>` or `<a>` without `href`
- [ ] `target="_blank"` links include `rel="noopener"` and indicate they open a new tab

---

## §2 — Manual Interaction Checks (Every Wave)

Verify by reasoning about the component's behavior:

### Keyboard Navigation (WCAG 2.1.1, 2.1.2, 2.4.7)
- [ ] All interactive elements reachable via Tab key
- [ ] Tab order follows visual layout (no illogical jumps)
- [ ] Focus indicator is visible on every interactive element
- [ ] No keyboard traps — user can always Tab away
- [ ] Enter/Space activates buttons; Enter activates links
- [ ] Escape closes modals, dropdowns, and overlays
- [ ] Focus returns to trigger element after modal/overlay closes

### Skip Navigation (WCAG 2.4.1)
- [ ] "Skip to main content" link is the first focusable element on each page
- [ ] Skip link target (`#main-content` or similar) exists on the `<main>` element

### Motion & Animation (WCAG 2.3.1, 2.3.3)
- [ ] Animations respect `prefers-reduced-motion: reduce` media query
- [ ] No content flashes more than 3 times per second
- [ ] Auto-playing carousels/sliders have pause controls
- [ ] Page transitions don't cause seizure-risk flashing

### Touch Targets (WCAG 2.5.8)
- [ ] Interactive touch targets are ≥ 44×44px on mobile
- [ ] Sufficient spacing between adjacent touch targets (≥ 8px)

---

## §3 — Component Deep Dive (Interactive Components Only)

Run when the wave includes modals, tabs, accordions, dropdowns, carousels, or custom widgets:

### Modal / Dialog
- [ ] Uses `role="dialog"` and `aria-modal="true"` (or native `<dialog>`)
- [ ] Has `aria-labelledby` pointing to the modal title
- [ ] Focus moves to modal on open (first focusable element or close button)
- [ ] Focus is trapped inside modal while open
- [ ] Escape key closes the modal
- [ ] Focus returns to the trigger button on close
- [ ] Background content is `aria-hidden="true"` or `inert` while modal is open

### Tabs
- [ ] Tablist uses `role="tablist"`, tabs use `role="tab"`, panels use `role="tabpanel"`
- [ ] Active tab has `aria-selected="true"`, inactive tabs have `aria-selected="false"`
- [ ] Tab ↔ panel association via `aria-controls` and `aria-labelledby`
- [ ] Arrow keys navigate between tabs; Tab moves to panel content
- [ ] Only the active tab is in the tab order (`tabindex="0"`); others are `tabindex="-1"`

### Dropdown / Menu
- [ ] Trigger button has `aria-expanded="true/false"` and `aria-haspopup="true"`
- [ ] Menu items are navigable with arrow keys
- [ ] Escape closes menu and returns focus to trigger
- [ ] Menu items use `role="menuitem"` if it's a true menu
- [ ] If it's a disclosure (show/hide), use `aria-expanded` without menu roles

### Accordion
- [ ] Toggle buttons have `aria-expanded="true/false"`
- [ ] Content regions have `aria-labelledby` pointing to the toggle
- [ ] Multiple panels can be open unless single-open behavior is specified
- [ ] Focus stays on the toggle after expanding/collapsing

### Toast / Notification
- [ ] Uses `role="status"` or `role="alert"` for live region
- [ ] Set `aria-live="polite"` for status updates, `aria-live="assertive"` for errors
- [ ] Content is announced to screen readers without requiring focus change
- [ ] Dismissible via keyboard (close button or auto-dismiss with sufficient time)

### Carousel / Slider
- [ ] Has pause/stop control that's keyboard accessible
- [ ] Current slide position is announced ("Slide 2 of 5")
- [ ] Arrow keys or prev/next buttons navigate slides
- [ ] Auto-advance respects `prefers-reduced-motion`

---

## §4 — Common Patterns Reference (for Workers)

### Visually Hidden Text (Screen Reader Only)
```css
/* Add to global styles or component scoped styles */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

### Icon Button Pattern
```html
<!-- ✅ Correct -->
<button aria-label="Close menu">
  <svg aria-hidden="true">...</svg>
</button>

<!-- ❌ Incorrect — no accessible name -->
<button>
  <svg>...</svg>
</button>
```

### Form Field Pattern
```html
<!-- ✅ Correct -->
<label for="email">Email address</label>
<input type="email" id="email" name="email" required aria-describedby="email-error" autocomplete="email">
<p id="email-error" role="alert">Please enter a valid email</p>

<!-- ❌ Incorrect — no label association, no error linkage -->
<span>Email</span>
<input type="email">
<p class="error">Invalid</p>
```

### Skip Link Pattern
```html
<!-- First element in <body> -->
<a href="#main-content" class="sr-only focus:not-sr-only">
  Skip to main content
</a>

<!-- On the main element -->
<main id="main-content" tabindex="-1">
  ...
</main>
```

---

## Report Format (Inspector)

When accessibility issues are found, add this section to the Inspector report:

```markdown
## Accessibility Audit

| File | Issue | WCAG Criterion | Severity | Fixed? |
|---|---|---|---|---|
| `CartItem.astro` | Remove button has no accessible name | 1.1.1 Non-text Content | 🔴 Critical | ✅ |
| `ProductCard.astro` | Image alt text is filename | 1.1.1 Non-text Content | 🟠 Serious | ✅ |
| `checkout.astro` | Error messages not linked to fields | 3.3.1 Error Identification | 🟠 Serious | ❌ |
| `Header.astro` | No skip navigation link | 2.4.1 Bypass Blocks | 🟡 Moderate | ❌ |
```

### Remediation Priority
1. **Immediate (Critical/Serious):** Fix before the wave is marked PASS
2. **Short-term (Moderate):** Flag for next wave or fix if time allows
3. **Ongoing (Minor):** Note in report for future improvement
