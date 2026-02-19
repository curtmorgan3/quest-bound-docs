---
sidebar_position: 13
---

# Key Bindings and Controls

Quest Bound includes keyboard shortcuts and mouse controls to make editing windows and managing content more efficient.

## Window Editor Controls

When editing windows in the window editor, you can use the following controls:

### Mouse Controls

**Right-Click**

- On empty canvas: Open component menu to add new components

**Left-Click**

- Click component: Select it
- Click empty space: Deselect all
- Drag component: Move it
- Drag resize handles: Resize component

**Multi-Selection**

- Hold `Shift` and click: Add/remove components from selection
- Hold `CMD(MacOS) or Ctrl (Windows) and drag to create selection box

### Keyboard Shortcuts

**Editing**

- `Cmd/Ctrl + C` - Copy selected components
- `Cmd/Ctrl + X` - Cut selected components
- `Cmd/Ctrl + V` - Paste components (offset slightly from original position)
- `Delete` or `Backspace` - Delete selected components

**Undo/Redo**

- `Cmd/Ctrl + Z` - Undo last change
- `Cmd/Ctrl + Shift + Z` - Redo

**Component Management**

- `Cmd/Ctrl + Shift + L` - Toggle lock on selected components

### Grid and Snapping

The window editor uses a 20-pixel grid to help align components. Components automatically snap to the grid when moved or resized, making it easier to create clean, aligned layouts.

## Character Sheet Controls

When viewing a character sheet, different controls apply:

### Window Management

**Opening Windows**

- Click window name in bottom tabs to open/restore it
- Click again to minimize window

**Moving Windows** (when unlocked)

- Drag window title bar to move
- Windows remember position per page

**Window Actions**

- Click minimize button (−) to collapse window to tabs
- Click close button (×) to remove window from sheet (can be reopened)

**Lock Toggle**

- Click lock icon in bottom toolbar to toggle between:
  - Unlocked (pencil icon) - Windows are draggable
  - Locked (lock icon) - Windows are fixed in place

### Page Navigation

**Switching Pages**

- Click page tabs at bottom to switch between character pages
- Each page has its own window layout

**Managing Pages** (from character settings)

- Add new pages
- Rename pages
- Delete pages
- Set background images

## Component-Specific Controls

### Text Components

**Edit Mode**

- Double-click text component to edit
- Type to enter text
- `Enter` - Add new line
- `Escape` - Exit edit mode

### Content Components (Markdown)

**Edit Mode**

- Double-click content component to edit
- Type markdown-formatted text
- `Escape` - Exit edit mode and render markdown

### Input Components

**On Character Sheets**

- Click input field to edit
- Type new value
- Changes save automatically
- Linked to character attributes

### Checkbox Components

**On Character Sheets**

- Click checkbox to toggle value
- Linked to boolean attributes

### Inventory Components

**Adding Items**

- Double-click inventory component
- Browse items/actions/attributes
- Drag items into grid
- Items must fit based on their size

**Moving Items**

- Drag items within inventory to rearrange
- Drag between inventory components to transfer

**Removing Items**

- Right-click item for context menu
- Select "Remove" or adjust quantity

### Graph Components

**Display Only**

- Graph components display ratios automatically
- Update in real-time when linked attributes change
- No direct interaction needed

## Sidebar Navigation

**Main Navigation Icons**

- Home icon - Return to home/rulesets
- Folder icon - Open ruleset selector
- Character icon - View character list
- Settings icon - Open settings

**Character View Icons** (when viewing a character)

- Attributes icon - View/edit all character attributes
- Inventory icon - Manage character inventory
- Charts icon - Browse and view charts
- Documents icon - Browse and view documents
- Settings icon - Character settings

## General Interface Controls

### Filtering and Search

**Filter Inputs**

- Type to filter lists by title
- Filters apply in real-time

**Category Filters**

- Dropdown to filter by category
- Available on most content pages (items, actions, charts, etc.)

### Dialogs and Modals

**Closing**

- Click outside dialog to close
- Press `Escape` to close
- Click X button to close

**Confirming**

- `Enter` key confirms in most input dialogs

## Mobile and Touch Controls

Quest Bound is optimized for touch devices:

**Touch Gestures**

- Tap - Select/interact
- Drag - Move components or scroll
- Pinch - Zoom (in PDF viewer)

**Mobile-Specific Features**

- Optimized PDF viewer for mobile devices
- Touch-friendly component sizing
- Responsive layouts

## Tips for Efficient Editing

### Window Editor

1. **Use copy/paste** - Duplicate similar components quickly
2. **Multi-select** - Edit multiple components at once (coming soon)
3. **Lock decorative elements** - Prevent accidental movement
4. **Use the grid** - Align components for clean layouts
5. **Undo liberally** - Don't be afraid to experiment

### Character Sheets

1. **Lock during play** - Prevent accidental window movement
2. **Organize by pages** - Group related windows on different pages
3. **Pin references** - Keep frequently-used charts/documents accessible
4. **Minimize unused windows** - Keep your sheet clean and focused

## Accessibility

Quest Bound aims to be accessible:

- Keyboard navigation for most actions
- Clear visual feedback for interactions
- Descriptive labels and tooltips
- High-contrast UI elements

If you encounter accessibility issues, please report them to help improve Quest Bound for all users.
