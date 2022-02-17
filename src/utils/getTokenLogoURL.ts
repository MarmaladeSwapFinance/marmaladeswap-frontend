const getTokenLogoURL = (address: string) => {
  if (address === '0x1174ee668CDDBB810eD576eDcD7114513Ea655f6') return 'https://marmaladeswap.finance/logo-c.png'
  return `https://assets.trustwalletapp.com/blockchains/smartchain/assets/${address}/logo.png`
}

export default getTokenLogoURL
