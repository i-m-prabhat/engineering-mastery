"use strict";
const { Person } = require("./person");

function runPersonDemo() {
  const person = new Person("Prabhat Patel", 20);
  console.log("Task 1 - greeting:", person.greet());
  console.log("Task 2 - updated age:", person.updateAge(21));
  console.log("Updated greeting:", person.greet());
  try {
    person.updateAge(-1);
  } catch (error) {
    console.log("Invalid age:", error.name);
  }
  console.log("Age after invalid edit:", person.age);
}
module.exports = { runPersonDemo };
if (require.main === module) runPersonDemo();
