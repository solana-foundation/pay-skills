---
name: screenshots
title: "Screenshots"
description: "Renders a webpage in a real browser with scripts and dynamic content, then captures it — viewport or full scrollable page, custom screen size, load waits, and cookie-banner dismissal."
use_case: "Use to capture what a page actually looks like after JavaScript renders — visual verification of a deploy, archiving, or previewing a page an agent cannot see."
category: media
service_url: https://screenshots.underscoredone.com
openapi:
  path: openapi.json
---

Renders a webpage in a real browser with scripts and dynamic content, then captures it — viewport or full scrollable page, custom screen size, load waits, and cookie-banner dismissal. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- Capture the viewport rather than the full page unless you need what is below the fold.
- Set the wait only as long as the page needs; re-captures cost another call.
