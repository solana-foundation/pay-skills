---
name: notary
title: "ForgeMesh x402 Notary"
description: "Cryptographic receipt API for AI outputs, returning signed attestations, SHA-256 content hashes, receipt metadata, free verification, and Merkle anchor proof material."
use_case: "Use when an agent needs to notarize, verify, audit, or prove an AI model output before another workflow, payment, transaction, or agent decision relies on it."
category: identity
service_url: https://notary-solana.forgemesh.io
version: v1
openapi:
  path: openapi.json
---

ForgeMesh x402 Notary issues signed receipts for AI inference outputs. Submit a
prompt, response, and model id, pay per call in Solana USDC, and receive a
signed Ed25519 attestation plus a content hash. Verification is free so
downstream agents can check a receipt before acting on an output.

## Spend-aware usage

- Use `POST /api/notarize` for one inference receipt.
- Use `POST /api/notarize/batch` only when multiple outputs need receipts in the
  same workflow.
- Use free `POST /api/verify` before paying for a new receipt when the user
  already has an attestation id and source content.
- Keep the original prompt and response client-side. The notary stores proof
  material, not raw payload text.
