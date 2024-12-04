interface TransactionItemProps {
  hash: string;
  time: string;
  amount: string;
  status: string;
}

export function TransactionItem({
  hash,
  time,
  amount,
  status,
}: TransactionItemProps) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors duration-200">
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
        <span className="text-primary font-semibold">TX</span>
      </div>
      <div>
        <h4 className="font-semibold text-foreground">{hash}</h4>
        <p className="text-sm text-muted-foreground">{time}</p>
      </div>
      <div className="ml-auto text-right">
        <p className="font-semibold">{amount}</p>
        <p className="text-sm text-accent">{status}</p>
      </div>
    </div>
  );
}
