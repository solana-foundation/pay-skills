---
name: threat-intel
title: "SolSentry Threat Intelligence"
description: "Solana operator-risk and threat-intelligence API: serial-rugger verdicts, token and contract pre-sign risk scores, address-poisoning lookalike checks, holder concentration, and post-rug fund-flow traces — keyed to deployer operators, not just tokens."
use_case: "Use for pre-sign safety checks before an agent swaps, sends, or signs on Solana: screen a token mint, contract/program, or operator wallet for rug risk, detect lookalike (poisoned) destination addresses, and trace stolen funds."
category: security
service_url: https://api.solsentry.app
openapi:
  path: openapi.json
---

SolSentry operator-risk and threat-intelligence data via x402 payments. Where
market-data APIs tell you *what* a token is doing, SolSentry tells you *who*
deployed it and whether that operator has rugged before — risk scoring backed by
83,000+ resolved predictions at 97.8% precision on CRITICAL-tier verdicts
(auditable per-mint at /v1/predictions/{mint}).

All paid endpoints live under the `/x402/` path prefix and return an HTTP `402`
with a `Payment-Required` header on unauthenticated requests. The agent selects a
rail, signs a USDC payment on Solana mainnet, and replays the request with an
`X-Payment` header. The free public dashboard endpoints under `/v1/` are not
metered and are out of scope for this listing.

Per-call pricing (USDC on Solana mainnet; the authoritative price is returned in
the live `402` challenge): operator $0.002 · token $0.003 · predictions $0.002 ·
contract-analysis $0.01 · lookalike-check $0.003 · tx-preview $0.008 ·
holders $0.005 · drain-trace $0.05 · dossier $0.50.

## Spend-aware usage

- For a single pre-sign decision, call `/x402/v1/token/{mint}` (token verdict) or
  `/x402/v1/contract-analysis/{program_id}` (program safety) — one cheap call each.
  Don't fan out to the heavier flow endpoints unless the cheap verdict is risky.
- Use `/x402/v1/operator/{wallet}` to check whether a deployer is a known serial
  rugger before trusting any token it created — this is the cheapest high-signal call.
- Use `/x402/v1/lookalike-check` before sending funds to a freshly-pasted address;
  it flags address-poisoning siblings of wallets the agent has transacted with.
- `/x402/v1/predictions/{mint}` returns the per-mint risk prediction and resolved
  outcome — prefer it over re-deriving risk from raw market data.
- Reserve `/x402/v1/drain-trace/{wallet}` and `/x402/v1/dossier/{wallet}` for
  post-incident forensics or high-value due-diligence; they are multi-hop / AI-heavy
  and priced accordingly. Start with the cheap verdict endpoints first.
- `/x402/v1/holders/{mint}` returns holder count and top-holder concentration in a
  single call — use it instead of chaining raw RPC `getTokenLargestAccounts`.
