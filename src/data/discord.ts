/**
 * Discord community config — invite URL, channel names, webhook env keys.
 * Ops scripts in scripts/discord/ mirror this structure.
 * Runtime world-event POSTs stay in ../Breachwalker/backend/functions/.
 */
export const DISCORD = {
  inviteUrl: "https://discord.gg/HdaPWaAVV",
  /** In-game webhook channels (doc 07 §4.13) */
  channels: {
    riftWhispers: {
      slug: "rift-whispers",
      display: "Rift Whispers",
      webhookName: "Rift Whispers",
    },
    marketplace: {
      slug: "marketplace",
      display: "Marketplace",
      webhookName: "Breachwalker Marketplace",
    },
  },
  /** Env var names for webhook URLs (local ops + Firebase functions) */
  webhookEnv: {
    whispers: "DISCORD_WHISPERS_WEBHOOK",
    marketplace: "DISCORD_MARKETPLACE_WEBHOOK",
    /** Legacy aliases used in Firebase Secret Manager */
    whispersLegacy: "WORLD_EVENTS_WHISPERS_WEBHOOK",
    marketplaceLegacy: "WORLD_EVENTS_MARKETPLACE_WEBHOOK",
  },
  /** Bot token env keys for one-time server provisioning scripts */
  botEnv: {
    token: "DISCORD_BOT_TOKEN",
    guildId: "DISCORD_GUILD_ID",
  },
  roles: ["Overseer", "Elite Walker", "Breachwalker"] as const,
} as const;
