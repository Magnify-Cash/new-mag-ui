'use client';

import Dashboard from '@/components/dashboard/dashboard';
import { Card } from '@/components/ui/card';

export default function CreateLendingDeskPage() {
  return (
    <Dashboard>
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Create Lending Desk</h1>
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">New Lending Desk</h2>
          <p className="text-muted-foreground">
            Set up a new lending desk with custom parameters
          </p>
        </Card>
      </div>
    </Dashboard>
  );
}