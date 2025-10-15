import { TrendingUp, TrendingDown } from "lucide-react";

const MarketTicker = () => {
  const markets = [
    { name: "Sensex", value: "73,458.42", change: "+0.54%", isPositive: true },
    { name: "Nifty 50", value: "22,219.35", change: "-0.33%", isPositive: false },
    { name: "Nifty 100", value: "21,102.45", change: "+0.53%", isPositive: true },
    { name: "Nifty 200", value: "12,345.67", change: "-0.20%", isPositive: false },
    { name: "Dow Jones", value: "38,503.25", change: "+1.10%", isPositive: true },
    { name: "Nasdaq", value: "15,278.27", change: "-0.20%", isPositive: false },
    { name: "S&P 500", value: "5,250.12", change: "+0.38%", isPositive: true },
    { name: "Russell 2000", value: "2,050.30", change: "+0.26%", isPositive: true },
    { name: "FTSE 100", value: "7,623.45", change: "-0.12%", isPositive: false },
    { name: "DAX", value: "18,145.20", change: "+0.41%", isPositive: true },
    { name: "Nikkei 225", value: "39,102.10", change: "+0.22%", isPositive: true },
    { name: "SSE Composite", value: "3,045.60", change: "-0.18%", isPositive: false },
  ];

  const row = (
    <div className="marquee-track flex items-center gap-8">
      {markets.map((market, index) => (
        <div key={`${market.name}-${index}`} className="flex items-center gap-4 whitespace-nowrap group hover:scale-105 transition-transform">
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
  );

  return (
    <div className="bg-navy-light text-white py-4 border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="marquee overflow-hidden pause-on-hover">
          <div className="marquee-content flex items-center gap-8">
            {row}
            {row}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketTicker;
