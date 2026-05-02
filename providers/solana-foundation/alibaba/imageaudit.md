---
category: ai_ml
description: "Run moderation, verification, and risk checks with Alibaba Cloud Image Audit, including image Content Moderation and text Content Moderation."
use_case: "Use for image Content Moderation, text Content Moderation, and related moderation, compliance, identity verification, fraud screening, and risk analysis."
openapi:
  url: https://imageaudit.alibaba.gateway-402.com/openapi.json
name: imageaudit
sandbox_service_url: https://imageaudit.alibaba-sandbox.gateway-402.com
service_url: https://imageaudit.alibaba.gateway-402.com
title: Alibaba Cloud Image Audit
version: "2019-12-30"

---

## Spend-aware usage

- Choose the exact moderation, verification, or risk endpoint that matches the user’s task instead of trying several similar flows on the same payload.
- Send only the minimum sensitive text, image, biometric, or identity data needed for the requested check.
- This provider exposes only the allowlisted stateless synchronous subset from the paired gateway manifest. Do not assume async jobs or stateful resource-management APIs are available unless the spec shows them explicitly.
