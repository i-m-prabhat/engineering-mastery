"use strict";

// Empty text is balanced; non-bracket characters are rejected.
function isValidParentheses(text) {
  if (typeof text !== "string") throw new TypeError("text must be a string");
  const closing = new Map([[")", "("], ["]", "["], ["}", "{"]]);
  const opening = new Set(["(", "[", "{"]);
  const stack = [];
  for (const character of text) {
    if (opening.has(character)) stack.push(character);
    else if (closing.has(character)) {
      if (stack.pop() !== closing.get(character)) return false;
    } else return false;
  }
  return stack.length === 0;
}
function runParenthesesDemo() {
  for (const text of ["()", "()[]{}", "{[]}", "([)]", "(]", "(", ")", "", "(a)"]) {
    console.log("Brackets:", JSON.stringify(text), "| valid:", isValidParentheses(text));
  }
}
module.exports = { isValidParentheses, runParenthesesDemo };
if (require.main === module) runParenthesesDemo();
