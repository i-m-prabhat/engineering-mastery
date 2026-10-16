"use strict";

function reverseInteger(value) {
  if (!Number.isInteger(value) || value < -2147483648 || value > 2147483647) {
    throw new RangeError("input must be a signed 32-bit integer");
  }
  const negative = value < 0;
  const limit = negative ? 2147483648 : 2147483647;
  let remaining = Math.abs(value);
  let reversed = 0;
  while (remaining > 0) {
    const digit = remaining % 10;
    // Check before appending, rather than relying on integer overflow.
    if (reversed > Math.floor((limit - digit) / 10)) return 0;
    reversed = reversed * 10 + digit;
    remaining = Math.floor(remaining / 10);
  }
  return reversed === 0 ? 0 : negative ? -reversed : reversed;
}
function runReverseDemo() {
  for (const value of [123, -120, 0, 1534236469, 1463847412, -2147483648]) {
    console.log("Reverse:", value, "| result:", reverseInteger(value));
  }
}
module.exports = { reverseInteger, runReverseDemo };
if (require.main === module) runReverseDemo();
