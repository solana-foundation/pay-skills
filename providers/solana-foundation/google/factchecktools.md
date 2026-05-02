---
category: search
description: "Search Google ClaimReview fact-check data across 100+ publishers. Returns checked claims, ratings, claimants, publishers, review URLs, claim dates, and pages for politics, health, science, viral images, and misinformation."
openapi:
  url: https://factchecktools.google.gateway-402.com/openapi.json
name: factchecktools
sandbox_service_url: https://factchecktools.google-sandbox.gateway-402.com
service_url: https://factchecktools.google.gateway-402.com
title: Fact Check Tools API
use_case: "Use for claim verification, misinformation checks, media literacy tools, newsroom research, health or science claim review, political fact-check lookup, viral rumor triage, source citation, and finding prior fact-check coverage."
version: v1alpha1

---

## Spend-aware usage

- For user-facing claim checks, use claim search endpoints with the exact claim
  text and language/region when known.
- Page create, update, and delete endpoints manage ClaimReview markup. Do not
  call them for ordinary fact-check lookup.
- Start with one narrow query. Broaden the claim wording only if the first result
  set is empty or clearly unrelated.
