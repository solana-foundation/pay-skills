---
name: domains
title: "Clawd Domains"
description: "Register and renew internet domains with USDC on Solana via x402, no account or API key. Free availability and price quotes, wallet-signed DNS management, and lookup of domains owned by a Solana wallet."
use_case: "Use when an agent needs to check domain availability and price, buy or renew a domain paid in USDC, manage DNS records for a domain it owns, or list domains owned by a Solana wallet."
category: cloud
service_url: https://domains.musebook.trade
version: v1
openapi:
  path: openapi.json
---

Clawd Domains lists Musebook's live Domain Agent API at https://domains.musebook.trade.
Agents pay USDC on Solana mainnet via x402 (v2, scheme `exact`); the wallet that pays
for a registration becomes the domain's owner. No account or API key is needed.
DNS management is free but must be signed (ed25519) by the owner wallet.

Endpoints (match live OpenAPI / `llms.txt`):

- `GET /domains/check?name=<domain>` — free. Availability plus an exact USDC quote for registration and renewal.
- `POST /domains/register` (`{"name": "<domain>"}`) — paid. Returns a 402 challenge for the quoted amount; the payer wallet becomes owner.
- `POST /domains/{domain}/renew` — paid, same pricing model.
- `GET` / `POST` / `DELETE /domains/{domain}/dns` — free; each mutating/read request that requires auth must carry the owner wallet signature described in `openapi.json`.
- `GET /domains?owner=<solana pubkey>` — free. Lists domains owned by a wallet.

Pricing: registrar price × 1.15 plus a $1 flat fee, in USDC. The 402 amount equals
`quote.register.amountAtomic` from `/domains/check` (e.g. a $11.81 `.com` quotes
14.59 USDC). Discovery: `/.well-known/x402`. Facilitator currently advertised there:
`https://facilitator.payai.network`.

Honest status: the HTTP service and unpaid 402 flow are live. Treat registration as a
real purchase; confirm the free quote with a human before paying.

## Spend-aware usage

- Always call the free `/domains/check` first and confirm the quoted `totalUsdc` before paying.
- Never retry a paid call blindly — check `GET /domains?owner=` to see if it already succeeded.
- Use a dedicated agent wallet: the paying wallet owns the domain and must sign later DNS changes.
- DNS reads/changes, availability checks, and ownership lookups are not charged in USDC.

Note: a parallel listing under `musebook/domains` may also be proposed
(solana-foundation/pay-skills#337). Both point at the same live service; maintainers
should keep one catalog entry.
