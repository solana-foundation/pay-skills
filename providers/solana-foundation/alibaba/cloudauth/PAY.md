---
category: identity
description: "Run moderation, verification, and risk checks with Alibaba Cloud Cloudauth, including aIGC Image Generation Detection, verification of Two, and three plus additional screening and verification operations."
use_case: "Use for aIGC Image Generation Detection, verification of Two, three, and Four Elements of Bank Card, and related moderation, compliance, identity verification, fraud screening, and risk analysis."
openapi:
  url: https://cloudauth.alibaba.gateway-402.com/openapi.json
name: cloudauth
service_url: https://cloudauth.alibaba.gateway-402.com
title: Alibaba Cloud Cloudauth
version: "2019-03-07"

---

## Spend-aware usage

- Choose the exact moderation, verification, or risk endpoint that matches the user’s task instead of trying several similar flows on the same payload.
- Send only the minimum sensitive text, image, biometric, or identity data needed for the requested check.
- This provider exposes only the allowlisted stateless synchronous subset from the paired gateway manifest. Do not assume async jobs or stateful resource-management APIs are available unless the spec shows them explicitly.
