'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const MARKET_DATA = [
  { pair: 'EUR/USD', price: '1.0842', change: '+0.12%', trend: 'up' },
  { pair: 'GBP/USD', price: '1.2634', change: '-0.05%', trend: 'down' },
  { pair: 'USD/JPY', price: '149.32', change: '+0.21%', trend: 'up' },
  { pair: 'XAU/USD', price: '2024.15', change: '+0.45%', trend: 'up' },
  { pair: 'BTC/USD', price: '52140.00', change: '+1.20%', trend: 'up' },
  { pair: 'ETH/USD', price: '2815.45', change: '-0.32%', trend: 'down' },
  { pair: 'AUD/USD', price: '0.6542', change: '+0.08%', trend: 'up' },
  { pair: 'USD/CAD', price: '1.3482', change: '0.00%', trend: 'neutral' },
  { pair: 'NZD/USD', price: '0.6124', change: '-0.15%', trend: 'down' },
];

export default function MarketTicker() {
  return (
    <div className="bg-zinc-950 border-b border-zinc-800/50 py-2 overflow-hidden sticky top-0 z-[60]">
      <Marquee gradient={false} speed={40} pauseOnHover>
        {MARKET_DATA.map((item, index) => (
          <div key={index} className="flex items-center gap-4 mx-8 text-xs font-medium">
            <span className="text-zinc-400">{item.pair}</span>
            <span className="text-zinc-100 tabular-nums">{item.price}</span>
            <span className={`flex items-center gap-1 ${
              item.trend === 'up' ? 'text-emerald-400' : 
              item.trend === 'down' ? 'text-rose-400' : 'text-zinc-500'
            }`}>
              {item.trend === 'up' && <TrendingUp className="w-3 h-3" />}
              {item.trend === 'down' && <TrendingDown className="w-3 h-3" />}
              {item.trend === 'neutral' && <Minus className="w-3 h-3" />}
              {item.change}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
