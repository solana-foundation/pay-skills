---
category: ai_ml
description: "Convert speech audio to text with Google Speech-to-Text. Supports 125+ languages, short and long audio, streaming-style workflows, speaker diarization, word timestamps, phrase hints, custom classes, profanity filtering, and punctuation."
use_case: "Use for audio transcription, meeting notes, podcast and video captions, call center analytics, voice command processing, accessibility, diarized conversations, timestamped transcripts, domain vocabulary hints, and long audio jobs."
openapi:
  url: https://production-pay-google-speech-123883807128.us-central1.run.app/openapi.json
name: speech
sandbox_service_url: https://sandbox-pay-google-speech-123883807128.us-central1.run.app
service_url: https://production-pay-google-speech-123883807128.us-central1.run.app
title: Cloud Speech-to-Text API
version: v1

---

## Spend-aware usage

- Use synchronous `v1/speech:recognize` for short audio and
  `v1/speech:longrunningrecognize` for longer audio or Cloud Storage inputs.
- Provide encoding, sample rate, language code, and channel count when known to
  avoid failed paid attempts.
- Transcribe the smallest useful audio segment. Ask before transcribing long
  files, multiple files, or repeated language/model variants.
- Poll long-running operations returned by the API. Do not resubmit audio while
  an operation is pending.
