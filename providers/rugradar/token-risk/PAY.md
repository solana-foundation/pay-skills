---
name: token-risk
title: "RugRadar"
description: "Solana token danger warnings: rug check, token safety and honeypot (can-I-sell) checks returning a 0-100 risk score with plain reasons, plus a 24h/48h watch that sends a signed webhook alert when risk rises."
use_case: "Use for Solana or pump.fun memecoin rug checks, rug pull risk, token safety scores, honeypot or can-I-sell checks, mint/freeze authority checks, and watching a mint for dev sells or liquidity pulls before or after buying."
category: security
service_url: https://x402-seller-pmlm.onrender.com
version: v1
openapi:
  path: openapi.json
---

RugRadar checks one Solana token mint at a time and returns a 0-100 risk score, a risk level, plain-language reasons and a short buyer summary. Signals include mint/freeze authority, holder concentration, liquidity, dev holding and sells, snipers, bundles and a live Jupiter sell quote.

Pricing (x402, USDC on Solana mainnet; failed calls are free):

- `GET /rug-check?token=<mint>`: $0.01
- `GET /token-safety?token=<mint>`: $0.01 (same engine, token-safety framing)
- `GET /honeypot-check?token=<mint>`: $0.01 (can the token be sold?)
- `GET /watch?token=<mint>&hours=24|48&webhook=<https url>`: $0.05 for 24h, $0.10 for 48h; re-checked about every 10 minutes, one HMAC-signed webhook alert per trigger (dev sells, liquidity drops 30%+, mint/freeze authority appears, risk score jumps 20+, token can't be sold).

An MCP server with the same tools (`rug_check`, `token_safety`, `honeypot_check`, `watch_token`) is at https://x402-seller-pmlm.onrender.com/mcp. Guide for bots and agents: https://x402-seller-pmlm.onrender.com/rugradar#agents

Automated heuristic, may be wrong. Not financial advice.

## Spend-aware usage

- One call to `/rug-check` covers the full report; `/token-safety` uses the same engine, so don't call both for the same mint.
- Use `/honeypot-check` alone when the only question is whether the token can be sold.
- Use `/watch` instead of polling `/rug-check` repeatedly for a token you already hold.
