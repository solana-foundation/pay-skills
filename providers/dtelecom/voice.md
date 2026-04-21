---
name: voice
title: "dTelecom"
description: "Pay-per-use WebRTC, speech-to-text, and text-to-speech for AI agents"
category: ai_ml
service_url: https://x402.dtelecom.org
endpoints:
  - method: POST
    path: "webrtc"
    resource: communication
    description: "Create a WebRTC session for real-time voice communication"
  - method: POST
    path: "stt"
    resource: transcription
    description: "Convert speech audio to text"
  - method: POST
    path: "tts"
    resource: synthesis
    description: "Convert text to natural-sounding speech audio"
---

Pay-per-use communication APIs for AI agents. WebRTC for real-time voice,
plus speech-to-text and text-to-speech. No API keys or accounts — wallet-based
auth only via x402.
