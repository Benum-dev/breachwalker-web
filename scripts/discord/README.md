# Discord ops scripts

One-time and diagnostic tooling for the Breachwalker community server. **Not deployed** to Cloudflare Pages.

| Script | Command | Purpose |
|--------|---------|---------|
| `setup-server.mjs` | `npm run discord:setup` | Roles, categories, channels, webhooks (⚠️ deletes existing channels) |
| `setup-automod.mjs` | `npm run discord:automod` | AutoMod: profanity preset, mention spam, phishing keywords |
| `test-webhooks.mjs` | `npm run discord:test-webhooks` | Send sample Rift Whispers / Marketplace embeds |

## Env vars (`.env` at repo root — never commit)

```bash
DISCORD_BOT_TOKEN=          # Bot token — admin REST only (setup scripts)
DISCORD_GUILD_ID=           # Server ID (Developer Mode → Copy Server ID)
DISCORD_WHISPERS_WEBHOOK=   # #rift-whispers webhook URL
DISCORD_MARKETPLACE_WEBHOOK=# #marketplace webhook URL
```

After `discord:setup`, copy webhook URLs into:

1. This repo's `.env` (for `discord:test-webhooks`)
2. `../Breachwalker/backend/functions/.env` (local emulator)
3. Firebase Secret Manager for production (`firebase functions:secrets:set`)

## Ownership split

| This repo | Game monorepo (`../Breachwalker`) |
|-----------|-----------------------------------|
| Server blueprint, AutoMod, webhook tests | `maybeBroadcastWorldEvent` at runtime |
| Marketing invite link (`src/data/discord.ts`) | Game-event hooks in Cloud Functions |
| Community CTAs on breachwalker.com | Player `broadcast_enabled` opt-out |

Spec: `../Breachwalker/Docs/07-backend-firebase-spec.md` §4.13

## Bot permissions

OAuth2 URL Generator: scope **bot**, permission **Administrator** (setup only). The bot does not run a Gateway listener — no slash commands or message handlers in this repo.
