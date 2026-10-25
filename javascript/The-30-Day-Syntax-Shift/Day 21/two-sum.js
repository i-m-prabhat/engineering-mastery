"use strict";

// Inputs: signed 32-bit integers. Return one pair, or [] when absent.
function twoSum(nums, target) {
  if (!Array.isArray(nums) || !Number.isInteger(target) || target < -2147483648 || target > 2147483647) {
    throw new TypeError("expected an array and a signed 32-bit integer target");
  }
  const seen = new Map();
  for (let index = 0; index < nums.length; index++) {
    const value = nums[index];
    if (!Number.isInteger(value) || value < -2147483648 || value > 2147483647) {
      throw new TypeError("array values must be signed 32-bit integers");
    }
    const complement = target - value;
    if (seen.has(complement)) return [seen.get(complement), index];
    seen.set(value, index);
  }
  return [];
}
function runTwoSumDemo() {
  for (const [nums, target] of [[[2, 7, 11, 15], 9], [[3, 2, 4], 6], [[3, 3], 6], [[-3, 0, 3], 0], [[1], 2], [[], 9]]) {
    console.log("Two Sum:", nums, "| target:", target, "| indices:", twoSum(nums, target));
  }
}
module.exports = { twoSum, runTwoSumDemo };
if (require.main === module) runTwoSumDemo();
