'use client';

import React from 'react';
import { ShieldCheck, AlertTriangle, Scale, BookOpen } from 'lucide-react';

const disclaimerPoints = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Institutional Mission",
    content: "Finvision is a premier training and trading institute. We specialize in financial literacy and professional trading education. We strictly adhere to transparency and ethical standards, ensuring no involvement in money laundering or illicit financial activities."
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    title: "Risk Disclosure",
    content: "Trading in financial markets involves substantial risk of loss and is not suitable for every investor. The high degree of leverage often available can work against you as well as for you. Past performance is not indicative of future results."
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-500" />,
    title: "Educational Purpose",
    content: "All content provided by Finvision is for educational and informational purposes only. No information provided should be construed as financial, investment, or legal advice. Students and visitors are encouraged to perform their own due diligence."
  },
  {
    icon: <Scale className="w-6 h-6 text-emerald-500" />,
    title: "Regulatory Compliance",
    content: "We operate in full compliance with local and international financial regulations. We do not provide investment management services or handle client funds for investment purposes. Our services are strictly educational in nature."
  }
];

export function RegulatoryDisclaimer() {
  return (
    <section className="py-20 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight uppercase tracking-widest text-primary/80">
              Legal & Regulatory Disclaimers
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {disclaimerPoints.map((point, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{point.icon}</div>
                <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.content}
                </p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
            <p className="text-sm font-medium text-foreground mb-4">
              "Finvision is committed to creating a safe, professional, and ethical environment for financial learning. We maintain a zero-tolerance policy towards any fraudulent or illegal financial practices."
            </p>
            <div className="text-xs text-muted-foreground uppercase tracking-tighter">
              Official Institutional Statement
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
