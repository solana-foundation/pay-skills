---
category: ai_ml
description: "Translate text and documents across 130+ languages. Supports language detection, romanization, synchronous and batch translation, glossaries for domain terminology, adaptive MT datasets, custom models, and document formatting."
use_case: "Use for multilingual content, localization, document translation, language detection, cross-language communication, glossary-controlled terminology, romanization, batch translation jobs, adaptive MT, and custom translation models."
openapi:
  url: https://production-pay-google-translate-123883807128.us-central1.run.app/openapi.json
name: translate
sandbox_service_url: https://sandbox-pay-google-translate-123883807128.us-central1.run.app
service_url: https://production-pay-google-translate-123883807128.us-central1.run.app
title: Cloud Translation API
version: v3

---

## Spend-aware usage

- Use `translateText` when source and target languages are known. Use
  `detectLanguage` only when the source language is unknown.
- Batch multiple short strings in one request when they share the same language
  pair.
- Use romanization, adaptive translation, glossaries, datasets, or custom models
  only when the user asks for those advanced features. They are not needed for
  ordinary translation.
