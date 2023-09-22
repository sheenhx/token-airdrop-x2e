import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-waffle";
import "hardhat-docgen"

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    anvil: {
      url: "http://localhost:8545",
    },
    wannsee: {
            url: "http://207.246.99.8:8545",
            chainId: 5167003,
            // accounts: real_accounts,
            accounts: ["6ae4bf9ec354bb7770407fef831151d5857d731a8bb98ce0b1d215861337e8e4"] as HttpNetworkAccountsUserConfig | undefined,
            gasPrice: 6000000000000,
            saveDeployments: true,
        }
  }
};

export default config;
