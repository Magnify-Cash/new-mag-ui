'use client';

import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function StakingInstructions() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">How to Stake</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="step-1">
          <AccordionTrigger>1. Connect Your Wallet</AccordionTrigger>
          <AccordionContent>
            Click the "Connect Wallet" button in the top right corner and select your wallet provider.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="step-2">
          <AccordionTrigger>2. Choose Amount</AccordionTrigger>
          <AccordionContent>
            Enter the amount of MAG you want to stake. Remember the minimum is 100 MAG.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="step-3">
          <AccordionTrigger>3. Approve Transaction</AccordionTrigger>
          <AccordionContent>
            Approve the transaction in your wallet and wait for confirmation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="step-4">
          <AccordionTrigger>4. Start Earning</AccordionTrigger>
          <AccordionContent>
            Once confirmed, your MAG will be staked and you'll start earning rewards immediately.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}