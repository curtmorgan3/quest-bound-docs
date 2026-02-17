---
sidebar_position: 7
---

# Windows

Windows are modular pieces of UI that you use to construct character sheets in Quest Bound. Each window can contain multiple components that display information, accept input, and interact with character attributes.

## What are Windows?

Windows are the building blocks of character sheets. Think of them as customizable panels that can be opened, closed, moved, and arranged on a character's sheet. Each window can display different types of information and controls, from simple text and images to complex inventory systems and progress bars.

## Creating Windows

To create a new window:

1. Navigate to the Windows page in your ruleset
2. Click the "New" button
3. Give your window a title and optional category
4. The window editor will open where you can add components

## Window Editor

The window editor is a drag-and-drop canvas where you design your windows. Right-click (or long-press on mobile) anywhere on the canvas to open the component menu.

### Adding Components

Right-click on the canvas to see available component types:

- **Shape** - Rectangles and polygons for backgrounds and visual sections
- **Text** - Static text with customizable styles
- **Image** - Display image assets
- **Input** - Display and edit attribute values (text or number)
- **Checkbox** - Toggle boolean attribute values
- **Content** - Rich text areas that support markdown
- **Inventory** - Grid-based storage for items, actions, and attributes
- **Graph** - Progress bars showing ratios between two number attributes (horizontal, vertical, or circular)
- **Frame** - Embed external URLs via iframe

### Editing Components

Click on any component to select it. When selected:

- **Drag** to move the component
- **Resize handles** appear at the corners and edges
- **Style panel** on the right lets you customize appearance
- **Data panel** lets you configure component-specific settings

### Linking Components to Attributes

Many components can be linked to attributes to display or control their values:

- **Input components** - Link to any attribute to display and edit its value
- **Checkbox components** - Link to boolean attributes for toggling
- **Graph components** - Link to two number attributes (numerator/denominator) to show progress

To link a component to an attribute:

1. Select the component
2. Open the Attribute panel on the right
3. Search for and select the attribute you want to link

### Component Layers

Components can overlap. Use the layer controls to adjust which components appear on top:

- Select a component
- Use the layer buttons in the toolbar to bring forward or send backward

## Using Windows in Character Sheets

Once you've created windows in your ruleset, they become available to all characters using that ruleset.

### Adding Windows to a Character Sheet

When viewing a character:

1. Look at the bottom tabs area
2. Click on any window name to open it on the sheet
3. The window will appear and can be positioned anywhere

### Character Pages

Characters can have multiple pages, each with its own set of windows and optional background image. This is useful for organizing different aspects of a character (e.g., "Combat", "Inventory", "Background").

To manage pages:

1. Open a character
2. Use the page tabs at the bottom
3. Add new pages from the character settings

### Window States

Windows on a character sheet can be:

- **Open** - Visible on the current page
- **Collapsed** - Minimized but available in the tabs
- **Closed** - Not visible (can be reopened from tabs)

### Locking the Sheet

By default, windows can be dragged around the character sheet. Click the lock icon in the bottom toolbar to:

- **Unlocked** - Windows are draggable for repositioning
- **Locked** - Windows are fixed in place, better for gameplay

## Window Categories

You can organize windows into categories (e.g., "Stats", "Combat", "Skills"). Categories help players find relevant windows quickly when building their character sheets.

## Tips for Designing Windows

- **Keep windows focused** - Each window should serve a specific purpose
- **Use shapes as backgrounds** - Add visual structure with colored shapes behind other components
- **Group related attributes** - Put related stats together in one window
- **Consider mobile users** - Test your windows at different sizes
- **Use descriptive titles** - Clear window names help players navigate their sheets
- **Layer strategically** - Put decorative elements on lower layers, interactive elements on top
