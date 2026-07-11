import { SITE, pageUrl } from "./site";

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.producer.name,
    url: SITE.producer.url,
    email: SITE.contactEmail,
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

export function videoGameJsonLd() {
  const image = new URL("/og/og-default.png", SITE.url).href;
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    image,
    genre: ["Survival", "Extraction", "Role-playing"],
    gamePlatform: "Web browser",
    playMode: "SinglePlayer",
    applicationCategory: "Game",
    operatingSystem: "Any",
    inLanguage: "en-US",
    publisher: { "@id": ORG_ID },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
      url: pageUrl("/alpha"),
      description: "Closed alpha access — signup required",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export function webPageJsonLd(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: opts.name,
    description: opts.description,
    url: pageUrl(opts.path),
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "en-US",
  };
}

export const HOME_JSON_LD = [
  organizationJsonLd(),
  webSiteJsonLd(),
  videoGameJsonLd(),
];
