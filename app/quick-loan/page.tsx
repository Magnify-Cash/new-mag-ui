'use client';

import Dashboard from '@/components/dashboard/dashboard';
import { Card } from '@/components/ui/card';

export default function QuickLoanPage() {
  return (
    <Dashboard>
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Quick Loan</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Apply for a Loan</h2>
            <p className="text-muted-foreground">
              Get instant liquidity by borrowing against your NFTs
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Active Loans</h2>
            <p className="text-muted-foreground">
              View and manage your current loans
            </p>
          </Card>
        </div>
      </div>
    </Dashboard>
  );
}