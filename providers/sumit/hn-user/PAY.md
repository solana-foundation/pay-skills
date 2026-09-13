---
name: "hn-user"
title: "HackerNews User Stats"
description: "Retrieve an HN user's karma, account age, and recent activity aggregated."
use_case: "Agents vetting user credibility, reputation, or finding influential tech commentators."
category: "other"
service_url: "https://hn-user-pay.sumitg3767.workers.dev"
openapi:
  path: "openapi.json"
---

Retrieve an HN user's karma, account age, and recent activity aggregated.

## Spend-aware usage

- Provide the exact HN username to retrieve stats in a single call.
