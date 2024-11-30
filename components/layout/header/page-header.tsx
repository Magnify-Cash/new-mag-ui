'use client';

import { usePathname } from 'next/navigation';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { BreadcrumbNav } from './breadcrumb-nav';
import { getPageNameFromPath } from '@/lib/utils/navigation';

export function PageHeader() {
  const pathname = usePathname();
  const pageName = getPageNameFromPath(pathname);

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <BreadcrumbNav pageName={pageName} />
    </header>
  );
}