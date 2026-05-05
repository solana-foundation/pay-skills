---
category: ai_ml
description: "Extract structured data from PDFs, scans, and document images using OCR and ML. Handles invoices, receipts, forms, contracts, tax documents, IDs, and custom schemas, returning text, tables, entities, fields, and confidence signals."
use_case: "Use for invoice and receipt parsing, OCR on scanned files, form digitization, contract analysis, tax document processing, ID extraction, table extraction, document classification, custom schema extraction, and human-review workflows."
openapi:
  url: https://documentai.google.gateway-402.com/openapi.json
name: documentai
service_url: https://documentai.google.gateway-402.com
title: Cloud Document AI API
version: v1

---

## Spend-aware usage

- Use document processing endpoints only when an existing processor is known or
  the provider instructions returned a ready processor path. Creating processors,
  schemas, or schema versions is setup work and should be confirmed separately.
- For one document, use the synchronous process endpoint when available. Use
  batch or long-running operations only for multiple documents or large files.
- Request only the needed extraction fields or processor type. Do not create a
  custom schema just to parse a one-off document.
- Poll operation IDs returned by async calls. Do not resubmit the same document
  because an operation is still running.
