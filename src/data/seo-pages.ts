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
    metaTitle: "Why Bitcoin? Rifts from On-Chain History",
    metaDescription:
      "Why Breachwalker uses the Bitcoin ledger for worldbuilding: immutable public history, deterministic rifts, and plain-language terms — transaction density, fee pressure, halving eras — without wallet required.",
    eyebrow: "World generation",
    title: "Why the Bitcoin ledger becomes rifts",
    intro:
      "Breachwalker reads Bitcoin’s public block history as an archive of sealed moments — each catalog entry a rift whose danger, scale, and era identity come from what actually happened on-chain. No wallet required to play. This page explains why that ledger fits expedition worldbuilding, in plain terms.",
    sections: [
      {
        title: "What walkers believe",
        paragraphs: [
          "In-world, the Record is the substrate beneath reality — sequential, immutable, ever-growing. Once an entry is sealed, it cannot be unwritten. Order exists because what came before is permanently settled.",
          "Something unaccounted-for is corrupting the Record. Walkers — fringe mystics who study that substrate — were the first to notice. Rifts are where corrupted entries crack open into the physical world. The corruption spreads unpredictably across eras, old and new alike, without a clean wave a mystic can chart.",
          "What crystallizes inside a cracked entry — monsters, materials, echoes — is exactly as dangerous and exactly as valuable as the entry itself. Breachers do not find treasure despite the danger; the two come from the same fracture. The Hold grew from a Walker’s discovery into a standing operation that recruits breachers because the crisis outgrew what any one investigator could address alone.",
        ],
      },
      {
        title: "What is a rift?",
        paragraphs: [
          "A rift is an expedition space you breach into from the surface hold — not a hand-drawn level. Each rift corresponds to a catalog entry in the atlas: one wound in the ledger where era, congestion, and mining weight crystallized into playable terrain.",
          "Breachers never need to speak chain jargon in-game. The catalog number is how the hold archives each rift; underneath, it maps to a specific slice of Bitcoin history.",
        ],
      },
      {
        title: "Why the Bitcoin ledger?",
        paragraphs: [
          "Most game worlds are server fiction — a designer picks numbers and hopes they feel consistent. Bitcoin offers something different: a single, public, immutable timeline that billions of dollars have secured for over a decade. Every block is a timestamped record of how busy the network was, how hard mining was, and which era of subsidy history the chain was in when that record was sealed.",
          "That matters for Breachwalker because expedition games need worlds that feel earned and inspectable. A halving block really happened on a known date. A congestion spike really occurred. The ledger does not forget and anyone can verify the source record — we map public statistics into rift danger, scale, and density, then derive layouts and loot from deterministic seeds tied to that record’s identity.",
          "We are not asking you to trade Bitcoin or log in with a wallet. The chain is read-only substrate for world generation — a shared historical spine — not a paywall.",
        ],
        bullets: [
          "Immutable — history cannot be rewritten by a game server",
          "Public — source data is inspectable, not a black-box RNG",
          "Era-rich — halvings, difficulty cycles, and congestion epochs are real events",
          "Deterministic — same catalog entry, same core rift identity for every breachwalker",
        ],
      },
      {
        title: "Terms in plain language",
        paragraphs: [
          "You do not need to be a Bitcoin user to breach rifts. These are the ideas Breachwalker borrows — and how they show up in play:",
        ],
        bullets: [
          "Bitcoin block — one sealed page of ledger history; Breachwalker treats it as the origin of a catalog entry",
          "Catalog entry — the archive index for a rift (e.g. a halving-era reference); player-facing name for that block’s wound in the ledger",
          "Block hash — the block’s unique fingerprint; anchors deterministic seeds so layouts and loot rolls reproduce from the same origin",
          "Transaction count & block weight — how busy and heavy the block was → rift density and scale (crowded vs sparse, large vs tight)",
          "Fee pressure — how expensive block space was when the block was mined → danger and pressure inside the rift",
          "Mining difficulty — how hard proof-of-work was at that height → harshness and endurance demand",
          "Halving era — which subsidy epoch the block belongs to; halving blocks carry mythic weight on the atlas",
          "Inscription era (Taproot onward) — blocks where on-chain artifacts exist can flag relic-grade rift identity",
        ],
      },
      {
        title: "How statistics become rift feel",
        paragraphs: [
          "Breachwalker does not paste blockchain dashboards into the UI. Public block statistics are normalized into gameplay dimensions — density, scale, danger, harshness, complexity, resource — that drive how large a rift is, how punishing it feels, and how loot and encounters skew.",
          "Congested, fee-heavy history tends to produce harsher, more dangerous rifts. Quiet, lightweight eras read differently on the atlas. Chain-event blocks — halvings, difficulty adjustments, inscription-heavy periods — can elevate a rift’s tier and trigger mega-rift rules. The exact mapping is part of Breachwalker’s generation spec and evolves with balance patches; the principle is fixed: rift identity grows out of verifiable history, not arbitrary server dice.",
          "Below the terrain scores, deterministic seeds derived from each catalog entry’s identity govern layout and loot tables. That is why two breachwalkers breaching the same catalog entry share the same legendary coordinates and the same world-level claims — while personal survey progress can still differ run to run.",
        ],
      },
      {
        title: "Why this fits shared worldbuilding",
        paragraphs: [
          "A global atlas only works if the world is worth sharing. Bitcoin gives Breachwalker a catalog of thousands of real historical moments — each a potential rift with its own era story — instead of a finite set of hand-authored maps.",
          "Legendary and mythic finds at fixed coordinates make sense when those coordinates are tied to a public record everyone can reference. The first breachwalker to extract claims that slice of history on the atlas; the ledger already said that moment was unique.",
          "Tradeable item NFTs on Base (roadmap) sit on a different layer — Bitcoin seeds the world; Base carries exportable gear. The homage lives in generation; the wallet lives in optional bridge-out.",
        ],
      },
      {
        title: "The atlas and your ledger",
        paragraphs: [
          "Breachwalkers share a global atlas: which rifts have been charted worldwide, which mythic entries have been first-breached, and which legendary coordinates are spent. Your personal rift ledger shows what you may breach today — open routes, sealed rifts waiting on anchor spikes, rifts you have already run.",
          "Virgin rifts sit on the ledger until a breachwalker extracts for the first time. Then the atlas grows for everyone.",
        ],
      },
      {
        title: "Playing without crypto",
        paragraphs: [
          "The closed alpha is off-chain: no seed phrase, no gas, no mint button. You are testing whether breaching rifts and extracting loot feels worth returning to — before marketplace settlement and the asset bridge on Base.",
          "Understanding Bitcoin helps you appreciate why a halving-era rift hits different. It is not required to pack your kit or extract.",
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
      "Breachwalker runs on items — gear and reagents you extract in rifts, fabricate in the workshop, and trade with other breachwalkers. Strikes settle in-game deals. On the roadmap, bridge select loot to Base as utility NFTs and sell on external markets. The closed alpha proves the breach loop; marketplace and bridge follow.",
    sections: [
      {
        title: "How the item economy works",
        paragraphs: [
          "Every valuable item starts in gameplay. Breaches drop gear and reagents. The workshop turns reagents into breach keys, healing stock, and equipment. Breachwalkers list surplus loot on the player marketplace or, on the roadmap, bridge high-tier pieces to tradeable NFTs on Base.",
          "Economic upside flows from what you extract and how well you play — not from a daily login token. Rare drops from harsh rifts carry provenance collectors care about: which catalog entry they came from, which era of the Record shaped the fracture.",
        ],
        bullets: [
          "Extract — gear and reagents drop inside rifts, not currency",
          "Fabricate — workshop formulas turn reagents into keys, kits, and gear",
          "Trade — marketplace listings settled in Strikes between breachwalkers",
          "Bridge — export earned gear to Base NFTs for external sale (roadmap)",
        ],
      },
      {
        title: "Legendary, mythic, and one-of-one finds",
        paragraphs: [
          "At the top of the loot ladder sit legendary, mythic, and one-of-one items — the drops worth chasing in harsh rifts. Legendary and mythic pieces can occupy fixed coordinates inside a rift: every breachwalker maps to the same spot, and the first breachwalker to extract one claims it on the shared global atlas. That coordinate is spent for the world.",
          "One-of-one sits above mythic — a single global instance, not a fungible stack. These atlas-recorded finds carry provenance collectors care about: catalog entry, rift era, who claimed it first. They are the items designed to bridge out as non-fungible NFTs, because each represents a unique slice of world history.",
        ],
        bullets: [
          "Legendary / mythic — fixed coordinates; first global extract wins on the atlas",
          "One-of-one — rarest tier; single global instance per find",
          "Routine loot (common–rare) — personal drops, not atlas-locked SOT claims",
          "Bridge targets — legendary+ gear exported as unique NFTs on Base (roadmap)",
        ],
      },
      {
        title: "The player marketplace",
        paragraphs: [
          "A breachwalker-to-breachwalker marketplace is planned for crafted gear, rare reagents, and high-tier extractions. You set a price in Strikes; buyers pay; you receive net proceeds after a platform fee. Free-to-play breachwalkers use the same marketplace as everyone else — sell loot other players want, spend the Strikes you earn on their listings.",
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
          "Strikes are Breachwalker’s sole settlement currency — one pool for every breachwalker, with no separate premium token locked behind spending. You obtain Strikes by selling items on the marketplace or purchasing them with fiat. Breaches drop items and reagents, not Strikes.",
          "Spending fiat is a shortcut to Strikes for marketplace convenience. It does not mint exclusive tier loot or bypass the breach loop. Free-to-play breachwalkers earn Strikes by selling gameplay loot — the same economic path buyers use when they spend those Strikes on your listings.",
        ],
      },
      {
        title: "Free-to-play and no pay-to-win",
        paragraphs: [
          "Equippable gear is designed to come from breaches, workshop fabrication, or player trade — not a cash-only gear tab. There is no VIP currency pool, no battle-pass-only mythic track, and no whale-only loot crate on-chain.",
          "A free-to-play breachwalker can extract reagents, fabricate competitive kit, sell on the marketplace, and buy other players’ gear with Strikes earned from sales — without ever topping up with fiat. Skill in rift selection, extraction timing, and crafting choices should matter more than whether you bought Strikes.",
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
          "Tradeable item NFTs target Base for lower fees and mature marketplace tooling than minting everything on Bitcoin L1. The public archive remains the substrate for rift generation; Base carries the tradeable representation of gear you choose to export.",
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
          "Exported gear is designed to stay meaningful inside rifts when you bridge it back — stats tied to what you extracted and crafted, not a JPEG with a game reskin. Bridge candidates are legendary, mythic, and one-of-one items: globally unique atlas finds where provenance is the story.",
          "After the bridge launches, the intended path is: claim a top-tier find in a rift → bridge out to Base as a non-fungible NFT → list on OpenSea or another marketplace → buyer acquires that specific instance. Bridge a different piece back in when you want functional loadout gear again. Stackable common-to-rare loot stays in-game.",
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
          "Death is not permadeath for your breacher. You lose what you carried unbanked; worn gear returns with a durability hit. The vault on the surface is your long-term progress.",
        ],
      },
      {
        title: "How this differs from extraction shooters",
        paragraphs: [
          "Breachwalker is expedition survival in procedurally derived rifts — not a tactical military sim. No squad voice chat in alpha. Each catalog entry seeds a rift’s danger and scale from a different wound in the ledger, so two entries can play nothing alike.",
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
          "Gear comes from gameplay. There is no premium currency track — Strikes settle marketplace trades, and free-to-play breachwalkers can earn Strikes by selling items they extracted and crafted. No pay-to-win gear sheet.",
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
