---
category: ai_ml
description: "Use Google Gemini models for text generation, multimodal image/audio/video understanding, chat, embeddings, code generation, JSON output, function calling, cached context, file search, grounding with Google Search, and fine-tuned models."
use_case: "Use for AI chat, text generation, summarization, code help, image and video understanding, embeddings, semantic retrieval, tool calling, structured JSON output, grounded answers, batch generation, cached prompts, and tuned model workflows."
openapi:
  url: https://production-pay-google-generativelanguage-123883807128.us-central1.run.app/openapi.json
name: generativelanguage
sandbox_service_url: https://sandbox-pay-google-generativelanguage-123883807128.us-central1.run.app
service_url: https://production-pay-google-generativelanguage-123883807128.us-central1.run.app
title: Generative Language API (Gemini)
version: v1beta

---

## Spend-aware usage

- Use `generateContent` for a one-shot Gemini answer and `streamGenerateContent`
  only when streaming is useful to the caller.
- Use `countTokens` before paying for generation only when the prompt is large
  or the user gave a strict budget. Do not count tokens for short prompts.
- Use batch embedding endpoints for multiple texts. Do not call single embedding
  repeatedly when a batch endpoint fits.
- Corpus, file, and permission endpoints are setup/state management. Ask before
  creating persistent retrieval resources.
