export const SITE = {
  name: "Breachwalker",
  url: "https://breachwalker.com",
  description:
    "Block-derived expedition survival. Pack your kit, breach into territories carved from Bitcoin blocks, extract loot — or collapse back to the surface.",
  locale: "en",
  contactEmail: "hello@breachwalker.com",
  privacyEmail: "privacy@breachwalker.com",
  ogImage: "/og/og-default.svg",
  /** Set via PUBLIC_CF_WEB_ANALYTICS_TOKEN in Cloudflare Pages env */
  cfWebAnalyticsToken: import.meta.env.PUBLIC_CF_WEB_ANALYTICS_TOKEN ?? "",
  /** Set via PUBLIC_TALLY_FORM_URL — leave empty to show mailto fallback */
  tallyFormUrl: import.meta.env.PUBLIC_TALLY_FORM_URL ?? "",
  legalUpdated: "2026-07-10",
} as const;

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
};

export function pageUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized === "/" ? "" : normalized}`;
}

export function pageTitle(title: string): string {
  return title === SITE.name ? SITE.name : `${title} · ${SITE.name}`;
}
