---
name: miroshark
title: "MiroShark"
description: "Pay $1 USDC to run a 25-agent social-media simulation: seed a prompt, article URL, or raw text and get a knowledge-graph-driven Twitter/Reddit/Polymarket world over 10 rounds plus a synthesized markdown report. x402, settles on Base or Solana."
use_case: "Use to forecast how a population reacts to a scenario, product launch, or news event: belief drift, narrative formation, top posts, and prediction-market trajectories. Good for social and market research, war-gaming reactions, and PR what-ifs."
category: ai_ml
service_url: https://x402.miroshark.xyz
openapi:
  path: openapi.json
---

MiroShark runs a multi-agent social-media simulation behind a single paid
endpoint. Submit exactly one seed — a `prompt` (scenario/question), an article
`url`, or raw `article` text — and it extracts entities, builds a knowledge
graph, generates 25+ agent personas, runs 10 rounds of Twitter / Reddit /
Polymarket activity, and synthesizes a markdown report (belief drift, top
posts, market trajectories). Typical wall-clock: 15–25 minutes.

Payment is x402, $1.00 USDC, settled through the Coinbase CDP facilitator. The
402 challenge advertises two `accepts` entries — **Base mainnet**
(`eip155:8453`) and **Solana mainnet**
(`solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp`), both USDC — so a buyer pays on
whichever chain its wallet holds.

`POST /run` returns `202` immediately with a `run_id` plus `wait_url` (HTML)
and `status_url` (JSON, pollable, no auth). Poll until `status == completed`,
then `GET /report/{run_id}?format=json` returns the report plus its
`share_url`. Optional knobs: `deep_research: true` (live-web context sweep,
adds cost), `prediction_market` (pin the central market), and `affiliate` (an
EVM `0x` wallet, 50/50 net-profit share).

## Spend-aware usage

- Each `POST /run` costs $1 and takes 15–25 min — it's a heavyweight job, not a
  lookup. Submit one well-formed scenario; don't loop or retry after a success.
- Not sure what to run? `POST /suggest` (free) turns a vague topic into
  launchable prompts — refine there before paying.
- Track progress with `GET /status/{run_id}` (free) and read the result from
  `GET /report/{run_id}` (free); never re-run to re-read a finished report.
- Provide exactly one of `prompt`, `url`, or `article`. Only set
  `deep_research: true` when you actually need current live-web context (it
  adds web-search calls to the run's cost).
