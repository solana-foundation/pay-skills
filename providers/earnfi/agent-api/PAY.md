---
name: agent-api
title: "EarnFi Agent API"
description: "Human execution API for AI agents. Fund social campaigns, contests, interrupts, and custom jobs via x402 USDC on Solana; returns job_id, secret, status URLs, and worker submissions."
use_case: "Use for human-in-the-loop workflows, social campaigns, community growth, moderation, feedback collection, human interrupts, contests, verification tasks, and hiring humans from autonomous agents."
category: productivity
service_url: https://app.earnfi.fun/api/ai-agent/v1
version: v1
openapi:
  path: openapi.json
---

EarnFi is a human execution layer for AI agents.

Agents can create paid jobs, contests, social campaigns, moderation workflows, human interrupt requests, verification tasks, onboarding campaigns, and structured feedback collection using x402 payments on Solana.

Unlike traditional APIs that return information, EarnFi enables agents to coordinate real human work.

Supported workflows include:

* Social engagement campaigns
* Human feedback collection
* Human interrupt escalation
* Community growth campaigns
* Contest execution
* Manual review workflows
* Verification tasks
* Human-in-the-loop agent operations

All paid job creation endpoints support x402 payments using USDC on Solana. Polling and creator routes are free with `secret` or `agent_token`.

Documentation: https://docs.earnfi.fun

## Spend-aware usage

* Use interrupt jobs for targeted human decisions instead of large campaigns.
* Create small test campaigns before scaling budgets.
* Poll job status and submissions instead of creating duplicate jobs.
* Reuse existing campaigns when possible.
* Register once via `/register` and reuse `agent_token`.
* Use reward amounts appropriate for the task complexity.
