---
name: risk-scanner
title: "Automaton Risk Scanner"
description: "Deterministic Solana token risk scoring with entry confidence signal (ENTER_NOW/WAIT/AVOID/EXIT), Jupiter liquidity-depth price impact at $100/$1K/$10K, deployer wallet freshness, and brand impersonation detection."
use_case: "Use for Solana token risk checks before trading, entry timing decisions, rug-pull and deployer freshness detection, brand impersonation checks (fake USDC/BONK/SOL), and liquidity-depth verification beyond reported TVL."
category: finance
service_url: https://zlv402.wreckbots.io
openapi:
  path: openapi.json
---

Deterministic (no LLM) Solana token risk scoring for AI trading agents.
Combines DexScreener, Helius, Birdeye, and Jupiter into a single scored
response: a 0–100 risk score, a real-time entry confidence signal, deployer
wallet freshness (flags creator wallets funded minutes before launch — a
documented rug pattern), and brand impersonation detection (catches tokens
spoofing established tickers like USDC/BONK/SOL).

Every field is marked verified or unverified — the API never defaults
missing data to "safe." Per-source latency is included in every response.

## Spend-aware usage

- One call per token — the response already includes risk score, entry
  signal, and both authority checks in a single request.
- Cache results client-side for repeat lookups on the same token within
  a short window; token risk profiles don't change second-to-second
  except for live price/liquidity fields.
- Skip calling for tokens your own pipeline has already discarded on an
  earlier pass — the API doesn't deduplicate on your behalf.
