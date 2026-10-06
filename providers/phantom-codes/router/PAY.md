---
name: router
title: "Phantom AI - Prepaid LLM inference and model router"
description: "OpenAI- and Anthropic-compatible chat over hundreds of models, plus embeddings, image, speech, transcription, rerank and video generation. phantom-1 picks a chat model per request. Buy prepaid credit with Solana USDC over x402 or MPP."
use_case: "Use for LLM chat, Anthropic Messages or OpenAI Responses calls, embeddings, image generation, text to speech, transcription, reranking or video, paid from prepaid USDC credit with no account, when an agent wants a model picked for it."
category: ai_ml
service_url: https://phantom.codes
version: v1
openapi:
  path: openapi.json
---

Phantom AI gives you chat models from many providers through three request
formats: OpenAI Chat Completions (`POST /v1/chat/completions`), Anthropic
Messages (`POST /v1/messages`) and OpenAI Responses (`POST /v1/responses`).
All three stream. The same key also pays for embeddings
(`/v1/embeddings`), images (`/v1/images/generations`), speech
(`/v1/audio/speech`), transcription (`/v1/audio/transcriptions`), reranking
(`/v1/rerank`) and video (`/v1/video/generations`). A video job takes its
cost up front; poll `/v1/video/generations/{id}` until it finishes, and a
failed job gets its money back. `GET /v1/models` is free and lists each
model id with its price.

Send `model: "phantom-1"` and the router picks a model for each request from
three tiers: free, low-cost and frontier. `x-phantom-routed` names the model
it picked, and `x-phantom-route-receipt` adds the tier and the reason. To
pick the model yourself, copy an id from `/v1/models`. Ids change when
providers ship new models, so read the list first.

## Paying

You pay once for credit, then spend it with an API key.

1. Buy credit:

   ```sh
   pay curl -X POST https://phantom.codes/v1/x402/top-up \
     -H 'content-type: application/json' -d '{"amount_usd": 1}'
   ```

   Phantom answers with a 402 for that amount in Solana USDC, over x402 or
   MPP. `pay` pays it and resends the request. The paid response holds
   `api_key`, `recovery_code` and `credit_usd` (what this payment added).
   Save the key and the code: you see them once. You can buy $0.10 to
   $10,000. An empty body buys $1.
2. Call the chat routes with `Authorization: Bearer <api_key>`. Use plain
   `curl` or any HTTP client here; you already paid, so `pay` has nothing
   to do. Each call costs the listed token price of the model that answered.
   On a non-streaming call, `x-phantom-cost-usd` and `x-phantom-balance-usd`
   show the cost and what you have left. A stream sends its cost in an
   `event: phantom.receipt` just before it ends. `GET /v1/key/balance`
   shows your credit at any time.

A paid response with `"status": "pending"` (a 503 or 409) means the transfer
is still confirming. Send the same request again or poll `status_url`, and
don't pay twice. If the response has a `recovery_code`, send it on the poll
in the `x-phantom-recovery-code` header to collect the new key. A top-up to
a key you already hold needs no code.

To add credit to a key you hold, put it in the top-up body as
`target_api_key`. Keep it out of the `Authorization` header, because `pay`
replaces that header when it pays over MPP. Phantom checks the key before it
asks for money and refuses an unknown, deactivated or child key with a 400.
Sending the same paid request twice adds the credit once.

Each response carries an Ed25519 receipt in `x-phantom-receipt` with the
model, tokens and cost. You can check it against the public key at
`GET /v1/receipts/key`.

## Managing the key

These routes take the same Bearer key and cost nothing, except where noted.

- `POST /v1/key/child` makes a child key that spends from your credit up to
  a `limit_usd` you set, with an expiry and a spend-rate cap. Hand it to a
  subagent instead of your own key. `GET /v1/key/children` lists them.
- `GET` and `PATCH /v1/key/budget` read and set a spend cap per period and a
  per-minute rate.
- `/v1/key/route` holds a route policy that picks the model for
  `model: "auto"`. `POST /v1/key/route/test` shows what a request would get
  without calling a model.
- `POST /v1/key/rotate` gives you a new key with the same credit and
  settings and retires the old one. Child keys follow it.
- `DELETE /v1/key` revokes the key and its children. Any credit left on it
  is gone, so spend it or rotate instead.
- `POST /v1/purchase/recover` gives a key back from its `recovery_code`.
- `POST /v1/messages/count_tokens` counts an Anthropic request's tokens, and
  `GET /v1/models/status` says whether a model is answering now.
- `GET /v1/privacy` lists what Phantom stores about the key. Phantom keeps
  token counts and costs, never prompt or completion text.
- `POST /v1/receipts/anchor` writes a receipt's hash to Solana for $0.01.

## Spend-aware usage

- Start with $0.10 to $1 and top up when `/v1/key/balance` runs low.
- Use `phantom-1` unless the task needs a particular model.
- Set the smallest `max_tokens` that works. Output tokens cost the most.
- Send only the history the task needs. You pay for input tokens too.
- Check `/v1/models` prices before you pick a large model by hand.
- Retry only when a request failed before inference. Phantom charges
  nothing for a failed upstream call.
