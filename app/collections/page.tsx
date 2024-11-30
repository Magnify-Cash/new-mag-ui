'use client';

import Dashboard from '@/components/dashboard/dashboard';
import { Card } from '@/components/ui/card';

export default function CollectionsPage() {
  return (
    <Dashboard>
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Collections</h1>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Featured Collections</h2>
            <p className="text-muted-foreground">
              Explore curated NFT collections
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Top Performing</h2>
            <p className="text-muted-foreground">
              View collections with highest loan volume
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Recently Added</h2>
            <p className="text-muted-foreground">
              Discover new collections
            </p>
          </Card>
        </div>
      </div>
    </Dashboard>
  );
}