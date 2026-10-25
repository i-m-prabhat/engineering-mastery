import { add, subtract } from "./math.mjs";
import { person } from "./person.mjs";
import welcome from "./greeting.mjs";
import * as math from "./math.mjs";

export function runLocalDemo() {
  console.log("Task 1 - imported addition:", add(10, 3));
  console.log("Task 2 - imported person:", person.name, person.age, person.greet());
  console.log("Task 3 - named exports:", add(8, 2), subtract(8, 2));
  console.log("Task 4 - default export:", welcome("Prabhat"));
  console.log("Task 5 - namespace constant:", math.DEFAULT_FACTOR);
  console.log("Task 5 - namespace multiply:", math.multiply(5, 3));
}

// Importing this module does not run the demo.
import { pathToFileURL } from "node:url";
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runLocalDemo();
}
