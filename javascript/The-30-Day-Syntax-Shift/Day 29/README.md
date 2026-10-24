# Day 29: Social Media Dashboard Foundation

**Status:** Dashboard foundation and learning notes added.

## Goal

Prepare a working foundation for the final dashboard.

## Environment

Node.js 22 or newer for the static server and a modern browser with local storage. No packages or internet connection are required.

## Tasks / Activities

1. Plan dashboard regions for a profile, composer, feed, and notifications.
2. Define mock users and post objects with stable IDs and author relationships.
3. Render a seeded feed with author names, content, and timestamps.
4. Add a post composer that rejects empty content.
5. Persist demo profile and post data locally with a documented JSON shape.
6. Prepare small modules for state, storage, and rendering to extend on Day 30.

## Feature Requests

- [x] Dashboard layout.
- [x] Mock profile and seeded feed.
- [x] Post composer.
- [x] Storage and module foundation.

## Check Your Work

Render multiple authors, reject blank posts, reload saved posts, and recover from malformed storage.

## Solution Files

- [index.html](index.html): profile, composer, feed, and notification regions.
- [state.mjs](state.mjs): seed data, validation, identity selection, and post creation.
- [storage.mjs](storage.mjs): versioned load/save and explicit recovery.
- [render.mjs](render.mjs): profile and feed rendering.
- [solutions.mjs](solutions.mjs): events, persistence, and startup handling.
- [styles.css](styles.css): responsive dashboard and focus states.
- [server.cjs](server.cjs): dependency-free local static server.
- [notes.md](notes.md): data shape, relationships, persistence, and review questions.

## Run the App

Use Node.js 22 or newer and a modern browser. No packages or internet connection are required.
From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 29/server.cjs"
```

Open http://127.0.0.1:8129. Ctrl+C stops the server.

Try these flows:

1. Inspect the two fictional authors and seeded feed.
2. Reject an empty/whitespace post, then publish a short update.
3. Switch demo profiles and publish another update.
4. Confirm each post retains its original author.
5. Reload and confirm profile selection and posts persist.
6. Inspect the versioned state in developer tools under local storage.

Expected highlights:

- Each post has a stable ID, authorId, content, and ISO timestamp.
- New posts appear first and retain their author after profile changes.
- Profiles and posts persist under syntax-shift-day29:dashboard.
- Invalid saved data is preserved while a read-only seed preview and explicit reset are shown.
- Failed saves preserve the previous feed and draft.
- Notifications are a labeled placeholder; likes, comments, and profile editing arrive in Day 30.

This is a local fictional demo, without authenticated accounts or external publishing.
Concurrent tabs are not synchronized. No extra .gitignore is needed.

[Back to the 30-day roadmap](../README.md)
