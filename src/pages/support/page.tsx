import Dashboard from "@/components/dashboard/dashboard";
import { Card } from "@/components/ui/card";

export default function SupportPage() {
  return (
    <Dashboard>
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Support</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Help Center</h2>
            <p className="text-muted-foreground">
              Browse our knowledge base and FAQs
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
            <p className="text-muted-foreground">
              Get in touch with our support team
            </p>
          </Card>
        </div>
      </div>
    </Dashboard>
  );
}
