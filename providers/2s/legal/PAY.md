---
name: legal
title: "2s Legal"
description: "US legal-reference data: verify case citations, statutes (USC) and regulations (CFR), search court opinions and dockets, look up attorneys and judges, trademark search/status, and OFAC sanctions screening."
use_case: "Use for verifying legal citations, fetching statute and regulation text, searching court opinions and dockets, trademark lookups, and sanctions screening."
category: other
service_url: https://2s.io
openapi:
  path: openapi.json
---

Part of 2s — a unified, agent-native JSON API. Pay per call in USDC on Solana (or Base) via x402; no accounts, no API keys. Add `?trial=1` (or header `X-2s-Trial: 1`) for one free real call per endpoint per hour.

## Spend-aware usage

- Prefer narrow lookups (by id/code) over broad searches; reuse identifiers across calls.
- Cap result `limit` to the smallest count that answers the task.
