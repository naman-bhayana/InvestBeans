import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarketTicker from "@/components/MarketTicker";
import MarketCard from "@/components/MarketCard";
import InsightCard from "@/components/InsightCard";
import DeepDiveCard from "@/components/DeepDiveCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lightbulb, Mail, Sparkles } from "lucide-react";
import { useAuth } from "@/controllers/AuthContext";
import StockWidget from "./StockWidget";


type ActiveTab = "domestic" | "global";

type HomeViewProps = {
  activeTab: ActiveTab;
  onChangeTab: (tab: ActiveTab) => void;
};

const HomeView = ({ activeTab, onChangeTab }: HomeViewProps) => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <MarketTicker />

      <main className="container mx-auto px-6 py-16">
        {isAuthenticated && (
          <section className="mb-20 animate-fade-in">
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-foreground mb-2">
                InvestBeans Live Premium Charts
              </h2>
              <p className="text-muted-foreground">
                Exclusive charts for subscribers
              </p>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-72 border border-border rounded-xl bg-background/50" />
              <div className="h-72 border border-border rounded-xl bg-background/50" />
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StockWidget symbol="RELIANCE" market="NSE" />
              <StockWidget symbol="TCS" market="NSE" />
              <StockWidget symbol="AAPL" market="US" />
              <StockWidget symbol="TSLA" market="US" />
            </div>
          </section>
        )}
        {/* Live Dashboard */}
        <section className="mb-20 animate-fade-in">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">
                Live Dashboard
              </h2>
              <p className="text-muted-foreground">
                Real-time market data at your fingertips
              </p>
            </div>
            <div className="flex gap-2 bg-card p-1 rounded-lg border border-border shadow-sm">
              <Button
                variant={activeTab === "domestic" ? "default" : "ghost"}
                size="sm"
                onClick={() => onChangeTab("domestic")}
                className="transition-all"
              >
                Domestic
              </Button>
              <Button
                variant={activeTab === "global" ? "default" : "ghost"}
                size="sm"
                onClick={() => onChangeTab("global")}
                className="transition-all"
              >
                Global
              </Button>
            </div>
          </div>
          {activeTab === "domestic" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <MarketCard
                name="Nifty 50"
                value="22,142.30"
                change="−72.10"
                percentage="−0.33%"
                isPositive={false}
              />
              <MarketCard
                name="Sensex"
                value="73,276.64"
                change="+394.25"
                percentage="+0.54%"
                isPositive={true}
              />
              <MarketCard
                name="Nifty 100"
                value="21,102.45"
                change="+112.20"
                percentage="+0.53%"
                isPositive={true}
              />
              <MarketCard
                name="Nifty 200"
                value="12,345.67"
                change="−25.10"
                percentage="−0.20%"
                isPositive={false}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <MarketCard
                name="Dow Jones"
                value="38,503.25"
                change="+417.09"
                percentage="+1.10%"
                isPositive={true}
              />
              <MarketCard
                name="Nasdaq"
                value="15,278.27"
                change="−91.51"
                percentage="−0.20%"
                isPositive={false}
              />
              <MarketCard
                name="S&P 500"
                value="5,250.12"
                change="+20.15"
                percentage="+0.38%"
                isPositive={true}
              />
              <MarketCard
                name="Russell 2000"
                value="2,050.30"
                change="+5.40"
                percentage="+0.26%"
                isPositive={true}
              />
            </div>
          )}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-card rounded-lg p-4 border border-border">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Last Updated: 24/04/2024 - 10:45 AM</span>
          </div>
        </section>
        {/* <LiveDashboardPage/> */}

        {/* Decode the Market */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-foreground mb-3">
              Decode the Market
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert insights and analysis to help you understand market
              movements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InsightCard
              title="Why Nifty50 dipped despite strong earnings?"
              description="Weakness in global markets and profit booking in certain sectors. Read More"
            />
            <InsightCard
              title="Is it the right time to invest in Sensex stocks?"
              description="Wondering about equi youngs might be particular- valuation Interest rates' outlooks."
            />
            <InsightCard
              title="How global cues are shaping domestic indices"
              description="Recent movements in U.S markets and Federal Reserve. policy impact on domestic indess."
            />
          </div>
        </section>

        {/* Beans of Wisdom */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-foreground mb-3">
              Beans of Wisdom
            </h2>
            <p className="text-muted-foreground">
              Quick bites of investment knowledge
            </p>
          </div>
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20 hover:shadow-xl transition-all duration-300 animate-slide-up">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-accent to-accent/80 p-4 rounded-xl shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  What is EPS and why it matters?
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Earnings Per Share (EPS) represents a company's profitability
                  divided by the number of outstanding shares. It's a key metric
                  investors use to gauge a company's financial health and growth
                  potential.
                </p>
                <Button className="mt-4 bg-accent hover:bg-accent/90 text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dives */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-foreground mb-3">
              Deep Dives
            </h2>
            <p className="text-muted-foreground">
              In-depth analysis and market forecasts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DeepDiveCard
              title="Sensex 3025 Forecast: What Analysts Predict"
              date="April 22, 2024"
              icon="chart"
            />
            <DeepDiveCard
              title="US inflation & Its Impact on Indian Markets"
              date="April 18, 2024"
              icon="globe"
            />
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="relative overflow-hidden">
          <div className="gradient-accent rounded-2xl p-10 md:p-12 relative animate-scale-in">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Ahead in the Market
              </h3>
              <p className="text-white/90 text-lg mb-8">
                Subscribe for daily insights, market trends, and expert analysis
                delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/90 border-0 text-navy placeholder:text-navy/60 h-12 text-base"
                />
                <Button className="bg-navy hover:bg-navy-light text-white font-semibold h-12 px-8 shadow-lg hover:shadow-xl transition-all">
                  Subscribe
                </Button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                Join 50,000+ investors getting daily market insights
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomeView;
