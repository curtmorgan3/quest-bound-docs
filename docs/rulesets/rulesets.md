---
sidebar_position: 1
---

# Intro to Rulesets

Imagine walking into your favorite gaming store with shelves of tabletop RPGs along the walls. You walk down the aisles until one catches your eye. After a quick skim through the first few pages, you buy the copy, take it home and place it on your shelf next to your others.

## Your Shelf

When you log into Quest Bound, you’ll see a list of all the rulesets you’ve created, purchased or which have been directly shared with you. This is your shelf and you can think of it exactly like the one you have at home.

You can browse your shelf, thumbing through all of your ruleset copies, but eventually you select one and open it. Once a ruleset is opened in Quest Bound, _everything_ you see is viewed within the context of that ruleset. It is the universe of a game and there can never be more than one open at a time.

:::info Your copy belongs to you
Just like buying a ruleset from the store and bringing it home, you’re free to do what you’d like with it. Edit the pages, add archetypes, change the rules, redesign the sheet templates—changes you make to your ruleset will only be visible to you.
:::

### Extending Rulesets

Read about [modules](./modules.md) to understand how to customize and extend rulesets on your shelf.

### Ruleset Entities

Rulesets are collections of several other entities. By themselves, rulesets don’t do much. Their purpose is to bind these entities into a package that you can share with others.

A ruleset is made of the following:

- Attributes
  - The atoms of a ruleset. These are the variables that attach to all other entities
  - Stats like hit points, age, durability, skill and experience can all be represented as attributes
  - Can hold logic to automatically derive their value from other attributes
- Archetypes
  - The “category” of your rulesets characters and creatures
  - Collections of attributes which can have variations specific to the archetype
  - Can represent species, occupation, classes or any other category of person or creature
  - Archetypes can inherit from each other through archetypal inheritance
- Charts
  - Data sets of tabular structure, like a spreadsheet
  - Created by uploading .csv files exported from programs like Excel
  - Charts can be referenced in attribute logic or directly added to rulebook pages
- Rulebook
  - Binds the rules of your ruleset into a digital book
  - Pages can be nested and linked together to emulate a wiki structure
  - Images can be added and placed freely on pages with 1 pixel precision
- Page Templates
  - A method to create the structure of a rulebook page so new pages can be added easily
  - Can hold variables which will be replaced when viewing the rulebook, such as character image, archetype description or attribute values
  - Quest Bound can optionally create pages for your ruleset’s archetypes using a template
- Sheet Templates
  - When a user creates a character from a ruleset, the character will come with a sheet based on one of the ruleset’s sheet templates
  - Sheet templates hold fields to control a character’s attributes. They are designed with a drag and drop editor
