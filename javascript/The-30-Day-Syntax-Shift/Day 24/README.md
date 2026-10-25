# Day 24: Project 1 - Weather App

**Status:** Weather app and learning notes added.

## Goal

Build an API-driven interface with search and forecast rendering.

## Environment

Node.js 22 or newer for the static server and a modern browser. Live mode requires internet; sample mode works offline.

## Tasks / Activities

1. Plan the app's HTML structure.
2. Add CSS and a weather display container.
3. Fetch current weather from a public weather API and inspect the response.
4. Display city, temperature, and condition.
5. Add and style a city search field and button.
6. Fetch and display weather for the submitted city; handle errors.
7. Fetch a five-day forecast.
8. Display temperature and condition for each forecast day.
9. Add condition icons or images.
10. Improve the interface with transitions or animations.

## Feature Requests

- [x] Current weather display.
- [x] City search.
- [x] Five-day forecast.
- [x] Weather icons and UI polish.

## Check Your Work

Check a valid city, blank input, an unknown city, loading, and request failure; label temperature units and forecast dates.

## Solution Files

- [index.html](index.html): city search, mode selection, current weather, and forecast.
- [solutions.mjs](solutions.mjs): form events, request cancellation, and safe DOM rendering.
- [weather-api.mjs](weather-api.mjs): geocoding, weather fetching, validation, and condition mapping.
- [demo-weather.json](demo-weather.json): fictional fixed-date offline samples.
- [styles.css](styles.css): responsive forecast grid, transitions, and reduced-motion support.
- [server.cjs](server.cjs): dependency-free local static server.
- [notes.md](notes.md): architecture, API flow, errors, and review questions.

## Run the App

Use Node.js 22 or newer and a modern browser. No packages are required.
From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 24/server.cjs"
```

Open http://127.0.0.1:8124. Ctrl+C stops the server.
Live mode makes public API requests; sample mode and failed-request practice work offline.

Try these flows:

1. Choose Sample data, search Delhi, London, or Berlin, and inspect the five cards.
2. Confirm city/country, current temperature in °C, condition text, dates, and timezone.
3. Submit with Enter; try blank text and an unknown sample city.
4. Choose Practice a failed request to inspect a visible HTTP 404 error.
5. Choose Live weather and search a city with internet access.

Expected highlights:

- Delhi's fictional sample shows 29.0 °C and Clear sky.
- Each sample displays five dates, beginning 2026-10-19, with daily highs/lows.
- Unknown cities and failed requests display an error and hide stale results.
- Changing mode cancels pending work and requires a new search.
- Samples are labeled fictional fixed-date data; live failures never silently become samples.

Live search uses the first geocoding match; include a country to narrow ambiguous cities.
Current observation time and forecast timezone are labeled. Requests time out after ten seconds.

## API Documentation

- [Open-Meteo forecast API](https://open-meteo.com/en/docs)
- [Open-Meteo geocoding API](https://open-meteo.com/en/docs/geocoding-api)

[Back to the 30-day roadmap](../README.md)
