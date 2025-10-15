import { TrendingUp, TrendingDown } from "lucide-react";

const MarketTicker = () => {
  const markets = [
    { name: "Sensex", value: "73,458.42", change: "+0.54%", isPositive: true },
    { name: "Nifty50", value: "22,219.35", change: "-0.33%", isPositive: false },
    { name: "Dow Jones", value: "38,503.25", change: "+1.10%", isPositive: true },
    { name: "NASDAQ", value: "15,278.27", change: "-0.20%", isPositive: false },
  ];

  return (
    <div className="bg-navy-light text-white py-4 border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-start gap-8 overflow-x-auto scrollbar-hide">
          {markets.map((market, index) => (
            <div key={index} className="flex items-center gap-4 whitespace-nowrap group hover:scale-105 transition-transform">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity">{market.name}</span>
                <span className="font-bold text-base">{market.value}</span>
              </div>
              <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                market.isPositive ? "bg-positive/20 text-positive-light" : "bg-negative/20 text-negative-light"
              }`}>
                {market.isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {market.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketTicker;
