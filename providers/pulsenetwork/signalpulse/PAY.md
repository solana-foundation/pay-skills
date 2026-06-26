---
name: signalpulse
title: "SignalPulse"
description: "Calibrated sports, fantasy, prediction-market and financial intelligence for agents: de-vigged sportsbook consensus, xG/EPA/Statcast and golf strokes-gained analytics, Polymarket/Kalshi edges, plus forex, crypto, options and futures reads."
use_case: "Use for best-pick / +EV bet analysis, fantasy start-sit, DFS lineups, player props, head-to-head and multi-player ranking; prediction-market mispricing on Polymarket/Kalshi; and forex, crypto, options, futures and economic-event reads."
category: finance
service_url: https://signalpulse-peach.vercel.app
openapi:
  path: openapi.json
---

SignalPulse exposes its agent analysis tier over x402 — the full read,
probabilities, edge and commentary on every endpoint. The curated, position-
sized, *tracked* calls remain the premium human product; the agent tier gives
the analysis, not the executable trade levels.

Two engine families, all USDC on Solana mainnet (and Base):

- **Sports & prediction markets** — `game` (single match +EV + DFS), `fantasy`
  (start-sit/lineup/waiver/trade), `player`, `h2h`, `compare` (N-way rank),
  `golf` (whole field), `racing`, `predmarket` (Polymarket/Kalshi), and `ask`
  (free-text front door). Projected from the underlying data; the betting
  market is optional, never the gate.
- **Financial markets** — `market` (cross-asset), `forex`, `crypto`, `options`
  (equity-vol), `futures`, and `event` (macro economic-event reaction study).

## Spend-aware usage

- Pick the narrowest endpoint: `player`/`h2h` for one or two names, `compare`
  for a pool, `game` for a single match. Use `ask` only when routing is unclear
  — it points you to the deepest named endpoint.
- Reads are cached server-side per inputs for minutes; one call per matchup or
  market answers the question — don't re-poll with identical params.
- Every endpoint returns a 402 advertising USDC on Solana mainnet and Base; pay
  either rail. A bare request (no params) returns the 402 with the param spec.
