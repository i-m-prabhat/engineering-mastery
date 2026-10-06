"use strict";
const http = require("node:http");

// Both styles check HTTP status and await JSON parsing.
// The optional fetch argument makes failure paths testable without the internet.
function fetchWithPromises(url, fetchImplementation = fetch) {
  return fetchImplementation(url, { signal: AbortSignal.timeout(5000) })
    .then(response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    });
}

async function fetchWithAwait(url, fetchImplementation = fetch) {
  const response = await fetchImplementation(url, { signal: AbortSignal.timeout(5000) });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return await response.json();
}

// Explicit offline mode uses a real loopback HTTP server and real fetch calls.
async function runApiDemo({ offline = false } = {}) {
  let server;
  let url = "https://jsonplaceholder.typicode.com/posts/1";
  try {
    if (offline) {
      server = http.createServer((request, response) => {
        response.setHeader("Content-Type", "application/json");
        if (request.url === "/posts/1") {
          response.end(JSON.stringify({ id: 1, title: "Local practice post", userId: 1 }));
        } else {
          response.writeHead(404);
          response.end(JSON.stringify({ error: "Not found" }));
        }
      });
      await new Promise((resolve, reject) => {
        server.once("error", reject);
        server.listen(0, "127.0.0.1", resolve);
      });
      url = `http://127.0.0.1:${server.address().port}/posts/1`;
    }

    console.log("API mode:", offline ? "local HTTP fixture" : "public JSONPlaceholder API");
    console.log("Promise fetch:", await fetchWithPromises(url));
    console.log("Async/await fetch:", await fetchWithAwait(url));

    if (offline) {
      for (const readJson of [fetchWithPromises, fetchWithAwait]) {
        try {
          await readJson(url.replace("/posts/1", "/missing"));
        } catch (error) {
          console.log("Expected HTTP failure:", error.message);
        }
      }
    }
  } finally {
    if (server && server.listening) {
      await new Promise((resolve, reject) => {
        server.close(error => error ? reject(error) : resolve());
      });
    }
  }
}

module.exports = { fetchWithPromises, fetchWithAwait, runApiDemo };
if (require.main === module) {
  runApiDemo({ offline: process.argv.includes("--offline") })
    .catch(error => { console.error("API demo failed:", error.message); process.exitCode = 1; });
}
