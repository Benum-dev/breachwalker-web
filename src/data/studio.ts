/**
 * Public studio facts for the marketing site.
 * When real alpha testimonials exist, add src/data/testimonials.ts + SocialProof.astro.
 */
export const STUDIO = {
  name: "Benum Labs",
  url: "https://benumlabs.com",
  tagline: "Independent software studio",
  location: "Norway",
  blurb:
    "Benum Labs is an independent software studio founded by Håvard L. Benum. We design and ship our own digital products — utility apps and games — with a focus on reliable, simple software that works.",
  people: [
    {
      name: "Håvard L. Benum",
      role: "Founder",
      initials: "HB",
    },
  ],
  products: [
    {
      name: "Skin Tracker",
      href: "https://benumlabs.com",
      note: "Photo journal utility (Android & iOS)",
    },
    {
      name: "Risk the Fog",
      href: "https://benumlabs.com",
      note: "Idle expedition game (in development)",
    },
  ],
} as const;
