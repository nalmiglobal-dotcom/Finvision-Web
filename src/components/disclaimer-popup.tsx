'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, X, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DisclaimerPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    if (!hasSeenDisclaimer) {
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenDisclaimer', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <button
                onClick={handleClose}
                className="p-1 rounded-full hover:bg-muted transition-colors text-muted-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Official Disclaimer</h2>
                  <p className="text-sm text-muted-foreground italic">Important Notice to All Visitors</p>
                </div>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p className="font-semibold text-foreground">
                  Finvision is strictly a professional training and trading institute.
                </p>
                <p>
                  We are dedicated solely to financial education, market analysis, and skill development. We <span className="text-primary font-bold">DO NOT</span> engage in, facilitate, or promote money laundering, pyramid schemes, or any form of illegal financial activities.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg border border-border/50 flex gap-3">
                  <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs">
                    All our activities are strictly educational and professional. Any attempt to use our platform for illicit purposes will be reported to the relevant authorities immediately.
                  </p>
                </div>
                <p>
                  By proceeding, you acknowledge that you understand our mission is educational and that you will comply with all national and international financial regulations.
                </p>
              </div>

              <div className="mt-8">
                <Button 
                  onClick={handleClose}
                  className="w-full h-12 text-base font-semibold"
                >
                  I Understand & Accept
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
