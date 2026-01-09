import { Shield, DollarSign, AlertCircle, CheckCircle, Clock, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <DollarSign className="w-16 h-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Transparent Pricing
              </h1>
              <p className="text-xl text-muted-foreground">
                Professional service fees with no hidden costs. Know exactly what you're paying for.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Philosophy */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-8 rounded-xl border border-primary/20">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                      Our Pricing Philosophy
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      All services are billed as <strong className="text-foreground">upfront professional service fees</strong>. 
                      We do not operate on performance-based, contingency, or recovery-percentage models.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Our fees reflect the professional work performed—investigative expertise, analysis, 
                      documentation, and reporting—not the outcome of recovery efforts. This ensures 
                      complete transparency and aligns our incentives with delivering quality work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Pricing */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Service Pricing
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Final pricing is always confirmed in writing before work begins. 
                  Pricing varies based on case complexity and scope.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Initial Consultation */}
                <div className="glass-card p-8 rounded-xl border border-primary/30 bg-primary/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      Initial Consultation
                    </h3>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">$150</span>
                    <span className="text-muted-foreground ml-2">(Upfront)</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Confidential case review, feasibility assessment, and professional guidance 
                    to determine the best path forward.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Confidential case evaluation",
                      "Feasibility assessment",
                      "Strategic recommendations",
                      "Clear next steps outlined"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-foreground">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Account Recovery Assistance */}
                <div className="glass-card p-8 rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      Account Recovery
                    </h3>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">$500 – $1,200</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Documentation, provider coordination support, and lawful recovery guidance 
                    for compromised accounts.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Comprehensive documentation",
                      "Platform coordination support",
                      "Identity verification assistance",
                      "Recovery strategy guidance"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-foreground">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stolen Funds Tracing */}
                <div className="glass-card p-8 rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <DollarSign className="w-8 h-8 text-primary" />
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      Stolen Funds Tracing
                    </h3>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">$1,000 – $3,500</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Blockchain and digital transaction analysis with comprehensive 
                    tracing reports suitable for legal proceedings.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Blockchain transaction analysis",
                      "Fund flow documentation",
                      "Exchange identification",
                      "Legal-grade reporting"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-foreground">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fraud Investigation */}
                <div className="glass-card p-8 rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-8 h-8 text-primary" />
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      Fraud Investigation
                    </h3>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">$800 – $2,500</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Comprehensive scam investigation, evidence documentation, and 
                    reporting guidance for authorities.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Scam pattern analysis",
                      "Evidence compilation",
                      "Perpetrator identification support",
                      "Authority reporting guidance"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-foreground">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pricing Disclaimer */}
              <div className="mt-10 p-6 bg-primary/10 rounded-xl border border-primary/30">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-foreground font-medium text-lg">
                    Final pricing is always confirmed before work begins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  What's Included in Every Service
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Professional Expertise",
                    description: "Experienced investigators using industry-leading methodologies"
                  },
                  {
                    icon: FileText,
                    title: "Comprehensive Documentation",
                    description: "Detailed reports suitable for legal proceedings and authorities"
                  },
                  {
                    icon: Clock,
                    title: "Timely Communication",
                    description: "Regular updates and transparent progress reporting throughout"
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center p-6 bg-card rounded-xl border border-border">
                    <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="p-8 bg-accent/10 rounded-xl border border-accent/20">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                      Important Notice
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Our fees are for professional services rendered, not for guaranteed outcomes. 
                      While we employ industry-leading methodologies and maintain the highest standards, 
                      we cannot guarantee the recovery of lost or stolen digital assets.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Recovery success depends on many factors beyond our control, including third-party 
                      cooperation, timing, and legal considerations. Please review our Refund Policy 
                      for complete details on service terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact us for a confidential consultation. We'll assess your situation 
                and provide clear guidance on the best path forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/contact">Request Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/refund-policy">View Refund Policy</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing;
