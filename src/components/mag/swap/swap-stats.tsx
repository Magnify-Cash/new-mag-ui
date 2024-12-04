import { StatCard } from "@/components/dashboard/stats/stat-card";

export function SwapStats() {
  const stats = [
    {
      label: "24h Volume",
      value: "$1.2M",
      change: { value: "+15%", period: "last 24h" },
    },
    {
      label: "Liquidity",
      value: "$5.6M",
      change: { value: "+2.3%", period: "last hour" },
    },
    {
      label: "MAG Price",
      value: "$0.85",
      change: { value: "+5.2%", period: "last 24h" },
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
