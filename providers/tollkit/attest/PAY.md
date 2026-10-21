---
name: attest
title: "Tollkit Attest"
description: "Signed, timestamped attestations of what a web page said: rendered text and its SHA-256, HTTP status, headers, serving IP, TLS certificate and an optional screenshot, signed by a published key. Verification is free."
use_case: "Use when you need proof of a page's content at a point in time: terms of service before agreeing, a price before buying, a published policy or claim, or a listing that may change later; and to verify an attestation."
category: identity
service_url: https://attest.tollkit.dev
openapi:
  path: openapi.json
---

Tollkit Attest renders a public page and returns a signed record of it: the
rendered text and its SHA-256, the HTTP status and headers, the serving IP,
the TLS certificate, and optionally a screenshot and its hash. The record is
signed by the address published at `GET /attest/signer`. Anyone can check an
attestation with `POST /attest/verify` at no cost. Paid per call over x402 in
USDC on Solana or Base. No account or API key. A failed render is not charged.

| Endpoint | Body | Price |
|---|---|---|
| `POST /attest` | `{"url", "screenshot"?}` | $0.05 |
| `POST /attest/verify` | `{"attestation"}` | free |
| `GET /attest/signer` | none | free |

The same tools are available as a remote MCP server at https://api.tollkit.dev/mcp.

## Spend-aware usage

- Attest only pages whose content may need to be proven later; use Tollkit Web `/read` ($0.002) to simply read a page.
- Store the full response: Tollkit keeps no copy, and the response is the evidence.
- Verifying an attestation is free and does not depend on Tollkit being online.
