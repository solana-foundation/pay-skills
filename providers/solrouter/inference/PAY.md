---
name: inference
title: "Solrouter — Cryptographically private LLM inference"
description: "OpenAI-compatible chat completions where the prompt is encrypted client-side and the inference provider never sees plaintext. Backed by Arcium MPC attestation on Solana mainnet. Pay-per-call in USDC via x402."
use_case: "Use when an agent needs LLM inference but cannot disclose the prompt to the inference provider — confidential trading signals, private user data, sensitive tool outputs, regulated workflows."
category: ai_ml
service_url: https://api.solrouter.com
openapi:
  url: https://api.solrouter.com/agents/v1/openapi.json
pricing:
  dimensions:
    - direction: usage
      unit: requests
      scale: 1
      tiers:
        - route: POST /api/v1/x402/chat/completions
          price_usd: 0.005
---

# Solrouter — Cryptographically private LLM inference

OpenAI-compatible chat completions endpoint with one privacy guarantee Solrouter cannot violate even if compromised: **the prompt is encrypted before it leaves the agent's process**, the response is re-encrypted to the agent's key before it leaves Solrouter's compute, and the encryption is attested on-chain via Arcium MPC.

## How it works

1. Agent fetches Solrouter's encryption public key (attested on-chain via Arcium).
2. Agent encrypts the prompt with that key — single AES-GCM op via `@solrouter/sdk`'s `encryptPrompt` helper.
3. Agent POSTs `{ encryptedPrompt, model }` to `POST /api/v1/x402/chat/completions` with an `X-PAYMENT` header carrying a signed USDC transfer (Solana mainnet, settled via PayAI / Coinbase facilitator).
4. Solrouter runs the inference inside its private compute environment; plaintext is never written to any operator-readable surface.
5. Response comes back encrypted; agent decrypts with `decryptResponse`.

What Solrouter operators see: a ciphertext blob, model name, token counts. Not the prompt, not the response.

## Spend-aware usage

- Flat $0.005 per call regardless of input/output tokens. No token math, no refunds. Don't loop a one-token "ping" through it just to test connectivity — call `GET /agents/v1/quote` (it's $0.001) instead.
- The endpoint is OpenAI-compatible: send the same `messages` array shape you'd send to GPT-4, but inside the encrypted payload. No need to chunk or compress for billing reasons — token cost doesn't scale your bill.
- Default model is `gpt-oss:20b`. Other model IDs available via the model selector in the request body — see the OpenAPI spec.

## Verification

Each request's USDC settlement signature is returned in the `X-Payment-Tx-Sig` response header so agents can confirm payment landed on Solana mainnet before trusting the response. The on-chain Arcium attestation for the encryption key is queryable via `GET /agents/v1/attestations/:sessionId`.
