---
category: ai_ml
description: Analyze text for entities, sentiment, syntax, and content classification.
endpoints:
- description: Analyzes the sentiment of the provided text.
  method: POST
  path: v2/documents:analyzeSentiment
  pricing:
    dimensions:
    - direction: usage
      scale: 1000
      tiers:
      - price_usd: 0
        up_to: 5000
      - price_usd: 1
        up_to: 1000000
      - price_usd: 0.5
        up_to: 5000000
      - price_usd: 0.25
      unit: requests
  resource: documents
- description: Finds named entities (currently proper names and common nouns) in the text along with entity types, probability, mention
  method: POST
  path: v2/documents:analyzeEntities
  pricing:
    dimensions:
    - direction: usage
      scale: 1000
      tiers:
      - price_usd: 0
        up_to: 5000
      - price_usd: 1
        up_to: 1000000
      - price_usd: 0.5
        up_to: 5000000
      - price_usd: 0.25
      unit: requests
  resource: documents
- description: Classifies a document into categories.
  method: POST
  path: v2/documents:classifyText
  pricing:
    dimensions:
    - direction: usage
      scale: 1000
      tiers:
      - price_usd: 0
        up_to: 5000
      - price_usd: 2
        up_to: 1000000
      - price_usd: 1
        up_to: 5000000
      - price_usd: 0.5
      unit: requests
  resource: documents
- description: Moderates a document for harmful and sensitive categories.
  method: POST
  path: v2/documents:moderateText
  pricing:
    dimensions:
    - direction: usage
      scale: 1000
      tiers:
      - price_usd: 0
        up_to: 5000
      - price_usd: 2
        up_to: 1000000
      - price_usd: 1
        up_to: 5000000
      - price_usd: 0.5
      unit: requests
  resource: documents
- description: A convenience method that provides all features in one call.
  method: POST
  path: v2/documents:annotateText
  pricing:
    dimensions:
    - direction: usage
      scale: 1000
      tiers:
      - price_usd: 0
        up_to: 5000
      - price_usd: 2
        up_to: 1000000
      - price_usd: 1
        up_to: 5000000
      - price_usd: 0.5
      unit: requests
  resource: documents
name: language
service_url: https://sandbox-pay-google-language-v2c65mhlba-uc.a.run.app
title: Cloud Natural Language API
version: v2
---
