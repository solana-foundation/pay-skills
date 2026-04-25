---
name: voice
title: "dTelecom"
description: "Pay-per-use WebRTC real-time voice, speech-to-text transcription, and text-to-speech synthesis for AI agents with wallet-based authentication"
use_case: "Use when an AI agent needs real-time voice communication via WebRTC, audio transcription from speech to text, or natural-sounding speech synthesis from text"
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
