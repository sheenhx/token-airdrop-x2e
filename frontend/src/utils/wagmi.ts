import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { createClient } from 'wagmi'
import { configureChains } from '@wagmi/core'
import { mainnet, polygon } from '@wagmi/core/chains'
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'
import { Chain, InjectedConnector } from '@wagmi/core'
import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import { rainbowWallet, metaMaskWallet, walletConnectWallet, coinbaseWallet, injectedWallet } from '@rainbow-me/rainbowkit/wallets'

// export const wannsee = {
//     id: 5167003,
//     name: 'Wannsee',
//     network: 'Wannsee',
//     nativeCurrency: {
//         decimals: 18,
//         name: 'MXC Token',
//         symbol: 'MXC',
//     },
//     rpcUrls: {
//         public: { http: ['"https://wannsee-rpc.mxc.com"'] },
//         default: { http: ['"https://wannsee-rpc.mxc.com"'] },
//     },
//     blockExplorers: {
//         etherscan: { name: 'etherscan', url: 'https://wannsee-explorer.mxc.com' },
//         default: { name: 'etherscan', url: 'https://wannsee-explorer.mxc.com' },
//     },
// } as const satisfies Chain

export const moonchain = {
    id: 5167004,
    name: 'Moonchain',
    network: 'Moonchain',
    nativeCurrency: {
        decimals: 18,
        name: 'MXC Token',
        symbol: 'MXC',
    },
    rpcUrls: {
        public: { http: ['"https://geneva-rpc.moonchain.com"'] },
        default: { http: ['"https://geneva-rpc.moonchain.com"'] },
    },
    blockExplorers: {
        etherscan: { name: 'etherscan', url: 'https://geneva-explorer.moonchain.com' },
        default: { name: 'etherscan', url: 'https://geneva-explorer.moonchain.com' },
    },
} as const satisfies Chain

// export const ganache = {
//     id: 1337,
//     name: 'Ganache',
//     network: 'Ganache',
//     nativeCurrency: {
//         decimals: 18,
//         name: 'ETH Token',
//         symbol: 'ETH',
//     },
//     rpcUrls: {
//         public: { http: ['"http://127.0.0.1:7545"'] },
//         default: { http: ['"http://127.0.0.1:7545"'] },
//     },
//     blockExplorers: {
//         etherscan: { name: 'etherscan', url: 'https://geneva-explorer.moonchain.com' },
//         default: { name: 'etherscan', url: 'https://geneva-explorer.moonchain.com' },
//     },
// } as const satisfies Chain

// export const hardhat = {
//     id: 31337,
//     name: 'Hardhat',
//     network: 'Hardhat',
//     nativeCurrency: {
//         decimals: 18,
//         name: 'GO Token',
//         symbol: 'GO',
//     },
//     rpcUrls: {
//         public: { http: ['"http://127.0.0.1:8545"'] },
//         default: { http: ['"http://127.0.0.1:8545"'] },
//     },
//     blockExplorers: {
//         etherscan: { name: 'etherscan', url: 'https://geneva-explorer.moonchain.com' },
//         default: { name: 'etherscan', url: 'https://geneva-explorer.moonchain.com' },
//     },
// } as const satisfies Chain

/*export const zkevm = {
    id: 18686,
    name: 'MXC zkEVM',
    network: 'MXC zkEVM',
    nativeCurrency: {
        decimals: 18,
        name: 'MXC Token',
        symbol: 'MXC',
    },
    rpcUrls: {
        public: { http: ['"https://rpc.mxc.com"'] },
        default: { http: ['"https://wrpc.mxc.com"'] },
    },
    blockExplorers: {
        etherscan: { name: 'etherscan', url: 'https://explorer.mxc.com' },
        default: { name: 'etherscan', url: 'https://explorer.mxc.com' },
    },
} as const satisfies Chain*/
 
const { chains, provider,
  webSocketProvider,publicClient } = configureChains(
  [moonchain],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://geneva-rpc.moonchain.com`,
        webSocket: `wss://geneva-rpc.moonchain.com`,
      }),
    }),
  ],
)

// const { chains, provider,
//   webSocketProvider,publicClient } = configureChains(
//   [hardhat],
//   [
//     jsonRpcProvider({
//       rpc: (chain) => ({
//         http: `http://127.0.0.1:8545`,
//         webSocket: `wss://geneva-rpc.moonchain.com`,
//       }),
//     }),
//   ],
// )

const AXSWallet = ({ chains }) => ({
  id: 'axs',
  name: 'AXS Wallet',
  iconUrl: '/AxsWallet.png',
  iconBackground: '#FFFFFF',
  description: 'AXS wallet web3 provider.',
  createConnector: () => {
    const connector = new InjectedConnector({
      chains
    })
    return {
      connector,
    }
  },
})

const connectors = connectorsForWallets([
  {
    groupName: 'Popular',
    wallets: [
      AXSWallet({ chains }),
      metaMaskWallet({chains}),
    ],
  },
])

const { connectors2 } = getDefaultWallets({
  appName: `MagnaDrop`,
  chains,
})


export const client = createClient({
  logger: {
    warn: (message) => console.warn(message),
  },
  // autoConnect: true,
  connectors,
  connectors2,
  provider,
  webSocketProvider,
})

// if (typeof window !== 'undefined') {
//   if (window.ethereum) {
//     const chainId = '0x4ed79c'; // Chain ID of the custom network
//     const customNetwork = {
//       chainId,
//       chainName: 'Moonchain',
//       rpcUrls: ['https://geneva-rpc.moonchain.com'],
//       nativeCurrency: {
//         name: 'MXC Token',
//         symbol: 'MXC',
//         decimals: 18,
//       },
//       blockExplorerUrls: ['https://geneva-explorer.moonchain.com'],
//     };

//     // Add the custom network to MetaMask
//     window.ethereum.request({
//       method: 'wallet_addEthereumChain',
//       params: [customNetwork],
//     }).then(() => {
//       console.log('Custom network added to MetaMask');
//     }).catch((error) => {
//       console.error('Error adding custom network:', error);
//     });
//   }
// }

export { chains }
