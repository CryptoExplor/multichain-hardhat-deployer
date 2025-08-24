require('dotenv').config();
require('@nomicfoundation/hardhat-toolbox');
require('hardhat-deploy');


const { PRIVATE_KEY, ARBISCAN_API_KEY, BASESCAN_API_KEY, OPTIMISM_API_KEY, ETHERSCAN_API_KEY } = process.env;


module.exports = {
solidity: '0.8.20',
namedAccounts: {
deployer: {
default: 0,
},
},
networks: {
// Mainnets/L2s - replace RPCs with your preferred provider
arbitrum: {
url: process.env.ARB_RPC || 'https://arb1.arbitrum.io/rpc',
accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
},
base: {
url: process.env.BASE_RPC || 'https://mainnet.base.org',
accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
},
optimism: {
url: process.env.OPTIMISM_RPC || 'https://mainnet.optimism.io',
accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
},
somnia: {
url: process.env.SOMNIA_RPC || 'https://dream-rpc.somnia.network',
accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
},
ink: {
url: process.env.INK_RPC || 'https://rpc.ink-sepolia.com',
accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
},
},
etherscan: {
apiKey: {
// network key names follow hardhat-etherscan plugin naming
arbitrumOne: ARBISCAN_API_KEY || '',
base: BASESCAN_API_KEY || '',
optimisticEthereum: OPTIMISM_API_KEY || '',
mainnet: ETHERSCAN_API_KEY || '',
},
},
// hardhat-deploy will pick up namedAccounts
};
