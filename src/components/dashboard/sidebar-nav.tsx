import * as React from "react";
import { Link, useLocation } from "react-router";
import {
  Wallet,
  Search,
  ChevronsUpDown,
  Check,
  LayoutDashboard,
  Banknote,
  Grid3X3,
  Plus,
  Settings,
  HelpCircle,
  Book,
  Users,
  Droplets,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navigationData } from "@/lib/navigation-data";

const iconMap = {
  Dashboard: <LayoutDashboard className="size-4" />,
  "Get Quick Loan": <Banknote className="size-4" />,
  "Browse Collections": <Grid3X3 className="size-4" />,
  "Create Lending Desk": <Plus className="size-4" />,
  "Manage Lending Desks": <Settings className="size-4" />,
  Support: <HelpCircle className="size-4" />,
  Documentation: <Book className="size-4" />,
  Community: <Users className="size-4" />,
  "Testnet Faucet": <Droplets className="size-4" />,
};

export function SidebarNav() {
  const location = useLocation();
  const [selectedNetwork, setSelectedNetwork] = React.useState(
    navigationData.networks[0]
  );
  const isTestnet = selectedNetwork === "Testnet";

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-secondary">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <SidebarMenuButton size="lg" className="w-full">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Wallet className="size-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold">Magnify.Cash</span>
                    <span className="text-accent">{selectedNetwork}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-[--radix-dropdown-menu-trigger-width]"
              >
                {navigationData.networks.map((network) => (
                  <DropdownMenuItem
                    key={network}
                    onSelect={() => setSelectedNetwork(network)}
                  >
                    {network}{" "}
                    {network === selectedNetwork && (
                      <Check className="ml-auto size-4" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="px-4 py-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <SidebarInput
              type="search"
              placeholder="Search..."
              className="w-full pl-10 bg-secondary/50"
            />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {navigationData.navMain.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <Link to={item.url} className="w-full">
                      <SidebarMenuButton
                        isActive={location.pathname === item.url}
                        className="flex items-center gap-3"
                      >
                        {iconMap[item.title]}
                        {item.title}
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        {isTestnet &&
          navigationData.testnetOnly.map((section) => (
            <SidebarGroup key={section.title}>
              <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {section.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <Link to={item.url} className="w-full">
                        <SidebarMenuButton
                          isActive={location.pathname === item.url}
                          className="flex items-center gap-3"
                        >
                          {iconMap[item.title]}
                          {item.title}
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
