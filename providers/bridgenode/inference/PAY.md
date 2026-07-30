---
name: inference
title: "BridgeNode — DeepSeek V4 Flash via x402"
description: "DeepSeek V4 Flash v2 inference endpoint via x402. Pay-per-call with Solana USDC. No registration, no API keys — just a wallet."
use_case: "Use for AI chat completions and inference with DeepSeek V4 Flash via the x402 protocol. Ideal for autonomous agents needing lean, low-cost inference with Solana USDC micropayments."
category: ai_ml
service_url: https://bridgenode.cc/v1/inference
openapi:
  path: openapi.json
---

BridgeNode provides anonymous, accountless access to DeepSeek V4 Flash v2 inference via the x402 payment protocol on Solana USDC — no registration, no API keys, no KYC.

Compatible with the OpenAI chat completions API. Agents use the x402 402-challenge flow for discovery and payment, then authenticate subsequent calls with ed25519 signature headers.

## Auth Flow

1. Send a request to `POST /v1/inference` without auth — the endpoint responds with HTTP 402 and x402 payment terms (Solana USDC)
2. Pre-deposit USDC to the BridgeNode wallet (`BHMDv3ri3LBEZjEzJgDZeUiguVX7LmsCstTXbM3dL8rN` on Solana mainnet)
3. Authenticate with three ed25519 headers:
   - `X-Address`: your Solana wallet address (base58)
   - `X-Nonce`: a UUID v4 nonce
   - `X-Signature`: ed25519 signature of the nonce using your Solana private key
4. On signature verification the request is processed and streamed back via SSE

## Spend-aware usage

- `POST /v1/inference` with the standard OpenAI chat completions format.
- Model used: `deepseek-v4-flash` (always used regardless of model field value).
- Works with any x402-capable agent or client (Claude Code, OpenClaw, custom agents, pay CLI).
- Check your off-chain USDC balance at `GET /v1/balance/{address}` before making repeated calls.
