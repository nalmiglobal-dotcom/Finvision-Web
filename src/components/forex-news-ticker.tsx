"use client";

import { useEffect, useState, useCallback } from 'react';
import { AlertTriangle, TrendingUp, Clock, RefreshCw, Newspaper, ChevronRight, ExternalLink } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  impact: 'high' | 'medium' | 'low';
  currency: string;
  time: string;
  actual?: string;
  forecast?: string;
  previous?: string;
}

const currencyFlags: Record<string, string> = {
  USD: '🇺🇸',
  EUR: '🇪🇺',
  GBP: '🇬🇧',
  JPY: '🇯🇵',
  AUD: '🇦🇺',
  CAD: '🇨🇦',
  CHF: '🇨🇭',
  NZD: '🇳🇿',
  CNY: '🇨🇳',
  INR: '🇮🇳',
};

const impactColors = {
  high: 'bg-red-500',
  medium: 'bg-amber-500',
  low: 'bg-emerald-500',
};

const impactBadgeColors = {
  high: 'bg-red-500/10 text-red-600 border-red-500/20',
  medium: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
  low: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
};

export default function ForexNewsTicker() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);

  const fetchNews = useCallback(async () => {
    try {
      const response = await fetch('/api/forex-news');
      const data = await response.json();
      if (data.success && data.news) {
        setNews(data.news);
        setLastUpdated(new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit' 
        }));
      }
    } catch (error) {
      console.error('Failed to fetch forex news:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchNews]);

  const handleForexFactoryClick = () => {
    const url = 'https://www.forexfactory.com/calendar';
    const isInIframe = window.self !== window.top;
    if (isInIframe) {
      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  if (loading) {
    return (
      <div className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-12 gap-2">
            <RefreshCw className="w-4 h-4 text-cyan-400 animate-spin" />
            <span className="text-slate-400 text-sm">Loading market news...</span>
          </div>
        </div>
      </div>
    );
  }

  const duplicatedNews = [...news, ...news, ...news];

  return (
    <div 
      className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center h-11 sm:h-12">
          <div className="flex-shrink-0 flex items-center gap-1.5 sm:gap-2 pr-3 sm:pr-4 border-r border-slate-700/50">
            <div className="relative">
              <Newspaper className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </div>
            <span className="hidden sm:inline text-xs sm:text-sm font-bold text-white tracking-wide">FOREX NEWS</span>
            <span className="sm:hidden text-xs font-bold text-white">NEWS</span>
          </div>

          <div className="flex-1 overflow-hidden mx-2 sm:mx-4">
            <div 
              className="flex items-center gap-4 sm:gap-6"
              style={{
                animation: isHovered ? 'none' : 'ticker 60s linear infinite',
              }}
            >
              {duplicatedNews.map((item, index) => (
                <div 
                  key={`${item.id}-${index}`}
                  className="flex-shrink-0 flex items-center gap-1.5 sm:gap-2 py-1"
                >
                  <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${impactColors[item.impact]} animate-pulse`} />
                  
                  <span className="text-base sm:text-lg" title={item.currency}>
                    {currencyFlags[item.currency] || '🌐'}
                  </span>
                  
                  <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap max-w-[150px] sm:max-w-none truncate sm:overflow-visible">
                    {item.title}
                  </span>
                  
                  <span className={`hidden sm:inline-flex px-1.5 py-0.5 text-[10px] font-semibold rounded border ${impactBadgeColors[item.impact]} uppercase`}>
                    {item.impact}
                  </span>
                  
                  <span className="flex items-center gap-0.5 sm:gap-1 text-slate-400 text-[10px] sm:text-xs whitespace-nowrap">
                    <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    {item.time}
                  </span>

                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 flex items-center gap-1.5 sm:gap-3 pl-2 sm:pl-4 border-l border-slate-700/50">
            <div className="hidden md:flex items-center gap-1 text-slate-500 text-xs">
              <RefreshCw className="w-3 h-3" />
              <span>{lastUpdated}</span>
            </div>
            
            <button
              onClick={handleForexFactoryClick}
              className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-md text-cyan-400 text-[10px] sm:text-xs font-semibold transition-all duration-300 hover:scale-105"
            >
              <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="hidden sm:inline">Forex Factory</span>
              <span className="sm:hidden">FF</span>
              <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
}
