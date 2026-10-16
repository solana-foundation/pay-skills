---
name: hash-hmac
title: "Hash & HMAC"
description: "Computes hashes (SHA-256, SHA-512, MD5, BLAKE2, CRC32 and more) over text or binary data, signs data with HMAC, and verifies incoming signatures using a timing-safe comparison."
use_case: "Use whenever exact hash digests, HMAC signatures, or signature verification are needed — language models cannot compute these reliably, and comparison must be timing-safe."
category: security
service_url: https://hash-hmac.underscoredone.com
openapi:
  path: openapi.json
---

Computes hashes (SHA-256, SHA-512, MD5, BLAKE2, CRC32 and more) over text or binary data, signs data with HMAC, and verifies incoming signatures using a timing-safe comparison. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- Request every algorithm you need in one call rather than one call per algorithm.
- Hash locally when you have a runtime available; use this when you do not.
