---
name: voice
title: "dTelecom"
description: "Use wallet-authenticated WebRTC voice, speech-to-text, and text-to-speech APIs for AI agents. Supports realtime bidirectional voice sessions, transcription, speech synthesis, low-latency communication, and pay-per-use voice workflows."
use_case: "Use for realtime AI voice conversations, WebRTC calling, speech-to-text transcription, text-to-speech playback, voice agents, audio interfaces, agent-to-user communication, low-latency conversations, and programmable voice workflows."
category: ai_ml
service_url: https://x402.dtelecom.org
endpoints:
  - method: POST
    path: "webrtc"
    resource: communication
    description: "Create a WebRTC session for real-time bidirectional voice communication between AI agents and users or other agents"
  - method: POST
    path: "stt"
    resource: transcription
    description: "Convert speech audio to text using high-accuracy transcription, supporting multiple audio formats and returning timestamped results"
  - method: POST
    path: "tts"
    resource: synthesis
    description: "Convert text to natural-sounding speech audio with configurable voice options, returning audio data suitable for playback or streaming"
---

Pay-per-use communication APIs for AI agents. WebRTC for real-time voice,
plus speech-to-text and text-to-speech. Decentralized infrastructure
with low-latency global coverage.
