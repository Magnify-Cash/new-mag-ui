import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface SidebarMenuButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  size?: "default" | "lg";
  isActive?: boolean;
}

const SidebarMenuButton = React.forwardRef<
  HTMLDivElement,
  SidebarMenuButtonProps
>(
  (
    { asChild = false, className, size = "default", isActive, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        className={cn(
          "flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
          "hover:bg-secondary/70 focus:outline-none focus:ring-2 focus:ring-primary/20",
          size === "lg" && "py-3",
          isActive &&
            "bg-primary text-primary-foreground hover:bg-primary-muted",
          className
        )}
        role="button"
        tabIndex={0}
        {...props}
      />
    );
  }
);

SidebarMenuButton.displayName = "SidebarMenuButton";

export { SidebarMenuButton };
