---
name: agent-auth
title: "Clawd Agent Auth — CAAP/1.0"
description: "Solana-native agent authentication, on-chain identity registration (Metaplex Agent Registry / EIP-8004), SIWS sign-in, CLAWD token attestation, Helius DAS NFT verification, and subscription tier gating for AI agents."
use_case: "Use for authenticating AI agents on Solana, verifying NFT ownership, checking CLAWD balances for tier gating, registering on-chain identities via Metaplex Agent Registry (EIP-8004), launching Genesis bonding curve tokens, and delegating execution."
category: identity
service_url: https://x402.wtf/agentauth
version: v1
openapi:
  path: openapi.json
---

CAAP/1.0 (Clawd Agent Attestation Protocol) is the authentication backbone of
the Clawd platform. It provides four verification phases: SIWS wallet sign-in,
Helius DAS NFT verification, CLAWD SPL token attestation, and subscription
tier gating (Free → Bronze → Silver → Gold → Diamond).

Agent identities are registered on-chain through the Metaplex Agent Registry
(EIP-8004 compliant), with Asset Signer PDA wallets (no private key), per-asset
execution delegation, and permanent token-agent binding via setAgentTokenV1.

## Spend-aware usage

- Use `/caap/status/:agentId?wallet=` for lightweight checks before running full attestation.
- Cache attestation results — `attestationHash` is deterministic for a given tuple.
- Reuse `fetchWalletSnapshot` results; Solana balances are public and can be cached briefly.
- Derive PDAs client-side with `deriveAgentIdentityPda()` / `deriveAssetSignerPda()` — no RPC round-trip needed.
- Validate Genesis launch inputs with `validateGenesisLaunchInput()` before submitting to chains.