"use strict";
const { Person } = require("./person");
const { Student } = require("./student");

function runStaticDemo() {
  console.log("Task 5 - static greeting:", Person.genericGreeting());
  const before = Student.count;
  new Student("Demo Learner", 18, "ST-101");
  new Student("Sam Taylor", 19, "ST-102");
  console.log("Task 6 - students created in this demo:", Student.count - before);
  console.log("Task 6 - cumulative student count:", Student.count);
}
module.exports = { runStaticDemo };
if (require.main === module) runStaticDemo();
