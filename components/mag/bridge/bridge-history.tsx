'use client';

import { Card } from '@/components/ui/card';
import { TransactionItem } from '@/components/dashboard/transactions/transaction-item';

const bridgeHistory = [
  {
    hash: '0x7d...8e9f',
    time: '3 min ago',
    amount: '2,000 MAG',
    status: 'Bridging'
  },
  {
    hash: '0xa1...b2c3',
    time: '8 min ago',
    amount: '1,500 MAG',
    status: 'Completed'
  }
];

export function BridgeHistory() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">Recent Bridges</h2>
      <div className="space-y-4">
        {bridgeHistory.map((tx) => (
          <TransactionItem key={tx.hash} {...tx} />
        ))}
      </div>
    </Card>
  );
}