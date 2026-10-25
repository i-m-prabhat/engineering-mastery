"use strict";
const { createItemManager } = require("./closure-utils");

function runItemDemo() {
  const manager = createItemManager();
  manager.add("Variables");
  manager.add("Closures");
  manager.add("Closures"); // A Set keeps unique names.
  console.log("Task 6 - items:", manager.list());
  console.log("Removed Variables:", manager.remove("Variables"));
  console.log("Removed missing item:", manager.remove("Missing"));
  const snapshot = manager.list();
  snapshot.push("External edit");
  console.log("Private items unchanged by snapshot edit:", manager.list());
  try {
    manager.add("   ");
  } catch (error) {
    console.log("Invalid item:", error.name);
  }
}
module.exports = { runItemDemo };
if (require.main === module) runItemDemo();
