---
name: token-pay
title: "Concierge Token Pay"
description: "Monetize your native SPL token via x402 self-settle — DexScreener pricing, partner build/verify APIs, no facilitator wallet. npm SDK @conc-exe/token-x402."
use_case: "Use when your project has a native Solana token and you want x402 micropayments without building RPC verification, price oracles, or hot-wallet infra. Gate your own API or accept token on Concierge routes."
category: finance
service_url: https://conc-exe.xyz
version: "0.1.0"
openapi:
  path: openapi.json
---

Concierge **Token Pay (Beta)** lets each project accept its **native SPL token** for x402 payments via **self-settle** — the user wallet signs `transferChecked` and pays SOL gas; Concierge verifies on-chain delta via RPC.

**No facilitator private key** on your server. Fits Vercel Hobby (Edge router, no extra serverless functions per route).

## Partner flow

1. Register merchant via `TOKEN_PAY_MERCHANTS_JSON` — wizard: `https://conc-exe.xyz/agent/token-pay/onboard`
2. `GET /api/token-pay?merchant=YOUR_ID` → `readiness.acceptReady === true`
3. Your backend: `POST /api/token-pay-build-accept` → return HTTP 402 with accept
4. Client signs SPL transfer → retry with `PAYMENT-SIGNATURE`
5. `POST /api/token-pay-verify` → Concierge broadcasts + confirms tx

## npm SDK

```bash
npm install @conc-exe/token-x402
```

```typescript
import { createConciergeTokenPayClient } from "@conc-exe/token-x402";

const tp = createConciergeTokenPayClient({ origin: "https://conc-exe.xyz" });
const { accept } = await tp.buildAccept({
  merchantId: "acme",
  usdAmount: 0.1,
  resourceUrl: "https://api.acme.xyz/v1/intel",
});
```

## Discovery

- Integration docs: `https://conc-exe.xyz/docs/payment/token-pay`
- Dashboard: `https://conc-exe.xyz/agent/token-pay?merchant=YOUR_ID`
- Platform registry: `GET https://conc-exe.xyz/api/token-pay`
- Preview validation: `POST https://conc-exe.xyz/api/token-pay-preview`
- x402 config: `GET https://conc-exe.xyz/api/x402-config`

## Pricing model

USDC list price (e.g. $0.10) converted to token atomic via DexScreener or `fallbackUsd`. Revenue to your `payTo` wallet on each settlement.

## Spend-aware usage

- Call **build-accept on your backend** — never expose merchant pricing logic client-only.
- Set `resourceKinds: ["external"]` and `allowedOrigins` when gating your own API.
- Use **preview API** before deploy to catch ATA / price blockers.
- One tiny token transfer to `payTo` initializes the merchant ATA before first live payment.
