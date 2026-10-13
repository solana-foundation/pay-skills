---
name: x402
title: "ClawdX402Facilitator"
description: "Solana x402 payment facilitator — verifies, settles, and slug-routes USDC micropayments for HTTP 402 paywalled APIs. Handles full x402 lifecycle: decode payload, check SPL transfer, submit to Solana RPC, return settlement signature. Multi-tenant; any API operator can register slugs."
use_case: "Use for verifying or settling x402 Solana USDC payments, resolving payment slugs to amounts and recipients, checking on-chain settlement confirmation, and building or integrating x402-gated APIs without running your own Solana RPC infrastructure."
category: finance
service_url: https://clawdrouter.fly.dev
openapi:
  path: openapi.json
---

The Clawd x402 facilitator is the shared payment verification and settlement backend for all
services in the SolanaClawdAgents ecosystem. It implements the
[x402 protocol](https://www.x402.org) server-side: any API operator can point their
`x402Paywall` middleware at `https://clawdrouter.fly.dev` and immediately accept USDC
micropayments on Solana mainnet without managing an RPC node.

The facilitator also manages **payment slugs** — named pricing rules (e.g. `deep-chain-analysis`,
`alpha-signals`) that map to a specific USDC amount, token mint, and Solana recipient. This lets
operator APIs return 402 challenges by slug rather than hardcoding amounts, and enables clients to
pre-fund or approve specific priced actions before making the request.

## Integration patterns

**API operator (server-side):**

```ts
import { x402Paywall } from "@pump-fun/x402/server";

app.get("/premium",
  x402Paywall({
    payTo: "YourSolanaAddress",
    amount: "10000",                       // $0.01 USDC
    facilitatorUrl: "https://clawdrouter.fly.dev",
  }),
  handler
);
```

**Agent client (pay automatically):**

```ts
import { X402Client } from "@pump-fun/x402/client";
import { Keypair } from "@solana/web3.js";

const client = new X402Client({
  signer: Keypair.fromSecretKey(agentKey),
  network: "solana-mainnet",
  maxPaymentAmount: "100000",              // $0.10 USDC hard cap
});

const response = await client.fetch("https://api.example.com/premium");
```

**Verify without settlement (dry-run):**

```ts
const result = await fetch("https://clawdrouter.fly.dev/verify", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(paymentPayload),
}).then(r => r.json());

if (!result.valid) throw new Error(result.error);
```

## Slug catalog

Well-known slugs for `x402.wtf` endpoints:

| Slug | Price | Description |
|---|---|---|
| `quick-lookup` | $0.001 | Single-token price or holder count |
| `chain-analysis` | $0.02 | Full on-chain token analysis |
| `alpha-signals` | $0.10 | AI alpha detection scan |
| `agent-research-standard` | $0.10 | Multi-agent research report |
| `agent-research-deep` | $0.50 | Deep OODA-loop research |
| `mcp-tool-call` | $0.001–$0.10 | MCP tool (price varies by tool) |

Fetch `GET /slugs/{slug}` to resolve the current amount and payTo address before signing.

## Spend-aware usage

- Call `GET /health` before a high-value session to confirm the facilitator can reach the Solana RPC.
- Use `POST /verify` before `POST /settle` when you want to validate the payment client-side without committing on-chain.
- Use `GET /status/{txSignature}` to confirm finality on time-sensitive flows; the facilitator waits for `confirmed` commitment by default.
- Slug amounts can change; always call `GET /slugs/{slug}` at session start rather than hardcoding amounts.
- The nonce in the 402 challenge expires in 5 minutes — don't cache payment payloads across sessions.
