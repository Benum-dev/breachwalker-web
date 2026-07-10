# breachwalker-web

Marketing site for [Breachwalker](https://breachwalker.com) — landing page, closed alpha signup, FAQ, and legal pages.

Built with [Astro](https://astro.build) (static output), deployed to **Cloudflare Pages** per `Docs/08-web-hosting-and-analytics.md`.

## Routes

| Path | Page |
|------|------|
| `/` | Landing + teasers |
| `/alpha` | Closed alpha signup |
| `/faq` | FAQ |
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

Output: `dist/`

## Environment variables (Cloudflare Pages)

Set in **Pages → Settings → Environment variables** (Production):

| Variable | Purpose |
|----------|---------|
| `PUBLIC_CF_WEB_ANALYTICS_TOKEN` | Cloudflare Web Analytics beacon token |
| `PUBLIC_TALLY_FORM_URL` | Tally embed URL for `/alpha` (e.g. `https://tally.so/embed/wXXXXXX`) |

Copy `.env.example` to `.env` for local testing.

## Deploy to Cloudflare Pages

### 1. Push this repo to GitHub

```bash
git remote add origin git@github.com:YOUR_ORG/breachwalker-web.git
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

In **Cloudflare → Rules → Redirect Rules** (or Bulk Redirects):

- If hostname equals `www.breachwalker.com` → redirect to `https://breachwalker.com` (301)

### 5. Web Analytics

1. **Analytics → Web Analytics → Add site** → `breachwalker.com`
2. Copy the token into `PUBLIC_CF_WEB_ANALYTICS_TOKEN`
3. Redeploy

### 6. Alpha signup (Tally)

1. Create a form at [tally.so](https://tally.so) with: email (required), Discord (optional), privacy checkbox linking to `/privacy`
2. Copy embed URL → `PUBLIC_TALLY_FORM_URL`
3. Redeploy

### 7. Google Search Console

1. Add property `breachwalker.com` (DNS TXT verification via Cloudflare)
2. Submit sitemap: `https://breachwalker.com/sitemap-index.xml`

## Copy & terminology

Player-facing strings live in `src/data/copy.ts`. Follow breach vocabulary — no "dive/prep/discover" in UI (see monorepo terminology skill).

## Related repos

- **Breachwalker** (game monorepo) — `phase2-prototype/` deploys to `game.breachwalker.com` via Firebase Hosting (separate deploy).
