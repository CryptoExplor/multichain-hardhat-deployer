# 01 - Prerequisites


Minimum knowledge & tools:


- Node.js >= 18
- npm or yarn
- Basic Solidity (compiling + contract structure)
- Basic Git & GitHub knowledge (optional but helpful)


Software you will install:


```bash
npm init -y
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox hardhat-deploy dotenv
```

Secrets & keys:
A funded deployer private key (same key across chains if you want identical address)
Explorer API keys: Arbiscan, Basescan, Optimism (Etherscan-style keys)
RPC endpoints for each network (Infura/Alchemy/public RPC or your own)

Security:
Keep .env out of source control (add to .gitignore).
Use GitHub Secrets for CI (do not commit your private key).
