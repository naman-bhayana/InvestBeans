import { Button } from "@/components/ui/button";
import { useAuth } from "@/controllers/AuthContext";
import { useNavigate } from "react-router-dom";
import StockWidget from "./StockWidget";

const DashboardView: React.FC = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(() => navigate("/"));
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="bg-card border border-border rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-2">
          Live Stock Dashboard
        </h1>
        <p className="text-muted-foreground mb-6">
          Real-time NSE & US stock data.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StockWidget symbol="RELIANCE" market="NSE" />
          <StockWidget symbol="TCS" market="NSE" />
          <StockWidget symbol="AAPL" market="US" />
          <StockWidget symbol="TSLA" market="US" />
        </div>
        <Button className="mt-6" onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default DashboardView;
