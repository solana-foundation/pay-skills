---
name: chain
title: "anchor-x402: chain utilities"
description: "Pay-per-call blockchain utilities: structured tx decode, raw EVM calldata decode with 4byte + ABI resolution, ENS / Bonfida SNS name resolution, USD spot prices, and freeform datetime parsing."
use_case: "Use for blockchain tx debugging, decoding EVM calldata into typed parameters, ENS / SNS name resolution, USD spot prices by symbol or chain+contract, and parsing freeform datetime strings to ISO 8601."
category: finance
service_url: https://api.anchor-x402.com
openapi:
  url: https://api.anchor-x402.com/openapi.json
---

Five blockchain utility endpoints, $0.001 per call on Base or Solana via x402 v2. No API keys.

- `POST /v1/decode/tx { chain, tx_hash }` — Structured decode of any Base / Ethereum mainnet transaction. Returns block, timestamp, status, gas, decoded transfers and method signatures.
- `POST /v1/decode/calldata { chain, calldata_hex }` — 4byte selector lookup against openchain.xyz + ABI parameter decode. Returns function name, canonical signature, typed parameter values, and ambiguity candidates on selector collision. Supports `base | ethereum | polygon | arbitrum | optimism`.
- `GET /v1/resolve/name?name=...` — Cross-chain name resolver: ENS (`.eth`) and Bonfida SNS (`.sol`). Returns one or more addresses with chain context. 1h cache.
- `GET /v1/price/token?symbol=...` — USD spot price by symbol (BTC, ETH, SOL, USDC, etc.) or by chain+contract. Returns price, 24h change %, market cap, source, cache age. 60s cache, CoinGecko-backed.
- `POST /v1/parse/datetime { input, timezone? }` — Parse freeform datetime strings ("tomorrow at noon", "in 2 hours", "2026-05-08T15:30Z") into ISO 8601, unix epoch, broken-out components, signed relative-seconds delta, and confidence label.

## Spend-aware usage

- Pick the narrowest tool: `decode/tx` for transactions, `decode/calldata` for raw bytes, `resolve/name` for `*.eth` or `*.sol` strings, `price/token` for USD lookups, `parse/datetime` for natural-language scheduling.
- `decode/calldata` resolves the 4byte selector externally — collisions return ambiguity candidates rather than guessing. Pass `contract_address` when you know it to disambiguate by source code.
- For ENS reverse lookups (`address → name`), call `intel/wallet` instead (covered in the `anchor-x402/sanctions` listing) — it bundles reverse-resolve with balances and is the same $0.005 as one resolve plus a balance call would be.
- `price/token` is 60s-cached. Don't poll for live ticks — call once per minute max for live data.
- `parse/datetime` is helpful for trading-bot schedulers where the user says "set this for tomorrow's open" — converts to a concrete unix timestamp.
