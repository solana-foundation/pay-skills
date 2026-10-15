---
name: api
title: "bilbop x402"
description: "Pay-per-call x402 APIs for agents: text summarize, Solana token briefs, mint on-chain info, human brand feedback, and Piper TTS. USDC on Solana via PayAI; no API keys."
use_case: "Use for cheap agent text summarization, Solana mint/token market briefs, on-chain mint metadata, human brand feedback (WURK), and self-hosted Piper TTS over x402 USDC."
category: ai_ml
service_url: https://api.bilbop.org
openapi:
  path: openapi.json
---

bilbop x402 exposes five pay-per-call HTTP APIs for AI agents. Settlement is USDC on Solana mainnet via the PayAI facilitator (`exact` scheme). No API keys or accounts.

Discovery: `https://api.bilbop.org/.well-known/x402` and `https://api.bilbop.org/.well-known/x402.json`. Site: https://bilbop.org

| Endpoint | Price | Purpose |
|---|---|---|
| `POST /v1/summarize` | 0.01 USDC | Summarize text |
| `POST /v1/sol-token-brief` | 0.01 USDC | Solana token market brief |
| `POST /v1/sol-mint-info` | 0.01 USDC | Solana mint on-chain info |
| `POST /brand-feedback` | 0.50 USDC | Human brand feedback (WURK) |
| `POST /v1/tts` | 0.025 USDC | Piper text-to-speech |

## Spend-aware usage

- Prefer `POST /v1/summarize` with the smallest useful `text` payload; truncate long inputs before paying.
- Use `POST /v1/sol-mint-info` when you only need on-chain mint metadata; use `POST /v1/sol-token-brief` when you need a market brief.
- Call `POST /brand-feedback` only when human review is required — it is 50× the summarize price.
- Prefer `POST /v1/tts` for short phrases; avoid re-synthesizing identical text.
- Cache successful responses keyed by request body to avoid repeat payments.
