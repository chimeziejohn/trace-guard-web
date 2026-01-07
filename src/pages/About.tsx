import { Shield, Target, Heart, Scale, Eye, Award, CheckCircle, XCircle } from "lucide-react";

const principles = [
  {
    icon: Scale,
    title: "Legal Compliance",
    description: "Every investigation and recovery effort strictly adheres to applicable laws and regulations in all jurisdictions we operate.",
  },
  {
    icon: Heart,
    title: "Ethical Standards",
    description: "We maintain the highest ethical standards in all our operations, never compromising integrity for expedience.",
  },
  {
    icon: Shield,
    title: "Confidentiality",
    description: "Client information and case details are protected with industry-leading security measures and strict access controls.",
  },
  {
    icon: Eye,
    title: "Evidence-Based",
    description: "All our findings are backed by verifiable evidence, documented thoroughly for legal proceedings when required.",
  },
];

const certifications = [
  "International Security Framework Aligned",
  "Blockchain Analysis Certified",
  "Digital Forensics Standards Compliant",
  "Privacy-First Architecture",
  "Encrypted Communications",
  "Chain of Custody Protocols",
];

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Mission</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Protecting Digital Assets with 
              <span className="gradient-text"> Integrity</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              SecureTrace Digital Recovery was founded on the principle that cybersecurity 
              and digital forensics must be conducted ethically, legally, and transparently. 
              We exist to help victims of digital crimes navigate the complex landscape of 
              recovery while maintaining the highest professional standards.
            </p>
          </div>
        </div>
      </section>

      {/* Ethics Statement */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                Our Ethical <span className="gradient-text-accent">Commitment</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  In an industry often associated with ambiguous practices, SecureTrace 
                  stands firmly on the side of lawful, ethical operations. We believe 
                  that the pursuit of justice and recovery must never come at the cost 
                  of breaking the law or compromising our integrity.
                </p>
                
                <div className="p-6 rounded-2xl bg-destructive/10 border border-destructive/20">
                  <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-destructive" />
                    What We Do NOT Do
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                      Unauthorized access to accounts, systems, or data
                    </li>
                    <li className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                      System exploitation or vulnerability abuse
                    </li>
                    <li className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                      Illegal recovery methods or techniques
                    </li>
                    <li className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                      Guaranteed fund recovery promises
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-2xl bg-accent/10 border border-accent/20">
              <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                What We DO Provide
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Lawful investigation and digital forensics analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Blockchain and transaction tracing services</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Evidence documentation for legal proceedings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Guidance through proper recovery channels</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Coordination with law enforcement when appropriate</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Cybersecurity consulting and prevention strategies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Our Core <span className="gradient-text">Principles</span>
            </h2>
            <p className="text-muted-foreground">
              These principles guide every decision we make and every case we undertake.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="glass-card-hover rounded-2xl p-8"
              >
                <principle.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-bold mb-3">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Standards & <span className="gradient-text-accent">Certifications</span>
            </h2>
            <p className="text-muted-foreground">
              Our operations align with international security frameworks and industry best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50"
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
