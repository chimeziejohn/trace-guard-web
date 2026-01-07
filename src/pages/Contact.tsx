import ContactForm from "@/components/contact/ContactForm";
import { Mail, Shield, Clock, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Ready to discuss your situation? Our team is here to listen, 
              assess, and provide guidance. All communications are confidential.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">
                How to Reach Us
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:support@securetracedigital.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      support@securetracedigital.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Response Time</h3>
                    <p className="text-muted-foreground">
                      We respond to all inquiries within 24 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-trust-confidential/10">
                    <Lock className="w-6 h-6 text-trust-confidential" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Confidentiality</h3>
                    <p className="text-muted-foreground">
                      All communications are encrypted and confidential
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="font-display font-semibold text-lg">Quick Actions</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="hero" asChild className="flex-1">
                    <Link to="/contact">Request a Consultation</Link>
                  </Button>
                  <Button variant="heroOutline" asChild className="flex-1">
                    <Link to="/contact?type=incident">Report an Incident</Link>
                  </Button>
                </div>
              </div>

              {/* Confidentiality Notice */}
              <div className="mt-8 p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                  <h3 className="font-display font-semibold">Confidentiality Notice</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  All information shared with SecureTrace Digital Recovery is treated 
                  with the utmost confidentiality. We use encrypted communication 
                  channels and secure data handling practices. Your case details 
                  will never be shared with third parties without your explicit 
                  consent, except as required by law.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
