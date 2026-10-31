---
name: token-risk
title: "Rugsight"
description: "Solana token risk scores: free 0-100 score with A-F grade, verdict and flag codes, plus a paid full report with mint/freeze authority, holder concentration, liquidity, market metrics and explained risk flags."
use_case: "Use when checking whether a Solana token or memecoin is a likely rug pull or scam before buying, swapping or listing it: mint authority, freeze authority, top-holder concentration, liquidity and pre-trade token due diligence."
category: security
service_url: https://rugsight.rugsight.workers.dev
version: v1
openapi:
  path: openapi.json
---

Rugsight returns automated, on-chain risk assessments for Solana token mints. It is aimed at trading agents and wallets that want a quick safety check before interacting with an unknown token.

Endpoints:

- `GET /api/score/{mint}` (free) — 0-100 score, A-F grade (or `IC` for allowlisted issuer-controlled assets such as major stablecoins), short verdict, confidence and risk flag codes.
- `GET /api/v1/report?mint={mint}` (0.03 USDC, x402 on Solana mainnet) — the full report: mint and freeze authority status, top-holder breakdown, liquidity and market metrics, and every flag with a plain-English explanation. An unpaid request returns HTTP 402 with a `PAYMENT-REQUIRED` challenge.

Scores are automated heuristics, not financial advice.

## Spend-aware usage

- Call the free `/api/score/{mint}` first; only buy the full report when the grade is borderline or the agent needs holder and liquidity detail.
- Cache reports per mint for the duration of a task instead of re-buying them.
- Validate the mint is a base58 address (32-44 chars) before calling to avoid wasted requests.
