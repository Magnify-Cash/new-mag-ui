import { Card } from "@/components/ui/card";
import { StatCard } from "@/components/dashboard/stats/stat-card";

export function StakingStats() {
  const stats = [
    {
      label: "Current APY",
      value: "12.5%",
      change: { value: "+2.3%", period: "last month" },
    },
    {
      label: "Total Staked",
      value: "1.2M MAG",
      change: { value: "+150K", period: "last week" },
    },
    {
      label: "Total Stakers",
      value: "3,456",
      change: { value: "+123", period: "last 24h" },
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}
