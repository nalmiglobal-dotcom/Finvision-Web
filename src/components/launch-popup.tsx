"use client";

import { useEffect, useState } from "react";
import { X, Sparkles, MapPin, TrendingUp, Users, ArrowRight } from "lucide-react";
import { useSpotsRemaining } from "@/hooks/use-spots-remaining";
import { motion, AnimatePresence } from "framer-motion";

export const LaunchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTitleBanner, setShowTitleBanner] = useState(false);
  const { spotsLeft } = useSpotsRemaining();

  const cities = [
    "NAGPUR",
    "JABALPUR", 
    "BILASPUR",
    "JAGDALPUR",
    "RANCHI"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setShowTitleBanner(true);
    }, 500);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-[340px] overflow-hidden rounded-[2rem] bg-zinc-950/90 backdrop-blur-2xl border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]"
              >
                {/* Animated Gradient Border */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                
                <div className="p-6">
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-zinc-900 transition-colors z-10"
                  >
                    <X className="w-4 h-4 text-zinc-500" />
                  </button>

                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
                    >
                      <Sparkles className="w-2.5 h-2.5" />
                      Expansion 2026
                    </motion.div>

                    <h2 className="text-2xl font-black text-white mb-1 tracking-tight uppercase leading-[0.9]">
                      Next <span className="text-primary">Phase</span>
                    </h2>
                    
                    <p className="text-zinc-500 text-[11px] font-medium mb-6 leading-relaxed">
                      Launching in 5 new premium locations
                    </p>

                    <div className="flex flex-wrap justify-center gap-1.5 w-full mb-6">
                      {cities.map((city, index) => (
                        <motion.div
                          key={city}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.05 }}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/80 border border-white/5 hover:border-primary/40 transition-all group"
                        >
                          <MapPin className="w-2.5 h-2.5 text-zinc-600 group-hover:text-primary transition-colors" />
                          <span className="text-zinc-300 font-bold text-[9px] tracking-widest">{city}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-col items-center gap-3 w-full">
                      <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: "rgb(var(--primary))", color: "white" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleClose}
                        className="w-full py-3.5 bg-white text-black text-xs font-black rounded-xl flex items-center justify-center gap-2 group transition-all"
                      >
                        JOIN THE WAITLIST
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                      
                      <div className="flex items-center gap-2 text-zinc-600 text-[9px] font-bold tracking-widest">
                        <Users className="w-2.5 h-2.5" />
                        {spotsLeft} EXCLUSIVE SLOTS LEFT
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTitleBanner && (
          <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-24 left-0 right-0 z-[9997] px-4 pointer-events-none"
          >
            <div className="max-w-3xl mx-auto pointer-events-auto">
              <div className="bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-4 shadow-2xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 overflow-hidden">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-bold text-primary tracking-widest uppercase">Now Launching In</span>
                    <p className="text-sm font-black text-white truncate tracking-tighter">
                      NAGPUR • JABALPUR • BILASPUR • JAGDALPUR • RANCHI
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowTitleBanner(false)}
                  className="p-2 hover:bg-zinc-800 rounded-xl transition-colors"
                >
                  <X className="w-4 h-4 text-zinc-500" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
