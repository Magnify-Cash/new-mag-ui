import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface SidebarButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  isActive?: boolean;
}

export const SidebarButton = React.forwardRef<
  HTMLButtonElement,
  SidebarButtonProps
>(({ className, children, asChild = false, isActive, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      className={cn(
        "flex w-full items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
        "hover:bg-secondary/70 focus:outline-none focus:ring-2 focus:ring-primary/20",
        isActive && "bg-primary text-primary-foreground hover:bg-primary-muted",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
});

SidebarButton.displayName = "SidebarButton";
