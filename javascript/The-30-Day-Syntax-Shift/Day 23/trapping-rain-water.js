"use strict";

function trap(heights) {
  if (!Array.isArray(heights)) throw new TypeError("heights must be an array");
  for (const height of heights) {
    if (!Number.isSafeInteger(height) || height < 0) throw new RangeError("heights must be nonnegative safe integers");
  }
  let left = 0;
  let right = heights.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;
  while (left < right) {
    if (heights[left] <= heights[right]) {
      leftMax = Math.max(leftMax, heights[left]);
      water += leftMax - heights[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, heights[right]);
      water += rightMax - heights[right];
      right--;
    }
  }
  return water;
}
function runRainDemo() {
  for (const heights of [[4, 2, 0, 3, 2, 5], [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], [], [2], [1, 2, 3], [3, 0, 3]]) {
    console.log("Rain heights:", heights, "| trapped:", trap(heights));
  }
}
module.exports = { trap, runRainDemo };
if (require.main === module) runRainDemo();
