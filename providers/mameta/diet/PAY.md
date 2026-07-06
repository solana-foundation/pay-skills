---
name: diet
title: "Japan Diet API"
description: "Search the National Diet of Japan (JP) — proceedings and minutes full-text search, member directory and profiles, and bill voting records. Covers both houses with AI-generated summaries of minutes and topic tracking across sessions."
use_case: "Use for searching Japanese National Diet proceedings and minutes, looking up Diet members, retrieving bill voting records, summarizing parliamentary debate, and tracking a policy topic across Diet sessions."
category: data
service_url: https://diet.agentic-jp.com
version: v1
openapi:
  path: openapi.json
---

Pay-per-request access to the Japanese National Diet — proceedings search,
member data, and voting records — turned into clean, AI-readable responses
for research and civic-tech agents.

## Spend-aware usage

- Use `GET /members/search` and `GET /votes/:bill_id` ($0.005) for direct
  factual lookups. Use `POST /minutes/search` ($0.012) for keyword search
  over proceedings.
- `POST /minutes/summarize` ($0.06) and `POST /topic-track` ($0.25) are
  LLM-backed and the most expensive — only call them when a summary or
  cross-session analysis is genuinely needed, and keep the query narrow.
- Use `POST /batch` to group member or vote lookups instead of looping.
