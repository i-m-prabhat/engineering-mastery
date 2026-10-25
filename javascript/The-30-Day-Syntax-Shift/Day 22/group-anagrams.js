"use strict";

// Lowercase ASCII words, including empty strings; preserve all duplicates.
function groupAnagrams(words) {
  if (!Array.isArray(words)) throw new TypeError("words must be an array");
  const groups = new Map();
  for (const word of words) {
    if (typeof word !== "string") throw new TypeError("each word must be a string");
    const counts = Array(26).fill(0);
    for (const character of word) {
      if (character < "a" || character > "z") throw new RangeError("words must contain lowercase ASCII letters only");
      counts[character.charCodeAt(0) - 97]++;
    }
    const key = counts.join(","); // Delimiters avoid ambiguous count strings.
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(word);
  }
  return [...groups.values()];
}
function runAnagramDemo() {
  for (const words of [["eat", "tea", "tan", "ate", "nat", "bat"], [""], [], ["a", "a"], ["ab", "ba", "abc"]]) {
    console.log("Group anagrams:", words, "| groups:", groupAnagrams(words));
  }
}
module.exports = { groupAnagrams, runAnagramDemo };
if (require.main === module) runAnagramDemo();
