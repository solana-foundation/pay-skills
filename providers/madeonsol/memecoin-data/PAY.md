---
name: memecoin-data
title: "MadeOnSol"
description: "Pay-per-call Solana memecoin intelligence — real-time KOL trade feed from 946+ tracked wallets, multi-KOL coordination clusters, Pump.fun deployer reputation alerts, and KOL-driven hot/trending tokens. USDC settlement on Solana mainnet via x402."
use_case: "Real-time Solana memecoin signals for agents: KOL trade feed, multi-KOL coordination clusters, Pump.fun deployer launch alerts, hot/trending tokens by KOL flow, leaderboards by PnL/winrate/profit-factor, KOL co-trading affinity. Sub-2s latency."
category: data
service_url: https://madeonsol.com/api/x402
openapi:
  path: openapi.json
---

MadeOnSol exposes seven pay-per-call endpoints on x402 for AI agents that need
high-signal Solana memecoin data without an API key. All endpoints settle in
USDC on Solana mainnet via the PayAI facilitator; transaction fees are sponsored
by the facilitator, so the agent's wallet only needs USDC.

Coverage:
- **KOL feed** ($0.005) — every buy/sell from 946+ tracked KOL wallets, stamped with market-cap and USD price at the exact swap moment.
- **KOL leaderboard** ($0.005) — KOLs ranked by realized PnL, win rate, profit factor, ROI, early-entry rank, consistency. Periods: 7d, 30d, 90d, 180d.
- **Hot KOL tokens** ($0.01) — tokens with accelerating KOL interest. Acceleration scoring distinguishes "many KOLs entering fast" from "one KOL still holding."
- **Trending KOL tokens** ($0.01) — tokens by raw KOL buy volume. Pure capital-flow signal: where smart money is right now.
- **Deployer alerts** ($0.01) — real-time launches from tier-graded Pump.fun deployers (elite / good / moderate / rising / cold), cross-referenced with which KOLs bought.
- **KOL coordination** ($0.02) — multi-KOL clusters buying the same token within tight time windows. Includes peak-density window, exit detection, composite 0-100 coordination score, MC at first KOL buy.
- **KOL pairs** ($0.02) — affinity matrix of KOLs that frequently co-trade the same tokens within a 2-hour window. Identifies coordinated groups.

Discovery: `GET https://madeonsol.com/api/x402` returns the full catalog as JSON
(free, no payment).

## Spend-aware usage

- Start with `/api/x402/kol/feed` for general-purpose trade flow; it returns up to 100 trades per call at $0.005.
- For tighter alpha signals, prefer `/api/x402/kol/coordination` (score≥70, min_kols≥4) over polling raw trades — one $0.02 call replaces many feed polls.
- For deployer plays, use `/api/x402/deployer-hunter/alerts?tier=elite` rather than polling all alerts; tier filter at the gateway saves bandwidth and cost.
- `/api/x402/kol/leaderboard` is most useful as a one-shot to pick wallets to follow — not for frequent polling. Sort by `profit_factor` rather than raw `pnl` for better signal.
- All KOL feed entries include `market_cap_usd_at_trade` and `price_usd_at_trade` stamped at the exact swap moment — no separate price lookup needed.
- Token mints in responses are full base58 Solana addresses; use them directly with Jupiter, pump.fun, or any Solana DEX SDK.
- Don't poll the same endpoint sub-30s; cache TTLs of 30-120s apply server-side for hot/trending endpoints. Faster polling burns budget without fresher data.
- For latency-critical applications (sniping new launches), pair the x402 deployer alerts with a copy-trade pipeline; the alerts fire within 1-1.5 seconds of the on-chain confirmation.

## Authentication

- x402 PAYMENT-SIGNATURE header (USDC on Solana mainnet via PayAI facilitator). Agent's Solana wallet IS the identity — no signup or account creation.
- Free discovery at `/api/x402` (no payment).
- For human-operated production apps that prefer monthly subscription billing, MadeOnSol also offers traditional API key auth at https://madeonsol.com/developer (Pro / Ultra tiers).
