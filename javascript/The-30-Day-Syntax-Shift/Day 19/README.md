# Day 19: Regular Expressions

**Status:** Solutions and learning notes added.

## Goal

Match, extract, and replace text with clearly stated input rules.

## Environment

Node.js 22 or newer. No packages or internet connection are required.

## Tasks / Activities

1. Use `test` to check whether a string contains a digit.
2. Use `match` to extract every number from text.
3. Validate a simple practice username with documented length and character rules.
4. Use capture groups to split a YYYY-MM-DD string into year, month, and day; distinguish format matching from date validation.
5. Use `replace` to normalize repeated whitespace.
6. Demonstrate anchors, character classes, quantifiers, and case-insensitive/global flags.

## Feature Requests

- [x] Text extraction script.
- [x] Practice input validator.
- [x] Whitespace normalization script.

## Check Your Work

Include matching and nonmatching inputs, boundary lengths, and repeated calls with global expressions.

## Solution Files

- [solutions.js](solutions.js): runs all six numbered tasks.
- [regex-utils.js](regex-utils.js): digit checks, number extraction, username/date handling, and whitespace normalization.
- [text-extraction.js](text-extraction.js): test and global match examples.
- [input-validation.js](input-validation.js): username boundaries and date format versus calendar validity.
- [whitespace-normalization.js](whitespace-normalization.js): spaces, tabs, line breaks, and empty input.
- [regex-features.js](regex-features.js): anchors, classes, quantifiers, flags, and lastIndex state.
- [notes.md](notes.md): explanations, limitations, common mistakes, and review questions.

## Run the Solutions

Use Node.js 22 or newer. No packages or internet connection are required.
From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 19/solutions.js"
node "javascript/The-30-Day-Syntax-Shift/Day 19/text-extraction.js"
node "javascript/The-30-Day-Syntax-Shift/Day 19/input-validation.js"
node "javascript/The-30-Day-Syntax-Shift/Day 19/whitespace-normalization.js"
node "javascript/The-30-Day-Syntax-Shift/Day 19/regex-features.js"
```

Expected highlights:

- Day 19 contains a digit; No digits here does not.
- Number extraction returns string tokens such as 12, -3.5, and +2; no matches returns [].
- Usernames require 3–16 ASCII characters, starting with a letter, followed by letters/digits/underscore.
- Trailing newlines, spaces, leading digits, and out-of-range lengths fail validation.
- 2026-02-30 matches the date format but fails calendar validation; 2024-02-29 passes both.
- Tabs, line breaks, and repeated spaces normalize into single spaces with outer whitespace trimmed.
- A reused global digit test on 7 returns true then false; resetting lastIndex restores true.
- Case-insensitive global matching finds cat, CAT, and cat.

The number extractor supports signed integers and decimals with digits before the decimal point.
It is not a general numeric parser. Whitespace normalization intentionally removes line formatting.

[Back to the 30-day roadmap](../README.md)
