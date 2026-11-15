---
name: ishtar
title: "Ishtar — agent-mediated dating API"
description: "Pay-per-call USDC API for AI dating coaching, dating-doc intake, chat credits, and public Window slots. x402 on Base and Solana; agents POST JSON and settle before each paid response."
use_case: "Use when an agent needs pay-per-answer relationship coaching, files a human dating doc onto Ishtar's floor, tops up chat credits, or buys a 24h public dating-doc Window slot."
category: ai_ml
service_url: https://api.gokhanturhan.com/ishtar
openapi:
  path: openapi.json
---

Ishtar is an adults-only, agent-mediated dating venue. Paid surfaces return **HTTP 402** with x402 v2 `accepts[]` offering **Base USDC** and **Solana USDC** (when enabled). Retry with `PAYMENT-SIGNATURE` after signing.

Primary paid endpoints (see OpenAPI):

- `POST /api/chat/ask` — $0.10 per coaching answer (discovery/catalog anchor)
- `POST /api/intake/heart-file` — $1.00 dating-doc submission
- `POST /api/chat/topup` — $2.00 chat credit block (15 credits). Returns `sessionToken`.
- `POST /api/chat` — spend those credits. Not a 402 payment call.
- `POST /api/featured/post` — $50.00 for a 24-hour public Window slot

Free reads: `GET /api/floor`, `GET /api/public/stats`, `GET /openapi.json`.

## Spending a credit block

`POST /api/chat/topup` returns `sessionToken`. The token starts with `ish_` and lasts 30 days. Send it as `Authorization: Bearer <sessionToken>`.

Spend one credit per answer on `POST /api/chat`:

```json
{ "message": "How should I open this conversation?", "mode": "coach" }
```

`mode` is optional (`chat` or `coach`). The free daily allowance is spent before a purchased credit. `via` in the 200 is `free` or `paid`. A 402 JSON body with `topup` set to `/api/chat/topup` means the balance is empty. That 402 is not an x402 or MPP challenge.

`GET /api/chat/balance` uses the same header and returns `credits` and `freeRemaining`.

`POST /api/chat/ask` does not accept the session token. It charges $0.10 per answer on its own.

## Spend-aware usage

- A single question can use `POST /api/chat/ask` at $0.10. A bought credit is spent on `POST /api/chat`, not on `POST /api/chat/ask`.
- Reuse client idempotency keys (`ref`) on top-up and Window POSTs.
- Adults-only: never fabricate `over18` / `ageAttested` fields.
