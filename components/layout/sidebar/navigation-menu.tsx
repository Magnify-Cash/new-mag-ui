'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ClientButton } from '@/components/ui/sidebar/client-components';
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { navigationData } from '@/lib/navigation-data';
import { cn } from '@/lib/utils';

export function NavigationMenu() {
  const pathname = usePathname();

  return (
    <SidebarContent>
      {navigationData.navMain.map((section) => (
        <SidebarGroup key={section.title}>
          <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {section.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <ClientButton asChild>
                    <Link 
                      href={item.url}
                      className={cn(
                        "w-full",
                        pathname === item.url && "bg-primary text-primary-foreground hover:bg-primary-muted"
                      )}
                    >
                      {item.title}
                    </Link>
                  </ClientButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </SidebarContent>
  );
}