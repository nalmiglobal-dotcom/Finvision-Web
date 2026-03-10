'use client';

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ConnectSection = () => {
  return (
    <section id="connect" className="relative section-padding-y overflow-hidden section-purple">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-40 right-20 w-[450px] h-[450px] bg-primary/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-20 left-1/3 w-[350px] h-[350px] bg-pink-500/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '30px 30px'
      }} />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold gradient-text-purple glow-text-purple mb-4">
            Connect with Us
          </h2>
          <p className="text-[clamp(0.9rem,1.5vw,1rem)] text-muted-foreground max-w-2xl mx-auto glass-card rounded-lg py-3 px-6 inline-block">
            The Trading Institute is here to support you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="glass-card text-foreground p-6 lg:p-8 rounded-2xl hover-lift hover-glow transition-all duration-300 flex flex-col items-center text-center glow-box-purple">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-4 mb-6 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-background" />
              </div>
              <h3 className="font-heading text-[clamp(1.1rem,2vw,1.25rem)] font-semibold mb-2 text-foreground">Office Address</h3>
              <p className="text-[clamp(0.85rem,1.2vw,0.95rem)] leading-relaxed text-muted-foreground">
                OFFICE 3024, CURRENCY TOWER, VIP CHOWK, RAIPUR (C.G.)-492001
              </p>
            </div>

            <div className="glass-card text-foreground p-6 lg:p-8 rounded-2xl hover-lift hover-glow transition-all duration-300 flex flex-col items-center text-center glow-box-purple">
              <div className="bg-gradient-to-br from-primary to-cyan-400 rounded-xl p-4 mb-6 flex items-center justify-center">
                <Phone className="h-8 w-8 text-background" />
              </div>
              <h3 className="font-heading text-[clamp(1.1rem,2vw,1.25rem)] font-semibold mb-2 text-foreground">Phone Number</h3>
              <p className="text-[clamp(0.85rem,1.2vw,0.95rem)] leading-relaxed">
                <a href="tel:+919630065800" className="text-muted-foreground hover:text-primary transition-colors block">+91-9630065800</a>
                <a href="tel:+918889199977" className="text-muted-foreground hover:text-primary transition-colors block">+91-8889199977</a>
                <a href="tel:+918889199933" className="text-muted-foreground hover:text-primary transition-colors block">+91-8889199933</a>
              </p>
            </div>

          <div className="glass-card text-foreground p-6 lg:p-8 rounded-2xl hover-lift hover-glow transition-all duration-300 flex flex-col items-center text-center glow-box-purple">
            <div className="bg-gradient-to-br from-accent to-yellow-500 rounded-xl p-4 mb-6 flex items-center justify-center">
              <Mail className="h-8 w-8 text-background" />
            </div>
            <h3 className="font-heading text-[clamp(1.1rem,2vw,1.25rem)] font-semibold mb-2 text-foreground">Office Email</h3>
              <p className="text-[clamp(0.85rem,1.2vw,0.95rem)] leading-relaxed break-words">
                <a href="mailto:support@myfinvision.com" className="text-muted-foreground hover:text-primary transition-colors block mb-1">
                  support@myfinvision.com
                </a>
                <a href="mailto:info@myfinvision.com" className="text-muted-foreground hover:text-primary transition-colors block mb-1">
                  info@myfinvision.com
                </a>
                <a href="mailto:ceo@myfinvision.com" className="text-muted-foreground hover:text-primary transition-colors block mb-1">
                  ceo@myfinvision.com
                </a>
                <a href="mailto:coo@myfinvision.com" className="text-muted-foreground hover:text-primary transition-colors block">
                  coo@myfinvision.com
                </a>
              </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-block glass-card py-4 px-6 md:px-8 rounded-lg glow-box-purple">
            <p className="text-foreground/80 text-[clamp(0.8rem,1.3vw,0.95rem)] font-medium">
              Monday – Saturday: 10:00 AM – 6:00 PM | Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
