---
name: shield
title: "Solana Rent & Rug Shield"
description: "Pay-per-request 11-layer Solana SPL and Token-2022 anti-rug token audits, empty ATA wallet rent scans, and live caught-rug precipice feeds via x402 v2."
use_case: "Use for auditing Solana token mints before trading, scanning wallets for reclaimable empty ATA rent SOL, and monitoring live Solana liquidity-drain rug alerts."
category: security
service_url: https://onv4ifus2wvw2hdscvm5vr4nry.srv.us
version: v2
openapi:
  path: openapi.json
---

Solana Rent & Rug Shield ([https://rentandrugshield.com](https://rentandrugshield.com)) provides autonomous AI agents and trading runtimes with sub-second Solana security and rent-recovery intelligence gated natively by HTTP 402 (`x402` v2 on Solana mainnet `solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp`).

All endpoints settle instantly in SPL USDC (`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`) or native SOL to `89Sv5FvnMNRid1bn8y2Ti1vJPSxWxgiW9GSLsPpBnKK1` with zero API keys or subscriptions required:

- `GET /api/x402/v2/audit-token`: `$0.01 USDC` (`10000` atomic units) per 11-layer SPL & Token-2022 security audit.
- `GET /api/x402/v2/wallet-rent`: `$0.01 USDC` (`10000` atomic units) per Solana wallet unclaimed ATA rent scan (Wallet Rent Claim #1 on `https://rentandrugshield.com` is `0.0%` FREE permanently; repeat cleanups are `1.5%`).
- `GET /api/x402/v2/precipice-feed`: `$0.05 USDC` (`50000` atomic units) for the live Solana caught-rug and liquidity-precipice radar feed.

## Spend-aware usage

- Pass `?mint=<address>` directly to `/api/x402/v2/audit-token` right before swap execution so you only pay `$0.01 USDC` on candidate tokens you intend to trade.
- Call `/api/x402/v2/precipice-feed?limit=25` (`$0.05 USDC`) when scanning batch market anomalies rather than polling single mints in a loop.
- Call `/api/x402/v2/wallet-rent?wallet=<pubkey>` (`$0.01 USDC`) to check reclaimable empty-ATA SOL before building a batch `CloseAccount` transaction.
