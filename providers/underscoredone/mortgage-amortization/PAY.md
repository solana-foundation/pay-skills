---
name: mortgage-amortization
title: "Mortgage Amortization"
description: "Returns the exact monthly payment and a full month-by-month amortization schedule for any fixed-rate loan, including the effect of recurring extra payments or a one-time lump-sum payment."
use_case: "Use for precise fixed-rate loan math — monthly payment, per-month interest and principal split, remaining balance, and payoff impact of extra or lump-sum payments."
category: finance
service_url: https://mortgage-amortization.underscoredone.com
openapi:
  path: openapi.json
---

Returns the exact monthly payment and a full month-by-month amortization schedule for any fixed-rate loan, including the effect of recurring extra payments or a one-time lump-sum payment. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- Model extra-payment scenarios in a single call where supported instead of one call per scenario.
- Keep the returned schedule and read from it rather than recalculating.
