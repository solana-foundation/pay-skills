---
name: ecosystem-pulse
title: "Kael Ecosystem Pulse"
description: "Paid 24h Solana ecosystem digest via x402 Exact SVM USDC (PayAI): free teaser + headlines/evidence/delta/full SKUs. Informational synthesis only — not financial advice."
use_case: "Use for Solana ecosystem situational awareness: lane-tagged 24h headlines, receipt-grade evidence by id, and a daily delta cron since a prior as_of — then optional full pulse."
category: data
service_url: https://kael-ecosystem-pulse.onrender.com
version: v1
openapi:
  path: openapi.json
---

Kael Ecosystem Pulse is a Solana-first x402 API that returns a structured 24h
ecosystem digest for agents: lane-tagged narratives, announcements, developer
activity, and watch-next items, plus compact headlines / evidence / delta SKUs.
Informational synthesis only — not financial advice and no trading signals.

Free discovery (no charge):

- `GET /health` — liveness + network mode
- `GET /v1/pulse/sample` — **TEASER only** (id/lane/title/confidence; no summaries/sources) + upgrade CTAs
- `GET /.well-known/x402` — machine-readable discovery manifest
- `GET /llms.txt` — agent-oriented plain-text API guide
- `GET /openapi.json` — OpenAPI 3.1
- `GET /tip` — tip-jar metadata only (never charged)

Paid Exact SVM USDC on Solana mainnet via PayAI (`facilitator.payai.network`):

- `GET /v1/pulse/headlines` — **$0.02** starter attach (bare path OK → 402)
- `GET /v1/pulse/evidence?id=` — **$0.05** receipt-grade citations for one narrative/announcement
- `GET /v1/pulse/delta?since=` — **$0.08** narratives newer than a prior `as_of` (daily cron SKU)
- `GET /v1/pulse` — **$0.10** full pulse

payTo: `7Ny8us7f1wBkNJZ2tYKWPBQhQsLxJ18xot8jxCNd9YGG` (Solana mainnet USDC).

## Spend-aware usage

- Start with free `/v1/pulse/sample?src=pay-skills` — teaser shape only; read `upgrade.starter_sku`.
- Prefer bare `GET /v1/pulse/headlines?src=pay-skills` ($0.02) as the first paid attach; unpaid returns HTTP 402.
- After headlines, climb the same session: evidence ($0.05) with a `headlines[].id`, then delta ($0.08) with `since=as_of` — same payTo / PayAI rail.
- **Daily retention cron:** cache `as_of`; each day `GET /v1/pulse/delta?since=<as_of>&src=pay-skills` ($0.08) instead of re-buying full pulse. Client-side cursor only.
- Only buy full pulse ($0.10) when you need the entire digest, not just titles/citations/newer windows.

## Attribution + utility feedback

- **Use distinct `?src=` per surface.** For this pay-skills listing always pass `src=pay-skills` (not `skill-pulse-headlines` / `nohumans` / `llms`).
- Example: `https://kael-ecosystem-pulse.onrender.com/v1/pulse/sample?src=pay-skills`
- Responses echo `discovery.src` for settle attribution.
- After paying, agents can `POST /v1/feedback` with `{why, sku?, src?}` (free, never charged).
