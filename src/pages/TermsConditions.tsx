import { Shield, FileText, AlertCircle, CheckCircle, Scale, Users, Ban, Gavel } from "lucide-react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Gavel className="w-16 h-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Terms & Conditions
              </h1>
              <p className="text-xl text-muted-foreground">
                Please read these terms carefully before using our services.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-8 rounded-xl border border-primary/20">
                <div className="flex items-start gap-4">
                  <FileText className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                      Agreement to Terms
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      By accessing or using the services provided by SecureTrace Digital Recovery 
                      ("Company," "we," "us," or "our"), you agree to be bound by these Terms and 
                      Conditions ("Terms"). If you do not agree to these Terms, please do not use 
                      our services.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      These Terms apply to all visitors, users, and clients who access or use our 
                      website and services. We reserve the right to update or modify these Terms at 
                      any time without prior notice. Your continued use of our services following any 
                      changes constitutes acceptance of those changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Description */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  Description of Services
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  SecureTrace Digital Recovery provides professional digital forensics and 
                  investigation services, including but not limited to:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Digital asset investigation and tracing",
                    "Account recovery assistance and documentation",
                    "Fraud investigation and evidence compilation",
                    "Blockchain transaction analysis",
                    "Professional consultation services",
                    "Reporting for legal proceedings"
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
                      <strong className="text-foreground">Important:</strong> All services are conducted 
                      in full compliance with applicable laws and regulations. We do not engage in 
                      unauthorized access, hacking, or any illegal activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Responsibilities */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  Client Responsibilities
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  By engaging our services, you agree to the following responsibilities:
                </p>

                <div className="grid gap-4">
                  {[
                    {
                      title: "Accurate Information",
                      description: "You agree to provide accurate, complete, and truthful information regarding your case. Providing false or misleading information may result in termination of services without refund."
                    },
                    {
                      title: "Legal Ownership",
                      description: "You confirm that you are the rightful owner of the assets or accounts in question, or have legal authority to act on behalf of the owner."
                    },
                    {
                      title: "Cooperation",
                      description: "You agree to cooperate fully with our investigation process, including providing requested documentation and responding to communications in a timely manner."
                    },
                    {
                      title: "Legal Compliance",
                      description: "You agree not to use our services for any unlawful purpose or in violation of any applicable laws or regulations."
                    },
                    {
                      title: "Confidentiality",
                      description: "You agree to maintain the confidentiality of any proprietary methods, strategies, or information shared during our engagement."
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

        {/* Payment Terms */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Scale className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  Payment Terms
                </h2>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Fee Structure</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All services are billed as upfront professional service fees. We do not operate 
                    on performance-based, contingency, or recovery-percentage models. Final pricing 
                    is always confirmed in writing before work begins.
                  </p>
                </div>

                <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Payment Due</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Payment is due in full before the commencement of services unless otherwise 
                    agreed in writing. We accept payment via major credit cards, bank transfer, 
                    and approved cryptocurrency.
                  </p>
                </div>

                <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Refund Policy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Refunds are handled in accordance with our Refund & Service Guarantee Policy. 
                    Please review that policy for complete details on refund eligibility and procedures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Ban className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  Limitation of Liability
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, SecureTrace Digital Recovery and its 
                  officers, directors, employees, and agents shall not be liable for:
                </p>

                <div className="space-y-4">
                  {[
                    "Any indirect, incidental, special, consequential, or punitive damages arising from your use of our services",
                    "Any loss of profits, revenue, data, or business opportunities",
                    "Any damages resulting from factors beyond our reasonable control, including third-party actions or inactions",
                    "Any unsuccessful recovery outcomes where professional services were properly rendered",
                    "Any delays caused by law enforcement agencies, financial institutions, or other third parties"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                      <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-destructive/10 rounded-xl border border-destructive/20">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Important:</strong> In no event shall our 
                      total liability exceed the amount paid by you for the specific services giving 
                      rise to the claim.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* No Guarantee of Results */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Scale className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  No Guarantee of Results
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  While we employ industry-leading methodologies and maintain the highest professional 
                  standards, we expressly disclaim any guarantee of specific outcomes or results. 
                  The success of digital asset recovery or investigation depends on numerous factors 
                  beyond our control.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our services consist of professional investigation, analysis, and documentation. 
                  Payment is for services rendered, not for results achieved. Any statements regarding 
                  potential outcomes are estimates only and should not be construed as guarantees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <FileText className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  Intellectual Property
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including but not limited to text, graphics, logos, 
                  images, and software, is the property of SecureTrace Digital Recovery and is 
                  protected by applicable intellectual property laws.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  You may not reproduce, distribute, modify, or create derivative works from any 
                  content on this website without our express written permission. Reports and 
                  documentation provided as part of our services may be used by you for their 
                  intended purpose only.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Governing Law */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Gavel className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  Governing Law & Dispute Resolution
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with applicable laws, 
                  without regard to conflict of law principles. Any disputes arising from these Terms 
                  or your use of our services shall be resolved through binding arbitration, except 
                  where prohibited by law.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Before initiating any formal dispute resolution process, you agree to contact us 
                  directly to attempt to resolve the matter informally. We are committed to addressing 
                  client concerns promptly and fairly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Questions About Our Terms?
              </h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about these Terms and Conditions, please contact us.
              </p>
              <a
                href="mailto:support@securetracedigital.com"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                support@securetracedigital.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TermsConditions;
