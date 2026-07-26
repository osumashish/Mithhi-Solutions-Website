import React from 'react';
import { Link } from 'react-router-dom';
import { House, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="container relative flex flex-col items-center gap-6 text-center">
        <p className="font-heading text-8xl font-extrabold text-gradient sm:text-9xl">404</p>
        <h1 className="font-heading text-2xl font-extrabold sm:text-3xl text-foreground">
          This page took a digital transformation of its own
        </h1>
        <p className="max-w-md text-muted-foreground text-sm sm:text-base">
          The page you are looking for does not exist or has been moved. Let's get you back on track.
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors shadow h-9 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 text-white shadow-glow hover:opacity-90"
          >
            <House className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 py-2 rounded-full px-6 text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Contact Ashish
          </Link>
        </div>
      </div>
    </section>
  );
};
