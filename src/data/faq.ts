export type FaqEntry = {
  question: string;
  answer: string;
};

export type FaqSection = {
  id: string;
  title: string;
  /** Optional lead-in for roadmap sections */
  intro?: string;
  entries: FaqEntry[];
};

export const FAQ_SECTIONS: FaqSection[] = [
  {
    id: "game",
    title: "Gameplay & rifts",
    entries: [
      {
        question: "What is Breachwalker?",
        answer:
          "Breachwalker is a web-first extraction survival game from Benum Labs. You stand on the surface hold, pick a rift from the ledger, pack your expedition kit, and breach inward — managing stamina, fighting through procedurally derived space, and extracting loot to your vault before you collapse. Every rift is seeded from Bitcoin’s on-chain history, so danger, scale, and density differ catalog entry by catalog entry.",
      },
      {
        question: "What is a rift?",
        answer:
          "A rift is a playable expedition space — not a hand-authored level. Public Bitcoin data (fee pressure, transaction density, difficulty, halving era) deterministically shapes how harsh, crowded, and large each rift feels. You choose rifts from the atlas and your personal ledger; halving-era rifts carry extra weight.",
      },
      {
        question: "What is a breach?",
        answer:
          "A breach is one run into a rift. Fabricate a breach key in the workshop, pack healing stock and gear into your expedition kit, cross inward, and either extract with loot or collapse back to the surface when stamina runs out.",
      },
      {
        question: "What happens when I die in a rift?",
        answer:
          "You are lost in the breach — anything you carried unbanked stays behind. Gear you already stored in the vault on the surface is safe. Worn equipment returns with a durability hit. Run out of stamina and you collapse instead: dragged to the surface with what you kept, without a full character wipe.",
      },
      {
        question: "Is there permadeath?",
        answer:
          "No account wipe. Progress lives in your vault between breaches. Death costs unbanked loot and durability — not everything you have ever extracted. The tension is extract-or-lose-it on each run, not starting over from zero.",
      },
      {
        question: "Is Breachwalker like Escape from Tarkov?",
        answer:
          "If you want extract-or-lose-it pressure — kit packing, greed punished, high-stakes loot — Breachwalker shares that DNA. It is expedition survival in browser-based, Bitcoin-derived rifts rather than a squad tactical shooter. Single-player in alpha; stamina and collapse drive pacing instead of ballistics TTK alone.",
      },
      {
        question: "Is Breachwalker multiplayer?",
        answer:
          "The alpha is single-player inside each breach. Walkers share an asynchronous global atlas — charted rifts, virgin ledger entries, first-extract milestones — so the world grows together without live co-op or PvP in the same instance.",
      },
      {
        question: "Will Breachwalker add real-time multiplayer?",
        answer:
          "Not on the current roadmap. Breachwalker is built around solo expedition runs and async world progression. Synchronous squad breaches are a permanent non-goal for the core design.",
      },
    ],
  },
  {
    id: "alpha",
    title: "Closed alpha",
    entries: [
      {
        question: "What is the closed alpha?",
        answer:
          "Early access for a small cohort of testers. You breach rifts, stress the extract loop, and send feedback while we harden the client and backend. Alpha testers shape stamina tuning, loot pressure, and workshop balance before wider release.",
      },
      {
        question: "When can I play?",
        answer:
          "Invites roll out in batches — the game is not open to the public yet. Request alpha access on the signup page; we email when your cohort is ready.",
      },
      {
        question: "How do I get invited?",
        answer:
          "Join the alpha list with your email (Discord optional). Invites are manual and sequential. Check spam if you do not hear back within a few weeks of signing up.",
      },
      {
        question: "What platforms are supported?",
        answer:
          "Modern desktop browsers — Chrome, Firefox, Safari, Edge. Breachwalker is web-first; a native mobile build is not planned for the alpha.",
      },
      {
        question: "Do I need a crypto wallet for the alpha?",
        answer:
          "No wallet required. The closed alpha runs entirely off-chain: no seed phrase, no gas, no NFT minting. You are testing whether breaching rifts and extracting loot feels worth returning to.",
      },
    ],
  },
  {
    id: "economy",
    title: "Item economy",
    intro:
      "Grind items in rifts, fabricate in the workshop, trade with other walkers. Marketplace and Strikes settlement are on the roadmap — the closed alpha proves the breach loop first.",
    entries: [
      {
        question: "How does the item economy work?",
        answer:
          "Items enter the world through gameplay: breaches drop gear and reagents, the workshop turns reagents into breach keys, healing stock, and equipment, and walkers trade surplus loot with each other. Strikes — the sole in-game currency — settle marketplace trades. Rare drops from harsh rifts can carry provenance that collectors value. On the roadmap, select gear can also bridge to Base as a utility NFT for external sale.",
      },
      {
        question: "What are Strikes?",
        answer:
          "Strikes are Breachwalker’s only currency — one pool for every walker, with no separate premium token for spenders. You get Strikes by selling items on the in-game marketplace (buyers pay; sellers receive net after a platform fee) or by purchasing them with fiat. Breaches drop items and reagents, not Strikes. Free-to-play walkers earn Strikes the same way: extract loot → list on the marketplace → receive payment from buyers.",
      },
      {
        question: "Is there a player marketplace?",
        answer:
          "Yes — a walker-to-walker marketplace is planned. List crafted gear, reagents, and rare extractions; buyers pay in Strikes; sellers receive net proceeds after a platform fee. High-tier items retain provenance — which rift they came from and their craft history — which supports collector pricing. The marketplace launches after the breach loop proves sticky in live play.",
      },
      {
        question: "Can I earn money by playing?",
        answer:
          "Breachwalker is item-first: economic upside comes from valuable gear you extract and skilled play, not from logging in for a token drip. Planned earning paths: sell loot on the in-game marketplace for Strikes, then cash out through platform fiat rails when available; or bridge gear you earned to a utility NFT on Base and sell on external marketplaces such as OpenSea. Returns depend on demand, rarity, and how well you play — nothing is guaranteed. Marketplace and bridge are roadmap features; alpha testers focus on the breach loop only.",
      },
      {
        question: "Is Breachwalker pay to win?",
        answer:
          "Designed as no pay-to-win. Equippable gear is intended to come from breaches, workshop fabrication, or player trade — not a cash-only gear tab. Strikes are one currency for everyone; free-to-play walkers can earn them by selling items other players want. Spending fiat is a shortcut to Strikes, not a gate on the best mythic loot.",
      },
      {
        question: "Can free-to-play players compete?",
        answer:
          "Yes. Gameplay is how items enter the economy. Extract reagents, fabricate competitive gear, sell on the marketplace, and spend the Strikes you receive on other walkers’ listings — without ever topping up with fiat. Skill in the breach loop, rift selection, and crafting choices are meant to matter more than whether you bought Strikes.",
      },
      {
        question: "Do I need to spend money to play?",
        answer:
          "No purchase required for the alpha. At full release, breach entry is keyed off crafted consumables — breach keys and anchor spikes you fabricate from reagents extracted in play — not a direct cash gate per run. Fiat buys Strikes for marketplace convenience; it does not mint exclusive tier loot.",
      },
    ],
  },
  {
    id: "nfts",
    title: "NFTs & asset bridge",
    intro:
      "Export gear you earned in gameplay to tradeable item NFTs on Base — or bridge them back when you want them functional in rifts again. Wallet and minting are not part of the closed alpha.",
    entries: [
      {
        question: "Will Breachwalker have NFTs?",
        answer:
          "Yes. Utility-first item NFTs are on the roadmap. The goal is gear that stays meaningful inside rifts when you bridge it back — weapons and armor with stats tied to what you extracted and crafted, not JPEG collectibles with a reskin.",
      },
      {
        question: "How does the asset bridge work?",
        answer:
          "Loot lives off-chain in your vault by default. Bridge out: the item becomes a tradeable NFT on Base and leaves your playable inventory — no duplicate on-chain and in-game at once. Bridge in: connect a wallet holding that NFT and the item returns to your expedition kit. Sell the NFT on an external market and in-game function for the previous holder ends after ownership is reverified.",
      },
      {
        question: "Can I sell Breachwalker items on OpenSea?",
        answer:
          "That is the intended path after the asset bridge launches on Base. Bridge out gear you earned in gameplay, list it on OpenSea or another NFT marketplace, and a buyer acquires the on-chain item. Bridge a different piece back in if you want playable gear again. External trading depends on bridge launch and collection deployment — not available in the closed alpha.",
      },
      {
        question: "Which chain will NFTs use?",
        answer:
          "Base — lower fees and mature marketplace tooling than minting everything on Bitcoin L1. Bitcoin remains the substrate for rift generation and lore; Base carries the tradeable representation of gear you choose to export. Coinbase Wallet is the onboarding target, including paths that reduce seed-phrase friction for players new to crypto.",
      },
      {
        question: "Will I need ETH to mint an NFT?",
        answer:
          "We are exploring sponsored minting through a game-operated wallet so your first bridge-out may not require holding ETH for gas. Limits and eligibility will ship with the bridge.",
      },
      {
        question: "When do NFTs and the asset bridge launch?",
        answer:
          "After the breach loop and in-game marketplace prove out in live play. Closed alpha testers shape extraction, combat, and crafting before any wallet connection or mint button goes live.",
      },
      {
        question: "What about Bitcoin Ordinals?",
        answer:
          "Separate from the Base asset bridge. Ordinals-era holder partnerships — recognition items, soulbound rewards, bonus rifts tied to historic mints — are planned with Bitcoin-aware verification, not the same pipeline as EVM NFT custody.",
      },
      {
        question: "Are NFTs pay to win?",
        answer:
          "No separate whale mint track. NFTs export gear you already earned — bridge out a blade you extracted and fabricated, sell it externally, or bridge it back for rifts. There is no cash-only on-chain mythic crate. Utility inside breaches is the design bar.",
      },
    ],
  },
];

/** Flat list for JSON-LD and simple consumers */
export const FAQ_ENTRIES: FaqEntry[] = FAQ_SECTIONS.flatMap((s) => s.entries);
