"use strict";

// Counts Unicode code points, not UTF-16 units or full grapheme clusters.
function lengthOfLongestSubstring(text) {
  if (typeof text !== "string") throw new TypeError("text must be a string");
  const characters = Array.from(text);
  const lastSeen = new Map();
  let start = 0;
  let best = 0;
  for (let end = 0; end < characters.length; end++) {
    const character = characters[end];
    if (lastSeen.has(character)) start = Math.max(start, lastSeen.get(character) + 1);
    lastSeen.set(character, end);
    best = Math.max(best, end - start + 1);
  }
  return best;
}
function runSubstringDemo() {
  for (const text of ["abcabcbb", "bbbbb", "pwwkew", "abba", "", "😀a😀b"]) {
    console.log("Longest unique substring:", JSON.stringify(text), "| length:", lengthOfLongestSubstring(text));
  }
}
module.exports = { lengthOfLongestSubstring, runSubstringDemo };
if (require.main === module) runSubstringDemo();
