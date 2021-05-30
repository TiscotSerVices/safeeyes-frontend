import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [

  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'LP Migration',
        href: '/migrate',
      },
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
      {
        label: 'V1 Liquidity (Old)',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    href: 'https://bscscan.com',
  },


]

export default config
