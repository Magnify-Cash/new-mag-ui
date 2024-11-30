'use client';

import Dashboard from '@/components/dashboard/dashboard';
import { Card } from '@/components/ui/card';

export default function CommunityPage() {
  return (
    <Dashboard>
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Community</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Discussion Forum</h2>
            <p className="text-muted-foreground">
              Join conversations with other users
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Social Media</h2>
            <p className="text-muted-foreground">
              Follow us on social platforms
            </p>
          </Card>
        </div>
      </div>
    </Dashboard>
  );
}