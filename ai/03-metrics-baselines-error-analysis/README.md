# Model Metrics, Baselines, and Error Analysis

> Track: Artificial intelligence · Level: Beginner

## Learning objectives

- Calculate accuracy, precision, recall, F1, and mean absolute error.
- Compare a candidate model with a simple baseline.
- Explain why different mistakes require different evaluation criteria.
- Investigate errors without turning the test set into tuning data.

## Prerequisites

Read [data, training, validation, and testing](../02-data-training-validation-testing/README.md). You need basic fractions and percentages. All examples are fictional and can be completed on paper; no packages, accounts, API keys, or paid services are required.

## Concept

### 1. Start with the task and the cost of mistakes

A metric summarizes a specific aspect of performance. Choose it before comparing candidates. For a ticket-escalation predictor, missing an urgent ticket and unnecessarily escalating an ordinary ticket have different consequences. Record both errors rather than assuming that overall accuracy captures everything.

### 2. Count classification outcomes

Define **positive** as "needs escalation" and **negative** as "does not need escalation." Positive is a class label, not a judgment that an outcome is good.

| Actual outcome | Predicted escalation | Predicted no escalation |
| --- | --- | --- |
| Needs escalation | True positive (TP) | False negative (FN): missed escalation |
| Does not need escalation | False positive (FP): unnecessary escalation | True negative (TN) |

This table is a confusion matrix. Always label its axes because tools may display it in a different orientation.

| Metric | Formula | Question answered |
| --- | --- | --- |
| Accuracy | (TP + TN) / (TP + TN + FP + FN) | What fraction of all predictions were correct? |
| Precision | TP / (TP + FP) | Of predicted escalations, how many were needed? |
| Recall | TP / (TP + FN) | Of needed escalations, how many were detected? |
| F1 | 2TP / (2TP + FP + FN) | What is the harmonic balance of precision and recall? |

Higher values are better for these metrics, but F1 ignores true negatives and does not encode a business-specific error cost. If a denominator is zero, report the metric as undefined or state the explicit convention used by your tool. Do not silently interpret it as perfect performance.

See Google's [classification metrics guide](https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall) for these definitions.

### 3. Compare with a baseline

A baseline is a simple reference approach. It answers whether added complexity produces a useful improvement.

- For classification, predict the most frequent training label for every example.
- For numerical prediction, use a constant learned from training targets, such as their median when evaluating absolute error.
- For a product feature, also compare against the existing workflow when possible.

Learn baseline values from training data, then evaluate baseline and candidate on the same held-out examples using the same metrics. Never choose the baseline's constant using test labels. The [scikit-learn dummy estimators](https://scikit-learn.org/stable/api/sklearn.dummy.html) provide examples of simple reference predictors.

### 4. Evaluate numerical predictions

Regression predicts a number, such as ticket-resolution time in hours. **Mean absolute error (MAE)** is the average of the absolute differences between actual and predicted values. Lower is better, and the result has the target's units.

For actual times [2, 4, 8] hours and predictions [3, 4, 6], absolute errors are [1, 0, 2]. MAE is (1 + 0 + 2) / 3 = **1 hour**. This does not mean every prediction is within one hour; examine individual errors too. See the [MAE documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.mean_absolute_error.html).

## Worked example: when accuracy hides failure

These invented counts are arithmetic examples, not measurements from a trained model. Assume "no escalation" is the most frequent training label. On 100 held-out fictional tickets, 10 need escalation and 90 do not.

| Approach | TP | TN | FP | FN |
| --- | --- | --- | --- | --- |
| Baseline: always predict no escalation | 0 | 90 | 0 | 10 |
| Candidate | 8 | 82 | 8 | 2 |

Both approaches have 90% accuracy. The baseline misses every needed escalation: recall is 0/10 = 0%, and precision is undefined because it predicts no positives.

The candidate has precision 8/16 = 50%, recall 8/10 = 80%, and F1 16/26 ≈ 61.5%. It catches eight needed escalations while creating eight unnecessary ones. Whether that tradeoff is acceptable depends on the workflow; the accuracy tie alone cannot decide.

If a model produces scores, a decision threshold turns them into class predictions. Lowering the threshold expands the set predicted positive, so recall cannot decrease on the same fixed examples; precision may rise or fall. Choose thresholds using validation data and operational requirements, then freeze them before final testing. A score is not automatically a calibrated probability.

## Error analysis and real-world use

After computing metrics on validation data, inspect examples behind the errors:

1. Record the example ID, reviewed label, prediction, and error type.
2. Group suspected causes, such as ambiguous wording, missing context, or incorrect labels.
3. Check relevant slices such as product category, language, or message length. Report each slice's sample count; tiny groups give unstable estimates.
4. Inspect successful examples too, to avoid explaining every occurrence of a feature as a cause of failure.
5. Choose one change supported by evidence, then compare it against the same baseline on validation data.

For example, several missed escalations containing indirect requests might motivate a review of training coverage. It is a hypothesis to test, not proof that indirect wording caused the errors. Use fictional or appropriately approved records and avoid copying private ticket content into public reports.

Record dataset version, split, model configuration, threshold, class counts, metrics, and limitations. A small score improvement may reflect sampling variation. Keep a final independent test evaluation; if test errors guide more development, treat those records as development feedback and obtain a fresh final evaluation.

## Common mistakes

- Reporting 90% accuracy without class counts: a majority-class baseline may match it.
- Reversing precision and recall: they use different denominators.
- Reporting only F1: it hides true-negative performance and the separate error types.
- Comparing models on different examples: the score difference may come from dataset difficulty.
- Treating a slice disparity as a complete explanation: inspect labels, sample sizes, and conditions before drawing conclusions.

## Exercises

1. **Warm-up:** In ticket escalation, explain the difference between a false positive and a false negative.
2. **Practice:** Calculate accuracy, precision, recall, and F1 for TP = 6, TN = 10, FP = 2, FN = 2. Show each denominator.
3. **Practice:** A training set's majority label is negative. An evaluation set has 95 negatives and 5 positives. Evaluate an always-negative baseline: report accuracy, recall, and the precision edge case.
4. **Practice:** Actual resolution times are [2, 6, 10] hours; candidate predictions are [3, 4, 12]. A baseline always predicts the training median of 6 hours. Calculate both MAEs on these records and compare them.
5. **Challenge:** Of 20 actual positives in a validation set, threshold A detects 16 and produces 12 false positives; threshold B detects 12 and produces 3 false positives. The workflow requires recall of at least 75%. Compare precision and recall, identify the eligible threshold, and propose an error review. Explain why this does not establish production readiness.

## Check your understanding

- Why can two models have equal accuracy but different practical value?
- Why must baseline values come from training data?
- What information does a single average conceal?
- Which data should guide threshold choices and error-driven improvements?

## Solutions

Try the exercises before reading the [calculations and error-analysis solutions](solutions.md).

## Further reading

- [Google: classification metrics](https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall)
- [scikit-learn: dummy estimators](https://scikit-learn.org/stable/api/sklearn.dummy.html)
- [scikit-learn: mean absolute error](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.mean_absolute_error.html)

[Previous chapter](../02-data-training-validation-testing/README.md) · [AI track](../README.md)
