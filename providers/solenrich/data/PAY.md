---
name: data
title: "SolEnrich"
description: "Solana onchain intelligence for agents: wallet risk scoring, token due-diligence, smart-money tracking across spot, perps, and fresh launches, cross-venue perps funding, StonkFun reward-coin gems and payout status, LLM-ready briefings. USDC via x402."
use_case: "Use when an agent needs Solana ground truth before acting: is this token safe, is this wallet risky, where is smart money moving, which perps venue has the best funding, which StonkFun coins are paying holders."
category: finance
service_url: https://api.solenrich.com
version: v1
openapi:
  path: openapi.json
---

SolEnrich enriches Solana wallets, tokens, transactions, protocols, and perps
markets in a single paid call. Every endpoint returns structured JSON
(`format: "json"`), a deterministic natural-language briefing sized for LLM
context windows (`format: "llm"`), or both (`format: "both"`). All endpoints
are POST to `/entrypoints/{key}/invoke` with a flat JSON body containing the
parameters in the OpenAPI schema, e.g. `{ "mint": "...", "format": "llm" }`
(a `{ "input": { ... } }` envelope is also accepted), and settle via x402
(USDC on Solana or Base). 44 paid endpoints plus one free; prices range $0.001–$0.25 per call.

What it offers, by task:

- **Token safety** — `due-diligence` bundles token analysis, holder
  concentration (HHI), whale activity, slippage estimates, and 9 risk flags
  into one SAFE/CAUTION/RISKY verdict. `enrich-token-light` is the cheap
  single-token lookup.
- **Wallet intelligence** — `enrich-wallet-light`/`-full` return holdings,
  DeFi positions, behavioral labels (including bot/automation flags), and a
  7-factor risk score. `copy-trade-signals` scores any wallet's trading PnL,
  win rate, and Sharpe.
- **Smart money** — `smart-money-flow` (what proven winners accumulate on
  spot), `hyperliquid-smart-money` (positioning consensus of
  consistency-gated leaderboard traders), `smart-money-trenches` (vetted
  realized-PnL winners buying tokens younger than 6 hours).
- **Perps** — `perps-cross-venue-funding`, `perps-venue-comparison`, and
  `perps-basis-signal` normalize funding/borrow APR, open interest, skew, and
  entry cost across Jupiter Perps, Adrena, Flash, Hyperliquid, and dYdX v4.
- **Trenches (fresh launches)** — one trade, three calls: `runner-scan`
  (which fresh tokens are accelerating), `trenches-check` (vet one token
  with smart-money, runner, and attention signals), `exit-signal`
  (EXIT/DERISK/HOLD verdict for a held token). `trenches-scan` composes
  all three into a ranked list; `attention-momentum` reports where agent
  attention is accelerating ahead of price.
- **Discovery and signals** — `new-tokens`, `trending-signals`,
  `consensus-signal` (what other agents are querying right now), and
  poll-based `check-alerts` for price/whale/risk/perp-position events.
- **StonkFun reward coins** — quote-paired coins that pay holders a transfer
  tax in the quote asset (xStocks, pre-stocks, ZEC). `stonk-gems` ranks every
  reward coin on recent payout, holders, turnover, and quote strength;
  `stonk-reward-risk` returns payout status (PAYING/STALE/NEVER) and the
  round-trip tax cost; `stonk-screener` filters by live/paying; `stonk-launch-intel`
  says which quote asset to launch against; `stonk-launch-preflight` diffs a
  self-built LaunchLab transaction before broadcast; `stonk-pairs` is free.
- **Natural language** — `query` routes a plain-English question to the right
  enricher(s) and returns a unified answer.

## Spend-aware usage

- Start with the `-light` variants ($0.002); escalate to `-full` or
  `due-diligence` only when the light result flags something.
- `due-diligence` already bundles token + holders + whales — do not call
  those separately before it.
- Pass `format: "llm"` to receive a compact briefing instead of raw JSON when
  the result feeds a context window.
- Results are cached server-side (30s–10min depending on data type);
  re-polling faster than the cache TTL spends money without new information.
- `batch-enrich` amortizes per-call overhead when enriching 3+ addresses.
