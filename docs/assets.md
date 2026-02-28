---
sidebar_position: 4
---

# Assets

Assets are image files or URL-backed images stored in your ruleset. They can be used in windows (e.g. images, frames), items, actions, pages (backgrounds), and other content. The Assets page lets you upload, organize, edit, and remove assets for the current ruleset.

## What are Assets?

- **Image assets** — Uploaded image files (e.g. PNG, JPEG, GIF). Stored as data in the ruleset.
- **URL assets** — Images referenced by URL. No file is stored; the ruleset keeps the URL and uses it when the asset is displayed.

Each asset has a **filename** (display name) that must be **unique within the ruleset**. You can optionally assign a **category** to group assets (e.g. "Portraits", "Icons", "Maps").

## Opening the Assets Page

1. Open a ruleset.
2. Go to the **Assets** tab in the ruleset.

## Creating Assets

### Create Asset (single)

Use **Create Asset** to add one asset at a time. You can either:

- Choose an image file from your device, or
- Provide a URL and a filename for a URL-backed asset.

The new asset is added to the ruleset and can be used anywhere assets are supported (image components, item art, action icons, page backgrounds, etc.).

### Upload (multiple files)

Use **Upload** to add multiple image files in one go:

1. Click **Upload**.
2. Optionally set a **category** for the batch (applied to all selected files).
3. Click **Select Files** and choose one or more image files.
4. Files are uploaded and deduplicated by name (if a file with the same name already exists in the ruleset, the existing asset is reused and you see an info message).

Only image files are accepted for bulk upload. For URL-backed assets, use **Create Asset** instead.

## Editing an Asset

Click the pencil (edit) icon on an asset card to open the edit dialog. You can change:

- **Name** — The filename (must stay unique in the ruleset).
- **Category** — Optional category for filtering and organization.
- **Image** — For image assets, you can swap the image (e.g. replace with a new file or another asset). For URL assets, you can edit the URL.

Changes are saved when you click **Save**.

## Deleting an Asset

Click the trash icon on an asset card to delete it. If the asset is **referenced** elsewhere in the ruleset (e.g. in a window, item, or page), you will be told how many places use it. You can then:

- **Remove and clear references** — Delete the asset and clear those references (the fields that pointed to this asset are cleared).
- **Cancel** — Keep the asset and do nothing.

If the asset is not referenced, you can delete it directly. A "Do not ask again" option is available to skip the confirmation when the asset has no references.

:::caution
Deleting an asset and clearing references cannot be undone. References that are cleared will no longer show the image until you pick a different asset.
:::

## Filtering and Finding Assets

- **Filter by name** — Type in the filter box to show only assets whose filename contains the text (case-insensitive).
- **Filter by category** — Use the category dropdown to show "All categories" or a specific category. Categories are derived from the assets you have; only categories that exist on at least one asset appear in the list.

The asset grid is virtualized, so you can scroll through large lists smoothly.

## Where Assets Are Used

Assets are referenced by ID from many parts of a ruleset, including:

- **Windows** — Image components, frame backgrounds, and other components that display an image.
- **Items** — Item artwork (e.g. icon or portrait).
- **Actions** — Action icons.
- **Pages** — Page background image.
- **Charts** — Optional cover image.
- **Documents** — Images embedded in document content.

When you delete an asset that is in use, you must choose whether to remove it and clear those references or cancel. Renaming an asset (editing its filename) does not break references; they still point to the same asset by ID.
