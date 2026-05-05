---
category: search
description: "Search Google Knowledge Graph for entities including people, places, organizations, events, and things. Returns canonical names, descriptions, types, URLs, images, detailed scores, and structured identifiers from 500B+ facts."
openapi:
  url: https://kgsearch.google.gateway-402.com/openapi.json
name: kgsearch
sandbox_service_url: https://kgsearch.google-sandbox.gateway-402.com
service_url: https://kgsearch.google.gateway-402.com
title: Knowledge Graph Search API
use_case: "Use for entity lookup, name disambiguation, canonical descriptions, enriching search results, finding official URLs or images, resolving people, places, brands, and organizations, and attaching structured knowledge to records."
version: v1

---

## Spend-aware usage

- Use one `v1/entities:search` call with the most specific name and type hint
  available. Set a small limit for disambiguation tasks.
- This provider resolves entities; it is not a live web search engine. Use web
  search or Sonar when the user asks for current events or citations.
- If the user already supplied a canonical URL or ID, do not call Knowledge Graph
  unless they need entity metadata or disambiguation.
