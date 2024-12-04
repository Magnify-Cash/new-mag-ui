import { Sidebar, SidebarRail } from "@/components/ui/sidebar";
import { SidebarHeader } from "./sidebar-header";
import { NavigationMenu } from "./navigation-menu";

export function SidebarNav() {
  return (
    <Sidebar>
      <SidebarHeader />
      <NavigationMenu />
      <SidebarRail />
    </Sidebar>
  );
}
