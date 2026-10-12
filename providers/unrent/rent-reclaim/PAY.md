---
name: rent-reclaim
title: "UNRENT"
description: "Solana rent reclaim API: scans wallets for overpaid rent on token accounts and mints after SIMD-0437 (excess deposits, empty accounts, dust), with fee, net and per-step forecast, and builds unsigned reclaim transactions."
use_case: "Use when a user wants to recover SOL locked in Solana token accounts, close empty token accounts, check how much rent a wallet or a list of wallets overpays, track SIMD-0437 rent reduction steps, or reclaim rent non-custodially."
category: finance
service_url: https://unrent.xyz/api/v1
openapi:
  path: openapi.json
---

UNRENT returns overpaid rent from Solana token accounts. SIMD-0437 lowers `lamports_per_byte` from 6,960 to 696 in five steps; existing accounts keep their old, higher deposit until it is withdrawn. UNRENT scans a wallet and builds the reclaim (`WithdrawExcessLamports` for open accounts, `CloseAccount` for empty ones) as unsigned transactions. It is non-custodial: the wallet signs, UNRENT never sees a key.

Pricing: `POST /scan` costs $0.002 per wallet, `POST /portfolio` $0.02 for up to 25 wallets, paid in USDC on Solana mainnet (MPP or x402). `GET /rent-status`, `POST /reclaim/build` and `POST /reclaim/submit` are free: the reclaim carries UNRENT's service fee (shown in every scan) inside its transactions.

## Spend-aware usage

- Call `GET /rent-status` (free) first if the question is only how far the rent reduction is.
- Use `POST /portfolio` instead of several `POST /scan` calls when checking more than about 10 wallets.
- Skip the scan when the user already decided to reclaim: `POST /reclaim/build` re-scans the wallet itself, for free.
- Sign every transaction from `/reclaim/build` unchanged and send them to `/reclaim/submit` within about 60 seconds, before the blockhash expires.
- If the wallet's keys are in a browser wallet (Phantom, Solflare, Backpack), give the user the `signUrl` from the scan instead of building: they sign on unrent.xyz.
- Only pass `burn` to `/reclaim/build` when the user explicitly asked to burn specific dust tokens.
