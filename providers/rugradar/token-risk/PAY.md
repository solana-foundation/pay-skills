---
name: token-risk
title: "RugRadar"
description: "Token danger warnings for Solana, Base, BNB, Ethereum and Arbitrum: rug, honeypot (can-I-sell) and risk-score checks returning a 0-100 score with plain reasons, plus a 24h/48h Solana watch that sends a signed webhook when risk rises."
use_case: "Use for Solana, pump.fun, Base, BNB, Ethereum or Arbitrum token rug checks, rug-pull risk, risk scores, honeypot or can-I-sell checks, and watching a Solana mint for a signed alert when risk rises."
category: security
service_url: https://x402-seller-pmlm.onrender.com
version: v1
openapi:
  path: openapi.json
---

RugRadar checks one token at a time (a Solana mint or an EVM contract) and returns a 0-100 risk score, a risk level, plain-language reasons and a short buyer summary. Pass `chain=solana|base|bnb|ethereum|arbitrum` when needed (`chain` defaults to solana; 0x addresses default to base). `/watch` is Solana-only.

Paid endpoints return HTTP 402 before payment, with an x402 v2 challenge in the `PAYMENT-REQUIRED` header (base64 JSON). Sign the chosen requirement and retry the same request with the credential in the `PAYMENT-SIGNATURE` header. After a successful call, read the settlement receipt from `PAYMENT-RESPONSE`. Clients that only send the v1 `X-PAYMENT` header will not work. Failed calls are never charged: settlement happens only after a successful response.

Pay in USDC on Solana mainnet (fee payer covered — no SOL needed) or on Base, Polygon, Arbitrum, Avalanche, or Sei.

Pricing (x402 `exact`; failed calls are free):

- `GET /rug-check?token=<mint-or-contract>`: $0.01
- `GET /token-safety?token=<mint-or-contract>`: $0.01 (same report, different route name)
- `GET /honeypot-check?token=<mint-or-contract>`: $0.01 (can the token be sold?)
- `GET /watch?token=<mint>&hours=24|48&webhook=<https url>`: $0.05 for 24h, $0.10 for 48h; re-checked about every 10 minutes, one HMAC-signed webhook alert when risk rises.

An MCP server with the same tools (`rug_check`, `token_safety`, `honeypot_check`, `watch_token`) is at https://x402-seller-pmlm.onrender.com/mcp. Guide for bots and agents: https://x402-seller-pmlm.onrender.com/rugradar#agents

Automated heuristic, may be wrong. Not financial advice.

## Spend-aware usage

- One call to `/rug-check` covers the full report; `/token-safety` uses the same engine, so don't call both for the same token.
- Use `/honeypot-check` alone when the only question is whether the token can be sold.
- Use `/watch` instead of polling `/rug-check` repeatedly for a Solana token you already hold.
- Read the current `PAYMENT-REQUIRED` challenge (including `accepts`) before paying rather than assuming a rail or amount from an earlier call.
