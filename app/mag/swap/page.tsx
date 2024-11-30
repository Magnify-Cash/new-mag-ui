'use client';

import Dashboard from '@/components/dashboard/dashboard';
import { SwapDashboard } from '@/components/mag/swap/swap-dashboard';

export default function SwapPage() {
  return (
    <Dashboard>
      <SwapDashboard />
    </Dashboard>
  );
}