"use strict";

// Tasks 8–9: malformed URL rejects fetch without external network access.
const invalidUrl = "http://[invalid";

function fetchJsonWithPromises(url, fetchImplementation = fetch) {
  return fetchImplementation(url, { signal: AbortSignal.timeout(3000) })
    .then(response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    });
}

async function fetchJsonWithAwait(url, fetchImplementation = fetch) {
  const response = await fetchImplementation(url, { signal: AbortSignal.timeout(3000) });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return await response.json();
}

async function runFetchDemo() {
  await fetchJsonWithPromises(invalidUrl)
    .catch(error => console.log("Task 8 - invalid URL caught:", error.name));

  try {
    await fetchJsonWithAwait(invalidUrl);
  } catch (error) {
    console.log("Task 9 - invalid URL caught:", error.name);
  }

  // Explicit Response fixtures distinguish HTTP errors from fetch rejection.
  for (const readJson of [fetchJsonWithPromises, fetchJsonWithAwait]) {
    try {
      await readJson("https://fixture.invalid/missing",
        async () => new Response("Not found", { status: 404 }));
    } catch (error) {
      console.log("Fixture HTTP error caught:", error.message);
    }
    try {
      await readJson("https://fixture.invalid/broken",
        async () => new Response("{invalid JSON", { status: 200 }));
    } catch (error) {
      console.log("Fixture JSON error caught:", error.name);
    }
  }
  console.log("Fetch demo continued after handled failures.");
}

module.exports = { invalidUrl, fetchJsonWithPromises, fetchJsonWithAwait, runFetchDemo };
if (require.main === module) {
  runFetchDemo().catch(error => { console.error(error.message); process.exitCode = 1; });
}
