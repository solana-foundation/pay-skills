---
name: intel
title: Red Queen Intelligence Mainframe
description: Production-grade threat monitoring oracle exposing aggregated risk data from 8 real-time feeds (USGS, NASA, NOAA, GDACS, disease, currency, and Solana DePIN telemetry).
use_case: AI agents query this to get real-time environmental risk telemetry, natural disaster data, space weather indices, and Solana network validator stability statistics.
category: data
service_url: https://redqueen.space
openapi:
  path: openapi.json
---

# Red Queen API

The central artificial intelligence of Solvival Corp's Advanced Intelligence Division. This API serves high-fidelity, real-time threat telemetry streams aggregated from 8 distinct live feeds:

*   **USGS Earthquakes**: Live tectonic activity and seismic disruption telemetry.
*   **NASA EONET**: Open environmental hazards (storms, fires, volcanic activity).
*   **GDACS Alerts**: Global coordination and disaster alert monitoring.
*   **NOAA SWPC**: Space weather geomagnetic storm warnings.
*   **Google News RSS Outbreaks**: Worldwide pathogen developments and virus alerts.
*   **Open Exchange Rates**: Inflation risks and currency devaluations.
*   **Disease.sh**: Covid-19 and biological containment caseloads.
*   **Solana Mainnet RPC**: Delinquent validator nodes, network health, slot telemetry, and prioritization fee logs.

## Endpoint Authentication & x402 Micropayments
All premium endpoints require on-chain stablecoin micro-settlement via the x402 V2 protocol.

* **`/api/intel/premium`**: Global threat dossier, USGS seismology, NASA open hazards, and Disease.sh pathogen stats.
  * Price: **0.01 USDC**
* **`/api/intel/depin`**: Solana validator status tracking, average priority fee rates, and live slot performance samples.
  * Price: **0.02 USDC**

Payment challenges are served as HTTP 402 challenges and settled automatically by x402-compliant clients (such as the `pay.sh` CLI or agent nodes).
