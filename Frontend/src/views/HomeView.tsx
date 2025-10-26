import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import MarketCard from "@/components/MarketCard";
import InsightCard from "@/components/InsightCard";
import DeepDiveCard from "@/components/DeepDiveCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Lightbulb,
  Mail,
  Sparkles,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Activity,
} from "lucide-react";
import { useAuth } from "@/controllers/AuthContext";
import StockWidget from "./StockWidget";
import DummyChart from "@/components/DummyChart";

type ActiveTab = "domestic" | "global";

type HomeViewProps = {
  activeTab: ActiveTab;
  onChangeTab: (tab: ActiveTab) => void;
};

const HomeView = ({ activeTab, onChangeTab }: HomeViewProps) => {
  const { isAuthenticated } = useAuth();
  return (
    <Layout>
      <Hero />

      <div className="container mx-auto px-6 py-16">
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
        <section className="mb-20 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 rounded-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent/8 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-2xl"></div>

          <div className="relative z-10">
            {/* Enhanced Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
              <div className="mb-6 md:mb-0">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 mb-4">
                  <Activity className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">
                    Live Data
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-3">
                  Live Dashboard
                </h2>
                <p className="text-lg text-muted-foreground">
                  Real-time market data and interactive charts at your
                  fingertips
                </p>
              </div>
              <div className="flex gap-2 bg-card/50 backdrop-blur-sm p-1 rounded-lg border border-border/50 shadow-lg">
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

            {/* Market Cards */}
            {activeTab === "domestic" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

            {/* Interactive Charts Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Market Performance Charts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <DummyChart
                  title="Nifty 50 Trend"
                  value="22,142.30"
                  change="−0.33%"
                  isPositive={false}
                  chartType="line"
                  data={[65, 70, 68, 75, 80, 78, 85, 82, 88, 90, 87, 85]}
                />
                <DummyChart
                  title="Sector Performance"
                  value="+2.4%"
                  change="+2.4%"
                  isPositive={true}
                  chartType="bar"
                  data={[45, 52, 48, 61, 55, 67, 58, 72]}
                />
                <DummyChart
                  title="Volume Analysis"
                  value="1.2B"
                  change="+15.2%"
                  isPositive={true}
                  chartType="area"
                  data={[30, 35, 32, 40, 38, 45, 42, 48, 46, 50, 47, 52]}
                />
              </div>
            </div>

            {/* Status Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 shadow-lg">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Last Updated: 24/04/2024 - 10:45 AM</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 font-medium">Live</span>
              </div>
            </div>
          </div>
        </section>
        {/* <LiveDashboardPage/> */}

        {/* Decode the Market */}

        <section className="mb-20 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 rounded-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-2xl"></div>

          <div className="relative z-10">
            {/* Enhanced Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 mb-4 md:mb-6">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                <span className="text-xs md:text-sm font-medium text-accent">
                  Market Intelligence
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-3 md:mb-4 px-4">
                Decode the Market
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                Expert insights and analysis to help you understand market
                movements and make informed investment decisions
              </p>
            </div>

            {/* Mobile/Tablet: Tab-based view */}
            <div className="block lg:hidden px-4">
              {/* Mobile Tabs */}
              <div className="flex gap-2 bg-card/50 backdrop-blur-sm p-1 rounded-lg border border-border/50 shadow-lg mb-8 max-w-md mx-auto">
                <Button
                  variant={activeTab === "domestic" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onChangeTab("domestic")}
                  className="flex-1 transition-all"
                >
                  Domestic
                </Button>
                <Button
                  variant={activeTab === "global" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onChangeTab("global")}
                  className="flex-1 transition-all"
                >
                  Global
                </Button>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {activeTab === "domestic" ? (
                  <>
                    <InsightCard
                      title="Why Nifty50 dipped despite strong earnings?"
                      description="Weakness in global markets and profit booking in certain sectors. Our analysts break down the key factors."
                      sentiment="negative"
                      readTime="4 min read"
                      views={2847}
                      category="Domestic Analysis"
                    />
                    <InsightCard
                      title="Is it the right time to invest in Sensex stocks?"
                      description="Wondering about equity valuations and interest rate outlooks for domestic markets. We analyze current conditions."
                      sentiment="positive"
                      readTime="5 min read"
                      views={1923}
                      category="Investment Strategy"
                    />
                    <InsightCard
                      title="Banking sector shows resilience amid volatility"
                      description="Major banks report strong quarterly results with improved asset quality. Understanding the banking sector's performance."
                      sentiment="positive"
                      readTime="5 min read"
                      views={2134}
                      category="Sector Analysis"
                    />
                    <InsightCard
                      title="IT stocks face headwinds from global slowdown"
                      description="Tech companies signal cautious outlook as deal pipelines shrink. Analysis of challenges facing India's IT sector."
                      sentiment="negative"
                      readTime="6 min read"
                      views={1876}
                      category="Technology"
                    />
                    <InsightCard
                      title="Commodity prices impact manufacturing margins"
                      description="Rising input costs squeeze profitability across sectors. How manufacturers are adapting to the changing cost structure."
                      sentiment="neutral"
                      readTime="5 min read"
                      views={1654}
                      category="Manufacturing"
                    />
                  </>
                ) : (
                  <>
                    <InsightCard
                      title="How global cues are shaping domestic indices"
                      description="Recent movements in U.S markets and Federal Reserve policy impact on global markets. Understanding the interconnectedness."
                      sentiment="neutral"
                      readTime="6 min read"
                      views={3456}
                      category="Global Markets"
                    />
                    <InsightCard
                      title="International market volatility and its effects"
                      description="Understanding how global economic events influence investment decisions worldwide. A comprehensive analysis of market dynamics."
                      sentiment="negative"
                      readTime="7 min read"
                      views={2134}
                      category="Market Volatility"
                    />
                    <InsightCard
                      title="Fed rate decisions reshape investment strategies"
                      description="Central bank policies drive market sentiment globally. Expert analysis on how to position your portfolio in this environment."
                      sentiment="neutral"
                      readTime="8 min read"
                      views={2987}
                      category="Monetary Policy"
                    />
                    <InsightCard
                      title="Emerging markets show diverging trends"
                      description="Capital flows shift as investors reassess risk appetite. Which emerging markets are poised for growth in the coming quarters?"
                      sentiment="positive"
                      readTime="6 min read"
                      views={2456}
                      category="Emerging Markets"
                    />
                    <InsightCard
                      title="Currency fluctuations impact export-heavy sectors"
                      description="Dollar strength creates challenges and opportunities. Navigating forex volatility in your investment strategy for better returns."
                      sentiment="neutral"
                      readTime="7 min read"
                      views={1987}
                      category="Currency Markets"
                    />
                  </>
                )}
              </div>
            </div>

            {/* Desktop: Enhanced side-by-side layout */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-8 xl:gap-12 px-4">
              {/* Domestic News */}
              <div className="space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/5 border border-green-200/50 mb-4">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-700">
                      Domestic Market Insights
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    Indian Markets
                  </h3>
                  <p className="text-muted-foreground">
                    Analysis of NSE, BSE, and sectoral performance
                  </p>
                </div>
                <div className="space-y-6">
                  <InsightCard
                    title="Why Nifty50 dipped despite strong earnings?"
                    description="Weakness in global markets and profit booking in certain sectors. Our analysts break down the key factors driving this unexpected movement."
                    sentiment="negative"
                    readTime="4 min read"
                    views={2847}
                    category="Domestic Analysis"
                  />
                  <InsightCard
                    title="Is it the right time to invest in Sensex stocks?"
                    description="Wondering about equity valuations and interest rate outlooks for domestic markets. We analyze current market conditions."
                    sentiment="positive"
                    readTime="5 min read"
                    views={1923}
                    category="Investment Strategy"
                  />
                  <InsightCard
                    title="Banking sector shows resilience amid volatility"
                    description="Major banks report strong quarterly results with improved asset quality. Understanding the factors behind the banking sector's performance."
                    sentiment="positive"
                    readTime="5 min read"
                    views={2134}
                    category="Sector Analysis"
                  />
                  <InsightCard
                    title="IT stocks face headwinds from global slowdown"
                    description="Tech companies signal cautious outlook as deal pipelines shrink. Analysis of the challenges facing India's IT sector."
                    sentiment="negative"
                    readTime="6 min read"
                    views={1876}
                    category="Technology"
                  />
                  <InsightCard
                    title="Commodity prices impact manufacturing margins"
                    description="Rising input costs squeeze profitability across sectors. How manufacturers are adapting to the changing cost structure."
                    sentiment="neutral"
                    readTime="5 min read"
                    views={1654}
                    category="Manufacturing"
                  />
                </div>
              </div>

              {/* Global News */}
              <div className="space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/5 border border-blue-200/50 mb-4">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-700">
                      Global Market Insights
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    International Markets
                  </h3>
                  <p className="text-muted-foreground">
                    Global economic trends and their impact on investments
                  </p>
                </div>
                <div className="space-y-6 ">
                  <InsightCard
                    title="How global cues are shaping domestic indices"
                    description="Recent movements in U.S markets and Federal Reserve policy impact on global markets. Understanding the interconnectedness of global financial markets."
                    sentiment="neutral"
                    readTime="6 min read"
                    views={3456}
                    category="Global Markets"
                  />
                  <InsightCard
                    title="International market volatility and its effects"
                    description="Understanding how global economic events influence investment decisions worldwide. A comprehensive analysis of current market dynamics."
                    sentiment="negative"
                    readTime="7 min read"
                    views={2134}
                    category="Market Volatility"
                  />
                  <InsightCard
                    title="Fed rate decisions reshape investment strategies"
                    description="Central bank policies drive market sentiment globally. Expert analysis on how to position your portfolio in this environment."
                    sentiment="neutral"
                    readTime="8 min read"
                    views={2987}
                    category="Monetary Policy"
                  />
                  <InsightCard
                    title="Emerging markets show diverging trends"
                    description="Capital flows shift as investors reassess risk appetite. Which emerging markets are poised for growth in the coming quarters?"
                    sentiment="positive"
                    readTime="6 min read"
                    views={2456}
                    category="Emerging Markets"
                  />
                  <InsightCard
                    title="Currency fluctuations impact export-heavy sectors"
                    description="Dollar strength creates challenges and opportunities. Navigating forex volatility in your investment strategy for better returns."
                    sentiment="neutral"
                    readTime="7 min read"
                    views={1987}
                    category="Currency Markets"
                  />
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 md:mt-16 text-center px-4">
              <div className="inline-flex items-center gap-2 px-4 md:px-6 py-3 rounded-full bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/30 transition-all duration-300 cursor-pointer group touch-manipulation active:scale-95">
                <span className="text-accent font-semibold text-sm md:text-base">
                  View All Market Insights
                </span>
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-accent group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </section>

        {/* Beans of Wisdom */}
        <section className="mb-20 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-amber-50/20 rounded-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-100/15 to-transparent rounded-full blur-2xl"></div>

          <div className="relative z-10">
            {/* Enhanced Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/5 border border-orange-200/50 mb-6">
                <Lightbulb className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-700">
                  Daily Wisdom
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
                Beans of Wisdom
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Daily insights and timeless investment principles
              </p>
            </div>

            {/* Main Wisdom Card */}
            <div className="max-w-4xl mx-auto">
              {/* Orange Banner */}
              <div className="relative mb-8">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-t-2xl p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      One Bean of Wisdom!
                    </h3>
                    <p className="text-orange-100">
                      Today's investment insight
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Content Card */}
              <div className="bg-gradient-to-br from-white to-orange-50/30 rounded-2xl border border-orange-200/30 shadow-xl hover:shadow-2xl transition-all duration-500 p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Left Side - Karma Concept */}
                  <div className="lg:col-span-1">
                    <div className="flex flex-col items-center text-center space-y-4">
                      {/* Yin-Yang Symbol */}
                      <div className="relative w-24 h-24">
                        <div className="w-24 h-24 rounded-full border-4 border-blue-600 relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-12 h-12 bg-blue-600 rounded-full"></div>
                          <div className="absolute bottom-0 right-0 w-12 h-12 bg-white rounded-full"></div>
                          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                          <div className="absolute top-1/2 right-1/2 w-4 h-4 bg-blue-600 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-2">
                          Karma: The Universe Never Forgets
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Every action has a result — good or bad — even if it
                          comes later.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center - Main Wisdom Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-orange-200/50">
                      <h5 className="text-lg font-bold text-foreground mb-4">
                        Investment Karma
                      </h5>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Every trade, decision, or risk carries its karma.
                        Shortcuts and greed may work temporarily, but over time
                        markets reward discipline and punish recklessness.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-orange-600 font-medium">
                        <span>Key Principle:</span>
                        <span>Patience & Discipline</span>
                      </div>
                    </div>

                    {/* Bottom Quote */}
                    <div className="text-center bg-gradient-to-r from-orange-50 to-transparent rounded-lg p-4 border-l-4 border-orange-400">
                      <p className="text-lg italic text-foreground/80 font-medium">
                        "In both karma and investing, you reap exactly what you
                        sow."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Get Daily Wisdom
                </Button>
                <Button
                  variant="outline"
                  className="border-orange-300 text-orange-600 hover:bg-orange-50 font-semibold px-8 py-3 rounded-full transition-all duration-300"
                >
                  Explore All Insights
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dives */}
        <section className="mb-20 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-accent/8 rounded-3xl"></div>
          <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-accent/8 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-2xl"></div>

          <div className="relative z-10">
            {/* Enhanced Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 mb-6">
                <BookOpen className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Research & Analysis
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
                Deep Dives
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Comprehensive analysis and market forecasts from our expert
                research team
              </p>
            </div>

            {/* Enhanced Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <DeepDiveCard
                title="Sensex 2025 Forecast: What Analysts Predict"
                date="April 22, 2024"
                icon="chart"
                readTime="12 min read"
                views={4567}
                category="Market Forecast"
                excerpt="Comprehensive analysis of Sensex performance predictions for 2025, including key factors driving market movements and investment opportunities."
              />
              <DeepDiveCard
                title="US Inflation & Its Impact on Indian Markets"
                date="April 18, 2024"
                icon="globe"
                readTime="15 min read"
                views={3892}
                category="Global Economics"
                excerpt="Deep dive into how US Federal Reserve policies and inflation trends are reshaping investment strategies in emerging markets like India."
              />
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/30 transition-all duration-300 cursor-pointer group touch-manipulation active:scale-95">
                <span className="text-accent font-semibold">
                  Explore All Research
                </span>
                <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
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
      </div>
    </Layout>
  );
};

export default HomeView;
