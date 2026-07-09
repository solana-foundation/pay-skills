---
name: doc-compliance
title: "Document Compliance Verifier"
description: "Verify regulatory and legal compliance of documents using AI. Detects violations, missing required clauses, and risks across multiple jurisdictions. Returns structured JSON with findings, severity levels, and remediation steps."
use_case: "Use for compliance checking of contracts, policies, agreements, and regulatory filings. Supports Russian Federation law, CIS jurisdiction, and international frameworks. Ideal for PropTech, LegalTech, and housing management (JKH) workflows."
category: security
service_url: https://doc-compliance-ouk7yf5iuq-uc.a.run.app
openapi:
  url: https://doc-compliance-ouk7yf5iuq-uc.a.run.app/openapi.json
---

AI document compliance verifier powered by Gemini 2.5 Flash. Analyzes documents
against regulatory requirements and returns a structured JSON report with
violations, risk scores, and actionable remediation guidance.

## Endpoints

- `POST /analyze` — full compliance analysis (paid, x402)
- `POST /analyze/demo` — free demo (rate-limited, max 1 500 chars)
- `GET /health` — service health
- `GET /docs` — OpenAPI UI

## Payment

Each `/analyze` call costs **$1.00 USDC**, accepted on:

- **Base mainnet**: send USDC to `0x1AAbd080c594CfC7AAE5c0d8200948353De87BA1`, retry with `X-Payment-Id: <0x_tx_hash>`
- **Solana mainnet**: send USDC to `F1p61Q2EQfy2G4rsK8FQNdStDCS347cBBq8xb4s9E6p3`, retry with `X-Payment-Id: <base58_signature>`

Payments are verified on-chain and marked as used in Firestore to prevent replay.

## Spend-aware usage

- Use `/analyze/demo` to test document parsing before paying.
- The response includes `violations[].severity`: `CRITICAL` violations require immediate action; `WARNING` can be deferred.
- For Russian Federation documents, specify `jurisdiction: RF` in the request body to get RF-specific regulatory checks.
- Compliance checks are stateless — each call is independent. For document versioning workflows, cache responses by document hash.
- Pairs well with `contract-checker` for full legal + compliance review pipelines.
