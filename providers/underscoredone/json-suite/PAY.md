---
name: json-suite
title: "JSON Suite"
description: "Validates JSON with exact error locations, repairs near-JSON, pretty-prints or minifies, queries by path, diffs two documents, converts to and from YAML, and canonicalizes — all in one call."
use_case: "Use to fix, validate, query, diff, or convert JSON when a payload is malformed or oversized and you need a deterministic result rather than a model-generated guess."
category: devtools
service_url: https://json-suite.underscoredone.com
openapi:
  path: openapi.json
---

Validates JSON with exact error locations, repairs near-JSON, pretty-prints or minifies, queries by path, diffs two documents, converts to and from YAML, and canonicalizes — all in one call. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- Pick the one operation you need per call rather than chaining calls.
- Query by path to extract just the fields you want instead of returning whole documents.
