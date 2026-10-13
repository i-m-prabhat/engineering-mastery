# Contributing

Thanks for helping make software engineering easier to learn. A typo fix, clearer explanation, useful example, or well-scoped exercise can make a real difference.

## Before you start

- For a small correction, you can open a pull request directly.
- For a new lesson, a major rewrite, or a new topic area, open an issue first to agree on scope and avoid duplicate work.
- Check existing issues and roadmap items before beginning.
- If an issue is marked as available, comment that you are working on it.

## Ways to contribute

- Fix spelling, grammar, confusing explanations, or broken links.
- Add examples that learners can run and experiment with.
- Create exercises with clear requirements and expected results.
- Improve navigation, accessibility, and getting-started instructions.
- Suggest a topic or contribute a new lesson.
- Review examples for edge cases and correctness.

Beginner-friendly contributions are welcome. You do not need to be an expert to identify a confusing step or suggest a clearer explanation.

## Lesson format

Use [the lesson template](docs/LESSON_TEMPLATE.md) as a guide. Where relevant, include:

1. Learning objectives and prerequisites.
2. Plain-language explanation in small steps.
3. Runnable examples and expected output.
4. Real-world context and common mistakes.
5. Exercises with clear requirements or test cases.
6. Separate solutions with explanations.
7. Further reading, preferably official documentation.

Follow the existing lessons' approachable tone. Keep examples dependency-free unless a dependency is part of the lesson. Do not reveal answers directly beside exercise prompts.

## Local validation

Install Node.js 22 or a compatible current LTS release, then run the current examples:

```sh
node --check javascript/01-basics/examples.js
node javascript/01-basics/examples.js
node --check javascript/02-conditions/examples.js
node javascript/02-conditions/examples.js
node scripts/check-js-security.mjs
```

For all JavaScript lesson files, you can check syntax with:

```sh
find javascript -type f -name '*.js' -print0 | xargs -0 -n1 node --check
```

Pull requests run GitHub Actions to check JavaScript syntax, flag selected risky coding patterns and likely hard-coded credentials, and smoke-test each `examples.js` file. The security pattern check is intentionally lightweight: it is not a full static analyzer and does not replace review or secret scanning. If your change is documentation-only, check the affected links and instructions.

## Submitting a change

1. Create a focused branch.
2. Make the smallest change that addresses the issue.
3. Run relevant examples and checks.
4. Review the diff for unrelated edits, secrets, and generated files.
5. Open a pull request with a clear summary, rationale, and validation details.
6. Link the related issue where applicable.

## Review

Maintainers may request revisions to keep content accurate, beginner-friendly, and consistent. Please be kind and constructive; changes are collaborative.
