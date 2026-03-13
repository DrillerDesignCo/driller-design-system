---
description: SEO audit checklist for Inspector and Workers building storefront pages
---

# SEO Auditor — Skill Module

> **Who uses this:** The Inspector activates this checklist when auditing pages. Workers reference it when building new pages to ensure SEO compliance from the start.
>
> Adapted from [agency-agents/marketing-seo-specialist](https://github.com/msitarzewski/agency-agents) and tailored for the Apostolic Shop Astro storefront.

---

## When to Activate

- **Inspector:** Always run the Page-Level Checklist (§1) on every `.astro` page file in the current wave. Run the Technical Checklist (§2) once per wave if 3+ pages were created/modified.
- **Workers:** Reference §1 while building pages to avoid rework. You are NOT expected to run §2 — that's the Inspector's job.

---

## §1 — Page-Level SEO Checklist

Run this for **every page file** (`src/pages/**/*.astro`):

### Meta Tags
- [ ] `<title>` tag present, unique, descriptive, 50–60 characters
- [ ] `<title>` includes primary keyword + brand: `{{Keyword}} | Apostolic Shop`
- [ ] `<meta name="description">` present, compelling, 150–160 characters, includes a CTA
- [ ] Canonical URL: `<link rel="canonical" href="...">` is self-referencing
- [ ] Open Graph tags: `og:title`, `og:description`, `og:image`, `og:type` configured
- [ ] `og:image` points to a valid, appropriately sized image (1200×630px ideal)

### Heading Structure
- [ ] Single `<h1>` per page — includes primary keyword, matches search intent
- [ ] Heading hierarchy is logical: `h1` → `h2` → `h3` (no skipped levels)
- [ ] Headings use semantic content, not styling classes to fake hierarchy

### Content & Semantics
- [ ] Primary keyword appears within the first 100 words of visible content
- [ ] Semantic HTML5 elements used: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- [ ] Internal links to related pages use descriptive anchor text (not "click here")
- [ ] No orphaned pages (every page is linked from at least one other page)

### Media
- [ ] All `<img>` tags have descriptive `alt` text (not just filenames)
- [ ] Images are optimized: WebP/AVIF format, compressed (<100KB where possible)
- [ ] Images have explicit `width` and `height` attributes (prevents CLS)
- [ ] Lazy loading (`loading="lazy"`) on below-fold images

### Structured Data (Product/Commerce Pages)
- [ ] Product pages include `Product` JSON-LD schema (name, image, price, availability, brand)
- [ ] Category pages include `CollectionPage` or `ItemList` schema
- [ ] Breadcrumb schema reflects URL hierarchy
- [ ] Organization schema on homepage (name, logo, URL, social profiles)

---

## §2 — Technical SEO Checklist (Site-Wide)

Run once per wave when multiple pages are added, or at Inspector discretion:

### Performance (Core Web Vitals Targets)
| Metric | Target | How to Check |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | Lighthouse audit or `npm run build` output size review |
| INP (Interaction to Next Paint) | < 200ms | Review JS bundle size, minimize client-side JS |
| CLS (Cumulative Layout Shift) | < 0.1 | Verify all images have dimensions, no layout-shifting elements |

### Crawlability
- [ ] `robots.txt` exists in `public/` and allows critical paths
- [ ] XML sitemap exists or is generated at build time
- [ ] No `noindex` on pages that should be indexed
- [ ] No redirect chains (A → B → C should be A → C)

### URL Structure
- [ ] URLs are lowercase, kebab-case, human-readable
- [ ] URL depth is ≤ 3 levels from homepage for key content
- [ ] No URL parameters for content that should be separate pages
- [ ] Trailing slash behavior is consistent (Astro `trailingSlash` config)

### Mobile Optimization
- [ ] `<meta name="viewport">` is set correctly
- [ ] Content is readable without horizontal scrolling on 320px width
- [ ] Touch targets are ≥ 44×44px
- [ ] Font sizes are ≥ 16px for body text

---

## §3 — E-Commerce SEO Specifics

These checks apply specifically to Apostolic Shop's product and category pages:

### Product Pages (`/product/[slug]`)
- [ ] Product name in `<h1>` and `<title>`
- [ ] Price is visible and in `Product` schema
- [ ] High-quality product images with descriptive alt text
- [ ] Seller/vendor attribution links to vendor storefront
- [ ] Related products or "you may also like" internal links

### Category Pages (`/shop/[category]`)
- [ ] Category name in `<h1>` and `<title>`
- [ ] Unique meta description per category (not templated)
- [ ] Products are crawlable (not infinite-scroll-only)
- [ ] Pagination uses `rel="next"` / `rel="prev"` or is load-more with indexable URLs

### Vendor Storefronts (`/store/[vendor-slug]`)
- [ ] Vendor name in `<h1>` and `<title>`
- [ ] Unique description meta tag
- [ ] Products listed are crawlable
- [ ] `LocalBusiness` or `Organization` schema for vendor

---

## Report Format (Inspector)

When SEO issues are found, add this section to the Inspector report:

```markdown
## SEO Audit

| Page | Issue | WCAG/SEO Rule | Severity | Fixed? |
|---|---|---|---|---|
| `/product/[slug]` | Missing Product JSON-LD schema | Structured Data | 🟡 Med | ✅ |
| `/shop` | No meta description | Meta Tags | 🟡 Med | ✅ |
| `/store/[slug]` | H1 missing | Heading Structure | 🔴 High | ❌ |
```

### Severity Guide
| Level | Meaning |
|---|---|
| 🔴 High | Blocks indexing, causes CWV failure, or breaks structured data |
| 🟡 Medium | Reduces ranking potential but doesn't block indexing |
| 🟢 Low | Best practice improvement, minor impact |
