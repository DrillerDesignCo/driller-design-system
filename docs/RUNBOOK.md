# Runbook — Waste Falcon (Driller Starter)

> Deployment, monitoring, and troubleshooting procedures.

---

## 1. Deployment

### Static Build

```bash
npm run build          # Outputs to dist/
```

### Deploy to Any Static Host

Upload the contents of `dist/` to your hosting provider (Netlify, Vercel, Cloudflare Pages, etc.).

#### Netlify

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22"
```

#### Vercel

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro"
}
```

---

## 2. Pre-Deploy Checks

| Step | Command | Expected |
|------|---------|----------|
| Type check | `npm run check` | No errors |
| Build | `npm run build` | Clean exit, `dist/` populated |
| Preview | `npm run preview` | Site loads at `http://localhost:4321` |

---

## 3. Health Checks

This is a **static site** — there are no server-side health endpoints. Monitoring should target:

- **Uptime**: HTTP 200 on `https://wastefalcon.com`
- **Performance**: Lighthouse score ≥ 90 (Performance, Accessibility, SEO)
- **SSL**: Certificate validity and renewal

---

## 4. Common Issues & Fixes

### Build fails with type errors

```bash
npm run check    # Identify the specific file and line
```

Fix the TypeScript error in the reported file, then rebuild.

### Component styles not rendering

- Ensure styles are inside the component's `<style>` block (not an external file)
- Check that CSS custom properties are defined in `src/styles/md/md-tokens.css` or `src/styles/tokens.css`

### Node version mismatch

Astro requires Node.js ≥ 22.12.0 (even-numbered LTS). Check with:

```bash
node --version
```

Use `nvm` or `fnm` to switch versions if needed.

### Dev server port in use

```bash
npx astro dev --port 4322
```

---

## 5. Rollback

Since this is a static site deployed from Git:

```bash
git log --oneline -5           # Find the last known-good commit
git revert <commit-sha>        # Or reset if appropriate
npm run build                  # Rebuild
# Redeploy dist/
```

Most static hosts (Netlify, Vercel, Cloudflare) support **instant rollback** to a previous deployment from their dashboard.

---

## 6. Form Submissions

Forms are handled by **[StaticForms](https://staticforms.xyz)** — a third-party static form backend.

- Forms POST directly from the browser to StaticForms
- Submissions are forwarded to the configured email address
- No server-side code is required
- Manage your access key and submission settings at [staticforms.xyz](https://staticforms.xyz)

---

## 7. Environment Variables

**No `.env` file is currently used.** All configuration is defined in `src/config/brand.ts`.

If environment variables are added in the future:
- Prefix public (client-side) variables with `PUBLIC_` per [Astro docs](https://docs.astro.build/en/guides/environment-variables/)
- Document them in a `.env.example` file and update this runbook

---

## 8. Key Contacts

| Role | Contact |
|------|---------|
| Client inquiries | book@wastefalcon.com |
| Client phone | (877) 779-2783 |
| Production URL | https://wastefalcon.com |
