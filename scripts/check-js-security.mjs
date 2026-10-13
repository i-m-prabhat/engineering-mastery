#!/usr/bin/env node
/**
 * Dependency-free security guardrails for JavaScript lesson files.
 * This is a lightweight pattern check, not a substitute for code review or SAST.
 */
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("javascript");
const extensions = new Set([".js", ".mjs", ".cjs"]);
const findings = [];

const rules = [
  {
    id: "JSSEC001",
    description: "Avoid dynamic code execution with eval()",
    pattern: /\beval\s*\(/g,
  },
  {
    id: "JSSEC002",
    description: "Avoid Function constructor-based dynamic code execution",
    pattern: /\bnew\s+Function\s*\(|\bFunction\s*\(/g,
  },
  {
    id: "JSSEC004",
    description: "Review potentially unsafe DOM HTML injection via innerHTML",
    pattern: /\.innerHTML\s*=/g,
  },
  {
    id: "JSSEC005",
    description: "Avoid document.write() in lesson code",
    pattern: /\bdocument\s*\.\s*write\s*\(/g,
  },
];

const secretRules = [
  {
    id: "JSSEC006",
    description: "Possible private key material",
    pattern: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g,
  },
  {
    id: "JSSEC007",
    description: "Possible hard-coded provider token or credential",
    pattern: /\b(?:gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|AKIA[0-9A-Z]{16}|xox[baprs]-[A-Za-z0-9-]{20,}|sk_live_[A-Za-z0-9]{16,})\b/g,
  },
];

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath)));
    } else if (entry.isFile() && extensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

// Mask comments and string/template contents while preserving line numbers and
// code outside them. This reduces false positives from explanatory comments.
function maskCommentsAndStrings(source) {
  let result = "";
  let state = "code";
  let escaped = false;

  for (let i = 0; i < source.length; i += 1) {
    const current = source[i];
    const next = source[i + 1];

    if (state === "line-comment") {
      if (current === "\n") {
        result += "\n";
        state = "code";
      } else {
        result += " ";
      }
      continue;
    }

    if (state === "block-comment") {
      if (current === "*" && next === "/") {
        result += "  ";
        i += 1;
        state = "code";
      } else {
        result += current === "\n" ? "\n" : " ";
      }
      continue;
    }

    if (state === "single" || state === "double" || state === "template") {
      if (current === "\n") {
        result += "\n";
      } else {
        result += " ";
      }

      if (escaped) {
        escaped = false;
      } else if (current === "\\") {
        escaped = true;
      } else if (
        (state === "single" && current === "'") ||
        (state === "double" && current === '"') ||
        (state === "template" && current === "`")
      ) {
        state = "code";
      }
      continue;
    }

    if (current === "/" && next === "/") {
      result += "  ";
      i += 1;
      state = "line-comment";
    } else if (current === "/" && next === "*") {
      result += "  ";
      i += 1;
      state = "block-comment";
    } else if (current === "'") {
      result += " ";
      state = "single";
      escaped = false;
    } else if (current === '"') {
      result += " ";
      state = "double";
      escaped = false;
    } else if (current === "`") {
      result += " ";
      state = "template";
      escaped = false;
    } else {
      result += current;
    }
  }

  return result;
}

function lineAt(source, index) {
  return source.slice(0, index).split("\n").length;
}

async function main() {
  let files;
  try {
    files = await collectFiles(root);
  } catch (error) {
    console.error(`Unable to scan JavaScript lessons at ${root}: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  if (files.length === 0) {
    console.error("No JavaScript lesson source files found.");
    process.exitCode = 1;
    return;
  }

  for (const file of files.sort()) {
    const source = await readFile(file, "utf8");
    const executableSource = maskCommentsAndStrings(source);
    const relativePath = path.relative(process.cwd(), file);

    for (const rule of rules) {
      rule.pattern.lastIndex = 0;
      for (const match of executableSource.matchAll(rule.pattern)) {
        findings.push({
          file: relativePath,
          line: lineAt(executableSource, match.index),
          id: rule.id,
          description: rule.description,
        });
      }
    }

    for (const rule of secretRules) {
      rule.pattern.lastIndex = 0;
      for (const match of source.matchAll(rule.pattern)) {
        findings.push({
          file: relativePath,
          line: lineAt(source, match.index),
          id: rule.id,
          description: rule.description,
        });
      }
    }
  }

  if (findings.length > 0) {
    console.error("JavaScript lesson security checks found patterns that need review:");
    for (const finding of findings) {
      console.error(`::error file=${finding.file},line=${finding.line}::[${finding.id}] ${finding.description}`);
    }
    console.error("\nRemove the unsafe pattern or replace it with a safe teaching example before merging.");
    process.exitCode = 1;
    return;
  }

  console.log(`Security pattern checks passed for ${files.length} JavaScript lesson file(s).`);
  console.log("Note: these lightweight checks do not replace security review or comprehensive static analysis.");
}

await main();
