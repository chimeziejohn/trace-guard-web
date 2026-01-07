import { Shield, Lock, Scale, Eye, FileCheck, Users } from "lucide-react";

const trustFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All communications and data are protected with industry-leading encryption standards.",
  },
  {
    icon: Scale,
    title: "Legal Compliance",
    description: "Every investigation adheres strictly to applicable laws and regulations.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "Clear communication about our methods, limitations, and realistic outcomes.",
  },
  {
    icon: FileCheck,
    title: "Evidence Integrity",
    description: "Forensic procedures maintain chain of custody for court-admissible documentation.",
  },
  {
    icon: Shield,
    title: "Ethical Standards",
    description: "We never engage in unauthorized access, exploitation, or illegal activities.",
  },
  {
    icon: Users,
    title: "Client Confidentiality",
    description: "Your case details remain strictly confidential and are never shared without consent.",
  },
];

const TrustSection = () => {
  return (
    <section className="relative section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Built on <span className="gradient-text-accent">Trust</span> & 
              <span className="gradient-text"> Integrity</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At SecureTrace Digital Recovery, we understand that our clients come to us 
              during challenging times. That's why we've built our practice on a foundation 
              of unwavering ethical standards and complete transparency.
            </p>
            <div className="p-6 rounded-2xl bg-accent/10 border border-accent/20">
              <p className="text-sm text-foreground font-medium">
                "Our commitment to legal compliance and ethical practices isn't just a policy—
                it's the core of who we are. We believe that the ends never justify unethical means."
              </p>
              <p className="text-xs text-muted-foreground mt-3">
                — SecureTrace Leadership Team
              </p>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
