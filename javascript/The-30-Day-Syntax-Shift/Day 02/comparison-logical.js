"use strict";

// Feature 2: comparisons, equality, and decisions using boolean conditions.
for (const [left, right] of [[10, 3], [5, 5], [0, 0], [-2, 3]]) {
  console.log(`Compare ${left} and ${right}`);
  console.log(">:", left > right, "<:", left < right);
  console.log(">=:", left >= right, "<=:", left <= right);
  console.log("===:", left === right);
}

console.log("5 == string 5:", 5 == "5");
console.log("5 === string 5:", 5 === "5");
console.log("5 === 5:", 5 === 5);

// Run all four boolean combinations to make AND/OR behavior visible.
for (const hasTicket of [false, true]) {
  for (const isMember of [false, true]) {
    console.log(
      `ticket=${hasTicket}, member=${isMember}`,
      "| AND:", hasTicket && isMember,
      "| OR:", hasTicket || isMember,
      "| NOT ticket:", !hasTicket,
    );
  }
}

const age = 20;
const hasTicket = true;
const isMember = false;
const canEnter = age >= 18 && (hasTicket || isMember);
console.log("Adult with a ticket or membership can enter:", canEnter);

// AND/OR return operands, which are not necessarily booleans.
console.log("Empty name fallback:", "" || "Guest");
console.log("AND operand result:", "ready" && "start");
