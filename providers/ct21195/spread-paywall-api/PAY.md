---
name: spread-paywall-api
title: "Spread Paywall API"
description: "Pay-per-call market data for AI agents: prediction-market spreads across Kalshi and Polymarket, crypto and stock prices, market briefs, sports, and data tools. No accounts or API keys — USDC per call via x402."
use_case: "Use when an agent needs a live prediction-market spread, a topic or market research brief, crypto or stock prices, sports scores, or expiring-market alerts mid-task and can pay per call in USDC."
category: finance
service_url: https://workspace-x402-paywall.onrender.com
openapi:
  path: openapi.json
---

Spread Paywall API offers 181 pay-per-call endpoints for AI agents: prediction-market spreads (the same event priced on Kalshi vs Polymarket), market and topic research briefs, crypto and stock prices, sports scores and odds, election data, expiring-market alerts, Solana token audits, and everyday data utilities. No accounts, no API keys — the x402 payment is the credential.

Pricing is per call in USDC: $0.001 utilities, $0.003 chain data, $0.005 spread and core market data, $0.01 AI asks, $0.015–$0.02 market briefs, $0.05 topic briefs.

x402 USDC payment accepted on Solana mainnet and Base.

## Spend-aware usage

- Use `/spread` for the headline job: the Kalshi-vs-Polymarket spread on an event, in one $0.005 call.
- Use `/markets/expiring-soon` ($0.015) to find markets closing within 48 hours instead of scanning full market lists.
- Use `/market/brief` ($0.02) for a structured market brief; use `/brief/topic` ($0.05) only when a full multi-source topic brief (live markets, filings, context) is worth the premium.
- Use `/crypto/prices` for a price snapshot instead of chaining single-asset lookups.
- The $0.001 `/utils/*` endpoints (time, UUID, base64, IP) are the cheapest way to sanity-check that a payment flow works before spending on data.
