---
category: security
description: "Run moderation, verification, and risk checks with Alibaba Cloud Green, including imageBatchModeration, imageModeration, and multiModalAgent."
use_case: "Use for imageBatchModeration, imageModeration, multiModalAgent, and related moderation, compliance, identity verification, fraud screening, and risk analysis."
openapi:
  url: https://green.alibaba.gateway-402.com/openapi.json
name: green
service_url: https://green.alibaba.gateway-402.com
title: Alibaba Cloud Green
version: "2022-03-02"

---

## Spend-aware usage

- Choose the exact moderation, verification, or risk endpoint that matches the user’s task instead of trying several similar flows on the same payload.
- Send only the minimum sensitive text, image, biometric, or identity data needed for the requested check.
- This provider exposes only the allowlisted stateless synchronous subset from the paired gateway manifest. Do not assume async jobs or stateful resource-management APIs are available unless the spec shows them explicitly.
