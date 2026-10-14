# Day 19 Notes: Regular Expressions

## 1. Patterns describe text

A regular expression describes characters and repetition rules to search, validate, extract, or replace text. A literal looks like /pattern/flags.

This lesson's helpers accept strings and reject other types instead of silently coercing them.

## 2. test answers an existence question

/\d/u.test(text) returns whether text contains an ASCII digit anywhere. The pattern is not anchored, so Day 19 matches.

In JavaScript, \d means digits 0–9, not every Unicode numeral. The u flag enables Unicode-aware pattern interpretation; it does not change \d into all possible numeric characters.

Use a non-global pattern for repeated boolean checks unless you deliberately manage its state.

## 3. match extracts number tokens

The extraction pattern is [+-]?\d+(?:\.\d+)? with global matching.

| Part | Meaning |
| --- | --- |
| [+-]? | Optional plus or minus sign |
| \d+ | One or more ASCII digits |
| (?:...) | Noncapturing group |
| \. | A literal decimal point |
| (?:\.\d+)? | Optional fractional part |

The helper returns matching strings such as 12, -3.5, and +2. It preserves signs and spelling; it does not convert tokens to Number values.

No matches produce null from match, which the helper converts to [] using ??.

This is a limited token extractor, not a complete numeric parser. It expects digits before a decimal point and does not understand scientific notation, thousands separators, or locale-specific decimal commas. Such text may be split into smaller matches. Define input grammar before relying on extracted results.

## 4. Anchors and username rules

^ anchors the beginning and $ anchors the end when the multiline flag is absent. The practice rule is:

- Length 3–16.
- First character is an ASCII letter.
- Remaining characters are ASCII letters, digits, or underscore.
- No spaces, hyphens, or line breaks.

The first character plus {2,15} remaining characters gives the total range.

JavaScript's $ can also match just before a final line terminator. The validator additionally checks match[0] === text so a trailing newline cannot sneak through. It does not trim or silently repair input.

These are exercise rules, not a universal username policy.

## 5. Capture groups extract date fields

The format pattern has three capturing groups: four digits, two digits, two digits, separated by hyphens.

exec returns the full match at index 0 and groups at indices 1–3. Destructuring skips the full match and names the year/month/day strings. Keeping them as strings preserves leading zeros.

A format match only establishes YYYY-MM-DD spelling. 2026-02-30 matches that format but is not a valid calendar date.

The separate isCalendarDate helper checks month lengths and Gregorian leap years, for years 0001–9999. It does not rely on Date automatically normalizing invalid dates.

## 6. replace normalizes whitespace

/\s+/gu matches runs of JavaScript-regex whitespace, including spaces, tabs, and line breaks. replace turns each run into one ordinary space; trim removes the resulting outer whitespace.

This intentionally flattens paragraphs and indentation. Do not apply it to text where line breaks or formatting must be preserved.

The empty string and whitespace-only text both normalize to empty text.

## 7. Flags

| Flag | Effect used here |
| --- | --- |
| g | Find all matches and maintain lastIndex during test/exec |
| i | Case-insensitive matching |
| u | Unicode-aware pattern interpretation |

Without g, string.match returns the first match with capture details. With g, it returns full matched substrings without the same capture-group array shape. Use exec or matchAll when you need groups for multiple matches.

## 8. Global patterns have state

A reused /\d/g pattern advances lastIndex after a successful test. Testing "7" once succeeds; testing it again begins after that digit and fails, resetting lastIndex to zero.

Reset lastIndex explicitly when reusing such a pattern, or avoid g for simple existence checks. The feature demo shows the true/false sequence and a reset.

Each extraction helper call creates a fresh pattern literal, avoiding shared lastIndex state.

## 9. Escape carefully

A dot means any character except line terminators unless escaped. Use \. to require an actual period.

A RegExp constructor string needs an additional level of JavaScript escaping: new RegExp("\\d+") represents a digit pattern. Prefer regex literals for fixed patterns in this lesson.

Do not insert arbitrary user text directly into a regex pattern unless you deliberately escape its metacharacters. These examples use fixed patterns.

## Common mistakes

- Forgetting anchors for a whole-input rule.
- Assuming $ always prevents a trailing newline.
- Using . when a literal decimal point is intended.
- Confusing capturing and noncapturing groups.
- Treating a formatted date as proof of a valid date.
- Reusing a global test without understanding lastIndex.
- Assuming \d matches every Unicode numeral.
- Flattening whitespace in content where formatting matters.

## Quick review

1. What is the difference between test and match?
2. Why does username validation compare the full match with input?
3. Why does {2,15} produce total lengths 3–16 here?
4. Does YYYY-MM-DD matching guarantee a real date?
5. Why does a reused global test sometimes alternate results?
6. Which whitespace does normalization remove or replace?
7. Which numeric formats does this extractor deliberately not parse?

Run matching and nonmatching examples, then inspect the exact patterns.
