import { Card } from "@/components/ui/card";

interface StatCardProps {
  label: string;
  value: string;
  change: {
    value: string;
    period: string;
  };
}

export function StatCard({ label, value, change }: StatCardProps) {
  return (
    <Card className="dashboard-card p-6">
      <h3 className="stats-label">{label}</h3>
      <p className="stats-value">{value}</p>
      <p className="text-sm text-accent mt-2">
        {change.value} from {change.period}
      </p>
    </Card>
  );
}
