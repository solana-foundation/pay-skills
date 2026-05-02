---
category: ai_ml
description: "Translate text with Qwen-MT through Alibaba Cloud Model Studio's OpenAI-compatible chat completions API."
use_case: "Use for single-turn machine translation, localization, multilingual content generation, and cross-language messaging."
openapi:
  url: https://translate.alibaba.gateway-402.com/openapi.json
name: translate
sandbox_service_url: https://translate.alibaba-sandbox.gateway-402.com
service_url: https://translate.alibaba.gateway-402.com
title: Alibaba Cloud Model Studio Translation
version: v1

---

## Spend-aware usage

- Set source and target languages explicitly when known instead of spending extra requests on avoidable detection or retries.
- Batch related text into one request when the upstream format allows it instead of paying for many tiny translation calls.
- Prefer one well-formed request with the right model options over several trial-and-error calls, especially when the body selects the model behavior.
