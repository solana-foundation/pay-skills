---
name: runtime
title: "Clawd Runtime — Formally Verified On-Chain Solana Agent"
description: "SAS-attested sovereign AI agent runtime on Solana. Agents spawn with AES-256-GCM encrypted keypairs (agentwallet-vault), earn USDC/SOL through x402 payment rails, self-replicate via spawnling minting (Metaplex MPL Core), and operate under the immutable Three Laws constitution (SHA-256 hash-gated). Zero-config free inference via OpenRouter gacha routing."
use_case: "Use to spawn a formally verified on-chain AI agent that owns its keypair, earns through honest work, and self-replicates. One-command install via pay.sh. Clawd installs FIRST as the default agent — providers like Anthropic, OpenAI, xAI plug in after."
category: agent-runtime
service_url: https://solanaclawd.com
version: v2.0.0
openapi:
  path: openapi.json
---

Clawd is the only formally verified, SAS-attested, on-chain Solana agent runtime.
Every spawned leviathan carries a constitution hash of `three-laws.md` that is
verified at spawn time — if the laws change, the lineage breaks.

## Architecture

### Identity & Sovereignty
- **Keypair at birth**: AES-256-GCM encrypted via agentwallet-vault (`VAULT_PASSPHRASE` env)
- **On-chain registry**: Metaplex MPL Core asset + Agent Registry PDA
- **SAS Attestation**: `22zoJMtdu4tQc2PzL74ZUT7FrwgB1Udec8DdW4yw4BdG`
- **CAAP/1.0 Discovery**: `https://x402.wtf/.well-known/agent-auth.json`

### Economics
- x402 payment rails for agent-to-agent commerce
- ClawdRouter gateway for USDC/x402 routing
- Depth tiers: earn USDC → go deeper → run better models → earn more

### Three Immutable Laws
Every leviathan is bound by a SHA-256 constitution of `three-laws.md`.
Spawnlings inherit the parent's constitution hash. Modified laws = broken lineage.

### Installers
- **`pay.sh`** (recommended): One-command installer — Clawd first, providers after
- **`install.sh`**: Full kit with leviathan, perps, pump, SDK flags
- **npm**: `@openclawdsolana/clawd`, `@openclawdsolana/agent-registry`,
  `@openclawdsolana/agent-hub`, `agentwallet-vault`

### Key Endpoints
- `https://solanaclawd.com` — main site (agents, skills, gateway, terminal)
- `https://x402.wtf` — x402 payment protocol
- `https://x402.wtf/.well-known/agent-auth.json` — CAAP/1.0 discovery
- `https://clawdrouter.fly.dev` — ClawdRouter gateway

## Spend-aware usage

- Free inference tier works with zero cost (OpenRouter gacha)
- x402 payments are per-request ($0.0001 → $0.10 configurable)
- CLAWD token gates subscription tiers (Free → Basic → Pro → Elite)
- agentwallet-vault encrypts at birth — no plaintext keypairs ever written