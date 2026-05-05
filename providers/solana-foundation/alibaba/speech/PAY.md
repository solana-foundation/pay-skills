---
category: ai_ml
description: "Transcribe audio files with Qwen ASR through Alibaba Cloud Model Studio's asynchronous speech recognition API."
use_case: "Use for audio transcription, meeting notes, subtitle generation, interview transcription, voice note processing, and multilingual speech-to-text."
openapi:
  url: https://speech.alibaba.gateway-402.com/openapi.json
name: speech
service_url: https://speech.alibaba.gateway-402.com
title: Alibaba Cloud Model Studio Speech Recognition
version: v1

---

## Spend-aware usage

- Submit one transcription job and poll the returned task ID instead of resubmitting the same audio while a task is still running.
- Use public audio URLs and keep clips focused when only one segment or excerpt is needed.
- Poll the task-status endpoint with the returned task ID and wait for completion instead of creating duplicate transcription tasks.
