---
name: catalysts
title: "SOLTRACER Catalyst Tracker"
description: "Newest three curated institutional Solana catalysts (ETFs, banks, payments, asset managers, tokenization) as JSON records with entity, date, type, SOLTRACER adoption level (0-5) and SOL price reaction 1 and 3 days after the move."
use_case: "Use when an agent needs the latest institutional adoption news on Solana: new SOL ETFs, bank or payments pilots, asset-manager or tokenization launches, a curated adoption-depth rating, or SOL's 1d/3d price reaction to an institutional move."
category: finance
service_url: https://soltracer-catalyst-feed.revernetworks-pbn.workers.dev
version: v1
openapi:
  path: openapi.json
---

New from [SOLTRACER](https://www.soltracer.xyz), Solana catalyst intelligence:
the Catalyst feed puts SOLTRACER's editorially curated Catalyst Tracker behind
a pay-per-call HTTP 402 endpoint. No account and no API key. Agents pay
$0.001 USDC per call on Solana mainnet and get the newest three institutional
Solana catalysts.

Each record has a stable `id`, the catalyst `date`, the `entity`, a one-line
catalyst description, a SOLTRACER level (0 policy, 1 watching, 2 testing,
3 building, 4 holding, 5 running), and the SOL/USD return 1 and 3 days after
the move, measured from the 00:00 UTC close on the catalyst date. A window
that has not closed yet is returned as `null`. The full catalyst history is
available to SOLTRACER Pro members on soltracer.xyz and is not served here.

Payment: MPP `charge` only. An unpaid call returns HTTP 402 with a
`WWW-Authenticate: Payment` challenge for `1000` base units (6-decimal USDC,
mint `EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`) paid to
`5A7YfjySJV1YnxbqKeVhKAeNBNyQGxeBzsxLGrccXZwX` on Solana mainnet
(`solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp`). The buyer pays the Solana
network fee; the service does not sponsor fees.

Free routes: `GET /health`, `GET /`, `GET /openapi.json`.
Paid routes ($0.001 each): `GET /catalysts/latest`, `GET /catalysts`
(filter by `since`, `until`, `type`, `min_level`, `entity`), and
`GET /catalysts/{id}`.

## Spend-aware usage

- One `/catalysts/latest` call returns all three current records, so a second call is rarely needed.
- Check `/health` (free) first: if `content_sha256` is unchanged since your last call, the data is the same and you can skip the paid call.
- Use `/catalysts/{id}` only for a record id you already have. Invalid filters return 400 and unknown ids return 404 before payment, so they cost nothing.
- Price reactions are context, not trading advice.
