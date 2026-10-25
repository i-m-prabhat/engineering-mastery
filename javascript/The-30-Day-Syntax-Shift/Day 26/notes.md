# Day 26 Notes: Chat Application

## 1. HTTP serves the page; WebSocket carries messages

The Node HTTP server serves the HTML, CSS, and browser script. The same server upgrades /chat connections to WebSockets using ws.

Browser code uses the native WebSocket API, not the Node ws package. Both sides exchange JSON text messages over the persistent connection.

## 2. Display names are not authentication

The client requests a display name before joining. The server validates it and associates it with that socket's generated ID.

When chat text arrives, the server uses its own stored sender ID/name rather than trusting supplied sender fields. This prevents a chat packet from casually choosing another sender, but does not verify real identity. Duplicate display names are allowed.

This local lesson has no account/password system.

## 3. Small application protocol

| Client packet | Meaning |
| --- | --- |
| join with name | Request entry into the room |
| chat with text | Send a message after joining |

Server packets include joined, chat, system, presence, and error. The browser enables sending only after joined. The server independently rejects chat before joining.

Server-generated IDs distinguish messages and senders. Messages include an ISO timestamp, displayed in the viewer's local time.

## 4. Broadcast and echo

A chat packet is broadcast to all joined clients, including its sender. The client renders only that server echo, avoiding a duplicated optimistic message.

The own-message style compares senderId with the joined connection ID. Other messages use a different visual treatment and still show the sender name.

New clients receive future messages only. There is no persisted or replayed history.

## 5. Connection lifecycle

The UI distinguishes disconnected, connecting, joining, and joined states. Send controls stay disabled until join succeeds.

Closing a socket logs disconnection, announces departure, and updates presence. The Leave control closes the connection, and the user can join again manually.

No automatic reconnect/retry is implemented. Messages are not queued while disconnected, and a successful send call is not durable-delivery confirmation.

The eight-second join timer prevents waiting indefinitely. Unexpected server closure returns the UI to its disconnected state.

## 6. Validate on the server

Client checks improve usability; server checks enforce the protocol.

The server rejects malformed JSON, binary messages, unknown packet types, pre-join chat, blank messages, and messages longer than 500 characters. ws limits payloads to 4096 bytes; oversized frames can close the connection.

Character limits use JavaScript string length, which counts UTF-16 code units. They are not byte limits or grapheme counts.

## 7. Render messages as text

The client creates DOM nodes and assigns textContent. A message containing HTML-like text remains literal text rather than executable markup.

The room is an accessible live log. Native forms support Enter submission, names accompany messages, and reduced-motion preferences disable entrance animation.

The display keeps at most 200 entries per tab to bound rendered history. Entries include system notices as well as chat messages.

## 8. Local boundary

The server binds to 127.0.0.1 and accepts WebSocket upgrades only from the exact practice origin http://127.0.0.1:8126.

This reduces accidental cross-origin access but is not a replacement for authentication. Node test clients explicitly provide the same Origin header.

This is local practice, without persistence, rate limiting, heartbeat recovery, or production deployment controls. Use fictional names and practice content.

## 9. Dependencies and Git

npm ci installs the locked ws dependency. Keep package.json and package-lock.json tracked. The shared challenge ignore rules already exclude node_modules and logs, so another day-local ignore file is unnecessary.

Official reference: [ws documentation](https://github.com/websockets/ws).

## Quick review

1. How do HTTP and WebSocket responsibilities differ?
2. Why does the browser use native WebSocket?
3. Why is a display name not verified identity?
4. Why render the server echo rather than adding a second local copy?
5. Which checks must exist on the server?
6. What happens to messages when the server restarts?
7. How does the UI handle leaving and rejoining?

Open two tabs and trace a join, a message, and a departure through both clients.
