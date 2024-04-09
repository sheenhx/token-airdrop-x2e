import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-waffle";
import "hardhat-docgen"
const keys = require("./keys.json");

// const config: HardhatUserConfig = {
//   solidity: "0.8.17",
//   networks: {
//     anvil: {
//       url: "http://localhost:8545",
//     },
//     wannsee: {
//             url: "https://wannsee-rpc.mxc.com",
//             chainId: 5167003,
//             //accounts: ["6ae4bf9ec354bb7770407fef831151d5857d731a8bb98ce0b1d215861337e8e4"],
//             accounts: ["6ae4bf9ec354bb7770407fef831151d5857d731a8bb98ce0b1d215861337e8e4"] as HttpNetworkAccountsUserConfig | undefined,
//             //gasPrice: 9000000000000,
//             saveDeployments: true,
//         }
//   }
// };

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    ganache: {
      url: "http://127.0.0.1:8545",
    },
    moonchain: {
            url: "https://geneva-rpc.moonchain.com",
            // url: "http://207.246.99.8:8545",
            chainId: 5167004,
            //accounts: ["6ae4bf9ec354bb7770407fef831151d5857d731a8bb98ce0b1d215861337e8e4"],
            accounts: ["51ae57648900825be59f1c2804f1bd3ef2852bd2f8883e3b038e2e7cb6984571"] as HttpNetworkAccountsUserConfig | undefined,
            //gasPrice: 9000000000000,
            saveDeployments: true,
        }
  }
};

// export default config;

// module.exports = {
//   solidity: "0.8.17",
//   networks: {
//     ganache: {
//       url: keys.PROVIDER_URL,
//       accounts: [`0x${keys.PRIVATE_KEY}`]
//     }
//   }
// }

export default config;

