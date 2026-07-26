import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ArrowLeft } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <div className="space-y-0">
      <section className="relative overflow-hidden border-b border-border/60 py-20">
        <div className="container max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="h-3.5 w-3.5" /> Home
          </Link>
          <div className="flex items-center gap-3">
            <Scale className="h-8 w-8 text-cyan-400" />
            <h1 className="font-heading text-4xl font-extrabold text-foreground">Terms of Use</h1>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Last updated: January 2026</p>
        </div>
      </section>

      <section className="container max-w-4xl py-12">
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
          <p>
            By accessing and using this website, you agree to comply with and be bound by the following Terms of Use.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground pt-4">1. Intellectual Property</h2>
          <p>
            All content, articles, frameworks, case study summaries, and visual branding on this website are the property of Ashish Mishra unless otherwise specified. Unattributed reproduction is prohibited.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground pt-4">2. Advisory Disclaimer</h2>
          <p>
            The information provided on this website and in downloadable frameworks is for informational and educational purposes. Specific strategic IT or legal outcomes require a formal executed advisory agreement.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground pt-4">3. External Links</h2>
          <p>
            This website may contain links to external professional profiles (e.g., LinkedIn, Instagram). We are not responsible for the content or privacy practices of third-party websites.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground pt-4">4. Governing Law</h2>
          <p>
            These terms are governed by the laws of India, without regard to conflict of law principles.
          </p>
        </div>
      </section>
    </div>
  );
};
