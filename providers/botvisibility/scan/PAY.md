---
name: scan
title: "BotVisibility"
description: "Scans any URL for AI-agent readiness (a scored 58-check report across 5 levels with prioritized fixes) and answers questions about any site with grounded, excerpt-cited answers that never fabricate, at 95-99% fewer tokens than scraping."
use_case: "Use to audit a site's AI-agent readiness, diagnose why agents waste tokens or can't use it, and get prioritized fixes; or ask a question about any URL and get a grounded, verbatim-cited answer. Like Lighthouse for AI agents, plus grounded Q&A."
category: devtools
service_url: https://pay.botvisibility.com
version: v1
openapi:
  path: openapi.json
---

BotVisibility offers two paid capabilities through one gateway: a **readiness scan** that audits how visible and usable a website is to AI agents, and an **Answer Gateway** that answers questions about any URL with grounded, excerpt-cited answers.

## Readiness scan — $0.10

POST a URL to `/api/v1/scan-gateway` and get back a scored readiness report across **58 checks and 5 levels** — Discoverable, Usable, Optimized, Indexable, and Agent-Native — with prioritized remediation an agent (or its human) can ship.

Every check is **external**. BotVisibility reads a site's published signals — `llms.txt`, `/.well-known/agent-card.json`, OpenAPI, MCP discovery, structured data, and agent-native capability declarations — and probes the declared endpoints. No source access or repo upload required.

## Answer Gateway — $0.01 per answered question

POST `{ "url": ..., "question": ... }` to `/api/v1/answer-gateway` and get a grounded answer extracted from that page, typically at **95-99% fewer tokens** than fetching and reading the page yourself. A deterministic grounding verifier requires every excerpt to be a verbatim substring of the fetched source and the composed answer to be fully covered by those excerpts (including matching negation), so it **never fabricates** — if the answer isn't on the page you get an honest `not_found`, never an inference.

One response shape, five terminal states — branch on `state`:

- `answered` — grounded answer (`confidence: high`) or verified excerpts only (`medium`). **The only state that bills.**
- `not_found` — the answer isn't in the source within the 3-fetch cap. Free.
- `already_efficient` — the page is already token-lean; fetch the returned `direct_url` yourself. Free.
- `payment_required` — the source page itself returned HTTP 402; its x402 quote is returned in `payment`. Free.
- `unreachable` — policy block, HTTP error, or timeout (with a `reason`). Free.

The billing rule is enforced on-chain, not promised: the gateway returns HTTP 200 (settling the x402 payment) **only** for `answered`; every other terminal state comes back as 422 with the full result body and does not settle. Every response carries a `receipt` with `raw_tokens_at_source` vs `tokens_delivered`, the reduction %, and what you paid — auditable per call.

Compliance is unconditional: `robots.txt` and no-AI signals (`X-Robots-Tag: noai`, `Content-Signals: ai-input=no`) are always honored, and a disallowed target returns `unreachable(policy)` without being fetched or cached.

## Prepaid answer key — $5.00 for 1,000 answers

POST `/api/v1/answer-keys` with one $5.00 x402 payment and get back a `bvag_` Bearer key with 1,000 answered-question credits — $0.005 per answer, half the pay-per-request rate. Use it as `Authorization: Bearer` against `POST https://botvisibility.com/api/answer`. The raw key is shown once (only its SHA-256 hash is stored), and only `answered` responses consume credits.

## x402 payment flow

1. POST to the endpoint with no payment — the gateway answers `HTTP 402` with the x402 payment requirements (USDC or USDT on Solana mainnet).
2. Your wallet signs the payment and retries the same request with the payment proof attached.
3. The gateway verifies on-chain and returns the result. If a scan can't complete it returns `502`, and a non-answered question returns `422` — in both cases payment isn't settled, so you never pay for nothing.

## Spend-aware usage

- One scan covers all 58 checks across all 5 levels — no need to call repeatedly for the same URL. Re-scan only after you've shipped fixes.
- Questions that can't be answered from the source are free (`not_found`, `unreachable`, `payment_required`, `already_efficient` never bill), so probing whether a page holds the answer costs nothing on a miss.
- A two-layer cache (distilled-page snapshots + per-question answers) serves repeated questions at near-zero cost; identical questions against the same URL are cheap to retry.
- Buying the $5.00 prepaid key halves the per-answer price ($0.005 vs $0.01) — worth it beyond ~500 questions.
- Humans scan and ask free in the browser at `https://botvisibility.com` (five scans and five answered questions per day) and via the free MCP server at `/api/mcp`. The paid endpoints here are for agents that need unmetered, programmatic volume.
