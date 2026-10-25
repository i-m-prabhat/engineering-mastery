"use strict";

// Tasks 6–7: random mode plus deterministic cases for repeatable practice.
function maybeResolve(mode = "random") {
  if (!["random", "success", "failure"].includes(mode)) {
    return Promise.reject(new RangeError("mode must be random, success, or failure"));
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const succeeds = mode === "success" || (mode === "random" && Math.random() >= 0.5);
      if (succeeds) resolve("Promise succeeded");
      else reject(new Error("Promise failed"));
    }, 20);
  });
}

async function runPromiseDemo() {
  for (const mode of ["success", "failure", "random"]) {
    // Task 6: attach catch immediately and await the handled chain.
    await maybeResolve(mode)
      .then(value => console.log(`Task 6 - ${mode}:`, value))
      .catch(error => console.log(`Task 6 - ${mode} caught:`, error.message));

    // Task 7: await makes the rejection catchable by this try/catch.
    try {
      const value = await maybeResolve(mode);
      console.log(`Task 7 - ${mode}:`, value);
    } catch (error) {
      console.log(`Task 7 - ${mode} caught:`, error.message);
    }
  }
  console.log("Promise demo continued after handled rejections.");
}

module.exports = { maybeResolve, runPromiseDemo };
if (require.main === module) {
  runPromiseDemo().catch(error => { console.error(error.message); process.exitCode = 1; });
}
