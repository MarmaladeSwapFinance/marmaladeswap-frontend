import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */

  {
    pid: 0,
    lpSymbol: 'MARM',
    lpAddresses: {
      97: '0xe7d7003fdac419325faca13403edeec94e80c048',
      56: '0x1174ee668cddbb810ed576edcd7114513ea655f6',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'MARM-BNB LP',
    lpAddresses: {
      97: '0x2486034e60f4bb7ffed986bc81a873d685D62bCD',
      56: '0x39c634c99b268f6d896b85dd4fee351972a8fa0e',
    },
    token: tokens.marm,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'MARM-BUSD LP',
    lpAddresses: {
      97: '0x28E4Ff48412AbB09a950430Fe607446EAb3fca68',
      56: '0x42e6fcbf58235e2023dd99be451b5491408c57e4',
    },
    token: tokens.busd,
    quoteToken: tokens.marm,
  },
  {
    pid: 3,
    lpSymbol: 'MARM-CAKE LP',
    lpAddresses: {
      97: '0xccc948ae4859c8a01dc31e55a69b7482ddcdb9bc',
      56: '0x95afd41c501fd60afbc861bb726d441504d7e481',
    },
    token: tokens.cake,
    quoteToken: tokens.marm,
  },
  {
    pid: 4,
    lpSymbol: 'MARM-MUSD LP',
    lpAddresses: {
      97: '0xb6d95b47263f6c131a51951d231b643baf2c653a',
      56: '0x98eea4cb28c6a0c11cf85661eb9f7dcd37b4ee2a',
    },
    token: tokens.musd,
    quoteToken: tokens.marm,
  },
  {
    pid: 6,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },

  // {
  //   pid: 5,
  //   lpSymbol: 'MARM-ETH LP',
  //   lpAddresses: {
  //     97: '0xb27f628c12573594437b180a1ea1542d15e0cb78',
  //     56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
  //   },
  //   token: tokens.marm,
  //   quoteToken: tokens.eth,
  // },
  // {
  //   pid: 6,
  //   lpSymbol: 'MARM-USDT LP',
  //   lpAddresses: {
  //     97: '0xbacD2b1f08Be71ccc78b7063496891828676A97F',
  //     56: '0xbacD2b1f08Be71ccc78b7063496891828676A97F',
  //   },
  //   token: tokens.marm,
  //   quoteToken: tokens.usdt,
  // },
  // {
  //   pid: 8,
  //   lpSymbol: 'MARM-ETH LP',
  //   lpAddresses: {
  //     97: '0xf7c47a1ff102cc59175ef156effba53a5643c083',
  //     56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
  //   },
  //   token: tokens.marm,
  //   quoteToken: tokens.eth,
  // },
]

export default farms
