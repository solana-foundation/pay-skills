---
name: grade
title: "anchor-x402: academic letter grade + red-pen marginalia"
description: "Academic letter grade (A+ to F) for any target — code, startup pitch, tweet, wallet, idea, meme. Returns the letter, 3-7 red-pen marginalia one-liners, and a one-paragraph teacher summary. Honest, observational, witty."
use_case: "Use for sharp constructive feedback at low cost, prompt-engineering evals, pre-investment screens, code review on free-form snippets, pitch-deck triage, content review, and any agent flow that needs evaluative judgment with specifics."
category: ai_ml
service_url: https://api.anchor-x402.com
openapi:
  url: https://api.anchor-x402.com/openapi.json
---

`POST /v1/grade { target }` — $0.01 USDC. Any text up to 6000 chars. Powered by Claude Haiku on AWS Bedrock.

Returns `{ letter_grade, marginalia, summary }`:
- `letter_grade` — one of `A+ | A | A- | B+ | B | B- | C+ | C | C- | D+ | D | F`
- `marginalia` — 3 to 7 short red-pen one-liners, each under 18 words. Specific call-outs in the style of a margin comment on a school paper.
- `summary` — one paragraph of teacher commentary

## Spend-aware usage

- Honest constructive feedback, not entertainment. Pick `roast` ($0.05) if you want long-form takedown prose, or `aura` ($0.01) for a vibe check rather than evaluation.
- Works universally: code reviews on snippets, pitch deck triage, content review, prompt-engineering A/B evals — anything you'd hand to a sharp reviewer.
- Marginalia are intentionally short and specific — useful as one-liner replies on social, or as targeted feedback to surface inline.
- Output is plain JSON — easy to render as a 'graded paper' card in a UI.
