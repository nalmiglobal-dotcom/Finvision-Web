import { NextResponse } from 'next/server';

interface ForexNewsItem {
  id: string;
  title: string;
  impact: 'high' | 'medium' | 'low';
  currency: string;
  time: string;
  actual?: string;
  forecast?: string;
  previous?: string;
}

export async function GET() {
  try {
    const response = await fetch('https://nfs.faireconomy.media/ff_calendar_thisweek.json', {
      next: { revalidate: 300 },
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch forex news');
    }

    const data = await response.json();
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const newsItems: ForexNewsItem[] = data
      .filter((item: { date: string }) => {
        const itemDate = new Date(item.date);
        itemDate.setHours(0, 0, 0, 0);
        return itemDate >= today;
      })
      .slice(0, 15)
      .map((item: { 
        title: string; 
        impact: string; 
        country: string; 
        date: string;
        actual?: string;
        forecast?: string;
        previous?: string;
      }, index: number) => ({
        id: `news-${index}`,
        title: item.title,
        impact: item.impact?.toLowerCase() === 'high' ? 'high' : 
                item.impact?.toLowerCase() === 'medium' ? 'medium' : 'low',
        currency: item.country,
        time: formatEventTime(item.date),
        actual: item.actual || undefined,
        forecast: item.forecast || undefined,
        previous: item.previous || undefined,
      }));

    return NextResponse.json({ 
      success: true, 
      news: newsItems,
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching forex news:', error);
    
    const fallbackNews: ForexNewsItem[] = [
      { id: '1', title: 'USD Interest Rate Decision', impact: 'high', currency: 'USD', time: 'Today' },
      { id: '2', title: 'EUR CPI Flash Estimate', impact: 'high', currency: 'EUR', time: 'Today' },
      { id: '3', title: 'GBP GDP Growth Rate', impact: 'medium', currency: 'GBP', time: 'Today' },
      { id: '4', title: 'JPY BoJ Policy Statement', impact: 'high', currency: 'JPY', time: 'Tomorrow' },
      { id: '5', title: 'AUD Employment Change', impact: 'medium', currency: 'AUD', time: 'Tomorrow' },
      { id: '6', title: 'CAD Core Retail Sales', impact: 'medium', currency: 'CAD', time: 'This Week' },
      { id: '7', title: 'CHF SNB Interest Rate', impact: 'high', currency: 'CHF', time: 'This Week' },
      { id: '8', title: 'NZD Trade Balance', impact: 'low', currency: 'NZD', time: 'This Week' },
    ];
    
    return NextResponse.json({ 
      success: true, 
      news: fallbackNews,
      lastUpdated: new Date().toISOString(),
      isFallback: true
    });
  }
}

function formatEventTime(dateStr: string): string {
  const eventDate = new Date(dateStr);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const eventDay = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
  
  if (eventDay.getTime() === today.getTime()) {
    return eventDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  } else if (eventDay.getTime() === tomorrow.getTime()) {
    return 'Tomorrow ' + eventDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  } else {
    return eventDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  }
}
