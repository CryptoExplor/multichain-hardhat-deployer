# 04 - Verification (Etherscan & Blockscout)


## Etherscan-style explorers (Arbiscan, Basescan, Optimism, Etherscan)


1. Add API keys to `.env` and `hardhat.config.js` (see example config).
2. After deploy, use the verify task:


```bash
# Verify on Arbitrum
npx hardhat verify --network arbitrum <CONTRACT_ADDRESS> "Constructor arg 1" 123
```
Hardhat will submit source + metadata to the explorer's API and produce a verified contract page.
