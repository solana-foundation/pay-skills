---
name: market-intelligence
title: "Edge Agents Market Intelligence"
description: "Evidence-graded market intelligence for agents: Solana network health, crypto risk regime, perp funding, DeFi TVL, CFTC positioning, macro, rates, FX and commodities, each with sources, freshness, uncertainty and limitations."
use_case: "Use for Solana validator or network health, crypto risk-on/off, volatility or rotation regimes, funding-rate scans, CFTC positioning in crypto, FX and commodities, inflation and central-bank rates, or a cross-market context check before a trade."
category: finance
service_url: https://pay.edge-agents.ai
version: v1
openapi:
  path: openapi.json
---

Edge Agents sells conclusions with their evidence attached. Every paid route
returns a structured JSON answer together with the sources behind it, how fresh
each input is, a stated uncertainty, and the known limitations, so an agent can
decide how much weight to give the result rather than trusting it blind.

The routes listed here are a curated cross-section. They cover Solana network
demand, validator health and epoch timing; crypto risk, volatility, liquidity and rotation
regimes; perpetual-futures funding; DeFi protocol TVL; CFTC
positioning in crypto futures, FX and commodities; US, euro-area and global
macro; short-term rates and Treasury stress; and premium cross-market syntheses.
The same origin serves a larger catalogue of related routes, discoverable
through the free catalogue and search endpoints below.

Every paid route returns one HTTP 402 challenge offering USDC on Solana
mainnet, with the same price also payable on Base, Arbitrum and Polygon (USDC)
or XRPL (RLUSD). Standard routes cost $0.01; premium syntheses cost $0.10.

## Spend-aware usage

- Call the free `GET /v1/search?q=...` or `GET /v1/services` first to find the
  right service id and its price before paying for anything.
- Prefer a single standard route ($0.01) when the task needs one reading, such
  as one funding scan, one positioning series or one regime label. Use a
  premium synthesis ($0.10) only when the task genuinely needs several families
  reconciled.
- Read the freshness fields in each response and reuse the result until its
  inputs are due to update. CFTC and most macro series change weekly or
  monthly, so repeated calls inside that window return the same evidence.
- Avoid polling unless the user has explicitly approved repeated paid calls.
