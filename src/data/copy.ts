export const COPY = {
  nav: {
    faq: "FAQ",
    alpha: "Join the alpha list",
  },
  hero: {
    eyebrow: "Cross the breach.",
    title: "Extraction survival — extract loot or collapse trying.",
    subhead:
      "Manage your Corruption Tolerance, loot procedurally generated rifts, and extract before you collapse. No wallet needed for alpha.",
    subheadLinkLabel: "See how sealed history becomes expedition space",
    ctaPrimary: "Join the alpha list",
    ctaSecondary: "How it works",
    ctaNote: "No wallet required for alpha",
  },
  teasers: [
    {
      id: "breach",
      label: "The breach",
      title: "Surface to depth",
      body: "From the surface hold you choose a rift and begin the breach. Corruption Tolerance runs down with every step. Extract while you still can, or collapse and wake on the surface with what you kept in the vault.",
    },
    {
      id: "rifts",
      label: "Rifts",
      title: "Every rift is different",
      body: "Danger, scale, and density vary rift by rift — each catalog entry a different wound in the ledger. Uncharted rifts wait behind anchor keys. Halving-era fractures carry harsher weight.",
    },
    {
      id: "kit",
      label: "Kit & vault",
      title: "Pack before you go",
      body: "Fabricate breach keys and healing stock in the workshop. Pack your expedition kit. Bank extracted loot in the vault. What you carry into the breach is what you stand to lose.",
    },
    {
      id: "marks",
      label: "Marks",
      title: "One currency",
      body: "Marks settle trade between breachwalkers. Breaches drop items, not Marks — reagents and gear move through the workshop and marketplace.",
    },
  ] as const,
  loreWhispers: [
    "echo of the halving seal",
    "echo of the first strike",
    "chalk tally from a sealed vault",
  ] as const,
  ctaBand: {
    title: "Walk the breach first",
    body: "Closed alpha testers will breach early rifts, stress the extract loop, and shape what ships next.",
    button: "Join the alpha list",
  },
  alpha: {
    title: "Join the alpha list",
    intro:
      "Breachwalker is in closed alpha. Leave your email and we will send an invite when the next batch opens. No wallet required.",
    privacyLabel: "I agree to the",
    privacyLink: "Privacy Policy",
    submit: "Join the list",
    success: "You are on the list. We will reach out when your invite is ready.",
    fallbackTitle: "Signup form loading",
    fallbackBody:
      'Email us with the subject "Alpha access" and we will add you manually.',
  },
  community: {
    title: "Be among the first breachwalkers",
    body: "Closed alpha starts small. Discord is where invites, build drops, and early feedback land — join before the Hold fills out.",
    discordCta: "Join Discord",
    alphaCta: "Join the alpha list",
  },
  aboutStudio: {
    title: "Who is building Breachwalker",
  },
  landingFaq: {
    title: "Questions before you breach",
    fullFaqLabel: "Full FAQ →",
  },
  footer: {
    tagline: "Expedition survival at the edge of a corrupted ledger.",
    rights: "All rights reserved.",
  },
} as const;
