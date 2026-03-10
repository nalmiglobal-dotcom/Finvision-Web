"use client";

import * as React from "react";

export default function ImageCarousel() {
  return (
    <section className="w-full relative h-[400px] md:h-[550px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6/generated_videos/professional-financial-trading-classroom-5b28d0c0-20251112173149.mp4"
          type="video/mp4"
        />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-4 gap-4">
        <h2 className="font-heading font-semibold text-[clamp(1.25rem,3vw,1.75rem)] uppercase tracking-wider text-foreground/80">
          YOUR FINANCIAL JOURNEY
        </h2>
        
        <h1 className="font-heading font-black text-[clamp(3rem,8vw,6rem)] uppercase tracking-wider gradient-text glow-text">
          FINVISION
        </h1>
        
        <h2 className="font-heading font-semibold text-[clamp(1.25rem,3vw,1.75rem)] uppercase tracking-wider text-foreground/80">
          EXPERTISE YOU CAN TRUST
        </h2>
      </div>
    </section>
  );
}
