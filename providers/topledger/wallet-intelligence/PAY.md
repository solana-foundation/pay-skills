---
name: wallet-intelligence
title: "Top Ledger Wallet Intelligence"
description: "Query Solana wallet intelligence across 20+ DeFi protocols, including portfolio net worth, token holdings, lending, staking, yield, LPs, perps, governance, rewards, and DEX PnL."
use_case: "Use for Solana wallet analysis, DeFi portfolio views, protocol exposure checks, token holdings, lending and staking positions, yield and LP positions, governance deposits, rewards, and DEX trading PnL."
category: finance
service_url: https://api.topledger.xyz/pay
openapi:
  path: openapi.json
---

Top Ledger Wallet Intelligence provides pay-per-call Solana DeFi wallet
analysis. Use it when a user gives a Solana wallet address and needs a portfolio
summary, protocol exposure, category-specific positions, token holdings, or DEX
trading PnL without building custom indexers.

The `analyze` endpoint is the best first call for an unknown wallet because it
returns a broad portfolio summary across holdings and DeFi categories. Use the
category endpoints only when the task asks for a narrower view, such as lending,
staking, LP, yield, governance, rewards, perps, or DEX PnL.

## Spend-aware usage

- Call `/api/wallets/{wallet}/analyze` first when the user needs an overall
  wallet portfolio summary.
- Use category endpoints for follow-up questions instead of repeating the broad
  analysis call.
- Reuse the same wallet address across calls and avoid polling unless the user
  asks for fresh data.
- Use `/api/wallets/{wallet}/holdings` when the task is only about token
  balances, not DeFi positions.
