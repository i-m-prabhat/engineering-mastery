"use strict";

function validateWord(word) {
  if (typeof word !== "string" || word.length === 0) throw new TypeError("words must be nonempty strings");
  for (const character of word) {
    if (character < "a" || character > "z") throw new RangeError("words must contain lowercase ASCII letters");
  }
}
function ladderLength(beginWord, endWord, wordList) {
  validateWord(beginWord); validateWord(endWord);
  if (!Array.isArray(wordList)) throw new TypeError("wordList must be an array");
  if (beginWord.length !== endWord.length) throw new RangeError("word lengths must match");
  for (const word of wordList) {
    validateWord(word);
    if (word.length !== beginWord.length) throw new RangeError("dictionary word lengths must match");
  }
  // Explicit zero-change convention: one word, even if absent from dictionary.
  if (beginWord === endWord) return 1;
  const remaining = new Set(wordList);
  if (!remaining.has(endWord)) return 0;
  remaining.delete(beginWord);
  const queue = [[beginWord, 1]];
  let head = 0;
  while (head < queue.length) {
    const [word, length] = queue[head++];
    for (let index = 0; index < word.length; index++) {
      for (let code = 97; code <= 122; code++) {
        const character = String.fromCharCode(code);
        if (character === word[index]) continue;
        const next = word.slice(0, index) + character + word.slice(index + 1);
        if (!remaining.has(next)) continue;
        if (next === endWord) return length + 1;
        remaining.delete(next); // Mark visited when enqueueing, not after processing.
        queue.push([next, length + 1]);
      }
    }
  }
  return 0;
}
function runLadderDemo() {
  console.log("Word Ladder hit -> cog:", ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
  console.log("Missing end:", ladderLength("hit", "cog", ["hot", "dot", "dog"]));
  console.log("Unreachable end:", ladderLength("hit", "cog", ["cog"]));
  console.log("Direct step:", ladderLength("a", "c", ["a", "b", "c"]));
  console.log("Already equal:", ladderLength("same", "same", []));
}
module.exports = { ladderLength, runLadderDemo };
if (require.main === module) runLadderDemo();
