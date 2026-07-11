// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const SITE = "https://breachwalker.com";

/** @type {Record<string, number>} */
const PAGE_PRIORITY = {
  [`${SITE}/`]: 1.0,
  [`${SITE}/alpha/`]: 0.95,
  [`${SITE}/faq/`]: 0.9,
  [`${SITE}/bitcoin-rifts/`]: 0.85,
  [`${SITE}/item-economy/`]: 0.85,
  [`${SITE}/how-it-works/`]: 0.85,
  [`${SITE}/extraction-survival-game/`]: 0.85,
  [`${SITE}/privacy/`]: 0.3,
  [`${SITE}/terms/`]: 0.3,
};

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
      serialize(item) {
        const priority = PAGE_PRIORITY[item.url];
        if (priority !== undefined) {
          item.priority = priority;
        }
        return item;
      },
    }),
  ],
  compressHTML: true,
});
