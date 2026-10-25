# Day 20 Notes: LocalStorage and SessionStorage

## 1. Run on a dedicated origin

Start server.cjs and visit http://127.0.0.1:8120. An origin is scheme, host, and port. Changing localhost to 127.0.0.1, or changing the port, changes the storage origin.

Do not rely on storage behavior for file URLs; it varies by browser. The supplied loopback server serves only this day's static files and gives the exercise a predictable origin.

## 2. Storage contains strings

setItem(key, value) saves a string. getItem(key) returns that string, or null if the key does not exist.

removeItem(key) deletes one entry and is safe when the key is already absent. length reports the number of entries. clear removes every entry in that storage area, not only keys created by this lesson.

The examples prefix keys with syntax-shift-day20: to identify them. The explicit clear exercise still clears the whole area, which is why it uses a dedicated practice origin.

## 3. Objects need JSON

JSON.stringify converts a plain data object into text. JSON.parse reconstructs data from valid JSON text.

Saving an object directly produces its string conversion rather than a useful stored record. Parsing malformed JSON throws SyntaxError, so storage reads belong inside error handling.

JSON is a data format, not a copy of arbitrary JavaScript behavior. Methods, undefined values, and special object types need separate serialization policies.

## 4. Restore forms

Each form stores a plain object with string name and email fields. At startup, the page parses and validates the saved profile, then fills its own fields.

Empty/whitespace names are rejected. Browser email validation handles the email input. These checks are for practice data, not identity verification.

Only save fictional information. Browser storage is readable by scripts running on the origin and is not a suitable place for passwords or secrets.

## 5. Persistence comparison

| Behavior | localStorage | sessionStorage |
| --- | --- | --- |
| Survives reload in the same tab | Yes | Yes |
| Shared by independent same-origin tabs | Yes | No |
| Typical lifetime | Until removed or browser policy clears it | Page session, associated with a tab |
| Stored representation | Strings | Strings |

Browser privacy settings and user clearing can remove data or block access. Session restoration features can restore a previous tab session; do not treat tab close as a security guarantee.

A tab opened with an opener can initially receive a copy of its opener's session storage. Use a new independent tab to compare isolation. Later edits to that session copy are not shared.

## 6. Same keys, different areas

The comparison form writes the same prefixed key/value to both stores, then reads both. Equality means the retrieved strings match; it does not mean the two storage areas are linked.

After reload, both values remain in the same tab. A fresh independent tab sees the local comparison but no session comparison until it saves its own.

Writing two areas is not a transaction. If one write fails, the earlier successful write is not automatically rolled back.

## 7. Clear and verify

The clear button calls localStorage.clear and sessionStorage.clear, then reads both entry counts and resets the current form displays.

Local clearing is visible to other same-origin tabs when they next read storage. Session clearing affects this tab's area, not the independent session areas of other tabs.

Other tabs' already-rendered text is not automatically updated by this lesson. Reload them to read current local data. A more advanced application could handle storage events.

## 8. Errors and graceful continuation

Storage access can fail because of browser permissions, policy, or quota. JSON parsing and profile-shape validation can fail too.

The attempt wrapper reports failures without crashing the whole lesson. Local and session restoration are attempted independently. Invalid saved data is not silently deleted; use the dedicated clear exercise to reset it.

The Console displays original errors for inspection. Visible status messages identify the failed operation.

## 9. Synchronous APIs

Web Storage operations are synchronous and can block JavaScript while they run. Keep these small records small. Larger structured datasets belong in a storage API designed for them, such as IndexedDB.

Persisting a form value does not send it to a server. This lesson's server serves assets only; no form data is transmitted.

## Common mistakes

- Assuming object values can be stored without serialization.
- Confusing a missing key's null with the string "null".
- Expecting a new independent tab to share session storage.
- Assuming reload clears session storage.
- Changing host or port and expecting the same local data.
- Calling clear on an origin containing unrelated application data.
- Treating browser storage as a secure credential vault.
- Forgetting to handle blocked access or invalid JSON.

## Quick review

1. Which three URL components determine an origin?
2. What does getItem return when a key is absent?
3. Why serialize an object before saving it?
4. Which data survives reload?
5. What does a new independent tab share?
6. Does sessionStorage.clear affect another tab's session area?
7. Why must the clear exercise use a dedicated origin?
8. What happens if the first write succeeds and the second fails?

Save both profiles, reload, compare a new tab, then clear the practice data.
