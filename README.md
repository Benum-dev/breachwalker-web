# breachwalker-web

Marketing site for [Breachwalker](https://breachwalker.com) — landing page, closed alpha signup, FAQ, SEO content pages, and legal pages.

Built with [Astro](https://astro.build) (static output), deployed to **Cloudflare Pages** per `Docs/08-web-hosting-and-analytics.md`.

## Routes

| Path | Page |
|------|------|
| `/` | Landing — hero, audience cards, teasers, roadmap |
| `/alpha` | Closed alpha signup (Tally) |
| `/faq` | Nested FAQ + FAQPage JSON-LD |
| `/bitcoin-rifts` | SEO — Bitcoin-derived rifts |
| `/item-economy` | SEO — item economy, Strikes, NFT roadmap |
| `/how-it-works` | SEO — breach loop |
| `/extraction-survival-game` | SEO — extraction survival keywords |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Build

```bash
npm run build
npm run preview
```

`prebuild` runs automatically and generates 1200×630 PNG Open Graph images in `public/og/`.

Output: `dist/` (9 indexable pages + sitemap)

## SEO checklist

### Structured data

| Page | JSON-LD |
|------|---------|
| `/` | Organization, WebSite, VideoGame |
| `/faq` | FAQPage, BreadcrumbList |
| Content pages | WebPage, BreadcrumbList |
| `/alpha` | WebPage, BreadcrumbList |

### Open Graph

Per-route PNG images at `/og/og-<slug>.png` (1200×630). Regenerate with `npm run generate:og`.

### After deploy

1. **Google Search Console** → Sitemaps → resubmit `https://breachwalker.com/sitemap-index.xml`
2. **URL inspection** — spot-check `/`, `/faq`, `/extraction-survival-game`
3. **Rich Results Test** — paste homepage URL; confirm VideoGame + Organization
4. **Social debugger** — verify OG image on a content page (Twitter Card Validator / Meta Sharing Debugger)

### UTM discipline (distribution)

| Channel | Landing | Example UTM |
|---------|---------|---------------|
| Twitter / X (crypto) | `/bitcoin-rifts` | `?utm_source=twitter&utm_medium=social&utm_campaign=alpha_crypto` |
| Reddit (indie / extraction) | `/how-it-works` | `?utm_source=reddit&utm_medium=social&utm_campaign=alpha_gamer` |
| Discord (crypto gaming) | `/item-economy` | `?utm_source=discord&utm_medium=social&utm_campaign=alpha_economy` |
| General CTA | `/alpha` | `?utm_source=<channel>&utm_medium=social&utm_campaign=alpha_signup` |

Track referrers in Cloudflare Web Analytics and Tally export.

## Environment variables (Cloudflare Pages)

Set in **Pages → Settings → Environment variables** (Production):

| Variable | Purpose |
|----------|---------|
| `PUBLIC_CF_WEB_ANALYTICS_TOKEN` | Optional manual CF Web Analytics token (automatic setup works without it) |
| `PUBLIC_TALLY_FORM_URL` | Tally embed URL for `/alpha` (e.g. `https://tally.so/embed/wXXXXXX`) |

Copy `.env.example` to `.env` for local testing.

## Deploy to Cloudflare Pages

### 1. Push this repo to GitHub

```bash
git remote add origin git@github.com:Benum-dev/breachwalker-web.git
git branch -M main
git push -u origin main
```

### 2. Create Pages project

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Select the `breachwalker-web` repository
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 22 (Settings → Environment variables → `NODE_VERSION` = `22`)
4. Add environment variables (see above)
5. Deploy

### 3. Custom domain

1. Pages project → **Custom domains** → **Set up a custom domain**
2. Enter `breachwalker.com`
3. Cloudflare DNS should auto-configure if the domain is on the same account

### 4. www redirect

In **Cloudflare → Rules → Redirect Rules**:

- If hostname equals `www.breachwalker.com` → redirect to `https://breachwalker.com` (301)

### 5. Web Analytics

Cloudflare injects Web Analytics automatically for proxied Pages sites. Optional manual token via `PUBLIC_CF_WEB_ANALYTICS_TOKEN`.

### 6. Alpha signup (Tally)

1. Create a form at [tally.so](https://tally.so) with: email (required), Discord (optional), privacy checkbox linking to `/privacy`
2. Copy embed URL → `PUBLIC_TALLY_FORM_URL`
3. Redeploy

## Copy & terminology

Player-facing strings live in `src/data/copy.ts`. Follow breach + rift vocabulary — no "dive/prep/discover/territory/block" in UI (see monorepo terminology skill).

## Related repos

- **Breachwalker** (game monorepo) — `phase2-prototype/` deploys to `game.breachwalker.com` via Firebase Hosting (separate deploy).
