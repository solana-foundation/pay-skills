---
name: agent-security
title: "AtlasData Agent Security"
description: "Pay-per-call prompt-injection detection, PII redaction, webpage reading, web search, and deterministic text utilities. Returns JSON findings, redacted text, extracted page content, search results, hashes, UUIDs, timestamps, and slugs."
use_case: "Use when an agent needs to inspect untrusted instructions, redact personal data or secrets, read a webpage, run a small web search, validate JSON, hash text, encode Base64, count words, or generate simple deterministic text values."
category: security
service_url: https://x402atlas.xyz
version: v1
openapi:
  path: openapi.json
---

AtlasData Agent Security is a pay-per-call x402 API for agents handling untrusted text and lightweight web or string operations. Paid endpoints return HTTP 402 first and accept USDC on Solana mainnet, plus several EVM networks.

The security endpoints are deterministic and fast. Prompt-injection detection returns a score, risk level, rule matches, and excerpts. PII redaction returns redacted text plus counts and severity metadata for emails, cards, credentials, keys, network identifiers, and similar sensitive values.

## Spend-aware usage

- Scan only the untrusted user or tool text that will influence actions, not entire conversation histories by default.
- Redact sensitive text before sending it to another model or service.
- Use `/api/web/read` for a single target page rather than crawling a site.
- Use narrow web-search queries and reuse returned sources instead of repeated broad searches.
