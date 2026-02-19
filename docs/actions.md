---
sidebar_position: 6
---

# Actions

Actions represent the things characters can do in your game. They're similar to items but represent abilities, skills, spells, or maneuvers rather than physical objects.

## What are Actions?

Actions are the verbs of your ruleset - the things characters can perform. Common examples include:

- **Combat abilities** - Attack, defend, dodge, parry
- **Spells** - Cast fireball, heal, teleport
- **Skills** - Persuade, investigate, stealth
- **Special abilities** - Rage, sneak attack, divine smite
- **Social actions** - Intimidate, charm, deceive
- **Movement** - Sprint, climb, swim, fly

## Creating Actions

To create an action:

1. Navigate to the Actions page in your ruleset
2. Click "New Action"
3. Fill in the action properties:
   - **Title** - The name of the action
   - **Description** - What the action does and how it works
   - **Category** - Optional grouping (e.g., "Spells", "Combat", "Skills")
   - **Image** - Visual representation of the action
   - **Inventory Size** - Width and height if the action can be stored in inventory components

## Action Properties

Each action has the following properties:

### Basic Information

- **Title** - The action's name
- **Description** - Detailed explanation of what the action does, its effects, costs, and requirements
- **Category** - Used to organize actions (e.g., "Level 1 Spells", "Combat Maneuvers")

### Visual Properties

- **Image** - An icon or illustration representing the action
- **Inventory Width** - How many grid spaces wide (if stored in inventory components)
- **Inventory Height** - How many grid spaces tall (if stored in inventory components)

## Using Actions

### In Character Inventories

Actions can be added to character inventories, making them available for use during gameplay. This is useful for:

- **Learned abilities** - Characters gain actions as they level up
- **Prepared spells** - Casters prepare specific spells from a larger list
- **Acquired skills** - Characters learn new skills through training
- **Temporary abilities** - Buffs or special states that grant actions

To add an action to a character's inventory:

1. Open the character
2. Click the inventory icon in the sidebar
3. Click "Add Item" and switch to the Actions tab
4. Select actions to add to the character

### In Inventory Components

Actions can be placed in inventory components within windows, just like items. This is useful for:

- **Hotbars** - Quick-access action slots
- **Spell books** - Organized collections of spells
- **Ability panels** - Combat or skill ability displays
- **Loadouts** - Switchable action configurations

To add an action to an inventory component:

1. Double-click the inventory component on a character sheet
2. Browse available actions
3. Click to add the action into the grid
4. Actions must fit based on their inventory size

## Actions vs. Items vs. Attributes

It can be unclear when something should be an action, item, or attribute. Here's a guide:

### Use Actions when:

- It's something a character **does** (verbs)
- It represents an ability, skill, or act
- Not all characters will use it

### Use Items when:

- It's a physical **object** (nouns)
- It can be carried, equipped, or consumed
- It has weight or takes up space
- It has a quantity

### Use Attributes when:

- It's a **property or state** (adjectives/numbers)
- All characters have it (even if the value is 0)
- It changes frequently during play
- It's used in calculations or comparisons
- It represents stats, resources, or conditions

**Examples:**

- **Action**: "Cast Fireball" (you do this)
- **Item**: "Wand of Fireballs" (you hold this)
- **Attribute**: "Spell Power" (you have this)

## Organizing Actions

### Categories

Use categories to organize actions into logical groups:

- **By type** - "Spells", "Combat", "Social", "Movement"
- **By level** - "Level 1 Spells", "Level 2 Spells"
- **By class** - "Warrior Abilities", "Rogue Abilities"
- **By resource** - "Mana Abilities", "Stamina Abilities"
- **By frequency** - "At-Will", "Daily", "Encounter"

Categories appear as filters on the actions page and when adding actions to inventories.

## Action Descriptions

Write clear, complete descriptions that include:

- **What it does** - The mechanical effect
- **How to use it** - Requirements or prerequisites
- **Costs** - Resources consumed (mana, stamina, uses)
- **Duration** - How long effects last
- **Range** - How far it reaches
- **Targets** - What it can affect
- **Limitations** - Restrictions or conditions

**Example:**

```
Fireball
Level 3 Evocation Spell

Launch a ball of flame at a point within 150 feet.
All creatures within 20 feet must make a Dexterity
saving throw. On a failure, they take 8d6 fire damage,
or half as much on a success.

Cost: 3rd-level spell slot
Casting Time: 1 action
Range: 150 feet
Area: 20-foot radius sphere
```

## Actions and Automation (Coming Soon)

Future versions of Quest Bound will support scripting, allowing actions to:

- Automatically modify attributes
- Roll dice and calculate results
- Check requirements and costs
- Apply effects to targets
- Trigger other actions or events

## Best Practices

### For Ruleset Creators

- **Complete descriptions** - Include all necessary information
- **Consistent formatting** - Use similar structure for all actions
- **Appropriate images** - Visual icons help players identify actions quickly
- **Logical categories** - Group related actions together
- **Reasonable inventory sizes** - Consider how actions will fit in hotbars
- **Test in play** - Create test characters and try using your actions

### For Players

- **Organize your inventory** - Arrange actions logically in inventory components
- **Read descriptions** - Understand what each action does before using it
- **Track resources** - Monitor costs and uses
- **Coordinate with party** - Share action capabilities with other players

## Importing and Exporting Actions

Actions can be imported and exported as TSV files, making it easy to:

- Create actions in spreadsheet applications
- Share action libraries with other creators
- Back up your content
- Migrate actions between rulesets

When exporting a ruleset, actions are saved in an `actions.tsv` file with columns for all properties.
