import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="space-y-0">
      <section className="relative overflow-hidden border-b border-border/60 py-20">
        <div className="container max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="h-3.5 w-3.5" /> Home
          </Link>
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-cyan-400" />
            <h1 className="font-heading text-4xl font-extrabold text-foreground">Privacy Policy</h1>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Last updated: January 2026</p>
        </div>
      </section>

      <section className="container max-w-4xl py-12">
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
          <p>
            Ashish Mishra ("we", "us", or "our") respects your privacy and is committed to protecting any personal information collected through this website (<code className="text-cyan-400">https://executive-presence-9.preview.emergentagent.com</code>).
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground pt-4">1. Information We Collect</h2>
          <p>
            We collect information you provide voluntarily when submitting consultation inquiries, downloading resources, or subscribing to The Executive Technology Brief newsletter. This may include your name, business email address, company name, and message context.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground pt-4">2. How Information Is Used</h2>
          <p>
            Information collected is strictly used to communicate regarding advisory services, send requested newsletter updates, and schedule strategic consultation sessions. We do not sell, rent, or trade your personal information to third parties.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground pt-4">3. Data Security & Storage</h2>
          <p>
            We implement industry-standard administrative and technical security measures to safeguard your information against unauthorized access, loss, or disclosure.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground pt-4">4. Cookies & Analytics</h2>
          <p>
            This website may use minimal functional cookies to persist dark/light theme preferences and measure aggregate traffic performance without identifying individual visitors.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground pt-4">5. Contact Information</h2>
          <p>
            If you have questions regarding this Privacy Policy, please contact us at <a href="mailto:ashm1305@hotmail.com" className="text-cyan-400 underline">ashm1305@hotmail.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
};
