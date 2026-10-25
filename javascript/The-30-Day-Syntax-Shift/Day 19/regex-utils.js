"use strict";

function requireText(value) {
  if (typeof value !== "string") throw new TypeError("expected a string");
}

// Task 1: ASCII digit anywhere; no global flag, so repeated tests are stable.
function containsDigit(text) {
  requireText(text);
  return /\d/u.test(text);
}

// Task 2: signed integers/decimals with digits before the decimal point.
// Returns text tokens, preserving their spelling rather than coercing numbers.
function extractNumbers(text) {
  requireText(text);
  return text.match(/[+-]?\d+(?:\.\d+)?/gu) ?? [];
}

// Task 3: 3–16 ASCII characters, first a letter; then letters/digits/underscore.
function isPracticeUsername(text) {
  requireText(text);
  const match = /^[A-Za-z][A-Za-z0-9_]{2,15}$/u.exec(text);
  // $ can also match before a final newline; require the entire input match.
  return match !== null && match[0] === text;
}

// Task 4: format extraction does not establish calendar validity.
function extractDateParts(text) {
  requireText(text);
  const match = /^(\d{4})-(\d{2})-(\d{2})$/u.exec(text);
  if (!match || match[0] !== text) return null;
  const [, year, month, day] = match;
  return { year, month, day };
}

// Optional semantic check, separate from the format-matching exercise.
function isCalendarDate(text) {
  const parts = extractDateParts(text);
  if (!parts) return false;
  const year = Number(parts.year);
  const month = Number(parts.month);
  const day = Number(parts.day);
  if (year < 1 || month < 1 || month > 12 || day < 1) return false;
  const leap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const days = [31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return day <= days[month - 1];
}

// Task 5: collapse all JS-regex whitespace runs, then trim the outer edges.
function normalizeWhitespace(text) {
  requireText(text);
  return text.replace(/\s+/gu, " ").trim();
}

module.exports = { containsDigit, extractNumbers, isPracticeUsername,
  extractDateParts, isCalendarDate, normalizeWhitespace };
