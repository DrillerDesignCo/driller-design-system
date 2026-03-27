// src/content.config.ts — Astro Content Collections for Waste Falcon
// ─────────────────────────────────────────────────────────────────
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// ── Service hub pages ──
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    type: z.enum(['primary', 'secondary']),
    icon: z.string().optional(),              // Material Symbol name
    keywords: z.array(z.string()).default([]),
    heroHeadline: z.string(),
    heroDescription: z.string(),
    ogImage: z.string().optional(),
    order: z.number().default(0),             // nav ordering
    parentHub: z.string().optional(),         // for secondary services linking to primary
  }),
});

// ── City landing pages ──
const cities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cities' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    city: z.string(),
    state: z.string().default('TX'),
    county: z.string(),
    tier: z.enum(['1', '2', '3']),
    serviceSlug: z.string(),                  // e.g. "commercial-dumpster-rental"
    serviceName: z.string(),                  // e.g. "Commercial Dumpster Rental"
    keywords: z.array(z.string()).default([]),
    nearbyTier3: z.array(z.string()).default([]), // Tier 3 communities to mention
    ogImage: z.string().optional(),
  }),
});

// ── Blog posts ──
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Caleb Barnett'),
    keywords: z.array(z.string()).default([]),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { services, cities, blog };
