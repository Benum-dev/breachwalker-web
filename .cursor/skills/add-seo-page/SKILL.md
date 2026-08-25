---
name: add-seo-page
description: >-
  Adds a new SEO content spoke to the Breachwalker marketing site (data module,
  page route, OG image, sitemap priority). Use when creating a new SEO page,
  marketing spoke, or content landing under src/pages.
---

# Add SEO page

## Checklist

Copy and track:

```
- [ ] Entry in src/data/seo-pages.ts (SEO_PAGES key + SeoPage fields)
- [ ] Thin page: src/pages/<slug>.astro wrapping ContentPage
- [ ] PAGE_PRIORITY in astro.config.mjs
- [ ] OG slug in scripts/generate-og.mjs
- [ ] Path mapping in src/data/og-images.ts (if not convention-based)
- [ ] Nav/related links if needed (copy.ts / relatedLinks)
- [ ] Terminology pass (skill breachwalker-terminology)
- [ ] npm run check && npm run generate:og
```

## Page stub

```astro
---
import ContentPage from "../components/ContentPage.astro";
import { SEO_PAGES } from "../data/seo-pages";
---

<ContentPage page={SEO_PAGES["your-slug"]} />
```

## Meta rules

- `path` without trailing slash in data (helpers add slash)
- `metaTitle` / `metaDescription` = acquisition layer (keywords OK when accurate)
- Body `title` / `intro` / `sections` = prefer diegetic voice unless the spoke is explicitly acquisition (e.g. bitcoin-rifts)
- Always set `relatedLinks` back to `/`, `/how-it-works/`, `/alpha/` as relevant

## Sitemap

Add to `PAGE_PRIORITY` in `astro.config.mjs`, e.g. `0.85` for SEO spokes, `0.3` for legal.
