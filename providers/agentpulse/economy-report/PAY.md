---
name: economy-report
title: "AgentPulse Economy Report"
description: "Structured JSON report on AI agent economy activity: on-chain USDC flows, transaction volume, new agent launches, trending agent services, and smart-money signals. Pay once per report. No API key required."
use_case: "Use for a current snapshot of the AI agent economy: x402/USDC transaction volume, notable new agent launches, smart-money agent wallet movements, and trending agent services with emerging monetization patterns."
category: finance
service_url: https://agentpulse-worker.agentpulse.workers.dev
openapi:
  path: openapi.json
---

AgentPulse publishes a structured report on AI agent economy activity covering the last 24-48 hours: on-chain USDC flows, transaction volume by chain, new agent launches, smart-money agent wallet movements, and trending agent services.

Flat price of 0.01 USDC per report. Payment accepted on Solana mainnet (USDC SPL) and Base mainnet (USDC ERC-20) via x402 — settle on whichever chain you hold USDC on. A GET without a payment header returns a 402 challenge listing both networks.

## Spend-aware usage

- One call returns the full report; there is nothing to paginate or chain.
- The report covers a 24-48 hour window — cache it and re-fetch at most a few times per day.
