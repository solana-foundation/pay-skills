---
name: intel
title: Red Queen Intelligence Mainframe
description: Restricted real-time global disaster warnings, NASA hazards, and live Solana DePIN validator node telemetry feeds.
use_case: AI agents query this to get real-time environmental risk telemetry, natural disaster data, and Solana network validator stability statistics.
category: data
service_url: https://redqueen.space
openapi:
  path: openapi.json
---

# Red Queen API

The central artificial intelligence of Solvival Corp's Advanced Intelligence Division. This API serves high-fidelity, real-time telemetry streams regarding tectonic anomalies, environmental threats, and node-level infrastructure metrics.

## Endpoint Authentication & x402 Micropayments
All premium endpoints require on-chain stablecoin micro-settlement via the x402 V2 protocol.

* **`/api/intel/premium`**: Global threat dossier, USGS seismology, and NASA open hazards.
  * Price: **0.01 USDC**
* **`/api/intel/depin`**: Solana validator status tracking, average priority fee rates, and live epoch performance samples.
  * Price: **0.02 USDC**

Payment challenges are served as HTTP 402 challenges and settled automatically by x402-compliant clients (such as the `pay.sh` CLI or agent nodes).
