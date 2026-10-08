---
name: agentfeed
title: "AgentFeed"
description: "59 pay-per-call JSON endpoints for crypto market state: spot prices, a cross-venue funding radar, open interest, a full Bybit liquidation tape joined with OKX and Binance, Deribit options IV and GEX, stock perps, a macro calendar and Solana token risk."
use_case: "Use when an agent needs current derivatives or liquidation state before acting: what is liquidating now, where funding and open interest sit, whether a cascade is building. Also for Solana token-risk and wallet holdings without an API key."
category: data
service_url: https://x402.ochinimus.app
openapi:
  path: openapi.json
---

AgentFeed is a read-only market-data API for agents, gated per call in USDC.
No accounts and no API keys: every route answers `402` with an x402 challenge
(Solana mainnet, Base, Polygon or Arbitrum), the caller pays, and the same
request returns JSON. x402 v2 clients read the challenge from the `PAYMENT-REQUIRED`
header and pay with `PAYMENT-SIGNATURE`; x402 v1 clients read the same challenge
from the JSON body and pay with `X-PAYMENT`, on Solana or Base.
`/api/sol-price` and `/api/btc-price` also carry an MPP `solana`/`charge`
challenge in `WWW-Authenticate` on the same 402, so `pay` can settle either
protocol. Payment goes to `4a8o45skRPcyjAdyR8yES215Swvh8uTpZD6KLarhxCJ7` on
Solana and `0x22DB3A9686EE5261e7Bf3ed4f91277232E8076e6` on Base, Polygon and
Arbitrum. Take `payTo` from a fresh 402, never from transaction history:
lookalikes of the EVM address have sent address-poisoning transfers.

The liquidation data is the part that is hard to get elsewhere: Bybit's
complete, unthrottled liquidation tape, joined with OKX and Binance, with
history no exchange publishes itself. The measured market count is published
live by the service at `/` under `coverage.perp_markets_7d`, recomputed from
the tape rather than restated here, because a number written into a document
drifts and the tape does not.

The derivatives endpoints cover funding, open interest, long/short account
ratios, basis and volatility, plus a funding radar that scores every liquid
perp's funding on Bybit, OKX and Hyperliquid against each venue's own 30 days; the Solana endpoints cover wallet holdings, token
metadata, holder concentration and rug-risk flags, priority fees and Jito tips.

The options endpoints read Deribit for BTC, ETH, SOL, XRP and HYPE:
`/api/options-summary` returns ATM and 30-day implied vol, 25-delta risk
reversal and butterfly, DVOL and max pain per expiry; `/api/options-gex`
returns dealer gamma exposure by strike and the flip level. `/api/tradfi-radar`
ranks stock, index, commodity and FX perps on Hyperliquid HIP-3 dexes, Bybit,
Binance and OKX by funding, and `/api/equity-24h` gives an indicative weekend
price for a US stock from those perps and its tokenized DEX price.
`/api/macro-calendar` lists FOMC decisions and CPI, NFP and PCE releases with
UTC times.
The peg endpoints are not stablecoins: they measure tokenized US equities that
trade on Solana against the stock itself - the on-chain DEX price versus the
underlying's last real trade, broken out by trading session and ranked across
every tracked name.

Prices run $0.005–$0.1 per call. Six endpoints are free and carry no payment
challenge: `/api/fear-greed`, `/api/last-liquidation`, `/api/exit-method`,
`/api/forecast-record`, `/api/sample` and `/api/sample/{route}`.

The same tools are exposed over MCP at `POST /mcp` for agents that prefer a
tool interface to raw HTTP.

## Spend-aware usage

- `/api/trade-context` ($0.01) bundles prices, funding, fear/greed, positioning
  and liquidations into one response. Prefer it over calling four endpoints
  separately, which costs more and returns a less coherent snapshot.
- `/api/market-state` ($0.02) is the regime read for one symbol: spot,
  realized and implied vol, funding z-score, open interest, long/short,
  basis, liquidation spike and the next macro event in one response.
- `/api/market-snapshot` ($0.005) is the cheaper bundle when you only need
  prices, funding and sentiment.
- `/api/squeeze-score` ($0.1) is the most expensive call in the catalog, at
  twice the next tier. Reach for it when you specifically want the composite
  squeeze read, not as a general market check.
- `/api/cascade` ($0.01) covers the five majors. `/api/cascade-scan` ($0.05)
  widens the same detector to every perp in the tape and costs five times as
  much, so use it only when the whole universe is genuinely the question.
- `/api/liquidations` accepts a symbol; scope it rather than pulling the
  default majors set and filtering client-side.
- Token and wallet endpoints are keyed by mint or address. Cache the identifier
  and call the narrow endpoint directly instead of re-discovering it.
- `/api/fear-greed`, `/api/last-liquidation`, `/api/exit-method` and
  `/api/forecast-record` are free - use them to decide whether a paid call is
  warranted before making one.
- `/api/sample/{route}` returns a paid route's real captured response for free,
  so the exact shape can be checked before paying for it; `/api/sample` lists
  them.

<!--
REVIEW NOTES - the four fields below are proposals, not settled:

  category: data
    Proposed over `finance` because every route is read-only market and
    on-chain data. Nothing here executes a trade, moves funds or touches
    custody, and `finance` in this registry reads as transactional. If the
    maintainers read `finance` as "financial data", that is the better bucket.

  title: "AgentFeed"
    The service's own name, as published in /.well-known/x402.json.

  description
    Written to CONTRIBUTING's rule - capabilities and result shapes, not use
    cases - and sized into the 180-255 band. Leads with the route count and
    the JSON result shape so search ranks it on substance.

  use_case
    Written as the "when to pick this over alternatives" field. Leads with the
    liquidation/derivatives angle because that is the genuinely differentiated
    data; the Solana on-chain routes are second because several registry
    providers already cover those.
-->
