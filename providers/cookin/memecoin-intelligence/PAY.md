---
name: memecoin-intelligence
title: "Cookin Memecoin Intelligence"
description: "Solana and Pump.fun memecoin intelligence: token quality scores, bundle and coordinated wallet detection, holder behavior, KOL positions, trader profiles, deployer history. Pay per call in USDC; no API key."
use_case: "Use for pre-trade checks on new Solana or Pump.fun tokens: bundled supply, coordinated wallets, rug risk, holder quality, KOL holders, wallet or trader reputation, deployer launch history, memecoin due diligence."
category: finance
service_url: https://api.cookin.fun
openapi:
  path: openapi.json
---

Cookin tracks every Pump.fun launch in real time and scores it on about 50 metrics built from who holds and trades it. The API returns that analysis, not raw chain data: which wallets act as a coordinated group (bundles), how much supply they hold, whether holders historically pick winners or dump charts, which KOLs hold, and how a deployer's earlier launches ended.

Every token snapshot includes `ratings`: a green, yellow, or red verdict per metric, using the same thresholds as the Cookin UI. An agent can gate a trade on the ratings without interpreting each number.

Pay per call with x402 (USDC on Solana; the facilitator pays network fees). Heavy users can buy a Pro API key instead (1 SOL per 30 days, 600 requests per minute, WebSocket streams) at https://cookin.fun/account/api-keys.

## Pricing

| Price | Route |
|-------|-------|
| $0.02 | `GET /v1/tokens/{mint}`: full token snapshot with ratings |
| $0.01 | every other route: trades, token lists, trader profile, deployer history |

## Spend-aware usage

- **Start with one snapshot per token.** `GET /v1/tokens/{mint}` answers most pre-trade questions in one $0.02 call: score, bundles, holder behavior, KOLs, ratings.
- **Trim with `?fields=`.** `?fields=bundles,score,ratings` returns only those groups at the same price, and keeps responses small.
- **Use the lists to find candidates.** `GET /v1/tokens/new` returns filtered new launches in one $0.01 call. Snapshot only the ones worth a closer look.
- **Check the deployer once.** `GET /v1/devs/{address}/tokens` shows the deployer's history; its result changes slowly, so cache it.
- **A 404 is free.** Calls are settled only when data is returned.
