# Prompt Patterns

> **Reference for the Manager** — reusable prompt templates for common task types. Copy and customize these when writing worker prompts.

---

## Pattern 1: Create a Page

Use when a worker needs to build a complete page (route).

```markdown
# Wave {{WAVE_ID}} — {{Page Name}} Page

> ⛔ **STRICT COMPLIANCE — READ BEFORE DOING ANYTHING**
> 1. Do ONLY what this prompt says. Nothing more.
> 2. Do NOT add features, files, or improvements not listed in the deliverables.
> 3. Do NOT refactor, reorganize, or "improve" existing code.
> 4. Do NOT install packages, modify config files, or touch files outside your scope.
> 5. If something seems like a good idea but isn't in your deliverables — **DON'T DO IT.**
> 6. When you finish your listed tasks, **STOP. Do not look for more work.**

You are a Worker Agent on the {{PROJECT_NAME}} project.

Read `agents.md` for project coding standards.
Read `.agents/skills/worker.md` for your behavioral contract.
Read `.agents/state/shared-context.md` for available utilities and components.

Also read for context:
- {{path to relevant existing files}}

**Your job:** Create the {{page name}} page.

## Deliverables — {{N}} files

### 1. `{{path/to/page.ext}}`

{{Description of the page — what it shows, how it fetches data, layout structure.}}

Must include:
- {{requirement 1}}
- {{requirement 2}}
- {{requirement 3}}

Handle:
- {{edge case 1 — e.g., empty state}}
- {{edge case 2 — e.g., error state}}

## ⛔ Scoping Rules (MANDATORY)
1. ONLY create the files listed above.
2. Do NOT modify any existing files.
3. If you finish early, STOP.

## Completion
Write your report to `.agents/handoffs/agent-{{N}}-report.md`.
```

---

## Pattern 2: Create Components

Use when a worker needs to build multiple related components.

```markdown
# Wave {{WAVE_ID}} — {{Component Group}} Components

> ⛔ **STRICT COMPLIANCE — READ BEFORE DOING ANYTHING**
> [... same compliance block ...]

You are a Worker Agent on the {{PROJECT_NAME}} project.

Read `agents.md` for project coding standards.
Read `.agents/skills/worker.md` for your behavioral contract.
Read `.agents/state/shared-context.md` for available utilities and components.

**Your job:** Create the {{component group}} components.

## Available Components (DO NOT RECREATE)

These components already exist. Import and use them:
| Component | Import Path | Key Props |
|---|---|---|
| {{Name}} | `{{path}}` | {{props}} |

## Deliverables — {{N}} files

### 1. `{{path/to/Component.ext}}`

Props:
- `{{propName}}`: `{{type}}` — {{description}}

Must include:
- {{visual/functional requirement}}

### 2. `{{path/to/AnotherComponent.ext}}`
{{...}}

## Design Tokens
Use these CSS custom properties — do NOT hardcode values:
- `var(--color-primary)` for accent colors
- `var(--color-surface)` for backgrounds
- `var(--font-display)` for headings
- `var(--font-body)` for body text
- `var(--space-N)` for spacing

## ⛔ Scoping Rules (MANDATORY)
1. ONLY create the {{N}} files listed above.
2. Do NOT modify any existing files.
3. If you finish early, STOP.

## Completion
Write your report to `.agents/handoffs/agent-{{N}}-report.md`.
```

---

## Pattern 3: Add API / Backend Endpoint

Use when a worker needs to create backend routes, API endpoints, or server-side logic.

```markdown
# Wave {{WAVE_ID}} — {{API Name}} Endpoint

> ⛔ **STRICT COMPLIANCE — READ BEFORE DOING ANYTHING**
> [... same compliance block ...]

You are a Worker Agent on the {{PROJECT_NAME}} project.

Read `agents.md` for project coding standards.
Read `.agents/skills/worker.md` for your behavioral contract.

Also read for context:
- {{path to existing API files, types, schema}}

**Your job:** Create the {{API name}} endpoint.

## Deliverables — {{N}} files

### 1. `{{path/to/endpoint.ext}}`

Method: {{GET/POST/PUT/DELETE}}
Route: `{{/api/resource}}`

Request body (if applicable):
```json
{
  "field": "type"
}
```

Response:
```json
{
  "field": "type"
}
```

Must handle:
- {{success case}}
- {{validation errors}}
- {{auth/permissions}}

### 2. `{{path/to/types.ext}}` (if needed)
{{Type definitions for request/response}}

## ⛔ Scoping Rules (MANDATORY)
1. ONLY create/modify the files listed above.
2. Do NOT modify any existing files outside scope.
3. If you finish early, STOP.

## Completion
Write your report to `.agents/handoffs/agent-{{N}}-report.md`.
```

---

## Pattern 4: Inspector Prompt

Use when writing the Inspector's audit checklist for a wave.

```markdown
# Wave {{WAVE_ID}} — {{Wave Title}} QA

> ⛔ **STRICT COMPLIANCE**
> Fix Wave {{WAVE_ID}} files only. Do NOT modify earlier wave files unless the build demands it.

You are the Inspector — the QA agent for this project.

Read `agents.md` for project coding standards.
Read `.agents/skills/inspector.md` for your role definition and report format.
Read `.agents/config/project.md` for build commands and project context.
Read `.agents/skills/seo-auditor.md` for SEO audit checklists.
Read `.agents/skills/brand-guardian.md` for brand consistency checks.
Read `.agents/skills/accessibility-auditor.md` for WCAG 2.2 AA checks.

Read the agent completion reports:
- `.agents/handoffs/agent-1-report.md`
- `.agents/handoffs/agent-2-report.md`
- `.agents/handoffs/agent-3-report.md` (if applicable)

{{N}} worker agents completed Wave {{WAVE_ID}}.

## What was built:
- Agent 1: {{task summary}}
- Agent 2: {{task summary}}
- Agent 3: {{task summary}} (if applicable)

## Files to audit:

**Agent 1 — {{Task}}:**
- `{{path/to/file1}}`
- `{{path/to/file2}}`

**Agent 2 — {{Task}}:**
- `{{path/to/file3}}`
- `{{path/to/file4}}`

## Audit Checklist:

### 1. {{Section Name}}
- [ ] {{Check 1}}
- [ ] {{Check 2}}
- [ ] {{Check 3}}

### 2. Design Token Compliance
- [ ] No hardcoded colors
- [ ] Fonts use project font tokens
- [ ] Spacing uses token variables
- [ ] Components follow project patterns

### 3. SEO Audit (page files only)
- [ ] Meta tags (title, description, OG tags)
- [ ] Heading structure (single h1, logical hierarchy)
- [ ] Image alt text and optimization
- [ ] Structured data (product/category/vendor pages)

### 4. Brand Compliance
- [ ] Color token compliance (no hardcoded hex)
- [ ] Typography compliance (correct fonts, weights)
- [ ] Voice & tone (user-facing copy)

### 5. Accessibility
- [ ] Form labels and ARIA attributes
- [ ] Color contrast ratios
- [ ] Keyboard navigation (focus order, indicators)
- [ ] Skip navigation link

### 6. Build Check (MUST PASS)

Run from the project root:

**Step 1 — Typecheck:**
```bash
{{typecheck command from config/project.md}}
```

**Step 2 — Build:**
```bash
{{build command from config/project.md}}
```

If either fails, fix the errors in the affected files.

## After all fixes, commit and push:
```bash
git add .
git commit -m "wave {{WAVE_ID}}: {{description}} — Inspector {{PASS/FAIL}}"
git push origin {{branch}}
```

Write your report to `.agents/handoffs/inspector-report.md`.

## ⛔ Scoping
- Fix only the files listed above.
- Do NOT modify files from previous waves unless the build demands it.
```

---

## Tips for Effective Prompts

1. **Be specific about file paths** — `src/components/cart/CartItem.astro`, not "a cart item component"
2. **Include code scaffolds** when structure matters — show the exact imports, layout, and data flow
3. **List available components** so agents use them instead of rebuilding
4. **Specify design tokens** so agents don't hardcode values
5. **Include edge cases** — empty states, error states, loading states
6. **One focused task per agent** — don't give one agent two unrelated tasks
7. **Keep prompts under ~4000 words** — too long and agents lose focus on details
