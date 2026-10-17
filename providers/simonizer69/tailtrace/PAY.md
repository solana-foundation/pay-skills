---
name: tailtrace
title: 'TailTrace — Aircraft Identity, History & Intelligence'
description: 'Evidence-first aircraft intelligence for autonomous agents: resolve physical-aircraft identity, follow registration history, and inspect provenance, confidence, discrepancies, freshness, and available regulatory evidence.'
use_case: 'Use TailTrace when an agent needs an evidence-backed aircraft identity or registration investigation before a transaction, while preserving unresolved and conflicting evidence instead of guessing.'
category: data
service_url: https://tailtrace-solana-x402-prod.simonwakelin.workers.dev
openapi:
  path: openapi.json
payment:
  protocol: x402
  version: 2
  scheme: exact
  network: solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp
  currency: USDC
  price_usd: '0.15-0.99'
  status: active_unpublished
---
## When to use TailTrace

Use TailTrace when an autonomous agent needs to resolve a registration to a physical aircraft, inspect available registration history, or retrieve the fuller evidence context before an aircraft transaction. TailTrace preserves source provenance, confidence, freshness, identity conflicts, tail-number reuse warnings, and unresolved evidence. It does not infer ownership, title, damage, valuation, or unsupported cross-border identity.

## Paid capabilities

- `GET /v1/aircraft/{n_number}/identify` costs **$0.15 USDC** using x402 V2 `exact` on Solana mainnet. It resolves the requested FAA N-number to available physical-aircraft identity and registration evidence.
- `GET /v1/aircraft/{n_number}/history` costs **$0.49 USDC** using x402 V2 `exact` on Solana mainnet. It returns available registration and historical evidence, including unresolved or conflicting evidence where present.
- `GET /v1/aircraft/{n_number}/intelligence` costs **$0.99 USDC** using x402 V2 `exact` on Solana mainnet. It can include the fuller available registration, safety, maintenance, regulatory, operator, capacity, and registered-base context; availability remains source- and evidence-scoped.

Request a paid route without payment to receive the `PAYMENT-REQUIRED` challenge, then retry with `PAYMENT-SIGNATURE`. A successful response includes `PAYMENT-RESPONSE` and the documented JSON response schema.

## Spend-aware usage

- Start with Identify when only physical-aircraft identity is needed.
- Use History when registration lineage or unresolved tail history is the question.
- Use Intelligence only when the broader evidence layer is required.
- Preserve `resolution_status`, provenance, freshness, and unresolved evidence in downstream decisions.
