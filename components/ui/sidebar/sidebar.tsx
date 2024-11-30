'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { useSidebar } from './sidebar-context';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Sidebar({ children, className, ...props }: SidebarProps) {
  const { isOpen } = useSidebar();
  
  return (
    <div
      className={cn(
        'flex h-screen w-64 flex-col border-r bg-background transition-all duration-300',
        !isOpen && 'w-16',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function SidebarHeader({ children, className, ...props }: SidebarProps) {
  return (
    <div className={cn('space-y-2', className)} {...props}>
      {children}
    </div>
  );
}

export function SidebarContent({ children, className, ...props }: SidebarProps) {
  return (
    <div className={cn('flex-1 overflow-y-auto py-2', className)} {...props}>
      {children}
    </div>
  );
}

export function SidebarGroup({ children, className, ...props }: SidebarProps) {
  return (
    <div className={cn('py-2', className)} {...props}>
      {children}
    </div>
  );
}

export function SidebarGroupLabel({ children, className, ...props }: SidebarProps) {
  const { isOpen } = useSidebar();
  if (!isOpen) return null;
  return (
    <div className={cn('px-4 py-2 text-xs font-medium text-muted-foreground', className)} {...props}>
      {children}
    </div>
  );
}

export function SidebarGroupContent({ children, className, ...props }: SidebarProps) {
  return (
    <div className={cn('space-y-1', className)} {...props}>
      {children}
    </div>
  );
}

export function SidebarMenu({ children, className, ...props }: SidebarProps) {
  return (
    <div className={cn('px-2', className)} {...props}>
      {children}
    </div>
  );
}

export function SidebarMenuItem({ children, className, ...props }: SidebarProps) {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  );
}

export function SidebarTrigger({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { isOpen, setIsOpen } = useSidebar();
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        'inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground',
        className
      )}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </button>
  );
}