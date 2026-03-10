"use client";

import Image from 'next/image';
import { useState } from 'react';

const features = [
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6/generated_images/flat-cartoon-style-icon-for-risk-managem-1796937e-20251112175107.jpg",
    title: "Risk Management",
    description: "Protect your investments.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6/generated_images/flat-cartoon-style-icon-for-education-fo-e54424cd-20251112175109.jpg",
    title: "Base Build-Up Classes",
    description: "Build strong market foundation.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6/generated_images/flat-cartoon-style-icon-for-lifetime-sup-e021b2db-20251112175107.jpg",
    title: "Lifetime Free Assistance (Future Support)",
    description: "Post-course support for your future trading journey — always free.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6/generated_images/flat-cartoon-style-icon-for-hybrid-learn-1a112851-20251112175108.jpg",
    title: "Classroom And Online Classes",
    description: "Learn flexibly, in-person or online.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6/generated_images/flat-cartoon-style-icon-for-video-record-083bc6f8-20251112175108.jpg",
    title: "Recorded Lectures",
    description: "Learn at your pace.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6/generated_images/flat-cartoon-style-icon-for-live-practic-8d7cbd0e-20251112175108.jpg",
    title: "100% Practical & Live Trading Classes",
    description: "Learn by doing, live trading.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6/generated_images/flat-cartoon-style-icon-for-trading-psyc-c8f40b99-20251112175108.jpg",
    title: "Psychology Build-up classes",
    description: "Master your trading mind.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6/generated_images/flat-cartoon-style-icon-for-mock-test-an-558f33dd-20251112175108.jpg",
    title: "Mock Test And Study Material",
    description: "Practice and learn.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6/generated_images/flat-cartoon-style-icon-for-certificatio-b118e5e3-20251112175108.jpg",
    title: "Certification Course",
    description: "Prove your expertise.",
  },
];

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleIconClick = (index: number) => {
    setActiveIndex(index);
    setTimeout(() => setActiveIndex(null), 300);
  };

  return (
    <section className="relative section-padding-y overflow-hidden section-dark">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-20 right-[15%] w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '3s' }} />
      </div>

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '30px 30px'
      }} />

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-center text-[clamp(1.75rem,4vw,2.5rem)] font-bold gradient-text-orange glow-text-accent mb-12 font-heading">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center glass-card rounded-2xl p-6 hover-lift hover-glow transition-all duration-300 glow-box-accent">
              <div 
                className={`relative w-20 h-20 mb-4 cursor-pointer transition-transform duration-300 hover:scale-110 ${
                  activeIndex === index ? 'scale-125' : 'scale-100'
                }`}
                onClick={() => handleIconClick(index)}
              >
                <Image
                  src={feature.iconSrc}
                  alt={`${feature.title} icon`}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <h3 className="text-[clamp(0.95rem,1.5vw,1.1rem)] font-bold text-foreground mb-2 font-heading">
                {feature.title}
              </h3>
              <p className="text-[clamp(0.8rem,1.2vw,0.875rem)] text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
