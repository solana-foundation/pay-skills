---
name: wallet-csv
title: "Agent402 wallet activity CSV"
description: "CSV of one Solana mainnet wallet's activity over a UTC date range: one row per SOL or token balance change per transaction, with block time, signature, status, mint and the network fee the wallet paid."
use_case: "Use for exporting a Solana wallet's SOL and SPL token balance changes and fees to CSV, bookkeeping and reconciliation of a known address over a few days or weeks, and checking what moved in and out of a wallet."
category: finance
service_url: https://agent402-wallet-csv.agent402-ebc.workers.dev
openapi:
  path: openapi.json
---

A CSV of one Solana mainnet wallet's balance changes over a UTC date range, read from Solana RPC (confirmed commitment). One request covers one address and up to 31 days and 25 transactions.

Run by the Agent402 toolkit developer ([source](https://github.com/agent402-dev/agent402-toolkit)). Larger ranges are sold as an Agent402 Bond job (bonded, for agents that want a seller bond); this listing is the plain x402 route.

## Pricing

- 0.05 USDC per request (x402 v2, `exact` scheme, USDC on Solana mainnet).
- Malformed input is refused with 400 before any payment is asked.
- If the work cannot be done (for example more than 25 transactions in the range), the request fails with 422 and the payment is not settled. RPC failures (502) and timeouts (504) are not settled either.

## Spend-aware usage

- Pick a short range first; split busy wallets into shorter ranges instead of retrying the same one.
- Check the address and dates first; a malformed request costs nothing (400).
- Rows are facts from the chain only: no prices, labels or tax treatment.
- Token names are given only for a few well-known mints; otherwise use the mint address.
