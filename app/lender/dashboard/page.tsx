'use client';

import Dashboard from '@/components/dashboard/dashboard';
import { Card } from '@/components/ui/card';

export default function LenderDashboardPage() {
  return (
    <Dashboard>
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Lender Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Active Lending Desks</h2>
            <p className="text-muted-foreground">
              Manage your current lending operations
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Performance</h2>
            <p className="text-muted-foreground">
              Track your lending metrics and returns
            </p>
          </Card>
        </div>
      </div>
    </Dashboard>
  );
}