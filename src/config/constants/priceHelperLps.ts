import tokens from './tokens'
import { FarmConfig } from './types'

const priceHelperLps: FarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for MasterChef LPs (farms.ts).
   * This list is added to the MasterChefLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
   * The absense of a PID means the masterchef contract calls are skipped for this farm.
   * Prices are then fetched for all farms (masterchef + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
  // {
  //   pid: null,
  //   lpSymbol: 'QSD-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7b3ae32eE8C532016f3E31C8941D937c59e055B9',
  //   },
  //   token: tokens.qsd,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: null,
  //   lpSymbol: 'ETH-BNB LP',
  //   lpAddresses: {
  //     97: '0xb27f628c12573594437b180a1ea1542d15e0cb78',
  //     56: '',
  //   },
  //   token: tokens.eth,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: null,
  //   lpSymbol: 'CAKE-BNB LP',
  //   lpAddresses: {
  //     97: '0xb6d28b67754a0a7625d4e7af31fbaff65886a26c',
  //     56: '',
  //   },
  //   token: tokens.cake,
  //   quoteToken: tokens.wbnb,
  // },
  {
    pid: null,
    lpSymbol: 'MUSD-BNB LP',
    lpAddresses: {
      97: '0xddccf87e494beb5f4f9fe45a6468a17848ad827c',
      56: '0x826a59400e0c2fb0a47060860da10f9d42b865e9',
    },
    token: tokens.musd,
    quoteToken: tokens.wbnb,
  },
  // {
  //   pid: null,
  //   lpSymbol: 'USDT-BNB LP',
  //   lpAddresses: {
  //     97: '0xf855e52ecc8b3b795ac289f85f6fd7a99883492b',
  //     56: '',
  //   },
  //   token: tokens.eth,
  //   quoteToken: tokens.wbnb,
  // },
]

export default priceHelperLps
