# Engineering Mastery

A practical, open-source path to learning software engineering — one concept, runnable example, and exercise at a time.

The goal is not to collect notes. It is to build understanding through small lessons, practice, and the engineering habits used to ship reliable software.

## The 30-Day Syntax Shift

[Start the 30-day JavaScript challenge](javascript/The-30-Day-Syntax-Shift/README.md) and learn by building, from variables and functions to algorithms and complete apps. Every day includes challenges, runnable solutions, learning notes, and setup instructions.

[Begin Day 01: Variables and Data Types](javascript/The-30-Day-Syntax-Shift/Day%2001/README.md), or choose a day from the challenge roadmap.

## Start here

1. Install [Node.js](https://nodejs.org/) (the current LTS version is recommended).
2. Clone this repository and open a terminal in its root.
3. Run an example:

   ```sh
   node javascript/01-basics/examples.js
   ```

4. Read the lesson README, try the exercises, and compare your work with the separate solutions file.

The introductory JavaScript lessons require no packages. For challenge projects, follow the setup instructions in each day's README.

## Learning tracks

### Available lessons

- **JavaScript**
  - [01 — First program, variables, and data types](javascript/01-basics/README.md)
  - [02 — Conditions, comparisons, and decisions](javascript/02-conditions/README.md)
- **Artificial intelligence**
  - [01 — AI terminology, capabilities, and limitations](ai/01-terminology/README.md)
  - [02 — Machine learning data, training, validation, and testing](ai/02-data-training-validation-testing/README.md)
  - [03 — Model metrics, baselines, and error analysis](ai/03-metrics-baselines-error-analysis/README.md)

### Planned tracks

These tracks are roadmap goals. Content will be added incrementally; a directory or roadmap item does not mean the full track is already complete.

| Track | What it will cover | Status |
| --- | --- | --- |
| JavaScript | Fundamentals, functions, arrays, objects, async programming, event loop | In progress |
| TypeScript | Type system, narrowing, generics, utility types, practical patterns | Planned |
| Data structures & algorithms | Complexity, arrays, maps, stacks, trees, graphs, sorting | Planned |
| Backend engineering | Node.js, HTTP, REST APIs, validation, authentication, testing | Planned |
| Databases | SQL, MongoDB, indexes, transactions, query design | Planned |
| System design | Caching, queues, scalability, reliability, distributed systems | Planned |
| Security | OWASP concepts, secure sessions, authorization, API hardening | Planned |
| DevOps | Linux, Docker, CI/CD, deployment, observability | Planned |
| [Cloud](cloud/README.md) | Cloud foundations, core services, deployment, infrastructure as code, cost and reliability | Planned |
| [AI](ai/README.md) | AI and machine learning foundations, model evaluation, generative AI, responsible AI | In progress |

See [ROADMAP.md](ROADMAP.md) for the detailed sequence and progress checklist.

## What a lesson should include

Where relevant, lessons should offer:

- Clear learning objectives and plain-language explanations
- Runnable examples with expected output
- Common mistakes and real-world context
- Exercises with requirements or test cases
- Separate solutions with explanations
- Links to official documentation and further reading

Use [the lesson template](docs/LESSON_TEMPLATE.md) when creating a new lesson.

## Contributing

First-time contributors are welcome. Fix a typo, improve an explanation, add an example, or propose a new lesson.

- Read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting changes.
- Follow our [Code of Conduct](CODE_OF_CONDUCT.md).
- Use the issue forms/templates in `.github/ISSUE_TEMPLATE/` to suggest work or report a problem.
- Pull requests run automated JavaScript syntax checks and example smoke tests.

## Project principles

- **Learn by doing:** explanations are paired with practice.
- **Small, reviewable changes:** prefer focused lessons over giant submissions.
- **Correctness over breadth:** planned topics are clearly marked until content exists.
- **Open collaboration:** feedback should be respectful and beginner-friendly.
- **Keep it approachable:** avoid dependencies unless they teach something important.

## License

Released into the public domain under the [Unlicense](LICENSE).
