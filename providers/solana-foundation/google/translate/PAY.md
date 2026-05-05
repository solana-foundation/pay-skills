---
category: translation
description: "Translate text and documents across 130+ languages. Supports language detection, romanization, synchronous and batch translation, glossaries for domain terminology, adaptive MT datasets, custom models, and document formatting."
use_case: "Use for multilingual content, localization, document translation, language detection, cross-language communication, glossary-controlled terminology, romanization, batch translation jobs, adaptive MT, and custom translation models."
openapi:
  url: https://translate.google.gateway-402.com/openapi.json
name: translate
service_url: https://translate.google.gateway-402.com
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
