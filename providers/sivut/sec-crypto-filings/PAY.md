---
name: sec-crypto-filings
title: "Sivut SEC Crypto Filings"
description: "USDC-paid SEC EDGAR crypto filing radar for public-company bitcoin treasury, digital-asset, stablecoin, mining, blockchain, and crypto disclosure monitoring."
use_case: "Use for fresh SEC filing due diligence, crypto treasury monitoring, public-company digital-asset disclosure checks, and analyst-ready filing provenance."
category: finance
service_url: https://pay.sivut.co
version: "2026-06-10"
openapi:
  path: openapi.json
---

Sivut SEC Crypto Filings returns a buyer-ready package of current public
SEC EDGAR filings that mention crypto, bitcoin, digital assets,
stablecoins, mining, blockchain, or related treasury signals.

The listed endpoint is x402-gated at $10 USDC on Solana mainnet and
returns filing metadata, signal summaries, source URLs, snippets, source
hashes, provenance, and integration notes.

## Spend-Aware Usage

- Use `limit=25` for the normal buyer pack and lower limits when testing.
- Reuse `accession`, `source_hash`, and `primary_doc_url` values from the
  response before paying for repeat checks.
- Use the free sample endpoint at `https://pay.sivut.co/api/public-data/sec-crypto-filings/sample?limit=3`
  to inspect freshness before making a paid call.
