---
name: wallet-intelligence
title: "Top Ledger Wallet Intelligence"
description: "Query Solana wallet intelligence across 20+ DeFi protocols, including portfolio net worth, token holdings, lending, staking, yield, LPs, perps, governance, rewards, and DEX PnL."
use_case: "Use for Solana wallet analysis, DeFi portfolio views, protocol exposure checks, token holdings, lending and staking positions, yield and LP positions, governance deposits, rewards, and DEX trading PnL."
category: finance
service_url: https://api.topledger.xyz/pay
endpoints:
  - method: GET
    path: api/wallets/{wallet}/analyze
    resource: wallet
    description: "Analyze a Solana wallet and return total net worth, token holdings, DeFi positions, protocol exposure, rewards, and DEX PnL in one response."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.0004
  - method: GET
    path: api/wallets/{wallet}/holdings
    resource: wallet
    description: "List native SOL, SPL, and Token-2022 holdings for a Solana wallet with real-time USD pricing and optional minimum-value filtering."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.0004
  - method: GET
    path: api/wallets/{wallet}/all-lending
    resource: wallet
    description: "Return lending deposits, borrows, and net value for a Solana wallet across supported protocols such as Kamino, Loopscale, Jupiter Lend, Huma, and Carrot."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.0004
  - method: GET
    path: api/wallets/{wallet}/all-perps
    resource: wallet
    description: "Return perpetual futures positions, collateral, size, and PnL for a Solana wallet across supported perps protocols including Jupiter Perps and Flash Trade."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.0004
  - method: GET
    path: api/wallets/{wallet}/all-staking
    resource: wallet
    description: "Return native SOL and protocol staking positions for a Solana wallet across supported staking systems, including validator and governance staking."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.0004
  - method: GET
    path: api/wallets/{wallet}/all-governance
    resource: wallet
    description: "Return governance token deposits and vote-escrow positions for a Solana wallet across supported DAO systems such as Realms and Tribeca."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.0004
  - method: GET
    path: api/wallets/{wallet}/all-lp
    resource: wallet
    description: "Return liquidity provider positions for a Solana wallet across supported AMMs, including Meteora, Orca Whirlpool, and Raydium pools."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.0004
  - method: GET
    path: api/wallets/{wallet}/all-yield
    resource: wallet
    description: "Return yield-bearing vault and protocol positions for a Solana wallet across supported yield protocols, including Kamino, Loopscale, Exponent, Hylo, and Perena."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.0004
  - method: GET
    path: api/wallets/{wallet}/all-rewards
    resource: wallet
    description: "Return pending and unclaimed rewards for a Solana wallet across supported protocols, including reward amounts and USD value where available."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.0004
  - method: GET
    path: api/wallets/{wallet}/all-dex
    resource: wallet
    description: "Return DEX trading positions for a Solana wallet with FIFO cost basis, current value, realized and unrealized PnL, and seven-day trading performance."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.0004
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

- Call `api/wallets/{wallet}/analyze` first when the user needs an overall
  wallet portfolio summary.
- Use category endpoints for follow-up questions instead of repeating the broad
  analysis call.
- Reuse the same wallet address across calls and avoid polling unless the user
  asks for fresh data.
- Use `api/wallets/{wallet}/holdings` when the task is only about token
  balances, not DeFi positions.
