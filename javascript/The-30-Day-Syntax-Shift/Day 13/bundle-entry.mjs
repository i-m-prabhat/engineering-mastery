// Task 8: combine local modules into one runnable Node.js artifact.
import { add, multiply } from "./math.mjs";
import welcome from "./greeting.mjs";

console.log("Bundled greeting:", welcome("Prabhat"));
console.log("Bundled addition:", add(10, 3));
console.log("Bundled multiplication:", multiply(5, 3));
