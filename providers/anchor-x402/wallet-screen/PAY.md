---
name: wallet-screen
title: "anchor-x402: wallet risk pre-flight"
description: "Wallet risk pre-flight for agent payments. OFAC SDN sanctions plus address-reputation signals (drainer, phishing, mixer, laundering) resolved to an allow/review/block recommendation with a 0-100 risk score and per-signal detail, for $0.02 USDC per call."
use_case: "Use for AML pre-flight checks before any treasury transfer, KYC onboarding, vendor diligence, payroll wallet verification, marketplace counterparty checks, or any agent workflow that needs a fast risk verdict before sending funds."
category: security
service_url: https://api.anchor-x402.com
openapi:
  path: openapi.json
---

`GET /v1/screen?wallet=<address>` — pay $0.02 USDC, get a risk verdict
back. Address shape detection is automatic: `0x` + 40 hex → EVM, base58
(32-44 chars) → Solana. The verdict carries `recommendation`
(`allow`/`review`/`block` — the field to branch on), `risk_score`
(0-100), `signals` (each with source + severity), `sanctions_match`
(boolean), `sanctioned_lists`, `address_type`, and a human-readable
`notes` field. It degrades to a `partial` verdict rather than failing
if the reputation layer is unavailable.

The corpus covers OFAC SDN crypto entries (Tornado Cash, Lazarus Group
[DPRK], Hydra Market, Blender.io, and other publicly documented targets)
plus an address-reputation layer from GoPlus (drainer / phishing / mixer
/ laundering flags). Sanctions data refreshed from public sources.

## Spend-aware usage

- Branch on `recommendation`: `block` = do not send, `review` =
  escalate/hold, `allow` = proceed. Treat an `allow` with
  `partial: true` as provisional — the reputation layer was unavailable.
- Cache the verdict client-side for at least 1h on a low-risk match —
  address reputation changes slowly and the server already caches the
  reputation lookup for an hour.
- When screening many addresses in a workflow (e.g. a vendor list),
  call sequentially — the response is small and the per-call cost is
  already minimal.
- For institutional-grade coverage (proprietary sanctions lists,
  behavioral scoring, SLAs), use this as a first-pass filter and pair
  with a premium AML vendor for residual coverage.
- Use the same call to assert a wallet is *clean* before proceeding —
  `recommendation: allow` + `risk_score: 0` is the affirmative
  clearance you can store with the transaction record.
