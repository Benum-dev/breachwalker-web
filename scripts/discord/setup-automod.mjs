/**
 * Provision Discord AutoMod rules for the Breachwalker server.
 * Ported from ../Breachwalker/backend/scripts/setupAutoMod.ts
 */
import { loadDiscordEnv } from "./load-env.mjs";

loadDiscordEnv();

const token = process.env.DISCORD_BOT_TOKEN;
const guildId = process.env.DISCORD_GUILD_ID;

if (!token || !guildId) {
  console.error("Error: DISCORD_BOT_TOKEN and DISCORD_GUILD_ID required in .env");
  process.exit(1);
}

const API_BASE = "https://discord.com/api/v10";

/** @param {Record<string, unknown>} rule */
async function createAutoModRule(rule) {
  const res = await fetch(`${API_BASE}/guilds/${guildId}/auto-moderation/rules`, {
    method: "POST",
    headers: {
      Authorization: `Bot ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rule),
  });
  if (!res.ok) {
    console.error(`Failed "${rule.name}":`, await res.text());
  } else {
    console.log(`Created AutoMod rule: "${rule.name}"`);
  }
}

async function main() {
  console.log("Provisioning AutoMod rules...");

  await createAutoModRule({
    name: "Block Harassment & Profanity (System Preset)",
    event_type: 1,
    trigger_type: 4,
    trigger_metadata: { presets: [1, 2, 3] },
    actions: [{ type: 1 }],
    enabled: true,
  });

  await createAutoModRule({
    name: "Block Mention Spam",
    event_type: 1,
    trigger_type: 5,
    trigger_metadata: { mention_total_limit: 8 },
    actions: [{ type: 1 }],
    enabled: true,
  });

  await createAutoModRule({
    name: "Block Phishing & Nitro Scams",
    event_type: 1,
    trigger_type: 1,
    trigger_metadata: {
      keyword_filter: [
        "*discord.gg/gift*",
        "*discod.gg*",
        "*free nitro*",
        "*nitro airdrop*",
        "*partner airdrop*",
      ],
    },
    actions: [{ type: 1 }],
    enabled: true,
  });

  console.log("AutoMod setup completed.");
}

main().catch((err) => {
  console.error("AutoMod setup failed:", err);
  process.exit(1);
});
