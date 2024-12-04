import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function StakingCalculator() {
  const [amount, setAmount] = useState("1000");
  const [duration, setDuration] = useState("12");
  const apy = 12.5;

  const calculateRewards = () => {
    const principal = parseFloat(amount);
    const months = parseFloat(duration);
    const yearlyReward = principal * (apy / 100);
    const monthlyReward = yearlyReward / 12;
    return (monthlyReward * months).toFixed(2);
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Rewards Calculator</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="stake-amount">Stake Amount (MAG)</Label>
          <Input
            id="stake-amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="stake-duration">Duration (Months)</Label>
          <Input
            id="stake-duration"
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="pt-4">
          <div className="text-lg font-semibold">Estimated Rewards</div>
          <div className="text-3xl font-bold text-primary">
            {calculateRewards()} MAG
          </div>
          <div className="text-sm text-muted-foreground">
            Based on current APY of {apy}%
          </div>
        </div>
      </div>
    </Card>
  );
}
