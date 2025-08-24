# 03 - Deployment


## Deterministic deployments (why and how)


If you want the same contract **address** across multiple chains you must perform a deterministic deployment (CREATE2). `hardhat-deploy` offers a helper flag `deterministicDeployment: true` in its `deploy()` options — this will derive an address based on the contract bytecode, deployer, and a salt.


**Rules for deterministic/same address**:


1. Use the *same* deployer private key on every chain.
2. The contract bytecode must be identical (same compiler version & settings, libraries, constructor args).
3. Constructor arguments must match exactly.
4. Use the same `salt` or let `hardhat-deploy` pick a deterministic one (the plugin chooses a salt when `deterministicDeployment: true`).


## Deploy commands (example)


```bash
# compile first
npx hardhat compile


# deploy to a chain (repeat for each network)
npx hardhat deploy --network arbitrum
npx hardhat deploy --network base
npx hardhat deploy --network optimism
npx hardhat deploy --network somnia
npx hardhat deploy --network ink
```
Confirming the address

After deployment hardhat-deploy prints the deployed address. Verify that the addresses reported on each chain match. If they differ:

Confirm you used the same PRIVATE_KEY

Confirm compiled bytecode & compiler settings match across machines/CI

Confirm constructor args & library linking are identical

When deterministic deployments won’t work

If a network forbids the CREATE2 pattern or hardhat-deploy can't use it, address may differ.

If your contract uses CREATE internally or depends on chain-specific behavior, deterministic address parity is not guaranteed.
