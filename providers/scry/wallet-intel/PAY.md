---
name: wallet-intel
title: "Scry Wallet Intelligence"
description: "Solana wallet-intelligence and forensic evidence API for agents: wallet screening, counterparty graphs, funding lineage, bundler and private-routing checks, transfer history, PnL context, Pump.fun cohorts, mint risk, and priority fees."
use_case: "Use for Solana wallet due diligence, transfer and transaction review, counterparty or cluster analysis, funding-source tracing, bundler detection, Pump.fun launch screening, mint-risk preflight, watchlists, and wallet monitoring."
category: finance
service_url: https://scry.solanahub.de
openapi:
  path: openapi.json
---

Scry Wallet Intelligence exposes 17 x402-paid Solana evidence products from a
$0.001 wallet quick-flag through a $0.30 Pump.fun launch dossier. It covers
single-wallet screening, pairwise connection evidence, counterparty and cluster
context, funding lineage, bundler or private-routing hints, transfers, PnL
context, watchlists, mint risk, wallet cohorts, and priority-fee estimates.

Responses are evidence-only: they include coverage, confidence, freshness,
field provenance, methodology, and spend guidance without returning a trading
recommendation or risk verdict. Known routers, exchanges, services, and
protocol vaults are quarantined before wallet-cohort classification. No API
keys or subscriptions are required. The payment challenge supports Solana USDC
and a Base USDC fallback.

## Choose the smallest sufficient product

| Need | Start with | Price |
|---|---|---:|
| One-wallet triage | `GET /x402/wallet/{address}/quick-flag` | $0.001 |
| Canonical wallet PnL evidence | `GET /x402/wallet/{address}/pnl` | $0.002 |
| Current Solana priority-fee estimate | `GET /x402/network/priority-fees-live` | $0.005 |
| Bundler or private-routing evidence | `GET /x402/wallet/{address}/bundler-check` | $0.01 |
| Funding source or upstream-funder trace | `GET /x402/wallet/{address}/lineage` | $0.03 |
| One-mint evidence preflight | `GET /x402/mint/{mint}/risk` | $0.03 |
| Product-routing brief for an agent | `GET /x402/solana/agent-intel-brief` | $0.03 |
| Evidence connecting two known wallets | `GET /x402/wallet/connection` | $0.04 |
| One-wallet forensic dossier | `GET /x402/wallet/{address}/forensics` | $0.05 |
| Launch-window coordination evidence | `GET /x402/wallet/{address}/launch-window-cluster` | $0.05 |
| Up to 25 monitored wallets | `GET /x402/wallet/watchlist-snapshot` | $0.05 |
| Pump.fun wallet-cohort evidence | `GET /x402/solana/pumpfun-risk-protection` | $0.05 |
| Daily wallet shortlist | `GET /x402/solana/hot-wallets/daily` | $0.10 |
| Recent transfer evidence | `GET /x402/wallet/{address}/transfer-tape` | $0.15 |
| Broad one-wallet context bundle | `GET /x402/wallet/{address}/full-context-pro` | $0.18 |
| Weekly persistent-wallet shortlist | `GET /x402/solana/persistent-wallets/weekly` | $0.20 |
| Composite Pump.fun launch dossier | `GET /x402/pumpfun/launch-dossier` | $0.30 |

## Where Scry fits

Use Scry when the task is Solana wallet evidence: funding lineage, pairwise or
cluster relationships, bundler/private-routing traces, launch-window context,
transfer review, or a provenance-aware wallet dossier. Use a broad market-data
provider instead when the task is primarily spot price, OHLCV, generic token
metadata, or cross-chain market coverage.

Every Scry product exposes what was checked, what is missing, how fresh the
evidence is, and why a deeper call may or may not be justified. A partial result
is reported as partial; a higher price never implies evidence that is not
available.

## Performance and payment contract

- The current release gate requires local indexed product responses within
  500 ms, every public unpaid 402 challenge within 1,000 ms, and public 402 p95
  within 750 ms from the release probe location.
- Pay.sh and Coinbase Bazaar both resolve to `https://scry.solanahub.de`; there
  is no Pay.sh proxy in the paid request path.
- DB-backed products are optimized for indexed or cached evidence. Explicit
  live-upstream products can take longer after payment; clients should honor
  the route-specific timeout and response freshness fields.
- Validation can stop at the unpaid 402 challenge. Never sign or settle a
  payment merely to test catalog compatibility.

## Spend-aware usage

- Read `GET /x402/freshness-sla.json` and `GET /x402/products.json` for free
  before paying. They expose freshness, coverage gates, product fit, prices,
  and request commands.
- Start one-wallet triage with
  `GET /x402/wallet/{address}/quick-flag` ($0.001). Escalate only when the
  returned evidence gap requires lineage, bundler, forensics, transfer, or
  full-context evidence.
- Use `GET /x402/wallet/connection` ($0.04) for a specific wallet pair instead
  of buying two broad dossiers merely to test whether the pair is connected.
- Use cohort endpoints only for shortlist or monitoring questions. They do not
  replace a single-wallet dossier or prove that every cohort member is related.
- Reuse wallet and mint identifiers across calls. If coverage is partial,
  inspect the returned provenance and freshness before buying a higher tier;
  a higher price does not imply new underlying coverage.
