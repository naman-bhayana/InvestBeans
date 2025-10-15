interface InsightCardProps {
  title: string;
  description: string;
}

const InsightCard = ({ title, description }: InsightCardProps) => {
  return (
    <div className="group bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden animate-slide-up">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-all duration-300"></div>
      <h3 className="text-xl font-bold text-foreground mb-3 leading-tight relative z-10">{title}</h3>
      <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-3 relative z-10">{description}</p>
      <button className="text-accent font-semibold hover:text-accent/80 transition-colors inline-flex items-center gap-2 group/btn relative z-10">
        Read More
        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default InsightCard;
