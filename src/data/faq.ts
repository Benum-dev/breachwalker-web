export type FaqEntry = {
  question: string;
  answer: string;
};

export type FaqSection = {
  id: string;
  title: string;
  entries: FaqEntry[];
};

export const FAQ_SECTIONS: FaqSection[] = [
  {
    id: "game",
    title: "The game",
    entries: [
      {
        question: "What is Breachwalker?",
        answer:
          "An expedition survival game built around rifts — unstable spaces derived from Bitcoin’s on-chain history. You breach inward from the surface, manage stamina, extract loot to your vault, and fabricate keys and gear in the workshop.",
      },
      {
        question: "What is a breach?",
        answer:
          "A breach is a run into a rift. You pack your expedition kit on the surface, cross the breach, and either extract with loot or collapse back to the surface.",
      },
      {
        question: "What is a rift?",
        answer:
          "A rift is a playable expedition space seeded from public Bitcoin data — danger, scale, and density differ rift by rift. Each rift has a catalog reference in the atlas; halving-era rifts carry harsher weight. You select a rift from the ledger, not a generic map list.",
      },
      {
        question: "What happens when I die?",
        answer:
          "You are lost in the breach — unbanked loot stays behind. Worn gear and what you already extracted to the vault return to the surface. Stamina collapse drags you back without a character wipe.",
      },
      {
        question: "Is there permadeath?",
        answer:
          "No character wipe. Death in a rift costs unbanked loot and durability on worn gear — not your account or everything you ever extracted. Bank to the vault on the surface between breaches.",
      },
      {
        question: "Is Breachwalker like Escape from Tarkov?",
        answer:
          "Similar tension — high-stakes extraction, gear risk, greed punished — but Breachwalker is web-first expedition survival in Bitcoin-derived rifts, not a military shooter. Single-player in alpha; stamina and collapse replace some of the shooter pacing.",
      },
      {
        question: "Is Breachwalker multiplayer?",
        answer:
          "The alpha is single-player. A shared atlas tracks which rifts walkers have charted worldwide; synchronous co-op or PvP is not part of the current scope.",
      },
      {
        question: "Will Breachwalker add multiplayer?",
        answer:
          "Not on the alpha roadmap. The shared atlas is asynchronous — other walkers chart rifts, but you do not squad up in the same breach instance today.",
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
          "Early access for a small group of testers. You will breach rifts, stress the extract loop, and send feedback before a wider release.",
      },
      {
        question: "When can I play?",
        answer:
          "Not yet publicly. Request alpha access and we will invite in batches as the client and backend milestones land.",
      },
      {
        question: "How do I get invited?",
        answer:
          "Sign up on the alpha page. Invites go out manually when we are ready for the next cohort. Check your spam folder.",
      },
      {
        question: "What platforms are supported?",
        answer:
          "Web-first in the browser. No native mobile build is planned for the alpha.",
      },
      {
        question: "Do I need a crypto wallet for the alpha?",
        answer:
          "No. The alpha runs entirely off-chain. No wallet connection, no gas fees, no NFT minting.",
      },
    ],
  },
  {
    id: "economy",
    title: "Roadmap — item economy",
    entries: [
      {
        question: "What are Strikes?",
        answer:
          "Strikes are the sole currency — one pool for everyone, with no separate premium currency locked behind spending. Breaches drop items and reagents, not Strikes. You obtain Strikes by selling items on the in-game marketplace (buyer pays; seller receives net after platform tax) or through fiat purchase. Free-to-play walkers can earn Strikes the same way as anyone else: gameplay loot → marketplace sale.",
      },
      {
        question: "Is Breachwalker pay to win?",
        answer:
          "No pay-to-win design. All gear and reagents are earned through gameplay — breaches, crafting, and extraction. There is no premium currency only spenders can access. Strikes are the single settlement currency, and free-to-play players can obtain Strikes by selling items other walkers buy on the in-game marketplace. Spending fiat is a shortcut to Strikes, not a gate on the best loot.",
      },
      {
        question: "Is there a premium currency or VIP-only gear?",
        answer:
          "No. Breachwalker uses one currency — Strikes — for marketplace settlement. There is no second premium token, no battle pass-only mythic tier, and no cash-only gear sheet. If it equips in a rift, the intended path is earn it in play, fabricate it in the workshop, or buy it from another player with Strikes you earned or bought.",
      },
      {
        question: "Can free-to-play players compete?",
        answer:
          "Yes. Gameplay is how items enter the economy. A free-to-play walker can extract reagents, fabricate gear, sell on the marketplace, and receive Strikes from buyers — then buy other players' items without ever spending fiat. Skill in the breach loop and crafting choices matter more than whether you topped up Strikes with money.",
      },
      {
        question: "Can I earn money by playing?",
        answer:
          "Breachwalker is item-first, not a pay-to-login reward loop. You grind gear and reagents inside rifts, craft in the workshop, and trade on the marketplace. Economic upside comes from item value and skilled play — not from a token drip for showing up.",
      },
      {
        question: "Is there a player marketplace?",
        answer:
          "Planned after the core breach loop proves out. Strikes settle trades; provenance on high-tier items matters for collector value. The marketplace is not live in the alpha.",
      },
    ],
  },
  {
    id: "nfts",
    title: "Roadmap — NFTs & asset bridge",
    entries: [
      {
        question: "Will Breachwalker have NFTs?",
        answer:
          "Yes. Item NFTs are on the roadmap. The design goal is utility-first gear that remains meaningful inside rifts after you bring it back on-chain — not collectibles with a game reskin.",
      },
      {
        question: "How does the asset bridge work?",
        answer:
          "Most loot lives off-chain in your vault by default. When you choose to bridge out, the item becomes a tradeable NFT and leaves your functional in-game inventory (no duplicate item on-chain and off-chain). Bridge in again — by connecting a wallet that holds that NFT — and the item returns to your playable loadout. If the NFT sells on an external market, in-game function for the previous holder ends after ownership reverification.",
      },
      {
        question: "Which chain will NFTs use?",
        answer:
          "Base. Bitcoin remains the substrate for rift generation and lore; tradeable item NFTs target Base for lower fees and mature marketplace tooling. Wallet onboarding is intended to use Coinbase Wallet — including paths that avoid seed-phrase friction for players new to crypto.",
      },
      {
        question: "Will I need ETH to mint an NFT?",
        answer:
          "We are exploring sponsored minting through a game-operated wallet so your first bridge-out does not require holding ETH for gas. Details and limits will ship with the asset bridge — not in the alpha.",
      },
      {
        question: "Is this an NFT game today?",
        answer:
          "Not in the alpha. There is no minting, wallet connection, or export yet. Closed alpha testers shape the breach loop before the bridge goes live.",
      },
      {
        question: "What about Bitcoin Ordinals?",
        answer:
          "Ordinals-era holder partnerships (recognition items, soulbound rewards, bonus rifts tied to historic mints) are planned separately from the Base asset bridge. Verification would use a Bitcoin-aware indexer, not the same pipeline as EVM NFT custody.",
      },
      {
        question: "Are NFTs pay to win?",
        answer:
          "No. NFTs are an export format for gear you already earned in gameplay — bridge out a item you extracted and crafted, trade it externally, bridge it back if you want it functional again. There is no loot box of on-chain mythics only whales can mint. Utility in rifts is the design bar, not speculative rarity alone.",
      },
      {
        question: "When will NFTs and OpenSea trading go live?",
        answer:
          "After the breach loop and in-game marketplace prove out in live play. Base is the target chain for tradeable item NFTs; external marketplaces like OpenSea depend on bridge launch and collection deployment — not part of closed alpha.",
      },
    ],
  },
];

/** Flat list for JSON-LD and simple consumers */
export const FAQ_ENTRIES: FaqEntry[] = FAQ_SECTIONS.flatMap((s) => s.entries);
