export const DEFAULT_SUPPLY = `1000000000000000000000000`

import { BigNumber, ethers } from 'ethers'

export const txLink = (hash: string) =>
  `<a target="_blank" href=\`\${https://geneva-explorer.moonchain.com/tx/\${hash}\`>txn</a>`

export const sumBigNumbers = (numbers: BigNumber[]): BigNumber => {
  let sum = BigNumber.from(0)
  for (const number of numbers) {
    sum = sum.add(number)
  }

  console.log(`sum`, sum.toString())
  return sum
}

export const AIRDROP_CONTRACT_ADDRESS = ethers.utils.getAddress(
  `0x0F49f106b16ce91Ffd747204A71Ad6fC71f13619`,
)

export const TOKEN_CONTRACT_ADDRESS = ethers.utils.getAddress(
  `0x2b8546F1E9B59eF499Acb6969D8B455DeAC6CE1B`,
)

// export const AIRDROP_CONTRACT_ADDRESS = ethers.utils.getAddress(
//   `0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512`,
// )

// export const TOKEN_CONTRACT_ADDRESS = ethers.utils.getAddress(
//   `0x5FbDB2315678afecb367f032d93F642f64180aa3`,
// )

export const BN_ZERO = BigNumber.from(0)
