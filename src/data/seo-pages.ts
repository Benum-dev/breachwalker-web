export type SeoSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type SeoPage = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  sections: SeoSection[];
  ctaLabel?: string;
};

export const SEO_PAGES: Record<string, SeoPage> = {
  "bitcoin-rifts": {
    path: "/bitcoin-rifts",
    metaTitle: "Bitcoin-Derived Rifts",
    metaDescription:
      "How Breachwalker turns Bitcoin on-chain history into deterministic rifts — danger, scale, and halving-era weight from public block data. No wallet required in alpha.",
    eyebrow: "World generation",
    title: "Bitcoin history becomes rifts",
    intro:
      "Every rift in Breachwalker is seeded from real Bitcoin data — not a cosmetic crypto skin. Public block statistics shape danger, scale, density, and special era flags before you ever pack your kit.",
    sections: [
      {
        title: "What is a rift?",
        paragraphs: [
          "A rift is an expedition space — a place you breach into from the surface hold. Each rift maps to a catalog entry in the atlas, derived deterministically from on-chain history.",
          "Danger, scale, and density are not hand-tuned level design. They emerge from fee pressure, transaction weight, input complexity, and difficulty at the moment that slice of the chain was sealed.",
        ],
      },
      {
        title: "Why Bitcoin as substrate",
        paragraphs: [
          "Bitcoin is the immutable archive Breachwalker reads. Halving-era rifts carry harsher weight. High-density rifts feel crowded and resource-heavy. Quiet eras read differently on the atlas.",
          "You do not need a wallet to play the alpha. The chain is the world's source code — not a login gate.",
        ],
        bullets: [
          "Deterministic — same catalog entry, same rift parameters, every time",
          "Public data — no proprietary server fiction for core terrain variance",
          "Lore-aligned — halving moons, strike echoes, sealed vault whispers tie back to chain history",
        ],
      },
      {
        title: "The atlas and the ledger",
        paragraphs: [
          "Walkers share a global atlas: which rifts have been charted worldwide. Your personal ledger shows what you may breach today — open routes, sealed rifts waiting on anchor spikes, rifts you have already run.",
          "Virgin rifts sit on the ledger until a walker extracts for the first time. Then the atlas grows for everyone.",
        ],
      },
      {
        title: "Not a wallet game (alpha)",
        paragraphs: [
          "Closed alpha is off-chain. No seed phrase, no gas, no mint button. You are testing whether breaching rifts and extracting loot feels worth returning to — before item NFTs on Base or marketplace settlement ships.",
        ],
      },
    ],
    ctaLabel: "Request alpha access",
  },
  "item-economy": {
    path: "/item-economy",
    metaTitle: "Item Economy & NFT Roadmap",
    metaDescription:
      "Breachwalker item economy: grind gear in rifts, craft in the workshop, trade on the marketplace. Utility-first NFTs on Base via asset bridge — roadmap, not alpha.",
    eyebrow: "Roadmap",
    title: "Items first. Strikes settle trades.",
    intro:
      "Breachwalker is built around loot pressure inside rifts — not a token drip for logging in. Economic upside flows through items, crafting, and player trade. Strikes are settlement currency; NFTs extend items outward on Base when the bridge ships.",
    sections: [
      {
        title: "The loop today (alpha)",
        paragraphs: [
          "Breaches drop items and reagents — not Strikes. You fabricate breach keys and healing stock in the workshop, pack your expedition kit, and extract what you can before stamina collapses.",
          "The alpha proves the breach loop is sticky before any marketplace or NFT export goes live.",
        ],
      },
      {
        title: "Marketplace (planned)",
        paragraphs: [
          "A player marketplace is planned for trading crafted gear and rare reagents. Buyers pay in Strikes; sellers receive net proceeds after platform tax. Strikes enter circulation through fiat purchase or by selling items — not from merely playing a rift.",
        ],
      },
      {
        title: "Asset bridge on Base",
        paragraphs: [
          "Tradeable item NFTs target Base — lower fees, mature marketplace tooling, and Coinbase Wallet paths that reduce seed-phrase friction for players new to crypto.",
          "Bitcoin remains the substrate for rift generation. Base carries the tradeable representation of gear you choose to bridge out.",
        ],
        bullets: [
          "Bridge out — item leaves functional in-game inventory; becomes a tradeable NFT",
          "Bridge in — connect a wallet holding that NFT; item returns to your playable loadout",
          "Transfer watch — sell the NFT externally and in-game function ends for the prior holder after reverification",
        ],
      },
      {
        title: "Utility-first NFTs",
        paragraphs: [
          "Exported gear is designed to stay meaningful inside rifts when you bridge it back — not sit in a wallet as a JPEG with stats. A mythic blade should matter because it changes what you can survive, not because it trends on a leaderboard.",
        ],
      },
      {
        title: "Sponsored minting (exploring)",
        paragraphs: [
          "We are exploring gas-sponsored first mints through a game-operated wallet so bridge-out does not require holding ETH on day one. Limits and eligibility will ship with the bridge — this is design intent, not an alpha feature.",
        ],
      },
      {
        title: "What we are not promising",
        paragraphs: [
          "No withdrawable Bitcoin for playing. No live NFT mint in closed alpha. No wallet required to join the alpha list. Read the full roadmap Q&A on the FAQ.",
        ],
      },
    ],
    ctaLabel: "Join the alpha list",
  },
  "how-it-works": {
    path: "/how-it-works",
    metaTitle: "How It Works",
    metaDescription:
      "How Breachwalker plays: surface hold, expedition kit, breach a rift, manage stamina, extract loot to vault or collapse. Closed alpha signup.",
    eyebrow: "Gameplay",
    title: "How Breachwalker works",
    intro:
      "A single-player expedition loop: prepare on the surface, breach a rift, push your stamina, extract loot to the vault, or collapse back empty-handed.",
    sections: [
      {
        title: "1. Surface hold",
        paragraphs: [
          "Between breaches you stand on the surface. Open your expedition kit, vault, workshop, and codex. Fabricate breach keys, pack healing stock, and choose which rift to enter next from the ledger.",
        ],
      },
      {
        title: "2. Begin the breach",
        paragraphs: [
          "Cross into the rift you selected. Stamina ticks down with movement and combat pressure. What you carry in your kit is what you stand to lose if you do not extract.",
        ],
      },
      {
        title: "3. Extract or collapse",
        paragraphs: [
          "Extract alive and bank loot in the vault. Run out of stamina and you collapse — dragged to the surface with what you kept. Die in the breach and unbanked loot stays behind; worn gear returns with durability loss.",
        ],
      },
      {
        title: "4. Workshop and keys",
        paragraphs: [
          "Reagents from rifts feed the workshop. Fabricate anchor spikes to open sealed rifts on the atlas, breach keys to re-enter, and healing stock for the next run.",
        ],
      },
    ],
    ctaLabel: "Request alpha access",
  },
};
