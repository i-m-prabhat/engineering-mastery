"use strict";

// Feature 5: apply the Gregorian rule to positive safe-integer years.
// The demo does not model the historical adoption of calendar systems.
function checkLeapYear(year) {
  if (!Number.isSafeInteger(year) || year < 1) return "invalid year";

  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
}

for (const year of [1900, 2000, 2023, 2024, 2100, 2400, 0, -4, 2024.5, "2024"]) {
  console.log("Year:", year, "| leap year:", checkLeapYear(year));
}
