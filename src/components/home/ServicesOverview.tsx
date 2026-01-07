import { Link } from "react-router-dom";
import { 
  UserCheck, 
  Search, 
  AlertTriangle, 
  ShieldCheck, 
  FileText,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: UserCheck,
    title: "Account Recovery Assistance",
    description: "Professional guidance for recovering access to compromised accounts through proper verification and legal channels.",
    color: "text-primary",
  },
  {
    icon: Search,
    title: "Stolen Funds Tracing",
    description: "Blockchain analysis and financial investigation to trace and document the movement of misappropriated digital assets.",
    color: "text-accent",
  },
  {
    icon: AlertTriangle,
    title: "Fraud & Scam Investigations",
    description: "Comprehensive analysis of fraudulent activities with detailed documentation for law enforcement cooperation.",
    color: "text-trust-confidential",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Consulting",
    description: "Expert security assessments, vulnerability analysis, and strategic recommendations to protect your digital assets.",
    color: "text-trust-compliant",
  },
  {
    icon: FileText,
    title: "Digital Forensics Reporting",
    description: "Court-ready forensic reports with detailed evidence documentation adhering to legal standards.",
    color: "text-trust-evidence",
  },
];

const ServicesOverview = () => {
  return (
    <section className="relative section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Recovery Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive digital forensics and cybersecurity services delivered 
            with integrity, expertise, and full legal compliance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card-hover rounded-2xl p-8 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-muted/50 mb-6 ${service.color}`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services" className="gap-2">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
