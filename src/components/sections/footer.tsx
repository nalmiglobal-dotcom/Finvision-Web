"use client";

import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { TradingGame } from '@/components/trading-game';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M19.11 4.93A9.92 9.92 0 0 0 12.01 2C6.51 2 2.11 6.39 2.11 11.89c0 1.8.49 3.5 1.38 4.99L2 22l5.44-1.43c1.42.87 3.03 1.34 4.7 1.34h.01c5.49 0 9.89-4.4 9.89-9.89a9.85 9.85 0 0 0-2.93-7.09zM12.01 20.12c-1.55 0-3.04-.48-4.29-1.32L3.92 20l1.37-3.69a8.19 8.19 0 0 1-1.4-4.42c0-4.52 3.73-8.19 8.24-8.19a8.21 8.21 0 0 1 8.24 8.19c.01 4.52-3.72 8.19-8.23 8.19zM16.48 13.56c-.2-.11-1.16-.57-1.34-.64c-.18-.07-.31-.11-.44.11c-.13.22-.51.64-.62.77c-.12.13-.23.14-.43.04c-.2-.1-1.02-.37-1.92-1.18c-.71-.63-1.19-1.41-1.33-1.66c-.14-.24-.02-.37.1-.48c.11-.11.23-.27.35-.41c.11-.13.15-.22.23-.37c.08-.14.04-.28-.01-.39c-.05-.11-.44-1.06-.6-1.45c-.16-.39-.33-.33-.45-.34c-.11-.01-.25-.01-.38-.01s-.33.05-.5.27c-.18.23-.69.69-.69 1.67c0 .99.71 1.94.81 2.08c.1.14 1.39 2.13 3.39 2.99c.48.21.86.33 1.15.42c.45.14.86.12 1.18.07c.36-.05 1.16-.48 1.32-.95c.16-.47.16-.88.11-1s-.18-.16-.38-.28z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-full section-dark">
      <div className="relative py-6 glass-card border-t border-b border-white/5">
        <div className="relative z-10 container mx-auto text-center px-4">
          <p className="text-[clamp(0.85rem,1.2vw,0.95rem)] text-muted-foreground">
            Monday - Saturday: 10:00 AM - 6:00 PM | Sunday: Closed
          </p>
        </div>
      </div>

      <div className="relative py-8 glass-card-light">
        <div className="relative z-10 container mx-auto px-4">
          <ul className="flex flex-wrap justify-center items-center gap-x-6 lg:gap-x-10 gap-y-4">
            {[
              { href: '/contact', label: 'Contact Us' },
              { href: '/privacy-policy', label: 'Privacy Policy' },
              { href: '/terms-of-use', label: 'Terms of use' },
              { href: '/refund-policy', label: 'Refund Policy' },
            ].map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-foreground/80">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <Link href={item.href} className="text-[clamp(0.8rem,1.2vw,0.9rem)] hover:text-primary transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <TradingGame />

      <a
        href="https://wa.me/919630065800"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] opacity-90 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative flex items-center gap-3">
          <WhatsAppIcon className="h-7 w-7 text-white drop-shadow-lg group-hover:rotate-12 transition-transform" />
          <div className="flex flex-col items-start">
            <span className="text-xs font-medium opacity-90">Need Help?</span>
            <span className="text-sm font-bold">WhatsApp Us</span>
          </div>
        </div>
        
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
      </a>
    </footer>
  );
};

export default Footer;
