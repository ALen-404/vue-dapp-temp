import { createApp } from 'vue'
import App from './App.vue'
import 'windi.css'
import './style.css'
import { VueDapp } from 'vue-dapp'
import { ethers } from 'ethers'

const app = createApp(App)

app.use(VueDapp, {
  autoConnect: true,
  networks: {
    80001: {
      chainId: ethers.utils.hexValue(80001),
      blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
      chainName: 'Mumbai',
      rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
      nativeCurrency: {
        name: 'Mumbai',
        decimals: 18,
        symbol: 'MATIC',
      },
    },
    42161: {
      chainId: ethers.utils.hexValue(42161),
      blockExplorerUrls: ['https://arbiscan.io'],
      chainName: 'Arbitrum One',
      rpcUrls: ['https://arb1.arbitrum.io/rpc'],
      nativeCurrency: {
        name: 'Arbitrum',
        symbol: 'ETH',
        decimals: 18,
      },
    },
    56:{
        chainId: ethers.utils.hexValue(56),
        blockExplorerUrls: ['https://bscscan.com'],
        chainName: 'BSC',
        rpcUrls: ['https://bscrpc.com'],
        nativeCurrency: {
          name: 'BSC',
          symbol: 'BNB',
          decimals: 18,
        },
    }
  },
})

app.mount('#app')
