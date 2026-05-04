---
name: wolframalpha
title: "Wolfram Alpha"
description: "Query Wolfram|Alpha for computational knowledge, short answers, simple image results, and full structured query output for math, science, finance, units, dates, geography, and fact-based problem solving."
use_case: "Use for math and science questions, unit conversion, formula evaluation, fact lookup, computational queries, symbolic or numeric results, short factual answers, and structured Wolfram|Alpha output in agent workflows."
category: data
service_url: https://wolframalpha.x402.paysponge.com
openapi:
  url: https://wolframalpha.x402.paysponge.com/openapi.json
---

Wolfram|Alpha computational knowledge endpoints exposed through PaySponge with
x402 payments.

The published spec currently exposes 3 paid `GET` routes: `/v1/result` for a
short answer, `/v1/simple` for a simple image result, and `/v2/query` for a
full Wolfram|Alpha query response. These routes are suited to math, science,
finance, date/time, unit conversion, geography, and other computational
knowledge tasks where a web search or LLM-only answer is weaker than a
symbolic or numeric engine.

The current spec prices `/v1/result` and `/v1/simple` at $0.01 per request and
`/v2/query` at $0.02 per request. All routes accept x402 USDC on Solana
mainnet, Base, and Avalanche.

Note: the OpenAPI document is minimal and does not include rich inline query
parameter schemas. Agents that need the exact request contract should inspect
the linked spec directly before building calls.

## Spend-aware usage

- Use `/v1/result` when a short textual answer is enough and reserve `/v2/query`
  for cases that need richer structured output.
- Use `/v1/simple` only when the caller specifically needs an image-style result
  rather than text.
- Prefer one precise computational query over several retries. Tighten the
  input phrasing before paying again.
