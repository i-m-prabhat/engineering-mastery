# Day 13: Modules

**Status:** Solutions and learning notes added.

## Goal

Separate code into modules and consume local and third-party exports. For a Node implementation, use `.mjs` or a local package with `type: module`.

## Environment

Node.js 22 or newer with day-local npm dependencies. ES module sources use .mjs; the bundler config uses .cjs.

## Tasks / Activities

1. Export an addition function and import it in another script.
2. Export a person object with properties and methods; import and use it.
3. Export multiple named functions and import them.
4. Export a default function and import it.
5. Import all exports as a namespace and use its constants and functions.
6. Install a third-party utility module, such as Lodash, in this day's own package and use a function.
7. Install a request module, such as Axios, and make a request.
8. Optional: bundle multiple modules with a bundler such as Webpack or Parcel and document the process.

## Feature Requests

- [x] Basic module script.
- [x] Named and default exports demo.
- [x] Third-party module demo.
- [x] Optional bundling demo.

## Check Your Work

Run the importing entry point and confirm every local export works. Document any day-local install and optional bundle commands when implemented.

## Solution Files

- [solutions.mjs](solutions.mjs): runs Tasks 1–7.
- [math.mjs](math.mjs), [person.mjs](person.mjs), and [greeting.mjs](greeting.mjs): reusable named/default exports.
- [local-modules.mjs](local-modules.mjs): basic, named, default, and namespace import demos.
- [third-party-modules.mjs](third-party-modules.mjs): Lodash utility and real Axios HTTP request.
- [bundle-entry.mjs](bundle-entry.mjs) and [webpack.config.cjs](webpack.config.cjs): Task 8 bundling demo.
- [package.json](package.json) and [package-lock.json](package-lock.json): day-local scripts and locked dependencies.
- [.gitignore](.gitignore): excludes this day's generated files.
- [notes.md](notes.md): explanations, common mistakes, and review questions.

## Install and Run

Use Node.js 22 or newer. From the repository root:

```sh
cd "javascript/The-30-Day-Syntax-Shift/Day 13"
npm ci
npm start
npm run demo:local
npm run demo:third-party
npm run build
npm run demo:bundle
```

Installation requires internet access. The default Axios demo makes a real local HTTP request;
after installation, the default demos and build run without public internet.
The local-only module demo also runs before installation with node local-modules.mjs.

Optional public API request:

```sh
npm run demo:live
```

Expected highlights:

- Imported addition returns 13; named addition/subtraction return 10 and 6.
- The exported person's method returns Hello, Prabhat!
- The default import returns Welcome, Prabhat!
- The namespace exposes DEFAULT_FACTOR = 1 and multiplication returns 15.
- Lodash produces [1, 2, 3] from repeated input values.
- Axios reads Local module practice post from the local server, then catches an expected HTTP 404.
- Webpack creates dist/bundle.cjs.
- The bundled program prints Welcome, Prabhat!, addition 13, and multiplication 15.

Generated dependencies and bundles are ignored. Commit the manifest and lockfile, not node_modules or dist.
Unexpected async failures set a nonzero exit code.

## Documentation

- [Lodash](https://lodash.com/)
- [Axios](https://axios-http.com/docs/intro)
- [Webpack getting started](https://webpack.js.org/guides/getting-started/)

[Back to the 30-day roadmap](../README.md)
