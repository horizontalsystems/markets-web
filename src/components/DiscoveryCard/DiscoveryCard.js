import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import Blockchains from './icons/blockchains.svg'
import Dexes from './icons/dexes.svg'
import Lending from './icons/lending.svg'
import Privacy from './icons/privacy.svg'
import Scale from './icons/scale.svg'
import Oracles from './icons/oracle.svg'
import PredictionMarkets from './icons/predictoin.svg'
import Yield from './icons/yield.svg'
import Fiat from './icons/fiat.svg'
import RebaseTokens from './icons/rebase.svg'
import AlgoStablecoins from './icons/stablecoin.svg'
import TokenizedBitcoin from './icons/tokenized.svg'
import StablecoinIssuer from './icons/issuer.svg'
import ExchangeTokens from './icons/chart.svg'
import RiskManagement from './icons/risk.svg'
import Wallets from './icons/wallet.svg'
import Synthetics from './icons/synthetics.svg'
import IndexFunds from './icons/funds.svg'
import Nft from './icons/nft.svg'
import Fundraising from './icons/fundrising.svg'
import Gaming from './icons/gaming.svg'
import B2b from './icons/b2b.svg'
import Infrastructure from './icons/settings.svg'
import StakingEth20 from './icons/stacking.svg'
import CrossChain from './icons/link.svg'
import Computing from './icons/computing.svg'
import FanTokens from './icons/fan.svg'
import InvestmentTools from './icons/investment.svg'
import Storage from './icons/storage.svg'
import Identity from './icons/identity.svg'
import YieldTokens from './icons/yield_tokens.svg'

function DiscoveryCard({ active, id, title, description }) {
  const cardClasses = {
    'text-oz': !active,
    'text-dark': active,
    'bg-warning': active,
    'bg-lawrence': !active
  }

  return (
    <Link to={active ? '/discovery' : `/discovery/${id}`} className={cn('DiscoveryCard card rounded-3 p-3 m-2', cardClasses)}>
      <div className="d-flex align-items-center">
        <img src={getCardIcon(id)} alt="" className={cn({ 'svg-dark': active })} />
        <div className="ps-3 fw-500">{title}</div>
      </div>

      <div className={cn({ 'text-grey': !active })}>
        {description}
      </div>
    </Link>
  )
}

function getCardIcon(id) {
  switch (id) {
    case 'dexes':
      return Dexes
    case 'lending':
      return Lending
    case 'privacy':
      return Privacy
    case 'scaling':
      return Scale
    case 'oracles':
      return Oracles
    case 'prediction_markets':
      return PredictionMarkets
    case 'yield_aggregators':
      return Yield
    case 'fiat_stablecoins':
      return Fiat
    case 'rebase_tokens':
      return RebaseTokens
    case 'algo_stablecoins':
      return AlgoStablecoins
    case 'tokenized_bitcoin':
      return TokenizedBitcoin
    case 'stablecoin_issuers':
      return StablecoinIssuer
    case 'exchange_tokens':
      return ExchangeTokens
    case 'risk_management':
      return RiskManagement
    case 'wallets':
      return Wallets
    case 'synthetics':
      return Synthetics
    case 'index_funds':
      return IndexFunds
    case 'nft':
      return Nft
    case 'fundraising':
      return Fundraising
    case 'gaming':
      return Gaming
    case 'b2b':
      return B2b
    case 'infrastructure':
      return Infrastructure
    case 'staking_eth_2_0':
      return StakingEth20
    case 'cross_chain':
      return CrossChain
    case 'computing':
      return Computing
    case 'fan_tokens':
      return FanTokens
    case 'investment_tools':
      return InvestmentTools
    case 'storage':
      return Storage
    case 'identity':
      return Identity
    case 'yield_tokens':
      return YieldTokens
    default:
      return Blockchains
  }
}

export default DiscoveryCard
