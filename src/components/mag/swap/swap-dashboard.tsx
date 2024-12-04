import { Card } from "@/components/ui/card";
import { SwapForm } from "./swap-form";
import { SwapStats } from "./swap-stats";
import { SwapHistory } from "./swap-history";

export function SwapDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">$MAG Swap</h1>
      <SwapStats />
      <div className="grid md:grid-cols-2 gap-6">
        <SwapForm />
        <SwapHistory />
      </div>
    </div>
  );
}
