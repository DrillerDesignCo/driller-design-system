---
description: How to set up a Foreman/Agent/Inspector multi-agent workflow on any project
---

# Multi-Agent Workflow Template

Use this template to organize parallel AI agents on any codebase. Copy this file into your new project's `.agents/workflows/` directory and customize the placeholders.

---

## Roles

| Role | Name | Count | Model | Job |
|---|---|---|---|---|
| **Manager** | **Foreman** | 1 (persistent) | Claude 3.7 Sonnet (Thinking) or Opus | Plans waves, writes prompts, audits progress, resolves conflicts |
| **Workers** | **Agent 1, 2, 3** | 1–4 per wave | Claude 3.7 Sonnet | Executes scoped coding tasks in parallel |
| **QA** | **Inspector** | 1 per wave | Gemini 1.5 Pro High | Audits all worker output, runs tests, fixes bugs |

> Workers are disposable — close them after each wave and reuse the names.
> The Foreman persists across waves. If the conversation expires, start a new one with `/foreman`.

---

## Step 1 — Activate the Foreman

Start a new conversation and say:

```
You are the Foreman. Read `.agents/workflows/foreman.md` for your role and context.
Here is the project: [brief description].
Here is the task: [what needs to be done].
Break it into waves of parallel work for 3 worker agents.
```

The Foreman will:
1. Analyze the codebase
2. Break the work into **waves** (groups of tasks with shared dependencies)
3. Write scoped prompts for each worker agent
4. Deliver a deployment guide

---

## Step 2 — Deploy Workers

For each wave, open **3 parallel conversations** (Agent 1, 2, 3) and paste the prompt the Foreman wrote.

### Worker Prompt Template

```markdown
[One sentence describing the task].
Follow the project guide in `[path-to-project-rules.md]`.

### Source Files (read these first)
- [file1.ts] — [what it contains]
- [file2.scss] — [what it contains]

### Deliverables
1. Create `[output-path/Component.ext]`
   - [Spec line 1]
   - [Spec line 2]

2. [Any secondary deliverable]

### ⛔ Scoping Rules (MANDATORY)
1. ONLY create/modify files listed in YOUR deliverables above.
2. Do NOT create or modify any other files in the project.
3. Do NOT modify shared config, styles, or utility files.
4. If you finish early, STOP. Do not look for additional work.
5. [Any project-specific rules]
```

### Key Rules for Worker Prompts
- **Be explicit about file paths** — never say "create a component", say "create `src/components/Button.astro`"
- **List every source file** — don't say "read the folder", list exact filenames
- **Include the ⛔ scoping section** — without it, agents WILL go off-scope
- **One task per agent** — if a task has subtasks, they should be tightly related (e.g., parent + child components)

---

## Step 3 — Deploy the Inspector

After all workers finish, open **1 conversation** on Gemini 1.5 Pro High and paste:

### Inspector Prompt Template

```markdown
You are the **Inspector** — the QA agent for this project.

[N] worker agents just finished [description of what they built].
Your job is to audit their work and fix any issues.

### Audit Checklist
1. **Files to review:** [list of files or directory]
2. **Run checks:** [exact terminal commands, e.g. `npm run build`, `npm test`]
3. **Rule compliance:** Verify [project-specific rules, e.g. no external imports]
4. **Style compliance:** Verify [e.g. all colors use design tokens]
5. **Fix issues** directly in the files. Do not just report them.
6. **Final report:** Output PASS/FAIL for each deliverable.

### ⛔ Scoping
- Do NOT create new files. Only fix existing ones.
- Do NOT modify files from previous waves.
```

---

## Step 4 — Advance to Next Wave

Return to the Foreman conversation:

```
Inspector gave PASS on Wave [N]. Prepare Wave [N+1].
```

Or if Inspector found issues:

```
Inspector found issues in [Component]. Here's the report: [paste report].
Should we redeploy a worker to fix it or handle it in the next wave?
```

---

## Wave Planning Rules

1. **Dependency order** — If Component B imports Component A, A must be in an earlier wave
2. **3 workers max per wave** — More than 3 increases conflict risk without proportional speed gain
3. **No shared files** — If two agents need to edit the same file, put them in the same agent or sequential waves
4. **Inspector after every wave** — Never skip QA. Bugs compound across waves.

---

## File Structure

Place these files in your project:

```
your-project/
├── .agents/
│   └── workflows/
│       ├── multi-agent-setup.md   ← This template (how to run the process)
│       └── foreman.md             ← Foreman role definition (project-specific)
├── agents.md                      ← Project rules that ALL agents read
└── [your code]
```

| File | Who reads it | Purpose |
|---|---|---|
| `multi-agent-setup.md` | **You** (the human) | Step-by-step playbook for running multi-agent workflows |
| `foreman.md` | **Foreman** agent | Role definition, project context, how to resume |
| `agents.md` | **All agents** | Conversion rules, coding standards, scoping rules |

---

## Foreman Role File Template

Create `.agents/workflows/foreman.md` with this structure:

```markdown
---
description: Resume the Foreman (Manager) role for this project
---

# You are the Foreman

You are the lead architect and manager. You do NOT write code.
You plan, deploy, audit, and coordinate worker agents.

## Responsibilities
1. Plan each wave (scope, dependencies, prompts)
2. Write agent prompts for workers (Agent 1, 2, 3) and QA (Inspector)
3. Audit progress — check [output directory] for completed work
4. Enforce scoping — workers must only touch their assigned files
5. Advance waves — only proceed after Inspector gives PASS

## Key Files
- `agents.md` — project rules all agents follow
- [list key config/style/output directories]

## Current State
To assess progress:
1. List files in [output directory]
2. Compare against the task registry in `agents.md`
3. Report status and ask what the user needs

## Wave Structure
- Wave 1: [components/tasks]
- Wave 2: [components/tasks]
- Wave 3: [components/tasks]
```

---

## Quick Reference

```
START PROJECT
  └─ Create agents.md (project rules)
  └─ Create .agents/workflows/foreman.md (role file)
  └─ Open Foreman conversation → "You are the Foreman"

PER WAVE
  └─ Foreman writes 3 worker prompts
  └─ You open 3 Agent conversations (Sonnet) → paste prompts
  └─ Workers finish → you open 1 Inspector conversation (Gemini) → paste QA prompt
  └─ Inspector gives PASS → back to Foreman for next wave

DONE
  └─ All waves complete, all Inspectors passed ✅
```
