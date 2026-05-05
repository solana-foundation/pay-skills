---
category: ai_ml
description: "Analyze text with Google NLP: sentiment, emotion, named entities, entity salience, content categories, moderation categories, syntax, and all-in-one annotation. Supports multilingual text analytics for documents, reviews, tickets, and articles."
openapi:
  url: https://language.google.gateway-402.com/openapi.json
name: language
sandbox_service_url: https://language.google-sandbox.gateway-402.com
service_url: https://language.google.gateway-402.com
title: Cloud Natural Language API
use_case: "Use for sentiment analysis, opinion mining, entity extraction, content classification, moderation triage, support ticket routing, review analytics, article tagging, syntax analysis, document annotation, and multilingual text intelligence."
version: v2

---

## Spend-aware usage

- Prefer `v2/documents:annotateText` when the user needs multiple analyses
  such as sentiment plus entities plus classification. One combined call is
  cheaper than separate analysis calls.
- Send only the text needed for the decision. Trim boilerplate, quoted replies,
  and unrelated document sections before paying.
- Provide language and encoding hints when known to avoid follow-up calls caused
  by ambiguous input.
