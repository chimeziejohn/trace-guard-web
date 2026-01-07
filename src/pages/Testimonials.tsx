import TestimonialCard from "@/components/shared/TestimonialCard";
import { Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "After losing access to my business email account due to a security breach, SecureTrace guided me through the official recovery process step by step. Their professionalism and attention to detail gave me confidence during a stressful situation.",
    region: "North America",
    caseType: "Account Recovery Assistance",
  },
  {
    quote: "The blockchain analysis report they provided was instrumental in our legal case. Every transaction was documented thoroughly with clear explanations that our legal team could present in court.",
    region: "Europe",
    caseType: "Stolen Funds Tracing",
  },
  {
    quote: "I appreciated their honesty from the start. They told me what was realistically achievable and never made promises they couldn't keep. That transparency made all the difference.",
    region: "Asia Pacific",
    caseType: "Fraud Investigation",
  },
  {
    quote: "The cybersecurity assessment they conducted for our company revealed vulnerabilities we didn't know existed. Their recommendations have significantly improved our security posture.",
    region: "Middle East",
    caseType: "Cybersecurity Consulting",
  },
  {
    quote: "When I fell victim to an investment scam, SecureTrace helped me understand exactly what happened, documented everything for law enforcement, and guided me through the reporting process.",
    region: "South America",
    caseType: "Scam Investigation",
  },
  {
    quote: "Their forensic report was accepted by law enforcement without question. The methodology and documentation were exactly what was needed for the investigation.",
    region: "Australia",
    caseType: "Digital Forensics Reporting",
  },
];

const Testimonials = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Client Experiences</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              What Our Clients <span className="gradient-text">Say</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Real experiences from individuals and businesses we've helped. 
              All testimonials are shared with permission and anonymized for privacy protection.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                region={testimonial.region}
                caseType={testimonial.caseType}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Notice */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              Privacy Protected
            </h2>
            <p className="text-muted-foreground mb-8">
              All testimonials are shared voluntarily by our clients. We protect their 
              identities and only share regional information. No case details, personal 
              information, or identifying data is ever disclosed without explicit consent.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" className="gap-2">
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
