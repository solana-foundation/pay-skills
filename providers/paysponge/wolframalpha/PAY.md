---
name: wolframalpha
title: "Wolfram Alpha"
description: "Query Wolfram|Alpha for computational knowledge, short answers, simple image results, and full structured query output for math, science, finance, units, dates, geography, and fact-based problem solving."
use_case: "Use for math and science questions, unit conversion, formula evaluation, fact lookup, computational queries, symbolic or numeric results, short factual answers, and structured Wolfram|Alpha output in agent workflows."
category: data
service_url: https://wolframalpha.x402.paysponge.com
openapi:
  path: openapi.json
---

Wolfram|Alpha computational knowledge endpoints exposed through PaySponge with
x402 payments.

The live x402 wrapper currently exposes 3 paid `GET` routes: `/v1/result` for
a short textual answer, `/v1/simple` for a static rendered result image, and
`/v2/query` for the full structured Wolfram|Alpha result. These routes are
suited to math, science, finance, date/time, unit conversion, geography, and
other computational knowledge tasks where symbolic or numeric computation is
more reliable than web search or an LLM-only answer.

`/v1/result` and `/v1/simple` cost $0.01 per request and `/v2/query` costs
$0.02 per request. All currently exposed routes accept x402 USDC on Solana
mainnet, Base, and Avalanche.

## Spend-aware usage

- Use `/v1/result` when a short textual answer is enough and reserve `/v2/query`
  for cases that need richer structured output.
- Use `/v1/simple` only when the caller specifically needs an image-style result
  rather than text.
- Use `/v2/query` with `includepodid`, `podtitle`, `podindex`, `scanner`, or
  `podstate` to narrow the returned surface before paying again for broader
  output.
- Reuse `assumption` and `podstate` values returned by earlier `/v2/query`
  results when refining an ambiguous query or driving an Instant Calculators
  workflow, instead of rewriting the query from scratch.
- Prefer one precise computational query over several retries. Tighten the
  input phrasing before paying again.
