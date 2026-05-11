---
name: calparse-api
title: "calparse-api"
description: "Pay-per-call natural-language datetime parser for AI scheduling agents and calendar bots."
use_case: "Resolve natural-language datetime ('next Tuesday at 3pm', 'in 5 minutes', 'mañana a las 10') to ISO 8601 in any IANA timezone. Use when a scheduling agent needs an authoritative time the user can verify, instead of an LLM's hallucinated guess."
category: productivity
service_url: https://calparse-api.vercel.app
openapi:
  url: https://calparse-api.vercel.app/openapi.json
---

Pay-per-call natural-language datetime parsing for AI agents and calendar bots. Sister endpoint to `tzapi` (which answers "what time is it now in X?") — calparse answers "what does 'next Tuesday at 3pm' resolve to in X?".

Accepts x402 USDC micropayments on Base mainnet (Coinbase CDP facilitator) and Solana mainnet (PayAI facilitator, gasless for buyers).

## What it does

`GET /parse?text=...&tz=...&now=...` — $0.001 per call. Also available as `POST /parse` with JSON body for longer text.

Two-pass parser:
- `parsedatetime` first — best at English relative idioms ("next Tuesday at 3pm", "the friday after next", "in 5 minutes")
- `dateparser` fallback — multilingual + DD/MM dates ("mañana", "25/12/2026")

Returns `iso`, `weekday`, `is_past`/`is_future`, `delta_seconds`, which `parser` fired, and the `reference_used` (so buyers can reproduce or rewind parses). Returns `parsed: false` cleanly on garbage input — no silent guesses.

English is fully supported; Spanish/French/German support is partial (relative-day words work but time-of-day phrases are dropped in non-English).

## Spend-aware usage

- Pair with `tzapi` for the timezone lookup if you only have a city name, not an IANA zone — one $0.001 call to tzapi `/now` returns the IANA zone, then one $0.001 call here resolves the expression. Cheaper than two LLM calls and authoritative.
- Cache parsed results when the input text is identical and the timezone is unchanged (the result only depends on `text + tz + reference time`).
- For pure ISO 8601 inputs, skip this endpoint — your own `datetime.fromisoformat()` is free and exact.
- Set `now` explicitly when reproducibility matters (e.g. "what was 'tomorrow' at 09:00 UTC yesterday?"). Without it, the server uses its own current time.
