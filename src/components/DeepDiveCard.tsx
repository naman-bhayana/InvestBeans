import { TrendingUp, Globe } from "lucide-react";

interface DeepDiveCardProps {
  title: string;
  date: string;
  icon: "chart" | "globe";
}

const DeepDiveCard = ({ title, date, icon }: DeepDiveCardProps) => {
  const Icon = icon === "chart" ? TrendingUp : Globe;
  
  return (
    <div className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in">
      <div className="flex items-start gap-4">
        <div className="bg-gradient-to-br from-primary to-navy-lighter p-4 rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">{title}</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{date}</span>
            <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
            <span className="text-sm text-accent font-medium">Read article →</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeepDiveCard;
