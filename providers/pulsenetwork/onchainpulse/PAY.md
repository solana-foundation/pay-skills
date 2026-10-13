---
name: onchainpulse
title: "OnchainPulse"
description: "Onchain token-safety and risk scanning — honeypot, rugpull, mint/freeze-authority, LP lock/burn and holder-concentration checks for Solana memecoins (by mint) and EVM tokens on 7 chains, plus RWA-tokenization and DeFi-yield intelligence."
use_case: "Use when an agent needs a pre-trade safety check on a token — is this a honeypot, a rug, or safe to buy — for a Solana memecoin mint or an EVM contract, or for onchain RWA-tokenization, crypto-regulation, and DeFi-yield context."
category: security
service_url: https://onchainpulse.theaslangroupllc.com
openapi:
  path: openapi.json
---

OnchainPulse scores token risk before you trade. The two flagship endpoints
return a single CLEAR / CAUTION / AVOID verdict with the evidence behind it:

- `GET /api/memecoin?mint=<base58>` — Solana memecoin scanner. Fuses RugCheck,
  Solana RPC ground-truth (mint/freeze authority, top-10 holders) and
  DexScreener liquidity/flow into a deterministic verdict. ~$0.015.
- `GET /api/evmtoken?address=<addr>&chain=base` — EVM token scanner across
  Base, Ethereum, BSC, Arbitrum, Polygon, Optimism, Avalanche (GoPlus +
  DexScreener). ~$0.015.

The remaining endpoints cover the broader onchain-finance transition:
RWA tokenization, crypto-regulation decoding, DeFi yield, compliance and
sector scenarios. Every endpoint is x402-gated and the 402 advertises USDC
on **both Solana mainnet and Base** — pay with either.

## Spend-aware usage

- One scan per token answers the safety question — do not re-scan the same
  mint/contract within a session; cache the verdict.
- Pass the exact mint (Solana) or contract address + chain (EVM). Bad inputs
  still settle payment, so validate the address before calling.
- The verdict (`is_safe`, `risk_score`, `verdict`) is the decision signal;
  read `evidence[]` only when you need to explain the call.
