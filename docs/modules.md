---
sidebar_position: 2
---

# Modules

Modules are rulesets that can be added to another ruleset. Adding a module duplicates that ruleset's content into the consuming ruleset.

## Marking a Ruleset as a Module

To make a ruleset available as a module, mark it with the "Use as module" option in ruleset settings. Only rulesets marked as modules can be added to other rulesets.

## What Gets Added

When you add a module to a ruleset, the following content is duplicated:

- Attributes
- Actions
- Items
- Charts
- Documents
- Windows
- Pages
- Scripts
- Assets
- Fonts
- Dice rolls

After import, module content becomes ruleset content: it is fully editable. There are no upstream or downstream effects when you edit it, meaning the module itself is unaffected by editing the rulset that consumes it.

## Adding a Module

You can add a module in two ways:

**From your rulesets:** In ruleset settings, open the Modules section. Pick an existing ruleset that has been marked as a module and add it to the current ruleset.

**From a file:** Upload a ruleset zip file (the same format used when exporting a ruleset). The content is added to your ruleset, but the file's ruleset is not added to your rulesets unless you choose to import it separately.

## Removing a Module

When you remove a module, all entities that came from that module are deleted from the ruleset. If native ruleset content references any of that module's entities (for example, a script pointing at a removed attribute), you will be warned about dangling references. Quest Bound does not automatically fix these references—it only warns you.

## Re-importing a Module

If you add the same module to a ruleset again, it is treated as a refresh: the module's content is overwritten with a fresh copy from the source. Use this to update your ruleset when the module has been updated.

## Conflicts

**ID conflict:** If the module has an entity with the same ID as one already in your ruleset, that entity is skipped. Skipped entities are reported to you after the add.

**Name conflict:** If an entity has the same name as one in your ruleset, the local name is overwritten and the module name is appended, e.g. `Attribute Name (<module name>)`.

## Origin Visibility

Content that came from a module is shown in **blue** in:

- Attribute, action, and item charts
- Pages index
- Windows index
- Charts index
- Document index
- Script index

This helps you see which content originated from a module.

## Deleted Source Ruleset

If the ruleset you added as a module is later deleted, the duplicated content remains in your ruleset. The Modules section will show "Source no longer available" for that module, but you can still remove its content from your ruleset if you wish.
