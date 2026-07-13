/**
 * Generates 1200×630 PNG Open Graph images.
 * Run automatically before `astro build` via npm prebuild.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../public/og");
const defaultSource = join(outDir, "source-website_with_text.png");

const OG_PAGES = [
  { slug: "default", subtitle: "Cross the breach." },
  { slug: "alpha", subtitle: "Closed alpha access" },
  { slug: "faq", subtitle: "Frequently asked questions" },
  { slug: "bitcoin-rifts", subtitle: "Bitcoin-derived rifts" },
  { slug: "item-economy", subtitle: "Loot, craft, trade" },
  { slug: "how-it-works", subtitle: "The breach loop" },
  { slug: "extraction-survival-game", subtitle: "Extraction survival" },
];

function escapeXml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function ogSvg(subtitle) {
  const sub = escapeXml(subtitle);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0a0c0f"/>
  <defs>
    <radialGradient id="glow" cx="50%" cy="0%" r="80%">
      <stop offset="0%" stop-color="#d4a24a" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#0a0c0f" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <text x="600" y="260" text-anchor="middle" fill="#e8ecf1" font-family="Georgia, serif" font-size="72" font-weight="600">Breachwalker</text>
  <text x="600" y="340" text-anchor="middle" fill="#9aa5b5" font-family="system-ui, sans-serif" font-size="34">${sub}</text>
  <path d="M600 400 L640 450 L600 500 L560 450 Z" stroke="#d4a24a" stroke-width="3" fill="none"/>
  <text x="600" y="580" text-anchor="middle" fill="#5c6675" font-family="system-ui, sans-serif" font-size="22">breachwalker.com</text>
</svg>`;
}

mkdirSync(outDir, { recursive: true });

for (const page of OG_PAGES) {
  if (page.slug === "default") {
    // Default OG uses the latest concept banner (cropped to 1200×630).
    await sharp(defaultSource)
      .resize(1200, 630, { fit: "cover", position: "centre" })
      .png()
      .toFile(join(outDir, "og-default.png"));
    console.log("og-default.png");
    continue;
  }

  const svg = ogSvg(page.subtitle);
  const pngPath = join(outDir, `og-${page.slug}.png`);
  await sharp(Buffer.from(svg)).png().toFile(pngPath);
  writeFileSync(join(outDir, `og-${page.slug}.svg`), svg, "utf8");
  console.log(`og-${page.slug}.png`);
}

console.log(`Generated ${OG_PAGES.length} OG images in public/og/`);
