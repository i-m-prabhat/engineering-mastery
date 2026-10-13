# Contributing

Thanks for helping make software engineering easier to learn. Contributions can be small: a typo fix, a clearer explanation, a useful example, or a well-scoped exercise all help.

## Before you start

- For a small correction, feel free to open a pull request directly.
- For a new lesson, a major rewrite, or a new topic area, open an issue first to discuss the scope and avoid duplicated work.
- If an issue is marked as available, leave a comment that you are working on it before starting.

## Ways to contribute

- Fix spelling, grammar, or confusing explanations.
- Add examples that learners can run and experiment with.
- Create exercises with clear requirements and expected results.
- Improve lesson navigation or the getting-started instructions.
- Suggest the next topic in the learning path.

Beginner-friendly contributions are especially welcome. You do not need to be an expert to point out a confusing step or suggest a better explanation.

## Lesson format

Keep lessons focused and approachable. Where appropriate, include:

1. A short title and a plain-language explanation of the goal.
2. Concepts introduced in small steps, with runnable examples.
3. Common mistakes or important edge cases.
4. Exercises with clear instructions and expected output or test cases.
5. A "Your turn" section explaining how to run the code and practice.

Follow the structure and tone of the existing lessons in `javascript/`. Keep examples dependency-free unless a lesson explains why a dependency is needed. Don't include answers inline in exercises; keep learner solutions separate from the exercise prompts.

## Submitting a change

1. Create a branch for your change.
2. Make the smallest focused change that addresses the issue or improvement.
3. Run any affected JavaScript examples or exercises with Node.js. For example:

   ```sh
   node javascript/01-basics/examples.js
   node javascript/02-conditions/examples.js
   ```

4. Review your diff and make sure it contains only the intended changes.
5. Open a pull request with a clear summary, the reason for the change, and the checks you ran. Link the related issue when there is one.

For documentation-only changes, describe how you checked the instructions and links. There is no automated test suite or package installation requirement for the current lessons.

## Review

Maintainers may ask for clarification or revisions to keep material accurate, beginner-friendly, and consistent with the project. Please be kind and constructive during review; changes are collaborative.
