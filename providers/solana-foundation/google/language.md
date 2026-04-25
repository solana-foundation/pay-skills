---
category: ai_ml
description: Analyze text with NLP — extract named entities (people, orgs, locations, dates), detect sentiment and emotion, parse syntax, classify content into 1000+ categories. Supports 12 languages.
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
sandbox_service_url: https://sandbox-pay-google-language-123883807128.us-central1.run.app
service_url: https://production-pay-google-language-123883807128.us-central1.run.app
title: Cloud Natural Language API
use_case: sentiment analysis, named entity recognition, content classification, text analytics, opinion mining, syntax parsing
version: v2
---
