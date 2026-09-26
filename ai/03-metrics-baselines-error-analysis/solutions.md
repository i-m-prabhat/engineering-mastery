# Solutions: Model Metrics, Baselines, and Error Analysis

## 1. Error types

A false positive escalates a ticket that does not need escalation. A false negative misses a ticket that does need it. Their operational costs may differ, so report them separately.

## 2. Classification metrics

For TP = 6, TN = 10, FP = 2, and FN = 2, there are 20 examples:

- Accuracy = (6 + 10) / (6 + 10 + 2 + 2) = 16/20 = **80%**.
- Precision = 6 / (6 + 2) = 6/8 = **75%**.
- Recall = 6 / (6 + 2) = 6/8 = **75%**.
- F1 = 12 / (12 + 2 + 2) = 12/16 = **75%**.

Precision and recall happen to be equal here because FP and FN are equal. They still measure different things.

## 3. Majority-class baseline

The counts are TP = 0, TN = 95, FP = 0, FN = 5:

- Accuracy = 95/100 = **95%**.
- Recall = 0/5 = **0%**.
- Precision = 0/0, which is **undefined**. A library may substitute a configured value; disclose that convention.

The baseline misses every positive case despite its high accuracy. The negative prediction rule was chosen from training data, not the evaluation distribution.

## 4. Numerical prediction

| Actual hours | Candidate prediction | Candidate absolute error | Baseline prediction | Baseline absolute error |
| --- | --- | --- | --- | --- |
| 2 | 3 | 1 | 6 | 4 |
| 6 | 4 | 2 | 6 | 0 |
| 10 | 12 | 2 | 6 | 4 |

Candidate MAE = (1 + 2 + 2) / 3 = **5/3 ≈ 1.67 hours**.

Baseline MAE = (4 + 0 + 4) / 3 = **8/3 ≈ 2.67 hours**.

The candidate's MAE is one hour lower on these three records. That is a result for this fictional sample, not evidence of reliable performance on all future tickets. The baseline value of 6 came from the training set.

## 5. Threshold selection and review

| Threshold | TP | FP | FN | Precision | Recall |
| --- | --- | --- | --- | --- | --- |
| A | 16 | 12 | 4 | 16/28 ≈ 57.1% | 16/20 = 80% |
| B | 12 | 3 | 8 | 12/15 = 80% | 12/20 = 60% |

Only A meets the stated validation recall requirement of at least 75%. B's higher precision does not compensate for failing that requirement. The total negative count is unspecified, so overall accuracy cannot be calculated from the supplied information.

Review A's four missed positives and twelve false positives. Check label quality, recurring input patterns, relevant slices, and a sample of correct predictions. Record possible explanations as hypotheses and evaluate changes on validation data.

Before claiming readiness, evaluate the frozen choice on independent test data, check representative coverage, and assess whether the workflow can handle the unnecessary escalations. Twenty positive validation cases are a small sample; meeting a point estimate does not guarantee that recall will remain above 75% in future use.

[Return to the chapter](README.md) · [AI track](../README.md)
