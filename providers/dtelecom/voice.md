---
name: voice
title: "dTelecom"
description: "Use wallet-authenticated WebRTC voice, speech-to-text, and text-to-speech APIs for AI agents. Supports realtime bidirectional voice sessions, transcription, speech synthesis, low-latency communication, and pay-per-use voice workflows."
use_case: "Use for realtime AI voice conversations, WebRTC calling, speech-to-text transcription, text-to-speech playback, voice agents, audio interfaces, agent-to-user communication, low-latency conversations, and programmable voice workflows."
category: ai_ml
service_url: https://x402.dtelecom.org
endpoints:
  - method: POST
    path: "v1/credits/purchase"
    resource: credits
    description: "Purchase prepaid credits used to authorize subsequent session endpoints; returns a Bearer token for the WebRTC, STT, TTS, and agent-session APIs"
  - method: POST
    path: "v1/webrtc/token"
    resource: communication
    description: "Create a WebRTC session token for real-time bidirectional voice communication between AI agents and users or other agents"
  - method: POST
    path: "v1/stt/session"
    resource: transcription
    description: "Open a speech-to-text session for high-accuracy transcription, supporting multiple audio formats and returning timestamped results"
  - method: POST
    path: "v1/tts/session"
    resource: synthesis
    description: "Open a text-to-speech session that converts text to natural-sounding speech audio with configurable voice options"
  - method: POST
    path: "v1/agent-session"
    resource: communication
    description: "Open a managed agent session that combines WebRTC, STT, and TTS into a single live voice conversation"
---

Pay-per-use communication APIs for AI agents. WebRTC for real-time voice,
plus speech-to-text and text-to-speech. Decentralized infrastructure
with low-latency global coverage.

## Spend-aware usage

- Buy credits once via `v1/credits/purchase` (this is the paid 402 gateway), then
  reuse the returned Bearer token across the session endpoints. Do not
  re-purchase credits per call.
- Use `v1/stt/session` for transcription and `v1/tts/session` for speech
  synthesis. Use `v1/webrtc/token` or `v1/agent-session` only when the user
  wants an interactive live voice session.
- Before starting WebRTC, confirm the conversation goal, expected duration, and
  whether the user is ready to join. Do not open realtime sessions speculatively.
- For TTS, send the final text once instead of generating several voice variants
  unless the user explicitly asks to compare voices.
