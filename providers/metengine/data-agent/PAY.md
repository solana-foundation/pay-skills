---
name: data-agent
title: "MetEngine Data Agent"
description: "Real-time smart-money analytics across Polymarket prediction markets, Hyperliquid perpetual futures, and Meteora Solana LP/AMM pools. 74 endpoints: wallet profiles, whale trades, capital flow, smart-money signals, pool/LP analytics, insider detection."
use_case: "Use for Polymarket smart-money tracking, prediction market intelligence, Hyperliquid trader leaderboards and perp PnL analysis, Meteora LP profiling and pool analytics, whale trade discovery, capital flow by category, and insider behavioral detection."
category: finance
service_url: https://agent.metengine.xyz
openapi:
  url: https://agent.metengine.xyz/openapi.json
---

MetEngine Data Agent provides pay-per-query analytics across three domains: Polymarket prediction markets (38 endpoints), Hyperliquid perpetual futures (18 endpoints), and Meteora Solana LP/AMM pools (18 endpoints). Read-only intelligence — does not execute trades. Built agent-native: no API keys, no accounts, payment is authentication.

Accepts x402 USDC on Solana mainnet. Pricing is dynamic: $0.01 floor, $0.20 ceiling, scaled by tier (light, medium, heavy, whale), timeframe (1h=0.5x → 30d=3x), and result limit. Filter discounts (0.5x–0.7x) apply when narrowing by `category`, `condition_id`, `smart_money_only`, `coin`, `pool_address`, or `pool_type`.

Address conventions: Polymarket uses lowercase 0x hex (Polygon), Hyperliquid uses 0x hex (case-insensitive), Meteora uses base58 Solana pubkeys (case-sensitive).

## Spend-aware usage

- Resolve identifiers cheaply first. Use `GET /api/v1/markets/search` (Polymarket condition_id, $0.01), `GET /api/v1/meteora/pools/search` (pool address, $0.01), or `GET /api/v1/hl/coins/list` ($0.01) before drilling into per-target dossiers.
- Pass `condition_id`, `pool_address`, or `coin` to unlock 0.5x discounts on applicable endpoints (whale trades, sentiment, participants, pool detail, volume history).
- Pass `category` or `smart_money_only=true` to unlock 0.7x discounts on capital-flow, top-performers, whale-trade, and volume-heatmap endpoints.
- Prefer aggregate signals over per-wallet sweeps. `GET /api/v1/markets/smart-signals` returns per-market directional consensus in one call instead of N profile calls. `GET /api/v1/hl/smart-wallets/signals` does the same for Hyperliquid.
- Use `GET /api/v1/markets/closing-soon` ($0.01) before resolution-driven analyses — it surfaces actionable markets without paying for whale or smart-money scans.
- Keep timeframes narrow. Default `24h` is 1.0x; `30d` is 3x and `90d` is 4x. Only escalate to longer windows when the question genuinely requires history.
- Use `POST` endpoints (`/wallets/profile`, `/markets/intelligence`, `/wallets/compare`) when you already have a target wallet, condition_id, or coin. Use `GET` endpoints (`trending`, `top-performers`, `leaderboard`) when you do not yet know the target.
- Cache responses for 60–120s. Trending, leaderboard, and whale-trade results don't change second-to-second; reusing them across reasoning steps in the same task avoids paying twice for the same data.
