"use strict";
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const movies = JSON.parse(fs.readFileSync(path.join(__dirname, "demo-movies.json"), "utf8"));
const routes = {
  "/": ["index.html", "text/html; charset=utf-8"],
  "/index.html": ["index.html", "text/html; charset=utf-8"],
  "/styles.css": ["styles.css", "text/css; charset=utf-8"],
  "/solutions.mjs": ["solutions.mjs", "text/javascript; charset=utf-8"],
  "/poster.svg": ["poster.svg", "image/svg+xml"],
  "/poster-fallback.svg": ["poster-fallback.svg", "image/svg+xml"],
};
function send(response, status, value) {
  response.writeHead(status, { "Content-Type": "application/json", "Cache-Control": "no-store" });
  response.end(JSON.stringify(value));
}
function publicMovie(movie) {
  return { id: movie.imdbID, title: movie.Title, year: movie.Year, poster: movie.Poster };
}
async function api(url, response) {
  const mode = url.searchParams.get("mode") || "sample";
  const detail = url.pathname === "/api/movie";
  const query = (url.searchParams.get(detail ? "id" : "q") || "").trim();
  if (!["sample", "live"].includes(mode)) { send(response, 400, { error: "Unknown data mode." }); return; }
  if ((!detail && (query.length < 2 || query.length > 100)) || (detail && !/^(?:demo-\d+|tt\d{7,8})$/u.test(query))) {
    send(response, 400, { error: "Enter a valid search or movie ID." }); return;
  }
  if (mode === "sample") {
    if (!detail) {
      send(response, 200, { movies: movies.filter(movie => movie.Title.toLowerCase().includes(query.toLowerCase())).map(publicMovie), sample: true });
      return;
    }
    const movie = movies.find(item => item.imdbID === query);
    if (!movie) { send(response, 404, { error: "Sample movie not found." }); return; }
    if (movie.detailFailure) { send(response, 503, { error: "Practice detail request failed. Close this view and try another movie." }); return; }
    send(response, 200, { movie, sample: true }); return;
  }
  const apiKey = process.env.OMDB_API_KEY?.trim();
  if (!apiKey) {
    send(response, 503, { error: "Live mode needs OMDB_API_KEY set in the server environment. Use sample mode or follow README setup." }); return;
  }
  const upstream = new URL("https://www.omdbapi.com/");
  upstream.search = new URLSearchParams({
    apikey: apiKey, type: "movie", r: "json",
    ...(detail ? { i: query, plot: "full" } : { s: query, page: "1" }),
  });
  try {
    const result = await fetch(upstream, { signal: AbortSignal.timeout(10000) });
    if (!result.ok) { send(response, 502, { error: "The movie service returned an HTTP error." }); return; }
    const data = await result.json();
    if (data.Response === "False") {
      if (!detail && data.Error === "Movie not found!") send(response, 200, { movies: [], sample: false });
      else send(response, 502, { error: "The movie service could not complete this request. Check the server API key and query." });
      return;
    }
    if (detail) {
      if (typeof data.Title !== "string") throw new Error("Invalid detail shape");
      send(response, 200, { movie: data, sample: false });
    } else {
      if (!Array.isArray(data.Search)) throw new Error("Invalid search shape");
      send(response, 200, { movies: data.Search.map(publicMovie), sample: false });
    }
  } catch {
    // Never log the upstream URL or credentials.
    send(response, 502, { error: "The movie service is unavailable or timed out. Try again later or use sample mode." });
  }
}
const server = http.createServer(async (request, response) => {
  if (request.method !== "GET") { response.writeHead(405); response.end("GET only"); return; }
  const url = new URL(request.url, "http://127.0.0.1");
  if (url.pathname === "/api/search" || url.pathname === "/api/movie") {
    try { await api(url, response); }
    catch { if (!response.headersSent) send(response, 500, { error: "Unable to process this request." }); }
    return;
  }
  const route = routes[url.pathname];
  if (!route) { response.writeHead(404); response.end("Not found"); return; }
  fs.readFile(path.join(__dirname, route[0]), (error, data) => {
    if (error) { response.writeHead(500); response.end("Unable to read lesson"); return; }
    response.setHeader("Content-Type", route[1]);
    response.setHeader("Cache-Control", "no-store");
    response.end(data);
  });
});
server.on("error", error => { console.error(error.message); process.exitCode = 1; });
server.listen(8125, "127.0.0.1", () => console.log("Day 25: http://127.0.0.1:8125 — Ctrl+C to stop."));
