# Day 25 Notes: Movie Search App

## 1. Master/detail navigation

The search result grid is the master view: title, year, poster, and More Info. A separate detail request loads plot, director, and cast into a native dialog.

Separating these requests avoids loading full details for every result. A detail failure does not remove the search grid.

## 2. Server-side API configuration

OMDb requires an API key. The local Node server reads OMDB_API_KEY from its environment and makes the upstream request. The browser calls only the local /api/search and /api/movie endpoints.

The key is not placed in client JavaScript, page markup, or browser storage. The server does not log upstream URLs. Existing shared ignore rules cover private .env files, but this server does not load .env automatically.

Sample mode is the default and requires no credentials. It uses fictional movies, cast, plot, and artwork. Live mode is an explicit choice and fails visibly if no server key is configured.

## 3. Search parameters

The live search uses s for title, type=movie, and page=1. This lesson shows the first result page, up to ten movies; pagination is outside its scope.

Details use the selected IMDb ID with i and plot=full. URLSearchParams encodes values. The local server accepts only known modes and bounded queries.

The proxy has a fixed HTTPS upstream, not an arbitrary URL supplied by the browser.

## 4. Error stages

The server checks upstream HTTP status, JSON parsing, and OMDb's Response field. Response=False is an application error even when HTTP succeeded.

A no-match search becomes an empty result array. Other provider errors become readable failures. A ten-second upstream timeout is paired with a fifteen-second browser timeout.

The sample Missing Reel movie deliberately returns a failed detail request. This tests recovery independently from search success.

## 5. Cancellation and stale results

A new search aborts the browser's previous fetch and increments a request version. A completed response renders only if it is still the latest request.

Changing modes cancels pending work, removes old results, and closes details. The server's upstream request may continue until its timeout even if the browser aborts; browser cancellation does not automatically cancel every server operation.

Detail requests have their own controller/version. Closing the dialog aborts their client request and prevents late results from reopening or filling a closed view.

## 6. Safe DOM rendering and posters

Movie text is assigned with textContent. DOM methods create the cards, so movie titles are not interpreted as HTML.

Only secure external poster URLs or the known local sample artwork are used. Missing/N/A values and broken images use a local fallback. Alternative text describes unavailable posters.

Sample posters are original generic artwork, not actual film posters. Live image loading depends on the external image host.

## 7. Accessible details

The native dialog is labeled by its heading. showModal moves focus into it and constrains interaction to the dialog. The Close button or Escape closes it; native dialog behavior restores focus to the opening control.

Keyboard Enter submits search. Loading, empty, and error messages use status regions. Reduced-motion preferences disable the entrance animation.

## 8. Practice checklist

Search journey in sample mode. Open a normal movie, close with Escape, inspect a missing poster, then open Missing Reel to see its failed detail request.

Try no matches and blank input. Switch to live without a key to verify the configuration message. After configuring a valid key, search a real title and inspect its detail response.

The server serves only explicit static routes and API endpoints. No search history or form content is persisted.

## Official reference

[OMDb API documentation](https://www.omdbapi.com/) lists search and detail parameters and API-key setup.

## Quick review

1. Why request details separately from search?
2. Where is the API key kept?
3. How can HTTP success still contain a provider error?
4. What prevents a stale detail request from rendering after closure?
5. How are missing posters handled?
6. What does this version do about result pagination?

Explain the path from a title query through the local server to the detail dialog.
