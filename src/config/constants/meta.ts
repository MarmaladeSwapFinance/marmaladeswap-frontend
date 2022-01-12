import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MarmaladeSwap',
  description:
    'The most popular AMM on BSC by user count! Earn MARM through yield farming or win it in the Lottery, then stake it in Marmalade Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by MarmaladeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://marmaladeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MarmaladeSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MarmaladeSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MarmaladeSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MarmaladeSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MarmaladeSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MarmaladeSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('MarmaladeSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MarmaladeSwap')}`,
      }
    case '/referals':
      return {
        title: `${t('Referal Program')} | ${t('MarmaladeSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MarmaladeSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('MarmaladeSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('MarmaladeSwap')}`,
      }
    default:
      return null
  }
}
