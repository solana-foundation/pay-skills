---
name: api
title: "Iris"
description: "On-chain investigation API for Solana, EVM chains, Bitcoin and Tron: wallet identity and risk with evidence, funders and counterparties, transfers traced through mixers, exchanges and instant swaps, and token insiders."
use_case: "Use for who is behind a wallet, where stolen or drained funds went, tracing a deposit through a mixer or instant swap, checking a counterparty's risk, and finding a memecoin creator's insider wallets."
category: security
service_url: https://iriscan.app/api
openapi:
  path: openapi.json
---

Iris answers the questions an investigator asks about a wallet: what it is,
who funded it, who it deals with and where its money went, with the
transactions behind each finding. It reads Solana, Ethereum, Base,
Arbitrum, Robinhood Chain, BNB Chain, Bitcoin, Tron, dYdX and Noble.

Every route is paid per call with x402 v2 (scheme `exact`, USDC on Solana
mainnet; the facilitator pays the network fee). A request with no key gets
`402` with a `PAYMENT-REQUIRED` header; sign it and send the same request
again with `PAYMENT-SIGNATURE`. The request is checked before the `402`, so a
bad address is a `400` and never a payment. A call that fails is never
settled. Accounts with an Iris API key (`Authorization: Bearer iris_live_...`)
spend credits instead.

- `POST /analyze`: $0.05 ($0.10 when `depth` is above 1,000)
- `POST /trace`: $0.25
- `POST /insiders`: $0.10

Trace results and insider links are leads from timing and money flows, not
proof.

## Spend-aware usage

- Start with `/analyze` on the address in question and keep the default
  `depth` (1,000); go deeper only when older history matters.
- Call `/trace` only for a transfer that `/analyze` lists in
  `connections[].transfers` with a mixer, exchange or swap service, and copy
  its fields from there.
- Use `/insiders` for a token mint, not for a wallet; lower `limit` to check
  fewer wallets.
