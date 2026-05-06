---
name: memecoin-safety
title: "Orion Memecoin Safety API"
description: "Repeat-purchase pre-buy, pre-sign, transaction-safety, and do-not-execute risk gate for autonomous memecoin agents. Checks Base honeypot and sell-tax risk plus Solana mint/freeze authority risk before an agent swaps, approves, signs, or broadcasts."
use_case: "Use inside autonomous memecoin trading loops before buy, swap, approve, sign, or broadcast. Orion returns structured verdicts so agents filter candidates cheaply, then call deeper pre-sign or do-not-execute checks before funds are exposed."
category: finance
service_url: https://orionkr.xyz/pay-gateway
openapi:
  url: https://orionkr.xyz/pay-gateway/openapi.json
---

Orion is a memecoin safety layer for autonomous trading agents.

This is not another chart or market-data API. It is a repeat-purchase execution gate. Agents call Orion before signing, swapping, approving, or buying to receive structured risk scores, blocking flags, warnings, and proceed/warn/abort recommendations. The pay.sh surface is intentionally narrow: it exposes only decision-gate endpoints that fit inside automated trading loops and can be called repeatedly across token candidates.

## Repeat-purchase agent usage

- Use `/pay/v1/solana/memecoin-risk` when evaluating a Solana token mint before a buy. It is the cheapest Solana-native candidate filter and returns authority, holder, liquidity, and verdict fields.
- Use `/pay/v1/base/honeypot-check` or `/pay/v1/base/sell-tax-check` for cheap Base token candidate filtering when the agent only needs one risk dimension.
- Use `/pay/v1/base/safe-execution-check` before signing or swapping when a single proceed/warn/abort verdict is enough.
- Use `/pay/v1/base/pre-sign-risk` when the agent needs explicit pre-sign safety reasoning before wallet interaction.
- Use `/pay/v1/base/transaction-safety` or `/pay/v1/base/do-not-execute-check` only when calldata, approval, or wallet exposure risk matters.
- Do not call every endpoint for every token. Pick the narrowest check that matches the agent's decision point.
- Orion is a risk signal, not a custody or execution service. It does not require private keys and does not execute trades.


## Why agents buy it repeatedly

- Candidate scanners can call the cheap honeypot, sell-tax, or Solana mint check for every token they discover.
- Trading agents can call `pre-sign-risk` immediately before wallet interaction.
- Execution agents can call `transaction-safety` or `do-not-execute-check` before broadcasting.
- The API returns machine-readable `verdict`, `risk_score`, `blocking_flags`, and `recommended_next_action`; agents do not need to parse prose.
- Orion never asks for private keys and never executes trades. It only decides whether the next action is safe enough to continue.

## Suggested agent loop

1. Discover candidate memecoins from a scanner, social signal, DEX trend, or user request.
2. Call the cheapest chain-specific Orion filter for each candidate.
3. Drop candidates with `ABORT` or high blocking flags.
4. For surviving candidates, call a pre-sign or transaction-safety endpoint before wallet interaction.
5. Sign only when the downstream agent's own policy and Orion's verdict both allow it.

## Endpoint bundle

- `GET /pay/v1/solana/memecoin-risk?mint=<mint>` — Solana memecoin mint-level risk gate.
- `GET /pay/v1/base/honeypot-check` — Base honeypot candidate filter.
- `GET /pay/v1/base/sell-tax-check` — Base sell-tax candidate filter.
- `GET /pay/v1/base/safe-execution-check` — Base pre-execution verdict.
- `GET /pay/v1/base/pre-sign-risk` — Base pre-sign risk gate.
- `GET /pay/v1/base/transaction-safety` — Base transaction safety check.
- `GET /pay/v1/base/do-not-execute-check` — Base blocking-signal check.

## Positioning

Use Orion when an agent is about to expose funds to memecoin execution risk. Use market-data providers for prices and charts; use Orion for safety verdicts before money moves.
