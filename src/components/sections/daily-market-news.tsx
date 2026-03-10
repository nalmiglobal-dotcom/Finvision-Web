"use client";

import { useEffect, useState, useCallback } from 'react';
import { Clock, TrendingUp, ExternalLink, RefreshCw, AlertTriangle, Newspaper, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

const impactColors = {
  high: 'text-red-500 bg-red-500/10 border-red-500/20',
  medium: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
  low: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
};

const currencyFlags: Record<string, string> = {
  USD: '🇺🇸', EUR: '🇪🇺', GBP: '🇬🇧', JPY: '🇯🇵', 
  AUD: '🇦🇺', CAD: '🇨🇦', CHF: '🇨🇭', NZD: '🇳🇿',
};

const DailyMarketNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  const fetchNews = useCallback(async () => {
    try {
      const response = await fetch('/api/forex-news');
      const data = await response.json();
      if (data.success && data.news) {
        setNews(data.news);
        setLastUpdated(new Date().toLocaleTimeString());
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

  const handleExternalClick = () => {
    const url = 'https://www.forexfactory.com/calendar';
    window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
  };

  return (
    <section className="py-16 bg-background relative overflow-hidden section-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Live Analysis
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-center gradient-text glow-text">
            Daily Market News (Live)
          </h2>
          <p className="text-muted-foreground mt-4 text-center max-w-2xl text-[clamp(0.9rem,1.2vw,1.1rem)]">
            Stay ahead of the curve with real-time economic data and high-impact events powered by Forex Factory.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Square News Box */}
          <div className="relative w-full max-w-[500px] 2xl:max-w-[700px] aspect-square group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <Card className="relative h-full glass-card border-border/50 glow-box flex flex-col overflow-hidden rounded-2xl">
              <CardHeader className="flex flex-row items-center justify-between border-b border-border/50 bg-foreground/5 p-5 2xl:p-8">
                <div className="flex items-center gap-3 2xl:gap-5">
                  <div className="p-2 2xl:p-3 bg-primary/20 rounded-lg">
                    <Newspaper className="w-5 h-5 2xl:w-7 2xl:h-7 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg 2xl:text-2xl font-bold text-foreground">Economic Box</CardTitle>
                    <p className="text-[10px] 2xl:text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3 2xl:w-4 2xl:h-4" />
                      Updated: {lastUpdated || 'Just now'}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={handleExternalClick}
                  className="p-2 2xl:p-3 bg-foreground/5 hover:bg-foreground/10 text-muted-foreground hover:text-primary rounded-full transition-all border border-border/50"
                  title="View full calendar"
                >
                  <ExternalLink className="w-4 h-4 2xl:w-6 2xl:h-6" />
                </button>
              </CardHeader>
              
              <CardContent className="p-0 flex-1 flex flex-col min-h-0">
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                  {loading ? (
                    <div className="h-full flex flex-col items-center justify-center gap-4 py-12 2xl:py-20">
                      <div className="relative">
                        <RefreshCw className="w-10 h-10 2xl:w-16 2xl:h-16 text-primary animate-spin" />
                        <div className="absolute inset-0 blur-lg bg-primary/20 animate-pulse" />
                      </div>
                      <p className="text-sm 2xl:text-lg font-medium text-muted-foreground animate-pulse">Syncing Global Markets...</p>
                    </div>
                  ) : news.length > 0 ? (
                    <div className="divide-y divide-border/20">
                      {news.map((item) => (
                        <div 
                          key={item.id} 
                          className="p-4 2xl:p-6 hover:bg-foreground/5 transition-all cursor-default group/item"
                        >
                          <div className="flex items-start justify-between gap-4 2xl:gap-8">
                            <div className="flex gap-3 2xl:gap-5">
                              <div className="flex flex-col items-center justify-center min-w-[50px] h-[50px] 2xl:min-w-[70px] 2xl:h-[70px] bg-foreground/5 rounded-xl border border-border/50 group-hover/item:border-primary/30 transition-colors">
                                <span className="text-lg 2xl:text-2xl leading-none mb-1">
                                  {currencyFlags[item.currency] || '🌐'}
                                </span>
                                <span className="text-[10px] 2xl:text-xs font-black text-primary">{item.currency}</span>
                              </div>
                              <div>
                                <h4 className="font-bold text-sm 2xl:text-lg text-foreground line-clamp-1 group-hover/item:text-primary transition-colors">
                                  {item.title}
                                </h4>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className="text-[10px] 2xl:text-xs font-mono font-bold text-muted-foreground">{item.time}</span>
                                  <span className={`text-[9px] 2xl:text-[11px] px-1.5 py-0.5 rounded-md font-black uppercase border ${impactColors[item.impact]}`}>
                                    {item.impact}
                                  </span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              {item.actual ? (
                                <div className="animate-in fade-in slide-in-from-right-2 duration-500">
                                  <p className="text-[9px] 2xl:text-[11px] text-muted-foreground uppercase font-black tracking-tighter">Actual</p>
                                  <p className={`text-sm 2xl:text-xl font-black ${item.actual.includes('-') ? 'text-red-400' : 'text-green-400'}`}>
                                    {item.actual}
                                  </p>
                                </div>
                              ) : (
                                <div className="p-1.5 2xl:p-2 bg-foreground/5 rounded-lg">
                                  <Globe className="w-4 h-4 2xl:w-6 2xl:h-6 text-muted-foreground/20 animate-pulse" />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center p-8 2xl:p-12 text-center gap-4">
                      <div className="p-4 2xl:p-6 bg-muted/20 rounded-full">
                        <AlertTriangle className="w-8 h-8 2xl:w-12 2xl:h-12 text-muted-foreground/30" />
                      </div>
                      <div>
                        <p className="text-sm 2xl:text-lg font-bold text-foreground">Quiet Markets</p>
                        <p className="text-xs 2xl:text-base text-muted-foreground mt-1">No high-impact economic events currently active.</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-4 2xl:p-6 bg-foreground/5 border-t border-border/50">
                  <button 
                    onClick={handleExternalClick}
                    className="w-full group/btn flex items-center justify-center gap-2 py-3 2xl:py-5 bg-gradient-to-r from-primary to-accent text-background font-black text-xs 2xl:text-sm uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300"
                  >
                    <span>Full Economic Calendar</span>
                    <TrendingUp className="w-4 h-4 2xl:w-6 2xl:h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyMarketNews;
