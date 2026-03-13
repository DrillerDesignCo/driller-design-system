---
description: How to run the Manager/Agent/Inspector multi-agent workflow
---

# Multi-Agent Coding — Workflow Playbook

This is **your** (the human operator's) step-by-step guide for running parallel AI agents on the Apostolic Shop project.

---

## Roles

| Role | Name | Count | Job |
|---|---|---|---|
| **Manager** | Manager | 1 (persistent) | Plans waves, writes prompts, audits progress, resolves conflicts |
| **Frontend Workers** | Agent 1, 2, 3 | 1–3 per wave | Executes scoped frontend coding tasks in parallel |
| **Backend Worker** | Agent 4 | 0–1 per wave | Executes scoped backend/server tasks (Vendure plugins, config) |
| **QA** | Inspector | 1 per wave | Audits all worker output, runs builds, fixes bugs |

> **Workers are disposable** — close them after each wave and reuse the names.
> **The Manager persists** across waves. If the conversation expires, start a new one with `/manager` or `/foreman`.

---

## Setup (One-Time)

Before your first wave, make sure these files are configured:

1. **`.agents/config/project.md`** — Your project's tech stack, repo structure, design system, and build commands ✅
2. **`agents.md`** (project root) — Project-wide coding standards that all agents follow ✅
3. Verify the directory structure exists:
       ├── multi-agent-setup.md    ← This playbook (you're reading it)
       ├── manager.md              ← /manager slash command trigger
       └── foreman.md              ← /foreman alias (same as manager)
   ```

---

## Per-Wave Workflow

### Step 1 — Activate the Manager

Start a new conversation (or continue the Manager's existing one) and say:

```
You are the Manager. Read `.agents/skills/manager.md` for your role.
Read `.agents/config/project.md` for project context.
Read `.agents/state/wave-log.md` for completed work history.

Here is the task: [describe what needs to be done next]
Break it into waves of parallel work for up to 4 worker agents (3 frontend + 1 backend).
```

The Manager will:
1. Read role, config, and state files
2. Assess current progress
3. Plan the next wave
4. Write scoped prompts → overwrite `prompts/agent-N.md`
5. Write an Inspector prompt → overwrite `prompts/inspector.md`
6. Update `state/current-wave.md`, `state/shared-context.md`, and `state/board.md`

### Step 2 — Deploy Workers

Workers self-assign from the **community board** (`.agents/state/board.md`). The Manager marks each slot as `🟡 Pending` when writing prompts.

**Preferred: Self-assignment via `/agent`**

Open a new conversation for each agent and just type:
```
agent
```

The agent will:
1. Read the community board
2. Claim the first `🟡 Pending` slot
3. Announce which task it picked up
4. Execute the corresponding prompt
5. Mark itself `✅ Complete` when done

Repeat for each agent slot. If all slots are taken, the new agent will stop automatically.

**Alternative: Direct prompt execution**

You can also start agents manually by specifying their prompt file:
```
Read and execute c:\Users\Garrett\Documents\Apostolic Shop\.agents\prompts\agent-1.md
```

**All agents run simultaneously.** Wait for all to finish before deploying the Inspector.

> Each agent will write a structured completion report to `.agents/handoffs/agent-N-report.md` when done.
> Check `board.md` to see which agents are still running vs complete.

### Step 3 — Deploy the Inspector

After all workers finish, open a new conversation and say:

```
Read and execute c:\Users\Garrett\Documents\Apostolic Shop\.agents\prompts\inspector.md
```

The Inspector will:
1. Read agent completion reports from `handoffs/`
2. Audit all files created/modified in this wave
3. Run build/typecheck commands
4. Verify coding standards compliance
5. Fix any issues directly
6. Write a structured report to `handoffs/inspector-report.md`
7. Commit and push (if specified)

### Step 4 — Advance to Next Wave

Return to the Manager conversation:

**If Inspector passed:**
```
Inspector finished Wave [N]. Read `.agents/handoffs/inspector-report.md` for the full report.
Please update the wave log and prepare Wave [N+1].
```

**If Inspector found issues it couldn't fix:**
```
Inspector found unresolved issues in Wave [N]. Read `.agents/handoffs/inspector-report.md`.
Should we redeploy a worker to fix it, or handle it in the next wave?
```

The Manager will:
1. Read the Inspector report
2. Read agent reports for additional context
3. Update `state/wave-log.md` with results
4. Plan the next wave (or re-deploy fixes)

---

## Wave Planning Rules

1. **Dependency order** — If Component B imports Component A, A must be in an earlier wave
2. **4 workers max per wave** (3 frontend + 1 backend) — More increases conflict risk without proportional speed gain
3. **No shared files** — If two agents need to edit the same file, put them in one agent's prompt or use sequential waves
4. **Inspector after every wave** — Never skip QA. Bugs compound across waves
5. **Design tokens first** — Styling config must exist before any component waves
6. **Backend before frontend** — APIs/data sources should exist before the pages that consume them
7. **All agents run simultaneously** — Structure waves so agents don't depend on each other within the same wave

---

## Information Flow Diagram

```
┌─────────────┐
│   Manager   │
│  (plans +   │
│  coordinates)│
└──────┬──────┘
       │ writes prompts/
       ├──────────────────────────────────────────┐
       │                                          │
       ▼                                          ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────────┐
│   Agent 1    │  │   Agent 2    │  │   Agent 3        │
│  (worker)    │  │  (worker)    │  │  (worker)        │
└──────┬───────┘  └──────┬───────┘  └──────┬───────────┘
       │                 │                  │
       │ writes          │ writes           │ writes
       │ handoffs/       │ handoffs/        │ handoffs/
       ▼                 ▼                  ▼
┌─────────────────────────────────────────────────────┐
│              Shared Files (.agents/)                │
│  ┌─────────────────┐  ┌──────────────────────────┐  │
│  │  handoffs/      │  │  state/                  │  │
│  │  agent-N-report │  │  wave-log.md             │  │
│  │  inspector-report│ │  current-wave.md         │  │
│  └────────┬────────┘  └──────────────────────────┘  │
│           │                                          │
└───────────┼──────────────────────────────────────────┘
            │ reads handoffs/ + audits files
            ▼
     ┌──────────────┐
     │  Inspector   │
     │  (QA)        │
     └──────┬───────┘
            │ writes inspector-report.md
            ▼
     ┌──────────────┐
     │   Manager    │
     │  (reads +    │
     │  advances)   │
     └──────────────┘
```

---

## Prompt Requirements (for Manager)

When the Manager writes worker prompts, every prompt **must** include:

- ⛔ **STRICT COMPLIANCE block** at the top
- ⛔ **Scoping Rules** at the bottom
- **Explicit file paths** — say `src/components/Header.astro`, not "create a header"
- **Reference to `agents.md`** — coding standards
- **Reference to `skills/worker.md`** — behavioral contract (frontend agents)
- **Reference to `skills/backend-worker.md`** — behavioral contract (backend agents)
- **Reference to `state/shared-context.md`** — available utilities and components
- **Completion instructions** — write report to `handoffs/agent-N-report.md`
- **Code snippets** when precision matters (exact imports, component structure)
- **One focused task per agent** — don't split one task across agents

---

## Build Check Reminder

IMPORTANT — Inspector build checks:

**Frontend (storefront):**
  - Run `cd apps/storefront && npx astro check` FIRST — this catches type errors
  - Run `cd apps/storefront && npm run build` SECOND — this catches build/compile errors
  - `astro build` alone does NOT catch type errors!

**Backend (server) — only if Agent 4 was deployed:**
  - Run `cd apps/server && npx tsc --noEmit` — this catches type errors without building

---

## Quick Reference

```
PER WAVE:
  1. Manager writes prompts → agent-1.md, agent-2.md, (agent-3.md), (agent-4.md), inspector.md
  2. You open up to 4 agent conversations (simultaneously):
     "Read and execute c:\Users\Garrett\Documents\Apostolic Shop\.agents\prompts\agent-1.md"
     "Read and execute c:\Users\Garrett\Documents\Apostolic Shop\.agents\prompts\agent-2.md"
     "Read and execute c:\Users\Garrett\Documents\Apostolic Shop\.agents\prompts\agent-3.md"
     "Read and execute c:\Users\Garrett\Documents\Apostolic Shop\.agents\prompts\agent-4.md"  (backend, if needed)
  3. All agents finish (each writes handoffs/agent-N-report.md)
  4. You open 1 Inspector conversation:
     "Read and execute c:\Users\Garrett\Documents\Apostolic Shop\.agents\prompts\inspector.md"
  5. Inspector reads agent reports, audits, fixes, writes inspector-report.md
  6. Back to Manager:
     "Read .agents/handoffs/inspector-report.md and advance to next wave."
```

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Agent went out of scope | Check `skills/worker.md` — compliance rules should prevent this. If persistent, add more explicit scoping in the prompt |
| Inspector can't fix an issue | Should mark as ❌ FAIL with 🔴 severity. Manager decides next step |
| Two agents edited the same file | Should never happen — Manager must ensure no shared files. Fix by merging manually and adding to wave log |
| Manager lost context | Start new conversation with `/manager`. Wave log contains all history |
| Build passes but app is broken | Add runtime checks to Inspector prompt (e.g., "verify the page loads") |
| Same bug fails twice | Circuit breaker: Manager declares ❌ BLOCKED and escalates to human |