import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

export function StakingForm() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Stake $MAG</h2>
      <Alert className="mb-4">
        <InfoIcon className="h-4 w-4" />
        <AlertDescription>
          Minimum stake: 100 MAG
          <br />
          Lock period: 30 days
        </AlertDescription>
      </Alert>
      <div className="space-y-4">
        <div>
          <Label htmlFor="stake-amount">Amount to Stake</Label>
          <Input
            id="stake-amount"
            type="number"
            placeholder="Enter MAG amount"
          />
        </div>
        <Button className="w-full">Stake MAG</Button>
      </div>
    </Card>
  );
}
