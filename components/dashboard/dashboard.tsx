'use client';

import { SidebarNav } from '@/components/dashboard/sidebar-nav';
import { Header } from '@/components/dashboard/header';
import { SidebarProvider } from '@/components/ui/sidebar';

interface DashboardProps {
  children?: React.ReactNode;
}

export default function Dashboard({ children }: DashboardProps) {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <SidebarNav />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 bg-secondary/30">
            {children || <div className="flex-1 overflow-y-auto" />}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}