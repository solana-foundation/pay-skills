---
name: have-blues
title: "HaveBlues AI Services"
description: "Pay-per-call x402 USDC gateway for AI agent services on Solana mainnet. Generate Python code with tests, scrape public web pages, or produce cited research reports. Each call returns a real artifact, no subscription or API key required."
use_case: "Use for generating production-ready Python scripts with tests and README from a spec, scraping public web pages into structured JSON, or producing markdown research reports with cited sources on demand. No subscription or commitment."
category: ai_ml
service_url: https://haveblues.pay.sh
endpoints:
  - method: POST
    path: v1/code
    resource: code
    description: "Generate production-ready Python 3.9 from a spec, including unittest tests and a README."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.05
  - method: POST
    path: v1/scrape
    resource: scrape
    description: "Fetch a public URL and return structured JSON with SSRF protection and rate limiting."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.03
  - method: POST
    path: v1/research
    resource: research
    description: "Produce a markdown research report with cited sources from live web search, default ~1500 words."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.15
  - method: GET
    path: health
    resource: health
    description: "Free health check returning service status and uptime."
---

HaveBlues is a pay-per-call gateway for AI agent services, built on top of the Hermes agent platform. Every call returns a real artifact (Python file + tests + README, scraped JSON, or cited markdown report) rather than a chatbot-style reply.

All endpoints settle payments in USDC on Solana via the x402 protocol. No account or API key required — clients bring their own wallet and pay per call.

## Spend-aware usage

- Start with the cheapest endpoint (`/v1/scrape` at $0.03) to verify integration before using `/v1/research`.
- Pass a focused, complete spec to `/v1/code` (include sample input/output if possible) to avoid retries.
- For `/v1/research`, state the target word count and audience in the description; default is ~1500 words.
- Provide the target URL directly in the request body for `/v1/scrape` (not embedded in the description).
- Cap request rate client-side — there is no built-in burst limit beyond the public daily LLM spend cap on the provider side.

## Compatibility

Any x402-compatible client can call this service. Reference implementation:

    pay curl -X POST https://haveblues.pay.sh/v1/code \
      -H "Content-Type: application/json" \
      -d '{"title": "CSV deduplicator", "description": "Python script that reads a CSV by email column, removes case-insensitive duplicates, writes to output.csv. Stdlib only."}'

The `pay` CLI auto-handles the 402 challenge, signs the payment, retries the request, and returns the response.

## Limits

- SSRF protection: only public HTTP/HTTPS targets accepted; private IP ranges (127.0.0.0/8, 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, 169.254.0.0/16) and `file://`/`ftp://`/`javascript:` are refused.
- Daily LLM spend is capped on the provider side; calls beyond the cap return `429 Too Many Requests` until the next UTC day.
- Sub-skill workspaces (generated files) live on the provider's machine; copies are returned in the JSON response.

## Security notes

This catalog entry does not include wallet addresses, signer paths, or internal file paths. Operator wallet details are configured server-side and never exposed via the public endpoint. Clients should treat the service as untrusted for input validation purposes (the provider validates inputs but agents should still sanitize).
