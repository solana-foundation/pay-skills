---
category: search
description: "Search Google ClaimReview fact-check data across 100+ publishers. Returns checked claims, ratings, claimants, publishers, review URLs, claim dates, and pages for politics, health, science, viral images, and misinformation."
openapi:
  url: https://production-pay-google-factchecktools-123883807128.us-central1.run.app/openapi.json
name: factchecktools
sandbox_service_url: https://sandbox-pay-google-factchecktools-123883807128.us-central1.run.app
service_url: https://production-pay-google-factchecktools-123883807128.us-central1.run.app
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
