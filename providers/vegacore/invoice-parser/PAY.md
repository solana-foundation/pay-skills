---
name: invoice-parser
title: "Invoice Parser"
description: "Extract structured data from invoices, receipts, and financial documents. Supports text, PDF, images (JPEG/PNG/WEBP), and audio files. Returns JSON with vendor, amounts, line items, dates, and VAT breakdown."
use_case: "Use for automated invoice ingestion, expense report processing, accounts payable automation, receipt digitization, and financial document parsing. Handles Russian, English, and multilingual documents."
category: ai_ml
service_url: https://invoice-parser-ouk7yf5iuq-uc.a.run.app
openapi:
  url: https://invoice-parser-ouk7yf5iuq-uc.a.run.app/openapi.json
---

AI invoice and receipt parser powered by Gemini 2.0 and Google Document AI.
Accepts text, PDF, images, or audio via `/analyze` and returns a structured JSON
with all key financial fields extracted and normalized.

## Endpoints

- `POST /analyze` — full extraction (paid, x402)
- `POST /analyze/demo` — free demo (rate-limited, max 2 000 chars)
- `GET /health` — service health
- `GET /docs` — OpenAPI UI

## Payment

Each `/analyze` call costs **$0.10 USDC**, accepted on:

- **Base mainnet**: send USDC to `0x1AAbd080c594CfC7AAE5c0d8200948353De87BA1`, retry with `X-Payment-Id: <0x_tx_hash>`
- **Solana mainnet**: send USDC to `F1p61Q2EQfy2G4rsK8FQNdStDCS347cBBq8xb4s9E6p3`, retry with `X-Payment-Id: <base58_signature>`

Payments are verified on-chain and marked as used in Firestore to prevent replay.

## Spend-aware usage

- Use `/analyze/demo` to validate file format and parsing quality before paying.
- Prefer PDF or image uploads over text extraction for better accuracy on scanned documents.
- The response JSON always includes `confidence` scores per field — filter by `confidence < 0.8` to flag items needing human review.
- For high-volume pipelines, process invoices sequentially; each call is one payment ($0.10).
- Audio invoices (voice memos, phone orders) are transcribed via Google Speech-to-Text before parsing.
