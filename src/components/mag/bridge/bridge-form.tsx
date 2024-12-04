import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

export function BridgeForm() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Bridge $MAG</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="bridge-amount">Amount</Label>
          <Input id="bridge-amount" type="number" placeholder="Enter amount" />
        </div>
        <div>
          <Label>Network</Label>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline">From: Ethereum</Button>
            <Button variant="outline">To: BSC</Button>
          </div>
        </div>
        <Button className="w-full">Bridge</Button>
      </div>
    </Card>
  );
}
