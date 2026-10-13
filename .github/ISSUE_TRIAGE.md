# Issue Labels and Triage Guide

This guide describes a small, consistent label set for organizing issues and pull requests. Labels are repository metadata and must be created in GitHub's **Issues → Labels** settings before they can be applied. Issue forms may refer to common labels such as `bug` and `documentation`; check that they exist.

## Recommended labels

| Label | Purpose |
| --- | --- |
| `bug` | Something in an existing example, workflow, or document is incorrect or broken. |
| `documentation` | Improvements to explanations, navigation, or project docs. |
| `good first issue` | A small, clearly scoped task suitable for a first contribution. |
| `help wanted` | A useful task where community help is welcome. |
| `enhancement` | An improvement to project tooling or repository experience. |
| `question` | A question that is not a bug report or concrete feature proposal. |
| `needs-triage` | New issue that has not yet been reviewed. |
| `needs-info` | More details are needed before work can proceed. |
| `duplicate` | The same concern is already tracked elsewhere. |
| `wontfix` | The maintainers have decided not to pursue the request. |

Use the default GitHub label colors or choose accessible colors consistently. Avoid creating near-duplicate labels.

## Triage workflow

1. **Review new reports.** Check whether the issue is reproducible, in scope, and already reported.
2. **Classify it.** Apply one primary type label such as `bug`, `documentation`, `enhancement`, or `question`.
3. **Request missing details.** Apply `needs-info` and ask a focused question when reproduction steps or context are missing.
4. **Identify approachable work.** Add `good first issue` only when the task has a clear scope and enough guidance for a newcomer. Use `help wanted` when broader contributions are welcome.
5. **Discuss large proposals.** Agree on scope before accepting a major new track, workflow, or architectural change.
6. **Close thoughtfully.** Link duplicates, explain out-of-scope decisions, and be respectful.

## Pull-request review

- Check that the change matches the stated goal and does not include unrelated files.
- Review examples and configuration changes for correctness and safety.
- Confirm the applicable GitHub Actions checks have completed.
- Request specific, actionable revisions; do not use labels as a substitute for review feedback.
- Close or merge only when the maintainer is satisfied with the change and required checks.

## Maintainer note

This is a lightweight guide, not an automated label synchronizer. Create and maintain labels in GitHub settings; no label-changing permissions are needed by the quality workflow.
