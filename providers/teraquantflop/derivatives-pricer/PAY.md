---
name: derivatives-pricer
title: "Derivatives Pricer"
description: "x402-paid Black-Scholes European option pricing, full analytic Greeks, single-premium IV, IV surfaces, price/scenario on submitted smiles, portfolio net Greeks, and scenario reprice. JSON APIs for agents; USDC on Solana mainnet (PayAI) and Base mainnet (CDP)."
use_case: "Use for option fair value, delta/vega hedging, IV from premiums, pricing on a smile, sticky surface scenarios, portfolio Greeks, scenario P&L, commodity/power/equity European risk in agent trading workflows."
category: finance
service_url: https://derivatives-pricer-production.up.railway.app
version: v1
openapi:
  path: openapi.json
---

x402 pay-per-request derivatives analytics. No API keys. Settlement: **Solana mainnet (PayAI) and Base mainnet (CDP)** USDC exact. Unpaid calls return HTTP 402 with accepts for **both** networks.

OpenAPI: see co-located `openapi.json` (request examples are suitable for `pay catalog` probes).

MCP Streamable HTTP at `POST /mcp` (tools mirror paid HTTP routes; free `service_info`). See `/llms.txt`.

## Endpoints

| Method | Path | Price (USDC) | Summary |
|--------|------|--------------|---------|
| `POST` | `/v1/option/price` | $0.01 | BSM fair value + full analytic Greeks |
| `POST` | `/v1/option/implied-vol` | $0.03 | Solve IV from one market premium + Greeks |
| `POST` | `/v1/volatility/surface` | $0.10 | IV surface + per-quote IV/Greeks from market premiums |
| `POST` | `/v1/option/price-from-surface` | $0.08 | Price options on a submitted IV surface (TV bilinear) |
| `POST` | `/v1/option/scenario-from-surface` | $0.15 | Book reval on surface + sticky smile shocks |
| `POST` | `/v1/portfolio/greeks` | $0.15 | Net MTM + Greeks for multi-leg books |
| `POST` | `/v1/portfolio/scenario` | $0.25 | Scenario reprice (scalar spot/vol/time shocks) |
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

### `POST /v1/option/implied-vol` — $0.03 USDC

Solve Black-Scholes implied vol from a single market premium; returns σ̂, full Greeks, modelPrice, priceError, iterations.

```json
{
  "underlying": 100,
  "strike": 100,
  "timeToExpiry": 1,
  "rate": 0.05,
  "dividendYield": 0,
  "optionType": "call",
  "premium": 10.45057562
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
      "premium": 12.21003823
    },
    {
      "underlying": 102,
      "strike": 100,
      "timeToExpiry": 0.5,
      "optionType": "call",
      "premium": 8.67399132
    }
  ]
}
```

### `POST /v1/option/price-from-surface` — $0.08 USDC

Price options on a submitted IV surface. `surfaceConvention=log_moneyness_forward`, `interpolation=total_variance_bilinear` (\(w=\sigma^2 T\)), `wingRule=flat_vol`. Caps: 200 surface points, 50 options.

```json
{
  "surfaceConvention": "log_moneyness_forward",
  "rate": 0.05,
  "dividendYield": 0,
  "surface": [
    { "k": -0.1, "timeToExpiry": 1, "iv": 0.205 },
    { "k": 0, "timeToExpiry": 1, "iv": 0.2 },
    { "k": 0.1, "timeToExpiry": 1, "iv": 0.215 }
  ],
  "options": [
    {
      "underlying": 100,
      "strike": 100,
      "timeToExpiry": 1,
      "optionType": "call",
      "quantity": 1
    }
  ]
}
```

### `POST /v1/option/scenario-from-surface` — $0.15 USDC

Base vs scenario on the same interpolator. Sticky: `moneyness` | `strike` | `fixed_vol`. Vol order: interpolate → `volAbs` → `volRel` → `smileTwist * k`. Reject if both `underlyingRel` and `underlyingAbs` set.

```json
{
  "surfaceConvention": "log_moneyness_forward",
  "rate": 0.05,
  "sticky": "moneyness",
  "surface": [
    { "k": -0.1, "timeToExpiry": 1, "iv": 0.205 },
    { "k": 0, "timeToExpiry": 1, "iv": 0.2 },
    { "k": 0.1, "timeToExpiry": 1, "iv": 0.215 }
  ],
  "positions": [
    {
      "underlying": 100,
      "strike": 100,
      "timeToExpiry": 1,
      "optionType": "call",
      "quantity": 1
    }
  ],
  "scenario": {
    "underlyingRel": 0.1,
    "smileTwist": 0
  }
}
```

### `POST /v1/portfolio/greeks` — $0.15 USDC

Net MTM and Greeks for multi-leg European books. `quantity > 0` = long, `quantity < 0` = short.

```json
{
  "rate": 0.05,
  "dividendYield": 0,
  "includeDollarGreeks": true,
  "positions": [
    {
      "underlying": 100,
      "strike": 100,
      "timeToExpiry": 1,
      "optionType": "call",
      "quantity": 10,
      "volatility": 0.2
    },
    {
      "underlying": 100,
      "strike": 110,
      "timeToExpiry": 1,
      "optionType": "put",
      "quantity": -5,
      "volatility": 0.22
    }
  ]
}
```

### `POST /v1/portfolio/scenario` — $0.25 USDC

Base MTM + Greeks, then reprice under relative `spotShock` / `volShock` and `timeDecayDays`.

```json
{
  "rate": 0.05,
  "dividendYield": 0,
  "positions": [
    {
      "underlying": 100,
      "strike": 100,
      "timeToExpiry": 1,
      "optionType": "call",
      "quantity": 10,
      "volatility": 0.2
    },
    {
      "underlying": 100,
      "strike": 110,
      "timeToExpiry": 1,
      "optionType": "put",
      "quantity": -5,
      "volatility": 0.22
    }
  ],
  "scenarios": [
    {
      "name": "spot_down_10",
      "spotShock": -0.1,
      "volShock": 0,
      "timeDecayDays": 0
    },
    {
      "name": "vol_up_20pct_rel",
      "spotShock": 0,
      "volShock": 0.2,
      "timeDecayDays": 1
    }
  ]
}
```

## Payment

- Protocol: **x402** (HTTP 402 → `PAYMENT-REQUIRED` header)
- Asset: **USDC**
- Scheme: **exact**
- Facilitator: `https://facilitator.payai.network`
- Networks (client may pay on **either**):

| Network | CAIP-2 | payTo |
|---------|--------|-------|
| Solana mainnet | `solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp` | server `PAY_TO_ADDRESS` / `PAY_TO_SVM_ADDRESS` |
| Base mainnet | `eip155:8453` | `0x34cfb8bdbf16e4484b7da0ed31deed5771b16c8f` (`PAY_TO_EVM_ADDRESS`) |

Unpaid paid-path calls return **402**. Decode `PAYMENT-REQUIRED` (base64 JSON) for `accepts[]` — each entry has network, amount/price, asset, and payTo. Pick Solana **or** Base and settle USDC on that chain.

## Spend-aware usage

- Prefer `/v1/option/price` for single contracts; `/v1/option/implied-vol` for one-premium IV; use `/v1/volatility/surface` only for book-level IV grids.
- Use `/v1/option/price-from-surface` when you already have a smile; `/v1/option/scenario-from-surface` for sticky smile book reval.
- Use `/v1/portfolio/greeks` for net risk; `/v1/portfolio/scenario` for scalar-σ what-if P&L (higher price).
- Cap surface points/options and portfolio `positions`/`scenarios` to the smallest set that answers the task.
- Reuse `Idempotency-Key` on retries after successful payment.
- Keep premiums and underlyings in consistent units (e.g. USD/MWh, USD/bbl, index points).
