'use client';

import React, { useState } from 'react';
import {
  Users,
  MonitorPlay,
  LifeBuoy,
  BarChart3,
  Phone,
  Layers,
  Shield,
  Laptop,
  Film,
  School,
  Award,
  ClipboardList,
  Brain,
  type LucideIcon
} from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const serviceData: Service[] = [
  { icon: Users, title: "Offline Classes", description: "Practical Live Trading Classes" },
  { icon: MonitorPlay, title: "Live classes", description: "1+ Hours of Personal Training." },
  { icon: LifeBuoy, title: "Lifetime Free Mentor", description: "Our mentors stay with you beyond the course — guiding your trades, clearing doubts & ensuring consistent growth at no extra cost." },
  { icon: BarChart3, title: "Trading strategies", description: "With 85% + Accuracy" },
  { icon: Phone, title: "Lifetime Free Assistance (Future Support)", description: "Post-course support for your future trading journey — strategy reviews, market guidance & doubt resolution, always free." },
  { icon: Layers, title: "Base Build-Up Classes", description: "Build strong market foundation." },
  { icon: Shield, title: "Risk Management", description: "Protect your investments." },
  { icon: Laptop, title: "100% Practical & Live Trading Classes", description: "Learn by doing, live trading." },
  { icon: Film, title: "Recorded Lectures", description: "Learn at your pace." },
  { icon: School, title: "Classroom And Online Classes", description: "Learn flexibly, in-person or online." },
  { icon: Award, title: "Certification Course", description: "Prove your expertise." },
  { icon: ClipboardList, title: "Mock Test And Study Material", description: "Practice and learn." },
  { icon: Brain, title: "Psychology Build-up classes", description: "Master your trading mind." },
];

const ServiceCard = ({ icon: Icon, title, description }: Service) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleIconClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <div className="group relative flex h-full flex-col items-center justify-start rounded-xl glass-card p-6 text-center transition-all duration-300 hover-lift hover-glow">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 glow-box">
        <Icon 
          className={`h-8 w-8 shrink-0 text-background cursor-pointer transition-all duration-300 ease-in-out ${
            isClicked ? 'scale-125 rotate-12' : ''
          }`}
          onClick={handleIconClick}
        />
      </div>
      <h3 className="mb-2 flex-grow font-heading text-[clamp(0.95rem,1.5vw,1.1rem)] font-semibold text-foreground">
        {title}
      </h3>
      <p className="text-[clamp(0.8rem,1.2vw,0.875rem)] text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="relative section-padding-y overflow-hidden section-cyan">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-[30%] right-[15%] w-[350px] h-[350px] bg-accent/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[15%] left-[20%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '30px 30px'
      }} />

      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold gradient-text-cyan glow-text">
            Our Services
          </h2>
          <p className="mx-auto max-w-3xl text-[clamp(0.9rem,1.5vw,1rem)] leading-relaxed text-muted-foreground">
            We cater to your quest for knowledge through our customized certification programs. Our team of expert instructors, committed support personnel, and round-the-clock helpline combine to establish us as your premier training destination
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceData.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
