import * as React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const SidebarContext = React.createContext<SidebarContextType | undefined>(
  undefined
);

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Sidebar({ children, className, ...props }: SidebarProps) {
  const { isOpen } = useSidebar();
  return (
    <div
      className={cn(
        "flex h-screen w-64 flex-col border-r bg-background transition-all duration-300",
        !isOpen && "w-16",
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
    <div className={cn("space-y-2", className)} {...props}>
      {children}
    </div>
  );
}

export function SidebarContent({
  children,
  className,
  ...props
}: SidebarProps) {
  return (
    <div className={cn("flex-1 overflow-y-auto py-2", className)} {...props}>
      {children}
    </div>
  );
}

export function SidebarGroup({ children, className, ...props }: SidebarProps) {
  return (
    <div className={cn("py-2", className)} {...props}>
      {children}
    </div>
  );
}

export function SidebarGroupLabel({
  children,
  className,
  ...props
}: SidebarProps) {
  const { isOpen } = useSidebar();
  if (!isOpen) return null;
  return (
    <div
      className={cn(
        "px-4 py-2 text-xs font-medium text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function SidebarGroupContent({
  children,
  className,
  ...props
}: SidebarProps) {
  return (
    <div className={cn("space-y-1", className)} {...props}>
      {children}
    </div>
  );
}

export function SidebarMenu({ children, className, ...props }: SidebarProps) {
  return (
    <div className={cn("px-2", className)} {...props}>
      {children}
    </div>
  );
}

export function SidebarMenuItem({
  children,
  className,
  ...props
}: SidebarProps) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

interface SidebarMenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  isActive?: boolean;
  size?: "default" | "lg";
}

export const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(
  (
    {
      className,
      children,
      asChild = false,
      isActive,
      size = "default",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "sidebar-menu-button",
          size === "lg" && "p-3",
          isActive &&
            "bg-primary text-primary-foreground hover:bg-primary-muted",
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

SidebarMenuButton.displayName = "SidebarMenuButton";

export function SidebarInput({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn("search-input", className)} {...props} />;
}

export function SidebarTrigger({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { isOpen, setIsOpen } = useSidebar();
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground",
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

export function SidebarRail() {
  return <div className="w-1 bg-secondary" />;
}
