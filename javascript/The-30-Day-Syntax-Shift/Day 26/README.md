# Day 26: Project 3 - Chat Application

**Status:** Chat app and learning notes added.

## Goal

Connect browser clients through a WebSocket server. A typed username is a display identity, not verified authentication; real authentication would be a separate extension.

## Environment

Node.js 22 or newer, the day-local ws package, and two browser tabs on the local practice origin.

## Tasks / Activities

1. Plan HTML for a chat window and message input.
2. Add basic CSS.
3. Plan a Node.js WebSocket server using the `ws` library.
4. Log client connections and disconnections.
5. Connect the browser using WebSocket.
6. Send and receive messages; log incoming messages.
7. Style the chat window and input area.
8. Render received messages and send using Enter or a button.
9. Ask for a username before joining and show it alongside messages.
10. Differentiate users visually and add transitions.

## Feature Requests

- [x] WebSocket server.
- [x] Browser connection and messaging.
- [x] Chat interface.
- [x] Username-based joining.
- [x] UI enhancements.

## Check Your Work

Open two clients, exchange messages, disconnect one, and try blank messages. Render messages as text and distinguish connection states.

## Solution Files

- [index.html](index.html): display-name join form, room log, message form, and connection status.
- [solutions.js](solutions.js): browser WebSocket client and safe message rendering.
- [server.cjs](server.cjs): static server, WebSocket upgrade, packet validation, and broadcasting.
- [styles.css](styles.css): responsive message layout, own-message styling, and focus states.
- [package.json](package.json) and [package-lock.json](package-lock.json): day-local ws dependency.
- [notes.md](notes.md): protocol, lifecycle, validation, limitations, and review questions.

## Install and Run

Use Node.js 22 or newer. From the repository root:

```sh
cd "javascript/The-30-Day-Syntax-Shift/Day 26"
npm ci
npm start
```

Open http://127.0.0.1:8126 in two independent browser tabs.
Installation needs internet; the installed app runs locally without internet.
Ctrl+C stops the server.

Try these flows:

1. Join with two different fictional display names.
2. Send using Enter and the Send message button; check both tabs receive one copy.
3. Send HTML-like text and confirm it stays literal.
4. Try blank input and verify it is rejected.
5. Leave one tab and inspect the other tab's departure notice and online count.
6. Rejoin, then stop the server and inspect disconnected controls.

Expected highlights:

- Online count reaches 2 after both clients join.
- Each message shows a username and time; your own messages have a distinct style.
- Blank messages are rejected without broadcasting.
- Leaving updates presence and disables send controls for that client.
- Server logs connection/disconnection IDs.
- Reload/restart does not restore history.

Names are display labels, not verified accounts. Use the exact 127.0.0.1 host and port;
WebSocket origin checking rejects other origins. Messages are in memory only.
The shared .gitignore excludes installed dependencies; no additional ignore file is needed.

[Back to the 30-day roadmap](../README.md)
