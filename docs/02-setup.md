# 02 - Project Setup


1. Initialize project and Hardhat


```bash
mkdir multichain-hardhat-deployer
cd multichain-hardhat-deployer
npm init -y
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox hardhat-deploy dotenv
npx hardhat
# Choose "Create a basic sample project"
```

Add hardhat-deploy and configure hardhat.config.js (see repo file)

Create .env from .env.example and fill values.

Place your contract into contracts/MyContract.sol and modify as needed.

Compile
```
npx hardhat compile
```
