"use strict";

// Day 01: all six tasks. Run this file with Node.js.

// Task 1: var declaration (included for practice; prefer const/let in new code).
var score = 10;
console.log("Task 1 - var number:", score);

// Task 2: let declaration.
let learnerName = "Prabhat";
console.log("Task 2 - let string:", learnerName);

// Task 3: const declaration.
const isLearning = true;
console.log("Task 3 - const boolean:", isLearning);

// Task 4: values and their types. Arrays are objects in JavaScript.
const age = 20;
const language = "JavaScript";
const isBeginner = true;
const learner = { name: "Prabhat" };
const topics = ["variables", "data types"];
console.log("Task 4 - number:", age, "| typeof:", typeof age);
console.log("Task 4 - string:", language, "| typeof:", typeof language);
console.log("Task 4 - boolean:", isBeginner, "| typeof:", typeof isBeginner);
console.log("Task 4 - object:", learner, "| typeof:", typeof learner);
console.log("Task 4 - array:", topics, "| typeof:", typeof topics);
console.log("Task 4 - Array.isArray(topics):", Array.isArray(topics));

// Task 5: let allows reassignment.
let points = 10;
console.log("Task 5 - before:", points);
points = 25;
console.log("Task 5 - after:", points);

// Task 6: catch the intentional error so the script can continue.
const dailyGoal = 6;
try {
  dailyGoal = 7;
} catch (error) {
  console.log("Task 6 - expected error:", error.name);
}
console.log("Task 6 - dailyGoal remains:", dailyGoal);
console.log("All six task demonstrations finished.");
