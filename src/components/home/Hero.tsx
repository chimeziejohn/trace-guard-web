import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Lock, Scale, FileSearch } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Ethical Cybersecurity & Digital Forensics
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Ethical Cybersecurity.</span>
            <br />
            <span className="gradient-text">Trusted Digital Recovery.</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Professional digital forensics and cybersecurity consulting for individuals 
            and businesses. We provide lawful investigation, asset tracing, and recovery 
            guidance with complete transparency and confidentiality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="gap-2">
                Request a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact?type=incident">
                Report a Cyber Incident
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-card/50 border border-border/50">
              <Lock className="w-5 h-5 text-trust-confidential" />
              <span className="font-medium text-sm">Confidential</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-card/50 border border-border/50">
              <Scale className="w-5 h-5 text-trust-compliant" />
              <span className="font-medium text-sm">Law-Compliant</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-card/50 border border-border/50">
              <FileSearch className="w-5 h-5 text-trust-evidence" />
              <span className="font-medium text-sm">Evidence-Driven</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
