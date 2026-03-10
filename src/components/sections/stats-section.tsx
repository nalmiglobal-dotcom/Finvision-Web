'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NumberFlow from '@number-flow/react';
import { Users, TrendingUp, Award, Globe2 } from 'lucide-react';

const STATS = [
  {
    label: 'Active Traders',
    value: 12500,
    suffix: '+',
    icon: Users,
    color: 'text-blue-500',
  },
  {
    label: 'Success Rate',
    value: 85,
    suffix: '%',
    icon: TrendingUp,
    color: 'text-emerald-500',
  },
  {
    label: 'Years of Mentors & Trainers Experience',
    value: 12,
    suffix: '+',
    icon: Award,
    color: 'text-amber-500',
  },
  {
    label: 'Countries — Our Vision',
    value: 45,
    suffix: '+',
    icon: Globe2,
    color: 'text-indigo-500',
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 mb-6 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center">
                <NumberFlow value={stat.value} duration={1} />
                <span className="text-zinc-500 ml-1">{stat.suffix}</span>
              </div>
              <p className="text-zinc-400 font-medium tracking-wide uppercase text-xs md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
