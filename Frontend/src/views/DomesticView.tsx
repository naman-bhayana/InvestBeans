import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MarketCard from "@/components/MarketCard";

const DomesticView = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Indian Stocks Charts</h1>
        <Select defaultValue="dashboard">
          <SelectTrigger className="w-80">
            <SelectValue placeholder="InvestBeans Equity / US Stocks Live Dashboard" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dashboard">InvestBeans Equity / US Stocks Live Dashboard</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MarketCard name="Nifty50" value="22,142.30" change="−72.10" percentage="−0.33%" isPositive={false} />
        <MarketCard name="Sensex" value="73,276.64" change="+394.25" percentage="+0.54%" isPositive={true} />
      </div>
    </div>
  );
};

export default DomesticView;


