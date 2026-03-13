// src/config/brand.ts — THE ONLY FILE CHANGED PER CLIENT
// ──────────────────────────────────────────────────────────

export const brand = {
  // ── Identity ──
  name: "Waste Falcon",
  tagline: "Fast. Reliable. Clean.",
  location: "Brazos County, TX",
  description:
    "Waste Falcon provides dependable junk removal and dumpster rental services in College Station, Brenham, Navasota, and the greater Brazos County area. Call today for a free quote.",
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
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],

  // ── CTAs ──
  cta: {
    primary: { label: "Get a Quote", href: "#contact" },
    secondary: { label: "Our Services", href: "#services" },
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
} as const;

export type Brand = typeof brand;
