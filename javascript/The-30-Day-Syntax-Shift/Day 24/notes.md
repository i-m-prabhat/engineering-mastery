# Day 24 Notes: Weather App

## 1. Separate responsibilities

index.html provides the form and result regions. styles.css handles layout and transitions. solutions.mjs handles events and rendering. weather-api.mjs fetches, validates, and normalizes data.

The Node server serves only listed local assets. It does not receive weather-search queries or proxy API traffic.

## 2. A city search has two steps

Live mode first calls Open-Meteo geocoding to translate a city into coordinates, then requests current conditions and a daily forecast for those coordinates.

The app selects the first location result and displays its city, region, and country. Include a country in ambiguous queries. A fuller application could offer all matching locations for selection.

URLSearchParams encodes the query instead of inserting raw text into a URL string.

## 3. Check each asynchronous stage

fetch can reject for network or timeout problems. HTTP 404/500 responses require an explicit response.ok check. JSON parsing and incomplete data can fail separately.

The helper checks status, parses JSON, handles API error objects, and validates fields before rendering. Missing temperature values do not silently become zero.

Requests have a ten-second timeout. A new search aborts old work and uses a request ID so older results cannot replace the latest search.

## 4. Units, dates, and zones

Live requests explicitly use Celsius and timezone=auto. The forecast asks for five days beginning today, showing daily high and low values.

Dates are rendered as their API YYYY-MM-DD strings. This avoids accidentally shifting a location's date through the viewer's timezone. The current observation time and location timezone are labeled.

This is a forecast/current-model API display, not a guarantee of an exact measurement at the user's address.

## 5. Weather codes

The API's WMO codes are mapped to readable conditions and local emoji icons. Text accompanies every icon; icons are hidden from assistive technology to avoid redundant announcements.

Unknown codes get an explicit fallback rather than an incorrect condition. Some detailed code variations share a broader label in this lesson.

## 6. Real data versus samples

Live mode uses the public APIs. Sample mode fetches a local JSON file containing fictional Delhi, London, and Berlin forecasts with fixed dates. The page clearly labels sample results as not live.

Sample data is not an automatic fallback after a live failure. The user chooses the mode. A separate failed-request mode requests a missing local asset to exercise a real HTTP 404.

No API key is embedded, no geolocation permission is requested, and no search data is stored.

## 7. Render data safely

All service text is written with textContent. Forecast cards are created with DOM methods rather than HTML string insertion.

Changing modes removes old results and aborts pending work. A failed or invalid query also hides stale weather, so it is not mistaken for the new city.

The status region announces loading, success, and errors. Enter submits the search form. Results include Celsius units, dates, and timezone context.

## 8. UI polish

The forecast grid adapts to smaller screens. Hover/focus states help navigation, and a short entrance animation makes new results visible. Reduced-motion preferences disable transitions and animation.

## 9. Practice checks

Search Delhi in sample mode, then London. Try an unknown sample city and blank text. Use failed-request mode and confirm the error is visible without old results.

Use live mode with a real city when internet is available. Inspect both network requests and the parsed response. Service/network availability is separate from successful local sample checks.

Official references: [Forecast API](https://open-meteo.com/en/docs) and [Geocoding API](https://open-meteo.com/en/docs/geocoding-api).

## Quick review

1. Why does searching a city require geocoding?
2. Why check response.ok?
3. Why label forecast timezone and temperature units?
4. What prevents an older request overwriting a newer one?
5. How is sample mode distinguished from live data?
6. Why render service strings with textContent?

Explain the path from form submission to validated forecast cards.
