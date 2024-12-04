import { Card } from "@/components/ui/card";
import { TransactionItem } from "./transaction-item";

const transactions = [
  {
    hash: "0x8f...3e1d",
    time: "Processed 2 min ago",
    amount: "+1,234.56 USDC",
    status: "Confirmed",
  },
  {
    hash: "0x8f...3e2d",
    time: "Processed 5 min ago",
    amount: "+2,345.67 USDC",
    status: "Confirmed",
  },
  {
    hash: "0x8f...3e3d",
    time: "Processed 8 min ago",
    amount: "+3,456.78 USDC",
    status: "Confirmed",
  },
  {
    hash: "0x8f...3e4d",
    time: "Processed 10 min ago",
    amount: "+4,567.89 USDC",
    status: "Confirmed",
  },
  {
    hash: "0x8f...3e5d",
    time: "Processed 15 min ago",
    amount: "+5,678.90 USDC",
    status: "Confirmed",
  },
];

export function TransactionList() {
  return (
    <Card className="dashboard-card mt-4 p-6">
      <h2 className="text-xl font-bold mb-4 text-foreground">
        Recent Transactions
      </h2>
      <div className="space-y-4">
        {transactions.map((tx) => (
          <TransactionItem key={tx.hash} {...tx} />
        ))}
      </div>
    </Card>
  );
}
