import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep = ({ step, icon: Icon, title, description, isLast = false }: ProcessStepProps) => {
  return (
    <div className="relative">
      <div className="flex items-start gap-6">
        {/* Step Number */}
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center shadow-lg glow-primary">
            <Icon className="w-7 h-7 text-primary-foreground" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
            {step}
          </div>
          {/* Connecting Line */}
          {!isLast && (
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-primary/50 to-transparent hidden lg:block" />
          )}
        </div>
        
        {/* Content */}
        <div className="flex-grow pb-12">
          <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;
