---
sidebar_position: 2
---

# Controlling Attributes In Game

When your players make a character from your game, that character gets a copy of every attribute in your ruleset. The player needs to be able to control those attributes, viewing and updating them for the lifetime of that character.

## Windows

When a player makes a character, they construct their own character sheet by adding windows from the ruleset. Each window can include
controls wired up to specific attributes.

### Controlling Attributes

Certain components have an option in their toolbar for attribute assignment. Components that are controlled by the player in game, like inputs and checkboxes, will let players control those attributes.

:::info
Boolean attributes may only be assigned to checkboxes. A check indicates a value of _true_, while unchecked represents _false_.
:::

### Reading Attributes

Text and content components may also be assigned attributes. Unlike inputs and checkboxes, these components will only read attribute values, not update them.

Text components which are assigned an attribute will display its value.

:::info
Text and content components can interpolate attribute values. To do so, surround the attribute's name in `{{}}`

`Hit Points: {{Hit Points}}` will read `Hit Points: 10` when viewed on a character sheet.
:::

## Inventories

Attributes can be added to a character's inventory as an altnerative to managing them through window components. There are
two ways to add attributes to inventories.

### Inventory Window Components

An inventory component may be placed in a window. When viewed, double clicking will open a panel where all items, attributes or actions may
be added. Once it's added to the inventory, click it to open a context menu where you can control its value.

### Character Inventory Panel

Players can also add attributes to an inventory panel that tracks all of their items, attributes and actions in one place. From a character
sheet, click the inventory icon in the sidebar to open this panel.

:::tip
Learn more about inventories [here](../items.md).
:::
