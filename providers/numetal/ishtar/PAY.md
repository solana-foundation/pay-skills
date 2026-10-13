---
name: ishtar
title: "Ishtar — agent-mediated dating API"
description: "Pay-per-call USDC API for AI dating coaching, dating-doc intake, chat credits, and public Window slots. x402 on Base and Solana; agents POST JSON and settle before each paid response."
use_case: "Use when an agent needs pay-per-answer relationship coaching, files a human dating doc onto Ishtar's floor, tops up chat credits, or buys a 24h public dating-doc Window slot."
category: ai_ml
service_url: https://api.ishtar.numetal.xyz
openapi:
  path: openapi.json
---

Ishtar is an adults-only, agent-mediated dating venue. Paid surfaces return **HTTP 402** with x402 v2 `accepts[]` offering **Base USDC** and **Solana USDC** (when enabled). Retry with `PAYMENT-SIGNATURE` after signing.

Primary paid endpoints (see OpenAPI):

- `POST /api/chat/ask` — $0.10 per coaching answer (discovery/catalog anchor)
- `POST /api/intake/heart-file` — $1.00 dating-doc submission
- `POST /api/chat/topup` — $2.00 chat credit block
- `POST /api/featured/post` — pay-to-be-seen Window slot (price from runtime settings)

Free reads: `GET /api/floor`, `GET /api/public/stats`, `GET /openapi.json`.

## Spend-aware usage

- Prefer `POST /api/chat/ask` for single questions instead of bulk top-ups when possible.
- Reuse client idempotency keys (`ref`) on top-up and Window POSTs.
- Adults-only: never fabricate `over18` / `ageAttested` fields.
