import { Card } from "@/components/ui/card";
import { BridgeForm } from "./bridge-form";
import { BridgeStats } from "./bridge-stats";
import { BridgeHistory } from "./bridge-history";

export function BridgeDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">$MAG Bridge</h1>
      <BridgeStats />
      <div className="grid md:grid-cols-2 gap-6">
        <BridgeForm />
        <BridgeHistory />
      </div>
    </div>
  );
}
