import { StatsGrid } from "./stats/stats-grid";
import { VolumeChart } from "./charts/volume-chart";
import { TransactionList } from "./transactions/transaction-list";

export function DashboardContent() {
  return (
    <main className="flex-1 overflow-y-auto p-4 bg-secondary/30">
      <StatsGrid />
      <VolumeChart />
      <TransactionList />
    </main>
  );
}
