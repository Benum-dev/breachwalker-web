/**
 * Send test embeds to Rift Whispers / Marketplace webhooks.
 * Ported from ../Breachwalker/backend/scripts/testDiscordWebhook.ts
 */
import { loadDiscordEnv } from "./load-env.mjs";

loadDiscordEnv();

const whispersWebhook =
  process.env.DISCORD_WHISPERS_WEBHOOK ||
  process.env.WORLD_EVENTS_WHISPERS_WEBHOOK;
const marketplaceWebhook =
  process.env.DISCORD_MARKETPLACE_WEBHOOK ||
  process.env.WORLD_EVENTS_MARKETPLACE_WEBHOOK;

if (!whispersWebhook) {
  console.error(
    "Error: set DISCORD_WHISPERS_WEBHOOK (or WORLD_EVENTS_WHISPERS_WEBHOOK) in .env",
  );
  process.exit(1);
}

/** @param {string} url @param {Record<string, unknown>} embed */
async function sendTest(url, embed) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ embeds: [embed] }),
  });
  if (res.ok) {
    console.log("Sent test embed OK");
  } else {
    console.error(`Failed: ${res.status} ${await res.text()}`);
  }
}

async function main() {
  console.log("Sending test events to Discord...");

  await sendTest(whispersWebhook, {
    title: "🌌 Mythic Item Extracted (Test)",
    description:
      "**StormCaller#7f3a** has successfully extracted a mythic item from the breach!",
    color: 0xf1c40f,
    fields: [
      { name: "Item", value: "Crystalline Heart", inline: true },
      { name: "Rift Catalog №", value: "№817,701", inline: true },
    ],
    footer: { text: "Breachwalker Diagnostics" },
    timestamp: new Date().toISOString(),
  });

  await sendTest(whispersWebhook, {
    title: "⚡ Rift Anchored (Test)",
    description:
      "Rift **№210,000** (1st halving) has been breached for the first time globally by **StormCaller#7f3a**!",
    color: 0x9b59b6,
    fields: [{ name: "Frontier Window Closes", value: "In 30 minutes", inline: true }],
    footer: { text: "Breachwalker Diagnostics" },
    timestamp: new Date().toISOString(),
  });

  if (marketplaceWebhook) {
    await sendTest(marketplaceWebhook, {
      title: "⚖️ Marketplace Listing (Test)",
      description:
        "A mythic item has been listed on the surface market by **StormCaller#7f3a**.",
      color: 0x34495e,
      fields: [
        { name: "Item", value: "Crystalline Heart", inline: true },
        { name: "Price", value: "500 Marks", inline: true },
      ],
      footer: { text: "Breachwalker Diagnostics" },
      timestamp: new Date().toISOString(),
    });
  } else {
    console.log("Skipping marketplace test — DISCORD_MARKETPLACE_WEBHOOK not set");
  }

  console.log("All tests completed.");
}

main().catch((err) => {
  console.error("Webhook test failed:", err);
  process.exit(1);
});
