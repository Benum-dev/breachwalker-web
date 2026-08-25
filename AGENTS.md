# AGENTS.md — breachwalker-web

Marketing site for **Breachwalker** (`breachwalker.com`): landing, closed alpha signup, FAQ, SEO spokes, legal. Static Astro → **Cloudflare Pages**. Game client lives in the sibling monorepo and deploys separately to `game.breachwalker.com`.

## Read in this order

| Doc / path | Purpose |
|------------|---------|
| This file | Stack, layout, ground rules, skills index |
| `README.md` | Routes, deploy, SEO checklist, env vars |
| `../Breachwalker/Docs/08-web-hosting-and-analytics.md` | Hosting architecture (marketing vs game) |
| `../Breachwalker/Docs/10-world-lore-and-cosmology.md` | Lore authority before naming/cosmology copy |
| `.cursor/rules/` | Auto-applied constraints |
| `.cursor/skills/` | On-demand workflows |

## Stack

| Piece | Choice |
|-------|--------|
| Framework | Astro 7, static output, `trailingSlash: "always"` |
| Styling | Plain CSS + design tokens (`src/styles/tokens.css`) — **not** Tailwind |
| Hosting | Cloudflare Pages (`main` → production) |
| Analytics | Cloudflare Web Analytics (`PUBLIC_CF_WEB_ANALYTICS_TOKEN` optional) |
| Alpha form | Tally embed (`PUBLIC_TALLY_FORM_URL`) |
| Node | `>=22.12.0` |

## Layout

| Path | Role |
|------|------|
| `src/pages/` | File-based routes |
| `src/components/` | Astro components |
| `src/layouts/BaseLayout.astro` | HTML shell, meta, OG, JSON-LD hook |
| `src/data/copy.ts` | Player-facing UI strings (hero, teasers, CTA, alpha, footer) |
| `src/data/seo-pages.ts` | SEO spoke body + meta |
| `src/data/faq.ts` | FAQ content + FAQPage JSON-LD source |
| `src/data/site.ts` | Site constants, URLs, env-backed config |
| `src/data/structured-data.ts` | JSON-LD builders |
| `src/data/og-images.ts` | Per-route OG image paths |
| `scripts/generate-og.mjs` | 1200×630 OG PNGs (`prebuild`) |
| `scripts/discord/` | Discord server setup, AutoMod, webhook tests (ops only) |
| `src/data/discord.ts` | Invite URL, channel names, webhook env key names |
| `public/` | Favicons, robots, static OG assets |

## Ground rules

1. **Copy lives in data modules** — do not hardcode player-facing sentences in components. Use `COPY`, `SEO_PAGES`, `faq`, etc.
2. **Terminology** — run skill `breachwalker-terminology` for any UI/marketing/FAQ string. Diegetic surfaces forbid Bitcoin/chain jargon; acquisition surfaces (`meta*`, `/bitcoin-rifts/`, explicit Bitcoin FAQ) may explain the build.
3. **Static-first** — no client JS unless interaction truly needs it. Prefer Astro islands only when required.
4. **Trailing slashes** — internal links via `pagePath()` / `pageUrl()` so canonicals and sitemap stay consistent.
5. **Design tokens** — colors, type, spacing from `tokens.css` / `global.css`. Do not introduce Tailwind or a second palette.
6. **Scope** — marketing site + **Discord community ops** (setup scripts, invite CTAs). Game loop, Firebase runtime webhooks, marketplace, and wallet logic stay in `../Breachwalker/`.
7. **Minimal diffs** — change only what the task needs (see `.cursor/rules/anti-overengineering.mdc`).

## Commands

```bash
npm install
npm run dev          # http://localhost:4321
astro dev --background   # preferred when agent-started
astro dev stop | status | logs
npm run build        # prebuild OG + astro check + build → dist/
npm run preview
npm run generate:og  # regenerate OG images only
npm run check
npm run discord:setup          # provision server (destructive — see scripts/discord/README.md)
npm run discord:automod        # AutoMod rules
npm run discord:test-webhooks  # test Rift Whispers / Marketplace embeds
```

## MCP tools

Configured in `.cursor/mcp.json` (project) and Cursor builtins:

| Server | When to use |
|--------|-------------|
| `cloudflare-api` | Pages project, DNS, analytics, deploy diagnostics — OAuth on first use |
| `cursor-ide-browser` | Visual/a11y QA of local preview or production pages |

Do not invent Cloudflare dashboard state — query MCP when available. For copy/SEO verification, prefer browser snapshot + screenshot over guessing.

## Skills (`.cursor/skills/`)

| Skill | When to use |
|-------|-------------|
| `breachwalker-terminology` | Any player-facing or marketing copy |
| `breachwalker-discord-ops` | Discord server setup, webhooks, AutoMod, Firebase wiring |
| `add-seo-page` | New SEO spoke route + OG + sitemap priority |
| `verify-marketing-site` | Build/check + browser smoke after meaningful UI/SEO changes |

## Sibling repos

- **Breachwalker** (game monorepo) — `../Breachwalker/` — prototype, Firebase backend, authoritative Docs
- Terminology SoT in monorepo skill; this repo keeps a marketing-focused copy under `.cursor/skills/breachwalker-terminology/`
