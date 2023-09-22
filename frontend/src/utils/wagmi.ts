import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { createClient } from 'wagmi'
import { configureChains } from '@wagmi/core'
import { mainnet, polygon } from '@wagmi/core/chains'
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'
import { Chain } from '@wagmi/core'

export const wannsee = {
    id: 5167003,
    name: 'Wannsee',
    network: 'Wannsee',
    nativeCurrency: {
        decimals: 18,
        name: 'MXC Token',
        symbol: 'MXC',
    },
    rpcUrls: {
        public: { http: ['"https://wannsee-rpc.mxc.com"'] },
        default: { http: ['"https://wannsee-rpc.mxc.com"'] },
    },
    blockExplorers: {
        etherscan: { name: 'etherscan', url: 'https://wannsee-explorer.mxc.com' },
        default: { name: 'etherscan', url: 'https://wannsee-explorer.mxc.com' },
    },
} as const satisfies Chain
 
const { chains, provider,
  webSocketProvider,publicClient } = configureChains(
  [wannsee],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://wannsee-rpc.mxc.com`,
        webSocket: `wss://wannsee-rpc.mxc.com`,
      }),
    }),
  ],
)


const { connectors } = getDefaultWallets({
  appName: `MagnaDrop`,
  chains,
})

export const client = createClient({
  logger: {
    warn: (message) => console.warn(message),
  },
  // autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

export { chains }
