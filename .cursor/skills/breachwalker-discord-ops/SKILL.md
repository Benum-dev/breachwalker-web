---
name: breachwalker-discord-ops
description: >-
  Provisions and tests the Breachwalker Discord community server (roles, channels,
  webhooks, AutoMod). Use when setting up Discord, rotating webhooks, testing Rift
  Whispers/Marketplace embeds, or wiring webhook URLs to Firebase. Not for
  in-game notification code — that lives in ../Breachwalker/backend/functions/.
---

# Discord community ops

## When to use

- First-time server setup or channel blueprint refresh
- AutoMod rules after server reset
- Verify webhook URLs before/after Firebase deploy
- Updating `src/data/discord.ts` channel names or invite URL

## Quick commands

```bash
# 1. Copy .env.example → .env; fill DISCORD_BOT_TOKEN + DISCORD_GUILD_ID
npm run discord:setup      # ⚠️ purges channels — empty/test server only
npm run discord:automod
# 2. Copy printed webhook URLs to .env + ../Breachwalker/backend/functions/.env
npm run discord:test-webhooks
```

## Channel naming (terminology)

| Display | Slug | Webhook env |
|---------|------|-------------|
| **Rift Whispers** | `#rift-whispers` | `DISCORD_WHISPERS_WEBHOOK` |
| **Marketplace** | `#marketplace` | `DISCORD_MARKETPLACE_WEBHOOK` |

World-event embed copy must follow skill `breachwalker-terminology` — breach + rift vocabulary, `handle#tag` identity, never raw `uid` or chain jargon.

## Firebase wiring (game monorepo)

Runtime broadcasts: `../Breachwalker/backend/functions/src/shared/notifications.ts`

Set secrets (production):

```bash
cd ../Breachwalker/backend
firebase functions:secrets:set DISCORD_WHISPERS_WEBHOOK
firebase functions:secrets:set DISCORD_MARKETPLACE_WEBHOOK
```

Local emulator: `backend/functions/.env.example`

## Do not

- Commit bot tokens or webhook URLs
- Add Discord Gateway / slash-command bots to this static site repo
- Duplicate `maybeBroadcastWorldEvent` here — keep game hooks in the monorepo
- Use fake member counts on the marketing site

## Future: testimonials

When alpha testers provide quotes, add `src/data/testimonials.ts` + homepage section — separate from Discord webhook ops.

## References

- `scripts/discord/README.md`
- `src/data/discord.ts`
- `../Breachwalker/Docs/07-backend-firebase-spec.md` §4.13
- `.cursor/rules/discord-community.mdc`
