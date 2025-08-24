// Example deploy script using hardhat-deploy and deterministic CREATE2 deployment
module.exports = async ({ getNamedAccounts, deployments }) => {
const { deploy } = deployments;
const { deployer } = await getNamedAccounts();


console.log('Deployer:', deployer);


await deploy('MyContract', {
from: deployer,
args: [],
log: true,
// deterministicDeployment uses CREATE2 to achieve the same address across chains
deterministicDeployment: true,
});
};


module.exports.tags = ['MyContract'];

//Notes: deterministicDeployment: true instructs hardhat-deploy to perform a CREATE2-based deployment — 
//it will attempt to deploy the same bytecode with same salt so resulting address is deterministic. 
//This requires the same deployer key and same contract bytecode & constructor args across chains.
