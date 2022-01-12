import { MenuEntry } from '@marmaladeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      },
      // {
      //   label: t('LP Migration'),
      //   href: 'https://v1exchange.pancakeswap.finance/#/migrate',
      // },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Referals'),
    icon: 'ReferalsIcon',
    href: '/referals',
  },
  {
    label: t('NFT Marketplace'),
    icon: 'NftIcon',
    href: '#',
    // href: '/collectibles',
    disabled: true,
    status: {
      text: 'soon',
      color: 'textDisabled',
    },
  },
  {
    label: t('IFO'),
    icon: 'IfoIcon',
    href: '/ifo',
    disabled: true,
    status: {
      text: 'soon',
      color: 'textDisabled',
    },
  },
  {
    label: t('Collectibles'),
    icon: 'NftIcon',
    href: '#',
    // href: '/collectibles',
    disabled: true,
    status: {
      text: 'soon',
      color: 'textDisabled',
    },
  },
  {
    label: t('Prediction (BETA)'),
    icon: 'PredictionsIcon',
    href: '#',
    disabled: true,
    status: {
      text: 'soon',
      color: 'textDisabled',
    },
  },
  {
    label: t('Lottery'),
    icon: 'TicketIcon',
    // href: '/lottery',
    href: '#',
    disabled: true,
    status: {
      text: 'soon',
      color: 'textDisabled',
    },
  },

  // {
  //   label: t('Team Battle'),
  //   icon: 'TeamBattleIcon',
  //   href: '#',
  //   // href: '/competition',
  //   disabled: true,
  //   status: {
  //     text: 'soon',
  //     color: 'textDisabled',
  //   },
  // },
  // {
  //   label: t('Teams & Profile'),
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: t('Leaderboard'),
  //       href: '/teams',
  //     },
  //     {
  //       label: t('Task Center'),
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: t('Your Profile'),
  //       href: '/profile',
  //     },
  //   ],
  // },

  // {
  //   label: t('Info'),
  //   icon: 'InfoIcon',
  //   href: 'https://pancakeswap.info',
  // },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Telegram'),
        href: 'https://t.me/MarmaladeSwap',
      },
      {
        label: t('Twitter'),
        href: 'https://twitter.com/marmaladeswap',
      },
      {
        label: t('Github'),
        href: 'https://github.com/MarmaladeSwap',
      },
      {
        label: t('Facebook'),
        href: 'https://www.facebook.com/groups/marmaladeswap',
      },
    ],
  },
]

export default config
