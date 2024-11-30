'use client';

import Dashboard from '@/components/dashboard/dashboard';
import { BridgeDashboard } from '@/components/mag/bridge/bridge-dashboard';

export default function BridgePage() {
  return (
    <Dashboard>
      <BridgeDashboard />
    </Dashboard>
  );
}