---
sidebar_position: 14
---

# Campaigns

Campaigns are where you play. A campaign binds a [ruleset](./rulesets.md) to an active game: it has scenes, characters in play, turn order, events, and a game log. You create characters from the ruleset and add them to a campaign to run sessions.

## Creating a Campaign

1. Go to **Campaigns** (sidebar or home).
2. Click **Create Campaign**.
3. Optionally enter a **Title** (e.g. "Summer campaign").
4. Choose a **Ruleset** (required). The campaign uses that ruleset’s attributes, items, actions, scripts, and so on.
5. Click **Create**.

You’re taken to the campaign’s **Scenes** page.

## Campaign List

From the campaigns list you can:

- **Open** a campaign to go to its Scenes page.
- **Delete** a campaign (with confirmation). This permanently removes the campaign and its characters, items, and events.
- Expand **Characters** on a campaign card to add or remove [characters](./characters.md) that belong to that campaign. Characters must be created from the same ruleset as the campaign.

## Scenes

A campaign is organized into **scenes**. Each scene is a distinct place or moment (e.g. "Tavern", "Combat", "Travel"). You can have many scenes and switch between them.

### Managing Scenes

From the campaign’s **Scenes** page:

- **Create a scene** – Click **New Scene**, give it a name, and optionally a category.
- **Filter** – Search by name or filter by category.
- **Open a scene** – Click a scene to open the **Campaign Dashboard** for that scene.

### Scene and Turn-Based Mode

Inside a scene you can enable **Turn Mode**. When turn-based mode is on:

- The scene tracks a **turn order** for characters in that scene.
- You can **advance** to the next turn (button in the header); scripts can also advance the order.
- Turn order is used by [QBScript](./scripts/qbscript.md) (e.g. `Scene.inTurns`, `Scene.onTurnAdvance`) for automation.

Turn order is per scene. Characters can be assigned to a scene and given a position in that scene’s turn order.

## Campaign Dashboard

Opening a scene opens the **Campaign Dashboard**. This is the main play view for that scene.

### Layout

- **Left** – Scene characters (avatars), turn order when turn-based mode is on, and access to **Documents** and **Events** for the scene.
- **Center** – The active scene (e.g. turn order view or other scene-specific UI).
- **Right** – Optional panels: scene document, scene events, and the **Game Log**.

Columns can be collapsed or expanded; their state is remembered.

### Player Characters

In the header you can:

- **Open character sheets** – Click a character avatar to open that character’s sheet in a overlay; click again to close.
- **Manage characters** – Add or remove which characters are in the campaign (and in the current scene). Only characters from the campaign’s ruleset can be added.

Characters added to the campaign appear as avatars and can be assigned to the current scene and turn order.

### Turn Mode

- **Turn Mode** switch – Turns turn-based mode for this scene on or off.
- **Next turn** – When turn-based mode is on, use the next-turn button to advance to the next character in the turn order. Scripts can also advance the order.

### Documents and Events

- **Documents** – Open a panel to view or pin [documents](./documents.md) in the context of the campaign/scene.
- **Events** – Open a panel to see **Campaign events** for this scene. Events can run Game Manager scripts (e.g. when a player activates an event). Events are created in the ruleset and then added to a campaign scene.

### Game Log

The **Game Log** shows script-generated log entries for the campaign (e.g. rolls, automation messages). You can:

- Toggle whether to show **auto-generated** entries (from load/character_load and other automatic contexts).
- Clear the log.
- Optionally export or copy for record-keeping.

Logs are stored per ruleset and campaign.

## Campaign-Level Content

From a campaign you can also open:

- **Documents** – Campaign documents page (e.g. `/campaigns/:id/documents`).
- **Charts** – View [charts](./charts.md) in campaign context.
- **Scripts** – Open the ruleset’s scripts (read/edit) while in the campaign.

So the campaign is the play context; the ruleset still holds the definitions (attributes, items, scripts, etc.).

## Campaign Settings

To change campaign details:

1. Open the campaign (e.g. open any scene so you’re in the campaign).
2. Open **Settings** (gear in the sidebar).
3. Under campaign settings you can edit:
   - **Name** – Campaign title.
   - **Description** – Optional description.
   - **Cover/avatar image** – Optional image for the campaign.

Changes are saved automatically.

## Summary

| Concept | Description |
|--------|-------------|
| **Campaign** | A play instance of a ruleset: scenes, characters in play, events, game log. |
| **Scene** | A named place/moment within a campaign; has its own turn order when turn-based mode is on. |
| **Campaign characters** | Characters (from the ruleset) added to the campaign; can be assigned to scenes and turn order. |
| **Turn-based mode** | Per-scene; when on, turn order and “next turn” (and related scripts) are used. |
| **Events** | Script-driven events attached to a scene; e.g. player-activated with Game Manager scripts. |
| **Game log** | Script-generated log for the campaign; optional auto-entries, clearable. |

Campaigns are optional: if the feature is enabled, use them to run sessions with a chosen ruleset, scenes, and characters. Without campaigns, you can still use rulesets and characters on their own.
