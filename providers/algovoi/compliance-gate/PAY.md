---
name: compliance-gate
title: "AlgoVoi Compliance Gate"
description: "Pre-payment compliance screen for autonomous agents. Returns a SAMLA-2018-tipping-off-compliant verdict (allow / block / flag) for a proposed recipient address against UK / EU / US / UN sanctions lists, AlgoVoi-tenant KYB status, and risk-tier classification — before the agent transmits funds. Pairs with a free /attestation endpoint exposing the gateway's full compliance posture."
use_case: "Use before sending stablecoin payments to recipients you have not vetted. Particularly relevant for autonomous agents whose principals carry liability for payments to sanctioned entities, restricted jurisdictions, or high-risk counterparties — UK MLRs 2017, SAMLA 2018, OFAC SDN."
category: identity
service_url: https://api.algovoi.co.uk
openapi:
  path: openapi.json
---

# AlgoVoi Compliance Gate

A public, no-auth, agent-callable compliance surface. Two endpoints that expose AlgoVoi's existing compliance machinery — KYB gating, sanctions screening, audit-chain shipping, risk-tier classification — to any agent making payment decisions.

## Why this exists

Every other production-running x402 service ships without sanctions screening, recipient KYB checks, or tipping-off-compliant disclosure handling. Autonomous-payment agents using those services have no protective layer between "model decides to pay" and "funds leave the wallet". An agent that accidentally pays a sanctioned entity exposes its principal to MLRs / OFAC / SAMLA liability. The Compliance Gate is the protective check.

This is the productisation of [AlgoVoi's "compliance from day one" thesis](https://algovoi.co.uk/AlgoVoi/compliance.html) — the same screening AlgoVoi runs against every payer wallet on its own gateway, exposed publicly so any agent can call it.

## Endpoints

### `GET /compliance/attestation`

Free, no-auth, no rate limit. Returns the gateway's full compliance posture as a verifiable transparency surface:

- Frameworks asserted (UK MLRs 2017, SAMLA 2018 s.20, UK GDPR / DPA 2018, FCA PS19/22 self-assessment, ICO data-controller, SOC 2 targets)
- Active sanctions sources (OFSI, OFAC, UN, EU)
- URL / IP threat-intel feeds (Tor, SpamHaus DROP/EDROP, URLhaus, ThreatFox, OpenPhish, PhishTank, MaxMind GeoLite2)
- Audit-chain head positions per chain + last shipment manifest
- KYB classes + risk-tier definitions

Use it to verify what AlgoVoi screens against, before relying on `/compliance/screen` verdicts.

### `POST /compliance/screen`

Free in v1, rate-limited. Pre-payment recipient screen. Body:

```json
{
  "recipient_address": "<destination wallet address>",
  "network": "base-mainnet | algorand-mainnet | stellar-mainnet | ...",
  "amount_microunits": 10000,
  "asset": "USDC"
}
```

Returns:

```json
{
  "verdict": "allow" | "block" | "flag",
  "sanctions_clear": true,
  "recipient_kyb_status": "unknown" | "trial" | "approved" | "rejected",
  "risk_tier": "low" | "medium" | "high" | "restricted" | "unknown",
  "reasons": ["<generic reason codes>"],
  "screened_at": "<ISO timestamp>",
  "verdict_id": "<UUID for audit>",
  "network_normalised": "<internal network name>",
  "tipping_off_notice": "..."
}
```

Verdict semantics:

- `allow` — no sanctions hit, no flagged risk-tier, no rejected KYB. Safe to proceed.
- `block` — sanctions hit and `block_on_hit` policy active, OR recipient is on AlgoVoi's `restricted` risk tier. Do not transmit.
- `flag` — sanctions hit but blocking is policy-disabled, OR recipient KYB status is `rejected`, OR our screen infrastructure was unavailable, OR the network is unsupported. Human-in-the-loop review recommended.

`reasons` is intentionally generic. **We never reveal which sanctions list (if any) matched.** SAMLA 2018 s.20 makes such disclosure a criminal offence in the UK; tipping-off compliance is bedrock.

## Spend-aware usage

- **Call `/compliance/screen` once per unique recipient.** The verdict is stable for the lifetime of the sanctions cache (refreshed every 24h). Cache verdicts client-side; don't re-screen the same address every payment.
- **`/compliance/attestation` is free and cacheable** (`Cache-Control: public, max-age=300`). Fetch once at agent startup; re-fetch on schema-version change.
- **Treat `flag` as "ask the user"**, not "guess and proceed". The whole point of this surface is to surface ambiguity to the human-in-the-loop before funds move.
- **Don't store raw `reasons` strings as user-facing copy** — they're machine codes. Humanise them before display.
- **Honour `screen_unavailable` gracefully** — it means our infrastructure couldn't reach the sanctions cache during your call. Re-try with backoff or fall back to manual review.

## Networks supported

`algorand`, `voi`, `hedera`, `stellar`, `base`, `solana`, `tempo` (mainnets). Both CAIP-2 (`eip155:8453`, `solana:5eyk...`) and dash/underscore styles accepted on input. Testnets are intentionally rejected — production-only verdicts.

## Privacy + audit

- Every screen is logged with a `verdict_id` UUID for cross-system audit trail correlation.
- The `recipient_address` is normalised before the cache lookup (lowercase + trim) but not retained beyond the audit row.
- The caller's source IP is captured in the audit log via the standard CF / nginx / gateway proxy chain headers — used to drive rate-limiting and abuse handling, not published.

## What this is NOT

- **Not a sanctions-list publisher.** We screen against canonical sources (OFSI, OFAC, UN, EU) on a 24h refresh cadence. We do not maintain our own sanctions list, and we do not expose the cache contents.
- **Not a KYC service.** AlgoVoi's KYB tier is only knowable for AlgoVoi-onboarded merchant tenants. For non-tenant recipients, `recipient_kyb_status` returns `unknown`.
- **Not a substitute for full transaction monitoring.** `/compliance/screen` is a pre-payment check. Post-payment monitoring, suspicious-activity reporting (SAR), and ongoing customer due diligence are separate workflows requiring AlgoVoi's full tenant-onboarded gateway path.

## Contact

- Operator: `chopmob@gmail.com`
- Docs: `https://docs.algovoi.co.uk/compliance`
- Compliance hub: `https://algovoi.co.uk/AlgoVoi/compliance.html`
- Incident protocol: `https://docs.algovoi.co.uk/incident-protocol`
- Security policy: `https://api.algovoi.co.uk/.well-known/security.txt`
- A2A discovery: `https://api.algovoi.co.uk/.well-known/agent-card.json`
