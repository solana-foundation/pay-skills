---
name: api
title: "Zerion API"
description: "Interpreted wallet data across 40+ chains, EVM and Solana: portfolio value, token and DeFi positions, PnL, human-readable transaction history, NFTs, token prices and charts, gas prices, and swap and bridge quotes. Pay per call in USDC."
use_case: "Use for questions about any wallet address: holdings, USD value, DeFi positions, profit and loss, recent activity, NFTs. Also for token search and price history, chain and gas data, and swap or bridge quotes on EVM chains and Solana."
category: finance
service_url: https://api.zerion.io
openapi:
  path: openapi.json
---

The Zerion API returns interpreted onchain data for any wallet: balances
priced in fiat, DeFi positions, profit and loss, and transactions decoded
into actions such as trade, send, receive or approve. It is the same data
that powers the Zerion app. Responses follow JSON:API (`data`,
`attributes`, `links`). Wallet routes accept an EVM `0x` address or a
Solana base58 address. Full reference: https://developers.zerion.io

This listing covers the read-only `GET` endpoints:

- **Wallets**: portfolio value split by chain and position type, token and
  DeFi positions, transaction history, PnL, balance charts, NFT positions,
  collections and NFT portfolio value.
- **Tokens**: search, metadata and market data, lookup by chain and
  contract address, and price charts.
- **NFTs**: metadata for one NFT or a batch of NFT references.
- **Chains, gas and dapps**: supported chains and their capabilities,
  current gas prices, and the dapps and DeFi protocols Zerion tracks.
- **Swap**: swappable tokens and swap or bridge quotes with ready-to-sign
  approve and swap transactions. The API does not sign or send them.

## Payment

Every endpoint costs $0.01 per call. Two flows are supported; the `402`
response advertises both.

- **x402** (USDC on **Solana mainnet** or Base): a request without
  credentials gets `402` with a `PAYMENT-REQUIRED` header that lists the
  accepted networks, asset and amount. Sign a USDC payment and retry the
  same request with a `PAYMENT-SIGNATURE` header. On Solana the challenge
  names a fee payer, so the agent needs no SOL.
- **MPP** (USDC on Tempo): the same `402` carries a
  `WWW-Authenticate: Payment` challenge. Complete it and retry with an
  `Authorization: Payment` header.

Paid calls have no rate limits. Teams with steady volume can use an API key
instead: https://developers.zerion.io

## Coverage notes

- Solana wallets return tokens, portfolio value, transactions and PnL. DeFi
  protocol positions are not available for Solana yet, so keep the default
  `filter[positions]=only_simple` there: `no_filter` and `only_complex`
  return `400` for Solana addresses.
- `filter[positions]` defaults to `only_simple` (tokens held in the wallet)
  on `/portfolio` and `/positions/`. Pass `no_filter` to include DeFi
  protocol positions, or `only_complex` for DeFi only.
- `chart_period` takes `hour`, `day`, `week`, `month`, `3months`,
  `6months`, `year`, `5years` or `max`.
- Webhook subscriptions are tied to an API key account and are not part of
  this listing.

## Spend-aware usage

- Price is flat per call, not per row. Fewer, fuller calls cost less:
  transactions return up to 100 items per page (the default), and positions
  come back in one unpaginated response.
- Answer "what is this wallet worth" with one `/portfolio` call. It returns
  the total, the split by chain and by position type, and the 1-day change.
  Call `/positions/` only when the task needs per-token rows.
- For EVM wallets, get tokens and DeFi in one call with
  `filter[positions]=no_filter` instead of two calls.
- Filter on the server so the first page answers the question:
  `filter[chain_ids]` on positions, transactions and PnL, and
  `filter[operation_types]`, `filter[min_mined_at]` and
  `filter[trash]=only_non_trash` on transactions. Follow `links.next` only
  when older data is needed.
- Batch token lookups: `GET /v1/fungibles/?filter[fungible_ids]=a,b,c`
  returns up to 25 tokens with market data in one call. Resolve a contract
  address once with `/v1/fungibles/by-implementation` and reuse the
  fungible ID.
- Call `GET /v1/chains/` once per session and cache it. Chain IDs and
  capability flags change rarely.
