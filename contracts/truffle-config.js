
const HDWalletProvider = require("@truffle/hdwallet-provider");
const keys = require("./keys.json");

module.exports = {
  contracts_build_directory: "../frontend/public/contracts",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    // ropsten: {
    //   provider: () =>
    //     new HDWalletProvider(
    //       keys.OWN_TEST_WALLET_PRIVATE_KEY,
    //       keys.INFURA_ROPSTEN_URL
    //     ),
    //   network_id: 3,
    //   gas: 5500000,
    //   gasPrice: 20000000000, // 9000000000000
    //   confirmations: 2,
    //   timeoutBlocks: 200
    // }
    moonchain: {
      provider: () =>
        new HDWalletProvider(
          keys.MOON_CHAIN_DEPLOYER_KEY,
          keys.MOON_CHAIN_RPC_URL
        ),
      network_id: 5167004,
      // gas: 5500000,
      // gasPrice: 20000000000,
      // gasPrice: 9000000000000,
      // confirmations: 2,
      networkCheckoutTimeout: 10000,
      timeoutBlocks: 200
    }
  },
  compilers: {
    solc: {
      version: "0.8.13",
    }
  },
};
