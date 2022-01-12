import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody } from '@marmaladeswap/uikit'
import { Timeline } from 'react-twitter-widgets'
import { useTranslation } from 'contexts/Localization'

const StyledTwitterNewsCard = styled(Card)`
  /* background-image: url('/images/cans2a.png'); */
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const TwitterCard = () => {
  const { t } = useTranslation()

  return (
    <StyledTwitterNewsCard>
      <CardBody>
        <Heading scale="xl" mb="24px">
          {t('Announcements')}
        </Heading>

        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'MarmaladeSwap',
          }}
          options={{
            height: '400',
            id: 'profile:MarmaladeSwap',
          }}
        />
      </CardBody>
    </StyledTwitterNewsCard>
  )
}

export default TwitterCard
