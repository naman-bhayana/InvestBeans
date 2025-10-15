import { Button } from "@/components/ui/button";
import { useAuth } from "@/controllers/AuthContext";

const DashboardView = () => {
  const { signOut } = useAuth();
  return (
    <div className="container mx-auto px-6 py-10">
      <div className="bg-card border border-border rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-2">InvestBeans Equity / US Stocks Live Dashboard</h1>
        <p className="text-muted-foreground mb-6">Premium section. Placeholder charts/tables go here.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-72 border border-border rounded-lg bg-background/50" />
          <div className="h-72 border border-border rounded-lg bg-background/50" />
        </div>
        <Button className="mt-6" onClick={signOut}>Sign Out</Button>
      </div>
    </div>
  );
};

export default DashboardView;


