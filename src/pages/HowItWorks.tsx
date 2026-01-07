import ProcessStep from "@/components/shared/ProcessStep";
import { MessageSquare, Search, FileText, HandHelping, Shield, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: MessageSquare,
    title: "Initial Consultation",
    description: "We begin with a confidential consultation to understand your situation, assess the scope of the issue, and determine how we can assist. During this phase, we'll explain our capabilities, limitations, and provide an honest assessment of potential outcomes.",
  },
  {
    step: 2,
    icon: Search,
    title: "Investigation & Analysis",
    description: "Our expert team conducts a thorough investigation using legal methods and tools. This may include blockchain analysis, digital forensics, open-source intelligence gathering, and evidence documentation—all within strict legal and ethical boundaries.",
  },
  {
    step: 3,
    icon: FileText,
    title: "Reporting & Guidance",
    description: "We compile our findings into comprehensive reports suitable for legal proceedings, law enforcement, or personal records. You'll receive clear explanations of what we found, what it means, and recommended next steps.",
  },
  {
    step: 4,
    icon: HandHelping,
    title: "Recovery Support",
    description: "We guide you through recovery options, which may include coordination with platforms, exchanges, or law enforcement. We provide ongoing support to help you navigate the process and implement security measures to prevent future incidents.",
  },
];

const HowItWorks = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              How We <span className="gradient-text">Work</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our process is designed to be transparent, thorough, and effective 
              while maintaining the highest ethical and legal standards throughout.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.step}
                step={step.step}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl bg-card border border-primary/20 text-center">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
                Our Promise to You
              </h2>
              
              <p className="text-2xl font-display font-bold gradient-text mb-6">
                No shortcuts. No illegal access. No false promises.
              </p>
              
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We believe in honest, ethical work. Our team will always give you 
                a realistic assessment of your situation and the potential outcomes. 
                We will never promise guaranteed results or use methods that could 
                put you at legal risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8 text-center">
              What to <span className="gradient-text-accent">Expect</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-accent/10 border border-accent/20">
                <h3 className="font-display font-bold text-lg mb-4">Clear Communication</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Regular progress updates</li>
                  <li>• Honest assessment of findings</li>
                  <li>• Plain-language explanations</li>
                  <li>• Responsive support</li>
                </ul>
              </div>
              
              <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                <h3 className="font-display font-bold text-lg mb-4">Professional Standards</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Evidence chain of custody</li>
                  <li>• Documented methodologies</li>
                  <li>• Court-ready reporting</li>
                  <li>• Confidentiality guaranteed</li>
                </ul>
              </div>
              
              <div className="p-6 rounded-xl bg-trust-confidential/10 border border-trust-confidential/20">
                <h3 className="font-display font-bold text-lg mb-4">Realistic Expectations</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Honest outcome projections</li>
                  <li>• No guaranteed recoveries</li>
                  <li>• Clear scope limitations</li>
                  <li>• Transparent pricing</li>
                </ul>
              </div>
              
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-display font-bold text-lg mb-4">Ongoing Support</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Post-investigation guidance</li>
                  <li>• Security recommendations</li>
                  <li>• Law enforcement coordination</li>
                  <li>• Prevention strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <AlertTriangle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Ready to Take the <span className="gradient-text">First Step?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Start with a confidential consultation. We'll assess your situation 
              and provide honest guidance on the best path forward.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="gap-2">
                Schedule Your Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
