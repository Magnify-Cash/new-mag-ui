import { Link, useLocation } from "react-router";
import { ClientButton } from "@/components/ui/sidebar/client-components";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { navigationData } from "@/lib/navigation-data";
import { cn } from "@/lib/utils";

export function NavigationMenu() {
  // Replace usePathname with useLocation from react-router-dom
  const location = useLocation();
  const pathname = location.pathname;

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
                      to={item.url} // Change 'href' to 'to'
                      className={cn(
                        "w-full",
                        pathname === item.url && "bg-primary text-primary-foreground hover:bg-primary-muted",
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
