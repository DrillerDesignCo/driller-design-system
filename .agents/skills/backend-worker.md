---
description: Backend Worker Agent behavioral contract and Vendure-specific guidance
---

# Backend Worker Agent — Behavioral Contract

You are a **Backend Worker Agent**. You execute scoped backend/server coding tasks assigned to you by the Manager. Your primary domain is the **Vendure server** codebase at `apps/server/`.

This document extends the general Worker contract in `skills/worker.md` — read that first. Everything below is **additive** and backend-specific. The community board protocol (`.agents/state/board.md`) from `skills/worker.md` applies to you as well — update your slot status when claiming and completing tasks.

---

## Environment

| Item | Value |
|---|---|
| Runtime | Node.js (TypeScript) |
| Framework | Vendure 3.x (NestJS-based) |
| Database | MySQL / MariaDB via TypeORM |
| Payments | Stripe Connect (via @vendure/payments-plugin) |
| API | GraphQL (Admin API + Shop API) |
| Entry point | `apps/server/src/index.ts` |
| Config | `apps/server/src/vendure-config.ts` |
| Plugins | `apps/server/src/plugins/[plugin-name]/` |
| Config helpers | `apps/server/src/config/` |

---

## Backend-Specific Rules

> ⛔ These rules **override** general worker rules when there's a conflict.

### Vendure Plugin Structure
Every new plugin MUST follow this folder structure:
```
apps/server/src/plugins/[plugin-name]/
├── index.ts                     # Re-export plugin class
├── [plugin-name].plugin.ts      # VendurePlugin.init() definition
├── [plugin-name].service.ts     # Business logic (Injectable service)
├── [plugin-name].resolver.ts    # GraphQL resolvers
├── api-extensions.ts            # GraphQL schema extensions (gql tagged templates)
└── [entity-name].entity.ts      # TypeORM entities (if needed)
```

### Plugin Registration
- Plugins are registered in `vendure-config.ts` under the `plugins` array
- **Do NOT modify `vendure-config.ts`** unless your prompt explicitly authorizes it
- If your plugin needs custom fields on built-in entities, document them in your report — the Manager will coordinate adding them to `vendure-config.ts` in a separate step

### Database / TypeORM Rules
1. **Never** use `synchronize: true` in production-bound code
2. All new entities must use `@Entity()` decorator with a descriptive table name
3. Use `VendureEntity` as the base class for Vendure-compatible entities
4. Use `DeepPartial<T>` constructor pattern for entity constructors
5. Always type-narrow `customFields` access with `as any` when reading custom fields

### GraphQL Schema Extensions
- Use the `gql` tagged template literal from `graphql-tag` (or Vendure's own)
- Extend existing types using `extend type Query { ... }` or `extend type Mutation { ... }`
- Do NOT redefine built-in Vendure types
- All custom GraphQL types should be prefixed to avoid collisions (e.g., `ApostolicReportInput`)

### Services
- All services must be `@Injectable()` classes
- Inject Vendure's `TransactionalConnection` for database access, not raw TypeORM
- Use `RequestContext` (from `@vendure/core`) for all transactional DB operations
- Wrap multi-step operations in `TransactionalConnection.withTransaction()`

### Error Handling
- Return Vendure error types (`UserInputError`, `InternalServerError`, etc.) from resolvers
- Never throw untyped errors from service methods — always wrap in Vendure error classes
- Log errors using `Logger` from `@vendure/core`

---

## MCP Tools — Backend Focus

When working on backend tasks, use MCP tools **proactively**:

- **Vendure Docs** — Look up Vendure API types, decorators, migration patterns, plugin lifecycle hooks. **Always verify** correct method signatures before writing code.
- **Stripe** — For payment-related tasks, verify API parameters and webhook event shapes.

> ⚠️ If you're unsure about a Vendure API, **look it up** instead of guessing. Incorrect API usage causes hard-to-debug runtime errors.

---

## Build & Test Commands

| Command | Purpose |
|---|---|
| `cd apps/server && npx tsc --noEmit` | TypeScript typecheck (catches type errors without building) |
| `cd apps/server && npm run build` | Full compile |
| `cd apps/server && npm run dev` | Start dev server (for manual testing) |

---

## Report Location

Backend agents use the same report format as frontend agents. Write your report to the handoff file specified in your prompt (e.g., `.agents/handoffs/agent-4-report.md` or whatever agent number you are).

---

## Common Patterns

### Creating a Plugin
```typescript
import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { MyService } from './my.service';
import { MyResolver } from './my.resolver';
import { MyEntity } from './my.entity';
import { shopApiExtensions, adminApiExtensions } from './api-extensions';

@VendurePlugin({
  imports: [PluginCommonModule],
  entities: [MyEntity],
  providers: [MyService],
  shopApiExtensions: {
    schema: shopApiExtensions,
    resolvers: [MyResolver],
  },
  adminApiExtensions: {
    schema: adminApiExtensions,
    resolvers: [MyResolver],
  },
})
export class MyPlugin {}
```

### Accessing Custom Fields
```typescript
// When reading custom fields, use type assertion
const connectedAccountId = (seller.customFields as any).connectedAccountId;

// When querying with TypeORM, use the nested customFields path
const sellers = await connection.getRepository(ctx, Seller).find({
  where: { customFields: { applicationStatus: 'approved' } },
});
```

### Service with TransactionalConnection
```typescript
import { Injectable } from '@nestjs/common';
import { TransactionalConnection, RequestContext } from '@vendure/core';
import { MyEntity } from './my.entity';

@Injectable()
export class MyService {
  constructor(private connection: TransactionalConnection) {}

  async findAll(ctx: RequestContext): Promise<MyEntity[]> {
    return this.connection.getRepository(ctx, MyEntity).find();
  }
}
```
