'use client';

import { Search } from 'lucide-react';
import { Label } from '@/components/ui/label';
import {
  SidebarHeader as Header,
  SidebarInput,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { VersionSelector } from './version-selector';

export function SidebarHeader() {
  return (
    <Header>
      <SidebarMenu>
        <SidebarMenuItem>
          <VersionSelector />
        </SidebarMenuItem>
      </SidebarMenu>
      <div className="px-4 py-2">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Label htmlFor="sidebar-search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="sidebar-search"
            type="search"
            placeholder="Search..."
            className="w-full pl-10"
          />
        </div>
      </div>
    </Header>
  );
}