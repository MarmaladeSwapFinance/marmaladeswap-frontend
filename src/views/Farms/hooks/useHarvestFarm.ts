import { useCallback } from 'react'
import { harvestFarm } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'
import usePersistState from 'hooks/usePersistState'

const useHarvestFarm = (farmPid: number) => {
  const masterChefContract = useMasterchef()

  const [persistedReferer, setPersistedReferer] = usePersistState(false, {
    localStorageKey: 'marmalade_referer',
  })

  const handleHarvest = useCallback(async () => {
    await harvestFarm(masterChefContract, farmPid, persistedReferer || '0x0000000000000000000000000000000000000000')
  }, [farmPid, masterChefContract, persistedReferer])

  return { onReward: handleHarvest }
}

export default useHarvestFarm
