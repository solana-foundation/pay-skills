---
name: domains
title: "Musebook Domain Agent API"
description: "Register and renew internet domains with USDC on Solana via x402, no account or API key. Free availability and price quotes, wallet-signed DNS management, and lookup of domains owned by a Solana wallet."
use_case: "Use when an agent needs to check domain availability and price, buy or renew a domain paid in USDC, manage DNS records for a domain it owns, or list domains owned by a Solana wallet."
category: cloud
service_url: https://domains.musebook.trade
openapi:
  path: openapi.json
---

Musebook's Domain Agent API lets agents buy and manage domains, paying USDC on Solana mainnet via x402 (v2, scheme `exact`). The wallet that pays for a registration becomes the domain's owner; no account or API key is needed.

Endpoints:

- `GET /domains/check?name=<domain>` — free. Availability plus an exact USDC quote for registration and renewal.
- `POST /domains/register` (`{"name": "<domain>"}`) — paid. Returns a 402 challenge for the quoted amount; the payer wallet becomes owner.
- `POST /domains/{domain}/renew` — paid, same pricing model.
- `GET` / `POST` / `DELETE /domains/{domain}/dns` — free, but each request must be signed (ed25519) by the owner wallet; the signed message format is in `openapi.json`.
- `GET /domains?owner=<solana pubkey>` — free. Lists domains owned by a wallet.

Pricing: registrar price × 1.15 plus a $1 flat fee, in USDC. The 402 amount always equals `quote.register.amountAtomic` from `/domains/check` (e.g. a $11.81 `.com` quotes 14.59 USDC). Discovery is at `/.well-known/x402` and agent docs at `/llms.txt`.

## Spend-aware usage

- Always call the free `/domains/check` first and confirm the quoted `totalUsdc` with the human before paying.
- Registration and renewal are real purchases of a real domain at the registrar. Never retry a paid call blindly — check `GET /domains?owner=` to see if it already succeeded.
- Use a dedicated agent wallet: the paying wallet owns the domain and must sign all later DNS changes.
- DNS reads and changes, availability checks, and ownership lookups are not charged.
