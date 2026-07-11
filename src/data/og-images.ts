/** Per-route Open Graph image paths (1200×630 PNG in public/og/). */
export const OG_IMAGE_BY_PATH: Record<string, string> = {
  "/": "/og/og-default.png",
  "/alpha": "/og/og-alpha.png",
  "/faq": "/og/og-faq.png",
  "/bitcoin-rifts": "/og/og-bitcoin-rifts.png",
  "/item-economy": "/og/og-item-economy.png",
  "/how-it-works": "/og/og-how-it-works.png",
  "/extraction-survival-game": "/og/og-extraction-survival-game.png",
};

export function ogImagePath(path: string): string {
  return OG_IMAGE_BY_PATH[path] ?? "/og/og-default.png";
}
