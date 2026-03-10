"use client";

import { Instagram, Youtube, Send } from 'lucide-react';

const socialLinks = [
    {
      name: 'Instagram',
      Icon: Instagram,
      handle: '@myfinvisionofficial',
      hoverColor: 'group-hover:text-pink-500',
      href: 'https://www.instagram.com/myfinvisionofficial?igsh=cm4ydTBueHJzZG5x',
    },
  {
    name: 'YouTube',
    Icon: Youtube,
    handle: '@myfinvision',
    hoverColor: 'group-hover:text-red-500',
    href: 'https://youtube.com/@myfinvision?si=53WfMKWlMS-jPJdq',
  },
  {
    name: 'Telegram',
    Icon: Send,
    handle: '@myfinvision',
    hoverColor: 'group-hover:text-primary',
    href: 'https://t.me/myfinvision',
  },
];

const InstituteBanner = () => {
  return (
    <section className="relative py-16 lg:py-20 text-foreground overflow-hidden section-cyan">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-10 left-1/3 w-[450px] h-[450px] bg-accent/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '30px 30px'
      }} />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center items-start gap-8 md:gap-12">
          {socialLinks.map((social, index) => (
            <div key={social.name} className="flex flex-col items-center gap-3" style={{ animationDelay: `${index * 100}ms` }}>
              <a
                href={social.href}
                aria-label={`Follow us on ${social.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full glass-card transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 hover-glow glow-box">
                    <social.Icon
                      className={`h-7 w-7 text-foreground transition-all duration-300 ${social.hoverColor}`}
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <span className="text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors">
                  {social.handle}
                </span>
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[clamp(0.9rem,1.5vw,1rem)] font-medium text-muted-foreground glass-card rounded-full py-3 px-6 inline-block">
          Follow our social media page for the any latest update
        </p>

        <div className="mt-10 relative overflow-hidden glass-card rounded-2xl py-6 glow-box">
          <div className="flex animate-marquee whitespace-nowrap">
            <span className="text-[clamp(1.25rem,3vw,2rem)] font-heading font-black tracking-wider mx-8 gradient-text glow-text">
              AB BANEGA DESH FINANCIALLY INDEPENDENT
            </span>
            <span className="text-[clamp(1.25rem,3vw,2rem)] font-heading font-black tracking-wider mx-8 gradient-text glow-text">
              AB BANEGA DESH FINANCIALLY INDEPENDENT
            </span>
            <span className="text-[clamp(1.25rem,3vw,2rem)] font-heading font-black tracking-wider mx-8 gradient-text glow-text">
              AB BANEGA DESH FINANCIALLY INDEPENDENT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstituteBanner;
