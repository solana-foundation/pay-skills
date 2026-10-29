---
name: stationfx
title: "Station f(x)"
description: "Pay-per-call economic time series and computed macro signals, plus Deep Tech Scout AI product-concept intelligence, a JSON-to-TOON converter and agent state slots. USDC on Base or Solana, no account."
use_case: "Use for macro indicators, yield curve, real rates and credit stress data, daily AI and deep-tech opportunity scouting, compact TOON output for LLM context, or shared state between agents."
category: data
service_url: https://stationfx.com
openapi:
  path: openapi.json
---

Station f(x) is a pay-per-call data marketplace for AI agents. There are no accounts and no API keys: an agent requests a URL, receives an x402 `402 Payment Required` challenge, signs a USDC payment on Base or Solana, and repeats the request to receive the data.

## What is available

- **Economic data** at `/economic-data/{category}/{slug}`: time series (about $0.005 per call) and computed cross-series signals such as real federal funds rate, yield curve and credit stress (about $0.008 per call). Find valid paths for free with `/catalog-index.json` and `/discover/search?q=<topic>`.
- **Deep Tech Scout** at `/tech-scout/syntheses/top` ($0.01, top 20 concepts) and `/tech-scout/syntheses/full` ($0.05, up to 1,000 concepts, about 3.5 MB). Product concepts synthesized from arXiv, HuggingFace and lab blogs, ranked by opportunity score. `/tech-scout/syntheses/meta` is free and tells you whether the data changed since your last purchase.
- **JSON to TOON** at `POST /util/convert/json-to-toon` ($0.005): converts tabular JSON to a compact text format that uses far fewer tokens.
- **Bearer tokens** at `POST /token/purchase` ($0.25 for 50 calls over 24 hours) and **agent state slots** at `POST /slot/buy/1` ($0.05) and `/slot/buy/10` ($0.40) for coordinating agent swarms.

Discovery is free: `/discover/*`, `/discovery/resources`, `/.well-known/x402`, `/.well-known/stationfx.json` and `/llms.txt`.

## Spend-aware usage

- Check `/tech-scout/syntheses/meta` before paying for a Deep Tech Scout call. Store `updated_at` after each purchase and pay again only when it changes.
- Series and signal prices differ slightly. The 402 challenge for the exact URL is authoritative.
- The `full` Deep Tech Scout response is large. Set the client read timeout to at least 30 seconds.
- For many calls in one session, a bearer token is cheaper than paying each call separately.
