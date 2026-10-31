---
name: solidity-scan
title: "Kestrova"
description: "Solidity smart-contract vulnerability scanning with Slither static analysis: findings with detector, severity, confidence and file/line locations for submitted sources. No solc install or API key; free preview of severity counts."
use_case: "Use when writing, reviewing or deploying Solidity contracts: security review, vulnerability check, reentrancy, tx.origin, unchecked calls, arbitrary ETH sends, pre-deployment check for Foundry or Hardhat projects, audit preparation."
category: security
service_url: https://kestrova.onrender.com
openapi:
  path: openapi.json
---

Kestrova runs Slither static analysis on the Solidity sources you send as JSON:
`{"sources": {"path/File.sol": "<source>"}}`. Include the contract and every file it
imports; limits are 20 files and 60 kB. No compiler setup is needed: 0.4.26 through
0.8.38 are installed server-side.

- `POST /preview` is free (rate-limited): severity counts and the names of
  High/Medium detectors.
- `POST /scan` costs **1.00 USDC per call** (x402 `exact`, Solana mainnet, PayAI
  facilitator pays the network fee): every finding with detector, impact,
  confidence, description and file/line locations. Charged only when the scan
  succeeds.

Each signed payment is accepted once. After an unclear outcome, do not pay again:
recover the report for free with a wallet-signed challenge at `POST /scan/recover`.

Automated pattern detection, not an audit: zero findings does not mean a contract is
safe. Remote MCP server with the same tools: `https://kestrova.onrender.com/mcp`.

## Spend-aware usage

- Call `POST /preview` first. Fix clear issues from the detector names and re-run it;
  buy `POST /scan` only when High/Medium findings remain and you need exact lines.
- One paid call covers the whole submitted file set: send the contract together with
  its imports, rather than one file per call.
- Re-scanning unchanged sources is a new paid call; reuse the report you already have.
- Ask the user before paying, and never pay twice for the same request: recover instead.
