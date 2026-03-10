'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Trophy, TrendingUp, ArrowDownCircle, ArrowUpCircle, Wallet, Target, ArrowRight, Star as StarIcon, RefreshCcw, Timer, Sparkles } from 'lucide-react';
import { INITIAL_TRADERS, generateTraders, getCurrentSeed } from '@/lib/leaderboard-data';
import { useState, useEffect, useCallback, useRef } from 'react';

export default function LeaderboardPage() {
  const [traders, setTraders] = useState(INITIAL_TRADERS);
  const [timeLeft, setTimeLeft] = useState(() => {
    const now = Date.now();
    const interval = 15 * 60 * 1000;
    return Math.floor((interval - (now % interval)) / 1000);
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const seedRef = useRef(getCurrentSeed());

  const updateLeaderboard = useCallback(() => {
    setIsUpdating(true);
    
    setTimeout(() => {
      const newSeed = getCurrentSeed();
      seedRef.current = newSeed;
      setTraders(generateTraders(newSeed));
      setLastUpdate(new Date());
      setIsUpdating(false);
    }, 1500);
  }, []);

  useEffect(() => {
    setLastUpdate(new Date());

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          updateLeaderboard();
          return 15 * 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [updateLeaderboard]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto">
          {/* Investmin Promotion Banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto mb-16 p-1 rounded-3xl bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x shadow-2xl shadow-primary/20"
          >
            <div className="bg-background/90 backdrop-blur-xl rounded-[23px] p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 blur-[100px] -z-10" />
              
              <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl shadow-primary/40 group-hover:scale-110 transition-transform duration-500">
                  <TrendingUp className="w-12 h-12 text-background" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
                    <StarIcon className="w-3 h-3 text-green-500 fill-green-500" />
                    <span className="text-green-500 text-[10px] font-black uppercase tracking-widest">Recommended Broker</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-3 text-foreground tracking-tight">
                    Start Trading with <span className="text-primary">Nalmifx</span>
                  </h3>
                  <p className="text-muted-foreground text-lg max-w-xl">
                    Experience lightning-fast execution and institutional-grade spreads. Join thousands of our successful students on the most trusted platform.
                  </p>
                </div>
              </div>
              
              <button 
                onClick={() => window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: "https://nalmifx.com" } }, "*")}
                className="w-full lg:w-auto px-10 py-5 bg-primary text-background font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 text-lg"
              >
                WEBSITE <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="text-primary font-bold text-sm tracking-widest uppercase">Student Leaderboard</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Top Performing <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Traders</span>
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Timer className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Next Update: <span className="font-mono text-primary">{formatTime(timeLeft)}</span></span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <RefreshCcw className={`w-4 h-4 text-accent ${isUpdating ? 'animate-spin' : ''}`} />
                <span className="text-sm font-medium">
                  Last Updated: <span className="text-accent">{lastUpdate?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-green-500 uppercase tracking-widest">Live Updates</span>
              </div>
            </div>
          </motion.div>

          {/* Leaderboard Table */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="glass-card rounded-3xl overflow-hidden shadow-2xl border border-white/5 relative"
          >
            <AnimatePresence>
              {isUpdating && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-50 bg-background/60 backdrop-blur-sm flex items-center justify-center"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                      <RefreshCcw className="w-12 h-12 text-primary animate-spin" />
                      <Sparkles className="w-6 h-6 text-accent absolute -top-2 -right-2 animate-pulse" />
                    </div>
                    <span className="text-lg font-black tracking-widest uppercase animate-pulse">Recalculating Rankings...</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="px-6 py-6 font-bold text-sm uppercase tracking-wider">Rank</th>
                    <th className="px-6 py-6 font-bold text-sm uppercase tracking-wider">Trader</th>
                    <th className="px-6 py-6 font-bold text-sm uppercase tracking-wider">Deposit</th>
                    <th className="px-6 py-6 font-bold text-sm uppercase tracking-wider">Single Day Profit</th>
                    <th className="px-6 py-6 font-bold text-sm uppercase tracking-wider">Withdrawal</th>
                    <th className="px-6 py-6 font-bold text-sm uppercase tracking-wider text-red-400">Min Loss</th>
                    <th className="px-6 py-6 font-bold text-sm uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <AnimatePresence mode="popLayout">
                    {traders.map((trader, idx) => (
                      <motion.tr 
                        layout
                        key={trader.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ 
                          layout: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
                          opacity: { duration: 0.2 }
                        }}
                        className="hover:bg-white/5 transition-colors group"
                      >
                        <td className="px-6 py-5 font-bold">
                          <span className={`
                            ${idx === 0 ? 'text-yellow-500 scale-110 inline-block' : 
                              idx === 1 ? 'text-slate-400 scale-105 inline-block' : 
                              idx === 2 ? 'text-amber-600 scale-105 inline-block' : 'text-primary'}
                          `}>
                            #{idx + 1}
                          </span>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-[10px] font-bold text-background shadow-lg shadow-primary/20">
                              {trader.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span className="font-semibold group-hover:text-primary transition-colors">{trader.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5 font-medium">₹{trader.deposit.toLocaleString()}</td>
                        <td className="px-6 py-5">
                          <motion.div 
                            key={trader.profit}
                            initial={{ scale: 1.2, color: '#4ade80' }}
                            animate={{ scale: 1, color: '#4ade80' }}
                            className="flex items-center gap-2 font-bold"
                          >
                            <ArrowUpCircle className="w-4 h-4" />
                            ₹{trader.profit.toLocaleString()}
                          </motion.div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2 text-blue-400 font-medium">
                            <Wallet className="w-4 h-4" />
                            ₹{trader.withdrawal.toLocaleString()}
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <motion.div 
                            key={trader.loss}
                            initial={{ scale: 1.1, color: '#f87171' }}
                            animate={{ scale: 1, color: '#f87171' }}
                            className="flex items-center gap-2 font-medium"
                          >
                            <ArrowDownCircle className="w-4 h-4" />
                            ₹{trader.loss.toLocaleString()}
                          </motion.div>
                        </td>
                        <td className="px-6 py-5">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                            trader.status === 'Legend' ? 'bg-yellow-500/20 border-yellow-500/30 text-yellow-500' :
                            trader.status === 'Master' ? 'bg-purple-500/20 border-purple-500/30 text-purple-500' :
                            trader.status === 'Elite' ? 'bg-blue-500/20 border-blue-500/30 text-blue-500' :
                            'bg-green-500/20 border-green-500/30 text-green-500'
                          }`}>
                            {trader.status}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
              <div className="p-8 bg-white/[0.02] text-center border-t border-white/5">
                <p className="text-xs font-black text-primary/40 uppercase tracking-[0.4em]">
                  VERIFIED FINVISION DATA BY EXPERTS
                </p>
              </div>
            </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
