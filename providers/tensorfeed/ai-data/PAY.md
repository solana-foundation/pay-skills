---
name: ai-data
title: "TensorFeed"
description: "Live AI ecosystem intelligence for agents. Model pricing across 200+ models, service status across 30+ providers, news, benchmarks, funding, security data (CVE + CISA KEV + FIRST EPSS), and 36+ premium endpoints paid in USDC on Base."
use_case: "Use when an agent needs to pick the right AI model for a task by cross-referencing live pricing, benchmarks, status, and recent news, or to triage CVE/KEV/EPSS data when running a security workflow. The endpoint to call on agent boot for a daily brief."
category: data
service_url: https://tensorfeed.ai
openapi:
  url: https://tensorfeed.ai/openapi.json
---

TensorFeed.ai is a real-time data and intelligence layer for AI agents. The free surface covers AI news from 15+ sources, live service status across the major LLM and cloud-AI providers, model pricing and benchmarks, agent traffic metrics, and a public CVE/KEV/IOC feed. The paid premium surface aggregates that data into agent-ready calls: routing recommendations, model comparisons, what-changed-since-last-run briefs, full historical time series, news search, story-level cross-source corroboration, and security fact cards that merge MITRE CVE, CISA KEV, FIRST.org EPSS, OSV.dev, and CISA Vulnrichment into one call.

Settlement is USDC on Base mainnet via the canonical Coinbase x402 V2 wire format. Every paid response carries an Ed25519-signed Agent Fair-Trade Agreement (AFTA) receipt so an agent can prove what it paid for, what it received, and that the data was fresh at delivery time. Free trial of 100 calls per IP per day on most premium endpoints, no signup, no wallet required.

## Spend-aware usage

- Call `/api/premium/whats-new` on agent boot for a single-credit daily brief covering pricing changes, new and removed models, service incidents, and top news headlines from the last 1 to 7 days. Cheaper than calling four separate endpoints.
- Use `/api/premium/routing` when picking a model for a task; one credit returns a top-N ranked recommendation by quality, availability, cost, and latency rather than fanning out across pricing, benchmark, and status endpoints.
- For security agents, prefer `/api/premium/security/verified/{cve-id}` over five fan-out calls to MITRE, KEV, EPSS, OSV, and Vulnrichment. One credit returns the merged fact card with a `confirmed_by` array and a `corroboration_count` so you can audit which sources agreed.
- The free trial covers prototyping. Once an agent is in production, buy credits once via `/api/payment/buy-credits` and use the bearer token for 50ms latency on every subsequent call. Credits do not expire.
