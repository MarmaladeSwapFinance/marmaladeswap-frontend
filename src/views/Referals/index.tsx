import React, { RefObject, useEffect, useMemo, useRef, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Heading, Flex, Text, Input } from '@marmaladeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import { AutoColumn } from 'components/Layout/Column'
import Row from 'components/Layout/Row'
import styled from 'styled-components'
import { getReferalsContract } from 'utils/contractHelpers'
import { Label } from 'views/Voting/CreateProposal/styles'
import CopyButton from './components/CopyButton'

const CopiedLabel = styled.div`
  margin-right: 16px;
  display: flex;
  justify-content: center;

  &:hover {
    text-decoration: none;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    flex: 1;
  }
`
const Block = styled.div`
  margin-bottom: 16px;
`

const Referals: React.FC = () => {
  const referalsContract = getReferalsContract()

  const { t } = useTranslation()
  const { account } = useWeb3React()
  const inputRef = useRef<HTMLInputElement>()
  const [copied, setCopied] = useState('')
  const [referalsCount, setRerefalsCount] = useState('')

  useEffect(() => {
    const foo = async () => {
      const refCount = await referalsContract.referralsCount(account)
      setRerefalsCount(refCount.toString())
    }
    foo()
  }, [account, referalsContract])

  const copyToClipboard = (data) => {
    const el = document.createElement('textarea')
    el.value = data
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    setCopied('Copied')
    setTimeout(() => setCopied(''), 2000)
  }

  const RefOk = () => {
    return (
      <AutoColumn gap="16px">
        <Row>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase">
            {t('Your referal link:')}
          </Text>
        </Row>
        <Row>
          <Input
            id="token-search-input"
            placeholder={t('Search name or paste address')}
            scale="lg"
            autoComplete="off"
            value={`https://marmaladeswap.finance/?ref=${account}`}
            ref={inputRef as RefObject<HTMLInputElement>}
          />
        </Row>

        <Row>
          <CopyButton
            onClick={() => {
              copyToClipboard(`https://marmaladeswap.finance/?ref=${account}`)
            }}
          />
        </Row>
        <Row>
          <CopiedLabel>
            <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase">
              {copied}
            </Text>
          </CopiedLabel>
        </Row>
        <Row>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase">
            {t('Referals count:')} {referalsCount}
          </Text>
        </Row>
      </AutoColumn>
    )
  }

  const RefNoAccount = () => {
    return (
      <Row>
        <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase">
          {t('Please connect your wallet first')}
        </Text>
      </Row>
    )
  }

  const ReferalBlock = () => {
    if (!account) {
      return <RefNoAccount />
    }
    return <RefOk />
  }

  return (
    <>
      <PageHeader>
        <Flex justifyContent="space-between" flexDirection={['column', null, null, 'row']}>
          <Flex flex="1" flexDirection="column" mr={['8px', 0]}>
            <Heading as="h1" scale="xxl" color="secondary" mb="24px">
              {t('Referal Program')}
            </Heading>
            <Heading scale="md" color="text">
              {t('Share the referral link below to invite your friends.')}
            </Heading>
            <Heading scale="md" color="text">
              {t('Earn 5% of your friends earnings.')}
            </Heading>
          </Flex>
        </Flex>
      </PageHeader>
      <Page>
        <ReferalBlock />
      </Page>
    </>
  )
}

export default Referals
