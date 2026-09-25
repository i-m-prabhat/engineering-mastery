# Machine Learning Data, Training, Validation, and Testing

> Track: Artificial intelligence · Level: Beginner

## Learning objectives

- Identify examples, features, and labels.
- Explain the roles of training, validation, and test data.
- Recognize overfitting and data leakage.
- Choose a data split that matches a model's intended use.

## Prerequisites

Read [AI terminology, capabilities, and limitations](../01-terminology/README.md). This chapter uses fictional data and hand calculations. No installation, account, API key, or paid service is required.

## Concept

### 1. Define the prediction task

In supervised learning, a model learns from examples with known answers. Consider predicting whether a support ticket will need escalation when it first arrives.

| Term | Meaning | Ticket example |
| --- | --- | --- |
| Example | One observation | One submitted ticket |
| Feature | An input available at prediction time | Product category at submission |
| Label or target | The answer to predict | Whether the ticket eventually needed escalation |
| Dataset | A collection of examples | Historical tickets with reviewed outcomes |
| Parameter | A value learned during training | A weight assigned to an input |
| Hyperparameter | A setting chosen for the model or learning process | Maximum depth allowed for a decision tree |

A label can describe a later outcome. Input features must be available when the prediction is made. A final resolution note would reveal future information to an arrival-time predictor. Ticket IDs help track records but are not automatically useful predictive features.

### 2. Give each split a separate job

| Split | Purpose |
| --- | --- |
| Training | Fit the model's parameters |
| Validation | Compare candidate models and tune settings |
| Test | Evaluate the selected approach after development choices are fixed |

For 100 independent examples, an illustrative split is 60 training, 20 validation, and 20 test examples. These proportions are not a universal rule. Dataset size and the task affect what is appropriate; 20 test examples would give a very uncertain estimate.

Use validation results to make development decisions. Repeatedly choosing models using test scores makes the test set part of development. Cross-validation instead compares candidates across several training/validation folds, while a final test set can remain reserved.

See Google's [dataset splitting lesson](https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets) for the different roles of these subsets.

### 3. Match the split to deployment

- **Independent examples:** a random split can be appropriate. Stratification can preserve label proportions when class counts permit it.
- **Related examples:** keep records from the same customer or source together when evaluating performance on unseen groups. Copies spread across subsets can make memorization look like generalization.
- **Future predictions:** train on earlier records and evaluate on later periods. Respect when features and labels actually become available.

A fixed random seed makes a random split reproducible. It does not make an inappropriate split representative. Document what your split is meant to measure.

### 4. Prevent data leakage

Leakage occurs when information that should be unavailable influences model development or evaluation. Split before fitting learned preprocessing. Learn missing-value replacements, scaling values, and feature selection from training data, then apply the fixed transformations to validation and test data. Within cross-validation, fit these transformations separately on each training fold.

For example, training values 2, 4, and 6 have a mean of 4. If mean imputation is chosen, replace a missing validation input with 4. Validation values must not change that learned replacement. The [scikit-learn pitfalls guide](https://scikit-learn.org/stable/common_pitfalls.html) explains leakage and consistent preprocessing.

### 5. Recognize overfitting and underfitting

**Overfitting** means learning training-specific patterns that do not transfer well to new examples. Strong training performance with weaker validation performance is a warning sign, though differences between datasets can also explain the gap.

**Underfitting** means failing to capture useful patterns adequately. Weak results on both training and validation data can suggest it, but poor labels and unsuitable features also deserve investigation. One score is not enough to establish either diagnosis.

## Worked example: select before testing

These invented counts illustrate the workflow; they are not measurements from trained models. Assume two candidates fitted on the same training records, independent fictional tickets, and validation accuracy chosen in advance as the selection criterion. Accuracy means correct predictions divided by total predictions.

| Candidate | Training correct | Validation correct |
| --- | --- | --- |
| A | 60 of 60 | 12 of 20 |
| B | 51 of 60 | 16 of 20 |

Choose B: its validation accuracy is 16/20 = 80%, versus A's 60%. A's perfect training score does not show that it will generalize better.

Freeze B and evaluate it on the reserved test set. Suppose it gets 15 of 20 correct: report 75% accuracy on this fictional test set. Do not switch candidates based on further test comparisons. If test results guide another development round, use a fresh independent evaluation for the revised approach.

## Real-world use

For an escalation predictor, define arrival-time inputs and consistent escalation labels. Check missing values, duplicates, and coverage of relevant product categories. Decide whether you want to measure future tickets, unseen customers, or both. Use fictional or appropriately approved records and exclude unnecessary private data.

## Common mistakes

- Fitting a scaler on all data: evaluation records then influence preparation.
- Using a resolution note as an input: it reveals information from after prediction time.
- Splitting duplicate tickets across subsets: evaluation can reward memorization.
- Reporting only training accuracy: it does not measure performance on unseen records.
- Assuming a split ratio guarantees quality: independence and representativeness matter too.

## Exercises

1. **Warm-up:** Classify each field as a possible feature, label, tracking metadata, or leakage for arrival-time escalation prediction: product category at submission, eventual escalation outcome, ticket ID, final resolution note.
2. **Practice:** Split 200 independent examples into 60% training, 20% validation, and 20% testing. Which subset should guide model selection?
3. **Practice:** Training values are 3, 6, and 9. With mean imputation, what replaces a missing test input? Why should observed test values not change that replacement?
4. **Practice:** Candidate C gets 18/20 validation predictions correct; D gets 16/20. Choose by validation accuracy. The chosen model then gets 14/20 on the test set. Report the result and explain whether it justifies switching to D.
5. **Challenge:** Design a split for predicting next month's tickets. Records include repeat customers, near-duplicates, and labels finalized up to seven days after submission. Explain time boundaries, related records, label availability, and evaluation limitations.

## Check your understanding

- How does validation differ from testing?
- Why can a future outcome be a label but an invalid input feature?
- Why does a fixed random seed not prevent leakage?
- What would you inspect before diagnosing overfitting?

## Solutions

Try the exercises before opening the [solutions and split-design guide](solutions.md).

## Further reading

- [Google: datasets, generalization, and overfitting](https://developers.google.com/machine-learning/crash-course/overfitting)
- [Google: dividing datasets](https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets)
- [scikit-learn: common pitfalls](https://scikit-learn.org/stable/common_pitfalls.html)

[Previous chapter](../01-terminology/README.md) · [AI track](../README.md)
