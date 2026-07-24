---
name: derivatives-pricer
title: "Derivatives Pricer"
description: "x402-paid Black-Scholes European option pricing, full analytic Greeks, and implied-volatility surfaces from market premiums. JSON APIs for agents; USDC on Solana mainnet via PayAI facilitator."
use_case: "Use for option fair value, delta/vega hedging, IV surfaces from premiums, commodity/power/equity European risk, and portfolio Greeks in agent trading workflows."
category: finance
service_url: https://derivatives-pricer-production.up.railway.app
version: v1
openapi:
  path: openapi.json
---

x402 pay-per-request derivatives analytics. No API keys. Settlement: **Solana mainnet USDC** via facilitator `https://facilitator.payai.network`.

OpenAPI: see co-located `openapi.json` (request examples are suitable for `pay catalog` probes).

## Endpoints

| Method | Path | Price (USDC) | Summary |
|--------|------|--------------|---------|
| `POST` | `/v1/option/price` | $0.01 | BSM fair value + full analytic Greeks |
| `POST` | `/v1/volatility/surface` | $0.10 | IV surface + per-quote IV/Greeks from market premiums |
| `GET` | `/` | free | Agent service card (capabilities, examples) |
| `GET` | `/health` | free | Liveness |

### `POST /v1/option/price` — $0.01 USDC

```json
{
  "spot": 100,
  "strike": 100,
  "timeToExpiry": 1,
  "rate": 0.05,
  "volatility": 0.2,
  "optionType": "call",
  "dividendYield": 0
}
```

### `POST /v1/volatility/surface` — $0.10 USDC

Shared `rate` / `dividendYield`; each option has its own `underlying`.

```json
{
  "rate": 0.05,
  "dividendYield": 0,
  "options": [
    {
      "underlying": 100,
      "strike": 90,
      "timeToExpiry": 0.25,
      "optionType": "call",
      "premium": 12.5
    },
    {
      "underlying": 102,
      "strike": 100,
      "timeToExpiry": 0.5,
      "optionType": "call",
      "premium": 8.7
    }
  ]
}
```

## Payment

- Protocol: **x402** (HTTP 402 → `PAYMENT-REQUIRED` header)
- Network: **Solana mainnet** (`solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp`)
- Asset: **USDC**
- Facilitator: `https://facilitator.payai.network`

Unpaid paid-path calls return **402**. Decode `PAYMENT-REQUIRED` (base64 JSON) for amount, asset, and payTo.

## Spend-aware usage

- Prefer `/v1/option/price` for single contracts; use `/v1/volatility/surface` only for book-level IV grids.
- Cap surface `options` to the smallest set that answers the task (max 200).
- Reuse `Idempotency-Key` on retries after successful payment.
- Keep premiums and underlyings in consistent units (e.g. USD/MWh, USD/bbl, index points).
