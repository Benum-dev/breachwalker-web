---
name: breachwalker-terminology
description: >-
  Curates immersive player-facing language for Breachwalker marketing and FAQ.
  Use when writing site copy, SEO body, tooltips-style microcopy, alpha messaging,
  or any public phrase. Ensures breach + rift vocabulary and two-layer
  diegetic/acquisition rules; avoids prep/dive/discover/block/territory in UI.
---

# Breachwalker — Player-Facing Terminology

**Game name:** Breachwalker (always capitalize the B in prose; "breach" as verb/noun is lowercase unless starting a sentence).

**Player community:** **Breachwalkers** (collective noun — confirmed 2026-07-11).

**Lore authority:** `../Breachwalker/Docs/10-world-lore-and-cosmology.md` — consult before naming monsters, gear, recipes, lore fragments, codex entries, or any copy touching the world's nature. **Never** surface doc 10 §3 (private truth) in player-facing content, directly or by clear implication.

**Rule:** Planning shorthand (`prep`, `dive`, `discover`, `base camp`) is for design chats only — **never** in UI, logs shown to players, marketing copy, or flavor text unless quoted as internal dev notes.

**Source of truth for prototype UI strings:** `../Breachwalker/phase2-prototype/src/data/copy.ts` — game UI lives in the monorepo.

**This marketing site:** `src/data/copy.ts`, `seo-pages.ts`, and `faq.ts` — same vocabulary rules.

## Cosmology (public — safe for codex & flavor)

| Concept | Player-facing framing | Avoid |
|---------|----------------------|-------|
| Underlying reality | **the Record** — sequential, immutable substrate | blockchain, ledger-as-tech-jargon |
| What's going wrong | **Corruption** — something unaccounted-for unmaking settled entries | ancient evil, dark lord, divine judgment |
| Where you play | **rift** — a cracked entry bleeding into the world | territory, zone, block |
| Why loot and danger coexist | crystallized from the **entry** itself — not separate systems | generic treasure chest fantasy |
| Order asserting itself | **Pure** (damage/healing register) | holy, divine, blessed, sacred |
| Record-wrongness in combat | **Corrupted** (damage/register) | unholy, cursed-by-gods |
| Becoming attuned to breaches | **Immersion** / **saturation** (noun); breaching adds a little more (verb, unofficial) | chosen-one destiny, bloodline power |
| The institution | **the Hold** — Walker's field operation grown into a standing org | base camp, HQ, guild hall |
| The player account | **Walker** (investigator who runs the operation) | hero (that's the recruit — doc 09) |
| Operatives sent into rifts | **hero** (mortal, permadeath-capable) | Walker (account-level only) |
| Living heroes under one Walker | **Company** (Hold UI tab) | roster (ok in code/docs as systems term), squad, party |
| Taking on a new hero | **Bond** / **bonding** — Walker commits Immersion capacity | recruit (ok as systems/doc shorthand), hire, create character |
| What makes a hero rift-survivable | **Immersion** / **Immerse** — saturation with the Record | bless, empower, buff |
| Archetypes (display) | **Warrior**, **Attuned**, **Ranger**, **Keeper** | Mage, Cleric (schema may still be `mage` / `cleric`) |
| Subclass renames (display) | **Conduit** (was Battle Mage), **Unraveler** (was Archmage), **Berserker** (was Barbarian), **Quill** (was Rogue) | Battle Mage, Archmage, Barbarian, Rogue in UI |
| Expedition vital (display) | **Corruption Tolerance** / **CT** | Stamina in UI (code/config stay `stamina_*`) |

## Rift canon (critical)

| Concept | Player-facing | Avoid in UI / marketing |
|---------|---------------|-------------------------|
| Playable expedition space | **rift** | territory, zone, dungeon, map |
| Catalog index (diegetic ID) | **catalog №** / `№{height}` via `COPY.rift.catalog()` | block, block height, block # |
| World registry (shared) | **atlas**, **charted rifts** | territory list, block list |
| Uncharted globally | **virgin ledger**, **sealed rift** | locked territory, undiscovered block |
| Picker UI | **rift ledger**, **select rift** | blocks to breach, territory picker |
| Halving-tied spaces | **halving-era rift** | halving block |

**Internal code** may still use `block_height`, `territory_*` paths, and `territoryRoster.ts` — only **display strings** use rift language.

On-chain history is the **substrate** in design prose — not something the player "enters" by block number in UI. **Never** say block, blockchain, transaction, or Bitcoin in player-facing text (doc 01 §0, doc 10 §10).

## Core vocabulary

| Concept | Player-facing | Avoid in UI |
|---------|---------------|-------------|
| Enter a rift / run | **breach** (v.), **the breach** (n.), **begin breach** | dive, run, enter territory |
| First time a rift becomes accessible (personal) | **breach** / **breached** | discover, unlock, open |
| Recently first-breached rift | **newly breached** | new, recently opened, fresh |
| Rift never entered (personal) | **unbreached** | locked, undiscovered |
| Rift known from start (no open cost) | **known** | open |
| Rift breached before, re-entry | **breached** | discovered |
| Home / between breaches | **the Hold**, **surface hold** | base camp, home screen, hub |
| Pre-breach loadout UI | **Loadout** (worn gear + expedition kit) | prep, Kit (legacy `COPY.kit` key), stash tab |
| Stash | **Vault** | stash (ok in dev), bank |
| Currency | **Marks** (`mk`) — sole settlement currency | gold, credits, coins, sats, premium currency |
| Breach entry cost | **Breach key** (crafted consumable) | strike fee, gold fee |
| Open sealed / unbreached rift | **Anchor spike** / **anchor keys** (quantity scales) | discover fee, unlock fee |
| Crafting UI | **Workshop**; **fabricated** from **formulas** / **reagents** | craft panel, recipes |
| Pack for next breach | **expedition kit**, **pack into kit** | expedition pack, prep supplies |
| Leave a breach alive | **extract** / **returned from breach** | leave, go home |
| Die in breach (interim) | **lost in the breach** — unbanked loot gone; worn gear returns | died, dead |
| Combat death (Phase 3.3) | **bond severed** / **hero lost** — Bond a replacement; Hold vault persists | account wipe, Walker dies |
| Corruption Tolerance collapse (CT collapse) | **collapsed** — dragged to surface | death, died |
| Rift picker list header | **── RIFTS TO BREACH ──** | blocks to breach, territories |
| Public player name | **`{handle}#{tag}`** (e.g. `StormCaller#7f3a`) — Rift Whispers, Marketplace posts | raw `uid`, Firebase displayName |
| Notification feeds | **Rift Whispers**, **Marketplace** (separate channels) | `#general`, "news channel" |

## Design-doc prose (abilities & resources)

When describing Arts in docs, comments, or copy that may reach players:

| Avoid | Prefer |
|-------|--------|
| CT-costed / Saturation-costed / HP-costed | **costs CT** / **costs Saturation** / **costs HP** |
| Saturation-costing vs. CT-costing | **costs Saturation** vs. **costs CT** |

Section titles like **Costing** (noun) are fine. Verbs and descriptions should use plain **costs {resource}**.

## Naming palette (doc 10 §10)

**Fits:** Record, entry, seal, ledger, wound, fracture, fissure, drift, echo, attunement, immersion, saturation, corrupted, unraveling, the ordinary / the mundane (genuine safety, not boring default), keystone, hinge, substrate, the between.

**Avoid:** deity-centered register (holy, divine, blessed, sacred — use Pure/Corrupted); chain-data terms in player copy; generic high-fantasy dressing (ancient evil, dark lord, prophecy) when Record-specific vocabulary exists.

## Breach as active language

Use **breach** where the player crosses from the Hold into a rift:

- Button: **Begin breach — {rift label}** (with optional catalog № in ledger, not as primary name)
- Checklist: **Ready for the breach**
- Hint: **Select a rift** / **Choose a rift before breaching**
- Success: **Returned from breach**
- Failure: **Lost in the breach** — unbanked loot gone; worn gear and packed kit return
- Collapse: **Collapsed** — forced rest on surface (not framed as death)

Death is **not** a Walker/account wipe. **Interim:** unbanked loot lost; worn gear returns. **Phase 3.3 (doc 09):** combat death = **hero permadeath**; collapse still soft failure only.

## Marks (sole currency)

**One currency only** — no premium/earned split, **no VIP-only currency**. Marks are obtained by:

1. **Selling items** on the in-game marketplace (buyer pays in Marks; seller receives net after **5–15%** platform tax) — **F2P-viable path**
2. **Fiat purchase** (verified) — shortcut to Marks, not exclusive loot

Breaches do **not** drop Marks. They drop **items** and **reagents** earned in gameplay. Do not describe Marks as “earned from logging in” or “play to earn tokens.”

**Pay-to-win guardrail:** All equippable gear is intended to come from breaches, workshop fabrication, or player trade — never a cash-only gear tab or premium-only mythic track.

## Marketing site — two-layer copy (doc 10)

The marketing site (`breachwalker-web`) uses **two layers**. Do not mix them on the same surface without intent.

| Layer | Surfaces | Bitcoin / chain jargon |
|-------|----------|------------------------|
| **Diegetic** | Hero, teasers, WhatIs, how-it-works, extraction-survival body, item-economy body, gameplay FAQ answers (rift, catalog, loop) | **Forbidden** — use Record, ledger, wound, fracture, corruption, sealed entry |
| **Acquisition** | `metaTitle`, `metaDescription`, `/bitcoin-rifts/` body, explicit Bitcoin FAQ questions (`Is Breachwalker a Bitcoin game?`, `Why Bitcoin ledger?`, `What Bitcoin data…`, `How are rifts generated…`), Audience card for crypto visitors, JSON-LD | **Allowed** — explain the build and SEO; link from diegetic copy to this spoke |

Diegetic answers that need technical detail end with a pointer: “See the Bitcoin rifts page” — not inline block/transaction vocabulary.

**Private truth (doc 10 §3):** never in any layer — no “someone altered the Record,” no deliberate recent act, no implied motive.

## Item economy & NFT roadmap (marketing / FAQ)

Soft P2E framing — **item-first**, not token drip:

| Topic | Player-facing framing |
|-------|----------------------|
| Economic loop | Grind **items** in rifts → **fabricate** in workshop → **trade** on marketplace |
| NFTs | **Utility-first item NFTs** on **Base** via **asset bridge** (roadmap) |
| Bridge out / in | Gear leaves playable inventory when bridged out; returns when bridged back |
| Wallet | **Coinbase Wallet** onboarding target; alpha = **no wallet required** |
| Gas | **Sponsored minting** — exploring for first bridge-out (not alpha) |
| Bitcoin vs Base | Bitcoin = **rift substrate**; Base = **tradeable NFT layer** |
| Ordinals partnerships | Separate from Base bridge; soulbound recognition items |

Never claim live NFT mint, marketplace, or wallet in **closed alpha** copy.

## Breach keys & anchor spikes

- **Breach keys** — consumables to enter a rift you already have a route to
- **Anchor spikes** — open a sealed rift on the atlas (scaled cost)
- **Marks** settle marketplace trades only — not breach entry in production design

## Tone

- Terse, physical, expedition-survival — not menu-speak or MMO quest text.
- Prefer concrete nouns (rift, vault, kit, formula, reagent, atlas, Record, fracture) over abstract systems language.
- Imperative on buttons (**Pack now**, **Begin breach**).
- No jokes in system UI; flavor lives in item names, lore codex, and whispers.

## Implementation checklist (marketing site)

When adding or changing player-visible text on this site:

1. Check doc 10 for cosmology fit and naming palette.
2. Add/edit strings in `src/data/copy.ts`, `seo-pages.ts`, or `faq.ts` — no hardcoded sentences in components.
3. Respect two-layer copy (diegetic vs acquisition) — see section above.
4. Never claim live NFT/wallet/marketplace in closed-alpha copy.
5. For game UI strings, edit the monorepo `phase2-prototype` copy module instead.

## Examples

**Good button:** `Begin breach — Halving Gate`  
**Bad button:** `Dive — Block 817701`

**Good ledger hint:** `Select rift`  
**Bad:** `Select a block to breach`

**Good catalog ref:** `№817,701` (in ledger/detail)  
**Bad:** `Block 817701` in player-facing prose

**Good marketing:** `Rifts where corrupted Record entries crack into the world`  
**Bad:** `Territories carved from Bitcoin blocks`

**Good FAQ:** `Item NFTs on Base — roadmap`  
**Bad:** `Play to earn Bitcoin`

## Community & notification naming (2026-07-11)

| Term | Status |
|------|--------|
| **Breachwalkers** | **Confirmed** collective noun for the player community (notification copy, marketing). |
| **Whispers channel** | **Rift Whispers** — Discord channel + webhook for mythic found, one-of-one, mythic rift first breach. |
| **Marketplace events channel** | **Marketplace** — separate Discord channel/webhook for mythic internal marketplace listings. |
| **Frontier Window** | Mechanic name for first-breacher grace (§4.9.2); player-facing copy for the countdown/announcement still TBD. |

World-event notification **body text** must follow all vocabulary rules above (`../Breachwalker/Docs/07-backend-firebase-spec.md` §4.13).

## Cross-references

- **Lore & cosmology:** `../Breachwalker/Docs/10-world-lore-and-cosmology.md`
- Rift atlas & ledger: `../Breachwalker/Docs/05-phase2-implementation-spec.md` §12.5–12.7
- World-event notification copy rules: `../Breachwalker/Docs/07-backend-firebase-spec.md` §4.13
- Hero / Hold / Walker identity: `../Breachwalker/Docs/09-hero-class-system.md` §1
- Asset bridge / Base NFTs: `../Breachwalker/Docs/roadmap-asset-bridge-and-partnerships.md`
- Crafting: `../Breachwalker/Docs/06-crafting-system.md`
- Marketing SEO pages: `src/data/seo-pages.ts`
- Hosting: `../Breachwalker/Docs/08-web-hosting-and-analytics.md`
