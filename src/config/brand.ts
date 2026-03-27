// src/config/brand.ts — THE ONLY FILE CHANGED PER CLIENT
// ──────────────────────────────────────────────────────────

export const brand = {
  // ── Identity ──
  name: "Waste Falcon Dumpster Rentals",
  tagline: "Convenient. Fast. Affordable. Professional.",
  location: "Bryan, TX",
  description:
    "Waste Falcon provides construction dumpster rental, commercial dumpster rental, roll-off dumpsters, and demolition services in College Station, Bryan, and the greater Brazos Valley. Call today for a free quote.",
  url: "https://wastefalcon.com",

  // ── Colors ──
  colors: {
    primary: "#0081ca",     // Bright Blue — accent, CTAs, emphasis
    dark: "#032b4d",        // Dark Navy — dark surfaces, headings
    light: "#ffffff",       // White — light surfaces
    accentText: "#0068a3",  // Deep blue for text on light backgrounds
    error: "#9B2C2C",
    success: "#2D6A4F",
    info: "#2B6CB0",
    warning: "#92650E",
  },

  // ── Typography ──
  fonts: {
    display: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
    serif: "'Poppins', sans-serif",
  },

  // ── Self-Hosted Fonts (no Google Fonts URL needed) ──
  fontsUrl: "",

  // ── Contact ──
  contact: {
    phone: "(877) 779-2783",
    email: "book@wastefalcon.com",
  },

  // ── Navigation ──
  nav: [
    { 
      label: "Services", 
      href: "/services/",
      children: [
        { label: "Commercial Dumpsters", href: "/services/commercial-dumpster-rental/" },
        { label: "Residential Roll-Offs", href: "/services/roll-off-dumpster-rental/" },
        { label: "Construction Dumpsters", href: "/services/construction-dumpster-rental/" },
        { label: "Demolition", href: "/services/demolition/" },
      ]
    },
    { label: "Dumpster Sizes", href: "/dumpster-sizes/" },
    { label: "Pricing", href: "/pricing/" },
    { 
      label: "Areas Served", 
      href: "/service-areas/",
      children: [
        { label: "College Station, TX", href: "/service-areas/college-station/" },
        { label: "Bryan, TX", href: "/service-areas/bryan/" },
        { label: "Navasota, TX", href: "/service-areas/navasota/" },
      ]
    },
    { 
      label: "About", 
      href: "/about/",
      children: [
        { label: "Contact", href: "/contact/" },
        { label: "Apply / Careers", href: "/apply/" },
      ]
    },
  ],

  // ── Footer ──
  footer: {
    services: [
      { label: "Commercial Dumpsters", href: "/services/commercial-dumpster-rental/" },
      { label: "Residential Roll-Offs", href: "/services/roll-off-dumpster-rental/" },
      { label: "Construction Dumpsters", href: "/services/construction-dumpster-rental/" },
      { label: "Demolition", href: "/services/demolition/" },
    ],
    company: [
      { label: "About Us", href: "/about/" },
      { label: "Apply / Careers", href: "/apply/" },
      { label: "Contact", href: "/contact/" },
    ],
    serviceAreas: [
      { label: "College Station, TX", href: "/service-areas/college-station/" },
      { label: "Bryan, TX", href: "/service-areas/bryan/" },
      { label: "Navasota, TX", href: "/service-areas/navasota/" },
    ]
  },

  // ── CTAs ──
  cta: {
    primary: { label: "Get a Free Quote", href: "/contact/" },
    secondary: { label: "Our Services", href: "/services/" },
  },

  // ── Social ──
  social: {
    facebook: "https://www.facebook.com/wastefalcon",
    google: "https://maps.app.goo.gl/oZViwh1P9nSu6VgA8",
    instagram: "",
    linkedin: "https://www.linkedin.com/company/waste-falcon",
  },

  // ── Legal ──
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms of Service", href: "/terms-of-service/" },
  ],

  // ── Owner (for E-E-A-T) ──
  owner: {
    name: "Caleb Barnett",
    title: "Owner & Operator",
    experience: "5+ years",
  },

  // ── Sister Brand ──
  sister: {
    name: "BCS Junk Removal",
    description: "On-site residential junk removal services",
    // url: "https://bcsjunkremoval.com",  // TODO: get URL from client
  },
} as const;

export type Brand = typeof brand;
