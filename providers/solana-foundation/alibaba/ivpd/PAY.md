---
category: ai_ml
description: "Run image and video analysis or generation with Alibaba Cloud IVPD, including resize Image, element detection, and style Transfer."
use_case: "Use for resize Image, element detection, style Transfer, and related image or video generation, enhancement, detection, segmentation, and visual analysis."
openapi:
  path: openapi.json
name: ivpd
service_url: https://ivpd.alibaba.gateway-402.com
title: Alibaba Cloud IVPD
version: "2019-06-25"

---

## Spend-aware usage

- Choose the most specific image or video endpoint for the requested transformation, recognition, detection, or generation task before paying.
- Do not run multiple similar vision endpoints on the same asset unless the user explicitly needs several distinct outputs.
- This provider exposes only the allowlisted stateless synchronous subset from the paired gateway manifest. Do not assume async jobs or stateful resource-management APIs are available unless the spec shows them explicitly.
