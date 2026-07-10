export const COPY = {
  nav: {
    faq: "FAQ",
    alpha: "Alpha access",
  },
  hero: {
    eyebrow: "Closed alpha opening soon",
    title: "Cross the breach.",
    subhead:
      "Rifts carved from Bitcoin’s on-chain history. Pack your expedition kit, breach inward, extract what you can — or collapse back to the surface.",
    ctaPrimary: "Request alpha access",
    ctaSecondary: "How it works",
  },
  teasers: [
    {
      id: "breach",
      label: "The breach",
      title: "Surface to depth",
      body: "From the surface hold you choose a rift and begin the breach. Stamina runs down with every step. Extract while you still can, or collapse and wake on the surface with what you kept in the vault.",
    },
    {
      id: "rifts",
      label: "Rifts",
      title: "Every rift is different",
      body: "Danger, scale, and density vary rift by rift — derived deterministically from on-chain data. Uncharted rifts wait behind anchor keys. Halving-era rifts carry harsher weight.",
    },
    {
      id: "kit",
      label: "Kit & vault",
      title: "Pack before you go",
      body: "Fabricate breach keys and healing stock in the workshop. Pack your expedition kit. Bank extracted loot in the vault. What you carry into the breach is what you stand to lose.",
    },
    {
      id: "strikes",
      label: "Strikes",
      title: "One currency",
      body: "Strikes settle trade between walkers. Breaches drop items, not Strikes — reagents and gear move through the workshop and marketplace.",
    },
  ] as const,
  loreWhispers: [
    "prophecy of the halving moon",
    "echo of the first strike",
    "chalk tally from a sealed vault",
  ] as const,
  ctaBand: {
    title: "Walk the breach first",
    body: "Closed alpha testers will breach early rifts, stress the extract loop, and shape what ships next.",
    button: "Join the alpha list",
  },
  alpha: {
    title: "Request alpha access",
    intro:
      "Breachwalker is in closed alpha. Leave your email and we will send an invite when the next batch opens.",
    privacyLabel: "I agree to the",
    privacyLink: "Privacy Policy",
    submit: "Join the list",
    success: "You are on the list. We will reach out when your invite is ready.",
    fallbackTitle: "Signup form loading",
    fallbackBody:
      'Email us with the subject "Alpha access" and we will add you manually.',
  },
  footer: {
    tagline: "Bitcoin-derived rift survival.",
    rights: "All rights reserved.",
  },
} as const;
