---
category: ai_ml
description: "Synthesize speech with Qwen TTS through Alibaba Cloud Model Studio's multimodal generation API."
use_case: "Use for voiceovers, accessibility audio, narration, dubbing, spoken product copy, and synthetic voice generation."
openapi:
  url: https://texttospeech.alibaba.gateway-402.com/openapi.json
name: texttospeech
sandbox_service_url: https://texttospeech.alibaba-sandbox.gateway-402.com
service_url: https://texttospeech.alibaba.gateway-402.com
title: Alibaba Cloud Model Studio Text-to-Speech
version: v1

---

## Spend-aware usage

- Use the speech endpoint that matches the exact direction of work, such as recognition for transcription or synthesis for spoken output.
- Trim long audio or text when only a specific segment is needed so the first paid request stays focused.
- Prefer one well-formed request with the right model options over several trial-and-error calls, especially when the body selects the model behavior.
