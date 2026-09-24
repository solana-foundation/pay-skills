---
name: trust-intelligence
title: "LimitGuard"
description: "LimitGuard company verification and sanctions screening API: Dutch and Belgian business registries (KVK, KBO/CBE), EU VAT validation via VIES, sanctions and PEP screening, domain and country risk signals, and a 0-100 entity risk score."
use_case: "Use for KYB and counterparty checks before an agent pays, onboards or contracts with a company: verify a Dutch or Belgian company, validate an EU VAT number, screen a name against sanctions and PEP lists, or get a quick risk score."
category: identity
service_url: https://api.limitguard.ai
openapi:
  path: openapi.json
---

LimitGuard verifies companies for AI agents: registry status (KVK, KBO/CBE), EU VAT validity (VIES), sanctions and PEP screening, domain and country risk, combined into a risk score. Paid per call with x402 (USDC on Base or Solana) or with a prepaid API key; prices are in the OpenAPI `x-payment-info`.

## Spend-aware usage

- Start with `POST /v1/risk/score` for quick triage; call `POST /v1/entity/check` only when you need the full per-source breakdown.
- Send the identifiers you have (`kvk_number`, `cbe_number`, `vat_number`, `domain`): they narrow the lookup and raise confidence.
- Set `X-Response-Quality: cached` when a result up to a day old is fine; it is the cheapest tier.
- Reuse a result for the same company within a session instead of re-checking it.
