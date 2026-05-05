---
category: identity
description: "Run moderation, verification, and risk checks with Alibaba Cloud Cloudauth International, including address Similarity Comparison, address Verification, and address Verification V2."
use_case: "Use for address Similarity Comparison, address Verification, address Verification V2, and related moderation, compliance, identity verification, fraud screening, and risk analysis."
openapi:
  url: https://cloudauth-intl.alibaba.gateway-402.com/openapi.json
name: cloudauth-intl
service_url: https://cloudauth-intl.alibaba.gateway-402.com
title: Alibaba Cloud Cloudauth International
version: "2022-08-09"

---

## Spend-aware usage

- Choose the exact moderation, verification, or risk endpoint that matches the user’s task instead of trying several similar flows on the same payload.
- Send only the minimum sensitive text, image, biometric, or identity data needed for the requested check.
- This provider exposes only the allowlisted stateless synchronous subset from the paired gateway manifest. Do not assume async jobs or stateful resource-management APIs are available unless the spec shows them explicitly.
