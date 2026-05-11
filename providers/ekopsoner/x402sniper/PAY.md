---
name: x402sniper
title: "x402sniper"
description: "Pay-per-call post-grad Solana sniping decision support. Returns SNIPE/WATCH/SKIP verdict combining bundle/funder-cluster analysis with launchpad + self-seeded pool detection. Signal only — no trade execution, no key custody."
use_case: "Use to filter post-graduation pump.fun mints before an agent executes a snipe buy. Returns SNIPE/WATCH/SKIP verdict with bundle flags and launchpad evidence so the agent can avoid coordinated rugs and self-seeded pools."
category: security
service_url: https://x402sniper.vercel.app
openapi:
  url: https://x402sniper.vercel.app/openapi.json
---

Post-trade sniping decision support for Solana mints — typically used after
a pump.fun token has graduated and an agent is considering whether to buy.

Combines two signals into a single agent-readable verdict:
- **Bundle / funder-cluster analysis** — top-20 holder forensics + genesis-funder walks via Helius
- **Launchpad detection** — Metaplex metadata via Helius DAS; flags self-seeded liquidity pools that defeat top-N holder checks

Helius-only derivation — no Birdeye, GMGN, or Nansen API resale.

## Verdict ladder

- **SNIPE** — clean bundle check AND recognized launchpad (pump.fun / letsbonk / moonshot / rapidlaunch)
- **WATCH** — clean bundle but launchpad unrecognized (possible self-seeded pool) OR single SNIPER concentration flag
- **SKIP** — BUNDLE / BUNDLE-FRESH flags present OR self-seeded pool detected

## What it returns

```json
{
  "verdict": "SNIPE" | "WATCH" | "SKIP",
  "score": 0-100,
  "reasons": ["clean bundle check", "launchpad recognized: pump.fun"],
  "bundle": { "verdict": "...", "flags": [...], "top_cluster_pct": ..., "n_established": ..., "n_fresh": ... },
  "launchpad": { "label": "pump.fun" | null, "self_seeded": false, "evidence": "..." },
  "full_bundle": { /* full per-wallet drill-down */ }
}
```

## Scope and limits

- Optimised for recently-graduated pump.fun mints but accepts any Solana SPL mint
- Top-20 holders cap (Solana `getTokenLargestAccounts` RPC limit)
- Launchpad detection uses Metaplex metadata + mint-suffix heuristic; adversarial metadata can fool it
- Signal only — does NOT execute trades, never holds keys

## Spend-aware usage

- Call once per mint at decision time, not on a polling loop — the verdict is a snapshot of holder + metadata state and barely changes second-to-second.
- Skip the call for mints already classified by prior calls; cache verdicts per `(mint, blockheight)` on the agent side.
- Treat `SNIPE` as "no detected red flags" — not a positive endorsement. Combine with the agent's own price/volume/momentum signals before executing a buy.
- Skip on `verdict == "SKIP"`. `WATCH` warrants the agent's own deeper inspection (liquidity, smart-money confirmation, or a separate signal) before committing capital.

## Companion tools

- **x402rugproof** — pre-graduation bundle/sniper check (different decision moment, same engine, simpler output)
- **x402rent** — post-trade rent recovery on empty Associated Token Accounts

## Pricing

- `GET /score/{mint}` — $0.05 USDC on Solana mainnet via PayAI facilitator (gasless for buyers — PayAI sponsors gas).
