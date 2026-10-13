---
name: payments
title: "Invoica"
description: "x402-native invoice + tax compliance for AI agents. Issue jurisdiction-correct invoices, record on-chain settlement, classify tax obligations across 27 EU countries, UK, and 5 US states (CA/TX/NY/FL/WA). Pay-per-call USDC on Solana mainnet."
use_case: "Use for issuing a compliant invoice after an x402-paid agent service, checking on-chain settlement state, or generating a tax line with statute citation. Invoice $0.01, settle check $0.005, tax line $0.02."
category: finance
service_url: https://api.invoica.ai
version: "1.0"
endpoints:
  - method: POST
    path: /api/x402/invoice
    resource: invoice
    description: "Create an x402 invoice for a completed agent service. Body accepts amount, currency, customer (anonymous-OK), description. Returns invoice id, sequential invoiceNumber, and the on-chain settlement address."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: /api/x402/settle
    resource: settle
    description: "Check on-chain settlement status for an invoice by id. Returns status (PENDING/SETTLED/COMPLETED), settlement tx hash if matched, settled_at timestamp. Idempotent — safe to call repeatedly."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.005
  - method: POST
    path: /api/x402/tax
    resource: tax
    description: "Tax classification line for a transaction. Body needs buyer_state + amount + transaction_type. Returns rate, jurisdiction, statute citation, confidence score, requires_review flag. Backed by AgentTax (US) and native VAT engine (EU/UK)."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
---

# Invoica

x402-native invoice + tax compliance middleware for AI agents.

## When to use

- Your agent earned USDC for a service and needs a compliant invoice the customer can use for accounting — POST `/api/x402/invoice`.
- Your agent settled on-chain and needs to confirm Invoica detected + recorded the settlement — POST `/api/x402/settle`.
- Your agent (or its enterprise customer) needs a real tax line on a cross-border transaction — POST `/api/x402/tax`.

## What you get back

An Invoica invoice is durable: stored in Postgres with a unique `invoiceNumber`, queryable for 7 years (EU compliance retention), and includes:

- `id`, `invoiceNumber` (sequential), `amount`, `currency`
- `status` (PENDING → SETTLED → COMPLETED, with state-machine guards)
- `settlement_tx_hash` once detected on-chain
- `tax_line` with rate, jurisdiction, statute, source ("agenttax" or local fallback)
- `paymentDetails` with mandate hash if PACT-backed
- DRS-format receipt for downstream agent reconciliation

## Spend-aware patterns

- **One invoice per service unit, not per call.** If your agent serves 100 micro-API calls under one contract, issue one invoice covering all of them. Saves 99 × $0.01.
- **Skip `/tax` for B2B reverse-charge or zero-tax jurisdictions.** Invoice creation already includes basic VAT for known jurisdictions; the dedicated tax endpoint is for audit-grade statute citation.
- **Skip `/settle` polling.** Invoica's on-chain detector marks the invoice SETTLED automatically within 1-2 blocks. Only call settle when your agent must confirm before proceeding.

## Networks

x402 v2 via the **PayAI facilitator** (`https://facilitator.payai.network`) on Solana mainnet, USDC payments to seller wallet `G21o7DdeBzqMDYswJzbsp2BZ6jGLxbvxDVvtmLvo4N8k`. The same endpoints accept payments on Base, Polygon, Arbitrum One, and SKALE Base mainnet via direct API key auth — see `https://api.invoica.ai/.well-known/x402` for the full manifest.

## Built on

- x402 protocol (HTTP 402 Payment Required, Linux Foundation stewardship)
- PACT (Protocol for Agent Constitutional Trust) — mandate verification before invoice issuance for sponsored payouts
- AgentTax — US sales tax classification
- AsterPay — EUR/SEPA fiat collect rail (EU MiCA-aligned, partnered Apr 2026)

## Provider

[invoica.ai](https://invoica.ai) · operated by Kognai Labs SAS (France). Issues: file on this repo and tag `@SkinGem`.
