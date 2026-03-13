---
description: Auto-claim and execute the next available agent task from the community board
---

# /agent — Self-Assigning Worker

Type `agent` in a new chat to automatically pick up the next unclaimed task from the community board.

---

## Steps

### 1. Read the community board

Read the file at `c:\Users\Garrett\Documents\Apostolic Shop\.agents\state\board.md`.

Look at the table under "Current Wave" and find the **first row** where:
- **Status** is `🟡 Pending`

This is your task assignment.

### 2. Check if any tasks are available

**If no rows have `🟡 Pending` status:**
- All tasks are either not assigned (`⚪ No task`), already running (`🔵 Running`), or complete (`✅ Complete`).
- Report: "No unclaimed tasks available. All agent slots are either unassigned, running, or complete."
- **STOP. Do not proceed.**

**Special case — Inspector:**
- If the only `🟡 Pending` row is the **Inspector** row, check that ALL agent rows (Agent 1–4) are either `✅ Complete` or `⚪ No task`.
- If any agent is still `🔵 Running`, report: "Inspector task is pending but agents are still running. Wait for all agents to finish."
- **STOP. Do not proceed.**
- If all agents are done, claim the Inspector task.

### 3. Claim the task and announce yourself

1. Update `board.md`: change your row's Status from `🟡 Pending` to `🔵 Running`, fill in `Claimed By` with your agent name (e.g., "Agent 1"), and set `Started At` to the current time.

2. **Immediately report to the user which task you claimed.** Say:
   ```
   ✅ Claimed: [Agent N] — [one-line task summary from the prompt]
   ```
   This lets the user know which slot was taken and what you're working on.

### 4. Execute the task

Read and execute the prompt file listed in your row's `Prompt File` column. For example:
- If you claimed Agent 1: read and execute `c:\Users\Garrett\Documents\Apostolic Shop\.agents\prompts\agent-1.md`
- If you claimed Agent 2: read and execute `c:\Users\Garrett\Documents\Apostolic Shop\.agents\prompts\agent-2.md`
- If you claimed Agent 3: read and execute `c:\Users\Garrett\Documents\Apostolic Shop\.agents\prompts\agent-3.md`
- If you claimed Agent 4: read and execute `c:\Users\Garrett\Documents\Apostolic Shop\.agents\prompts\agent-4.md`
- If you claimed Inspector: read and execute `c:\Users\Garrett\Documents\Apostolic Shop\.agents\prompts\inspector.md`

Follow ALL instructions in the prompt file exactly as written.

### 5. Mark complete

When you finish your task and have written your report:
- Update `board.md`: change your row's Status from `🔵 Running` to `✅ Complete`

---

## Example Flow

1. You open a new chat and type: `agent`
2. The agent reads `board.md` and sees:
   ```
   | Agent 1 | Frontend | ✅ Complete | ... |
   | Agent 2 | Frontend | 🟡 Pending  | ... |
   | Agent 3 | Frontend | 🔵 Running  | ... |
   ```
3. Agent 2 is the first `🟡 Pending` row → claims it
4. Updates board to `🔵 Running`
5. Announces: "✅ Claimed: Agent 2 — Seller Product Filter Tabs + Save as Draft"
6. Reads and executes `.agents/prompts/agent-2.md`
7. Finishes work, writes report to `.agents/handoffs/agent-2-report.md`
8. Updates board to `✅ Complete`
