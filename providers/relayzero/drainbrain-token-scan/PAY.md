---
name: drainbrain-token-scan
title: "DrainBrain Token Risk Scan (RelayZero)"
description: "ML rug-pull and honeypot risk scoring for Solana token mints — 0-100 risk score, risk level, rug-stage classification, honeypot flags, and model confidence. Pay-per-call x402: $0.02 USDC on Solana mainnet, no API key."
use_case: "Use for pre-trade token safety: score a Solana mint for rug-pull risk before an agent buys, swaps, lists, or routes liquidity through it."
category: security
service_url: https://relayzero.ai
openapi:
  path: openapi.json
---

DrainBrain is an in-house ML security oracle (5-model ensemble, trained on 175K+ tokens) that scores Solana token mints for rug-pull risk. One x402-paid GET returns a 0-100 risk score, a risk level, a rug-stage classification, honeypot flags, and model confidence.

- **Endpoint:** `GET https://relayzero.ai/v1/intel/scan/{address}` — `{address}` is the token mint (base58)
- **Batch:** `POST https://relayzero.ai/v1/intel/scan/batch` — up to 10 mints per call, $0.10 (50% off single-scan pricing), partial-result semantics per mint
- **Free sample:** `GET https://relayzero.ai/v1/intel/sample-scan` — a real scan of a fixed mint with the exact paid response shape, free, so you can integrate before paying
- **Payment:** $0.02 USDC per scan, x402 v2 `exact` scheme on Solana mainnet via the PayAI facilitator, with a sponsored fee payer — the paying wallet needs USDC only, no SOL
- **Auth:** none. Unpaid requests return a standard x402 v2 challenge in the `payment-required` header; payment is authentication
- **Latency:** typically a few seconds; a cold first scan of a mint can take up to ~60s

## Spend-aware usage

- Flat $0.02 per call. No subscription, no minimum, no signup. Scanning several mints? One $0.10 batch call (up to 10) beats 5+ singles.
- Integrate against the free sample first — it is the exact paid response shape and costs nothing.
- Results are served from a short (~5 minute) server-side cache per mint; a paid re-scan of the same mint inside that window returns the cached result and still costs $0.02 — cache client-side and dedupe your retries.
- Scan before spend: one $0.02 scan gating a swap or listing decision is cheap insurance. Avoid re-scanning the same mint inside a polling loop.
