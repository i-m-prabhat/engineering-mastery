# Solutions: Data, Training, Validation, and Testing

## 1. Identify fields

| Field | Role | Reason |
| --- | --- | --- |
| Product category at submission | Possible feature | Available at prediction time |
| Eventual escalation outcome | Label | The later outcome to predict |
| Ticket ID | Tracking metadata | Identifies records for auditing and overlap checks |
| Final resolution note | Leakage if used as a feature | Available only after the arrival-time prediction |

A feature's availability does not establish its usefulness. That still requires evaluation.

## 2. Split sizes

- Training: 200 × 0.60 = 120 examples.
- Validation: 200 × 0.20 = 40 examples.
- Testing: 200 × 0.20 = 40 examples.

Use validation for model selection. Reserve test data for evaluation after development choices are fixed. These percentages are an exercise assumption, not a universal rule.

## 3. Missing-value replacement

The training mean is (3 + 6 + 9) / 3 = 6. Replace the missing test input with 6. Using test values to learn the replacement would let evaluation data influence preparation. Apply the same training-derived transformation during later predictions.

## 4. Select and report

Choose C: 18/20 = 90% validation accuracy, compared with D's 80%. Report the selected model's test accuracy as 14/20 = 70%.

This test result does not establish that D is better. Choosing again using test results turns testing into model selection. Investigate the gap without claiming this small sample proves a particular cause. If results guide another development round, obtain an independent final evaluation for the revised approach.

## 5. Example split design

For future tickets from a mixture of existing and new customers, one defensible plan is:

1. Define prediction time as ticket arrival and exclude fields created later.
2. Train on older records whose labels were finalized before validation begins. If exact label-availability timestamps are unavailable, a seven-day gap accommodates the stated maximum delay.
3. Validate on a later month. Wait for its labels to mature before choosing a model. Start the reserved test period after selection, so the simulated workflow could have happened in that order.
4. Identify duplicate clusters. For a clean evaluation, retain the earliest occurrence and exclude later copies under a documented policy. Report that this estimate excludes repeated copies.
5. Allow repeat customers across time if that reflects intended use. Report existing-customer and new-customer results separately when sample sizes permit. For an unseen-customer claim, add an evaluation that excludes test customers from development data while preserving time boundaries.
6. Fit preprocessing only on training records. Record boundaries, exclusions, label definitions, and selection criteria before inspecting final test results.

This evaluation represents specific periods and customer groups. It cannot guarantee performance if future inputs change. Small samples, duplicate exclusions, and incomplete labels limit conclusions. No single split answers every deployment question.

[Return to the chapter](README.md) · [AI track](../README.md)
