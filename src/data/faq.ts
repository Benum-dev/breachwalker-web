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
        question: "Is Breachwalker multiplayer?",
        answer:
          "The alpha is single-player. A shared atlas tracks which rifts walkers have charted worldwide; synchronous co-op or PvP is not part of the current scope.",
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
          "Strikes are the sole settlement currency for player-to-player trade on the marketplace. Breaches drop items and reagents, not Strikes. You obtain Strikes through fiat purchase or by selling items to other players (buyer pays; seller receives net after platform tax).",
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
    ],
  },
];

/** Flat list for JSON-LD and simple consumers */
export const FAQ_ENTRIES: FaqEntry[] = FAQ_SECTIONS.flatMap((s) => s.entries);
