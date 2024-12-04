export const navigationData = {
  networks: ['Mainnet', 'Testnet'],
  navMain: [
    {
      title: 'Main',
      items: [
        { title: 'Dashboard', url: '/' },
        { title: 'Get Quick Loan', url: '/quick-loan' },
        { title: 'Browse Collections', url: '/collections' },
      ],
    },
    {
      title: '$MAG Token',
      items: [
        { title: 'Staking', url: '/mag/staking' },
        { title: 'Swap', url: '/mag/swap' },
        { title: 'Bridge', url: '/mag/bridge' },
      ],
    },
    {
      title: 'Lender Hub',
      items: [
        { title: 'Dashboard', url: '/lender/dashboard' },
        { title: 'Create Lending Desk', url: '/lender/create' },
        { title: 'Manage Lending Desks', url: '/lender/manage' },
      ],
    },
    {
      title: 'Resources',
      items: [
        { title: 'Support', url: '/support' },
        { title: 'Documentation', url: '/docs' },
        { title: 'Community', url: '/community' },
      ],
    },
  ],
  testnetOnly: [
    {
      title: 'Developer',
      items: [
        { title: 'Testnet Faucet', url: '/faucet' },
      ],
    },
  ],
};