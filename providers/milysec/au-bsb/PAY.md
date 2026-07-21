---
name: au-bsb
title: "MilyPay AU BSB"
description: "MilyPay Australian BSB lookup and search over 17,000+ AusPayNet directory entries. Returns bank name, branch, address, and supported payment methods (paper, electronic, high-value) as JSON over x402."
use_case: "Use for Australian BSB validation, bank branch lookup, payment-rail capability checks, suburb or bank-name search, and agent banking workflows in Australia."
category: finance
service_url: https://api.milypay.xyz
version: v1
openapi:
  path: openapi.json
---

MilyPay BSB directory (AusPayNet). Hyphen optional (`012-002` or `012002`).

Pay per call via x402 on Solana. Accepts **USDC**, **USDT**, and **AUDD**.

## Spend-aware usage

- Prefer exact `/au-bsb/{bsb}` when the number is known.
- Use search once to resolve a branch, then cache the BSB.

Docs: https://milypay.xyz/agents.md · Demo: https://milypay.xyz/demo · Brand: **MilyPay** (Milysec)
