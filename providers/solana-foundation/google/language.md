---
category: ai_ml
description: "Analyze text with Google NLP: sentiment, emotion, named entities, entity salience, content categories, moderation categories, syntax, and all-in-one annotation. Supports multilingual text analytics for documents, reviews, tickets, and articles."
endpoints:
- description: Analyze document sentiment and return overall score, magnitude, and sentence-level sentiment signals.
  method: POST
  path: v2/documents:analyzeSentiment
  pricing:
    dimensions:
    - direction: usage
      scale: 1
      tiers:
      - price_usd: 0.001
      unit: requests
  resource: documents
- description: Extract named entities from text with entity types, salience, mentions, metadata, and confidence signals.
  method: POST
  path: v2/documents:analyzeEntities
  pricing:
    dimensions:
    - direction: usage
      scale: 1
      tiers:
      - price_usd: 0.001
      unit: requests
  resource: documents
- description: Classify a document into content categories from Google's taxonomy with confidence scores.
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
- description: Moderate text for harmful or sensitive categories and return category confidence scores.
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
- description: Run multiple Natural Language analyses in one request, including sentiment, entities, syntax, and classification.
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
use_case: "Use for sentiment analysis, opinion mining, entity extraction, content classification, moderation triage, support ticket routing, review analytics, article tagging, syntax analysis, document annotation, and multilingual text intelligence."
version: v2
---
