export type FaqEntry = {
  question: string;
  answer: string;
};

export const FAQ_ENTRIES: FaqEntry[] = [
  {
    question: "What is Breachwalker?",
    answer:
      "An expedition survival game where Bitcoin blocks become territories. You breach inward from the surface, manage stamina, extract loot to your vault, and fabricate keys and gear in the workshop.",
  },
  {
    question: "What is a breach?",
    answer:
      "A breach is a run into a block-derived territory. You pack your expedition kit on the surface, begin the breach, and either extract with loot or collapse back to the surface.",
  },
  {
    question: "Is this on-chain or an NFT game?",
    answer:
      "No. Territories are derived deterministically from public block data. There is no wallet connection, no Ordinals export, and no on-chain assets in the alpha.",
  },
  {
    question: "What are Strikes?",
    answer:
      "Strikes are the sole currency — used for marketplace settlement between players. Breaches drop items and reagents, not Strikes.",
  },
  {
    question: "What is the closed alpha?",
    answer:
      "Early access for a small group of testers. You will breach territories, test the extract loop, and send feedback before a wider release.",
  },
  {
    question: "When can I play?",
    answer:
      "Not yet publicly. Request alpha access and we will invite in batches as the client and backend milestones land.",
  },
  {
    question: "What platforms are supported?",
    answer:
      "Web-first in the browser. No native mobile build is planned for the alpha.",
  },
  {
    question: "How do I get invited?",
    answer:
      "Sign up on the alpha page. Invites go out manually when we are ready for the next cohort. Check your spam folder.",
  },
];
