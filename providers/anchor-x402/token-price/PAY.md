---
name: token-price
title: "anchor-x402: token price"
description: "Fetch the current USD price for any major token by symbol (BTC, ETH, SOL, USDC, …) or by chain + contract address (Base, Ethereum, Solana, Polygon, Arbitrum). Returns USD price, 24h change percent, market cap, source, and cache age — for $0.001 USDC per call."
use_case: "Use for agent-driven trading checks, treasury valuation snapshots, USD denomination of crypto invoices, settlement-time spot checks, or any workflow that needs a cheap, fresh, sourced token price without a CoinGecko API key."
category: finance
service_url: https://1c09pdnrx1.execute-api.us-east-1.amazonaws.com
openapi:
  url: https://1c09pdnrx1.execute-api.us-east-1.amazonaws.com/openapi.json
---

`GET /v1/price/token` — pay $0.001 USDC, get a USD spot price back.
Two query shapes are accepted:

- `?symbol=ETH` — resolves common symbols (BTC, ETH, SOL, USDC, USDT,
  DAI, BNB, XRP, ADA, DOGE, TRX, TON, AVAX, DOT, MATIC, POL, LINK,
  SHIB, LTC, BCH, UNI, ATOM, XLM, ETC, FIL, NEAR, APT, ARB, OP, PEPE,
  WBTC, WETH). Unrecognized symbols return `404` with the supported
  list — fall back to the contract path for arbitrary tokens.
- `?chain=base&contract=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913` —
  works for any token CoinGecko indexes on the supported chain. Chain
  slugs: `base`, `ethereum`, `solana`, `polygon` (a.k.a. `polygon-pos`),
  `arbitrum` (a.k.a. `arbitrum-one`), `optimism`, `bsc`, `avalanche`.

The response carries `usd` (float), `usd_24h_change_pct` (float, nullable),
`market_cap_usd` (float, nullable), `source: "coingecko"`, `fetched_at`
(Unix epoch of the upstream fetch), and `age_seconds` (0 on a cold call,
up to 60 on a warm cache hit).

Prices are sourced from the CoinGecko free public API and cached
in-process for 60 seconds per (symbol or contract) key. Upstream rate
limits (429s) surface as `503 upstream_error` — retry with backoff.

## Spend-aware usage

- Cache the response client-side. The `age_seconds` field tells you
  how stale the value is; for a 60s in-process cache, re-querying
  inside that window is wasted spend.
- For cross-token portfolio valuation, batch queries by **symbol** when
  possible — symbol resolution hits CoinGecko's `/simple/price`, which
  is cheaper upstream than `/simple/token_price/<chain>`.
- For tokens not in the symbol map (long tail of ERC-20s / SPL tokens),
  use the contract path. The same 60s cache applies, keyed on
  (chain, contract) — repeated lookups of the same token coalesce into
  one upstream call.
- Treat the price as a **spot indicator**, not an oracle. For
  settlement-grade pricing use a TWAP or Chainlink feed; this service
  is intentionally cheap and fast for agent decisioning, not financial
  truth.
- Pair with `/v1/screen` (sanctions clearance) before using this for
  any treasury-moving decision — a fresh price on a sanctioned counterparty
  is still a sanctioned counterparty.
