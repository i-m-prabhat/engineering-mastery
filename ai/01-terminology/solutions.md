# Solutions: AI Terminology, Capabilities, and Limitations

## 1. Main terms

- AI is the broad field of building systems that perform tasks such as prediction, planning, and language processing.
- ML is a part of AI in which systems learn patterns from data.
- Deep learning is ML using neural networks with multiple layers.
- Generative AI produces content based on learned patterns.

A fixed "invoice" keyword rule is rule-based automation. As described, it does not demonstrate ML because no learning from examples occurs. A larger system could combine such rules with a learned model.

## 2. Lifecycle steps

| Step | Answer | Reason |
| --- | --- | --- |
| Adjust a classifier using labeled tickets | Training | Data is used to adjust model parameters |
| Predict a new ticket's category | Inference | A trained model produces an output |
| Compare predictions with reviewed held-out labels | Evaluation | Outputs are assessed against reference answers |

Held-out evaluation data should be separate from training examples. Repeatedly tuning against the same evaluation set can make its results less representative of unseen cases.

## 3. Summary assessment

The proposed summary passes all three criteria: its claims are supported, it preserves the two-day delay and the refund request, and it does not invent a refund decision. This is an assessment of a supplied example, not a measured model performance result.

## 4. Example evaluation plan

Use fictional records with these properties:

| Case | Record outline | What the summary should preserve |
| --- | --- | --- |
| Clear request | A damaged notebook; customer requests a replacement | Damage and replacement request; no invented approval |
| Ambiguous request | Customer says "please sort this out" after a late delivery | Late delivery and unclear requested remedy |
| Long record | Several updates ending with an unresolved missing item | Missing item and its unresolved status |
| Contradictory record | Tracking says delivered; customer says nothing arrived | Both accounts and the unresolved contradiction |
| Negation | Customer explicitly says they do not want cancellation | The refusal to cancel and the actual request |

Compare the feature with a baseline such as an existing human-written summary or a simple extract of the original record. Apply the same rubric to both approaches. Define a passing summary as one with no unsupported claims, all case-specific essential details retained, and no invented resolution. A reviewer should assess outputs against the record rather than their own assumptions.

Record the case ID, system configuration, input, output, baseline output, criterion results, and error explanation. For a generative system, repeat cases to observe variation. Report the number of passing summaries and the total assessed, alongside error types; do not invent results before running the evaluation.

Five cases make a useful learning exercise but cannot establish production reliability. Broader evaluation should cover representative inputs, important user groups, and the consequences of different errors.

[Return to the lesson](README.md)
