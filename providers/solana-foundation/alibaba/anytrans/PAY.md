---
category: translation
description: "Translate and localize content with Alibaba Cloud AnyTrans, including text Translation, batch Text Translation, and batch Web Page Translation, for multilingual workflows."
use_case: "Use for text Translation, batch Text Translation, batch Web Page Translation, and related translation, localization, and multilingual communication."
openapi:
  path: openapi.json
name: anytrans
service_url: https://anytrans.alibaba.gateway-402.com
title: Alibaba Cloud AnyTrans
version: "2025-07-07"

---

## Spend-aware usage

- Set source and target languages explicitly when known instead of spending extra requests on avoidable detection or retries.
- Use batch translation routes when multiple strings or documents share the same language pair and format requirements.
- This provider exposes only the allowlisted stateless synchronous subset from the paired gateway manifest. Do not assume async jobs or stateful resource-management APIs are available unless the spec shows them explicitly.
