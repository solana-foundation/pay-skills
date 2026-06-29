---
name: scan
title: "BotVisibility"
description: "Scans any URL for AI-agent readiness: a scored 58-check report across 5 levels (Discoverable, Usable, Optimized, Indexable, Agent-Native), covering llms.txt, agent-card, OpenAPI, MCP, structured data, and agent-native endpoints, plus prioritized fixes."
use_case: "Use to audit a site's AI-agent readiness, diagnose why agents waste tokens or can't use it, and get prioritized fixes — checking llms.txt, agent-card, OpenAPI/MCP discovery, structured data, and agent-native endpoints. Like Lighthouse for AI agents."
category: devtools
service_url: https://pay.botvisibility.com
version: v1
openapi:
  path: openapi.json
---

BotVisibility audits how visible and usable a website is to AI agents. POST a URL and get back a scored readiness report across **58 checks and 5 levels** — Discoverable, Usable, Optimized, Indexable, and Agent-Native — with prioritized remediation an agent (or its human) can ship.

Every check is **external**. BotVisibility reads a site's published signals — `llms.txt`, `/.well-known/agent-card.json`, OpenAPI, MCP discovery, structured data, and agent-native capability declarations — and probes the declared endpoints. No source access or repo upload required.

## x402 payment flow

1. `POST { "url": "https://example.com" }` to `/api/v1/scan-gateway` with no payment — the gateway answers `HTTP 402` with the x402 payment requirements (USDC or USDT on Solana mainnet).
2. Your wallet signs the payment and retries the same request with the payment proof attached.
3. The gateway verifies on-chain and returns the full scored report as Markdown. If a scan can't complete, it returns `502` instead of an empty report, so payment isn't settled for nothing.

## Spend-aware usage

- One scan covers all 58 checks across all 5 levels — no need to call repeatedly for the same URL.
- Re-scan a URL only after you've shipped fixes, to confirm the achieved level changed.
- Humans scan free in the browser at `https://botvisibility.com` and via the free MCP server at `/api/mcp`. The paid endpoint here is for agents that need unmetered, programmatic volume.
- The report is deterministic per URL at scan time; cache it if you're acting on the same site repeatedly within a session.
