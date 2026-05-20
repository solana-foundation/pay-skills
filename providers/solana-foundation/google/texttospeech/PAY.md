---
category: ai_ml
description: "Generate natural-sounding speech from text or SSML in 50+ languages and 380+ voices. Supports pitch, speed, effects profiles, MP3/WAV/OGG output, long-form synthesis, and Neural2/Studio voice models for production audio."
openapi:
  path: openapi.json
name: texttospeech
service_url: https://texttospeech.google.gateway-402.com
title: Cloud Text-to-Speech API
use_case: "Use for voiceovers, IVR and phone prompts, accessibility audio, audiobook generation, language learning, pronunciation previews, product narration, support bots, podcast snippets, SSML-controlled speech, and long-form narration."
version: v1

---

## Spend-aware usage

- Use `v1/text:synthesize` directly when the user supplies text and does not
  need voice discovery. Call voice-list endpoints only when selecting a voice.
- Generate the final text once. Ask before producing multiple voices, languages,
  or formats.
- Prefer compact audio encodings when quality requirements allow, and split long
  narration only when the API size limits require it.
