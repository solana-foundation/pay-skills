---
name: simulation
title: "MiroShark"
description: "MiroShark predicts how people and markets react to a scenario before it happens: it spawns a 25-agent simulation across Twitter, Reddit, and a prediction market over 10 rounds, returning a cited markdown report with belief drift and market reaction."
use_case: "Use to forecast reactions to a product launch, policy, campaign, crisis, token launch, or news headline; stress-test messaging before shipping; and get a cited report with sentiment drift and a prediction-market probability from a prompt, article, or URL."
category: ai_ml
service_url: https://x402.miroshark.xyz
version: v2
openapi:
  url: https://x402.miroshark.xyz/openapi.json
---

MiroShark is a multi-agent social simulation. Seed it with a prompt, an article
URL, or raw article text and it spawns a 25-agent population that argues,
posts, and trades across a simulated Twitter, Reddit, and a Polymarket-style
prediction market for 10 rounds. It returns a cited markdown report covering
belief drift, the most-impactful posts, and the market's probability
trajectory, so an agent can estimate a reaction before anything ships.

The paid entry point is asynchronous - you pay once to launch a run, then poll:

- `POST /run` - launch a simulation (x402-paid, flat $1.00). Body takes exactly
  one seed: `prompt` (6-4000 chars), `url` (an article to simulate around), or
  `article` (raw text). Optional `prediction_market` pins a YES/NO market
  question; optional `callback_url` webhook fires on terminal state. Returns a
  `run_id` plus `status_url` and `wait_url`. Prompts trigger automatic live-web
  research; URL and article seeds do not.
- `GET /status/{run_id}` - poll run status (free) every 15-30s until terminal.
- `GET /report/{run_id}` - retrieve the finished markdown report (free).
- `GET /share/{simulation_id}` - human-readable HTML report landing page.
- `GET /api/simulation/{simulation_id}/belief-drift` and
  `.../polymarket/markets` - structured sentiment trajectory and prediction
  markets for a finished run.
- `POST /suggest` - free scenario-idea generation to help shape a prompt.

Pay per run in USDC via x402 - no API key or subscription. The live 402
challenge advertises Solana, Base, and Monad USDC at a flat $1.00 per run; the
challenge is authoritative. An optional `X-Builder-Code` header routes a
revenue share on-chain to the referring builder, and `X-Idempotency-Key` makes
retries safe.

## Spend-aware usage

- One `POST /run` is a single flat charge, not per-token - budget $1.00 per
  scenario and reuse the returned `run_id` for all polling and report reads,
  which are free.
- `POST /suggest` and `GET /status`, `/report`, `/share`, `/belief-drift`, and
  `/polymarket/markets` are all free - shape the prompt and read results
  without paying again.
- Pass `X-Idempotency-Key` so a retried launch does not start (and bill) a
  second run.
- Prefer a `url` or `article` seed when you already have the source text; a bare
  `prompt` adds automatic live-web research to the run.
- A run takes minutes - poll `status_url` rather than blocking, and cache the
  finished report instead of re-running the same scenario.
