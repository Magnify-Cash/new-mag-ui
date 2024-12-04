import { StatCard } from "./stat-card";

const statsData = [
  {
    label: "Total Volume",
    value: "$12.5M",
    change: {
      value: "+15.3%",
      period: "last 24h",
    },
  },
  {
    label: "Active Users",
    value: "2,847",
    change: {
      value: "+23.5%",
      period: "this week",
    },
  },
  {
    label: "Success Rate",
    value: "99.8%",
    change: {
      value: "+0.2%",
      period: "from average",
    },
  },
];

export function StatsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {statsData.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}
