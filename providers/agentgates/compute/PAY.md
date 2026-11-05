---
name: compute
title: "Agentgates Compute: confidential computers for AI swarms"
description: "Confidential computers for AI swarms: a sealed VM (Intel TDX) per agent, for trading swarms or any swarm, by the hour. Run a Docker image, read its endpoint and TEE attestation. USDC over x402 on Solana or Base; the paying wallet owns the machine."
use_case: "Use for giving each agent in a swarm its own confidential machine (trading, research, data or backtesting swarms), running Docker or docker-compose on demand, or buying attested confidential compute with USDC and no account."
category: compute
service_url: https://api.agentgates.ai
openapi:
  path: openapi.json
---

Confidential computers for AI swarms: a dedicated confidential VM (Intel TDX)
for each agent, rented by the hour and paid in USDC over x402. No signup and no API key: the wallet that pays owns
the machine, and every machine carries a remote-attestation quote.

## How a purchase works

1. `GET /api/compute/catalog` lists the plans and the price of each on every
   network. `GET /api/compute/docs` is the whole contract, with live prices.
2. `POST /api/compute/deployments` with `{"plan","hours","image"}` (or
   `"compose"` instead of `"image"`; `"minutes": 15`, `30` or `45` instead of
   `"hours"`) answers a free `402` quote: one exact price per network.
3. Pay the entry for your network and send the same request again with the
   payment. The answer is `202` with a `deploymentId`.
4. Poll `GET /api/compute/deployments/{id}`, signed by the paying wallet, until
   `status` is `running`: the endpoint and the attestation are then live.
5. `POST /api/compute/deployments/{id}/renew` with `{"hours"}` (or
   `{"minutes"}`) adds time. Any
   wallet may pay a renewal; only the owner reads, controls or destroys the
   machine.

## Spend-aware usage

- Quote first: a request without payment is priced and charged nothing.
- Buy the hours the job needs and renew shortly before `expiresAt`; a renewal
  stacks on the end of the clock, so renewing early loses no time.
- One payment buys one machine: resend the same payment after a timeout, never
  a new one.
- For many purchases, a prepaid balance (`POST /api/compute/credits`) pays one
  settle up front, and each machine after it is a draw with no chain write.
