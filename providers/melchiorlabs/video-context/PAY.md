---
name: video-context
title: "Melchior Video Context"
description: "Extract public YouTube captions into timestamped chunks, search them lexically for cited evidence, or normalize supplied text, WebVTT, SRT, and segment arrays for agent context."
use_case: "Use for YouTube video understanding, targeted passage retrieval, cited summaries, lecture and interview research, caption extraction, subtitle parsing, and transcript chunking for AI agents."
category: media
service_url: https://transcript.melchiorlabs.com
version: "0.1.0"
openapi:
  path: openapi.json
---

Melchior Video Context turns public YouTube captions or supplied transcripts into
structured context for agents. YouTube extraction costs $0.01 per successful
request. Deterministic lexical evidence search costs $0.005 and returns only
ranked matching passages with timestamp citations. Normalizing supplied text,
WebVTT, SRT, or timestamped segments costs $0.003 per successful request. All
three endpoints accept USDC over x402 on Solana mainnet and Base.

## Spend-aware usage

- Use `/v1/youtube/search` when the task needs only passages matching a phrase
  or terms; it is lexical retrieval, not semantic search.
- Use `/v1/youtube/transcript` when the task needs the complete transcript and
  model-sized chunks from a public YouTube URL.
- Use the cheaper `/v1/transcripts/context` endpoint when captions or transcript
  text are already available.
- Cache the returned transcript and chunks instead of extracting the same video
  repeatedly.
- Request only the text, segments, and chunk size the downstream task needs.
