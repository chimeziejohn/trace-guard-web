import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  scope: string[];
  disclaimer: string;
}

const ServiceCard = ({ icon: Icon, title, description, scope, disclaimer }: ServiceCardProps) => {
  return (
    <div className="glass-card-hover rounded-2xl p-8 h-full flex flex-col">
      <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-6 self-start">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      
      <h3 className="font-display text-2xl font-bold mb-4">{title}</h3>
      
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="mb-6 flex-grow">
        <h4 className="font-semibold text-sm text-foreground mb-3">Scope of Assistance:</h4>
        <ul className="space-y-2">
          {scope.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground italic">
          <span className="text-primary font-medium">Important:</span> {disclaimer}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
