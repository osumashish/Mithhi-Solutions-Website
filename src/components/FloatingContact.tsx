import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

export const FloatingContact: React.FC = () => {
  return (
    <Link
      to="/contact"
      aria-label="Contact Ashish"
      className="fixed bottom-6 right-5 z-50 flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-105 active:scale-95"
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline">Let's Talk</span>
    </Link>
  );
};
