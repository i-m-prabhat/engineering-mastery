"use strict";

function isPalindromeNumber(value) {
  if (!Number.isInteger(value) || value < -2147483648 || value > 2147483647) {
    throw new RangeError("input must be a signed 32-bit integer");
  }
  if (value < 0 || (value !== 0 && value % 10 === 0)) return false;
  let remaining = value;
  let reversedHalf = 0;
  while (remaining > reversedHalf) {
    reversedHalf = reversedHalf * 10 + remaining % 10;
    remaining = Math.floor(remaining / 10);
  }
  // For odd digit counts, discard the middle digit of the reversed half.
  return remaining === reversedHalf || remaining === Math.floor(reversedHalf / 10);
}
function runPalindromeDemo() {
  for (const value of [121, -121, 10, 0, 1221, 12321, 123]) {
    console.log("Palindrome:", value, "| result:", isPalindromeNumber(value));
  }
}
module.exports = { isPalindromeNumber, runPalindromeDemo };
if (require.main === module) runPalindromeDemo();
