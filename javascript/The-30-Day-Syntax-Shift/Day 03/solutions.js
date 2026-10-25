"use strict";

// Task 1: choose one of three branches.
const number = -5;
if (number > 0) {
  console.log("Task 1 - sign:", "positive");
} else if (number < 0) {
  console.log("Task 1 - sign:", "negative");
} else {
  console.log("Task 1 - sign:", "zero");
}

// Task 2: the exercise uses a minimum age of 18.
const age = 18;
if (age >= 18) {
  console.log("Task 2 - voting:", "eligible");
} else {
  console.log("Task 2 - voting:", "not eligible");
}

// Task 3: nested conditions handle ties as well as distinct values.
const first = 12;
const second = 12;
const third = 7;
let largest;
if (first >= second) {
  if (first >= third) {
    largest = first;
  } else {
    largest = third;
  }
} else {
  if (second >= third) {
    largest = second;
  } else {
    largest = third;
  }
}
console.log("Task 3 - largest:", largest);

// Task 4: Monday is 1, Sunday is 7.
const day = 3;
let weekday;
switch (day) {
  case 1: weekday = "Monday"; break;
  case 2: weekday = "Tuesday"; break;
  case 3: weekday = "Wednesday"; break;
  case 4: weekday = "Thursday"; break;
  case 5: weekday = "Friday"; break;
  case 6: weekday = "Saturday"; break;
  case 7: weekday = "Sunday"; break;
  default: weekday = "invalid day";
}
console.log("Task 4 - weekday:", weekday);

// Task 5: switch(true) matches the first true range condition.
const score = 85;
let grade;
switch (true) {
  case !Number.isFinite(score) || score < 0 || score > 100:
    grade = "invalid score"; break;
  case score >= 90: grade = "A"; break;
  case score >= 80: grade = "B"; break;
  case score >= 70: grade = "C"; break;
  case score >= 60: grade = "D"; break;
  default: grade = "F";
}
console.log("Task 5 - grade:", grade);

// Task 6: parity applies to integers, including negative integers and zero.
const integer = -4;
console.log("Task 6 - parity:", integer % 2 === 0 ? "even" : "odd");

// Task 7: a century must also be divisible by 400.
const year = 2000;
const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
console.log("Task 7 - leap year:", isLeapYear);
console.log("All seven task demonstrations finished.");
