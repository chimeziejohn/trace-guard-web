import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  region: string;
  caseType: string;
}

const TestimonialCard = ({ quote, region, caseType }: TestimonialCardProps) => {
  return (
    <div className="glass-card-hover rounded-2xl p-8 h-full flex flex-col">
      <Quote className="w-10 h-10 text-primary/30 mb-4" />
      
      <blockquote className="text-lg text-foreground mb-6 flex-grow leading-relaxed">
        "{quote}"
      </blockquote>
      
      <div className="pt-4 border-t border-border">
        <p className="text-sm text-muted-foreground">
          <span className="text-foreground font-medium">Anonymous Client</span>
          <span className="mx-2">•</span>
          {region}
        </p>
        <p className="text-xs text-primary mt-1">{caseType}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
