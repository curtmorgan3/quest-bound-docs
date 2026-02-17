---
sidebar_position: 4
---

# Items

Items are the physical objects of your ruleset. By default, they have properties to track their weight, stack size and default quantity as well as
boolean properties to indicate if they are storable, equippable, consumable or are themselves containers.

## Inventories

The items you add to a ruleset represent the full catalogue of available items. When a player adds an item to their character's inventory, they
get their own copy of that item. They control the quantity and state of that item and can optionally change its name.

Every character has one inventory. Player's can view a character's inventory by clicking on the inventory icon in the sidebar.

### Inventory Window Components

Items can alternatively be added to a character's inventory through an inventory component added to a window. Double clicking on an inventory component
will open a panel with items to be added.

:::info
In order to add an item to an inventory component, the slot size must be large enough to hold the item and there must
be available room in the inventory. Set the slot size of the item from the items page through its `Inventory Height` and
`Inventory Width` properites. Set the slot size of the inventory component by selecting it and opening the data tab.
:::
