---
name: pricing
title: "BIOHASH Oracle"
description: "oracle-backed peptide pricing on solana: per-vendor price comparison, best value, on-chain-anchored time-weighted average price, spread, and quote verification against the verified floor, median, and twap. queried per call over x402, settled in usdc."
use_case: "use when an agent needs verified peptide pricing before acting: query the oracle for a peptide's per-vendor prices, best value, and on-chain twap, or check a quoted per-mg price against the floor for a fairness verdict. 0.01 usdc per call, no account."
category: finance
service_url: https://api.getstax.xyz
openapi:
  path: openapi.json
---
oracle-backed peptide pricing on solana. verified, on-chain-anchored vendor prices and twap, queried per call over x402.

## Spend-aware usage
- prefer GET /api/v1/oracle/prices/{peptide_code} for a single peptide's full vendor list and twap in one paid call, rather than repeated narrow lookups.
- to judge a specific quoted price, call POST /api/v1/oracle/verify once with that price for a direct verdict, instead of pulling the full list.
- each call settles 0.01 usdc and returns the complete oracle view for a peptide, so one query per peptide is enough.
