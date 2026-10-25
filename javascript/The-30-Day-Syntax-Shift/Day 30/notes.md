# Day 30 Notes: Final Social Dashboard

## 1. A complete local demo

The final app combines registration/login forms, editable profiles, post text/images, likes, comments, and author notifications. Everything remains in the browser.

The static server serves only listed assets. It does not create accounts, accept posts, send messages, or store a database.

## 2. Practice login is identity selection

Registration validates a username, email shape, and a fictional passphrase of at least four characters. Usernames use 3–30 ASCII letters/digits/underscores and start with a letter. Usernames and emails must be unique, ignoring case.

The passphrase is discarded. Login checks that a local profile exists for the email and that the practice field has sufficient length. It does not verify a stored credential. The page explicitly explains this.

Do not enter real passwords. This design teaches form flow without pretending browser-only identity selection is secure authentication.

## 3. Separate persistent data from session state

Local storage key: syntax-shift-day30:dashboard.

```text
{
  version: 1,
  users: [{ id, username, email, bio, avatar }],
  posts: [{
    id, authorId, text, image, createdAt,
    likes: [userId],
    comments: [{ id, authorId, text, createdAt }]
  }],
  notifications: [{
    id, recipientId, actorId, postId, type, createdAt, read
  }]
}
```

Session storage key: syntax-shift-day30:identity. It contains only a selected user ID. Logout removes that ID; profiles and feed remain saved.

Validation rebuilds a whitelist of fields before saving. Password-like input is never part of the persistent model.

## 4. Relationships and validation

Posts reference authors; likes reference unique user IDs; comments reference their authors. Notifications reference an existing post, its actual author as recipient, and a different actor.

Validation rejects duplicate IDs, unknown authors, malformed timestamps, invalid profile data, and unsupported image choices.

Day 30 uses its own key and origin. It does not overwrite or migrate Day 29's records.

## 5. Profile editing

The current user can change username, email, bio, and a built-in avatar choice. The user's ID remains stable.

Existing posts and comments resolve author names from the user record, so a profile edit updates attribution without rewriting each post.

The app offers two original local avatar images. No uploads, remote trackers, or real personal photos are needed.

## 6. Posts and optional images

New posts have UUIDs, canonical ISO timestamps, the selected author ID, trimmed text, and an optional built-in image key.

Text must be nonblank and at most 500 UTF-16 code units. Built-in study/walk illustrations keep the image exercise self-contained. Arbitrary URLs and file uploads are outside this lesson.

Feed text uses textContent, including comments and notification text. HTML-like input remains literal text.

## 7. Likes

A post's likes array contains at most one entry per user. Toggle adds or removes that entry; the displayed count derives from array length.

Liking another user's post creates a notification for the author. Unliking removes that actor/post like notification; reliking creates a fresh one. A user may like their own post, but it does not notify them.

## 8. Comments

A comment has its own stable ID, author, timestamp, and nonblank text up to 300 code units. Submitting appends it to that post.

Commenting on someone else's post creates an author notification. Own comments do not create self-notifications.

Counts derive from actual comment arrays, so there is no separate count to drift out of sync.

## 9. Notifications

The selected user sees only notifications whose recipientId matches their identity. Actor names are resolved from profiles.

Mark all as read changes only the current user's notifications. Unread and total counts are computed from saved data.

This is a local interaction history, not push notifications, email, or live multi-user networking. Switch demo identities in the same page to exercise cross-author behavior.

## 10. Immutable state and save-first updates

Model functions produce new state rather than editing existing records. The UI validates and saves proposed data before adopting it in memory.

A failed write leaves the earlier saved/displayed data intact. Post drafts remain available for retry. A registration can save a profile before a session write fails; that profile can then be used in the login form.

Local storage and session storage are separate writes, not an atomic cross-storage transaction.

## 11. Invalid saved data

A startup parse/validation failure preserves existing saved data, disables the demo forms, and offers an explicit reset.

Reset replaces only the Day 30 data key with valid seed data and clears its session identity. If storage is blocked, the reset reports failure.

Browser clearing, changing origin, or concurrent unsynchronized tab writes can still lose data. This is not a production persistence system.

## 12. Rendering and accessibility

Current-user posts have an accent. Other authors retain their names and avatar colors. Dates display in the viewer's local timezone.

Forms have labels, native buttons support keyboard activation, like buttons expose pressed state, and status messages announce results. Responsive layout and reduced-motion support are included.

The app rerenders its feed after changes. It is designed for a small practice dataset, not a large virtualized feed.

## 13. Cost and limits

Validation and serialization rewrite the whole document per saved action. Feed rendering and author/notification lookups are linear scans over small arrays; this favors clarity over large-scale performance.

There is no server-side authentication/authorization, password storage, cross-tab merge, remote publishing, or durable backup. Those require a different architecture.

## Practice walkthrough

1. Enter as Alex using alex@example.test and a fictional passphrase.
2. Edit the profile and publish a post with a built-in image.
3. Switch to Sam, like that post, and add a comment.
4. Switch back to Alex to inspect two unread notifications.
5. Mark them read and reload to verify persistence.
6. Register a new fictional profile, log out, and log back in by its email.
7. Try blank/duplicate input and inspect validation results.

Explain how stable IDs connect every interaction to its author and recipient.
