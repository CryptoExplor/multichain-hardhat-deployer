# 04 - Verification (Etherscan & Blockscout)


## Etherscan-style explorers (Arbiscan, Basescan, Optimism, Etherscan)


1. Add API keys to `.env` and `hardhat.config.js` (see example config).
2. After deploy, use the verify task:


```bash
# Verify on Arbitrum
npx hardhat verify --network arbitrum <CONTRACT_ADDRESS> "Constructor arg 1" 123
```
Hardhat will submit source + metadata to the explorer's API and produce a verified contract page.

##Blockscout-based explorers (Somnia, Ink, others)

Blockscout does not always support the exact same verification API. If npx hardhat verify fails for Blockscout, two options:

Use a Blockscout-compatible plugin (search hardhat-blockscout-verify) — if available.

Use manual verification via Blockscout's web UI or its contracts API (if the chain provides an API). Example curl pattern (chain-specific):

```
curl -X POST 'https://blockscout.example/api?module=contract&action=verifysourcecode' \
-F 'apikey=YOUR_KEY' \
-F 'contractaddress=0x...' \
-F 'sourceCode=@MyContract.sol' \
-F 'contractname=MyContract' \
-F 'compilerversion=v0.8.20+commit...' \
-F 'constructorArgu ments=...'
```
Read your chain's explorer docs for exact parameters. Some chains require uploading flattened source & metadata JSON.

Troubleshooting verification

Ensure compiler version & optimization settings match the compiled artifacts.

Provide exact constructor args in ABI-encoded form if required.

If libraries are used, make sure to supply address mappings.
