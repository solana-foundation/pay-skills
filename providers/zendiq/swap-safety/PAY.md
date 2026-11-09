---
name: swap-safety
title: "ZendIQ Swap Safety"
description: "Pre-trade safety for Solana swaps: a Safe / Protect / Refuse verdict from token risk (17 signals) and sandwich exposure, plus an unsigned, simulated swap transaction on the best venue after fees, tips and expected MEV loss."
use_case: "Use before an agent buys, sells or swaps a Solana token: rug and token-risk checks, sandwich/MEV exposure, deciding whether and how to trade, Jito-protected execution, or building a signable swap transaction to verify and sign itself."
category: security
service_url: https://api.zendiq.ai
version: v1
openapi:
  path: openapi.json
---

ZendIQ checks a Solana swap before the agent signs it. Both paid endpoints take x402 payment in USDC on Solana mainnet, and all market data is mainnet.

- `POST /v1/agent/analyse` ($0.01): a Safe / Protect / Refuse verdict for a proposed swap, with plain-language reasons, the output token's risk score and the 17 signals behind it (each `pass`, `warn`, `fail` or `unknown`), sandwich exposure for this trade size, and the priority fee and Jito tip to use. Builds no transaction.
- `POST /v1/agent/optimize` ($0.02, charged only when a transaction is built): execution. Returns an unsigned, simulated swap transaction for `taker`, the plan to verify it against, submit instructions, itemised net-benefit arithmetic, and the same verdict as /analyse. The agent signs and submits it; ZendIQ never holds keys or funds.

Free and not listed as paid endpoints: `POST /v1/agent/analyse-token` screens a mint with no trade size (rate-limited), `GET /v1/agent` is the live manifest of prices, limits and schema version, and `POST /v1/agent/bundle` submits a signed Jito bundle transaction returned by /optimize.

## Reading the answer

- `Safe`: trade. `Protect`: trade only with protection, by calling /optimize or applying `recommendedExecution`. `Refuse`: do not trade, and do not sign anything for this trade.
- `unknown` means a check could not be read; it is never a pass. `signals_resolved` (for example `13/17`) is coverage. If screening did not complete at all, `tokenRisk.available` is `false` and the verdict is `Protect` with low confidence: the token was not checked.
- /optimize builds a transaction even on `Refuse`, because it assumes the decision to trade was taken. Read `verdict` before signing.

## Venue choice and submission

The baseline is the Jupiter route. A direct venue (Raydium, or a Jito bundle on Raydium or the Jupiter Swap API) replaces it only when it beats it after every cost (priority fee, Jito tip, expected sandwich loss and, for a bundle, its landing risk) by more than 0.1% of the trade, capped at $1. Ties go to Jupiter. `plan.venueDecision` shows each candidate's arithmetic.

Submission differs by venue, so follow the returned `submit` object. A Jito bundle is posted back to `/v1/agent/bundle` (free), which reports its landing state; a bundle is not guaranteed to land.

## Spend-aware usage

- Screen candidate mints with the free `/v1/agent/analyse-token`, and pay for /analyse only on a trade you intend to make. /analyse includes the full token score, so screening first is optional.
- Call /optimize only after a `Safe` or `Protect` verdict, never on `Refuse`. Pass the `analysisId` from /analyse-token or /analyse within 60 s to reuse that token scan.
- Allow 120 s per paid call: settlement can hold a response for up to 90 s. On a 402 with `settlement_pending`, retry once with the same payment header rather than paying again.
- Validation errors (400, 422), `502` responses and a failed /optimize build are not charged.

Agent skill with the full workflow and fail-closed rules: https://github.com/ZendIQ/ZendIQ-Agent-API/tree/main/skills/zendiq-swap-safety. Contract: https://zendiq.ai/openapi.json. Terms: https://zendiq.ai/agents/terms/. Not financial advice.