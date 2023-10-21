---
sidebar_position: 3
---

# Automating Sheets

Adding logic to an attribute will automate sheets by default. In our [example](./logic.md), Max Health is equal to a character’s vitality multiplied by its level. With these three attributes attached to an archetype, creating a character from that archetype will generate a simple sheet with three fields.

![img](./img/simple-character.png)

:::info
Attributes with logic will recalculate their values whenever any of their associated attributes change.

As you update either the Vitality or the Level fields, the Max Health field will recalculate its value by multiplying them together, then update automatically.
:::

While attributes with logic will update automatically, the player might need to override the derived value at any time, such as in response to an improvised rule during gameplay.

When an automated attribute is updated manually, it will no longer calculate its value. An option to reenable its logic will appear in the field.

![img](./img/reenable.png)

## Custom Sheets

You can add automated fields to custom sheet templates as well. Input and checkbox components may be assigned attributes. When an attribute is assigned to a component, it will act as the control for that attribute in the same way the simple sheet does.

![img](./img/controls.png)

:::caution
Make sure the use the right component for the attribute type!

Boolean attributes may only be assigned to checkboxes. Number and text attributes should have the correct corresponding input type.
:::
