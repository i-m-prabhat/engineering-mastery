"use strict";

function maxArea(heights) {
  if (!Array.isArray(heights)) throw new TypeError("heights must be an array");
  for (const height of heights) {
    if (!Number.isFinite(height) || height < 0) throw new RangeError("heights must be finite nonnegative numbers");
  }
  let left = 0;
  let right = heights.length - 1;
  let best = 0;
  while (left < right) {
    best = Math.max(best, Math.min(heights[left], heights[right]) * (right - left));
    // Keeping the shorter wall and shrinking width cannot improve its limit.
    if (heights[left] <= heights[right]) left++;
    else right--;
  }
  return best;
}
function runContainerDemo() {
  for (const heights of [[1, 8, 6, 2, 5, 4, 8, 3, 7], [1, 1], [0, 0], [], [7]]) {
    console.log("Container heights:", heights, "| max area:", maxArea(heights));
  }
}
module.exports = { maxArea, runContainerDemo };
if (require.main === module) runContainerDemo();
