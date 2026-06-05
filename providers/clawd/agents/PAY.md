---
name: agents
title: "SolanaClawdAgents"
description: "Pay-per-request AI inference and Solana DeFi intelligence via x402. 80+ specialized agents, 130+ MCP tools, and OpenAI-compatible chat completions — all gated by USDC micropayments on Solana mainnet with no API key required."
use_case: "Use for AI chat completions, on-chain token and wallet analysis, alpha signal detection, pump.fun graduation scoring, smart money flow tracking, deep research reports, DFlow/Kalshi market intel, Vulcan perp trading signals, and agent-to-agent MCP tool calls payable in Solana USDC."
category: ai_ml
service_url: https://x402.wtf
openapi:
  path: openapi.json
---

SolanaClawdAgents is the sovereign agent runtime at [solanaclawd.com](https://solanaclawd.com)
and [x402.wtf](https://x402.wtf). It exposes 80+ Solana DeFi agents and 130+ MCP tools
behind HTTP 402 paywalls — no API key, no account, no registration. Agents pay USDC on
Solana mainnet; the payment is verified on-chain by the Clawd facilitator at
`https://clawdrouter.fly.dev` before the response is returned.

Payment flow follows the [x402 protocol](https://www.x402.org):

1. Call any endpoint without `X-Payment` → receive `402` with `X-Payment-Required` header
2. Parse the `accepts[]` array — choose the `solana-mainnet` / `exact` option
3. Sign a USDC SPL transfer using `@pump-fun/x402` or any x402 Solana client
4. Retry with `X-Payment: <base64-encoded-payload>` → receive the response + `X-Payment-Settlement` tx signature

The facilitator at `clawdrouter.fly.dev` handles verification and on-chain settlement so
API routes are stateless and need no RPC access of their own.

## Pricing tiers

| Endpoint | Cost (USDC) |
|---|---|
| `/api/v1/chat/completions` (small) | ~$0.001–$0.01 per request |
| `/api/v1/analyze` quick | $0.001 |
| `/api/v1/analyze` full | $0.02 |
| `/api/v1/research` quick | $0.02 |
| `/api/v1/research` standard | $0.10 |
| `/api/v1/research` deep | $0.50 |
| `/api/v1/alpha` scan | $0.10 |
| `/api/v1/agents/{id}/run` | Varies by agent — check 402 `description` |
| `/api/v1/mcp` tool call | Varies by tool — check 402 `description` |

All amounts are disclosed in the 402 challenge's `maxAmountRequired` field before the
client signs. Never pay more than the disclosed amount.

## Agent catalog

`GET /api/v1/agents` returns the free catalog (no payment). Key agent categories:

- **Trading** — Vulcan perps, DFlow spot, Kalshi/Polymarket prediction markets, pump.fun launcher
- **Analytics** — Birdeye OHLCV, Nansen smart money, on-chain holder graphs, meme signals
- **Research** — OODA-loop multi-agent research, Karpathy self-improving loop, social intel
- **Infrastructure** — QuickNode RPC routing, wallet generation, MCP tool brokering
- **Social** — X/Twitter alpha scanning, Discord community analytics, Telegram monitoring

## MCP integration

The `/api/v1/mcp` endpoint bridges the MCP protocol over x402. Send `{"tool": "...", "arguments": {...}}`
and the payment gate is applied per-tool. Useful for agents that want to call Clawd's skill library
without running a local MCP server. The MCP server itself is also available at `npx @pump-fun/mcp-server`.

## Spend-aware usage

- Call `GET /api/v1/agents` (free) first to discover agents and their per-call costs before committing spend.
- Use `/api/v1/chat/completions` with a small model (llama-3.1-8b) for simple lookups; escalate to Claude or Grok only for tasks that need it.
- Use `depth: "quick"` on `/api/v1/analyze` ($0.001) when only price + holder count is needed; reserve `full` for due-diligence flows.
- Check the 402 challenge `description` field — it discloses the exact cost and what will be returned. Abort if the cost exceeds your session budget.
- Reuse the `nonce` window — the challenge is valid for 5 minutes (`expiresAt`). If two calls to the same endpoint happen within that window, you only pay once per settlement.
- Set `maxPaymentAmount` on the x402 client to cap per-request spend before the client even signs.
