"use strict";

// Feature 4: sum the integers from 1 through a nonnegative integer limit.
// The bound keeps the exact integer sum within Number.MAX_SAFE_INTEGER.
function sumThrough(limit) {
  if (!Number.isSafeInteger(limit) || limit < 0 || limit > 134217727) {
    throw new RangeError("limit must be an integer from 0 through 134217727");
  }

  let current = 1;
  let total = 0;
  while (current <= limit) {
    total += current;
    current++;
  }
  return total;
}

for (const limit of [0, 1, 10]) {
  console.log(`Sum 1 through ${limit}:`, sumThrough(limit));
}

for (const invalid of [-1, 2.5, "10"]) {
  try {
    sumThrough(invalid);
  } catch (error) {
    console.log("Invalid limit:", invalid, "|", error.name);
  }
}
