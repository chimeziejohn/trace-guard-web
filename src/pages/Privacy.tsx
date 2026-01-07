import { Shield, Lock, Eye, Database, Mail, FileCheck } from "lucide-react";

const Privacy = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Privacy Policy
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
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-3">
                  <Lock className="w-6 h-6 text-primary" />
                  Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  SecureTrace Digital Recovery ("we," "our," or "us") is committed to 
                  protecting your privacy. This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you use our services 
                  or visit our website.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-3">
                  <Database className="w-6 h-6 text-primary" />
                  Information We Collect
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Information You Provide</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Contact information (name, email address)</li>
                      <li>Case-related information you choose to share</li>
                      <li>Communication records</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Device and browser information</li>
                      <li>IP address (anonymized)</li>
                      <li>Website usage analytics</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-primary" />
                  How We Use Your Information
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    To provide and maintain our services
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    To communicate with you about your case
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    To improve our services and website
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    To comply with legal obligations
                  </li>
                </ul>
              </div>

              {/* Data Protection */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  Data Protection
                </h2>
                <div className="p-6 rounded-2xl bg-accent/10 border border-accent/20 text-muted-foreground">
                  <p className="mb-4">
                    We implement industry-leading security measures to protect your data:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-accent" />
                      End-to-end encryption for all communications
                    </li>
                    <li className="flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-accent" />
                      Secure, encrypted data storage
                    </li>
                    <li className="flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-accent" />
                      Strict access controls and authentication
                    </li>
                    <li className="flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-accent" />
                      Regular security audits and updates
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Sharing */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold mb-4">Data Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do NOT sell, trade, or rent your personal information to third parties.
                </p>
                <p className="text-muted-foreground">
                  We may share information only in the following circumstances:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    With your explicit consent
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    To comply with legal requirements or court orders
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    With law enforcement at your request to support your case
                  </li>
                </ul>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Access the personal information we hold about you
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Request correction of inaccurate information
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Request deletion of your information (subject to legal requirements)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Withdraw consent for data processing
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  Contact Us
                </h2>
                <p className="text-muted-foreground">
                  For privacy-related inquiries, please contact us at:
                  <br />
                  <a 
                    href="mailto:support@securetracedigital.com" 
                    className="text-primary hover:underline"
                  >
                    support@securetracedigital.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
