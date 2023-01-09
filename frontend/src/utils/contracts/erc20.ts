export const ERC20_IMPL_ABI_FULL = [
  {
    inputs: [
      {
        internalType: `address`,
        name: `factory_`,
        type: `address`,
      },
    ],
    stateMutability: `nonpayable`,
    type: `constructor`,
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: `address`,
        name: `_owner`,
        type: `address`,
      },
      {
        indexed: true,
        internalType: `address`,
        name: `_spender`,
        type: `address`,
      },
      {
        indexed: false,
        internalType: `uint256`,
        name: `_value`,
        type: `uint256`,
      },
    ],
    name: `Approval`,
    type: `event`,
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: `address`,
        name: `previousOwner`,
        type: `address`,
      },
      {
        indexed: true,
        internalType: `address`,
        name: `newOwner`,
        type: `address`,
      },
    ],
    name: `OwnershipTransferred`,
    type: `event`,
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: `address`,
        name: `_from`,
        type: `address`,
      },
      {
        indexed: true,
        internalType: `address`,
        name: `_to`,
        type: `address`,
      },
      {
        indexed: false,
        internalType: `uint256`,
        name: `_value`,
        type: `uint256`,
      },
    ],
    name: `Transfer`,
    type: `event`,
  },
  {
    inputs: [],
    name: `acceptOwnership`,
    outputs: [],
    stateMutability: `nonpayable`,
    type: `function`,
  },
  {
    inputs: [
      {
        internalType: `address`,
        name: ``,
        type: `address`,
      },
      {
        internalType: `address`,
        name: ``,
        type: `address`,
      },
    ],
    name: `allowance`,
    outputs: [
      {
        internalType: `uint256`,
        name: ``,
        type: `uint256`,
      },
    ],
    stateMutability: `view`,
    type: `function`,
  },
  {
    inputs: [
      {
        internalType: `address`,
        name: `spender`,
        type: `address`,
      },
      {
        internalType: `uint256`,
        name: `value`,
        type: `uint256`,
      },
    ],
    name: `approve`,
    outputs: [
      {
        internalType: `bool`,
        name: ``,
        type: `bool`,
      },
    ],
    stateMutability: `nonpayable`,
    type: `function`,
  },
  {
    inputs: [
      {
        internalType: `address`,
        name: ``,
        type: `address`,
      },
    ],
    name: `balanceOf`,
    outputs: [
      {
        internalType: `uint256`,
        name: ``,
        type: `uint256`,
      },
    ],
    stateMutability: `view`,
    type: `function`,
  },
  {
    inputs: [],
    name: `cancelOwnershipTransfer`,
    outputs: [],
    stateMutability: `nonpayable`,
    type: `function`,
  },
  {
    inputs: [],
    name: `decimals`,
    outputs: [
      {
        internalType: `uint8`,
        name: ``,
        type: `uint8`,
      },
    ],
    stateMutability: `view`,
    type: `function`,
  },
  {
    inputs: [],
    name: `factory`,
    outputs: [
      {
        internalType: `address`,
        name: ``,
        type: `address`,
      },
    ],
    stateMutability: `view`,
    type: `function`,
  },
  {
    inputs: [
      {
        internalType: `address`,
        name: `owner_`,
        type: `address`,
      },
      {
        internalType: `string`,
        name: `name_`,
        type: `string`,
      },
      {
        internalType: `string`,
        name: `symbol_`,
        type: `string`,
      },
      {
        internalType: `uint256`,
        name: `totalSupply_`,
        type: `uint256`,
      },
      {
        internalType: `uint8`,
        name: `decimals_`,
        type: `uint8`,
      },
    ],
    name: `initialize`,
    outputs: [
      {
        internalType: `address`,
        name: ``,
        type: `address`,
      },
    ],
    stateMutability: `nonpayable`,
    type: `function`,
  },
  {
    inputs: [],
    name: `isNextOwner`,
    outputs: [
      {
        internalType: `bool`,
        name: ``,
        type: `bool`,
      },
    ],
    stateMutability: `view`,
    type: `function`,
  },
  {
    inputs: [],
    name: `isOwner`,
    outputs: [
      {
        internalType: `bool`,
        name: ``,
        type: `bool`,
      },
    ],
    stateMutability: `view`,
    type: `function`,
  },
  {
    inputs: [
      {
        internalType: `address`,
        name: `to`,
        type: `address`,
      },
      {
        internalType: `uint256`,
        name: `value`,
        type: `uint256`,
      },
    ],
    name: `mint`,
    outputs: [],
    stateMutability: `nonpayable`,
    type: `function`,
  },
  {
    inputs: [],
    name: `name`,
    outputs: [
      {
        internalType: `string`,
        name: ``,
        type: `string`,
      },
    ],
    stateMutability: `view`,
    type: `function`,
  },
  {
    inputs: [],
    name: `owner`,
    outputs: [
      {
        internalType: `address`,
        name: ``,
        type: `address`,
      },
    ],
    stateMutability: `view`,
    type: `function`,
  },
  {
    inputs: [],
    name: `renounceOwnership`,
    outputs: [],
    stateMutability: `nonpayable`,
    type: `function`,
  },
  {
    inputs: [],
    name: `symbol`,
    outputs: [
      {
        internalType: `string`,
        name: ``,
        type: `string`,
      },
    ],
    stateMutability: `view`,
    type: `function`,
  },
  {
    inputs: [],
    name: `totalSupply`,
    outputs: [
      {
        internalType: `uint256`,
        name: ``,
        type: `uint256`,
      },
    ],
    stateMutability: `view`,
    type: `function`,
  },
  {
    inputs: [
      {
        internalType: `address`,
        name: `to`,
        type: `address`,
      },
      {
        internalType: `uint256`,
        name: `value`,
        type: `uint256`,
      },
    ],
    name: `transfer`,
    outputs: [
      {
        internalType: `bool`,
        name: ``,
        type: `bool`,
      },
    ],
    stateMutability: `nonpayable`,
    type: `function`,
  },
  {
    inputs: [
      {
        internalType: `address`,
        name: `from`,
        type: `address`,
      },
      {
        internalType: `address`,
        name: `to`,
        type: `address`,
      },
      {
        internalType: `uint256`,
        name: `value`,
        type: `uint256`,
      },
    ],
    name: `transferFrom`,
    outputs: [
      {
        internalType: `bool`,
        name: ``,
        type: `bool`,
      },
    ],
    stateMutability: `nonpayable`,
    type: `function`,
  },
  {
    inputs: [
      {
        internalType: `address`,
        name: `nextOwner_`,
        type: `address`,
      },
    ],
    name: `transferOwnership`,
    outputs: [],
    stateMutability: `nonpayable`,
    type: `function`,
  },
] as const
