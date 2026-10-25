# Day 29 Notes: Dashboard Foundation

## 1. Four regions, separate responsibilities

The page has a profile selector/card, post composer, community feed, and notification placeholder. This day builds the data and rendering foundation; interaction notifications arrive with Day 30.

state.mjs handles records and immutable updates. storage.mjs handles serialization. render.mjs handles presentation. solutions.mjs connects user actions to those modules.

## 2. Versioned state

The saved JSON shape is:

```text
{
  version: 1,
  currentUserId: string,
  users: [{ id, name, handle, bio }],
  posts: [{ id, authorId, content, createdAt }]
}
```

The prefixed key is syntax-shift-day29:dashboard. Stable IDs connect posts to author records and keep relationships independent from array positions.

Validation rejects duplicate IDs, missing authors, unknown selected profiles, oversized text, and invalid timestamps. A timestamp must be a canonical ISO string.

## 3. Seed data and selected identity

The initial state contains two fictional profiles and two posts with fixed practice dates. The factory returns fresh objects rather than a shared mutable singleton.

Changing the selected profile changes the author of future posts. Existing posts keep their authorId, so their attribution does not change.

These are demo identities, not authenticated users. No password or external account exists.

## 4. Publish an immutable post

The composer rejects whitespace-only content and bounds posts to 500 UTF-16 code units. A new post receives a UUID and the current ISO timestamp.

The model prepends the new post to a fresh posts array and validates its author relationship. Existing post records are not repurposed for the new author.

The UI writes the proposed state to storage before committing it to the displayed state. A failed save leaves the earlier feed intact and preserves the draft.

## 5. Safe rendering and timestamps

Author names, handles, biographies, and post text use textContent. HTML-like content remains text.

The feed resolves authorId to its profile on each render. Current-profile posts get a visual accent. time elements contain machine-readable ISO values and display the viewer's local date/time.

There are no externally loaded avatars; initials represent fictional profiles.

## 6. Malformed data recovery

Load parses JSON and validates its shape and relationships. A failure does not silently overwrite the saved string.

The page shows a read-only seed preview and an explicit reset button. Reset replaces only this dashboard key with valid initial data. If storage is blocked, reset also reports failure.

This protects an existing saved record from accidental replacement while providing a clear practice recovery path.

## 7. Persistence limits

Both profiles and posts are stored in one local JSON document. Reload restores the selected identity and feed.

Storage belongs to this browser and origin. Multiple tabs are not synchronized; a later write can overwrite another tab's changes. There is no server database, backup, or cross-device persistence.

Web Storage is synchronous, so this pattern is appropriate for a small lesson feed. Rewriting and rendering n posts requires O(n) work. The current author lookup scans the small users array for each post.

## 8. A foundation for Day 30

Day 30 adds demo registration/login, profile edits, optional post images, likes/comments, and interaction notifications. Keeping state, storage, and rendering separate makes those additions easier to reason about.

The Day 29 and Day 30 apps should use separate storage keys and origins unless a deliberate migration is implemented.

## Quick review

1. Why does a post store authorId instead of the selected profile's current name?
2. What remains unchanged when the selected profile changes?
3. Why save before updating displayed state?
4. Which invalid relationships should saved-data validation reject?
5. What does the recovery button replace?
6. Does switching a demo profile authenticate a person?
7. Why use a separate key for the final project?

Publish under both profiles and reload to trace identity and persistence.
