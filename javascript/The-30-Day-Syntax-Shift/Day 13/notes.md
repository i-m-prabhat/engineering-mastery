# Day 13 Notes: Modules

## 1. A module has its own scope

Modules split a program into smaller files with explicit imports and exports. A variable in math.mjs does not automatically become available in another file.

This day uses ES modules. The .mjs extension makes a file an ES module in Node.js. The day-local package also declares type: module, which applies to .js files within its scope. It does not change sibling days.

CommonJS .cjs files keep their own format. That is why webpack.config.cjs can use require and __dirname.

## 2. Named exports

```js
// math.mjs
export function add(first, second) {
  return first + second;
}
// another module
import { add } from "./math.mjs";
```

The braces select an exported name. Named imports can be aliased with as. Include the relative prefix and file extension for local Node.js ES module imports.

An exported object can contain both data and methods, as person.mjs demonstrates. Imported bindings are read-only from the importer's perspective, but the exported object itself is not automatically frozen.

## 3. Default exports

A module can have one default export, alongside any named exports.

```js
import welcome from "./greeting.mjs";
```

No braces are used for the default import. The importer chooses the local name: welcome refers to the function exported as default. A default import is not a namespace of every exported value.

## 4. Namespace imports

```js
import * as math from "./math.mjs";
console.log(math.DEFAULT_FACTOR);
console.log(math.multiply(5, 3));
```

The namespace exposes exported bindings under their export names. It does not expose every internal variable, nor is it a normal mutable bag of copies. ES module imports are live bindings.

## 5. Local files versus installed packages

A relative specifier such as ./math.mjs points to a file. A bare specifier such as axios identifies an installed package resolved by Node.js.

The package manifest describes this day's scripts and dependency requirements. The lockfile records the resolved dependency tree. Commit both; do not commit node_modules.

Run npm ci after cloning when a lockfile exists. It installs that locked tree and requires package.json and the lockfile to agree. Installation needs registry access; the default demos need no internet afterward.

## 6. Third-party imports

Lodash supplies the uniq utility used to remove duplicate primitive values while preserving first occurrence order. Its CommonJS package is imported through a default import here.

Axios supplies an HTTP client. The demo makes a real request to a temporary local server by default, then exercises a 404 response. Axios rejects non-success HTTP statuses by default, unlike fetch's default status behavior.

The optional --live flag requests a public practice post. Live failures propagate to the entry-point error handler; they are not silently replaced with local data.

The temporary server closes in finally, and requests have a five-second timeout. Third-party package APIs still require explicit error handling.

## 7. Run code only when intended

Importing a module evaluates its top-level statements. Keep reusable modules free of unintended startup actions.

The demo entry files compare import.meta.url with the file URL of process.argv[1] before running their demo. Importing them for checks therefore does not start a server or print every demonstration.

solutions.mjs uses a dynamic import to load the third-party demo after local examples. Dynamic import returns a promise. Normal static imports are declared at module level.

## 8. Bundle multiple modules

Webpack starts at bundle-entry.mjs, follows its local imports, and emits dist/bundle.cjs. The target is Node.js, so run the bundle with Node, not in a browser.

The build bundles the local arithmetic and greeting modules into one artifact. It does not bundle every script in this directory or convert the whole repository.

Production mode enables build optimizations. Bundling is separate from installing packages and from running source modules. Node can run these ES modules directly without a bundler.

## 9. Generated files and Git

The shared challenge .gitignore applies to all day folders. Day 13 also includes a self-contained .gitignore for its dependencies, output, logs, coverage, and private environment files.

Keep these tracked: source modules, notes, package.json, package-lock.json, and webpack configuration. Keep these untracked: node_modules, dist, logs, and .env files. A documented .env.example remains trackable.

Ignore rules do not untrack files already committed or staged. Do not ignore the lockfile.

## Common mistakes

- Forgetting ./ or the extension in a local import.
- Using named-import braces for a default export.
- Assuming a namespace includes private module variables.
- Mixing require into an ES module without accounting for its format.
- Expecting an imported object to be frozen.
- Installing packages at the repository root instead of in this day.
- Committing node_modules or a generated bundle.
- Editing the manifest without updating the lockfile.
- Assuming a Node-targeted bundle is a browser page.

## Quick review

1. How do named and default imports differ?
2. Why does the webpack config use .cjs?
3. Which files should be committed after npm install?
4. Why does the default Axios request work without public internet?
5. How does Axios handle an HTTP 404 by default?
6. What does the bundler's entry point control?
7. Does .gitignore remove previously tracked files?

Run the local demo, the third-party demo, then the build and bundled output.
