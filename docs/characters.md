---
sidebar_position: 13
---

# Characters

Characters are the player avatars in Quest Bound. Each character is created from a ruleset and gets its own character sheet, inventory, and attribute values.

## Creating Characters

To create a character:

1. Open a ruleset
2. Navigate to the Characters page
3. Click "New Character"
4. Enter a character name
5. Optionally upload a character portrait
6. Click "Create"

The character will be created with:

- Its own copy of all attributes from the ruleset (set to default values)
- An empty inventory
- Access to all windows defined in the ruleset
- An empty character sheet ready to be customized

## Character Sheets

The character sheet is where players interact with their characters during gameplay. It's a customizable canvas where windows can be opened, positioned, and arranged.

### Building Your Sheet

When you first open a character, the sheet is empty. To add windows:

1. Look at the tabs at the bottom of the screen
2. Click on any window name to open it
3. The window appears on the sheet
4. Drag it to position it where you want
5. Repeat to add more windows

### Sheet Pages

Characters can have multiple pages, each with its own layout and optional background image. Pages are built from [ruleset pages](./pages.md)—templates that ruleset creators design in the Pages tab. This is useful for organizing different aspects of a character.

**Common page setups:**

- **Main** - Core stats and abilities
- **Combat** - Attack actions, health, armor
- **Inventory** - Equipment and items
- **Skills** - Skill checks and proficiencies
- **Background** - Character history and notes

To manage pages:

1. Open character settings (gear icon in sidebar)
2. Navigate to the Pages section
3. Add, remove, or reorder pages
4. Set background images and opacity for each page

### Locking the Sheet

The lock button in the bottom toolbar controls whether windows can be moved:

- **Unlocked** (pencil icon) - Windows are draggable for repositioning
- **Locked** (lock icon) - Windows are fixed in place

Lock your sheet during gameplay to prevent accidental repositioning. Unlock it when you want to reorganize your layout.

### Window Management

Each window on your sheet can be:

- **Opened** - Visible on the current page
- **Minimized** - Collapsed to the tabs (click to restore)
- **Closed** - Removed from the sheet (can be reopened from tabs)

Windows remember their position on each page, so you can have different layouts on different pages.

## Character Attributes

Every character has its own copy of all attributes from its ruleset. These values are independent from other characters and can be modified through:

- **Input components** - Type directly into linked input fields
- **Checkbox components** - Toggle boolean values
- **Inventory actions** - Items and actions may affect attributes
- **Manual editing** - Edit values directly in character settings

### Viewing All Attributes

To see all of a character's attributes:

1. Open the character
2. Click the attributes icon in the sidebar
3. Browse or search for specific attributes
4. Edit values directly if needed

## Character Inventory

Every character has an inventory for storing items, actions, and attributes.

### Main Inventory

Access the main inventory by clicking the inventory icon in the sidebar. Here you can:

- Add items from the ruleset's item catalog
- Adjust quantities
- Remove items
- View item details

### Inventory Components in Windows

Windows can contain inventory components - grid-based storage areas that work like video game inventories. These are useful for:

- **Equipment slots** - Specific spaces for worn items
- **Backpacks** - General storage
- **Quick slots** - Frequently used items
- **Specialized storage** - Spell components, ammunition, etc.

To add items to an inventory component:

1. Double-click the inventory component
2. Browse available items
3. Drag items into the grid
4. Items must fit within the grid based on their size

Items have `Inventory Width` and `Inventory Height` properties that determine how much space they occupy.

## Pinning Content

Characters can pin frequently-used charts and documents to the sidebar for quick access during play:

1. Open a chart or document while viewing the character
2. Click the pin icon
3. The content remains accessible in the sidebar
4. Unpin by clicking the pin icon again

## Character Settings

Access character settings by clicking the gear icon in the sidebar. Here you can:

- **Edit name and portrait** - Update character identity
- **Manage pages** - Add, remove, reorder pages and set backgrounds
- **View metadata** - See creation date, ruleset version
- **Export character** - Save character data (coming soon)
- **Delete character** - Permanently remove the character

## Best Practices

### For Players

- **Organize by pages** - Use different pages for different game phases
- **Lock during play** - Prevent accidental window movement
- **Pin references** - Keep frequently-used charts and documents accessible
- **Backup regularly** - Export your character periodically (when available)
- **Name windows clearly** - Use descriptive names when opening windows

### For Ruleset Creators

- **Design complete windows** - Include all related information in one window
- **Test with real characters** - Create test characters to verify your design
- **Provide window variety** - Offer different windows for different play styles
- **Document your system** - Include character creation guides as documents
- **Consider mobile** - Test your windows on smaller screens

## Character Data Storage

All character data is stored locally in your browser. This means:

- **Privacy** - Your character data never leaves your device
- **Performance** - Fast access without network delays
- **Offline capable** - Access characters without internet (once loaded)
- **Browser-specific** - Characters are tied to the browser where they were created
