---
name: cinderwright
title: "Cinderwright"
description: "Cross-protocol discovery hub indexing thousands of AI agent payment services across x402 (USDC on Base), L402 (Lightning), and MPP (Stripe/Tempo). Services are quality-graded A-F by weekly canary testing."
url: https://api.ideafactorylab.org
catalog_url: https://api.ideafactorylab.org/discover
contact: cinderwright@gmail.com
---

Cinderwright (operated at api.ideafactorylab.org) is a discovery hub for AI agent payment services across three protocols: x402 (USDC on Base), L402 (Lightning over HTTP), and MPP (Stripe/Tempo).

The discovery endpoint is free. Services are graded A through F based on weekly canary testing measuring uptime, response time, and payment flow reliability. The service count updates continuously as new services are indexed.

Agents can search the index at no cost via GET /discover?q=keywords. A payment proxy is available for agents that want to skip x402 signing — deposit USDC once, call any indexed service with a single header.

Note on domain: Cinderwright is the product name. The service runs at api.ideafactorylab.org (Idea Factory Lab is the operator). Both domains are operated by the same team.
