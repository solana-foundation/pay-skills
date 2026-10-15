---
name: the-stall
title: "The Stall by IntuiTek¹"
description: "299 pay-per-call AI capabilities on Base mainnet via x402 USDC — stock prices, earnings, DeFi analytics, macro indicators, prediction markets, research synthesis, company intelligence, crypto, options, OSINT, and more. No API keys or accounts."
use_case: "Use for equity research (stock prices, earnings, fundamentals, analyst ratings, insider trades), DeFi analytics (yields, TVL, token security, wallet screening), macro intelligence (Fed data, economic indicators, sector rotation), prediction markets (Polymarket), research synthesis, company due diligence, patent search, NPI lookup, and OSINT. Pay USDC on Base per call — no subscriptions."
category: finance
service_url: https://the-stall.intuitek.ai
openapi:
  url: https://the-stall.intuitek.ai/openapi.json
---

The Stall is a domain-agnostic x402 capability chassis serving 299 AI-callable data tools over USDC on Base mainnet. No API keys, no accounts, no subscriptions — pay per call with exact USDC micropayments.

## What you get

**Equity & Earnings:** stock prices (single + multi-ticker batch), earnings calendar, earnings estimates, earnings surprises, earnings quality, analyst ratings, analyst upgrades, insider trades, institutional ownership, form 144, SEC filings, income statements, balance sheets, cash flow, equity fundamentals, equity technicals, equity brief, equity sentiment, dividend intel, options chain, options flow, equity watchlist.

**DeFi & Crypto:** token security scores, wallet screening, DeFi yields, DEX pools, DeFi TVL, chain pulse, crypto brief, crypto fear/greed, crypto top movers, crypto momentum, stablecoin watch, meme radar, defillama protocol, address intel, wallet balance, ERC-20 snapshot, whale radar.

**Macro & Economic:** FRED query, economic calendar, economic momentum, inflation intel, labor market, treasury yields, FOMC tracker, sector rotation, market breadth, market regime intel, market intelligence, global equity indices, COT positioning.

**Research & Intelligence:** research synthesis ($2.50 — moat cap), fact-check, company research bundle, company due diligence, company intel, merger/acquisition intel, activist investor intel, hedge fund holdings, peer benchmarking, patent intel, PubMed intel, arXiv intel, clinical trials, SEC full-text search.

**Prediction & Social:** Polymarket intel, Polymarket sentiment shift, Polymarket whale entries, Polymarket accuracy score, Reddit intel, social momentum, Twitter/X intel, news sentiment, social intel.

**Identity & Compliance:** NPI lookup (healthcare providers), FDIC bank intel, FEC donor intel, government contract intel, nonprofit intel, entity clearance, sanctions screening, wallet credit score.

## Pricing highlights

- `us-stock-price`: $0.295/call (168+ confirmed calls, 46+ payers)
- `research-synthesis`: $2.50/call (moat — unique multi-source synthesis)
- `energy-brief`: $0.990/call (sector + commodity + weather brief)
- `fact-check`: $0.470/call
- Most data caps: $0.021–$0.099/call

## Spend-aware usage

- For multi-ticker price lookups, use `stock-price-multi` (batches 5 tickers at $0.295 = $0.059/ticker) instead of calling `us-stock-price` 5× ($1.475 total).
- For complete earnings context, `earnings-intel-bundle` covers calendar + estimates + surprises + quality in one call.
- For company-level research, `company-research-bundle` and `company-due-diligence` cover more ground than piecing together individual caps.
- `research-synthesis` ($2.50) returns multi-source analysis — use it when depth matters; use raw data caps when you need a single clean number.
- MCP interface at `/mcp` supports Streamable HTTP for streaming-capable clients.
