import { Farm } from 'state/types'
import fetchPublicFarmData from './fetchPublicFarmData'

const fetchFarm = async (farm: Farm): Promise<Farm> => {
  console.log('pid144', farm.pid)
  const farmPublicData = await fetchPublicFarmData(farm)
  console.log('pid1return ', farm.pid)
  return { ...farm, ...farmPublicData }
}

export default fetchFarm
