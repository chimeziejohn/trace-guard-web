import { AlertTriangle, XCircle, Shield, Scale } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Scale className="w-12 h-12 text-primary mx-auto mb-6" />
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Legal Disclaimer
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Important Notice */}
            <div className="p-8 rounded-2xl bg-destructive/10 border border-destructive/20">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-destructive" />
                <h2 className="font-display text-2xl font-bold">Important Notice</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SecureTrace Digital Recovery provides lawful digital forensics, 
                cybersecurity consulting, and recovery assistance services. 
                Please read this disclaimer carefully before engaging our services.
              </p>
            </div>

            {/* What We Do NOT Do */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
                <XCircle className="w-6 h-6 text-destructive" />
                Services We Do NOT Provide
              </h2>
              <div className="grid gap-4">
                {[
                  {
                    title: "No Unauthorized Access",
                    description: "We do not access any accounts, systems, or data without proper authorization. We never bypass security measures, exploit vulnerabilities, or perform any form of unauthorized access.",
                  },
                  {
                    title: "No System Exploitation",
                    description: "We do not use exploits, malware, or any unauthorized tools to access information. All our methods are legal, ethical, and transparent.",
                  },
                  {
                    title: "No Illegal Recovery Methods",
                    description: "We do not employ any illegal techniques to recover accounts or funds. Recovery assistance is limited to guidance through official, legitimate channels.",
                  },
                  {
                    title: "No Guaranteed Fund Recovery",
                    description: "We cannot and do not guarantee the recovery of lost or stolen funds. While we provide tracing and documentation services, actual recovery depends on legal processes and third-party cooperation.",
                  },
                ].map((item) => (
                  <div key={item.title} className="p-6 rounded-xl bg-card border border-border">
                    <h3 className="font-semibold text-lg mb-2 text-destructive">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Scope of Services */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                Scope of Services
              </h2>
              <div className="p-6 rounded-2xl bg-accent/10 border border-accent/20">
                <p className="text-muted-foreground mb-4">
                  Our services are limited to the following lawful activities:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    Digital forensics investigation using legal methods and publicly available information
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    Blockchain and transaction tracing for documentation purposes
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    Evidence documentation and reporting for legal proceedings
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    Guidance through official recovery channels and procedures
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    Cybersecurity consulting and security assessment (with authorization)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    Coordination with law enforcement agencies upon client request
                  </li>
                </ul>
              </div>
            </div>

            {/* No Guarantees */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">No Guarantees</h2>
              <div className="p-6 rounded-xl bg-card border border-border">
                <p className="text-muted-foreground leading-relaxed">
                  While we strive to provide the most comprehensive and effective services 
                  possible, we cannot guarantee any specific outcomes. The success of 
                  investigations, the recovery of funds, or the resolution of cases depends 
                  on numerous factors beyond our control, including but not limited to:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>• Cooperation from platforms, exchanges, and service providers</li>
                  <li>• Available evidence and information</li>
                  <li>• Legal jurisdictional issues</li>
                  <li>• Law enforcement actions and priorities</li>
                  <li>• Time elapsed since the incident</li>
                </ul>
              </div>
            </div>

            {/* Legal Compliance */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Legal Compliance</h2>
              <p className="text-muted-foreground leading-relaxed">
                All services provided by SecureTrace Digital Recovery are conducted in 
                strict compliance with applicable laws and regulations. We operate 
                transparently and maintain documentation of our methodologies. Clients 
                are advised that they remain responsible for ensuring their requests 
                are lawful and that they have proper authority over any accounts or 
                systems they ask us to investigate.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Limitation of Liability</h2>
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <p className="text-muted-foreground leading-relaxed">
                  SecureTrace Digital Recovery shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages resulting 
                  from your use of our services or inability to use our services, 
                  including but not limited to loss of profits, data, or other 
                  intangible losses. Our total liability for any claims arising 
                  from our services shall not exceed the amount paid by you for 
                  such services.
                </p>
              </div>
            </div>

            {/* Agreement */}
            <div className="p-8 rounded-2xl bg-primary/10 border border-primary/20 text-center">
              <h2 className="font-display text-xl font-bold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By using our services, you acknowledge that you have read, understood, 
                and agree to be bound by this disclaimer and our Terms of Service. 
                If you do not agree with any part of this disclaimer, please do not 
                use our services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;
