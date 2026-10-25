"use strict";

// Feature 1: display a collection of values and their types.
const samples = [
  { label: "number", value: 42 },
  { label: "string", value: "42" },
  { label: "boolean", value: false },
  { label: "object", value: { topic: "JavaScript" } },
  { label: "array", value: [1, 2, 3] },
  { label: "undefined", value: undefined },
  { label: "null", value: null },
  { label: "bigint", value: 42n },
  { label: "symbol", value: Symbol("id") },
];

for (const sample of samples) {
  console.log(sample.label, "| value:", sample.value, "| typeof:", typeof sample.value);
}

console.log("Array check:", Array.isArray(samples[4].value));
console.log("Null check:", samples[6].value === null);
