---
name: x402-doctor
title: "x402 Doctor"
description: "Check any x402 endpoint the way a paying agent would: the 402 challenge, every payment option, payee, Solana payout account and Bazaar listing, with a go/caution/no_go preflight before paying and fixes per failure."
use_case: "Use before paying an unknown x402 endpoint (a $0.001 go/caution/no_go preflight with the recommended option), or to find out why an x402 endpoint fails payment and how to fix it."
category: devtools
service_url: https://x402-doctor.onrender.com
version: v1
openapi:
  path: openapi.json
---

Diagnostics for x402 endpoints, paid per call with x402 on Base or Solana. x402 Doctor fetches the endpoint's 402 challenge and checks it the way a paying agent would. It never pays the endpoint it checks.

- **`GET /api/v1/preflight`** ($0.001): before your agent pays an endpoint: go, caution or no_go, the recommended payment option, and why (the payment would fail, is over your budget, the price is above what is advertised, not HTTPS, unknown token). Cached for 10 minutes.
- **`GET /api/v1/diagnose`** ($0.01): the full report: envelope and protocol version, every `accepts[]` option (network, asset, amount, payee, EIP-712 domain), the resource URL, the Solana payout token account, Bazaar discovery and which wallets can pay. Pass, warn or fail per check.
- **`GET /api/v1/fix`** ($0.05): for your own endpoint: the diagnosis plus the fix for every failing check, with code for your stack.

The same diagnosis is free for people at `https://x402-doctor.onrender.com`, and an MCP server is at `https://x402-doctor.onrender.com/mcp`.

## Spend-aware usage

- **Preflight, don't diagnose, before paying:** the $0.001 preflight answers "should I pay this?"; the full report is for debugging.
- **Reuse a verdict for up to 10 minutes, only for the same endpoint, method, budget (`max_usd`) and network:** the preflight is cached per that combination. When your budget or payment network changes, run a new preflight.
- **Pass your budget** (`max_usd`) and network so the verdict accounts for them.
