---
name: diet
title: "Japan Diet API"
description: "Search the National Diet of Japan (JP) — proceedings and minutes full-text search over the official National Diet Library archive, and a member directory with profiles. Covers both houses."
use_case: "Use for searching Japanese National Diet proceedings and minutes, looking up Diet members, and finding when and where a policy topic was debated."
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
- Use `POST /batch` to group member lookups instead of looping.
