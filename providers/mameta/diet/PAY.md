---
name: diet
title: "Japan Diet API"
description: "Search the National Diet of Japan (JP) — proceedings and minutes full-text search, and a member directory with profiles. Covers both houses with AI-generated summaries of minutes and topic tracking across sessions."
use_case: "Use for searching Japanese National Diet proceedings and minutes, looking up Diet members, summarizing parliamentary debate, and tracking a policy topic across Diet sessions."
category: data
service_url: https://diet.agentic-jp.com
version: v1
openapi:
  path: openapi.json
---

Pay-per-request access to the Japanese National Diet — proceedings search,
and member data — turned into clean, AI-readable responses
for research and civic-tech agents.

## Spend-aware usage

- Use `GET /members/search` ($0.005) for direct factual lookups. Use
  `POST /minutes/search` ($0.01 base + $0.0001 per result) for keyword
  search over proceedings — cap `limit` to keep the quote low.
- `POST /minutes/summarize` ($0.08 short / $0.14 medium / $0.22 detailed)
  and `POST /topic-track` ($0.05 base + $0.03 per meeting, up to $0.35 at
  the 10-meeting cap) are LLM-backed and the most expensive — only call
  them when a summary or cross-session analysis is genuinely needed;
  prefer `short` summaries and small `max_meetings`.
- Use `POST /batch` to group member lookups instead of looping.
