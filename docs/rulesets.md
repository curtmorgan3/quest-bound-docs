---
sidebar_position: 1
---

# Rulesets

Rulesets are collections of several other entities. By themselves, rulesets don’t do much. Their purpose is to bind these entities into a package that you can share with others.

Once a ruleset is opened in Quest Bound, _everything_ you see is viewed within the context of that ruleset. It is the universe of a game and there can never be more than one open at a time.

## Ruleset Entities

A ruleset is made of the following:

- [Attributes](./attributes/attributes.md)
  - The atoms of a ruleset. These are the variables that attach to all other entities
  - Stats like hit points, age, durability, skill and experience can all be represented as attributes
  - Attributes can affect and be affected by other ruleset entities through scripts
- [Items](./items.md)
  - Objects that may be added and removed from character inventories
  - Items are built on top of attributes, may hold properties and abilities and use scripts to affect other entities
- [Actions](./actions.md)
  - Acts that are taken by other entities or by characters directly
  - Attack, move, defend, speak, charm--all can be captured as actions and referenced by other entities
- [Charts](./charts.md)
  - Data sets of tabular structure, like a spreadsheet, uploaded from `.tsv` files
  - Charts can be referenced in scripts or directly referenced
- [Windows](./windows.md)
  - A modular piece of UI used to construct character sheets
- [Pages](./pages.md)
  - Sets of windows that serve as templates for a character sheet page
- [Documents](./documents.md)
  - PDFs to be referenced by players from the character view
- [Scripts](./scripts/scripts.md)
  - Control the automation of your game through a programming interface
  - Coming soon

## Creating a Ruleset

You can create a new ruleset by selecting the 'open' button on the sidebar, then clicking 'New'.

## Adding a Ruleset

Upload a ruleset from a zip file by selecting the open button on the sidebar, then clicking the upload icon.

## Ruleset Settings

When a ruleset is opened, click the gear icon in the sidebar to open its settings. Here, you can manage the title, version and description of a ruleset.
You can also export a ruleset from this page.

## Modules

Rulesets can include content from other rulesets via [modules](./modules.md). Modules let you reuse attributes, actions, items, charts, documents, windows, and scripts from one ruleset in another.
