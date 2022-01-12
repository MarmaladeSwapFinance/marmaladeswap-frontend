import React from 'react'
import styled from 'styled-components'
import { Text, Button, Link } from '@marmaladeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const ButtonText = styled(Text)`
  display: none;
  ${({ theme }) => theme.mediaQueries.xs} {
    display: block;
  }
`

const StyledLink = styled(Link)`
  margin-right: 16px;
  display: flex;
  justify-content: flex-end;

  &:hover {
    text-decoration: none;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    flex: 1;
  }
`

const HelpButton = ({ onClick }) => {
  const { t } = useTranslation()
  return (
    <StyledLink>
      <Button px={['14px', null, null, null, '20px']} variant="subtle" onClick={onClick}>
        <ButtonText color="backgroundAlt" bold fontSize="16px">
          {t('Copy')}
        </ButtonText>
      </Button>
    </StyledLink>
  )
}

export default HelpButton
