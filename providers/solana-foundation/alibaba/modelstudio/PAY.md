---
category: ai_ml
description: "Alibaba Cloud Model Studio's OpenAI-compatible API for Qwen chat, reasoning, and code-generation models."
use_case: "Use for OpenAI-compatible chat completions with Qwen Max, Plus, Flash, and Coder models."
openapi:
  path: openapi.json
name: modelstudio
service_url: https://modelstudio.alibaba.gateway-402.com
title: Alibaba Cloud Model Studio (Qwen)
version: v1

---

## Spend-aware usage

- Call the free model-list endpoint before generation when the caller has not
  already selected a Qwen model.
- Choose Flash models for lower-cost routine work, Plus or Max for harder
  reasoning, and Coder models for software-engineering tasks.
- Pricing varies by model and, for some models, by input-context size. Keep
  prompts concise and set an output-token limit when the client supports one.
- Use streaming only when incremental output is useful to the caller.
