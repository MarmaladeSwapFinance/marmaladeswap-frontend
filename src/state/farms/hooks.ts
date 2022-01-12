import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { BIG_ZERO } from 'utils/bigNumber'
import { getBalanceAmount } from 'utils/formatBalance'
import { farmsConfig } from 'config/constants'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmsPublicDataAsync, fetchFarmUserDataAsync, nonArchivedFarms } from '.'
import { State, Farm, FarmsState, PoolsState, Pool } from '../types'
import fetchFarms from './fetchFarms'
import fetchFarmsPrices from './fetchFarmsPrices'

export const usePollFarmsData = (includeArchive = false) => {
  const dispatch = useAppDispatch()
  const { slowRefresh } = useRefresh()
  const { account } = useWeb3React()

  useEffect(() => {
    const farmsToFetch = includeArchive ? farmsConfig : nonArchivedFarms
    const pids = farmsToFetch.map((farmToFetch) => farmToFetch.pid)

    dispatch(fetchFarmsPublicDataAsync(pids))

    if (account) {
      dispatch(fetchFarmUserDataAsync({ account, pids }))
    }
  }, [includeArchive, dispatch, slowRefresh, account])
}

/**
 * Fetches the "core" farm data used globally
 * 251 = CAKE-BNB LP
 * 252 = BUSD-BNB LP
 */
export const usePollCoreFarmData = () => {
  const dispatch = useAppDispatch()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    dispatch(fetchFarmsPublicDataAsync([1]))
  }, [dispatch, fastRefresh])
}

export const useFarms = (): FarmsState => {
  const farms = useSelector((state: State) => state.farms)
  console.log('useFarms', farms)
  return farms
}

export const usePools = (): PoolsState => {
  const pools = useSelector((state: State) => state.pools)
  console.log('usePools', pools)
  return pools
}

export const useFarmFromPid = (pid): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.pid === pid))
  return farm
}

export const useFarmFromLpSymbol = (lpSymbol: string): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.lpSymbol === lpSymbol))
  return farm
}

export const useFarmUser = (pid) => {
  const farm = useFarmFromPid(pid)

  return {
    allowance: farm.userData ? new BigNumber(farm.userData.allowance) : BIG_ZERO,
    tokenBalance: farm.userData ? new BigNumber(farm.userData.tokenBalance) : BIG_ZERO,
    stakedBalance: farm.userData ? new BigNumber(farm.userData.stakedBalance) : BIG_ZERO,
    earnings: farm.userData ? new BigNumber(farm.userData.earnings) : BIG_ZERO,
  }
}

// Return the base token price for a farm, from a given pid
export const useBusdPriceFromPid = (pid: number): BigNumber => {
  const farm = useFarmFromPid(pid)
  return farm && new BigNumber(farm.token.busdPrice)
}

export const useLpTokenPrice = (symbol: string) => {
  const farm = useFarmFromLpSymbol(symbol)
  const farmTokenPriceInUsd = useBusdPriceFromPid(farm.pid)
  let lpTokenPrice = BIG_ZERO

  if (farm.lpTotalSupply && farm.lpTotalInQuoteToken) {
    // Total value of base token in LP
    const valueOfBaseTokenInFarm = farmTokenPriceInUsd.times(farm.tokenAmountTotal)
    // Double it to get overall value in LP
    const overallValueOfAllTokensInFarm = valueOfBaseTokenInFarm.times(2)
    // Divide total value of all tokens, by the number of LP tokens
    const totalLpTokens = getBalanceAmount(new BigNumber(farm.lpTotalSupply))
    lpTokenPrice = overallValueOfAllTokensInFarm.div(totalLpTokens)
  }

  return lpTokenPrice
}

// /!\ Deprecated , use the BUSD hook in /hooks

export const usePriceBnbBusd = (): BigNumber => {
  const bnbBusdFarm = useFarmFromPid(6)
  console.log('pid8abnbBusdFarm', bnbBusdFarm)
  return new BigNumber(bnbBusdFarm.quoteToken.busdPrice)
}

export const usePriceMarmBusd = (): BigNumber => {
  const cakeBnbFarm = useFarmFromPid(1)
  console.log('pid0cakeBnbFarm', cakeBnbFarm)
  return new BigNumber(cakeBnbFarm.token.busdPrice)
}

export const useTotalValue = (): BigNumber => {
  const farms = useFarms()
  const pools = usePools()
  const bnbPrice = usePriceBnbBusd()
  // const bnbPrice = useBnbBusdPrice()
  console.log('bnbprice', bnbPrice.toNumber())
  const marmPrice = usePriceMarmBusd()
  console.log('marmPrice', marmPrice.toNumber())
  let value = new BigNumber(0)
  for (let i = 0; i < farms.data.length; i++) {
    console.log('farmdata', farms.data[i])
    const farm: Farm = farms.data[i]
    if (farm.lpTotalInQuoteToken) {
      let val
      if (farm.quoteToken.symbol === 'wBNB') {
        val = bnbPrice.times(farm.lpTotalInQuoteToken)
        console.log('bnbPrice1', val.toNumber())
      } else if (farm.quoteToken.symbol === 'MARM') {
        val = marmPrice.times(farm.lpTotalInQuoteToken)
      } else {
        val = farm.lpTotalInQuoteToken
      }
      value = value.plus(val)
    }
  }

  for (let i = 0; i < pools.data.length; i++) {
    const pool: Pool = pools.data[i]
    if (pool.totalStaked) {
      const totalStaked = new BigNumber(pool.totalStaked).div(10 ** pool.stakingToken.decimals)
      const val = marmPrice.times(totalStaked)
      value = value.plus(val)
    }
  }
  return value
}
