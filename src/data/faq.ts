export type FaqEntry = {
  question: string;
  answer: string;
};

export type FaqSection = {
  id: string;
  title: string;
  intro?: string;
  entries: FaqEntry[];
};

export const FAQ_SECTIONS: FaqSection[] = [
  {
    id: "game",
    title: "Gameplay & rifts",
    intro:
      "Web-first extraction survival in rifts seeded from Bitcoin on-chain history. Pack your kit, breach inward, extract loot — or collapse back to the surface.",
    entries: [
      {
        question: "What is Breachwalker?",
        answer:
          "Breachwalker is a web-first extraction survival game from Benum Labs. You stand on the surface hold, pick a rift from the ledger, pack your expedition kit, and breach inward — managing stamina, fighting through procedurally derived space, and extracting loot to your vault before you collapse. Every rift is seeded from Bitcoin’s public on-chain history, so danger, scale, and density differ catalog entry by catalog entry.",
      },
      {
        question: "Is Breachwalker a Bitcoin game?",
        answer:
          "Yes — in the sense that rift terrain is derived from real Bitcoin data, not a cosmetic crypto skin. Fee pressure, transaction density, difficulty, and halving era shape each rift’s danger and scale. You do not need to own Bitcoin or connect a wallet to play the closed alpha. The chain is the world’s source code, not a login gate.",
      },
      {
        question: "Why does Breachwalker use the Bitcoin ledger?",
        answer:
          "Because Bitcoin is a public, immutable timeline of sealed moments — each block a record of how busy the network was, how hard mining was, and which subsidy era the chain was in. That is a natural spine for expedition worldbuilding: verifiable history instead of server-only fiction. Breachwalker maps public block statistics into rift danger, scale, and density, then seeds layouts and loot deterministically from each catalog entry’s identity. You read the archive; you do not need to trade on it to play.",
      },
      {
        question: "What Bitcoin data shapes a rift?",
        answer:
          "Public block statistics — how many transactions fit, how heavy the block was, fee pressure at the time, mining difficulty, input/output complexity, and era flags such as halving or difficulty-adjustment blocks. These normalize into gameplay dimensions like density, scale, danger, and harshness. Congested, fee-heavy history tends to produce more punishing rifts; quiet eras read differently. Exact mapping formulas are Breachwalker’s generation spec and can evolve with balance — the principle is that rift feel grows from inspectable chain history.",
      },
      {
        question: "What is a catalog entry?",
        answer:
          "The player-facing archive index for a rift — how the surface hold labels one wound in the ledger (for example a halving-era reference). Under the hood it ties to a specific Bitcoin block height and hash, but walkers breach rifts and read catalog numbers, not chain jargon in the UI.",
      },
      {
        question: "Do I need to understand Bitcoin to play?",
        answer:
          "No. The closed alpha needs only a browser — no wallet, no keys, no mempool literacy. Understanding the ledger helps you appreciate why a halving-era rift hits harder or why two catalog entries play nothing alike. The game teaches breach, extract, and craft; this FAQ and the Bitcoin rifts page explain the worldbuilding layer for curious walkers.",
      },
      {
        question: "What is a rift?",
        answer:
          "A rift is a playable expedition space — not a hand-authored level. Public Bitcoin data deterministically shapes how harsh, crowded, and large each rift feels. You choose rifts from the global atlas and your personal ledger. Halving-era rifts carry extra weight; high-density rifts feel resource-heavy and crowded.",
      },
      {
        question: "How are rifts generated from Bitcoin data?",
        answer:
          "Each catalog entry anchors to a real block’s public record. Statistics from that block normalize into terrain scores — density, scale, danger, harshness, and related dimensions. Deterministic seeds derived from the block’s identity then drive layout and loot generation so the same catalog entry always shares the same core rift parameters and fixed legendary coordinates. Personal survey fog can still differ between your runs; global atlas claims do not.",
      },
      {
        question: "What is a breach?",
        answer:
          "A breach is one run into a rift. Fabricate a breach key in the workshop, pack healing stock and gear into your expedition kit, cross inward, and either extract with loot or collapse back to the surface when stamina runs out.",
      },
      {
        question: "What is the atlas?",
        answer:
          "The atlas is the shared global registry of charted rifts — which expedition spaces walkers worldwide have mapped. Your personal rift ledger shows what you can breach today: open routes, sealed rifts waiting on anchor spikes, and rifts you have already run. Virgin rifts grow the atlas for everyone when a walker extracts for the first time.",
      },
      {
        question: "What are legendary, mythic, and one-of-one items?",
        answer:
          "Top-tier rarity bands above routine loot. Legendary and mythic items can sit at fixed coordinates inside a rift — predetermined locations every walker maps to the same place. One-of-one is the rarest tier above mythic: a single global instance tied to a specific find, not a stack of duplicates. These are the drops collectors chase and the items designed for NFT bridge export, because each carries real provenance.",
      },
      {
        question: "How does the global atlas track legendary and mythic finds?",
        answer:
          "Legendary and mythic items at fixed coordinates are globally unique on the shared atlas. The first walker to extract one claims it for the world — recorded on the atlas so every other walker knows that coordinate is spent. One-of-one global claims follow the same first-find-wins model on the roadmap. Routine gear below legendary still drops from personal encounters and is not atlas-locked at a single world coordinate. Full global claim authority ships with the live cloud atlas; the closed alpha focuses on the breach loop first.",
      },
      {
        question: "What happens when I die in a rift?",
        answer:
          "You are lost in the breach — anything you carried unbanked stays behind. Gear already in your vault on the surface is safe. Worn equipment returns with a durability hit. Run out of stamina and you collapse instead: dragged to the surface with what you kept, without a full character wipe.",
      },
      {
        question: "Is there permadeath?",
        answer:
          "No account wipe. Long-term progress lives in your vault between breaches. Death costs unbanked loot and durability on worn gear — not everything you have ever extracted. The tension is extract-or-lose-it on each run.",
      },
      {
        question: "Is Breachwalker an extraction survival game?",
        answer:
          "Yes. The core loop is pack your kit, breach a rift, push while stamina drains, and extract loot to your vault before greed or exhaustion gets you killed or collapsed. Unbanked loot is at risk every run. It plays in the browser as solo expedition survival rather than a squad tactical shooter.",
      },
      {
        question: "Is Breachwalker like Escape from Tarkov?",
        answer:
          "Similar extract-or-lose-it pressure — kit packing, greed punished, high-stakes loot — but Breachwalker is expedition survival in Bitcoin-derived rifts, not a military FPS. Single-player in alpha; stamina and collapse drive pacing alongside combat.",
      },
      {
        question: "Is Breachwalker multiplayer?",
        answer:
          "Each breach is single-player in the alpha. Walkers share an asynchronous global atlas — charted rifts, virgin ledger entries, first-extract milestones — so the world grows together without live co-op or PvP in the same instance.",
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
    intro:
      "Early access for a small cohort of testers. Breach rifts, stress the extract loop, and shape what ships next — no wallet, no NFT minting, no marketplace yet.",
    entries: [
      {
        question: "What is the closed alpha?",
        answer:
          "Early access for walkers who test the breach loop before wider release. You breach rifts, extract loot, fabricate in the workshop, and send feedback while we harden the client and backend. Alpha testers directly influence stamina tuning, loot pressure, and workshop balance.",
      },
      {
        question: "What do alpha testers actually do?",
        answer:
          "Play the full breach loop in the browser: pick a rift from the ledger, pack your expedition kit, breach inward, manage stamina, extract gear to your vault, and fabricate breach keys and healing stock between runs. Report bugs, friction, and whether the loop feels worth repeating.",
      },
      {
        question: "When can I play?",
        answer:
          "Invites roll out in batches — the game is not open to the public yet. Request alpha access on the signup page; we email when your cohort is ready.",
      },
      {
        question: "How do I get invited?",
        answer:
          "Join the alpha list with your email — Discord optional. Invites are manual and sequential. Check spam if you do not hear back within a few weeks of signing up.",
      },
      {
        question: "Is the alpha free?",
        answer:
          "Yes. Closed alpha access costs nothing. No purchase, no wallet, no crypto required. You are helping us prove the breach loop is sticky before marketplace and NFT features ship.",
      },
      {
        question: "What platforms are supported?",
        answer:
          "Modern desktop browsers — Chrome, Firefox, Safari, Edge. Breachwalker is web-first; a native mobile build is not planned for the alpha.",
      },
      {
        question: "Do I need a crypto wallet for the alpha?",
        answer:
          "No. The closed alpha runs entirely off-chain: no seed phrase, no gas fees, no NFT minting. Wallet connection and the asset bridge arrive on the roadmap after the core loop proves out.",
      },
    ],
  },
  {
    id: "economy",
    title: "Item economy",
    intro:
      "Extract gear in rifts, fabricate in the workshop, trade with other walkers. Strikes settle marketplace deals. Bridge select loot to Base NFTs on the roadmap. The closed alpha proves the breach loop first.",
    entries: [
      {
        question: "How does the item economy work?",
        answer:
          "Every valuable item starts in gameplay. Breaches drop gear and reagents. The workshop turns reagents into breach keys, healing stock, and equipment. Walkers list surplus loot on the player marketplace for Strikes, or — on the roadmap — bridge high-tier pieces to tradeable NFTs on Base. Rare drops from harsh rifts carry provenance collectors value.",
      },
      {
        question: "What are Strikes?",
        answer:
          "Strikes are Breachwalker’s only currency — one pool for every walker, with no separate premium token for spenders. You get Strikes by selling items on the in-game marketplace (buyers pay; sellers receive net after a platform fee) or by purchasing them with fiat. Breaches drop items and reagents, not Strikes. Free-to-play walkers earn Strikes the same way: extract loot, list on the marketplace, receive payment from buyers.",
      },
      {
        question: "Is there a player marketplace?",
        answer:
          "Yes — a walker-to-walker marketplace is planned. List crafted gear, reagents, and rare extractions at a Strikes price; buyers pay; you receive net proceeds after a platform fee. High-tier items retain provenance — which rift they came from and their craft history — which supports collector pricing. The marketplace launches after the breach loop proves sticky in live play.",
      },
      {
        question: "Can I earn money by playing?",
        answer:
          "Breachwalker is item-first soft P2E: economic upside comes from valuable gear and skilled play, not from logging in for a token drip. Planned paths: sell loot on the in-game marketplace for Strikes, then cash out through platform fiat rails when available; or bridge gear you earned to a utility NFT on Base and sell on OpenSea or another external market. Returns depend on demand, rarity, and how well you play — nothing is guaranteed. Marketplace and bridge are roadmap features.",
      },
      {
        question: "Is Breachwalker pay to win?",
        answer:
          "Designed as no pay-to-win. Equippable gear comes from breaches, workshop fabrication, or player trade — not a cash-only gear tab. Strikes are one currency for everyone; free-to-play walkers earn them by selling items other players want. Spending fiat is a shortcut to Strikes for marketplace convenience, not a gate on the best mythic loot.",
      },
      {
        question: "Can free-to-play players compete?",
        answer:
          "Yes. Gameplay is how items enter the economy. Extract reagents, fabricate competitive gear, sell on the marketplace, and spend the Strikes you receive on other walkers’ listings — without ever topping up with fiat. Skill in rift selection, extraction timing, and crafting choices should matter more than whether you bought Strikes.",
      },
      {
        question: "Do I need to spend money to play?",
        answer:
          "No purchase required for the alpha. At full release, breach entry uses crafted consumables — breach keys and anchor spikes you fabricate from reagents extracted in play — not a direct cash gate per run. Fiat buys Strikes for marketplace convenience; it does not mint exclusive tier loot.",
      },
      {
        question: "What economy features ship in the alpha?",
        answer:
          "Extraction, crafting, vault storage, and the stamina loop — all off-chain. Marketplace listing, Strikes trading, NFT bridge, and OpenSea export follow once the core breach loop proves out. Alpha testers shape loot and workshop balance before economy features go live.",
      },
    ],
  },
  {
    id: "nfts",
    title: "NFTs & asset bridge",
    intro:
      "Bridge gear you earned in gameplay to tradeable item NFTs on Base — sell on OpenSea, or bridge back when you want it functional in rifts. Wallet and minting are roadmap features, not part of the closed alpha.",
    entries: [
      {
        question: "Will Breachwalker have NFTs?",
        answer:
          "Yes. Utility-first item NFTs are on the roadmap. The goal is gear that stays meaningful inside rifts when you bridge it back — weapons and armor with stats tied to what you extracted and crafted, not JPEG collectibles with a reskin.",
      },
      {
        question: "Which items can be bridged as NFTs?",
        answer:
          "Legendary, mythic, and one-of-one gear — the globally unique tiers tracked on the shared atlas. Each is a distinct instance with provenance: which rift, which catalog entry, often which fixed coordinate was claimed first. Routine common-to-rare loot is stackable gameplay gear and is not designed for NFT export. Bridge targets are the finds worth carrying off-chain because only one walker can own that world history.",
      },
      {
        question: "How does the asset bridge work?",
        answer:
          "Loot lives off-chain in your vault by default. Bridge out: the item becomes a tradeable NFT on Base and leaves your playable inventory — no duplicate on-chain and in-game at once. Bridge in: connect a wallet holding that NFT and the item returns to your expedition kit. Sell the NFT externally and in-game function for the previous holder ends after ownership is reverified.",
      },
      {
        question: "Can I sell Breachwalker items on OpenSea?",
        answer:
          "That is the intended path after the asset bridge launches on Base. Earn gear in a rift, bridge out to Base, list on OpenSea or another NFT marketplace, and a buyer acquires the on-chain item. Bridge a different piece back in when you want playable loadout gear again. External trading ships with the bridge — not available in the closed alpha.",
      },
      {
        question: "Which chain will NFTs use?",
        answer:
          "Base — lower fees and mature marketplace tooling than minting everything on Bitcoin L1. Bitcoin remains the substrate for rift generation and lore; Base carries the tradeable representation of gear you choose to export. Coinbase Wallet is the onboarding target, including paths that reduce seed-phrase friction for players new to crypto.",
      },
      {
        question: "Will I need ETH to mint an NFT?",
        answer:
          "We are exploring sponsored minting through a game-operated wallet so your first bridge-out may not require holding ETH for gas. Limits and eligibility will ship with the asset bridge.",
      },
      {
        question: "When do NFTs and the asset bridge launch?",
        answer:
          "After the breach loop and in-game marketplace prove out in live play. Closed alpha testers shape extraction, combat, and crafting before any wallet connection or mint button goes live.",
      },
      {
        question: "What about Bitcoin Ordinals?",
        answer:
          "Planned separately from the Base asset bridge. Ordinals-era holder partnerships — recognition items, soulbound rewards, bonus rifts tied to historic mints — would use Bitcoin-aware verification, not the same pipeline as EVM NFT custody.",
      },
      {
        question: "Are NFTs pay to win?",
        answer:
          "No separate whale mint track. NFTs export gear you already earned — bridge out a blade you extracted and fabricated, sell it on OpenSea, or bridge it back for rifts. There is no cash-only on-chain mythic crate. Utility inside breaches is the design bar.",
      },
      {
        question: "Is Breachwalker an NFT game today?",
        answer:
          "Not yet. The closed alpha is fully off-chain — no wallet, no minting, no bridge. You are testing the breach and extraction loop. NFT export arrives on the roadmap after marketplace and live-play validation.",
      },
    ],
  },
];

/** Flat list for JSON-LD and simple consumers */
export const FAQ_ENTRIES: FaqEntry[] = FAQ_SECTIONS.flatMap((s) => s.entries);
