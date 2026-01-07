import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import TrustSection from "@/components/home/TrustSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <TrustSection />
      
      {/* CTA Section */}
      <section className="relative section-padding bg-gradient-to-b from-background to-secondary/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Free Initial Consultation</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get <span className="gradient-text">Started?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're dealing with a cybersecurity incident, investigating fraud, 
              or need expert guidance, our team is here to help you navigate the path forward.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="gap-2">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/how-it-works">Learn Our Process</Link>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Confidential & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                <span>100% Legal Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-trust-confidential" />
                <span>24-Hour Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
