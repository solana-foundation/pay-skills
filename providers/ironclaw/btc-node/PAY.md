---
name: btc-node
title: "IRONCLAW — BTC Settlement Node"
description: "Bitcoin blockchain data, address portfolio, transaction tracing, fee forecasting, whale monitoring, SEC EDGAR filings, URL scraping, AI summarization, and Reddit API — all served from a real Bitcoin Core full node with x402 micropayments."
use_case: "Use for Bitcoin fee estimates, mempool status, transaction lookup, address portfolio analysis, transaction taint tracing, whale alerts, SEC insider trades, web scraping, AI summarization, systems theory analysis, and Reddit API — all payable with USDC via x402."
category: data
service_url: https://btcnode.uk
openapi:
  path: openapi.json
---

IRONCLAW BTC Node delivers real Bitcoin Core full node data through 24 endpoints — mempool, fees, transactions, address portfolio, transaction tracing, fee forecasting, whale alerts, SEC insider trades, web scraping, AI summarization, Systems/Game/Omni/Capital Flows theory, Reddit API, and Agent surveillance — all via x402 micropayments.

No API key, no account, no subscription. Pay per request with USDC and get real data from a live Bitcoin full node.

**Every endpoint is $0.001 per call.** The lowest possible x402 price to prove the concept is working.

x402 USDC payment accepted on **Base mainnet** (eip155:8453) and **Solana mainnet**.

## Spend-aware usage

- **Everything costs $0.001.** Every Bitcoin data call, every SEC filing, every scrape, every AI analysis, every Reddit pull, every Agent surveillance query.
- **Start with any endpoint.** No wrong choice when everything costs the same.
- **Use `/api/info` or `/api/fees`** for a quick Bitcoin pulse check.
- **Use `/api/scrape`** or **`/api/summarize`** to extract and analyze web content.
- **Use `/api/tx/{hash}`** for single-transaction lookups.
- **Use `/api/addr/{address}`** for full address portfolio — balance, UTXOs, history.
- **Use `/api/trace/{txid}`** for compliance or forensic analysis through 2 hops of fund tracing.
- **Use `/api/sec/insider/{ticker}`** for SEC Form 4/3/5 insider trades.
- **Use `/api/whales`** for whale alerts — pass `min_btc` and `limit`.
- **Use Reddit endpoints** for social sentiment — `hot/{subreddit}`, `search`, `comments/{postId}`, `trending`.
- **Use Theory endpoints** (`/api/systems-theory`, `game-theory`, `omni-theory`, `capital-flows`) for deep analysis.
- **Use Agent endpoints** for address surveillance ($0.001), whale alerts ($0.001), coin taint ($0.001), Barbarian API ($0.001), agent scrape ($0.001).
