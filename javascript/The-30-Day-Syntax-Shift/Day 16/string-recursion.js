"use strict";
const { reverseString, isPalindrome } = require("./recursion-utils");
function runStringDemo() {
  for (const text of ["JavaScript", "", "a", "level", "Level", "a b a", "A😀B"]) {
    console.log("Text:", JSON.stringify(text));
    console.log("Task 5 - reversed:", JSON.stringify(reverseString(text)));
    console.log("Task 6 - palindrome:", isPalindrome(text));
  }
}
module.exports = { runStringDemo };
if (require.main === module) runStringDemo();
