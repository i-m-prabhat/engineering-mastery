"use strict";
// Dedicated origin for storage practice; serve only this lesson's static files.
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const routes = {
  "/": ["index.html", "text/html; charset=utf-8"],
  "/index.html": ["index.html", "text/html; charset=utf-8"],
  "/styles.css": ["styles.css", "text/css; charset=utf-8"],
  "/solutions.js": ["solutions.js", "text/javascript; charset=utf-8"],
};
const server = http.createServer((request, response) => {
  const route = routes[new URL(request.url, "http://127.0.0.1").pathname];
  if (!route) { response.writeHead(404); response.end("Not found"); return; }
  fs.readFile(path.join(__dirname, route[0]), (error, data) => {
    if (error) { response.writeHead(500); response.end("Unable to read lesson file"); return; }
    response.setHeader("Content-Type", route[1]);
    response.setHeader("Cache-Control", "no-store");
    response.end(data);
  });
});
server.on("error", error => { console.error(error.message); process.exitCode = 1; });
server.listen(8120, "127.0.0.1", () => {
  console.log("Day 20: http://127.0.0.1:8120 — Ctrl+C stops the server.");
});
