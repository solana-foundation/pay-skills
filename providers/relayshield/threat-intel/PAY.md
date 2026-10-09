---
name: threat-intel
title: "RelayShield"
description: "Pay-per-call threat intelligence API for AI agents: phishing and malware URL scans, data-breach lookups, crypto wallet and token risk screening, SIM-swap detection, secret scanning, and infostealer checks — settled in USDC per request via x402."
use_case: "Use for pre-click URL safety checks, wallet and token risk screening before DeFi trades, breach exposure lookups by email, SIM-swap detection, secret-leak scanning of pasted text, and infostealer or IOC lookups in agent security workflows."
category: security
service_url: https://api.relayshield.net
openapi:
  path: openapi.json
---

RelayShield is a threat intelligence API built for AI agents. 28 pay-per-call endpoints cover URL and file scanning (phishing/malware), email data-breach lookups, crypto wallet risk and token security screening, NFT security, SIM-swap detection, domain and certificate intel, IP intel, infostealer exposure, prompt-injection breach data, session risk, and secret scanning.

Every paid call answers with a live HTTP 402 challenge (x402 v2) priced $0.05–$2.00 USDC, payable on Solana or Base — no API key, no account; wallet is authentication. Free keyless endpoints for link, email, and wallet checks return 200 without payment.

Docs: https://api.relayshield.net/docs — the x402 manifest at https://api.relayshield.net/.well-known/x402.json lists all 28 resources with per-endpoint pricing.

## Spend-aware usage

- Batch wallet screening with the wallet-screen-batch endpoint instead of one call per item.
- Prefer the narrow single-purpose endpoint (e.g. token-security) over a broad scan when you only need one verdict.
- Reuse identifiers across calls — lookups are deterministic for the same input.
