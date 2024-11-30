'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
}

const SidebarMenuItem = React.forwardRef<HTMLLIElement, SidebarMenuItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn("list-none", className)}
        {...props}
      >
        {children}
      </li>
    );
  }
);

SidebarMenuItem.displayName = 'SidebarMenuItem';

export { SidebarMenuItem };