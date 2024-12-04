import { Card } from "@/components/ui/card";
import { TransactionItem } from "@/components/dashboard/transactions/transaction-item";

const swapHistory = [
  {
    hash: "0x1f...2e3d",
    time: "2 min ago",
    amount: "1,000 MAG → 850 USDC",
    status: "Completed",
  },
  {
    hash: "0x4a...5b6c",
    time: "5 min ago",
    amount: "500 MAG → 425 USDC",
    status: "Completed",
  },
];

export function SwapHistory() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">Recent Swaps</h2>
      <div className="space-y-4">
        {swapHistory.map((tx) => (
          <TransactionItem key={tx.hash} {...tx} />
        ))}
      </div>
    </Card>
  );
}
