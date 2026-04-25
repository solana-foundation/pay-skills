---
category: search
description: 'Search Google''s Knowledge Graph for entities — people, places, organizations, events, and things. Returns structured data: descriptions, images, URLs, types, and detailed scores. 500B+ facts indexed.'
endpoints:
- description: Searches Knowledge Graph for entities that match the constraints. A list of matched entities will be returned in respons
  method: GET
  path: v1/entities:search
  resource: entities
name: kgsearch
sandbox_service_url: https://sandbox-pay-google-kgsearch-123883807128.us-central1.run.app
service_url: https://production-pay-google-kgsearch-123883807128.us-central1.run.app
title: Knowledge Graph Search API
use_case: entity lookup, enriching search results with structured data, disambiguating names, finding canonical info about people/places/things
version: v1
---
