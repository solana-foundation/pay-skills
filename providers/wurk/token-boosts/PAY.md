---
name: token-boosts
title: "WURK Token Boosts"
description: "Boost token visibility with x402-paid Solana endpoints for DexScreener rockets and community vote actions on CoinGecko, CoinMarketCap, Major, Moontok, and Skeleton."
use_case: "Use for token launch support, DexScreener rocket campaigns, and paid community vote actions that increase visibility around crypto projects."
category: finance
service_url: https://wurkapi.fun
openapi:
 path: openapi.json
---

WURK Token Boosts exposes x402 Solana USDC endpoints for token visibility and
launch-support actions. The listing covers DexScreener rockets and vote routes
for supported crypto discovery communities and token ranking surfaces.

Paid routes follow the public x402 v2 flow: call the endpoint without
`PAYMENT-SIGNATURE` to receive a 402 payment requirement, sign it with a Solana
USDC-capable wallet, then retry the exact same URL with `PAYMENT-SIGNATURE`.

## Spend-aware usage

- Use `dex` or `dex-rocket` for DexScreener rocket campaigns when the user gives
  a DexScreener target URL.
- Use the specific vote endpoint when the vote surface is known. Use the unified
  `vote` endpoint only when routing dynamically by `voteType`.
- Start with the smallest useful `amount`, and ask before multi-surface launch
  campaigns or repeated boost rounds.
- Verify the target URL belongs to the requested platform before paying.
