"use strict";

// Feature 2: reassignment versus mutation.
let completedTasks = 0;
console.log("let before:", completedTasks);
completedTasks = 6;
console.log("let after:", completedTasks);

const challengeName = "Day 01";
try {
  challengeName = "Day 02";
} catch (error) {
  console.log("const reassignment:", error.name);
}
console.log("const still:", challengeName);

// const fixes the binding, not the contents of an object or array.
const progress = { completed: 0 };
progress.completed = 6;
console.log("const object mutation:", progress.completed);

const finishedDays = [1];
finishedDays.push(2);
console.log("const array mutation:", finishedDays);
console.log("Reassignment demo finished.");
