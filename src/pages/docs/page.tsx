import Dashboard from "@/components/dashboard/dashboard";
import { Card } from "@/components/ui/card";

export default function DocumentationPage() {
  return (
    <Dashboard>
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Documentation</h1>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
            <p className="text-muted-foreground">
              Learn the basics of our platform
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">API Reference</h2>
            <p className="text-muted-foreground">
              Explore our API documentation
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Guides</h2>
            <p className="text-muted-foreground">Step-by-step tutorials</p>
          </Card>
        </div>
      </div>
    </Dashboard>
  );
}
