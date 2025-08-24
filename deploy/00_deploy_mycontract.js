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
