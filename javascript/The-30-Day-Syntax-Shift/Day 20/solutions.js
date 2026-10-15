"use strict";

const prefix = "syntax-shift-day20:";
const status = document.getElementById("status");
function report(message) { status.textContent = message; }
function attempt(label, callback) {
  try { callback(); }
  catch (error) {
    console.error(label, error);
    report(`${label} failed: ${error.name}. Check storage permissions and saved JSON.`);
  }
}
function key(name) { return prefix + name; }

function readJson(store, name) {
  const raw = store.getItem(key(name));
  return raw === null ? null : JSON.parse(raw);
}
function readProfile(store) {
  const profile = readJson(store, "profile");
  if (profile === null) return null;
  if (typeof profile !== "object" || Array.isArray(profile) ||
      typeof profile.name !== "string" || typeof profile.email !== "string") {
    throw new TypeError("saved profile must contain string name and email fields");
  }
  return profile;
}
function renderStore(kind) {
  const store = window[kind === "local" ? "localStorage" : "sessionStorage"];
  const snapshot = {
    string: store.getItem(key("message")),
    object: readJson(store, "object"),
    profile: readProfile(store),
    comparison: store.getItem(key("comparison")),
  };
  document.getElementById(`${kind}-output`).textContent = JSON.stringify(snapshot, null, 2);
}
function restoreProfile(kind) {
  const store = window[kind === "local" ? "localStorage" : "sessionStorage"];
  const profile = readProfile(store);
  document.getElementById(`${kind}-name`).value = profile?.name ?? "";
  document.getElementById(`${kind}-email`).value = profile?.email ?? "";
  renderStore(kind);
}

// Tasks 1–4 and 5–8 share operations but use different storage objects.
for (const kind of ["local", "session"]) {
  const storageName = kind === "local" ? "localStorage" : "sessionStorage";

  // Tasks 1/5: setItem stores strings; getItem returns a string or null.
  document.getElementById(`${kind}-string`).addEventListener("click", () => {
    attempt(`${kind} string`, () => {
      const store = window[storageName];
      store.setItem(key("message"), `Hello from ${storageName}`);
      console.log(storageName, "retrieved string:", store.getItem(key("message")));
      renderStore(kind);
      report(`Saved and retrieved ${kind} string.`);
    });
  });

  // Tasks 2/6: explicitly serialize and parse the object.
  document.getElementById(`${kind}-object`).addEventListener("click", () => {
    attempt(`${kind} object`, () => {
      const store = window[storageName];
      store.setItem(key("object"), JSON.stringify({ topic: "Browser storage", day: 20 }));
      console.log(storageName, "parsed object:", readJson(store, "object"));
      renderStore(kind);
      report(`Saved and parsed ${kind} object.`);
    });
  });

  // Tasks 3/7: persist form fields and restore them on page load.
  document.getElementById(`${kind}-form`).addEventListener("submit", event => {
    event.preventDefault();
    attempt(`${kind} profile`, () => {
      const name = document.getElementById(`${kind}-name`).value.trim();
      const email = document.getElementById(`${kind}-email`).value.trim();
      if (!name || !email) {
        report("Enter a nonblank practice name and email.");
        return;
      }
      window[storageName].setItem(key("profile"), JSON.stringify({ name, email }));
      restoreProfile(kind);
      report(`Saved ${kind} profile. Reload to restore it.`);
    });
  });

  // Tasks 4/8: remove only the message key; repeated removals are safe.
  document.getElementById(`remove-${kind}`).addEventListener("click", () => {
    attempt(`${kind} removal`, () => {
      const store = window[storageName];
      console.log(storageName, "before removal:", store.getItem(key("message")));
      store.removeItem(key("message"));
      console.log(storageName, "after removal:", store.getItem(key("message")));
      renderStore(kind);
      report(`Removed ${kind} string; missing keys read as null.`);
    });
  });
}

function renderComparison() {
  const local = window.localStorage.getItem(key("comparison"));
  const session = window.sessionStorage.getItem(key("comparison"));
  document.getElementById("compare-output").textContent =
    JSON.stringify({ local, session, equal: local === session }, null, 2);
}

// Task 9: the same key/value goes to both stores.
document.getElementById("compare-form").addEventListener("submit", event => {
  event.preventDefault();
  attempt("Storage comparison", () => {
    const value = document.getElementById("compare-value").value;
    window.localStorage.setItem(key("comparison"), value);
    window.sessionStorage.setItem(key("comparison"), value);
    renderComparison();
    renderStore("local");
    renderStore("session");
    report("Saved the same comparison value to both stores.");
  });
});

document.getElementById("reload-page").addEventListener("click", () => window.location.reload());

// Task 10: destructive only within this dedicated practice origin.
// Other tabs have their own sessionStorage; their session data is not cleared here.
document.getElementById("clear-storage").addEventListener("click", () => {
  attempt("Clear storage", () => {
    window.localStorage.clear();
    window.sessionStorage.clear();
    restoreProfile("local");
    restoreProfile("session");
    renderComparison();
    const localCount = window.localStorage.length;
    const sessionCount = window.sessionStorage.length;
    document.getElementById("clear-output").textContent =
      `After clear: local entries = ${localCount}; session entries = ${sessionCount}.`;
    report("Cleared both stores and verified their entry counts.");
  });
});

// A malformed local profile does not prevent the session restore from being tried.
attempt("Local restore", () => restoreProfile("local"));
attempt("Session restore", () => restoreProfile("session"));
attempt("Comparison restore", renderComparison);
