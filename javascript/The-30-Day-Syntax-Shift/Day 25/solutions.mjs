const form = document.getElementById("search-form");
const query = document.getElementById("query");
const mode = document.getElementById("mode");
const status = document.getElementById("status");
const results = document.getElementById("results");
const dialog = document.getElementById("details");
const detailBody = document.getElementById("detail-body");
const detailStatus = document.getElementById("detail-status");
let searchController;
let detailController;
let searchVersion = 0;
let detailVersion = 0;

function node(tag, text, className) {
  const element = document.createElement(tag);
  if (text !== undefined) element.textContent = text;
  if (className) element.className = className;
  return element;
}
async function requestJson(path, params, signal) {
  const url = new URL(path, location.origin);
  url.search = new URLSearchParams(params);
  const response = await fetch(url, { signal: AbortSignal.any([signal, AbortSignal.timeout(15000)]) });
  const data = await response.json();
  if (!response.ok || data.error) throw new Error(data.error || `Request failed (HTTP ${response.status}).`);
  return data;
}
function poster(source, title) {
  const image = node("img");
  image.alt = `Poster for ${title}`;
  image.loading = "lazy";
  image.width = 240; image.height = 340;
  // Only allow our sample artwork or secure external poster URLs.
  image.src = source === "/poster.svg" || (typeof source === "string" && source.startsWith("https://"))
    ? source : "/poster-fallback.svg";
  if (image.src.endsWith("/poster-fallback.svg")) image.alt = `Poster unavailable for ${title}`;
  image.addEventListener("error", () => {
    image.src = "/poster-fallback.svg";
    image.alt = `Poster unavailable for ${title}`;
  }, { once: true });
  return image;
}
function field(label, value) {
  return node("p", `${label}: ${typeof value === "string" && value !== "N/A" ? value : "Not available"}`);
}

// Tasks 7–8: fetch details separately and present a keyboard-accessible dialog.
async function showDetails(movie, selectedMode) {
  detailController?.abort();
  const id = ++detailVersion;
  detailController = new AbortController();
  document.getElementById("detail-title").textContent = movie.title;
  detailBody.replaceChildren();
  detailStatus.textContent = "Loading movie details…";
  if (!dialog.open) dialog.showModal();
  try {
    const data = await requestJson("/api/movie", { id: movie.id, mode: selectedMode }, detailController.signal);
    if (id !== detailVersion || !dialog.open) return;
    const detail = data.movie;
    if (!detail || typeof detail.Title !== "string") throw new Error("Incomplete movie details.");
    document.getElementById("detail-title").textContent = detail.Title;
    detailBody.append(poster(detail.Poster, detail.Title),
      node("p", data.sample ? "Fictional sample movie" : "Live OMDb metadata", "eyebrow"),
      field("Year", detail.Year), field("Director", detail.Director), field("Cast", detail.Actors),
      field("Plot", detail.Plot));
    detailStatus.textContent = "Movie details loaded.";
  } catch (error) {
    if (id !== detailVersion || !dialog.open) return;
    detailStatus.textContent = error.name === "TimeoutError" ? "Details timed out. Close and retry." : error.message;
  }
}
document.getElementById("close-details").addEventListener("click", () => dialog.close());
dialog.addEventListener("close", () => { detailController?.abort(); detailVersion++; });

// Tasks 3–6: title search with loading, empty, and failure states.
form.addEventListener("submit", async event => {
  event.preventDefault();
  searchController?.abort();
  const id = ++searchVersion;
  if (dialog.open) dialog.close();
  results.replaceChildren();
  const title = query.value.trim();
  if (title.length < 2) {
    results.setAttribute("aria-busy", "false");
    status.textContent = "Enter at least two characters of a movie title.";
    return;
  }
  const selectedMode = mode.value;
  searchController = new AbortController();
  results.setAttribute("aria-busy", "true");
  status.textContent = "Searching movies…";
  try {
    const data = await requestJson("/api/search", { q: title, mode: selectedMode }, searchController.signal);
    if (id !== searchVersion) return;
    if (!Array.isArray(data.movies)) throw new Error("Incomplete search results.");
    for (const movie of data.movies) {
      const card = node("article", undefined, "movie-card");
      const button = node("button", "More Info");
      button.type = "button";
      button.setAttribute("aria-label", `More Info: ${movie.title}`);
      button.addEventListener("click", () => showDetails(movie, selectedMode));
      card.append(poster(movie.poster, movie.title), node("h2", movie.title),
        node("p", movie.year || "Year unavailable"), button);
      results.appendChild(card);
    }
    status.textContent = data.movies.length
      ? `${data.movies.length} ${data.sample ? "fictional sample" : "live"} movie(s) found.`
      : "No movies found. Try another title.";
  } catch (error) {
    if (id !== searchVersion) return;
    status.textContent = error.name === "TimeoutError" ? "Search timed out. Please try again." : error.message;
  } finally {
    if (id === searchVersion) results.setAttribute("aria-busy", "false");
  }
});
mode.addEventListener("change", () => {
  searchController?.abort();
  searchVersion++;
  if (dialog.open) dialog.close();
  results.replaceChildren();
  results.setAttribute("aria-busy", "false");
  status.textContent = "Data mode changed. Search to load its movies.";
});
