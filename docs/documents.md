---
sidebar_position: 10
---

# Documents

Documents are reference content you attach to your ruleset for players to view—either **PDF files** or **markdown** text. They're perfect for rulebooks, quick reference guides, character creation instructions, and any other written content.

## What are Documents?

Documents allow you to include PDFs or markdown in your ruleset that players can view while playing. This is useful for:

- **Rulebooks** - Full game rules and mechanics
- **Quick reference sheets** - Combat rules, spell lists, condition effects
- **Character creation guides** - Step-by-step instructions for making characters
- **Lore and worldbuilding** - Setting information, maps, histories
- **Supplemental content** - Additional rules, optional systems, expansions

## Creating Documents

To create a document:

1. Navigate to the Documents page in your ruleset
2. Click the "New" button
3. Provide a title, description, and optional category
4. Upload a cover image (optional but recommended)
5. Upload a PDF file
6. Click "Create"

### Document Properties

Each document has:

- **Title** - The name displayed to players
- **Description** - Brief explanation of the document's contents
- **Category** - Optional grouping (e.g., "Rules", "Lore", "Reference")
- **Cover Image** - Visual thumbnail to help identify the document
- **Content** - Either a **PDF file** or **markdown** (see [Markdown content](#markdown-content)); a document cannot have both

## Markdown content

Documents can use **markdown** instead of a PDF. This is useful for short reference text, house rules, or content you prefer to edit as plain text.

- **Either/or**: A document has either a PDF or markdown content, not both. Adding or saving markdown for a document clears any existing PDF; uploading a PDF clears markdown.
- **When you can use markdown**: If a document has no PDF, you can add or edit markdown from the Documents page by opening the document and using the edit (pencil) action, or when creating a new document without uploading a PDF.
- **Rendering**: Markdown is rendered with standard formatting (headings, lists, bold, links, etc.). Links support `data:` and `blob:` URLs so you can use embedded images.
- **Editing**: In the markdown editor you get an **Edit** / **Preview** toggle. Use **Cmd+Enter** (Mac) or **Ctrl+Enter** (Windows) to save. Saving markdown replaces the document’s content and removes any PDF that was previously attached.

Documents with markdown are opened in the same viewer as PDFs; the content is shown as rendered markdown instead of a PDF.

## Viewing Documents

### From the Ruleset

When editing a ruleset, you can view documents by:

1. Going to the Documents page
2. Clicking on any document card
3. The document opens (PDF viewer or markdown view, depending on content)

### From Character Sheets

Players can access documents while viewing their characters:

1. Open a character
2. Click the documents icon in the sidebar
3. Browse available documents
4. Click to open and view

### Pinning Documents

Characters can pin frequently-referenced documents to their sidebar:

1. Open a document while viewing a character
2. Click the pin icon
3. The document remains in the sidebar for quick access during play

## PDF Viewer Features

The built-in PDF viewer includes:

- **Page navigation** - Browse through pages with next/previous buttons
- **Zoom controls** - Adjust the view size for readability
- **Download** - Save a copy of the PDF to your device
- **Search** - Find specific text within the document (browser-dependent)

## Document Categories

Organize documents into categories to help players find what they need:

- **Rules** - Core mechanics and systems
- **Reference** - Quick guides
- **Lore** - Setting information and stories
- **Character** - Creation and advancement guides
- **Supplemental** - Optional rules and expansions

Categories appear as filters on the documents page, making navigation easier.

## Best Practices

- **Use cover images** - Visual thumbnails help players identify documents quickly
- **Keep PDFs focused** - Break large rulebooks into smaller, topic-specific documents
- **Descriptive titles** - Clear names help players find what they need
- **Optimize file size** - Compress PDFs to improve loading times
- **Organize with categories** - Group related documents together
- **Include a "Quick Start"** - A brief getting-started guide for new players
- **Update regularly** - Keep documents current with your ruleset version

## Documents vs. Content Components

**Use Documents when:**

- You have existing PDF content or short markdown reference text
- You need multi-page formatted text (PDF) or simple formatted text (markdown)
- You want players to download or print content (PDF) or read in-app (PDF or markdown)
- Content is primarily reference material

**Use Content components (in windows) when:**

- Information should be visible on the character sheet
- Content is brief and specific to a character
- Information changes per character
- Players need to update the content in game

## Exporting Documents

When you export a ruleset:

- Document metadata (title, description, category, and markdown content when present) is stored in `application data/documents.json`
- PDF files are stored in a `documents/` folder with their original formatting
- Cover images are stored in the `images/` folder

This makes it easy to:

- Share complete rulesets with all reference materials
- Back up your content
- Transfer documents between rulesets
- Edit PDFs externally and re-import
