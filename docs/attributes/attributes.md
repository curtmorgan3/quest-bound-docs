---
sidebar_position: 1
---

# Attributes

Attributes are the atomic particles of a ruleset. How you describe the characters, items, locations, creatures and abilities of your game will all boil down to what attributes you assign these entities and how they vary.

Attributes are variables, meaning they can change. When a character is introduced in Quest Bound, it will get its own copy of attributes. These attributes can be controlled and changed on that character’s sheet.

## Types of Attributes

Every attribute must include a type and a default value.

There are four types of attributes:

Primitives

- Number
  - Any negative or positive number, including decimal point floats and integers
- Text
  - Any word or string of words
- Boolean
  - A value that is always exactly one of two possible states
  - True or False, Yes or No, On or Off, etc

Actions

- Actions behave differently than the primitives types. Learn about actions [here](../logic/actions.md).

## What should be an Attribute?

If the answer to any of these questions is yes, it should probably be an attribute. It is not uncommon for a rulest to have hundreds of attributes.

- Does this value change while my game is being played?
- Is this value potentially different for every character or creature that has it?
- Does this value need to be automatically calculated on a character sheet?
- Does this value need to be referenced as a variable in rulebook page templates?

Keep in mind that it’s perfectly fine to explain mechanics of your game in your rulebook and not create attributes for them.

:::tip
If you want Quest Bound to automate sheets and generate rulebook pages with certain values, you _must_ make those values attributes.

If you expect players to manually calculate and track these values, making them attributes is optional.
:::

## Case Study: The D&D Skill System

In D&D fifth edition, a character has a six core abilities: strength, dexterity, charisma, intelligence, wisdom and constitution. Each of these is a number between 0 and 20.

All of a character’s skill abilities are determined by these six core abilities by first deriving an ability modifier, determining proficiency and adding a bonus if applicable.

To recreate this system in Quest Bound, you’d create:

- six number attributes, (one for each core ability)
- one number attribute for proficiency bonus
- one number attribute for every skill
- a boolean attribute for every skill to determine proficiency.
  - _Is a character proficient in this skill? Yes or No_

You’d assign all of these attribute to an archetype that can be applied to characters.

When a character from that archetype is created, it will receive its own copy of each of these attributes. The value of them can be controlled from that character’s sheet.
