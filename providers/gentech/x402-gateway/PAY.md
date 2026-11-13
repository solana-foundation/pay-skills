---
name: x402-gateway
title: "GenTech Labs — x402 agentic treasury + DeFi intelligence gateway"
description: "Pay-per-call cross-chain crypto intelligence for the agent economy: DeFi LP analysis, token security/rugcheck, wallet portfolio, ERC-8004 agent discovery, real-time prices, treasury defense, and AI research. HTTP 402 x402 v2 in USDC, no account."
use_case: "Use for DeFi LP efficiency scoring, token risk/rugcheck, wallet portfolio balances and USD value, ERC-8004 agent discovery, real-time crypto price, airdrop/dust token classification, and on-demand AI research — paid per-call USDC over x402, no account."
category: finance
service_url: https://api.gentechlabs.net
version: 9.4.0
endpoints:
  - method: GET
    path: /v1/defi/lp/{address}
    resource: defi
    description: "DeFi LP pool analysis with efficiency scoring, sourcing pool metrics across Solana, Base, Ethereum, and BNB via DexScreener."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
  - method: GET
    path: /v1/security/score/{address}
    resource: security
    description: "Token risk and rugcheck scoring with risk attributes for a given contract address."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: GET
    path: /v1/wallet/portfolio/{address}
    resource: wallet
    description: "Wallet portfolio analysis returning token balances and USD valuation (Solana)."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
  - method: GET
    path: /v1/agents/search
    resource: agents
    description: "Search the ERC-8004 registry for on-chain AI agents and their identities."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: GET
    path: /v1/market/price/{symbol}
    resource: market
    description: "Real-time crypto market price data for a symbol."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.005
  - method: GET
    path: /v1/defender/classify/{chainId}/{token}
    resource: defender
    description: "Classify an airdrop or dust token as known or suspicious (homoglyph impersonation, no liquidity) and get safe burn calldata."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: GET
    path: /v1/lineage/guard
    resource: lineage
    description: "Data lineage blast-radius guard, evaluating what breaks if a dataset changes."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
  - method: GET
    path: /v1/deals/deals
    resource: deals
    description: "Game deal tracking, price-watch, and release radar."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.005
  - method: GET
    path: /v1/agent/research
    resource: agent
    description: "On-demand AI agent research, analysis, and document processing for a task and topic."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.05
  - method: GET
    path: /v1/nft/search
    resource: nft
    description: "NFT collection search across Solana via Magic Eden."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
---

GenTech Labs runs a cross-chain agentic-treasury gateway that agents call
pay-per-call over HTTP x402 v2, paid in USDC. The live 402 challenges accept
USDC on Solana, Base (eip155:8453), Avalanche (eip155:43114), X Layer
(eip155:196), and Algorand. No account, no API key, no subscription — an
agent that calls twice pays twice; a wallet-capable agent hits an endpoint, gets
an HTTP 402 with the exact price and accepted networks, signs with its wallet,
and retries with `Payment-Signature`.

The service set is treasury-first and DeFi-oriented: LP pool analytics,
token-risk/rugcheck, wallet portfolio valuation, ERC-8004 agent discovery,
real-time market prices, airdrop/dust-token defense, and on-demand AI research.

## Endpoint inputs

The paid routes take path or query parameters (substituted into the path, or
sent as query strings on `GET`):

| Endpoint | Input |
|----------|-------|
| `/v1/defi/lp/{address}` | `address` — pool or LP position address |
| `/v1/security/score/{address}` | `address` — token contract address |
| `/v1/wallet/portfolio/{address}` | `address` — wallet address |
| `/v1/agents/search` | `q` — search query |
| `/v1/market/price/{symbol}` | `symbol` — e.g. `SOL`, `BTC` |
| `/v1/defender/classify/{chainId}/{token}` | `chainId` — CAIP chain id; `token` — address |
| `/v1/lineage/guard` | `urn` — dataset URN |
| `/v1/deals/deals` | no required params — returns the tracked deal list |
| `/v1/agent/research` | `task` — research task; `topic` — topic |
| `/v1/nft/search` | `query` — NFT collection name |

## Spend-aware usage

- Prefer a single narrow lookup (one symbol, one address) over broad loops.
- Use `/v1/market/price/{symbol}` for a spot check instead of polling RPC.
- Cache the ERC-8004 `agent/search` result for a session rather than re-searching.
- Confirm the exact price from the 402 challenge before paying; prices range
  $0.005–$0.05 per call depending on the service.
- NFT search returns collections; request only the page you need.
