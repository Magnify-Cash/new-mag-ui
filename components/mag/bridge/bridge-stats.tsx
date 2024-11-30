'use client';

import { StatCard } from '@/components/dashboard/stats/stat-card';

export function BridgeStats() {
  const stats = [
    {
      label: 'Total Bridged',
      value: '$8.5M',
      change: { value: '+120K', period: 'last 24h' }
    },
    {
      label: 'Active Bridges',
      value: '156',
      change: { value: '+23', period: 'last hour' }
    },
    {
      label: 'Avg Time',
      value: '2.5 min',
      change: { value: '-30s', period: 'last week' }
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}