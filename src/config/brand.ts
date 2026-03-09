// src/config/brand.ts — THE ONLY FILE CHANGED PER CLIENT
// ──────────────────────────────────────────────────────────

export const brand = {
  // ── Identity ──
  name: "Starter",
  tagline: "Ship Faster. Look Better.",
  location: "By Driller Design Co.",
  description:
    "A premium Astro starter template with a three-font typography system, layered design tokens, and reusable components. Built for agencies that ship.",
  url: "https://drillerdesign.co/starter",

  // ── Colors ──
  colors: {
    primary: "#D4764E",     // Warm Coral — accent, CTAs, emphasis
    dark: "#1B3A5C",        // Navy — dark surfaces, headings
    light: "#FAFAF8",       // Warm White — light surfaces
    accentText: "#A85A35",  // Deep coral for text on light backgrounds
    error: "#9B2C2C",
    success: "#2D6A4F",
    info: "#2B6CB0",
    warning: "#92650E",
  },

  // ── Typography ──
  fonts: {
    display: "'DM Serif Display', serif",
    body: "'Poppins', sans-serif",
    serif: "'Source Serif 4', serif",
  },

  // ── Google Fonts ──
  fontsUrl:
    "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Poppins:wght@300;400;600&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400;1,8..60,600&display=swap",

  // ── Navigation ──
  nav: [
    { label: "Features", href: "#features" },
    { label: "Typography", href: "#typography" },
    { label: "Pricing", href: "#pricing" },
  ],

  // ── CTAs ──
  cta: {
    primary: { label: "Get the Template", href: "#pricing" },
    secondary: { label: "See What's Included", href: "#features" },
  },

  // ── Social ──
  social: {
    linkedin: "",
    instagram: "",
    google: "",
  },

  // ── Legal ──
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms of Service", href: "/terms-of-service/" },
  ],
} as const;

export type Brand = typeof brand;
