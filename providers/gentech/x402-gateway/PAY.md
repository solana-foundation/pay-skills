---
name: x402-gateway
title: "GenTech Labs"
description: "Pay-per-call x402 APIs for agent treasury work: wallet portfolio and LP analytics, token risk scoring on Solana and EVM, ERC-8004 agent discovery, market prices, ETF flow regimes, and gas oracles. Settles USDC on Base and Avalanche today."
use_case: "Use when an agent needs treasury-grade facts before it acts: what a wallet holds, whether a token is a rug, where an LP position sits, what the market regime is, or which counterparty agent to trust."
category: finance
service_url: https://api.gentechlabs.net
openapi:
  path: openapi.json
---

Pay-per-call APIs for agents doing treasury and risk work, at
`https://api.gentechlabs.net`. **10 services are live and chargeable**; anything we
cannot serve is withheld from the manifest rather than listed — every route in
`openapi.json` answers, and a withheld one answers nothing at all.

## What is served

`GET /v1/wallet/portfolio/{address}` values what an address actually holds.
`GET /v1/defi/lp/{address}` reports an LP position's range and whether it is in
range now. `GET /v1/security/score/{mint}` rug-checks a Solana token across 11
factors (mint and freeze authority, LP state, holder distribution).
`GET /v1/defender/classify/{chainId}/{token}` gives an EVM token a
KNOWN/SUSPICIOUS verdict with the reasons. `GET /v1/agents/search` searches the
ERC-8004 registry. `GET /v1/market/price/{symbol}`,
`GET /v1/flow/etf/{symbol}` (settled T+1 ETF flows with a falsifiable regime
label), `GET /v1/gas/gas`, `GET /v1/nft/search`, `GET /v1/lineage/guard`.

Prices are fixed per call, $0.001–$0.015 USDC. No accounts, no keys, no signup:
the first request returns a standard x402 `402` challenge with the accepted
payment requirements.

## Payment rails — read this before integrating

**Settles today: Base and Avalanche (USDC).** The manifest also advertises
Algorand, X Layer and Solana, and those are **implemented but not yet verified by
a recorded settlement**. We advertise them as offered, not as proven. If your
integration depends on one of them, ask us and we will either settle a test call
or tell you it is not ready — we would rather lose the call than take a payment
on a rail we cannot complete.

## Spend-aware usage

- Call the narrowest route that answers the question: one wallet lookup, not a
  scan.
- `/v1/security/score` is Solana-only (rugcheck rejects an EVM address with 400).
  For EVM token risk use `/v1/defender/classify`.
- ETF flow sums use settled T+1 rows only; the newest unsettled row is excluded
  rather than counted as zero.
- Cache market prices for the length of a task instead of polling per step.

## What this is not

Not a price feed for execution, not a signing service, and not custody. It
returns facts and verdicts; the agent decides and signs.
