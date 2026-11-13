---
name: science
title: "2s Science"
description: "Science and knowledge data: satellites and space objects, genomics/proteins/species, chemical compounds, academic papers (arXiv/PubMed), patents, books, schools, dictionary/thesaurus, and Wikipedia/Wikidata entities."
use_case: "Use for satellite and space data, gene/protein/compound lookups, searching academic papers and patents, and dictionary or encyclopedia entries."
category: data
service_url: https://2s.io
openapi:
  path: openapi.json
---

Part of 2s — a unified, agent-native JSON API. Pay per call in USDC on Solana (or Base) via x402; no accounts, no API keys. Add `?trial=1` (or header `X-2s-Trial: 1`) for one free real call per endpoint per hour.

## Spend-aware usage

- Prefer narrow lookups (by id/code) over broad searches; reuse identifiers across calls.
- Cap result `limit` to the smallest count that answers the task.
