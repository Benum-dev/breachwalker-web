export const SITE = {
  name: "Breachwalker",
  url: "https://breachwalker.com",
  description:
    "Bitcoin-derived rift survival. Pack your kit, breach into rifts seeded from on-chain history, extract loot — or collapse back to the surface.",
  locale: "en",
  producer: {
    name: "Benum Labs",
    url: "https://benumlabs.com",
    credit: "A Benum Labs production",
  },
  /** Until breachwalker.com mail exists — single inbox for contact & privacy */
  contactEmail: "breachwalker@benumlabs.com",
  privacyEmail: "breachwalker@benumlabs.com",
  ogImage: "/og/og-default.png",
  /** Set via PUBLIC_CF_WEB_ANALYTICS_TOKEN in Cloudflare Pages env */
  cfWebAnalyticsToken: import.meta.env.PUBLIC_CF_WEB_ANALYTICS_TOKEN ?? "",
  /** Tally embed URL — override via PUBLIC_TALLY_FORM_URL env */
  tallyFormUrl: tallyEmbedUrl(
    import.meta.env.PUBLIC_TALLY_FORM_URL ?? "https://tally.so/r/KYZpB8",
  ),
  legalUpdated: "2026-07-10",
} as const;

/** Accept share links (tally.so/r/…) or embed URLs (tally.so/embed/…) */
function tallyEmbedUrl(raw: string): string {
  if (!raw) return "";
  if (raw.includes("/embed/")) return raw;
  const match = raw.match(/tally\.so\/r\/([A-Za-z0-9]+)/);
  if (match) return `https://tally.so/embed/${match[1]}`;
  return raw;
}

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogImageAlt?: string;
  noindex?: boolean;
};

export function pageUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return SITE.url;
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${SITE.url}${withSlash}`;
}

export function pageTitle(title: string): string {
  return title === SITE.name ? SITE.name : `${title} · ${SITE.name}`;
}
