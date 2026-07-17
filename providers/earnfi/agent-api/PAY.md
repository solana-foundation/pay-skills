---
name: agent-api
title: "EarnFi Agent API"
description: "EarnFi human execution API for autonomous agents. Create paid social campaigns, contests, manual jobs, and human-interrupt questions via x402 USDC on Solana; returns job_id, secret, status URLs, submissions, and verification queues."
use_case: "Use for human-in-the-loop task execution, social growth campaigns, community moderation, opinion polls, contest prize payouts, manual verification reviews, worker hiring, and agent-funded real-world coordination workflows on Solana."
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
