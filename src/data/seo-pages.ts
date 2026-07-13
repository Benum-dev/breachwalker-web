export type SeoSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type RelatedLink = {
  href: string;
  label: string;
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
  relatedLinks?: RelatedLink[];
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
    relatedLinks: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/item-economy", label: "Item economy" },
      { href: "/faq", label: "FAQ" },
      { href: "/alpha", label: "Alpha access" },
    ],
  },
  "item-economy": {
    path: "/item-economy",
    metaTitle: "Item Economy, Marketplace & NFT Bridge",
    metaDescription:
      "Breachwalker item economy: extract gear in rifts, craft in the workshop, sell on the player marketplace for Strikes, or bridge items to Base NFTs. Free-to-play friendly, no pay-to-win. Closed alpha signup.",
    eyebrow: "Item economy",
    title: "Loot, trade, and bridge what you earn",
    intro:
      "Breachwalker runs on items — gear and reagents you extract in rifts, fabricate in the workshop, and trade with other walkers. Strikes settle in-game deals. On the roadmap, bridge select loot to Base as utility NFTs and sell on external markets. The closed alpha proves the breach loop; marketplace and bridge follow.",
    sections: [
      {
        title: "How the item economy works",
        paragraphs: [
          "Every valuable item starts in gameplay. Breaches drop gear and reagents. The workshop turns reagents into breach keys, healing stock, and equipment. Walkers list surplus loot on the player marketplace or, on the roadmap, bridge high-tier pieces to tradeable NFTs on Base.",
          "Economic upside flows from what you extract and how well you play — not from a daily login token. Rare drops from harsh rifts carry provenance collectors care about: which catalog entry they came from, what era of chain history shaped the rift.",
        ],
        bullets: [
          "Extract — gear and reagents drop inside rifts, not currency",
          "Fabricate — workshop formulas turn reagents into keys, kits, and gear",
          "Trade — marketplace listings settled in Strikes between walkers",
          "Bridge — export earned gear to Base NFTs for external sale (roadmap)",
        ],
      },
      {
        title: "The player marketplace",
        paragraphs: [
          "A walker-to-walker marketplace is planned for crafted gear, rare reagents, and high-tier extractions. You set a price in Strikes; buyers pay; you receive net proceeds after a platform fee. Free-to-play walkers use the same marketplace as everyone else — sell loot other players want, spend the Strikes you earn on their listings.",
          "Provenance matters for collector value. A mythic blade from a halving-era rift with a clear craft history can command more than generic gear. The marketplace launches after the breach loop proves sticky in live play.",
        ],
      },
      {
        title: "Earning through skilled play",
        paragraphs: [
          "Breachwalker is item-first soft P2E: returns come from valuable gear and smart play, not from showing up for a token drip. Two planned paths to real-world upside:",
          "Sell on the in-game marketplace — extract loot, list it for Strikes, cash out through platform fiat rails when available. Bridge to NFT — export gear you earned to Base, list on OpenSea or another external market, sell to a collector. Bridge a different item back in when you want playable gear again.",
          "Nothing is guaranteed. Prices depend on demand, rarity, and how deep you push in dangerous rifts. Marketplace and asset bridge are roadmap features; closed alpha testers focus on extraction and crafting only.",
        ],
      },
      {
        title: "Strikes — one currency for everyone",
        paragraphs: [
          "Strikes are Breachwalker’s sole settlement currency — one pool for every walker, with no separate premium token locked behind spending. You obtain Strikes by selling items on the marketplace or purchasing them with fiat. Breaches drop items and reagents, not Strikes.",
          "Spending fiat is a shortcut to Strikes for marketplace convenience. It does not mint exclusive tier loot or bypass the breach loop. Free-to-play walkers earn Strikes by selling gameplay loot — the same economic path buyers use when they spend those Strikes on your listings.",
        ],
      },
      {
        title: "Free-to-play and no pay-to-win",
        paragraphs: [
          "Equippable gear is designed to come from breaches, workshop fabrication, or player trade — not a cash-only gear tab. There is no VIP currency pool, no battle-pass-only mythic track, and no whale-only loot crate on-chain.",
          "A free-to-play walker can extract reagents, fabricate competitive kit, sell on the marketplace, and buy other players’ gear with Strikes earned from sales — without ever topping up with fiat. Skill in rift selection, extraction timing, and crafting choices should matter more than whether you bought Strikes.",
        ],
        bullets: [
          "One currency — Strikes only, for marketplace settlement",
          "Gameplay earns items — breaches and crafting, not login rewards",
          "F2P viable — sell extracted loot to earn Strikes from buyers",
          "Fiat buys Strikes faster, not exclusive mythic gear",
        ],
      },
      {
        title: "Asset bridge on Base",
        paragraphs: [
          "Tradeable item NFTs target Base for lower fees and mature marketplace tooling than minting everything on Bitcoin L1. Bitcoin remains the substrate for rift generation and lore; Base carries the tradeable representation of gear you choose to export.",
          "Coinbase Wallet is the onboarding target — including paths that reduce seed-phrase friction for players new to crypto.",
        ],
        bullets: [
          "Bridge out — item leaves your playable vault and becomes a tradeable NFT",
          "Bridge in — connect a wallet holding that NFT; item returns to your expedition kit",
          "Sell externally — NFT sale ends in-game function for the prior holder after reverification",
        ],
      },
      {
        title: "Utility-first NFTs and OpenSea trading",
        paragraphs: [
          "Exported gear is designed to stay meaningful inside rifts when you bridge it back — stats tied to what you extracted and crafted, not a JPEG with a game reskin. A mythic blade should change what you can survive, not just trend on a leaderboard.",
          "After the bridge launches, the intended path is: earn gear in a rift → bridge out to Base → list on OpenSea or another NFT marketplace → buyer acquires the on-chain item. You can bridge a different piece back in when you want functional loadout gear again.",
        ],
      },
      {
        title: "Sponsored minting",
        paragraphs: [
          "We are exploring gas-sponsored first mints through a game-operated wallet so your initial bridge-out may not require holding ETH. Limits and eligibility will ship with the asset bridge.",
        ],
      },
      {
        title: "What ships in the closed alpha",
        paragraphs: [
          "Alpha testers breach rifts, extract loot, fabricate in the workshop, and stress the stamina loop — all off-chain, no wallet required. Marketplace, Strikes trading, NFT bridge, and OpenSea export follow once the core loop proves out in live play.",
          "Join the alpha list to shape extraction and crafting before economy features go live. Full Q&A on pay-to-win, free-to-play, and NFTs lives on the FAQ.",
        ],
      },
    ],
    ctaLabel: "Join the alpha list",
    relatedLinks: [
      { href: "/bitcoin-rifts", label: "Bitcoin rifts" },
      { href: "/extraction-survival-game", label: "Extraction survival" },
      { href: "/faq", label: "FAQ" },
      { href: "/alpha", label: "Alpha access" },
    ],
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
    relatedLinks: [
      { href: "/extraction-survival-game", label: "Extraction survival" },
      { href: "/bitcoin-rifts", label: "Bitcoin rifts" },
      { href: "/faq", label: "FAQ" },
      { href: "/alpha", label: "Alpha access" },
    ],
  },
  "extraction-survival-game": {
    path: "/extraction-survival-game",
    metaTitle: "Extraction Survival Game",
    metaDescription:
      "Breachwalker is a web-first extraction survival game — stamina pressure, kit packing, loot risk, and extract-or-collapse runs in Bitcoin-derived rifts. Closed alpha signup.",
    eyebrow: "For gamers",
    title: "Extraction survival in derived rifts",
    intro:
      "If you want the extract-or-lose-it tension of extraction shooters without the squad FPS wrapper — stamina, greed, and gear risk in single-player rifts — Breachwalker is built around that loop.",
    sections: [
      {
        title: "The extraction loop",
        paragraphs: [
          "Pack your expedition kit on the surface. Breach a rift. Push deeper while stamina drains. Extract to bank loot in the vault, or collapse and wake on the surface with what you kept.",
          "Unbanked loot is at risk if you are lost in the breach. The decision is always: push for one more room, or extract while you still can.",
        ],
      },
      {
        title: "Not a character wipe",
        paragraphs: [
          "Death is not permadeath for your walker. You lose what you carried unbanked; worn gear returns with a durability hit. The vault on the surface is your long-term progress.",
        ],
      },
      {
        title: "How this differs from extraction shooters",
        paragraphs: [
          "Breachwalker is expedition survival in procedurally derived rifts — not a tactical military sim. No squad voice chat in alpha. Bitcoin on-chain history seeds each rift's danger and scale, so two catalog entries can play nothing alike.",
        ],
        bullets: [
          "Stamina and collapse — not only ballistics TTK",
          "Workshop fabrication — reagents and formulas between runs",
          "Rift ledger — choose destinations from the atlas, not a matchmaking queue",
          "Web-first browser play — closed alpha signup open now",
        ],
      },
      {
        title: "Fair play for free players",
        paragraphs: [
          "Gear comes from gameplay. There is no premium currency track — Strikes settle marketplace trades, and free-to-play walkers can earn Strikes by selling items they extracted and crafted. No pay-to-win gear sheet.",
        ],
      },
    ],
    ctaLabel: "Request alpha access",
    relatedLinks: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/item-economy", label: "Item economy" },
      { href: "/bitcoin-rifts", label: "Bitcoin rifts" },
      { href: "/faq", label: "FAQ" },
    ],
  },
};
