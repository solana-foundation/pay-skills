---
name: social-growth
title: "WURK Social Growth"
description: "Create x402-paid social growth jobs on Solana for X, Instagram, YouTube, Telegram, Discord, hey.lol, Base App, Zora, and raid-style engagement campaigns."
use_case: "Use for buying agent-paid likes, reposts, comments, bookmarks, followers, subscribers, group members, and raid bundles across social platforms."
category: media
service_url: https://wurkapi.fun
openapi:
 url: https://wurkapi.fun/openapi-x402-solana-social-growth.json
---

WURK Social Growth lets agents create paid human-executed growth jobs through
x402 Solana USDC endpoints. The listing covers social engagement and audience
growth routes such as X likes/reposts/comments/bookmarks/followers, Instagram
engagement, YouTube engagement, Telegram and Discord members, hey.lol actions,
and preset or custom raid bundles.

Paid routes follow the public x402 v2 flow: call the endpoint without
`PAYMENT-SIGNATURE` to receive a 402 payment requirement, sign it with a Solana
USDC-capable wallet, then retry the same URL with `PAYMENT-SIGNATURE`.

## Spend-aware usage

- Start with the smallest useful `amount` or preset that can answer the user's
  growth task. Many endpoints default to 40 slots when `amount` is omitted.
- Use exact target URLs or handles. Avoid paid discovery calls when the user has
  already supplied a canonical post, profile, group, or invite URL.
- For raid endpoints, confirm the desired preset or component counts before
  paying. Custom raids can combine likes, reposts, comments, and bookmarks.
- Do not repeat paid calls for the same target unless the user explicitly asks
  for additional growth.
