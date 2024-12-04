import Dashboard from "@/components/dashboard/dashboard";
import { Card } from "@/components/ui/card";

export default function FaucetPage() {
  return (
    <Dashboard>
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Testnet Faucet</h1>
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Request Test Tokens</h2>
          <p className="text-muted-foreground">
            Get testnet tokens for development and testing
          </p>
        </Card>
      </div>
    </Dashboard>
  );
}
