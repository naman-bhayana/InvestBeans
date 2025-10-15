import { Button } from "@/components/ui/button";
import { TrendingUp, LineChart, PieChart } from "lucide-react";

const Hero = () => {
  return (
    <section className="gradient-hero text-white py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center items-center gap-3 mb-6">
            <TrendingUp className="w-12 h-12 text-accent" />
            <LineChart className="w-10 h-10 text-accent/80" />
            <PieChart className="w-12 h-12 text-accent" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your Gateway to 
            <span className="text-accent"> Smart Investing</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Get real-time market insights, expert analysis, and data-driven strategies 
            to make informed investment decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-navy font-semibold px-8 py-6 text-lg shadow-glow"
            >
              Start Investing
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-6 text-lg backdrop-blur-sm bg-transparent"
            >
              Explore Markets
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">50K+</div>
              <div className="text-sm text-white/70">Active Investors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">₹500Cr+</div>
              <div className="text-sm text-white/70">Assets Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">98%</div>
              <div className="text-sm text-white/70">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
