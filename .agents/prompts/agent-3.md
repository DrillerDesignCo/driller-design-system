# Wave 34 — Final Bug Fixes & Critical Site Issues

> ⛔ **STRICT COMPLIANCE — READ BEFORE DOING ANYTHING**
> 1. Do ONLY what this prompt says. Nothing more.
> 2. Do NOT add features, files, or improvements not listed in the deliverables.
> 3. Do NOT refactor, reorganize, or "improve" existing code.
> 4. Do NOT install packages, modify config files, or touch files outside your scope.
> 5. If something seems like a good idea but isn't in your deliverables — **DON'T DO IT.**
> 6. When you finish your listed tasks, **STOP. Do not look for more work.**

You are a Worker Agent on the Apostolic Shop project.

Read `agents.md` at `c:\Users\Garrett\Documents\Apostolic Shop\agents.md`.
Read the worker behavioral contract at `c:\Users\Garrett\Documents\Apostolic Shop\.agents\skills\worker.md`.

Also read for context:
- `apps/storefront/src/components/admin/AdminNav.astro`
- Account sidebar (which is currently duplicated in 7 page files under `apps/storefront/src/pages/account/` and `apps/storefront/src/pages/seller/` or maybe just `AccountSidebar.astro` if you extract it first). Wait, the prompt tells you what to do.

**Your job:** Fix "Sidebars are being hidden by the top navigation header" + Extract `AccountSidebar.astro`

## Deliverables — 9 files

### 1. `apps/storefront/src/components/AccountSidebar.astro`
- **Issue:** The sidebars are being hidden by the sticky top navigation header.
- **Goal:** Extract the duplicated account sidebar (from `pages/account/index.astro`, etc) into a shared Astro component `AccountSidebar.astro`. 
- Fix the CSS `position: sticky; top: ...` offset to account for the site header height (e.g. `top: calc(64px + var(--spacing-lg))`). Remove any hardcoded hex colors or rgba, substituting design tokens.
- Accept an `activePage` string prop to highlight the correct nav item.

### 2. `apps/storefront/src/pages/account/index.astro`
- Import and use `<AccountSidebar activePage="dashboard" />`.
- Delete the inline duplicate sidebar HTML/CSS.

### 3. `apps/storefront/src/pages/account/orders/index.astro`
- Import and use `<AccountSidebar activePage="orders" />`. Delete duplicate.

### 4. `apps/storefront/src/pages/account/orders/[code].astro`
- Import and use `<AccountSidebar activePage="orders" />`. Delete duplicate.

### 5. `apps/storefront/src/pages/account/settings.astro`
- Import and use `<AccountSidebar activePage="settings" />`. Delete duplicate.

### 6. `apps/storefront/src/pages/account/messages/index.astro`
- Import and use `<AccountSidebar activePage="messages" />`. Delete duplicate.

### 7. `apps/storefront/src/pages/account/messages/[id].astro`
- Import and use `<AccountSidebar activePage="messages" />`. Delete duplicate.

### 8. `apps/storefront/src/pages/account/favorites.astro`
- Import and use `<AccountSidebar activePage="favorites" />`. Delete duplicate.

### 9. `apps/storefront/src/layouts/SellerLayout.astro`
- Fix the same sticky sidebar issue here. The seller sidebar is in `SellerLayout.astro`. Update the `top` CSS value to account for the primary header (e.g., `top: calc(64px + var(--spacing-lg))`).

## ⛔ Scoping Rules (MANDATORY)
1. ONLY create/modify the 9 files listed above.
2. Do NOT modify any other existing files.
3. If you finish early, STOP.

## Completion
When done, write your report to `.agents/handoffs/agent-3-report.md` using the template format defined in `skills/worker.md`.
