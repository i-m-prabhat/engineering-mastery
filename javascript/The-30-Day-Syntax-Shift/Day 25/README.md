# Day 25: Project 2 - Movie Search App

**Status:** Movie search app and learning notes added.

## Goal

Build a searchable API interface with master/detail navigation.

## Environment

Node.js 22 or newer and a modern browser. Sample mode is offline; live OMDb mode requires a server environment API key and internet.

## Tasks / Activities

1. Plan the HTML structure for movie search.
2. Style the app and results container.
3. Fetch movie data from a public movie API and inspect it.
4. Display title, poster, and release year.
5. Add a styled query input and search button.
6. Search using the entered query and handle failures.
7. Add a More Info button that fetches plot, director, and cast.
8. Display details in a modal or dedicated section.
9. Improve the results and detail layouts.
10. Add transitions or animations.

## Feature Requests

- [x] Movie data rendering.
- [x] Title search.
- [x] Detailed movie information.
- [x] UI enhancements.

## Check Your Work

Check a title with results, no matches, missing posters, loading, and failed detail requests. Support keyboard search and closing the details view.

## Solution Files

- [index.html](index.html): movie search, result grid, and accessible detail dialog.
- [solutions.mjs](solutions.mjs): client requests, safe rendering, posters, and dialog lifecycle.
- [server.cjs](server.cjs): local API proxy, static assets, and environment-only OMDb credentials.
- [demo-movies.json](demo-movies.json): fictional offline search/detail records.
- [poster.svg](poster.svg) and [poster-fallback.svg](poster-fallback.svg): original sample artwork and fallback.
- [styles.css](styles.css): responsive cards, dialog styles, and reduced-motion support.
- [notes.md](notes.md): architecture, errors, accessibility, and review questions.

## Run the App

Use Node.js 22 or newer and a modern browser. No packages are required.
From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 25/server.cjs"
```

Open http://127.0.0.1:8125. Ctrl+C stops the server.
Sample mode works offline and is clearly labeled fictional.

Try journey, open More Info, and close with the Close button or Escape.
Journey Beyond the Map has no poster; Missing Reel deliberately fails its detail request.
Try an unknown title and blank input.

## Live OMDb Setup

Obtain a key through the [OMDb API website](https://www.omdbapi.com/).
Set it only in the server environment before starting the server. For PowerShell:

```powershell
$env:OMDB_API_KEY = "YOUR_OMDB_KEY"
node "javascript/The-30-Day-Syntax-Shift/Day 25/server.cjs"
```

Choose Live OMDb movies in the page. The server does not load .env files automatically.
No key is included in this repository. Live operation needs a valid key and internet.
Search shows the first result page, up to ten movies.

Expected highlights:

- Sample journey search returns three fictional movies with years and poster/fallback images.
- A normal detail view displays plot, director, and cast.
- Missing Reel shows a recoverable detail error; the search grid remains available.
- No-match searches show an empty state; blank queries are rejected.
- Live mode without configuration shows a clear server-key setup message.
- Changing modes clears old results; closing details prevents late rendering.

[Back to the 30-day roadmap](../README.md)
