---
name: social-data
title: "StableSocial"
description: "Pay-per-request social media data from TikTok, Instagram, Facebook, and Reddit"
category: media
use_case: "Use when you need to retrieve social media profiles, posts, comments, followers, or search content across TikTok, Instagram, Facebook, and Reddit"
service_url: https://stablesocial.dev
endpoints:
  - method: POST
    path: "api/tiktok/profile"
    resource: tiktok
    description: "Retrieve a TikTok user profile including bio, follower count, following count, likes, and verified status"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/tiktok/posts"
    resource: tiktok
    description: "Retrieve a TikTok user's recent video posts with view counts, likes, shares, captions, and hashtags"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/tiktok/post-comments"
    resource: tiktok
    description: "Retrieve comments on a TikTok video including commenter details, timestamps, like counts, and reply counts"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/tiktok/comment-replies"
    resource: tiktok
    description: "Retrieve threaded replies to a specific TikTok comment with reply text, timestamps, and like counts"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/tiktok/followers"
    resource: tiktok
    description: "Retrieve the list of followers for a TikTok account with usernames, display names, and profile details"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/tiktok/following"
    resource: tiktok
    description: "Retrieve the list of accounts a TikTok user follows with usernames, display names, and profile details"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/tiktok/search"
    resource: tiktok
    description: "Search TikTok videos by keyword query returning matching posts with engagement metrics and captions"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/tiktok/search-hashtag"
    resource: tiktok
    description: "Search TikTok videos by hashtag to discover trending content and engagement around a specific topic"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/tiktok/search-profiles"
    resource: tiktok
    description: "Search for TikTok user profiles by name or keyword returning bios, follower counts, and verified status"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/tiktok/search-music"
    resource: tiktok
    description: "Search TikTok videos by music or sound clip to find content using a specific audio track or trending sound"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/instagram/profile"
    resource: instagram
    description: "Retrieve an Instagram user profile including bio, follower count, following count, post count, and verified status"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/instagram/posts"
    resource: instagram
    description: "Retrieve an Instagram user's recent posts with captions, like counts, comment counts, and media URLs"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/instagram/stories"
    resource: instagram
    description: "Retrieve an Instagram user's active stories including media URLs, timestamps, and interactive elements"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/instagram/highlights"
    resource: instagram
    description: "Retrieve an Instagram user's story highlights including cover images, titles, and media content within each"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/instagram/post-comments"
    resource: instagram
    description: "Retrieve comments on an Instagram post including commenter details, timestamps, like counts, and reply counts"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/instagram/comment-replies"
    resource: instagram
    description: "Retrieve threaded replies to a specific Instagram comment with reply text, timestamps, and like counts"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/instagram/followers"
    resource: instagram
    description: "Retrieve the list of followers for an Instagram account with usernames, display names, and profile details"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/instagram/following"
    resource: instagram
    description: "Retrieve the list of accounts an Instagram user follows with usernames, display names, and profile details"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/instagram/search"
    resource: instagram
    description: "Search Instagram posts by keyword query returning matching content with engagement metrics and captions"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/instagram/search-tags"
    resource: instagram
    description: "Search Instagram posts by hashtag to discover trending content and engagement around a specific topic"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/facebook/profile"
    resource: facebook
    description: "Retrieve a Facebook user or page profile including name, bio, follower count, and profile metadata"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/facebook/posts"
    resource: facebook
    description: "Retrieve recent posts from a Facebook user or page with text content, reactions, shares, and comment counts"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/facebook/post-comments"
    resource: facebook
    description: "Retrieve comments on a Facebook post including commenter details, timestamps, reaction counts, and replies"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/facebook/comment-replies"
    resource: facebook
    description: "Retrieve threaded replies to a specific Facebook comment with reply text, timestamps, and reaction counts"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/facebook/followers"
    resource: facebook
    description: "Retrieve the list of followers for a Facebook user or page with names and profile details"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/facebook/following"
    resource: facebook
    description: "Retrieve the list of accounts and pages a Facebook user follows with names and profile details"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/facebook/search"
    resource: facebook
    description: "Search Facebook posts by keyword query returning matching content with engagement metrics and post details"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/facebook/search-people"
    resource: facebook
    description: "Search for Facebook people profiles by name or keyword returning matching users with profile metadata"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/facebook/search-pages"
    resource: facebook
    description: "Search for Facebook pages by name or keyword returning matching pages with follower counts and categories"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/facebook/search-groups"
    resource: facebook
    description: "Search for Facebook groups by name or keyword returning matching groups with member counts and descriptions"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/reddit/post"
    resource: reddit
    description: "Retrieve a Reddit post's full details including title, body, score, upvote ratio, awards, and author info"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/reddit/post-comments"
    resource: reddit
    description: "Retrieve comments on a Reddit post including comment text, scores, author details, and nested reply threads"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/reddit/comment"
    resource: reddit
    description: "Retrieve a single Reddit comment's full details including text, score, author, timestamp, and parent context"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/reddit/search"
    resource: reddit
    description: "Search Reddit posts by keyword query across all subreddits returning matching posts with scores and metadata"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/reddit/search-profiles"
    resource: reddit
    description: "Search for Reddit user profiles by name or keyword returning karma scores, account age, and activity data"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/reddit/subreddit"
    resource: reddit
    description: "Retrieve recent posts from a specific subreddit with titles, scores, comment counts, and author details"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
---

Social media data API covering TikTok, Instagram, Facebook, and Reddit.
All endpoints are POST and priced at $0.06 per request.
