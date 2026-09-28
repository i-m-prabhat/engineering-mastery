"use strict";

// Feature 2: a simplified practice rule, not a full election rules model.
function checkVotingEligibility(age) {
  if (!Number.isInteger(age) || age < 0) return "invalid age";
  if (age >= 18) return "eligible";
  return "not eligible";
}

for (const age of [0, 17, 18, 20, -1, 17.5, "18", NaN]) {
  console.log("Age:", age, "| voting:", checkVotingEligibility(age));
}
