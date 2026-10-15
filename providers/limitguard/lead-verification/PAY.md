---
name: lead-verification
title: "Limitguard"
description: "Limitguard checks the company behind a B2B lead against the Dutch and Belgian business registers (KVK, KBO), EU VAT (VIES) and the OFAC, EU and UN sanctions lists, with the source on every answer. Also wallet and agent checks."
use_case: "Use before an agent contacts, onboards, pays or contracts with a company: verify a Dutch or Belgian sales lead, validate an EU VAT number, screen a name or wallet against sanctions lists, or check a counterparty agent's wallet."
category: identity
service_url: https://api.limitguard.ai
openapi:
  path: openapi.json
---

Limitguard validates B2B leads and counterparties for AI agents. It checks a company in the KVK or KBO register, its EU VAT number with VIES, its name against the OFAC, EU and UN sanctions lists, and its website, and returns proceed, review or block with the source of every answer. It also screens wallets (OFAC SDN address list, on-chain signals) and checks a counterparty agent's wallet and ERC-8004 identity. Paid per call with x402 (USDC on Base or Solana) or from a prepaid API key's balance; prices are in the OpenAPI `x-payment-info`.

## Spend-aware usage

- For a Dutch or Belgian sales lead, call `POST /v1/leads/verify` once: it covers register, VAT, mail server, IBAN country and sanctions in one call.
- Start with `POST /v1/risk/score` for quick triage; call `POST /v1/entity/check` only when you need the full per-source breakdown.
- Send the identifiers you have (`kvk_number`, `cbe_number`, `vat_number`, `domain`): they narrow the lookup and raise confidence.
- Set `X-Response-Quality: cached` when a recent result for the same company is fine; it is the cheapest tier.
- Reuse a result for the same company within a session instead of re-checking it.
