import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@marmaladeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import TwitterNewsCard from 'views/Home/components/TwitterNewsCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
// import PredictionPromotionCard from 'views/Home/components/PredictionPromotionCard'
// import LotteryPromotionCard from 'views/Home/components/LotteryPromotionCard'
// import LotteryBanner from 'views/Home/components/LotteryBanner'
// import useFetchLotteryForPromos from 'views/Home/hooks/useFetchLotteryForPromos'
import { useFetchPublicPoolsData } from 'state/pools/hooks'

import { useLocation } from 'react-router-dom'
import usePersistState from 'hooks/usePersistState'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/egg3a.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/egg3.png'), url('/images/egg3b.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }

  const query = useQuery()
  const { t } = useTranslation()
  useFetchPublicPoolsData()
  // const { currentLotteryPrize } = useFetchLotteryForPromos()

  const [persistedReferer, setPersistedReferer] = usePersistState(false, {
    localStorageKey: 'marmalade_referer',
  })

  const referer = query.get('ref')

  useEffect(() => {
    if (referer) {
      setPersistedReferer(referer)
    }
  }, [referer, setPersistedReferer])

  return (
    <>
      {/* <LotteryBanner currentLotteryPrize={currentLotteryPrize} /> */}
      <Page>
        <Hero>
          <Heading as="h1" scale="xl" mb="24px" color="secondary">
            {t('MarmaladeSwap')}
          </Heading>
          <Text>{t('The only yield farm for marmalade lovers.')}</Text>
        </Hero>
        <div>
          <Cards>
            <FarmStakingCard />
            <TwitterNewsCard />
            {/* <PredictionPromotionCard /> */}
          </Cards>

          <Cards>
            <CakeStats />
            <TotalValueLockedCard />
          </Cards>
          <CTACards>
            <EarnAPRCard />
            <EarnAssetCard />
            {/* <LotteryPromotionCard currentLotteryPrize={currentLotteryPrize} /> */}
          </CTACards>
        </div>
      </Page>
    </>
  )
}

export default Home
