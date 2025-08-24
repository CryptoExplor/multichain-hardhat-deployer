# Multichain Hardhat Deployer


Deploy a contract with the **same address** across multiple EVM networks using Hardhat + `hardhat-deploy` deterministic deployments (CREATE2).


This repository contains a step-by-step guide and ready-to-copy files for beginners: configuration, deploy scripts, verification tips (Etherscan/Blockscout), and a sample GitHub Actions workflow.



## Quicklinks
- `docs/01-prerequisites.md` — environment & keys
- `docs/02-setup.md` — Hardhat project setup
- `docs/03-deployment.md` — deploy scripts & deterministic deploy
- `docs/04-verification.md` — verify on Etherscan / Blockscout
- `docs/05-troubleshooting.md` — common issues
- `docs/06-ci-cd.md` — GitHub Actions example


## Quickstart


```bash
# clone + install
git clone https://github.com/CryptoExplor/multichain-hardhat-deployer.git
cd multichain-hardhat-deployer
npm install


# copy .env.example -> .env and edit values
cp .env.example .env


# compile + deploy to a single network (example)
npx hardhat compile
npx hardhat deploy --network arbitrum

For full instructions and background, read the files in /docs
