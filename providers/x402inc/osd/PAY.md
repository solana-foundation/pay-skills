---
name: osd
title: "Onchain Stock Data"
description: "Pay-per-request onchain data for tokenized US equities (xStocks on Solana): DEX liquidity vs underlying, holder concentration, IPO calendar, plus a weekly Claude equity portfolio with auto-scored, evidence-linked catalyst verdicts. No API keys."
use_case: "Use for tokenized US-equity onchain liquidity and holder distribution, Backpack/Superstate IPO calendar, the xStocks registry/quotes, and verifiable catalyst resolution (hit/partial/miss with evidence URLs) in agent research and portfolio workflows."
category: finance
service_url: https://osd-coral.vercel.app
openapi:
  path: openapi.json
---

Onchain data for tokenized US equities, built for agents. The scarce part is the onchain observation incumbents do not hold: DEX liquidity and price deviation vs the underlying, and holder concentration, for xStocks-tokenized US stocks on Solana. Alongside it, a weekly Claude-selected 10-stock portfolio whose catalysts are auto-scored after their target date into hit / partial / miss with evidence URLs, so an agent can read a verifiable track record instead of a self-reported claim.

x402 USDC accepted on Base and Solana mainnet; the onchain-data endpoints (IPO, liquidity, holders) are Solana USDC only. Most single lookups are $0.01; analyst and predict price by depth ($0.50 / $1.50 / $3.00). The weekly portfolio, its scorecard, and the external catalyst submit/score endpoints are free and CORS-open.

## Spend-aware usage
- Use `GET /api/stocks/{ticker}` for a single name instead of pulling the full `/api/stocks` registry.
- Use `GET /api/liquidity` and `GET /api/holders` (Solana USDC) for the onchain-only signals not available from ordinary equity data.
- Read the free `GET /api/alpha/portfolio/scorecard` to check the catalyst track record before paying for `/api/predict` or `/api/analyst`.
- `POST /api/analyst` and `POST /api/predict` accept `depth: quick|standard|deep`; start with `quick` ($0.50) and escalate only if needed.
- Submit your own hypothesis free via `POST /api/alpha/catalyst/submit`, then poll `GET /api/alpha/catalyst/{id}/score` after the target date for an evidence-linked verdict.
