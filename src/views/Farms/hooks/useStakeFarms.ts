import { useCallback } from 'react'
import { stakeFarm } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'
import usePersistState from 'hooks/usePersistState'

const useStakeFarms = (pid: number) => {
  const masterChefContract = useMasterchef()

  const [persistedReferer, setPersistedReferer] = usePersistState(false, {
    localStorageKey: 'marmalade_referer',
  })

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stakeFarm(
        masterChefContract,
        pid,
        amount,
        persistedReferer || '0x0000000000000000000000000000000000000000',
      )
      console.info(txHash)
    },
    [masterChefContract, pid, persistedReferer],
  )

  return { onStake: handleStake }
}

export default useStakeFarms
