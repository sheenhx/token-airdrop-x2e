import { ethers } from 'ethers'

export const createABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name_",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol_",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "totalSupply_",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "decimals_",
          "type": "uint8"
        }
      ],
      "name": "create",
      "outputs": [
        {
          "internalType": "address",
          "name": "erc20Clone",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "logic_",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "salt",
          "type": "bytes32"
        }
      ],
      "name": "predictDeterministicAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "getERC20s",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
] as const

export const FACTORY_ABI_FULL = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name_",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol_",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "totalSupply_",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "decimals_",
          "type": "uint8"
        }
      ],
      "name": "create",
      "outputs": [
        {
          "internalType": "address",
          "name": "erc20Clone",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "logic_",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "salt",
          "type": "bytes32"
        }
      ],
      "name": "predictDeterministicAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "getERC20s",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
] as const

const erc20factory = {
  // address: ethers.utils.getAddress(
  //   `0x2b8546F1E9B59eF499Acb6969D8B455DeAC6CE1B`,
  // ),
  address: ethers.utils.getAddress(
    `0x60564bC52b762b916C7125df42CB5385b62d7eBC`,
  ),
  abi: [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name_",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol_",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "totalSupply_",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "decimals_",
          "type": "uint8"
        }
      ],
      "name": "create",
      "outputs": [
        {
          "internalType": "address",
          "name": "erc20Clone",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "logic_",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "salt",
          "type": "bytes32"
        }
      ],
      "name": "predictDeterministicAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "getERC20s",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
}

export default erc20factory

