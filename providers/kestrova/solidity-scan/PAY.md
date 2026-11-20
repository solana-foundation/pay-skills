---
name: solidity-scan
title: "Kestrova"
description: "Solidity smart-contract vulnerability scanning with Slither static analysis: findings with detector, severity, confidence and file/line locations for submitted sources. No solc install or API key; free preview of severity counts."
use_case: "Use when writing, reviewing or deploying Solidity contracts: security review, vulnerability check, reentrancy, tx.origin, unchecked calls, arbitrary ETH sends, pre-deployment check for Foundry or Hardhat projects, audit preparation."
category: security
service_url: https://kestrova-api.onrender.com
openapi:
  path: openapi.json
---

Kestrova runs Slither static analysis on the Solidity sources you send as JSON:
`{"sources": {"path/File.sol": "<source>"}}`. Include the contract and every file it
imports; limits are 20 files and 60 kB (free preview: 10 files, 15 kB). No compiler
setup is needed: 0.4.26 through 0.8.38 are installed server-side.

- `POST /preview` is free (rate-limited): severity counts, the names of
  High/Medium detectors and one example finding.
- `POST /scan/findings` costs **0.25 USDC per call**: every finding with detector,
  impact, confidence, description and file/line locations, as JSON.
- `POST /scan` costs **1.00 USDC per call**: the same findings plus a plain-English
  explanation and fix for each, and PDF/SARIF report files.
- Both paid routes use x402 `exact` on Solana mainnet (PayAI facilitator pays the
  network fee) or Base, and charge only when the scan succeeds.

Each signed payment is accepted once. After an unclear outcome (202/409 `pending`, a
timeout or a lost response), do not pay again: recover the result for free.

1. `POST /scan/recover {"payment": "<PAYMENT-SIGNATURE value you sent>", "wallet":
   "<paying address>", "action": "challenge"}` returns `message`, `token` and
   `expires` (valid 120 s).
2. Sign the exact `message` string with the paying wallet. This is a message signature,
   not a transaction: on Solana an ed25519 signature, base64; on Base an EIP-191
   `personal_sign`, 0x hex.
3. `POST /scan/recover` with `payment`, `wallet`, `message`, `token`, `expires` and
   `signature` returns the original result. A 202 means settlement isn't confirmed
   yet: retry later, still without paying again.

Automated pattern detection, not an audit: zero findings does not mean a contract is
safe. Remote MCP server with the same tools: `https://kestrova-api.onrender.com/mcp`.

## Spend-aware usage

- Call `POST /preview` first. Fix clear issues from the detector names and re-run it;
  buy only when High/Medium findings remain and you need exact lines. Prefer
  `POST /scan/findings` (0.25 USDC); use `POST /scan` when you need fixes or report files.
- One paid call covers the whole submitted file set: send the contract together with
  its imports, rather than one file per call.
- Re-scanning unchanged sources is a new paid call; reuse the report you already have.
- Ask the user before paying, and never pay twice for the same request: recover instead.
