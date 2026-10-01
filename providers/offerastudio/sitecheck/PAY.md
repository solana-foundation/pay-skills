---
name: sitecheck
title: "SiteCheck"
description: "Website audits and agent utilities, pay per call in USDC: WCAG 2.2 accessibility, SEO and security headers, company contacts, HN hiring search, Panta prediction markets, plus image, speech and text models."
use_case: "Use to audit a website (accessibility issues with fixes, SEO basics, security headers, tech stack), enrich a company domain with contact details, search the HN Who is hiring thread, or research Panta prediction markets."
category: data
service_url: https://api.sitecheck-api.workers.dev
openapi:
  path: openapi.json
---

SiteCheck is a live pay-per-call API for AI agents. Every call is paid on its own with x402 in USDC on Solana, Base or Arc: no account, no API key. A payment settles only when the call succeeds, so a failed call is never charged.

- `GET /api/audit?url=` ($0.02): WCAG 2.2 accessibility issues (European Accessibility Act) with severity and a plain-English fix, a 0-100 score, SEO basics, security headers and the detected tech stack.
- `GET /api/contacts?url=` ($0.01): company emails, phones, social profiles and description from the home, contact, about and legal pages.
- `GET /api/hiring` ($0.01): search the current Hacker News "Who is hiring?" thread.
- `GET /api/markets`, `/api/markets/brief`, `POST /api/markets/quote`, `POST /api/markets/build-buy`: Panta prediction markets on Solana (search, odds and brief, quote, unsigned buy transaction the agent signs itself). Information only, not financial advice.
- `POST /api/image`, `/api/tts`, `/api/transcribe`, `/api/embed`, `/api/chat`: image generation, text-to-speech, speech-to-text, embeddings and LLM chat.

Code (MIT): https://github.com/bck-stack/sitecheck-x402

## Spend-aware usage

- Call `/api/audit` once per URL and reuse the result; it already includes accessibility, SEO, security headers and tech stack, so there is no need for separate calls.
- Use `/api/contacts` only on the company's own domain, not on aggregator or social profile URLs.
- For prediction markets, search first (`/api/markets`, cheapest) and request a brief only for the market you will act on.
- Prices are listed per route in the 402 challenge and in `/openapi.json`; nothing is charged if the call fails.
