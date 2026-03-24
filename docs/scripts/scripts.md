---
sidebar_position: 1
---

# Scripts

![qbscript](./img/qbscript-banner.png)

Scripts in Quest Bound are written in **QBScript**, a light-weight language custom built for TTRPG mechanics that lets you automate rules, compute attribute values, and react to player actions.

You can attach scripts to:

- **Attributes** — to compute values from other attributes (e.g. Attack Bonus from Strength and Proficiency)
- **Actions** — to run logic when the player uses an action (e.g. attack, cast spell, rest)
- **Items** — to run logic when items are equipped, unequipped, consumed or activated
- **Archetypes** — to run logic when an archetype is added or removed from a character (`on_add`, `on_remove`)

Other script types are not attached to entities, but serve special purposes.

- **Character Loader** — runs once per character at creation, before attribute scripts and archetype `on_add`; one per ruleset (see [QBScript Reference](./qbscript.md#character-loader))
- **Global** — loaded into all script execution contexts, use them to define shared helper functions used by other scripts
- **Game Manager** - stand alone scripts that can be attached to UI components, fired from the campaign dashboard or subscribe to attribute changes

For full syntax, built-in functions, and how to access character data (Owner, Target, charts, attributes, items), see the [QBScript Reference](./qbscript.md).
