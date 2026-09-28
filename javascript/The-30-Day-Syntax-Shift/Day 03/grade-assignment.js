"use strict";

// Feature 4: finite scores from 0 to 100; fractional scores are accepted.
// A: [90,100], B: [80,90), C: [70,80), D: [60,70), F: [0,60).
function assignGrade(score) {
  if (!Number.isFinite(score) || score < 0 || score > 100) {
    return "invalid score";
  }

  switch (true) {
    case score >= 90: return "A";
    case score >= 80: return "B";
    case score >= 70: return "C";
    case score >= 60: return "D";
    default: return "F";
  }
}

for (const score of [0, 59.9, 60, 69.9, 70, 79.9, 80, 89.9, 90, 100, -1, 101, "90", NaN]) {
  console.log("Score:", score, "| grade:", assignGrade(score));
}
