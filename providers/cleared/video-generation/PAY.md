---
name: video-generation
title: Cleared Video Generation
description: Agentic AI video rendering infrastructure driven by programmable x402 payment cycles.
use_case: Dispatches asynchronous text-to-video (t2v) and image-to-video (i2v) cinematic rendering tasks using Wan2.2 models at 480p and 720p resolutions.
category: media
service_url: https://cleared.ink
openapi:
  path: "openapi.json"
---

Agentic AI video rendering infrastructure driven by programmable x402 payment cycles.

## Spend-aware usage

Because every generation task triggers an immutable x402 payment cycle on-chain, downstream agents should adopt defensive programmatic habits to prevent draining wallets on redundant or failed operations.

* **Validate Inputs Locally Before Dispatching Requests** Ensure that strings for `prompt` are populated, and remote assets passed to `image_url` are fully reachable via standard HEAD requests before hitting paid routes (`/wan/t2v/*` or `/wan/i2v/*`). Do not let your agent run a paid execution path only to fail on an invalid remote image payload.

* **Implement Stringent Idempotency Tracking** Always compute and attach an explicit client-side hash or unique identifier to structural parameters when calling generation endpoints. If network partitions cause timeouts before receiving a `202 Accepted` queue token, resubmit using the exact same signature to fetch the existing execution context instead of spawning a secondary paid rendering pipeline.

* **Leverage Resolution Tiers for Drafting** When testing complex video compositions or conducting iterative prompt engineering, routing agents should default to the `480p` endpoints (`$0.010000` USD) to gauge motion composition and visual framing. Elevate execution tasks to the high-definition `720p` routes (`$0.050000` USD) only for final rendering runs.

* **Polite Status Polling Hygiene** Do not flood the network. The status lookup endpoint (`GET /wan/jobs/{job_id}`) is free (marked with empty security definitions), but aggressive polling can trigger server-side rate limits. Implement an exponential backoff strategy starting at 3-second intervals, adjusting downward only as the model execution approaches standard completion thresholds.

* **Persist System Tokens Locally** Cache the return metadata payload—specifically the `job_id` and the companion security `token` query variable. If an agent forgets a completed generation path, retrieving it via the tracking endpoints requires matching parameters; losing these keys forces a costly re-render of the asset.