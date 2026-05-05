---
category: security
description: "Run moderation, verification, and risk checks with Alibaba Cloud Responsible AI, including batch content synchronization detection, synchronize detection for a single piece of content, and synchronous Detection of Model Input Content."
use_case: "Use for batch content synchronization detection, synchronize detection for a single piece of content, synchronous Detection of Model Input Content, and related moderation, compliance, identity verification, fraud screening, and risk analysis."
openapi:
  url: https://rai.alibaba.gateway-402.com/openapi.json
name: rai
service_url: https://rai.alibaba.gateway-402.com
title: Alibaba Cloud Responsible AI
version: "2024-07-01"

---

## Spend-aware usage

- Choose the exact moderation, verification, or risk endpoint that matches the user’s task instead of trying several similar flows on the same payload.
- Send only the minimum sensitive text, image, biometric, or identity data needed for the requested check.
- This provider exposes only the allowlisted stateless synchronous subset from the paired gateway manifest. Do not assume async jobs or stateful resource-management APIs are available unless the spec shows them explicitly.
