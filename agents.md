# Driller Design System — Agent Assignments

> **How to use**: Open a new conversation and say:
> - Workers: *"You are Agent 1. Read `agents.md` for your assignment."*
> - QA: *"You are the Inspector. Read `agents.md` for your assignment."*
> The agent will find its section below and execute it.

---

## ✅ All Waves Complete

> Converting the remaining Material Design "labs" components to Astro.
> All source Lit components live in the **root** `labs/` directory.
> All Astro output goes to `driller-starter/src/components/md/`.

---

### Wave E — Quick Wins: Badge + Card

---

#### Agent 1 — Badge

Create `src/components/md/Badge.astro` — a small notification badge.

**Lit source:** `../../labs/badge/internal/badge.ts` + `../../labs/badge/internal/_badge.scss`

##### Props Interface
```astro
---
interface Props {
  value?: string;
  class?: string;
}

const {
  value,
  class: className,
  ...attrs
} = Astro.props;
---
```

##### Template
```html
<div class:list={['md-badge', { 'md-badge--large': !!value }, className]} {...attrs}>
  {value && <p class="md-badge__value">{value}</p>}
</div>
```

##### Style Reference
- Positioned `absolute`, `inset-inline-start: 50%`
- Small dot size when no value; large pill with text when `value` is truthy
- Use `var(--color-primary)` for background, `var(--color-on-primary, #fff)` for text
- Border-radius: `9999px`
- Font: `var(--font-body)`, small size (~11px)

##### Deliverables
1. Create `src/components/md/Badge.astro` — single file with `<style>` block
2. No `<script>` needed (purely visual)

##### ⛔ Scoping Rules
1. ONLY create `src/components/md/Badge.astro`.
2. Do NOT modify any other files.
3. Do NOT run build/dev/check commands.
4. If you finish early, STOP.

---

#### Agent 2 — Card

Create `src/components/md/Card.astro` — a container card with 3 variants.

**Lit source:** `../../labs/card/internal/card.ts` + `../../labs/card/internal/_shared.scss` + variant SCSS files (`_elevated-card.scss`, `_filled-card.scss`, `_outlined-card.scss`)

##### Props Interface
```astro
---
interface Props {
  variant?: 'elevated' | 'filled' | 'outlined';
  class?: string;
}

const {
  variant = 'filled',
  class: className,
  ...attrs
} = Astro.props;
---
```

##### Template
```html
<div
  class:list={['md-card', `md-card--${variant}`, className]}
  {...attrs}
>
  <div class="md-card__background"></div>
  <slot />
  <div class="md-card__outline"></div>
</div>
```

##### Style Reference
- Root: `border-radius: 12px; position: relative; display: flex; flex-direction: column; z-index: 0; overflow: hidden;`
- `.md-card__background`: absolute fill, behind content (`z-index: -1`)
- `.md-card__outline`: absolute fill, on top of content (`z-index: 1; pointer-events: none`)
- **Elevated**: background `var(--surface-container-low, var(--surface))`, `box-shadow` level 1
- **Filled**: background `var(--surface-container-highest, var(--surface))`, no shadow
- **Outlined**: background `var(--surface)`, outline `1px solid var(--line)`
- All variants: transparent HCM border on `.md-card__outline`
- `slot` inherits `border-radius`

##### Deliverables
1. Create `src/components/md/Card.astro` — single file with `<style>` block
2. No `<script>` needed (slot-only container)

##### ⛔ Scoping Rules
1. ONLY create `src/components/md/Card.astro`.
2. Do NOT modify any other files.
3. Do NOT run build/dev/check commands.
4. If you finish early, STOP.

---

#### Inspector — Wave E QA

> Deploy after Agents 1–2 finish.

##### Audit Checklist
1. **Files to review:** `Badge.astro`, `Card.astro` in `src/components/md/`
2. **Run:** `npx astro check 2>&1 | Select-Object -First 40`
3. **Verify Badge:** dot mode (no value), large mode (with value), positioning works when parent is `position: relative`
4. **Verify Card:** all 3 variants render, slot content appears, border-radius and elevation look correct
5. **Add to showcase:** Append Badge and Card sections to `src/pages/component-showcase.astro` (import + demo)
6. **Visual check:** Open `http://localhost:4321/component-showcase` in browser
7. **Fix issues** directly. Output PASS/FAIL per component.

##### Git Commit (ONLY after ALL PASS)
```bash
git add src/components/md/Badge.astro src/components/md/Card.astro src/pages/component-showcase.astro
git commit -m "feat(md): Badge and Card components"
git push origin main
```

##### ⛔ Scoping
- Only fix/create the files listed above.

---

### Wave F — Navigation: Bar, Tab, Drawer

---

#### Agent 1 — NavigationBar + NavigationTab

Create `src/components/md/NavigationBar.astro` and `src/components/md/NavigationTab.astro` — a bottom navigation bar with tabs.

**Lit source:**
- Bar: `../../labs/navigationbar/internal/navigation-bar.ts` + `_navigation-bar.scss`
- Tab: `../../labs/navigationtab/internal/navigation-tab.ts` + `_navigation-tab.scss`

##### NavigationBar Props
```astro
---
interface Props {
  activeIndex?: number;
  hideInactiveLabels?: boolean;
  class?: string;
}

const {
  activeIndex = 0,
  hideInactiveLabels = false,
  class: className,
  ...attrs
} = Astro.props;
---
```

##### NavigationBar Template
```html
<nav
  class:list={['md-navigation-bar', className]}
  role="tablist"
  data-active-index={activeIndex}
  data-hide-inactive-labels={hideInactiveLabels || undefined}
  {...attrs}
>
  <div class="md-navigation-bar__tabs">
    <slot />
  </div>
</nav>
```

##### NavigationTab Props
```astro
---
interface Props {
  active?: boolean;
  disabled?: boolean;
  label?: string;
  badgeValue?: string;
  showBadge?: boolean;
  hideInactiveLabel?: boolean;
  class?: string;
}

const {
  active = false,
  disabled = false,
  label,
  badgeValue,
  showBadge = false,
  hideInactiveLabel = false,
  class: className,
  ...attrs
} = Astro.props;
---
```

##### NavigationTab Template
```html
<button
  class:list={['md-navigation-tab', {
    'md-navigation-tab--active': active,
    'md-navigation-tab--hide-inactive-label': hideInactiveLabel
  }, className]}
  role="tab"
  aria-selected={active ? 'true' : 'false'}
  tabindex={active ? 0 : -1}
  disabled={disabled || undefined}
  {...attrs}
>
  <span class="md-navigation-tab__icon-content" aria-hidden="true">
    <span class="md-navigation-tab__active-indicator"></span>
    <span class="md-navigation-tab__icon">
      <slot name="inactive-icon" />
    </span>
    <span class="md-navigation-tab__icon md-navigation-tab__icon--active">
      <slot name="active-icon" />
    </span>
  </span>
  {label && <span class="md-navigation-tab__label-text">{label}</span>}
</button>
```

##### Style Reference — NavigationBar
- Full width, horizontal flex, background `var(--surface)`, height ~80px
- Elevation via `box-shadow`
- Tabs slot container: `display: flex; width: 100%;`

##### Style Reference — NavigationTab
- `display: flex; flex-grow: 1; flex-direction: column; align-items: center; justify-content: center;`
- Button reset (no border, no background, cursor pointer)
- Active indicator: pill shape, `background: var(--color-primary)`, `border-radius: 16px`, transitions width/opacity
- Icon: 24px, inactive color `var(--text-muted)`, active color `var(--color-primary)`
- Label: small text, `margin-top: 4px`, hidden when `hide-inactive-label` + not active
- Hover/focus/active state color changes
- Ripple via `::after` pseudo-element

##### Script (keyboard navigation + click handling)
```html
<script>
  document.querySelectorAll('.md-navigation-bar').forEach((bar) => {
    const tabs = Array.from(bar.querySelectorAll('.md-navigation-tab'));
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t, j) => {
          const isActive = j === i;
          t.classList.toggle('md-navigation-tab--active', isActive);
          t.setAttribute('aria-selected', isActive ? 'true' : 'false');
          t.setAttribute('tabindex', isActive ? '0' : '-1');
        });
      });
    });
    bar.addEventListener('keydown', (e) => {
      const focused = tabs.findIndex(t => t === document.activeElement);
      if (focused === -1) return;
      let next = focused;
      if (e.key === 'ArrowRight') next = (focused + 1) % tabs.length;
      if (e.key === 'ArrowLeft') next = (focused - 1 + tabs.length) % tabs.length;
      if (e.key === 'Home') next = 0;
      if (e.key === 'End') next = tabs.length - 1;
      if (next !== focused) { e.preventDefault(); tabs[next].focus(); }
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tabs[focused].click(); }
    });
  });
</script>
```

##### Deliverables
1. Create `src/components/md/NavigationBar.astro`
2. Create `src/components/md/NavigationTab.astro`

##### ⛔ Scoping Rules
1. ONLY create the two files above.
2. Do NOT modify any other files.
3. Do NOT run build/dev/check commands.
4. If you finish early, STOP.

---

#### Agent 2 — NavigationDrawer

Create `src/components/md/NavigationDrawer.astro` — a side navigation drawer (supports standard and modal variants).

**Lit source:**
- Standard: `../../labs/navigationdrawer/internal/navigation-drawer.ts` + `_navigation-drawer.scss`
- Modal: `../../labs/navigationdrawer/internal/navigation-drawer-modal.ts` + `_navigation-drawer-modal.scss`

##### Props Interface
```astro
---
interface Props {
  opened?: boolean;
  modal?: boolean;
  pivot?: 'start' | 'end';
  class?: string;
}

const {
  opened = false,
  modal = false,
  pivot = 'end',
  class: className,
  ...attrs
} = Astro.props;
---
```

##### Template
```html
{modal && (
  <div class:list={['md-navigation-drawer__scrim', { 'md-navigation-drawer__scrim--visible': opened }]}></div>
)}
<div
  class:list={['md-navigation-drawer', {
    'md-navigation-drawer--opened': opened,
    'md-navigation-drawer--modal': modal,
    'md-navigation-drawer--pivot-at-start': pivot === 'start'
  }, className]}
  role="dialog"
  aria-expanded={opened ? 'true' : 'false'}
  aria-hidden={!opened ? 'true' : 'false'}
  aria-modal={modal ? 'true' : undefined}
  {...attrs}
>
  <div class="md-navigation-drawer__content">
    <slot />
  </div>
</div>
```

##### Style Reference
- Default: `inline-size: 0; overflow: hidden; visibility: hidden;` — transitions to `360px` when opened
- Opened: `visibility: visible; inline-size: 360px;`
- Container: `background: var(--surface); border-radius: 0 16px 16px 0;`
- Transition: `inline-size 0.25s ease, visibility 0s ease 0.25s` (hidden) / `0s` delay (opened)
- Modal scrim: `position: fixed; inset: 0; background: rgba(0,0,0,0.32); opacity: 0; visibility: hidden;` — visible on open
- Pivot-at-start: `justify-content: flex-start` instead of `flex-end`
- Content: `display: flex; flex-direction: column; position: relative; min-width: 360px;`

##### Script
```html
<script>
  // Toggle drawer open/close
  document.querySelectorAll('[data-drawer-toggle]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const drawerId = trigger.getAttribute('data-drawer-toggle');
      const drawer = document.getElementById(drawerId);
      if (!drawer) return;
      const isOpen = drawer.classList.contains('md-navigation-drawer--opened');
      drawer.classList.toggle('md-navigation-drawer--opened', !isOpen);
      drawer.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
      drawer.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
      // Toggle scrim for modal
      const scrim = drawer.previousElementSibling;
      if (scrim?.classList.contains('md-navigation-drawer__scrim')) {
        scrim.classList.toggle('md-navigation-drawer__scrim--visible', !isOpen);
      }
    });
  });
  // Close modal on scrim click
  document.querySelectorAll('.md-navigation-drawer__scrim').forEach((scrim) => {
    scrim.addEventListener('click', () => {
      scrim.classList.remove('md-navigation-drawer__scrim--visible');
      const drawer = scrim.nextElementSibling;
      if (drawer) {
        drawer.classList.remove('md-navigation-drawer--opened');
        drawer.setAttribute('aria-expanded', 'false');
        drawer.setAttribute('aria-hidden', 'true');
      }
    });
  });
  // Close modal on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.md-navigation-drawer--modal.md-navigation-drawer--opened').forEach((d) => {
        d.classList.remove('md-navigation-drawer--opened');
        d.setAttribute('aria-expanded', 'false');
        d.setAttribute('aria-hidden', 'true');
        const scrim = d.previousElementSibling;
        if (scrim?.classList.contains('md-navigation-drawer__scrim')) {
          scrim.classList.remove('md-navigation-drawer__scrim--visible');
        }
      });
    }
  });
</script>
```

##### Deliverables
1. Create `src/components/md/NavigationDrawer.astro`

##### ⛔ Scoping Rules
1. ONLY create `src/components/md/NavigationDrawer.astro`.
2. Do NOT modify any other files.
3. Do NOT run build/dev/check commands.
4. If you finish early, STOP.

---

#### Inspector — Wave F QA

> Deploy after Agents 1–2 finish.

##### Audit Checklist
1. **Files:** `NavigationBar.astro`, `NavigationTab.astro`, `NavigationDrawer.astro`
2. **Run:** `npx astro check 2>&1 | Select-Object -First 40`
3. **Verify NavigationBar + Tab:** tabs render in a row, active tab shows indicator, clicking switches active, keyboard arrows work
4. **Verify NavigationDrawer:** standard mode opens/closes, modal mode shows scrim, Escape closes modal, content slots correctly
5. **Add to showcase:** Append sections for NavigationBar and NavigationDrawer to `src/pages/component-showcase.astro`
6. **Visual check:** `http://localhost:4321/component-showcase`
7. **Fix issues** directly. Output PASS/FAIL per component.

##### Git Commit (ONLY after ALL PASS)
```bash
git add src/components/md/NavigationBar.astro src/components/md/NavigationTab.astro src/components/md/NavigationDrawer.astro src/pages/component-showcase.astro
git commit -m "feat(md): NavigationBar, NavigationTab, NavigationDrawer"
git push origin main
```

##### ⛔ Scoping
- Only fix/create the files listed above.

---

### Wave G — Segmented Buttons

---

#### Agent 1 — SegmentedButton + SegmentedButtonSet

Create `src/components/md/SegmentedButton.astro` and `src/components/md/SegmentedButtonSet.astro` — a group of toggleable segments.

**Lit source:**
- Button: `../../labs/segmentedbutton/internal/segmented-button.ts` + `../../labs/segmentedbutton/internal/outlined-segmented-button.ts` + `_shared.scss` + `_outlined-segmented-button.scss`
- Set: `../../labs/segmentedbuttonset/internal/segmented-button-set.ts` + `_shared.scss`

##### SegmentedButton Props
```astro
---
interface Props {
  disabled?: boolean;
  selected?: boolean;
  label?: string;
  noCheckmark?: boolean;
  class?: string;
}

const {
  disabled = false,
  selected = false,
  label = '',
  noCheckmark = false,
  class: className,
  ...attrs
} = Astro.props;

const hasLabel = label !== '';
---
```

##### SegmentedButton Template
```html
<button
  class:list={['md-segmented-button', {
    'md-segmented-button--selected': selected,
    'md-segmented-button--unselected': !selected,
    'md-segmented-button--with-label': hasLabel,
    'md-segmented-button--without-label': !hasLabel,
    'md-segmented-button--with-checkmark': !noCheckmark,
    'md-segmented-button--without-checkmark': noCheckmark,
  }, className]}
  aria-pressed={selected ? 'true' : 'false'}
  disabled={disabled || undefined}
  tabindex={disabled ? -1 : 0}
  {...attrs}
>
  <span class="md-segmented-button__outline"></span>
  <span class="md-segmented-button__leading" aria-hidden="true">
    <span class="md-segmented-button__graphic">
      <svg class="md-segmented-button__checkmark" viewBox="0 0 24 24">
        <path class="md-segmented-button__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
      </svg>
      {!hasLabel && (
        <span class="md-segmented-button__icon">
          <slot name="icon" />
        </span>
      )}
      {hasLabel && (
        <span class="md-segmented-button__icon">
          <slot name="icon" />
        </span>
      )}
    </span>
  </span>
  {hasLabel && <span class="md-segmented-button__label-text">{label}</span>}
  <span class="md-segmented-button__touch"></span>
</button>
```

##### SegmentedButtonSet Props
```astro
---
interface Props {
  multiselect?: boolean;
  class?: string;
}

const {
  multiselect = false,
  class: className,
  ...attrs
} = Astro.props;
---
```

##### SegmentedButtonSet Template
```html
<span
  class:list={['md-segmented-button-set', className]}
  role="group"
  data-multiselect={multiselect || undefined}
  {...attrs}
>
  <slot />
</span>
```

##### Style Reference — SegmentedButton
- Button reset, `display: flex; align-items: center; justify-content: center;`
- `border-radius: inherit;` (inherits from set's rounded corners)
- Outline: `border: 1px solid var(--line-strong); position: absolute; inset: 0 -0.5px; border-radius: inherit;`
- Spacing: `padding-inline: 12px;`
- **Selected state**: `background: var(--surface-container-highest, var(--surface-dim))`
- Checkmark: SVG path stroke animation (`stroke-dasharray: 29.7833385`, draw-in keyframe 150ms)
- When selected + has label: icon fades out, checkmark draws in
- When deselecting: checkmark fades out (50ms), icon fades in (150ms after 50ms delay)
- Icon/checkmark size: 18px
- Label: `font: var(--font-body)`, `font-size: var(--label-text-size, 14px)`
- Color states: selected icon/text use `var(--color-primary)`, unselected use `var(--text)`
- Disabled: `opacity: 0.38` on text/icon, `opacity: 0.12` on outline
- Touch target: 48px centered overlay
- Ripple via `::after` pseudo-element

##### Style Reference — SegmentedButtonSet
- `display: grid; grid-auto-columns: 1fr; grid-auto-flow: column; width: 100%;`
- Height: ~40px
- First child: `border-start-start-radius: 20px; border-end-start-radius: 20px;`
- Last child: `border-start-end-radius: 20px; border-end-end-radius: 20px;`

##### Script
```html
<script>
  document.querySelectorAll('.md-segmented-button-set').forEach((set) => {
    const isMulti = set.hasAttribute('data-multiselect');
    const buttons = Array.from(set.querySelectorAll('.md-segmented-button'));
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        if (isMulti) {
          const wasSelected = btn.classList.contains('md-segmented-button--selected');
          btn.classList.toggle('md-segmented-button--selected', !wasSelected);
          btn.classList.toggle('md-segmented-button--unselected', wasSelected);
          btn.setAttribute('aria-pressed', !wasSelected ? 'true' : 'false');
        } else {
          // Single select — cannot deselect
          if (btn.classList.contains('md-segmented-button--selected')) return;
          buttons.forEach((b) => {
            b.classList.remove('md-segmented-button--selected');
            b.classList.add('md-segmented-button--unselected');
            b.setAttribute('aria-pressed', 'false');
          });
          btn.classList.add('md-segmented-button--selected');
          btn.classList.remove('md-segmented-button--unselected');
          btn.setAttribute('aria-pressed', 'true');
        }
      });
    });
  });
</script>
```

##### Deliverables
1. Create `src/components/md/SegmentedButton.astro`
2. Create `src/components/md/SegmentedButtonSet.astro`

##### ⛔ Scoping Rules
1. ONLY create the two files above.
2. Do NOT modify any other files.
3. Do NOT run build/dev/check commands.
4. If you finish early, STOP.

---

#### Inspector — Wave G QA

> Deploy after Agent 1 finishes.

##### Audit Checklist
1. **Files:** `SegmentedButton.astro`, `SegmentedButtonSet.astro`
2. **Run:** `npx astro check 2>&1 | Select-Object -First 40`
3. **Verify:** single-select mode works (only one active at a time, cannot deselect)
4. **Verify:** multi-select mode works (each toggles independently)
5. **Verify:** checkmark animation on select, disabled state, with/without icon, with/without label
6. **Add to showcase:** Append SegmentedButton section to `src/pages/component-showcase.astro`
7. **Visual check:** `http://localhost:4321/component-showcase`
8. **Fix issues** directly. Output PASS/FAIL.

##### Git Commit (ONLY after ALL PASS)
```bash
git add src/components/md/SegmentedButton.astro src/components/md/SegmentedButtonSet.astro src/pages/component-showcase.astro
git commit -m "feat(md): SegmentedButton and SegmentedButtonSet"
git push origin main
```

##### ⛔ Scoping
- Only fix/create the files listed above.

---

### Wave H — SubMenu (Advanced)

---

#### Agent 1 — SubMenu

Create `src/components/md/SubMenu.astro` — a wrapper that nests a `Menu` inside a `MenuItem`, opening on hover or click.

**Lit source:** `../../menu/internal/submenu/sub-menu.ts` (~400 lines)

##### Props Interface
```astro
---
interface Props {
  hoverOpenDelay?: number;
  hoverCloseDelay?: number;
  class?: string;
}

const {
  hoverOpenDelay = 400,
  hoverCloseDelay = 400,
  class: className,
  ...attrs
} = Astro.props;
---
```

##### Template
The SubMenu component wraps a trigger `<slot name="item">` and a nested `<slot name="menu">`:
```html
<span
  class:list={['md-sub-menu', className]}
  data-hover-open-delay={hoverOpenDelay}
  data-hover-close-delay={hoverCloseDelay}
  {...attrs}
>
  <span class="md-sub-menu__item">
    <slot name="item" />
  </span>
  <span class="md-sub-menu__menu">
    <slot name="menu" />
  </span>
</span>
```

##### Style Reference
- `position: relative;` (anchor for the nested menu)
- `.md-sub-menu__menu`: positioned absolute, hidden by default
- Nested `.md-menu` inside gets `position: absolute; top: 0; inset-inline-start: 100%;`

##### Script (complex — hover with delay, click, keyboard, RTL-aware)
```html
<script>
  document.querySelectorAll('.md-sub-menu').forEach((subMenu) => {
    const itemSlot = subMenu.querySelector('.md-sub-menu__item');
    const menuSlot = subMenu.querySelector('.md-sub-menu__menu');
    const menu = menuSlot?.querySelector('.md-menu');
    if (!itemSlot || !menu) return;

    const openDelay = parseInt(subMenu.getAttribute('data-hover-open-delay') || '400');
    const closeDelay = parseInt(subMenu.getAttribute('data-hover-close-delay') || '400');
    let openTimeout = 0;
    let closeTimeout = 0;

    function showMenu() {
      clearTimeout(closeTimeout);
      menu.classList.add('md-menu--open');
      menu.removeAttribute('aria-hidden');
    }
    function hideMenu() {
      clearTimeout(openTimeout);
      menu.classList.remove('md-menu--open');
      menu.setAttribute('aria-hidden', 'true');
    }

    subMenu.addEventListener('mouseenter', () => {
      clearTimeout(closeTimeout);
      if (menu.classList.contains('md-menu--open')) return;
      openTimeout = setTimeout(showMenu, openDelay);
    });
    subMenu.addEventListener('mouseleave', () => {
      clearTimeout(openTimeout);
      closeTimeout = setTimeout(hideMenu, closeDelay);
    });

    itemSlot.addEventListener('click', (e) => {
      e.stopPropagation();
      showMenu();
    });

    itemSlot.addEventListener('keydown', (e) => {
      const isRtl = getComputedStyle(subMenu).direction === 'rtl';
      const openKey = isRtl ? 'ArrowLeft' : 'ArrowRight';
      if (e.key === openKey || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        showMenu();
        const firstItem = menu.querySelector('.md-menu-item:not([disabled])');
        if (firstItem) firstItem.focus();
      }
    });

    menuSlot.addEventListener('keydown', (e) => {
      const isRtl = getComputedStyle(subMenu).direction === 'rtl';
      const closeKey = isRtl ? 'ArrowRight' : 'ArrowLeft';
      if (e.key === closeKey || e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        hideMenu();
        const trigger = itemSlot.querySelector('button, [role="menuitem"]');
        if (trigger) trigger.focus();
      }
    });
  });
</script>
```

##### Deliverables
1. Create `src/components/md/SubMenu.astro`

##### ⛔ Scoping Rules
1. ONLY create `src/components/md/SubMenu.astro`.
2. Do NOT modify `Menu.astro` or `MenuItem.astro` or any other files.
3. Do NOT run build/dev/check commands.
4. If you finish early, STOP.

---

#### Inspector — Wave H QA

> Deploy after Agent 1 finishes.

##### Audit Checklist
1. **File:** `SubMenu.astro`
2. **Run:** `npx astro check 2>&1 | Select-Object -First 40`
3. **Verify:** hover opens submenu after delay, hover away closes after delay
4. **Verify:** click opens submenu immediately
5. **Verify:** Arrow-right opens, Arrow-left / Escape closes (RTL-aware)
6. **Verify:** nested menu positions correctly to the right of the trigger
7. **Add to showcase:** Append SubMenu section to `src/pages/component-showcase.astro` (nest a Menu inside a MenuItem inside a SubMenu)
8. **Visual check:** `http://localhost:4321/component-showcase`
9. **Fix issues** directly. Output PASS/FAIL.

##### Git Commit (ONLY after PASS)
```bash
git add src/components/md/SubMenu.astro src/pages/component-showcase.astro
git commit -m "feat(md): SubMenu component"
git push origin main
```

##### ⛔ Scoping
- Only fix/create the files listed above.

---

## Completed Waves

### Wave 1 — Foundation ✅
| Agent | Deliverable | Status |
|---|---|---|
| Foundation CSS | `ripple.css`, `elevation.css`, `focus-ring.css`, `md-tokens.css` | ✅ |
| Icon | `Icon.astro` | ✅ |
| Divider | `Divider.astro` | ✅ |

### Earlier Wave 2 (partial) ✅
| Agent | Deliverable | Status |
|---|---|---|
| Button | `Button.astro` | ✅ |
| Icon Button | `IconButton.astro` | ✅ |
| FAB | `FAB.astro` | ✅ |

### Wave A — Form Controls ✅
| Agent | Deliverable | Status |
|---|---|---|
| Checkbox | `Checkbox.astro` | ✅ |
| Radio | `Radio.astro` | ✅ |
| Switch | `Switch.astro` | ✅ |

### Wave B — Slider, TextField, Select ✅
| Agent | Deliverable | Status |
|---|---|---|
| Slider | `Slider.astro` | ✅ |
| TextField | `TextField.astro` | ✅ |
| Select | `Select.astro` + `SelectOption.astro` | ✅ |

### Wave C — Chips, List, Menu ✅
| Agent | Deliverable | Status |
|---|---|---|
| Chips | `Chip.astro` + `ChipSet.astro` | ✅ |
| List | `List.astro` + `ListItem.astro` | ✅ |
| Menu | `Menu.astro` + `MenuItem.astro` | ✅ |

### Wave D — Tabs, Dialog, Progress ✅
| Agent | Deliverable | Status |
|---|---|---|
| Tabs | `Tabs.astro` + `Tab.astro` | ✅ |
| Dialog | `Dialog.astro` | ✅ |
| Progress | `CircularProgress.astro` + `LinearProgress.astro` | ✅ |

### Showcase — Component Demo Page ✅
| Agent | Deliverable | Status |
|---|---|---|
| Showcase | `component-showcase.astro` (all 18 components) | ✅ |

### Wave E — Badge + Card ✅
| Agent | Deliverable | Status |
|---|---|---|
| Agent 1 | `Badge.astro` | ✅ |
| Agent 2 | `Card.astro` | ✅ |

### Wave F — Navigation: Bar, Tab, Drawer ✅
| Agent | Deliverable | Status |
|---|---|---|
| Agent 1 | `NavigationBar.astro` + `NavigationTab.astro` | ✅ |
| Agent 2 | `NavigationDrawer.astro` | ✅ |

### Wave G — Segmented Buttons ✅
| Agent | Deliverable | Status |
|---|---|---|
| Agent 1 | `SegmentedButton.astro` + `SegmentedButtonSet.astro` | ✅ |

### Wave H — SubMenu ✅
| Agent | Deliverable | Status |
|---|---|---|
| Agent 1 | `SubMenu.astro` | ✅ |

---

## Conversion Rules (all agents must follow)

### Props Interface
```astro
---
interface Props {
  variant?: 'filled' | 'outlined';
  disabled?: boolean;
  label?: string;
  class?: string;
}

const {
  variant = 'filled',
  disabled = false,
  label,
  class: className,
  ...attrs
} = Astro.props;
---
```

Map `@property()` decorators → TypeScript props. Use Lit `type` for TS type.

### Template Conversion

| Lit Pattern | Astro Equivalent |
|---|---|
| `` html`<div>${x}</div>` `` | `<div>{x}</div>` |
| `<slot name="icon"></slot>` | `<slot name="icon" />` |
| `` classMap({active}) `` | `` class:list={['base', { active }]} `` |
| `?disabled=${this.disabled}` | `disabled={disabled}` |
| `aria-label=${x \|\| nothing}` | `aria-label={x \|\| undefined}` |
| `@click=${handler}` | `<script>` block |

### Styles
- Convert SCSS → plain CSS in `<style>` (Astro auto-scopes)
- Replace `:host` → root element selector
- Replace `:host([attr])` → `.root[data-attr]` or modifier class
- Use `var(--token)` from `tokens.css`

### Token Mapping

| MD Token | Driller Token |
|---|---|
| `--md-sys-color-primary` | `var(--color-primary)` |
| `--md-sys-color-on-primary` | `var(--color-dark)` |
| `--md-sys-color-surface` | `var(--surface)` |
| `--md-sys-color-on-surface` | `var(--text)` |
| `--md-sys-color-on-surface-variant` | `var(--text-muted)` |
| `--md-sys-color-outline` | `var(--line-strong)` |
| `--md-sys-color-outline-variant` | `var(--line)` |
| `--md-sys-typescale-label-large-font` | `var(--font-body)` |
| `--md-sys-shape-corner-full` | `9999px` |
| `--md-sys-shape-corner-medium` | `12px` |
| `--md-sys-shape-corner-small` | `8px` |

### Interactive Components
```astro
<script>
  document.querySelectorAll('.md-switch').forEach((el) => {
    const input = el.querySelector('input');
    input?.addEventListener('change', () => {
      el.classList.toggle('selected', input.checked);
    });
  });
</script>
```

### ⛔ Agent Scoping Rules (MANDATORY)

> **Each agent is assigned ONE component (or one tightly-coupled pair). You MUST NOT create, modify, or "help with" any component outside your assignment.**

1. **Only create files listed in YOUR deliverables** — if your assignment says `Button.astro`, you create `Button.astro` and nothing else in `src/components/md/`
2. **Do NOT create other agents' components** — even if you see they don't exist yet. Another agent is handling them.
3. **Do NOT modify files created by other agents** — no editing `Icon.astro`, `Divider.astro`, `FAB.astro`, etc. unless they are explicitly listed in YOUR deliverables.
4. **Do NOT modify shared CSS files** — `tokens.css`, `global.css`, `ripple.css`, `elevation.css`, `focus-ring.css`, `md-tokens.css` are off-limits.
5. **The showcase page is append-only** — when adding to `component-showcase.astro`, only add YOUR section. Do not reorganize, rewrite, or delete other sections.
6. **If you finish early, STOP** — do not look for additional work. Report completion and wait.
7. **Do NOT test or verify** — do not run `astro check`, `astro dev`, or any build/test commands. Do not create or modify the showcase page. Testing and verification are handled exclusively by the **Inspector (QA) agent**.

**Violation of these rules will cause merge conflicts and break other agents' work.**

---

### Critical Rules
1. **No Lit/web component JS** — pure Astro/HTML/CSS/vanilla JS only
2. **No Shadow DOM** — use Astro scoped styles
3. **Native HTML elements** first — `<button>`, `<input>`, `<dialog>`, etc.
4. **Token-first** — use CSS custom properties, not hard-coded values
5. **Do NOT test** — testing is the Inspector's job, not yours. Build your component and stop.
6. **Respect wave order** — don't reference files that haven't been created yet
