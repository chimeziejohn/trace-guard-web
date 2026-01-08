import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Shield, FileText, AlertCircle, CheckCircle, DollarSign, Clock, Scale } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Refund & Service Guarantee Policy
              </h1>
              <p className="text-xl text-muted-foreground">
                Transparent policies built on trust, ethics, and professional accountability.
              </p>
            </div>
          </div>
        </section>

        {/* Commitment Statement */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-8 rounded-xl border border-primary/20">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                      Our Commitment to You
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      At SecureTrace Digital Recovery, we are committed to ethical service delivery, 
                      complete transparency, and honest communication at every stage of our engagement. 
                      We do not make false promises or guarantee outcomes that are beyond our control.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Our reputation is built on integrity, professionalism, and delivering genuine value 
                      to our clients through lawful investigation, thorough analysis, and comprehensive 
                      documentation. We believe that trust is earned through actions, not just words.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service-Based Fee Structure */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <DollarSign className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  Service-Based Fee Structure
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  All fees charged by SecureTrace Digital Recovery are exclusively for professional 
                  services rendered, including but not limited to:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Professional investigative time and expertise",
                    "Digital forensics analysis and examination",
                    "Blockchain and transaction tracing",
                    "Comprehensive documentation and reporting",
                    "Evidence compilation for legal proceedings",
                    "Consultation and strategic guidance"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-border">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Important:</strong> Our fees reflect the 
                      professional work performed, not the outcome of recovery efforts. Payment is 
                      for services rendered, regardless of whether assets are ultimately recovered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* No Guaranteed Outcomes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Scale className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  Understanding Recovery Limitations
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  We believe in complete honesty with our clients. While we employ industry-leading 
                  methodologies and maintain the highest professional standards, we cannot and do not 
                  guarantee the recovery of lost or stolen digital assets.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Recovery outcomes depend on numerous factors beyond our control, including:
                </p>

                <div className="grid gap-4">
                  {[
                    {
                      title: "Third-Party Platform Cooperation",
                      description: "Exchanges, social media platforms, and service providers may have varying response times and policies regarding account recovery and information disclosure."
                    },
                    {
                      title: "Financial Institution Policies",
                      description: "Banks and payment processors operate under their own regulatory frameworks and may have limitations on reversing transactions or freezing funds."
                    },
                    {
                      title: "Cryptocurrency Exchange Procedures",
                      description: "Digital asset exchanges have independent compliance requirements and may require court orders or law enforcement involvement for certain actions."
                    },
                    {
                      title: "Legal Authority Involvement",
                      description: "Law enforcement agencies operate on their own timelines and priorities, and their involvement may be necessary for certain recovery actions."
                    },
                    {
                      title: "Time Sensitivity",
                      description: "The speed at which cases are reported to us significantly impacts potential recovery options, as perpetrators may move or convert assets quickly."
                    }
                  ].map((item, index) => (
                    <div key={index} className="p-5 bg-card rounded-xl border border-border">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Refund Eligibility */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <FileText className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  Refund Eligibility
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                We stand behind our commitment to deliver professional services. Partial or full 
                refunds may be considered under the following circumstances:
              </p>

              <div className="space-y-4">
                <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Failure to Commence Agreed Work
                      </h3>
                      <p className="text-muted-foreground">
                        If we fail to commence the agreed-upon investigative work after payment has 
                        been received, you are entitled to a full refund of all fees paid.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Non-Delivery of Professional Analysis
                      </h3>
                      <p className="text-muted-foreground">
                        If no professional analysis or reporting is delivered within the agreed 
                        scope and timeframe, and this failure is attributable to SecureTrace, 
                        refund eligibility will be assessed on a case-by-case basis.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Client Cancellation Before Work Begins
                      </h3>
                      <p className="text-muted-foreground">
                        If you choose to cancel your engagement before any investigative work has 
                        commenced, you may be eligible for a full or partial refund, minus any 
                        administrative fees incurred.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-destructive/10 rounded-xl border border-destructive/20">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Non-Refundable Circumstances</h4>
                    <p className="text-muted-foreground">
                      Refunds are not provided for completed work, unsuccessful recovery outcomes 
                      where professional services were rendered, or cancellations after investigative 
                      work has begun. Our fees are for services performed, not results achieved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transparent Pricing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <DollarSign className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  Transparent Pricing
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                All services are billed as <strong className="text-foreground">upfront professional service fees</strong>. 
                We do not operate on performance-based, contingency, or recovery-percentage models.
              </p>

              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Pricing Overview
              </h3>

              <div className="space-y-6 mb-8">
                {/* Initial Consultation */}
                <div className="glass-card p-6 rounded-xl border border-primary/20">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        Initial Consultation
                      </h4>
                      <p className="text-muted-foreground">
                        Confidential case review, feasibility assessment, and professional guidance.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">$150</span>
                      <span className="text-muted-foreground ml-2">(Upfront)</span>
                    </div>
                  </div>
                </div>

                {/* Account Recovery Assistance */}
                <div className="glass-card p-6 rounded-xl border border-border">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        Account Recovery Assistance
                      </h4>
                      <p className="text-muted-foreground">
                        Documentation, provider coordination support, and lawful recovery guidance (pricing based on complexity).
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">$500 – $1,200</span>
                    </div>
                  </div>
                </div>

                {/* Stolen Funds Tracing */}
                <div className="glass-card p-6 rounded-xl border border-border">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        Stolen Funds Tracing
                      </h4>
                      <p className="text-muted-foreground">
                        Blockchain or digital transaction analysis with a structured tracing report.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">$1,000 – $3,500</span>
                    </div>
                  </div>
                </div>

                {/* Fraud Investigation & Reporting */}
                <div className="glass-card p-6 rounded-xl border border-border">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        Fraud Investigation & Reporting
                      </h4>
                      <p className="text-muted-foreground">
                        Scam investigation, evidence documentation, and reporting guidance.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">$800 – $2,500</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final Pricing Disclaimer */}
              <div className="p-6 bg-primary/10 rounded-xl border border-primary/30">
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

        {/* Contact Section */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Questions About Our Policies?
              </h2>
              <p className="text-muted-foreground mb-6">
                We're here to provide clarity on any aspect of our service terms. Contact us for 
                detailed information.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
