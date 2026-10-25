# Day 30: Final Project - Social Media Dashboard with Full Features

**Status:** Final dashboard and learning notes added.

## Goal

Integrate state, events, storage, and rendering. Use fictional profile/session data and do not persist passwords. This is a local demo login flow.

## Environment

Node.js 22 or newer for the static server and a modern browser with local/session storage. No packages or internet connection are required.

## Tasks / Activities

1. Plan HTML regions for posts, user information, and a post form.
2. Style the dashboard layout.
3. Create demo registration/login forms with username, email, and a password-shaped practice field.
4. Validate the forms and simulate login using fictional accounts; persist only non-sensitive demo profile/session data.
5. Display the selected user's username, email, and profile picture; allow profile editing.
6. Save profile updates in local or session storage.
7. Add a post form with text and optional image fields.
8. Create post objects and render them in the feed with the author's username.
9. Add Like and Comment actions.
10. Update each post's like and comment counts.
11. Show notifications for new likes or comments on the selected user's posts.
12. Generate and display notifications from interactions.
13. Style different users' posts and distinguish the selected user's own posts.
14. Add transitions and responsive UI polish.

## Feature Requests

- [x] Demo registration and login flow.
- [x] Editable user profiles.
- [x] Post creation and feed.
- [x] Likes and comments.
- [x] Interaction notifications.
- [x] UI enhancements.

## Check Your Work

Switch fictional demo users, edit a profile, create a post, like it, add a comment, and verify notifications and persistence; validate empty forms.

## Solution Files

- [index.html](index.html): demo access, profile editor, composer, feed, and notifications.
- [state.mjs](state.mjs): validated profiles, posts, likes, comments, and notifications.
- [storage.mjs](storage.mjs): local data and session identity persistence.
- [render.mjs](render.mjs): safe feed and notification rendering.
- [solutions.mjs](solutions.mjs): forms, identity switching, saved updates, and recovery.
- [styles.css](styles.css): responsive layouts, user accents, and reduced-motion support.
- [avatar-blue.svg](avatar-blue.svg), [avatar-green.svg](avatar-green.svg), [study.svg](study.svg), and [walk.svg](walk.svg): original built-in images.
- [server.cjs](server.cjs): dependency-free static server.
- [notes.md](notes.md): data shape, interactions, persistence, and walkthrough.

## Run the App

Use Node.js 22 or newer and a modern browser. No packages or internet connection are required.
From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 30/server.cjs"
```

Open http://127.0.0.1:8130. Ctrl+C stops the server.

Seed demo emails: alex@example.test and sam@example.test.
Use a fictional passphrase of four or more characters. Passphrases are validated and discarded,
not stored or verified as credentials. Demo access selects a local identity.

Try these flows:

1. Enter as Alex, edit the profile, and publish text with an optional built-in image.
2. Switch to Sam and like/comment on Alex's post.
3. Switch back to Alex and inspect author notifications and unread counts.
4. Mark notifications read; reload to confirm profile, feed, and session persistence.
5. Register a fictional profile, log out, and log back in with its email.
6. Try duplicate usernames/emails, blank posts/comments, and invalid profile data.

Expected highlights:

- Stable IDs preserve authorship through profile edits.
- Each user can toggle one like per post; comments have independent records.
- Other users' interactions notify the author; own interactions do not.
- Marking read affects only the current user's notifications.
- Built-in images require no external requests.
- Invalid saved data is preserved until explicit reset.
- Password input is absent from local/session storage.

Day 30 uses its own origin and storage keys, without migrating Day 29 data.
This is a fictional local demo, with no real authentication, remote posting, or push notifications.
No additional .gitignore is needed.

[Back to the 30-day roadmap](../README.md)
