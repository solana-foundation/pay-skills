---
category: ai_ml
description: "Create text embeddings with Alibaba Cloud Model Studio's OpenAI-compatible embeddings API for retrieval and semantic search."
use_case: "Use for semantic search, retrieval, reranking pipelines, clustering, classification, and vector indexing."
openapi:
  path: openapi.json
name: embeddings
service_url: https://embeddings.alibaba.gateway-402.com
title: Alibaba Cloud Model Studio Embeddings
version: v1

---

## Spend-aware usage

- Batch related texts into one embeddings request when possible and reuse stored vectors instead of re-embedding unchanged content.
- Only generate embeddings when the task needs retrieval, ranking, clustering, or vector search rather than plain generation.
- Prefer one well-formed request with the right model options over several trial-and-error calls, especially when the body selects the model behavior.
