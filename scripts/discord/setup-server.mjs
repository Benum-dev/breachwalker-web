/**
 * Provision Breachwalker Discord server: roles, categories, channels, webhooks.
 * Ported from ../Breachwalker/backend/scripts/setupDiscord.ts — run from this repo.
 *
 * Requires: DISCORD_BOT_TOKEN, DISCORD_GUILD_ID in .env
 * WARNING: Deletes all existing channels in the guild before recreating.
 */
import { loadDiscordEnv } from "./load-env.mjs";

loadDiscordEnv();

const TOKEN = process.env.DISCORD_BOT_TOKEN;
const GUILD_ID = process.env.DISCORD_GUILD_ID;

if (!TOKEN || !GUILD_ID) {
  console.error("\x1b[31mError: Missing environment variables.\x1b[0m");
  console.error("Set in .env (see .env.example):");
  console.error("  DISCORD_BOT_TOKEN=...");
  console.error("  DISCORD_GUILD_ID=...");
  console.error("\nBot setup: https://discord.com/developers/applications");
  process.exit(1);
}

/** @param {string} path @param {RequestInit} [options] */
async function apiRequest(path, options = {}) {
  const res = await fetch(`https://discord.com/api/v10${path}`, {
    ...options,
    headers: {
      Authorization: `Bot ${TOKEN}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  if (!res.ok) {
    throw new Error(`Discord API [${res.status}]: ${await res.text()}`);
  }
  if (res.status === 204) return null;
  return res.json();
}

async function main() {
  console.log("Connecting to Discord Guild:", GUILD_ID);
  const guild = await apiRequest(`/guilds/${GUILD_ID}`);
  console.log(`Connected: "${guild.name}"`);

  const channels = await apiRequest(`/guilds/${GUILD_ID}/channels`);
  console.log(`Purging ${channels.length} existing channels...`);
  for (const chan of channels) {
    try {
      await apiRequest(`/channels/${chan.id}`, { method: "DELETE" });
    } catch (err) {
      console.warn(`Skipped #${chan.name}:`, err instanceof Error ? err.message : err);
    }
  }

  const roleOverseer = await apiRequest(`/guilds/${GUILD_ID}/roles`, {
    method: "POST",
    body: JSON.stringify({
      name: "Overseer",
      color: 0xe74c3c,
      permissions: "8",
      hoist: true,
    }),
  });
  const roleElite = await apiRequest(`/guilds/${GUILD_ID}/roles`, {
    method: "POST",
    body: JSON.stringify({
      name: "Elite Walker",
      color: 0xf1c40f,
      permissions: "0",
      hoist: true,
    }),
  });
  const roleBreachwalker = await apiRequest(`/guilds/${GUILD_ID}/roles`, {
    method: "POST",
    body: JSON.stringify({
      name: "Breachwalker",
      color: 0x1abc9c,
      permissions: "0",
      hoist: true,
    }),
  });

  const everyoneRoleId = GUILD_ID;
  const overseerId = roleOverseer.id;
  const eliteId = roleElite.id;
  const walkerId = roleBreachwalker.id;

  const readOnly = [
    { id: everyoneRoleId, type: 0, allow: "66560", deny: "2048" },
    { id: walkerId, type: 0, allow: "66560", deny: "2048" },
  ];
  const memberChat = [
    { id: everyoneRoleId, type: 0, allow: "0", deny: "1024" },
    { id: walkerId, type: 0, allow: "68608", deny: "0" },
  ];

  /** @type {Array<{ name: string; type: number; permission_overwrites: unknown[]; channels: Array<{ name: string; type: number; permission_overwrites?: unknown[] }> }>} */
  const blueprint = [
    {
      name: "── SURFACE HOLD ──",
      type: 4,
      permission_overwrites: readOnly,
      channels: [
        {
          name: "welcome-gate",
          type: 0,
          permission_overwrites: [
            { id: everyoneRoleId, type: 0, allow: "68608", deny: "0" },
          ],
        },
        { name: "rules-and-safety", type: 0 },
        { name: "announcements", type: 0 },
        { name: "rift-whispers", type: 0 },
        { name: "marketplace", type: 0 },
      ],
    },
    {
      name: "── SURFACE SQUARE ──",
      type: 4,
      permission_overwrites: memberChat,
      channels: [
        { name: "general-chat", type: 0 },
        { name: "off-topic", type: 0 },
        { name: "memes", type: 0 },
      ],
    },
    {
      name: "── EXPEDITIONS ──",
      type: 4,
      permission_overwrites: memberChat,
      channels: [
        { name: "gameplay-discussion", type: 0 },
        { name: "kit-and-loadouts", type: 0 },
        { name: "reagents-and-crafting", type: 0 },
      ],
    },
    {
      name: "── SUPPORT & FEEDBACK ──",
      type: 4,
      permission_overwrites: memberChat,
      channels: [
        { name: "bug-reports", type: 0 },
        { name: "feedback", type: 0 },
        { name: "support-tickets", type: 0 },
      ],
    },
    {
      name: "── OUTPOSTS ──",
      type: 4,
      permission_overwrites: [
        { id: everyoneRoleId, type: 0, allow: "0", deny: "1024" },
        { id: walkerId, type: 0, allow: "0", deny: "1024" },
        { id: eliteId, type: 0, allow: "68608", deny: "0" },
      ],
      channels: [
        { name: "elite-lounge", type: 0 },
        {
          name: "sentinel-outpost",
          type: 0,
          permission_overwrites: [
            { id: everyoneRoleId, type: 0, allow: "0", deny: "1024" },
            { id: walkerId, type: 0, allow: "0", deny: "1024" },
            { id: eliteId, type: 0, allow: "0", deny: "1024" },
            { id: overseerId, type: 0, allow: "68608", deny: "0" },
          ],
        },
      ],
    },
  ];

  /** @type {Array<{ channel: string; url: string }>} */
  const webhooksCreated = [];

  for (const categorySpec of blueprint) {
    console.log(`Category: ${categorySpec.name}`);
    const category = await apiRequest(`/guilds/${GUILD_ID}/channels`, {
      method: "POST",
      body: JSON.stringify({
        name: categorySpec.name,
        type: categorySpec.type,
        permission_overwrites: categorySpec.permission_overwrites,
      }),
    });

    for (const channelSpec of categorySpec.channels) {
      console.log(`  #${channelSpec.name}`);
      const overwrites =
        channelSpec.permission_overwrites ?? categorySpec.permission_overwrites;
      const channel = await apiRequest(`/guilds/${GUILD_ID}/channels`, {
        method: "POST",
        body: JSON.stringify({
          name: channelSpec.name,
          type: channelSpec.type,
          parent_id: category.id,
          permission_overwrites: overwrites,
        }),
      });

      if (channelSpec.name === "rift-whispers" || channelSpec.name === "marketplace") {
        const webhook = await apiRequest(`/channels/${channel.id}/webhooks`, {
          method: "POST",
          body: JSON.stringify({
            name:
              channelSpec.name === "rift-whispers"
                ? "Rift Whispers"
                : "Breachwalker Marketplace",
          }),
        });
        webhooksCreated.push({ channel: channelSpec.name, url: webhook.url });
      }
    }
  }

  console.log("\n\x1b[32mDiscord server provisioning complete.\x1b[0m");
  console.log("\nWebhook URLs — copy to .env and Firebase (../Breachwalker/backend/functions/):");
  for (const wh of webhooksCreated) {
    const envKey =
      wh.channel === "rift-whispers"
        ? "DISCORD_WHISPERS_WEBHOOK"
        : "DISCORD_MARKETPLACE_WEBHOOK";
    console.log(`  ${envKey}=\x1b[36m${wh.url}\x1b[0m`);
  }
}

main().catch((err) => {
  console.error("\x1b[31mSetup failed:\x1b[0m", err);
  process.exit(1);
});
