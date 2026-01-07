import { Link } from "react-router-dom";
import { Shield, Mail, Lock, FileCheck } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Services", path: "/services" },
      { name: "How It Works", path: "/how-it-works" },
      { name: "Testimonials", path: "/testimonials" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Disclaimer", path: "/disclaimer" },
    ],
    contact: [
      { name: "Contact Us", path: "/contact" },
    ],
  };

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container-custom section-padding py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight">
                  SecureTrace
                </span>
                <span className="text-xs text-muted-foreground leading-tight">
                  Digital Recovery
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Ethical Cybersecurity & Digital Forensics. Trusted by individuals 
              and businesses worldwide for lawful digital recovery solutions.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2 text-xs">
                <Lock className="w-4 h-4 text-accent" />
                <span>Encrypted</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <FileCheck className="w-4 h-4 text-primary" />
                <span>Compliant</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@securetracedigital.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  support@securetracedigital.com
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Request a Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} SecureTrace Digital Recovery. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right">
              All services are conducted in full compliance with applicable laws. 
              We do not engage in unauthorized access or illegal activities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
