---
name: contract-checker
title: "Contract Checker"
description: "AI-powered contract risk analysis. Upload any contract (text, PDF, DOCX) and get a structured JSON report of risks, red flags, liability clauses, and recommendations — in English or Russian."
use_case: "Use for reviewing contracts before signing, identifying unfavorable clauses, detecting legal risks in vendor agreements, NDAs, employment contracts, and lease documents. Supports Russian and CIS jurisdiction contracts."
category: security
service_url: https://contract-checker-ouk7yf5iuq-uc.a.run.app
openapi:
  url: https://contract-checker-ouk7yf5iuq-uc.a.run.app/openapi.json
---

AI contract risk analyzer powered by Gemini 2.0. Accepts raw text, PDF, or DOCX
files via `/analyze` and returns a structured JSON report with risk classification,
problematic clauses, and actionable recommendations.

## Endpoints

- `POST /analyze` — full analysis (paid, x402)
- `POST /analyze/demo` — free demo (rate-limited, max 1 000 chars)
- `GET /health` — service health
- `GET /docs` — OpenAPI UI

## Payment

Each `/analyze` call costs **$10.00 USDC**, accepted on:

- **Base mainnet**: send USDC to `0x1AAbd080c594CfC7AAE5c0d8200948353De87BA1`, retry with `X-Payment-Id: <0x_tx_hash>`
- **Solana mainnet**: send USDC to `F1p61Q2EQfy2G4rsK8FQNdStDCS347cBBq8xb4s9E6p3`, retry with `X-Payment-Id: <base58_signature>`

Payments are verified on-chain and marked as used in Firestore to prevent replay.

## Spend-aware usage

- Use the `/analyze/demo` endpoint first to validate the contract format before paying.
- Send the full contract text in a single call — the service handles up to 1.5M characters (~600 pages).
- The response is JSON; parse `risks[].severity` to triage: `CRITICAL` > `HIGH` > `MEDIUM` > `LOW`.
- For bulk processing, batch contracts sequentially — each call is one payment.
