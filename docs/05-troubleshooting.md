# 05 - Troubleshooting


### Addresses differ across chains
- Ensure same PRIVATE_KEY used
- Ensure same compiler & optimization settings
- Ensure deterministicDeployment was used and supported by the chain


### "Transaction ran out of gas" / failed
- Fund the deployer on the target chain
- Estimate gas before sending
- Use a higher gas limit if the network requires it


### Verification fails
- Check compiler version exactly matches (including `+commit` hash)
- Flatten
