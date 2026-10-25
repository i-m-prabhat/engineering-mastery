import { runLocalDemo } from "./local-modules.mjs";
import { pathToFileURL } from "node:url";

export async function main() {
  runLocalDemo();
  // Load package-dependent work only after the local module examples.
  const { runThirdPartyDemo } = await import("./third-party-modules.mjs");
  await runThirdPartyDemo({ live: process.argv.includes("--live") });
  console.log("Tasks 1–7 finished. Run npm run build and npm run demo:bundle for Task 8.");
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(error => { console.error("Day 13 failed:", error.message); process.exitCode = 1; });
}
