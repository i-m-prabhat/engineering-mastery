"use strict";
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { randomUUID } = require("node:crypto");
const { WebSocketServer, WebSocket } = require("ws");
const routes = {
  "/": ["index.html", "text/html; charset=utf-8"],
  "/index.html": ["index.html", "text/html; charset=utf-8"],
  "/styles.css": ["styles.css", "text/css; charset=utf-8"],
  "/solutions.js": ["solutions.js", "text/javascript; charset=utf-8"],
};
const server = http.createServer((request, response) => {
  if (request.method !== "GET") { response.writeHead(405); response.end("GET only"); return; }
  const route = routes[new URL(request.url, "http://127.0.0.1").pathname];
  if (!route) { response.writeHead(404); response.end("Not found"); return; }
  fs.readFile(path.join(__dirname, route[0]), (error, data) => {
    if (error) { response.writeHead(500); response.end("Unable to read lesson"); return; }
    response.setHeader("Content-Type", route[1]);
    response.setHeader("Cache-Control", "no-store");
    response.end(data);
  });
});
const wss = new WebSocketServer({ noServer: true, maxPayload: 4096 });
server.on("upgrade", (request, socket, head) => {
  if (request.url !== "/chat" || request.headers.origin !== "http://127.0.0.1:8126") {
    socket.end("HTTP/1.1 403 Forbidden\r\nConnection: close\r\n\r\n");
    return;
  }
  wss.handleUpgrade(request, socket, head, ws => wss.emit("connection", ws));
});
function send(ws, value) {
  if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(value));
}
function broadcast(value) {
  for (const client of wss.clients) if (client.username) send(client, value);
}
function presence() {
  const count = [...wss.clients].filter(client => client.username && client.readyState === WebSocket.OPEN).length;
  broadcast({ type: "presence", count });
}
wss.on("connection", ws => {
  ws.id = randomUUID();
  console.log("Client connected:", ws.id);
  ws.on("error", error => console.error("Client socket error:", error.message));
  ws.on("message", (raw, binary) => {
    if (binary) { send(ws, { type: "error", message: "Text JSON messages only." }); return; }
    let data;
    try { data = JSON.parse(raw.toString()); }
    catch { send(ws, { type: "error", message: "Invalid JSON." }); return; }
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      send(ws, { type: "error", message: "Expected a message object." }); return;
    }
    if (data.type === "join") {
      const name = typeof data.name === "string" ? data.name.trim() : "";
      if (ws.username) { send(ws, { type: "error", message: "Already joined." }); return; }
      if (name.length < 2 || name.length > 24 || /[\r\n]/u.test(name)) {
        send(ws, { type: "error", message: "Use a display name of 2–24 characters without line breaks." }); return;
      }
      ws.username = name;
      send(ws, { type: "joined", id: ws.id, name });
      broadcast({ type: "system", message: `${name} joined the room.` });
      presence();
    } else if (data.type === "chat") {
      if (!ws.username) { send(ws, { type: "error", message: "Join before sending messages." }); return; }
      const text = typeof data.text === "string" ? data.text.trim() : "";
      if (text.length < 1 || text.length > 500) {
        send(ws, { type: "error", message: "Messages must contain 1–500 characters." }); return;
      }
      // Trust the socket's server-side identity, not fields in the message.
      broadcast({ type: "chat", id: randomUUID(), senderId: ws.id,
        name: ws.username, text, time: new Date().toISOString() });
    } else {
      send(ws, { type: "error", message: "Unknown message type." });
    }
  });
  ws.on("close", () => {
    console.log("Client disconnected:", ws.id);
    if (ws.username) {
      broadcast({ type: "system", message: `${ws.username} left the room.` });
      presence();
    }
  });
});
server.on("error", error => { console.error(error.message); process.exitCode = 1; });
server.listen(8126, "127.0.0.1", () => console.log("Day 26: http://127.0.0.1:8126 — Ctrl+C to stop."));
