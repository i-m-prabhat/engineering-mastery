"use strict";

function threeSum(values) {
  if (!Array.isArray(values)) throw new TypeError("values must be an array");
  for (const value of values) {
    if (!Number.isInteger(value) || value < -2147483648 || value > 2147483647) {
      throw new RangeError("values must be signed 32-bit integers");
    }
  }
  const nums = [...values].sort((a, b) => a - b);
  const triplets = [];
  for (let first = 0; first < nums.length - 2; first++) {
    if (first > 0 && nums[first] === nums[first - 1]) continue;
    if (nums[first] > 0) break;
    let left = first + 1;
    let right = nums.length - 1;
    while (left < right) {
      const total = nums[first] + nums[left] + nums[right];
      if (total < 0) left++;
      else if (total > 0) right--;
      else {
        triplets.push([nums[first], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      }
    }
  }
  return triplets;
}
function runThreeSumDemo() {
  for (const values of [[-1, 0, 1, 2, -1, -4], [0, 0, 0, 0], [], [1, 2, 3], [-2, 0, 0, 2, 2]]) {
    console.log("3Sum:", values, "| triplets:", threeSum(values));
  }
}
module.exports = { threeSum, runThreeSumDemo };
if (require.main === module) runThreeSumDemo();
