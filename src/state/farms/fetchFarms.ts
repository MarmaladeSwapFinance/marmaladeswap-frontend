import { FarmConfig } from 'config/constants/types'
import fetchFarm from './fetchFarm'

const fetchFarms = async (farmsToFetch: FarmConfig[]) => {
  console.log('farmsToFetch', farmsToFetch)
  const data = await Promise.all(
    farmsToFetch.map(async (farmConfig) => {
      console.log('pid341', farmConfig.pid)
      const farm = await fetchFarm(farmConfig)
      console.log('pid342', farmConfig.pid)
      return farm
    }),
  )
  return data
}

export default fetchFarms
