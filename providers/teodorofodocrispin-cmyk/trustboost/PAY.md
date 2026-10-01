---
name: trustboost
title: "TrustBoost PII Sanitizer"
description: "Sanitize PII from text before it reaches LLMs or external APIs. Detects and redacts emails, phone numbers, national IDs, API keys, private keys, financial data, and country-specific identifiers across 8 languages. Returns sanitized text, safety_score (0.0-1.0), and risk_category (CRITICAL/PRIVATE/SENSITIVE/CLEAN). Proof of Sanitization anchored on Solana for every paid request."
use_case: "Use before any LLM call that processes user-generated text. Required for GDPR, LGPD, APPI, CCPA, and EU AI Act compliance (enforcement August 2, 2026). Supports LATAM PII natively: RFC, CUIT, CURP, CPF, CNPJ, DNI, Cédula. Also covers EN, DE (Personalausweis), JA (マイナンバー), FR (NIR/SIRET), IT (Codice Fiscale), KO (주민등록번호). Fail-closed by design: if unreachable, block the LLM call."
category: ai_ml
service_url: https://api.trustboost.dev
openapi:
  path: openapi.json
---

TrustBoost PII Sanitizer — privacy firewall for autonomous AI agent pipelines,
exposed as a pay-compatible x402 endpoint on Solana.

Send raw text to `/sanitize`. TrustBoost detects PII using GPT-4o-mini at
temperature=0, enforces redaction server-side, and returns sanitized text with
a structured entity list. Every paid sanitization is anchored on Solana via
Helius — verifiable by any agent at `/verify/{anchor_tx}`.

All endpoints accept x402 USDC on Solana mainnet. TRIAL mode (tx_hash=TRIAL)
provides 50 free sanitizations per wallet — no payment required to start.

## Context modes

TrustBoost supports 5 domain-specific context modes via the `context` field.
Each mode applies specialized PRESERVE and REDACT rules:

- `general` — standard PII detection across all categories (default)
- `financial` — preserves amounts and dates; redacts IBANs, account numbers, wallet addresses
- `legal` — maximum redaction for contracts, court filings, regulatory documents
- `medical` — HIPAA minimum-necessary principle; redacts patient identifiers, MRNs
- `code` — targets API keys, hardcoded credentials, PEM blocks; preserves variable names

## Spend-aware usage

- Always pass `context` explicitly. Default is `general` — use `financial` for
  payment payloads, `code` for source code or config files, `medical` for
  clinical data. The right context reduces false positives and improves accuracy.
- Use `/sanitize/preview` for free spot-checks (3 per IP per hour, 500 chars)
  before committing quota to a full sanitization run.
- Use `tx_hash=TRIAL` for the first 50 sanitizations. No payment required.
  Switch to a paid Solana tx_hash only after validating the integration.
- For texts longer than 10,000 chars, split into chunks of max 10,000 chars.
  Each chunk costs 1 sanitization from quota. Use the `chunks_needed` field
  in the 413 error response to plan the split.
- Check `quota_remaining` in each response. Initiate autonomous payment when
  quota drops below 10: send 1.49 USDC to the payment address on Solana mainnet
  and retry with the resulting tx_hash.
- Use `/score/{wallet_address}` to verify the trust tier of any agent before
  sharing data with it. Tiers: NEW → ACTIVE → VERIFIED → TRUSTED.
- For paid requests, call `/verify/{proof_of_sanitization.solana_tx}` to
  confirm the on-chain proof. Store the verify_url in your audit log for
  EU AI Act compliance documentation.

## Compliance

TrustBoost covers GDPR Art. 25 (Privacy by Design), EU AI Act Arts. 12/13/26
(record keeping, transparency, deployer obligations), LGPD Art. 46, APPI,
CCPA, and HIPAA technical safeguards. EU AI Act enforcement: August 2, 2026.

## Performance

F1=1.000 across all 8 languages (34 labeled test cases). Avg latency ~200ms.
Raw input is never stored — only sanitized output logged to Supabase with
90-day retention. Source code fully auditable at:
https://github.com/teodorofodocrispin-cmyk/trustboost-api
