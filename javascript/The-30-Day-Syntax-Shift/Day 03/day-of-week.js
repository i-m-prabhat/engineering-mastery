"use strict";

// Feature 3: Monday = 1 through Sunday = 7.
// switch uses strict matching: the string "1" is not the number 1.
function getWeekday(day) {
  switch (day) {
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    case 7: return "Sunday";
    default: return "invalid day";
  }
}

for (const day of [1, 2, 3, 4, 5, 6, 7, 0, 8, 2.5, "1"]) {
  console.log("Day:", day, "| weekday:", getWeekday(day));
}
