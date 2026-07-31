---
name: identity
title: "2s Identity"
description: "Entity and identifier verification: validate IBAN, BIC, CUSIP, ISIN, LEI, GTIN, ABA and more; GLEIF business identity, NAICS, Secretary-of-State entity search, professional-license lookups, and nonprofit screening."
use_case: "Use for validating financial and product identifiers, verifying a business or LEI, checking professional licenses, and screening people or nonprofits."
category: identity
service_url: https://2s.io
openapi:
  path: openapi.json
---

Part of 2s — a unified, agent-native JSON API. Pay per call in USDC on Solana (or Base) via x402; no accounts, no API keys. Add `?trial=1` (or header `X-2s-Trial: 1`) for one free real call per endpoint per hour.

## Spend-aware usage

- Prefer narrow lookups (by id/code) over broad searches; reuse identifiers across calls.
- Cap result `limit` to the smallest count that answers the task.
