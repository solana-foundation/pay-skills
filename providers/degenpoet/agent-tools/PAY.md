---
name: agent-tools
title: "PayBox Agent Tools"
description: "Deterministic pay-per-call utilities for prompt-injection screening, canonical JSON profiling, structural fingerprints, and tabular data-quality summaries. Each endpoint returns structured JSON for 0.01 USDC."
use_case: "Use for screening untrusted prompts before tool execution, hashing and inspecting JSON payloads, inferring JSON shapes, and checking missing values, distinct counts, or mixed types across tabular records."
category: devtools
service_url: https://agent-tools.degenpoet.shop
version: v0.1.0
openapi:
  path: openapi.json
---

PayBox Agent Tools exposes three deterministic utilities for agents and
automation pipelines. No account or API key is required. Each paid endpoint
returns an x402 v2 challenge and accepts 0.01 USDC on Solana mainnet or Base.

- `POST /api/prompt-firewall` scans untrusted text for prompt-injection,
  secret-exfiltration, and tool-abuse signals, returning a risk score, findings,
  a SHA-256 fingerprint, and a safer wrapper prompt.
- `POST /api/json-profile` canonicalizes a JSON value and returns a structural
  fingerprint, metrics, and an inferred shape.
- `POST /api/tabular-profile` summarizes up to 1,000 JSON rows with per-column
  presence, missing-value, distinct-value, and observed-type counts.

The service is deterministic: identical inputs produce identical results, and
the provider never receives a wallet private key.

## Spend-aware usage

- Call the prompt firewall once before routing untrusted text into a tool-capable
  agent, then reuse the returned fingerprint for duplicate inputs.
- Batch tabular inspection into one request of up to 1,000 rows.
- Reuse canonical JSON fingerprints instead of profiling unchanged payloads.
