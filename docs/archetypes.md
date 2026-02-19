---
sidebar_position: 12
---

# Archetypes

Archetypes are templates that can be added and removed from characters dynamically, altering them in some way. Characters can have more than one archetype.

Archetypes are useful for:

- **Character classes** — Warrior, Mage, Rogue with different starting stats and abilities
- **Races or backgrounds** — Elves, Humans, or Noble, Soldier with distinct bonuses
- **Progression paths** — Adding a "Level 2 Fighter" archetype when a character levels up
- **Temporary states** — Cursed, Blessed, or other conditions that modify a character (can also be addressed with boolean attributes)

## Overview

**Character Creation**
When you create a character, you can choose which archetypes to add to that character.

During character creation, each add archetype will execute the `on_add` function of its script, which can alter
the character's attributes and items.

_Script execution order matters!_. Since scripts may overwrite the same default values, the order of the script execution matters. Archetype scripts will be executed in the order provided by the player during character creation.

**During Play**

During play, players can add or remove archetypes from characters through a dedicated **Archetypes panel** in the character sidebar. This will fire that archetype script's `on_add` and `on_remove` functions respectively.

## Creating Archetypes

Archetypes are created and managed in the ruleset editor.

To create archetypes:

1. Open a ruleset
2. Navigate to the archetype management area in the ruleset editor
3. Create a new archetype and give it a name, description and image

## Character Creation with Archetypes

When creating a new character:

1. Open a ruleset and navigate to the Characters page
2. Click "New Character"
3. Enter a character name
4. **Optionally select an archetype**
5. Click "Create"

## The Archetypes Panel

When viewing a character, the **Archetypes panel** appears in the sidebar (much like the Character Inventory panel). Use it to:

- **View** which archetypes the character currently has
- **Add** archetypes — choose from the ruleset's available archetypes; the archetype's `on_add()` script runs when added
- **Remove** archetypes — the archetype's `on_remove()` script runs when removed

## Archetype Scripts

Archetypes can have scripts attached with two event handlers:

- **`on_add()`** — Runs when the archetype is added to a character (including at character creation)
- **`on_remove()`** — Runs when the archetype is removed from a character

Archetype scripts can alter character attributes, add or remove items, and perform other logic. For example, adding a "Warrior" archetype might set Strength to 16 and add a starting weapon.

### Checking for Archetypes in Scripts

Any script can check whether a character has an archetype using:

```javascript
Owner.hasArchetype('Archetype name');
```

This returns `true` or `false`. Use it in attribute scripts, action scripts, or item scripts to branch logic based on the character's archetypes.
