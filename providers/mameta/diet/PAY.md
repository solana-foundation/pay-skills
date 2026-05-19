---
name: diet
title: "Japan Diet API"
description: "Search the National Diet of Japan (JP) — proceedings and minutes full-text search, member directory and profiles, and bill voting records. Covers both houses with AI-generated summaries of minutes and topic tracking across sessions."
use_case: "Use for searching Japanese National Diet proceedings and minutes, looking up Diet members, retrieving bill voting records, summarizing parliamentary debate, and tracking a policy topic across Diet sessions."
category: data
service_url: https://diet.agentic-jp.com
version: v1
endpoints:
  - method: GET
    path: /members/search
    resource: members
    description: "Search National Diet members by name, party, or constituency"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.005
  - method: GET
    path: /members/:id
    resource: members
    description: "Get the profile of a single National Diet member by id"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.005
  - method: GET
    path: /votes/:bill_id
    resource: votes
    description: "Retrieve the voting record for a specific bill in the National Diet"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.005
  - method: POST
    path: /minutes/search
    resource: minutes
    description: "Full-text search the National Diet proceedings and minutes by keyword and date range"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.012
  - method: POST
    path: /minutes/summarize
    resource: minutes
    description: "Generate an AI summary of National Diet minutes for a query or session"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: /topic-track
    resource: topic-track
    description: "Track how a policy topic was discussed across multiple National Diet sessions"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.25
  - method: POST
    path: /batch
    resource: batch
    description: "Run many Diet member or vote lookups in one request"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.005
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
