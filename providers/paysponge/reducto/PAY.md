---
name: reducto
title: "Reducto API"
description: "Parse and extract structured data from documents through PaySponge's x402-wrapped Reducto service. Supports OCR, chunking, tables, figures, spreadsheets, agentic enhancement, citations, and both synchronous and asynchronous document workflows."
use_case: "Use for document OCR, PDF and spreadsheet parsing, structured extraction into a custom schema, table and figure analysis, retrieval-ready chunk generation, top-level metadata extraction, and async document-processing jobs that need pay-per-request access."
category: ai_ml
service_url: https://api.paysponge.com/x402/purchase/svc_d672d90ggvqqygj60
openapi:
  path: openapi.json
---

Reducto document parsing and extraction through PaySponge with x402 payments.

The current service exposes two paid `POST` endpoints at $0.05 each.
`/parse` turns a document into structured chunks, OCR data, blocks, and either
an inline result or a URL result for large outputs. `/extract` runs a schema-
driven extraction pipeline over a document and returns either the extracted
result or an async job id.

Both routes accept x402 USDC on Base and Solana mainnet. The published spec
keeps the detailed request and response schemas from Reducto's docs, including
sync and async variants plus parsing, retrieval, formatting, spreadsheet,
citations, and webhook configuration options.

## Spend-aware usage

- Use `/parse` when the task needs generic document structure, OCR blocks,
  retrieval chunks, or a reusable `jobid://` artifact for downstream work.
- Use `/extract` only after you know the target schema or instructions. It is
  best for extracting specific fields rather than general document conversion.
- Keep page ranges, chunking, image return settings, and optional enrichment as
  narrow as the task allows so the first paid call is sufficient.
- Prefer async mode for large or latency-tolerant jobs, especially when the
  caller can handle webhooks or poll with a returned job id.
