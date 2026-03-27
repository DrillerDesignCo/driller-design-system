// src/config/schema.ts — JSON-LD structured data utilities for Waste Falcon
// ────────────────────────────────────────────────────────────────────────
import { brand } from './brand';

type JsonLd = Record<string, unknown>;

/** Wrap one or more JSON-LD objects in a @graph */
export function jsonLdScript(items: JsonLd | JsonLd[]): string {
  const graph = Array.isArray(items) ? items : [items];
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}

// ── Organization ──
export function organizationSchema(): JsonLd {
  return {
    '@type': 'LocalBusiness',
    '@id': `${brand.url}#organization`,
    name: brand.name,
    url: brand.url,
    telephone: brand.contact.phone,
    email: brand.contact.email,
    description: brand.description,
    areaServed: {
      '@type': 'Place',
      name: 'Brazos County, Texas',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'College Station',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    sameAs: Object.values(brand.social).filter(Boolean),
    founder: { '@id': `${brand.url}/about/#caleb-barnett` },
  };
}

// ── Person (owner) ──
export function personSchema(): JsonLd {
  return {
    '@type': 'Person',
    '@id': `${brand.url}/about/#caleb-barnett`,
    name: 'Caleb Barnett',
    jobTitle: 'Owner & Operator',
    worksFor: [
      { '@type': 'Organization', name: 'Waste Falcon', url: brand.url },
      { '@type': 'Organization', name: 'BCS Junk Removal' },
    ],
    knowsAbout: [
      'Dumpster Rental',
      'Construction Waste',
      'Commercial Waste Management',
      'Demolition',
    ],
    areaServed: { '@type': 'Place', name: 'Brazos County, Texas' },
    description:
      'Waste management professional with 5+ years of experience leading two companies serving the Brazos Valley.',
  };
}

// ── WebSite ──
export function webSiteSchema(): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': `${brand.url}#website`,
    name: brand.name,
    url: brand.url,
    publisher: { '@id': `${brand.url}#organization` },
  };
}

// ── Service ──
export interface ServiceSchemaOptions {
  name: string;
  description: string;
  url: string;
  areaServed?: string;
  image?: string;
}

export function serviceSchema(opts: ServiceSchemaOptions): JsonLd {
  const schema: JsonLd = {
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { '@id': `${brand.url}#organization` },
  };
  if (opts.areaServed) {
    schema.areaServed = {
      '@type': 'City',
      name: opts.areaServed,
    };
  }
  if (opts.image) {
    schema.image = opts.image;
  }
  return schema;
}

// ── BreadcrumbList ──
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]): JsonLd {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ── Article (blog) ──
export interface ArticleSchemaOptions {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}

export function articleSchema(opts: ArticleSchemaOptions): JsonLd {
  return {
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: {
      '@type': 'Person',
      name: opts.author ?? 'Caleb Barnett',
      '@id': `${brand.url}/about/#caleb-barnett`,
    },
    publisher: { '@id': `${brand.url}#organization` },
    image: opts.image,
  };
}

// ── FAQPage ──
export interface FAQItem {
  question: string;
  answer: string;
}

export function faqSchema(items: FAQItem[]): JsonLd {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
