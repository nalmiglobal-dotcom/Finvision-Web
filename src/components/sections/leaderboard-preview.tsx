'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, TrendingUp, ArrowRight, Timer, RefreshCcw, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { INITIAL_TRADERS, generateTraders, getCurrentSeed } from '@/lib/leaderboard-data';
import { useState, useEffect, useCallback, useRef } from 'react';

export default function LeaderboardPreview() {
  const [traders, setTraders] = useState(INITIAL_TRADERS);
  const [timeLeft, setTimeLeft] = useState(() => {
    const now = Date.now();
    const interval = 15 * 60 * 1000;
    return Math.floor((interval - (now % interval)) / 1000);
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const seedRef = useRef(getCurrentSeed());

  const updateTraders = useCallback(() => {
    setIsUpdating(true);
    setTimeout(() => {
      const newSeed = getCurrentSeed();
      seedRef.current = newSeed;
      setTraders(generateTraders(newSeed));
      setIsUpdating(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          updateTraders();
          return 15 * 60;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [updateTraders]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Integrated Teaser Card */}
          <div className="glass-card rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-950/40 backdrop-blur-xl relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Content Column */}
              <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <Trophy className="w-5 h-5 text-primary" />
                    <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">Live Teaser</span>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter">
                      LEADERBOARD <span className="text-primary block">& TOP PERFORMERS</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                      Real-time verification of our student success. Watch live as our top traders dominate the global markets with FinVision precision.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
                      <Timer className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-[9px] text-muted-foreground uppercase font-black tracking-widest">Next Update</p>
                        <p className="font-mono text-primary font-bold">{formatTime(timeLeft)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
                      <RefreshCcw className={`w-5 h-5 text-accent ${isUpdating ? 'animate-spin' : ''}`} />
                      <div>
                        <p className="text-[9px] text-muted-foreground uppercase font-black tracking-widest">Feed Status</p>
                        <p className="text-accent font-bold uppercase text-[10px] tracking-widest">Active Now</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link href="/leaderboard" className="inline-flex items-center gap-4 px-8 py-5 bg-white text-black font-black rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 group">
                      VIEW FULL BOARD <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Data Column */}
              <div className="lg:col-span-7 p-6 md:p-10 lg:p-12 bg-white/[0.02] relative">
                <AnimatePresence>
                  {isUpdating && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-10 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center gap-4"
                    >
                      <RefreshCcw className="w-10 h-10 text-primary animate-spin" />
                      <span className="text-xs font-black uppercase tracking-widest animate-pulse">Syncing Global Data...</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Top Rank Teaser</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[9px] font-black text-green-500 uppercase tracking-widest">Verified Live</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <AnimatePresence mode="popLayout">
                      {traders.slice(0, 5).map((trader, idx) => (
                        <motion.div
                          layout
                          key={trader.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center justify-between p-4 md:p-5 rounded-3xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/10 group cursor-default"
                        >
                          <div className="flex items-center gap-5">
                            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-lg ${
                              idx === 0 ? 'bg-yellow-500/20 text-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.2)]' : 
                              idx === 1 ? 'bg-slate-400/20 text-slate-400' : 
                              idx === 2 ? 'bg-amber-600/20 text-amber-600' : 'bg-primary/10 text-primary/60'
                            }`}>
                              {idx + 1}
                            </div>
                            <div>
                              <p className="font-bold text-lg group-hover:text-primary transition-colors">{trader.name}</p>
                              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">{trader.status}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <motion.div 
                              key={trader.profit}
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="flex items-center justify-end gap-1.5 text-green-400 font-black text-xl tracking-tight"
                            >
                              <TrendingUp className="w-4 h-4" />
                              ₹{trader.profit.toLocaleString()}
                            </motion.div>
                            <p className="text-[9px] text-muted-foreground uppercase font-black tracking-widest mt-1">Single Day Profit</p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  <div className="pt-8 text-center">
                    <p className="text-[10px] font-black text-primary/40 uppercase tracking-[0.3em] py-3 border-t border-white/5">
                      VERIFIED FINVISION DATA BY EXPERTS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
