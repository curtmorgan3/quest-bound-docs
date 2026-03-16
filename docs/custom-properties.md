---
sidebar_position: 3
---

# Custom Properties

Custom properties are key-value fields you define at the **ruleset level**. They let you store extra data on characters (e.g. Level, XP) and on item instances (e.g. Armor Value, Charges) without adding new attributes or item fields. Scripts and components can read and write these values by name.

## What are custom properties?

A **custom property** is a named field with a **type** and an optional **default value**. You create the definitions once in your ruleset; each definition has:

- **Label** — The name used in scripts and UI (e.g. `"Level"`, `"Armor Value"`). Must be unique within the ruleset.
- **Type** — `string`, `number`, `boolean`, `color`, or `image`.
- **Category** — Optional grouping for the property list.
- **Default value** — Optional. If omitted, the default is `''` (string), `0` (number), or `false` (boolean); for `color`, an empty string.

**Characters and items get all custom properties of the ruleset by default.** When you create a character, they receive a value for every custom property defined in the ruleset, using the ruleset’s default for each. When you add an item to a character’s inventory, that instance receives a value for every custom property, again using the ruleset’s default.

When you add custom properties to an **archetype** or to an **item definition**, you are **overriding** those ruleset defaults:

- **Archetype custom properties** — For a character that has that archetype, the property’s value is initialized from the archetype’s override (if set) instead of the ruleset default. You choose which properties to override and what default value to use for that archetype.
- **Item custom properties** — For instances of that item, the property’s value is initialized from the item definition’s override (if set) instead of the ruleset default. You choose which properties to override and what default value to use for that item.

So: the ruleset defines all custom properties and their defaults. Characters and item instances get every one of them. Archetypes and item definitions optionally override those defaults for specific properties.

## Managing custom properties

### Where to manage definitions

1. Open a ruleset.
2. Go to **Settings** (ruleset settings).
3. In the **Custom Properties** section, click **Manage Custom Properties**.

You can also reach the same Custom Properties page from the ruleset’s navigation when available. There you can:

- **Create** new properties (label, type, category, default value).
- **Edit** label, type, category, and default value.
- **Filter** by label or category.
- **Delete** a property (this removes the definition only; any existing character or item values that referenced it may need to be cleaned up or will no longer be used).

### Overriding defaults on archetypes

Characters already get every ruleset custom property with the ruleset default. To use a **different default** for characters that have a given archetype:

1. Define the property on the ruleset (as above).
2. Open the **Archetypes** area and edit an archetype.
3. Use **Manage custom properties** (or equivalent) for that archetype to choose which properties to override and set their default value for this archetype.

When a character is created, they receive values for all ruleset custom properties; for any property overridden on one of their archetypes, that override is used instead of the ruleset default. Values are stored on the character and can be read or updated in QBScript with `Owner.getProperty('Label')` and `Owner.setProperty('Label', value)`.

### Overriding defaults on items

Item instances already get every ruleset custom property with the ruleset default. To use a **different default** for instances of a specific item:

1. Define the property on the ruleset.
2. Open the **Items** area and edit an item.
3. Use the item’s **Manage custom properties** (or custom properties panel) to choose which properties to override and set their default value for this item.

When that item is added to a character’s inventory, the instance gets values for all ruleset custom properties; for any property overridden on the item definition, that override is used instead of the ruleset default. In QBScript you can read and set them on a single item instance with `Owner.Item('Item Name').getProperty('Armor Value')` and `Owner.Item('Item Name').setProperty('Armor Value', 15)`. You cannot call `setProperty` on the array returned by `Owner.Items('Item Name')`; use `Owner.Item('Item Name')` for a single instance to set values.

## Types

| Type      | Description                     | Default if not set |
| --------- | ------------------------------- | ------------------ |
| `string`  | Text                            | `''`               |
| `number`  | Numeric value                   | `0`                |
| `boolean` | True/false                      | `false`            |
| `color`   | Color (e.g. hex like `#ff0000`) | `''`               |
| `image`   | Image reference (asset ID). Used for image URLs or asset picks. | `''`               |

Changing a property’s type in the Custom Properties page will reset its default value to the type’s default (e.g. number → `0`). For **image** type, the value is stored as an asset ID (or empty string); in the ruleset editor you set the default via an image upload/asset picker, and in scripts you read or set it like other properties (e.g. `Owner.getProperty('Portrait')` returns the asset ID string).

## Using custom properties in scripts and UI

- **Character custom properties** — In QBScript, use `Owner.getProperty('Label')` and `Owner.setProperty('Label', value)`. See [QBScript: Custom properties](./scripts/qbscript.md#custom-properties).
- **Item custom properties** — Use `item.getProperty('Label')` and `item.setProperty('Label', value)` on a single item reference (e.g. `Owner.Item('Plate Mail')`). Same QBScript section covers the details.

In the ruleset editor, window components (e.g. text, images) can be bound to a custom property so they display or style content based on the character’s value.

## Summary

- **Definitions** — Created and edited in **Ruleset Settings → Manage Custom Properties** (label, type, category, default).
- **Characters** — Get all ruleset custom properties by default. **Archetypes** override those defaults for characters that have that archetype.
- **Item instances** — Get all ruleset custom properties by default. **Item definitions** override those defaults for instances of that item.
- **Scripts** — Use `Owner.getProperty` / `Owner.setProperty` for character properties and `item.getProperty` / `item.setProperty` for item instance properties.
