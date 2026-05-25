---
name: regulatory-intel
title: "Crypto ETF Sentinel"
description: "Regulatory data oracle for US spot crypto ETFs. Real-time SEC EDGAR filings, issuer pipeline classification (registration_filed / under_review / launch_imminent / trading), comment letters, XBRL financials, POS AM profiles, and predictive launch signals."
use_case: "Use for crypto ETF approval research, regulatory pipeline monitoring, issuer comment-letter tracking, fee-war analysis, AUM growth charts, predictive launch signals, and POS AM in-kind / AP / redemption-structure data not surfaced by retail trackers."
category: finance
service_url: https://api.cryptoetfsentinel.com
version: v1
openapi:
  path: openapi.json
---

Curated regulatory data oracle for the US spot crypto ETF universe — 105 active issuers across 34 cryptocurrencies, ~3,150 indexed filings, ~19,800 XBRL facts. Every paid endpoint accepts USDC via x402 on Base mainnet (`eip155:8453`) or Solana mainnet (`solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp`); both `accepts[]` entries are returned in every 402 challenge.

The catalogue covers the full pipeline lifecycle: registration filings (S-1 / S-1A), SEC review activity (UPLOAD / CORRESP comment letters), launch certifications (EFFECT, 8-A12B, CERT), and post-launch financials (XBRL leaderboards, AUM growth, fee war tracker).

## Spend-aware usage

- Start with `/v1/agent/snapshot` ($0.05) for a one-call regulatory pipeline overview — issuers under review, recent filings, fee leaderboard, AUM totals.
- Use `/v1/agent/filings/recent` ($0.20) for the real-time delay-free filings feed when you need to poll for newly filed forms; the free `/v1/filings` mirror lags by 24 hours.
- Use `/v1/agent/issuers` ($1.00) for the full curated catalogue when you need every active issuer (~105 entries). Cache the result — the issuer list changes slowly.
- For per-issuer drilldowns, pair the catalogue with cheap per-CIK routes: `/v1/profiles/issuer?cik=...` ($0.03), `/v1/xbrl/issuer?cik=...` ($0.05), `/v1/issuers/comment-letters?cik=...` ($0.05).
- Predictive signals (`/v1/pipeline/risk-scores`, `outcome-signals`, `launch-monitor`, `velocity`, `cohort-state`) are $0.50 each — each replaces ~hours of manual pipeline reading. Pick the one matching your task; don't fetch all five.
- Free tier (no key, no payment) exists at `/v1/issuers` (top-10 by AUM only), `/v1/filings` (24-hour delay), and `/v1/stats` — use these for exploration before paying.
