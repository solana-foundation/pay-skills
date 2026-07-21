---
name: au-super
title: "MilyPay AU Super"
description: "MilyPay Australian super fund lookup by ABN from the ATO Super Fund Lookup register. Returns fund name, status, type, complying status, and USIs as JSON for agents over x402 on Solana."
use_case: "Use for Australian super fund verification by ABN, complying-status checks, USI retrieval, and retirement-fund identity workflows for agents."
category: finance
service_url: https://api.milypay.xyz
version: v1
openapi:
  path: openapi.json
---

MilyPay Super Fund Lookup (ATO). Verify funds by ABN.

Pay per call via x402 on Solana. Accepts **USDC**, **USDT**, and **AUDD**.

## Spend-aware usage

- Call once per ABN and cache for the task.
- Do not poll the same fund ABN repeatedly.

Docs: https://milypay.xyz/agents.md · Demo: https://milypay.xyz/demo · Brand: **MilyPay** (Milysec)
