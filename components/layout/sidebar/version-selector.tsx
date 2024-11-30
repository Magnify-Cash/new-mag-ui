'use client';

import * as React from 'react';
import { Check, ChevronsUpDown, GalleryVerticalEnd } from 'lucide-react';
import { ClientButton, ClientDropdown, ClientMenuItem } from '@/components/ui/sidebar/client-components';
import { navigationData } from '@/lib/navigation-data';

export function VersionSelector() {
  const [selectedVersion, setSelectedVersion] = React.useState(navigationData.networks[0]);

  return (
    <ClientDropdown
      trigger={
        <ClientButton className="w-full py-3">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-semibold">Dashboard</span>
            <span className="text-muted-foreground">{selectedVersion}</span>
          </div>
          <ChevronsUpDown className="ml-auto size-4" />
        </ClientButton>
      }
      className="w-[--radix-dropdown-menu-trigger-width]"
    >
      {navigationData.networks.map((version) => (
        <ClientMenuItem
          key={version}
          onClick={() => setSelectedVersion(version)}
          className="justify-between"
        >
          {version}
          {version === selectedVersion && <Check className="ml-auto size-4" />}
        </ClientMenuItem>
      ))}
    </ClientDropdown>
  );
}