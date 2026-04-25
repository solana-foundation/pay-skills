---
category: search
description: "Search Google Knowledge Graph for entities including people, places, organizations, events, and things. Returns canonical names, descriptions, types, URLs, images, detailed scores, and structured identifiers from 500B+ facts."
endpoints:
- description: Search the Knowledge Graph for matching entities and return structured descriptions, types, images, URLs, and scores.
  method: GET
  path: v1/entities:search
  resource: entities
name: kgsearch
sandbox_service_url: https://sandbox-pay-google-kgsearch-123883807128.us-central1.run.app
service_url: https://production-pay-google-kgsearch-123883807128.us-central1.run.app
title: Knowledge Graph Search API
use_case: "Use for entity lookup, name disambiguation, canonical descriptions, enriching search results, finding official URLs or images, resolving people, places, brands, and organizations, and attaching structured knowledge to records."
version: v1
---
