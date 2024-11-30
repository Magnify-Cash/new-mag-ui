'use client';

import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { InfoIcon } from 'lucide-react';

export function SwapForm() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Swap $MAG</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="from-amount">From</Label>
          <Input id="from-amount" type="number" placeholder="Enter amount" />
        </div>
        <div>
          <Label htmlFor="to-amount">To</Label>
          <Input id="to-amount" type="number" placeholder="You receive" readOnly />
        </div>
        <Button className="w-full">Swap</Button>
      </div>
    </Card>
  );
}