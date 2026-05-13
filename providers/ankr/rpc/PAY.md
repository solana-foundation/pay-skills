---
name: rpc
title: "Ankr"
description: "Multichain JSON-RPC, paid per request. 160+ networks under one gateway — each chain on its own path (eth, polygon, solana, sui, near, …). USDC settlement on Solana via x402 or MPP; no signup, no API keys."
use_case: "Use for blockchain JSON-RPC, account and contract state reads, transaction submission, EVM RPC, Solana RPC, multi-chain dapps, block and transaction lookups, mainnet and testnet access, and scalable chain reads with pay-per-request billing."
category: data
service_url: https://x402.rpc.ankr.com
version: v1
endpoints:
  - method: POST
    path: 0g_galileo_testnet_evm
    description: "Query 0g_galileo_testnet_evm via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: 0g_mainnet_evm
    description: "Query 0g_mainnet_evm via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: abchain_mainnet
    description: "Query abchain_mainnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: abchain_testnet
    description: "Query abchain_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: allora_mainnet
    description: "Query allora_mainnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: allora_testnet
    description: "Query allora_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: arbitrum
    description: "Query arbitrum via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: arbitrum_sepolia
    description: "Query arbitrum_sepolia via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: arbitrumnova
    description: "Query arbitrumnova via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: atleta_mainnet
    description: "Query atleta_mainnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: atleta_olympia
    description: "Query atleta_olympia via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: avail
    description: "Query avail via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: avail_turing_testnet
    description: "Query avail_turing_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: avalanche
    description: "Query avalanche via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: avalanche-c
    description: "Query avalanche-c via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: avalanche-p
    description: "Query avalanche-p via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: avalanche-x
    description: "Query avalanche-x via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: avalanche_fuji
    description: "Query avalanche_fuji via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: avalanche_fuji-c
    description: "Query avalanche_fuji-c via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: avalanche_fuji-p
    description: "Query avalanche_fuji-p via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: avalanche_fuji-x
    description: "Query avalanche_fuji-x via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: b2
    description: "Query b2 via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: bahamut
    description: "Query bahamut via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: bahamut_horizon
    description: "Query bahamut_horizon via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: base
    description: "Query base via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: base_sepolia
    description: "Query base_sepolia via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: berachain_testnet
    description: "Query berachain_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: bitlayer
    description: "Query bitlayer via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: bitlayer_testnet
    description: "Query bitlayer_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: blast
    description: "Query blast via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: blast_testnet_sepolia
    description: "Query blast_testnet_sepolia via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: botanix_mainnet
    description: "Query botanix_mainnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: botanix_testnet
    description: "Query botanix_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: bsc
    description: "Query bsc via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: bsc_testnet_chapel
    description: "Query bsc_testnet_chapel via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: btc
    description: "Query btc via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: btc_signet
    description: "Query btc_signet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: celo
    description: "Query celo via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: celo_sepolia
    description: "Query celo_sepolia via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: chiliz
    description: "Query chiliz via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: core
    description: "Query core via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: corn_maizenet
    description: "Query corn_maizenet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: corn_testnet
    description: "Query corn_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: dogeos_testnet
    description: "Query dogeos_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: electroneum
    description: "Query electroneum via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: electroneum_testnet
    description: "Query electroneum_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: erigonbsc
    description: "Query erigonbsc via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: eth
    description: "Query eth via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: eth_hoodi
    description: "Query eth_hoodi via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: eth_sepolia
    description: "Query eth_sepolia via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: etherlink_mainnet
    description: "Query etherlink_mainnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: etherlink_shadownet_testnet
    description: "Query etherlink_shadownet_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: etherlink_testnet
    description: "Query etherlink_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: fantom
    description: "Query fantom via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: filecoin
    description: "Query filecoin via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: filecoin_testnet
    description: "Query filecoin_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: flare
    description: "Query flare via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: flare-c
    description: "Query flare-c via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: flare-p
    description: "Query flare-p via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: flare-x
    description: "Query flare-x via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: flare_coston
    description: "Query flare_coston via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: flare_coston-c
    description: "Query flare_coston-c via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: flare_coston-p
    description: "Query flare_coston-p via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: flare_coston-x
    description: "Query flare_coston-x via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: flare_coston2
    description: "Query flare_coston2 via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: flare_coston2-c
    description: "Query flare_coston2-c via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: flare_coston2-p
    description: "Query flare_coston2-p via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: flare_coston2-x
    description: "Query flare_coston2-x via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: flare_songbird
    description: "Query flare_songbird via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: flare_songbird-c
    description: "Query flare_songbird-c via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: flare_songbird-p
    description: "Query flare_songbird-p via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: flare_songbird-x
    description: "Query flare_songbird-x via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: gnosis
    description: "Query gnosis via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: gnosis_testnet
    description: "Query gnosis_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: goat_mainnet
    description: "Query goat_mainnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: goat_testnet
    description: "Query goat_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: gravity
    description: "Query gravity via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: harmony
    description: "Query harmony via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: horizen_eon
    description: "Query horizen_eon via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: hyperevm
    description: "Query hyperevm via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: iota_evm
    description: "Query iota_evm via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: iota_mainnet
    description: "Query iota_mainnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: iota_testnet
    description: "Query iota_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: iotex
    description: "Query iotex via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: iotex_testnet
    description: "Query iotex_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: kaia
    description: "Query kaia via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: kaia_testnet
    description: "Query kaia_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: kava_evm
    description: "Query kava_evm via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: kava_rpc
    description: "Query kava_rpc via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: kava_testnet_evm
    description: "Query kava_testnet_evm via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: kava_testnet_rpc
    description: "Query kava_testnet_rpc via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: kite_mainnet
    description: "Query kite_mainnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: kusama
    description: "Query kusama via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: linea
    description: "Query linea via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: mantle
    description: "Query mantle via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: mantle_sepolia
    description: "Query mantle_sepolia via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: matchain_mainnet
    description: "Query matchain_mainnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: metis
    description: "Query metis via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: midnight_mainnet
    description: "Query midnight_mainnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: midnight_testnet
    description: "Query midnight_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: monad_mainnet
    description: "Query monad_mainnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: monad_testnet
    description: "Query monad_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: moonbeam
    description: "Query moonbeam via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: multichain
    description: "Query multichain via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: near
    description: "Query near via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: nervos
    description: "Query nervos via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: nervos_ckb
    description: "Query nervos_ckb via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: neura_testnet
    description: "Query neura_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: optimism
    description: "Query optimism via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: optimism_sepolia
    description: "Query optimism_sepolia via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: polkadot
    description: "Query polkadot via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: polkadot_mainnet_asset_hub
    description: "Query polkadot_mainnet_asset_hub via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: polygon
    description: "Query polygon via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: polygon_amoy
    description: "Query polygon_amoy via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: rollux
    description: "Query rollux via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: rollux_testnet
    description: "Query rollux_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: scroll
    description: "Query scroll via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: scroll_sepolia_testnet
    description: "Query scroll_sepolia_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: sei
    description: "Query sei via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: sei_evm
    description: "Query sei_evm via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: solana
    description: "Query solana via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: solana_devnet
    description: "Query solana_devnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: somnia_mainnet
    description: "Query somnia_mainnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: somnia_testnet
    description: "Query somnia_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: sonic_blaze_testnet
    description: "Query sonic_blaze_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: sonic_mainnet
    description: "Query sonic_mainnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: stellar_soroban
    description: "Query stellar_soroban via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: stellar_testnet_soroban
    description: "Query stellar_testnet_soroban via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: story_aeneid_testnet
    description: "Query story_aeneid_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: story_mainnet
    description: "Query story_mainnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: sui
    description: "Query sui via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: sui_testnet
    description: "Query sui_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: swell
    description: "Query swell via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: swell_sepolia
    description: "Query swell_sepolia via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: syscoin
    description: "Query syscoin via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: tac
    description: "Query tac via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: tac_spb
    description: "Query tac_spb via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: tac_spb_tendermint
    description: "Query tac_spb_tendermint via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: tac_tendermint
    description: "Query tac_tendermint via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: taiko
    description: "Query taiko via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: taiko_hoodi
    description: "Query taiko_hoodi via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: telos
    description: "Query telos via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: tenet_evm
    description: "Query tenet_evm via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: ton_api_v2
    description: "Query ton_api_v2 via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: tron_jsonrpc
    description: "Query tron_jsonrpc via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: unichain_mainnet
    description: "Query unichain_mainnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: vflow_mainnet
    description: "Query vflow_mainnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: vflow_volta_testnet
    description: "Query vflow_volta_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: xai
    description: "Query xai via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: xai_testnet
    description: "Query xai_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: xdc
    description: "Query xdc via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: xdc_testnet
    description: "Query xdc_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: xlayer
    description: "Query xlayer via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: xphere_mainnet
    description: "Query xphere_mainnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: xphere_testnet
    description: "Query xphere_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: xrp_mainnet
    description: "Query xrp_mainnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: zksync_era
    description: "Query zksync_era via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: zksync_era_sepolia
    description: "Query zksync_era_sepolia via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: zkverify_mainnet
    description: "Query zkverify_mainnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: zkverify_volta_testnet
    description: "Query zkverify_volta_testnet via JSON-RPC for blocks, transactions, account state, and transaction submission."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
---

Pay-per-request JSON-RPC access to 160+ blockchain networks via Ankr's
infrastructure. Each chain is its own path: `POST /eth`, `POST /polygon`,
`POST /solana`, `POST /sui`, `POST /near`, etc. (see the endpoint list above for
the full set, including testnets). Standard JSON-RPC body — same as any other
RPC provider.

Per-request micropayments are $0.001 USDC settled on Solana mainnet. No
signup, no API key copy-paste, no rate-limit dashboards. The first paid call
succeeds — `pay curl https://x402.rpc.ankr.com/eth -d '{...}'` and you get a
response.

## Spend-aware usage

- Call the chain-specific path directly. There is no generic `/rpc` route; if
  you do not know the slug, pick the closest match from the endpoints list
  above before paying.
- Use JSON-RPC batch requests where the upstream method supports them — one
  paid call returns multiple results.
- For live state, account reads, and transaction submission, RPC is the right
  primitive. For historical aggregates, prefer a data provider over many paid
  RPC calls.
- Testnet paths exist for cheap end-to-end testing (`_sepolia`, `_testnet`,
  `_fuji`, `_holesky`, etc.). Pricing is the same as mainnet ($0.001/call).
- Heavy methods like `eth_getLogs` over wide block ranges return the same flat
  per-request cost today; mind your input ranges to keep paid calls fast.
