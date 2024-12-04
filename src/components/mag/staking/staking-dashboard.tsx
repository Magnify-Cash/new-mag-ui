import { Card } from "@/components/ui/card";
import { StakingStats } from "./staking-stats";
import { StakingCalculator } from "./staking-calculator";
import { StakingInstructions } from "./staking-instructions";
import { StakingForm } from "./staking-form";

export function StakingDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">$MAG Staking</h1>
      <StakingStats />
      <div className="grid md:grid-cols-2 gap-6">
        <StakingForm />
        <StakingCalculator />
      </div>
      <StakingInstructions />
    </div>
  );
}
