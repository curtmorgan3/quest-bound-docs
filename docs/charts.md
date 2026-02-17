---
sidebar_position: 6
---

# Charts

Charts are tabular datasets in Quest Bound, similar to spreadsheets. They allow you to store and reference structured data that can be used throughout your ruleset.

## What are Charts?

Charts are collections of data organized in rows and columns, like a spreadsheet. They're useful for:

- **Reference tables** - Spell lists, equipment tables, skill descriptions
- **Lookup data** - Level progression charts, damage tables, price lists
- **Attribute options** - Populate list attributes with values from a chart column
- **Game content** - Any structured data players need to reference

## Creating Charts

To create a chart:

1. Navigate to the Charts page in your ruleset
2. Click the "New" button
3. Provide a title, description, and optional category
4. Upload a TSV (Tab-Separated Values) file containing your data
5. Optionally add a cover image

### Preparing TSV Files

Charts are created by uploading `.tsv` files. You can create these in any spreadsheet application:

1. **Create your spreadsheet** - Use Excel, Google Sheets, or any spreadsheet app
2. **Format your data**:
   - First row contains column headers
   - Each subsequent row is a data entry
   - Use tabs to separate columns (not commas or spaces)
3. **Export as TSV** - Save or export your file as "Tab-Separated Values" (.tsv)

**Example TSV structure:**
```
Name	Level	Cost	Description
Fireball	3	150	A burst of flame
Healing	1	50	Restore health
Shield	2	100	Protective barrier
```

## Viewing and Editing Charts

Once uploaded, charts appear as interactive tables where you can:

- **Sort columns** - Click column headers to sort
- **Filter data** - Use the filter controls to find specific entries
- **Edit cells** - Click any cell to edit its value (changes are saved automatically)
- **Resize columns** - Drag column borders to adjust width

## Using Charts with Attributes

Charts can populate the options for list-type attributes. This is useful when you want attribute options to come from a dataset.

For example, if you have a "Spell Name" attribute, you can link it to the "Name" column of your spells chart. The attribute will then show all spell names as selectable options.

To link a chart to an attribute:
1. Create or edit an attribute
2. Set its type to "List"
3. Select "Chart Reference" for options
4. Choose your chart and the column to use

## Viewing Charts on Character Sheets

Players can access charts while viewing their characters:

1. Open a character
2. Click the charts icon in the sidebar
3. Browse available charts
4. Charts open in a read-only view for reference

### Pinning Charts

Characters can pin frequently-used charts to their sidebar for quick access:
1. Open a chart while viewing a character
2. Click the pin icon
3. The chart will remain in the sidebar for easy reference

## Chart Categories

Organize charts into categories (e.g., "Spells", "Equipment", "Rules") to help players find what they need quickly. Categories appear as filters on the charts page.

## Best Practices

- **Clear column headers** - Use descriptive names for columns
- **Consistent formatting** - Keep data types consistent within columns
- **Reasonable size** - Very large charts (1000+ rows) may be slow to load
- **Update in spreadsheets** - For major changes, edit your TSV file and re-upload
- **Use categories** - Group related charts together
- **Add images** - Cover images help identify charts at a glance

## Exporting Charts

When you export a ruleset, all charts are included as TSV files in the export package. This makes it easy to:
- Edit charts in your preferred spreadsheet application
- Share data with other ruleset creators
- Back up your content
- Migrate data between rulesets
