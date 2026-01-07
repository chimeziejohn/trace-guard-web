import ServiceCard from "@/components/shared/ServiceCard";
import { 
  UserCheck, 
  Search, 
  AlertTriangle, 
  ShieldCheck, 
  FileText 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: UserCheck,
    title: "Account Recovery Assistance",
    description: "When you've lost access to critical accounts due to security breaches, compromised credentials, or unauthorized changes, our team provides professional guidance to recover access through legitimate, platform-approved channels.",
    scope: [
      "Verification assistance with platform security teams",
      "Documentation preparation for identity verification",
      "Guidance through official recovery procedures",
      "Communication liaison with service providers",
      "Security hardening recommendations post-recovery",
    ],
    disclaimer: "We facilitate recovery through official channels only. We do not bypass security measures, exploit vulnerabilities, or access accounts without proper authorization. Recovery success depends on platform cooperation and verification requirements.",
  },
  {
    icon: Search,
    title: "Stolen Funds Tracing",
    description: "Using advanced blockchain analysis and financial investigation techniques, we trace the movement of stolen or misappropriated digital assets, creating comprehensive documentation that can support legal recovery efforts.",
    scope: [
      "Blockchain transaction analysis and visualization",
      "Wallet cluster identification and mapping",
      "Exchange interaction documentation",
      "Cross-chain asset tracking",
      "Detailed tracing reports for legal proceedings",
    ],
    disclaimer: "Tracing services document asset movement for investigative purposes. Recovery of funds requires legal action and cooperation from exchanges or law enforcement. We cannot guarantee fund recovery or directly recover assets.",
  },
  {
    icon: AlertTriangle,
    title: "Fraud & Scam Investigations",
    description: "Our investigative team analyzes fraudulent schemes, documents evidence, and provides comprehensive reports that support victims in pursuing legal remedies and reporting to appropriate authorities.",
    scope: [
      "Scam pattern analysis and documentation",
      "Digital evidence preservation",
      "Perpetrator identification research",
      "Timeline reconstruction",
      "Law enforcement coordination support",
    ],
    disclaimer: "Investigations are conducted using only publicly available information and lawfully obtained evidence. We do not access private systems or data without authorization. Investigation findings are for informational and legal support purposes.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Consulting",
    description: "Protect your digital assets before incidents occur. Our cybersecurity experts provide comprehensive security assessments, vulnerability analysis, and strategic recommendations tailored to your specific needs.",
    scope: [
      "Security posture assessment",
      "Vulnerability identification and prioritization",
      "Security policy development",
      "Incident response planning",
      "Employee security awareness training",
    ],
    disclaimer: "Security assessments are performed only with explicit authorization. We do not conduct testing without proper agreements in place. Recommendations are advisory; implementation is the client's responsibility.",
  },
  {
    icon: FileText,
    title: "Digital Forensics Reporting",
    description: "When legal proceedings require expert analysis, our forensic team produces detailed, court-ready reports that document digital evidence with proper chain of custody and methodology documentation.",
    scope: [
      "Evidence collection and preservation",
      "Forensic analysis and documentation",
      "Expert witness testimony preparation",
      "Chain of custody maintenance",
      "Court-admissible report generation",
    ],
    disclaimer: "Forensic services require proper legal authority or client ownership of examined systems. We adhere to strict evidence handling protocols. Reports reflect findings based on available evidence and established forensic methodologies.",
  },
];

const Services = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Professional <span className="gradient-text">Recovery Services</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Comprehensive digital forensics and cybersecurity services delivered with 
              integrity, expertise, and full legal compliance. Each service is designed 
              to provide maximum value within ethical and legal boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                scope={service.scope}
                disclaimer={service.disclaimer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Need Help With Your <span className="gradient-text">Case?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Every situation is unique. Contact us for a confidential consultation 
              to discuss your specific needs and how we can assist.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact" className="gap-2">
                  Request Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/how-it-works">See Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
