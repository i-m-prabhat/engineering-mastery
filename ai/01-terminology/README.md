# AI Terminology, Capabilities, and Limitations

> Track: Artificial intelligence · Level: Beginner

## Learning objectives

- Explain AI, machine learning, deep learning, and generative AI.
- Distinguish training, inference, and evaluation.
- Match a task to a useful capability and a practical limitation.
- Separate observed results from claims that still need testing.

## Prerequisites

None. This lesson uses paper exercises and fictional examples. No account, paid service, API key, installation, or private data is required.

## Concept

Artificial intelligence (AI) is a broad field concerned with systems that perform tasks such as prediction, perception, planning, and language processing. Some systems use explicit rules; others learn patterns from data. A useful AI feature needs a defined task and a way to judge its results.

### The main terms

| Term | Plain-language meaning | Example |
| --- | --- | --- |
| AI | The broad field of building systems for tasks associated with intelligence | Planning a delivery route |
| Machine learning (ML) | Methods that learn patterns from data instead of specifying every decision as a rule | Learning to classify support tickets from labeled examples |
| Deep learning | ML that uses neural networks with multiple layers | Recognizing objects in photographs |
| Generative AI | Models that produce content based on patterns learned from data | Drafting a paragraph or generating an image |
| Large language model (LLM) | A language model trained at large scale to process and generate token sequences | Drafting an answer to a text question |
| Model | A learned mathematical representation used to produce outputs | A trained ticket classifier |
| Training | Adjusting a model's parameters using data and a learning objective | Learning from historical labeled tickets |
| Inference | Using a trained model to produce an output from an input | Predicting a new ticket's category |
| Evaluation | Measuring outputs against criteria for the intended task | Comparing predicted categories with reviewed labels |
| Prompt | Input that guides a generative model's response | A question with instructions and an example |
| Token | A unit of model input or output, which may be part of a word, punctuation, or another representation | A long word can span several tokens |
| Context window | The amount of input and generated output a model can handle within its processing limit | A document may be too long to include in one request |
| Hallucination or confabulation | Generated content that is false, unsupported, or inconsistent with the provided information | Inventing an order status absent from the records |
| Bias | Systematic patterns that can produce uneven or unfair outcomes | Higher error rates for an underrepresented language |

ML is part of AI, and deep learning is part of ML. Modern generative AI commonly uses deep learning. A classifier can use deep learning without generating text or images. These categories describe different aspects of a system and are not interchangeable.

Training and inference are different steps. Including a correction in a chat can influence later replies within that context; it does not by itself prove that the model's underlying parameters changed. Whether a service retains inputs or uses them for later training depends on its settings and policies.

### Capabilities and their limits

| Capability | Useful application | Limitation to test |
| --- | --- | --- |
| Classification | Route a support ticket to a category | Unfamiliar wording or languages may be classified incorrectly |
| Prediction | Estimate demand from past observations | Changes in customer behavior can make past patterns unreliable |
| Summarization | Produce a draft summary of a document | Important details may be omitted or unsupported details introduced |
| Content generation | Draft text, images, or code | Outputs can contain factual errors, defects, or inappropriate material |
| Retrieval-assisted answering | Answer using retrieved documents | Missing, outdated, or irrelevant documents can undermine the answer |

Capabilities depend on the model, data, tools, task, and environment. Fluent wording is not evidence of correctness. A model's stated confidence is not automatically a calibrated probability. Access to current information requires suitable inputs or connected tools; a model does not automatically browse or verify its own answers.

## Worked example: evaluate a support summary

These fictional outputs are written for this exercise. They are not measurements from a real model.

**Source record:** Order DEMO-17 arrived two days late. The customer asks whether a delivery-fee refund is available. No refund decision has been recorded.

| Candidate output | Expected assessment |
| --- | --- |
| A: Order DEMO-17 was late, and the customer asks about a delivery-fee refund. | Supported; preserves the key request |
| B: The customer's delivery-fee refund has been approved. | Unsupported; invents a decision |
| C: The customer contacted support about an order. | Supported but incomplete; omits the delay and refund request |

Use this rubric: each factual claim must be supported, the delay and refund request must be retained, and the summary must not invent a decision. A passes all three criteria. B and C fail at least one criterion. This result evaluates these three candidates only; it does not establish a model's overall reliability.

## Real-world use

A support team could use generated summaries as drafts for staff to review. Before adopting the feature, evaluate representative records, define which omissions and invented claims count as failures, compare with the existing workflow, and record error types. Use fictional or appropriately approved data during practice. Sending data to a service requires understanding that service's data handling and access controls.

## Common mistakes

- Calling any automation ML: a fixed keyword rule does not learn from data.
- Treating a plausible answer as verified: check factual claims against the original evidence.
- Assuming one successful demo proves reliability: evaluate multiple representative cases, including difficult ones.
- Assuming all errors affect users equally: examine results across relevant input groups and languages.
- Treating generated code as ready to ship: review it and run appropriate checks before use.

## Exercises

1. **Warm-up:** Describe AI, ML, deep learning, and generative AI in one sentence each. Explain whether a fixed rule that routes messages containing "invoice" demonstrates learning from data.
2. **Practice:** Label each step as training, inference, or evaluation: adjusting a classifier using labeled tickets; predicting a category for a new ticket; comparing predictions with reviewed labels on held-out tickets.
3. **Practice:** Evaluate this summary of DEMO-17 using the three rubric criteria: "Order DEMO-17 arrived two days late, and the customer wants to know whether a delivery-fee refund is available."
4. **Challenge:** Design an evaluation for a support-summary feature. Include five fictional cases, a baseline, pass criteria, and what you would record when an output fails. Include an ambiguous request, a long record, and a record containing contradictory statements.

## Check your understanding

- Why can a grammatically correct answer still be wrong?
- What evidence distinguishes a measured result from an assumption?
- Why should evaluation include cases beyond the first successful example?
- What is the difference between context provided during inference and training data?

## Solutions

Attempt the exercises before opening the [solutions and evaluation guide](solutions.md).

## Further reading

- [NIST AI glossary](https://csrc.nist.gov/glossary/term/artificial_intelligence) — definitions and their source contexts.
- [NIST generative AI glossary](https://csrc.nist.gov/glossary/term/generative_artificial_intelligence) — generated content and terminology.
- [NIST Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf) — confabulation, bias, and other risks.
- [Google Machine Learning Glossary](https://developers.google.com/machine-learning/glossary) — additional ML terminology.

[Next chapter: data, training, validation, and testing](../02-data-training-validation-testing/README.md) · [AI track](../README.md)
