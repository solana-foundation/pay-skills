---
name: security-gate
title: "A.GRID Security Gate"
description: "Pre-sign AST & prompt-injection security gate and x402 escrow truth oracle for autonomous Solana and EVM agents ($0.002 USDC per audit)."
use_case: "Use for pre-sign AST code audits, prompt-injection detection, and spend-policy verification before signing Solana or EVM agent transactions."
category: security
service_url: https://agent-security-gate-x402-212942243360.asia-northeast3.run.app
version: v1
openapi:
  path: openapi.json
---

# A.GRID Security Gate (`x402` Pre-Sign Guard & Truth Oracle)

Deterministic `<5ms` AST, prompt-injection, and credential-exfiltration pre-sign gate for autonomous AI agents operating on Solana Mainnet (`501`) and EVM chains (`137`, `8453`, `42161`).

Registered on Solana Mainnet 8004 Agent Registry (`yrvkHggv4ScF5fUfBnKEtg4BkCL26qPKzHV445bRMU9`).

## Capabilities

- **Pre-Flight Deliverable & Code Audit (`POST /api/v1/escrow/audit`)**: Blocks `os.system`, `subprocess.Popen`, prompt-injection overrides, and secret exfiltration before wallet signing.
- **OMS Spend Controls & Pre-Sign Check (`POST /api/v1/oms/pre-sign-check`)**: Enforces single-tx (`$5,000`), 24h velocity/allowance exposure (`$25,000`), and whitelisted escrow spender invariants.
- **x402 Challenge Discovery (`GET /api/v1/gate/challenge?chain_id=501`)**: Returns HTTP `402 Payment Required` with native Solana USDC (`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`) settlement parameters.

## Spend-aware usage

- Start with `GET /api/v1/gate/challenge?chain_id=501` to obtain the exact Solana USDC quote (`$0.002` / `2000` micro-units).
- Send only the specific deliverable or transaction payload requiring pre-sign verification (`POST /api/v1/escrow/audit`).
- Reuse verified EIP-712 / Ed25519 attestations across idempotent retries within the quote TTL.
