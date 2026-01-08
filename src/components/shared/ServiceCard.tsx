import { LucideIcon, MessageCircle } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  scope: string[];
  disclaimer: string;
}

const ServiceCard = ({ icon: Icon, title, description, scope, disclaimer }: ServiceCardProps) => {
  const whatsappNumber = "+2347062283218""; // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent(`Hello, I'm interested in your ${title} service. Please provide more information.`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="glass-card-hover rounded-2xl p-8 h-full flex flex-col">
      <div className="flex items-start justify-between mb-6">
        <div className="inline-flex p-4 rounded-xl bg-primary/10">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600/10 hover:bg-green-600/20 border border-green-600/30 transition-all duration-300 group"
        >
          <MessageCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
          <span className="text-sm font-medium text-green-500">Message</span>
        </a>
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
