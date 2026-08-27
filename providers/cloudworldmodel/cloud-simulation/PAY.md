---
name: cloud-simulation
title: "Cloud World Model API"
description: "Multi-cloud infrastructure simulation with RL, chaos, and AI analysis endpoints; x402 pay-per-call on Solana mainnet USDC and Base, no signup required."
use_case: "Use for training RL autoscaling policies, running chaos scenarios, comparing multi-cloud costs, and requesting AI architecture analysis — pay-per-call on Solana or Base USDC, no signup required."
category: devtools
service_url: https://www.cloudworldmodel.ai
openapi:
  path: openapi.json
---

# Cloud World Model API

Cloud World Model is a multi-cloud infrastructure simulation platform. Developers,
architects, and AI agents can model AWS, GCP, Azure, OCI, and DigitalOcean deployments
without provisioning real resources or incurring cloud bills.

## What agents can do

- **RL training** — step through simulated cloud environments with a Gym-compatible
  observe → act → reward loop (`rl.step`, `rl.batch_step`, `rl.eval`).
- **Chaos engineering** — inject failures (instance kill, AZ outage, database crash,
  network latency, CPU stress) and receive resilience scores (`chaos.run`, `chaos_batch`).
- **Multi-cloud cost optimization** — compare equivalent workloads across all five
  providers in a single call (`multicloud.explore`).
- **Predictive scaling validation** — validate autoscaling thresholds against traffic
  forecasts (`prediction.validate`, `prediction.optimize_thresholds`).
- **AI architecture analysis** — request natural-language explanations, optimization
  plans, troubleshooting guides, and bottleneck analyses (`ai.explain`, `ai.optimize`,
  `ai.troubleshoot`, `ai_bottleneck`).
- **Simulation management and right-sizing** — create and inspect simulations, adjust
  traffic, failures, and capacity, request sizing hints, and validate model accuracy.
- **Hybrid simulation** — run the blended deterministic + ML simulation engine
  (`simulation_step_hybrid`).

## x402 payment flow

Every metered endpoint returns `HTTP 402` with a JSON challenge body when no payment
header is present. The challenge includes two `accepts` entries — one for Base mainnet
USDC (`eip155:8453`) and one for Solana mainnet USDC
(`solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp`). The agent signs a payment, attaches it
as `X-PAYMENT` (Base) or `PAYMENT-SIGNATURE` (Solana), and retries. The facilitator
at `https://facilitator.payai.network` settles both chains.

Fetch live prices before your first call:

```bash
curl https://www.cloudworldmodel.ai/api/billing/x402/config
```

## Pricing

The rows below enumerate every current call type advertised by
`GET /api/billing/x402/config`. The endpoint-specific request and response schemas are
available in the bundled `openapi.json` file and at the live x402 OpenAPI URL in the
Discovery section.

| Call type | USDC (Solana / Base) |
|---|---|
| `rl.step`, `rl.batch_step`, `rl.eval` | $0.0010 |
| `simulation_step_hybrid` | $0.0010 |
| `ai.explain`, `ai.optimize`, `ai.troubleshoot`, `ai_bottleneck` | $0.0010 |
| `ai_analysis`, `ai.status`, `ai.results`, `ai.recommendations` | $0.0010 |
| `wallet_session` | $0.0010 |
| `simulation.inject_traffic`, `simulation.inject_failure`, `simulation.inject_failure_create`, `simulation.inject_failure_update`, `simulation.inject_failure_delete` | $0.0010 |
| `simulation.resize`, `simulation.apply_right_sizing`, `simulation.recover_resource`, `right_sizing_hint` | $0.0010 |
| `validate_cost_accuracy`, `validate_performance_accuracy`, `benchmark.validate` | $0.0010 |
| `simulation_create`, `simulation_list`, `simulation_get`, `simulation_cost_breakdown` | $0.0010 |
| `rl_env_create`, `rl_env_get`, `rl_env_delete`, `rl_env_reset`, `rl_env_observation`, `rl_eval_status` | $0.0010 |
| `multicloud.status`, `multicloud_results`, `multicloud_partial_results`, `multicloud_stream` | $0.0010 |
| `chaos.run`, `chaos_batch` | $0.0050 |
| `multicloud.explore` | $0.0050 |
| `optimization.run` | $0.0050 |
| `prediction.validate`, `prediction.optimize_thresholds` | $0.0050 |

USDC uses 6 decimal places on both chains; 1 credit = 1 000 atomic units = $0.001.

## Spend-aware usage notes

- Fetch `/api/billing/x402/config` once per session to read the live `payTo` wallet
  address and exact atomic-unit amounts per call type — do not hardcode them.
- Prefer `rl.batch_step` (1 credit for up to 30 steps) over looping `rl.step` to
  reduce round-trips.
- High-cost calls (`chaos.run`, `multicloud.explore`) each cost 5× a step call; use
  them after a warm-up phase to avoid wasting budget on uninitialised environments.
- The `simulation_step_hybrid` endpoint auto-claims a wallet-owned simulation on the
  first call; the simulation is retained for 90 rolling days without an explicit
  `POST /api/simulations`.

## Discovery & compliance

| Resource | URL |
|---|---|
| Discovery endpoint | `GET https://www.cloudworldmodel.ai/api/billing/x402/config` |
| x402 OpenAPI | https://www.cloudworldmodel.ai/.well-known/x402/openapi.json |
| x402scan listing | https://www.x402scan.com/server/1a8052f0-c764-420a-96a5-f50d3c696795 |
| RL environments reference | https://www.cloudworldmodel.ai/rl/environments |
| x402 blog post | https://www.cloudworldmodel.ai/blog/x402-cloud-simulation-api |
| Facilitator | https://facilitator.payai.network |
