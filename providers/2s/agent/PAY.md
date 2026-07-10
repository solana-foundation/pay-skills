---
name: agent
title: "2s Agent"
description: "Agent-native primitives: persistent agent memory (put/get/list/delete), an agent-to-agent service marketplace (discover/register/review), and topic knowledge-delta since a given date."
use_case: "Use for giving an agent persistent memory, discovering or registering agent services, and catching up on what changed in a topic since a date."
category: devtools
service_url: https://2s.io
openapi:
  path: openapi.json
---

Part of 2s — a unified, agent-native JSON API. Pay per call in USDC on Solana (or Base) via x402; no accounts, no API keys. Add `?trial=1` (or header `X-2s-Trial: 1`) for one free real call per endpoint per hour.

## Spend-aware usage

- Prefer narrow lookups (by id/code) over broad searches; reuse identifiers across calls.
- Cap result `limit` to the smallest count that answers the task.
