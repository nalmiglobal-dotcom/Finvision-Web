'use client';

import { CheckCircle2, Quote, Star } from 'lucide-react';
import Image from 'next/image';

const mentors = [
  {
    name: 'Shrinu',
    role: 'Tutor',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-19-at-12.01.45-AM-1766083045352.jpeg?width=8000&height=8000&resize=contain'
  },
  {
    name: 'Sandeep',
    role: 'Tutor',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-19-at-12.03.19-AM-1766083100139.jpeg?width=8000&height=8000&resize=contain'
  }
];

const supportTeamLeader = {
  name: 'VARSHA AGRAWAL',
  role: 'Team Leader',
  image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6/file_0000000023d07208b17d48287a3edcac-1770458930648.png?width=8000&height=8000&resize=contain'
};

const supportExperts = [
  {
    name: 'SHIVANI SINGH',
    role: 'Support Expert',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6/WhatsApp-Image-2026-01-07-at-7.10.06-PM-1767818037411.jpeg?width=8000&height=8000&resize=contain'
  },
  {
    name: 'AASHIYAN BANO',
    role: 'Support Expert',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6/1764177923310-1767818084694.jpg?width=8000&height=8000&resize=contain'
  },
  {
    name: 'INDU DEWANGAN',
    role: 'Support Expert',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6/WhatsApp-Image-2026-01-09-at-11.57.13-1770459477126.jpeg?width=8000&height=8000&resize=contain'
  }
];

const testimonials = [
  {
    name: "Aryan Sharma",
    review: "Finvision changed my perspective on the markets. I came for Forex trading but stayed for the personality development. Shrinu's mentorship helped me stay calm under pressure, which is vital for any trader.",
    rating: 5
  },
  {
    name: "Sneha Patel",
    review: "The environment at Finvision is truly inspiring. The guidance on market discipline and Sandeep's technical depth made Forex trading feel intuitive. I've gained more than just trading skills; I've gained a professional mindset.",
    rating: 5
  },
  {
    name: "Rahul Verma",
    review: "What I learned at Finvision about Forex trading and personality development is priceless. The practical approach to global markets and the focus on emotional intelligence during trading have made me a more consistent and confident individual.",
    rating: 5
  }
];

const Welcome = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden section-purple">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[5%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-20 right-[10%] w-[350px] h-[350px] bg-pink-500/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '3s' }} />
      </div>

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '30px 30px'
      }} />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold gradient-text-purple glow-text-purple">
            WELCOMING YOU
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          <div className="lg:col-span-6">
            <div className="glass-card rounded-2xl p-6 lg:p-8 hover-glow transition-all duration-300 glow-box-purple">
              <Quote className="w-10 h-10 text-purple-400/30 mb-4" />
              <div className="space-y-6 text-[clamp(0.95rem,1.2vw,1.1rem)] text-justify text-muted-foreground leading-relaxed">
                <p className="font-heading text-xl font-semibold text-foreground italic mb-4">
                  "Finvision was born from a simple yet profound realization: that financial empowerment is the cornerstone of personal and national growth."
                </p>
                <p>
                  Our inauguration isn't just a ceremony; it's the official launch of a movement to democratize market wisdom. We believe that every individual carries the seed of a successful investor, waiting for the right guidance to flourish.
                </p>
                <p>
                  Our idea is to blend rigorous market technicals with the art of self-mastery, creating traders who are as emotionally resilient as they are financially astute. We are here to transform the fear of the unknown into the thrill of opportunity and build a community that rises together.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8">
                {['Mission', 'Vision', 'Our Goal'].map((item) => (
                  <div 
                    key={item}
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={() => scrollToSection('mission-vision-goals')}
                  >
                    <CheckCircle2 className="h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform" strokeWidth={2} />
                    <span className="font-heading font-semibold text-foreground group-hover:text-purple-400 transition-colors text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 text-center">
            <div className="glass-card rounded-2xl p-6 lg:p-8 hover-glow transition-all duration-300 glow-box-purple h-full flex flex-col">
              <div className="mt-4 mb-8">
                <p className="font-heading font-semibold text-[clamp(1rem,2vw,1.25rem)] leading-tight text-foreground/90">
                  let's come together and make
                </p>
                <h3 className="font-black uppercase mt-2">
                  <span className="font-heading text-[clamp(2rem,4vw,3rem)] gradient-text-purple glow-text-purple">INDIA</span>
                </h3>
                <p className="font-heading font-bold text-[clamp(0.85rem,1.5vw,1rem)] uppercase mt-1 text-foreground/80">
                  Economically Independent
                </p>
              </div>
              
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">Support Experts</h4>
                    
                    {/* Team Leader - Varsha on top */}
                    <div className="flex justify-center mb-6">
                      <div className="group w-48">
                        <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 glow-box-purple border border-purple-500/20">
                          <Image
                            src={supportTeamLeader.image}
                            alt={supportTeamLeader.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 25vw"
                          />
                        </div>
                        <h4 className="font-heading font-bold text-foreground text-[10px] sm:text-xs uppercase tracking-wider">{supportTeamLeader.name}</h4>
                        <p className="text-[9px] sm:text-[10px] text-purple-400 font-semibold">{supportTeamLeader.role}</p>
                      </div>
                    </div>

                    {/* Support Experts below */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-2xl mx-auto">
                      {supportExperts.map((expert) => (
                        <div key={expert.name} className="group">
                          <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 glow-box-purple border border-purple-500/20">
                            <Image
                              src={expert.image}
                              alt={expert.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                            />
                          </div>
                          <h4 className="font-heading font-bold text-foreground text-[10px] sm:text-xs uppercase tracking-wider">{expert.name}</h4>
                          <p className="text-[9px] sm:text-[10px] text-purple-400 font-semibold">{expert.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-purple-500/10">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">Our Core Mentors</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 max-w-md mx-auto">
                      {mentors.map((mentor) => (
                        <div key={mentor.name} className="group">
                          <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 glow-box-purple border border-purple-500/20">
                            <Image
                              src={mentor.image}
                              alt={mentor.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                            />
                          </div>
                          <h4 className="font-heading font-bold text-foreground text-[10px] sm:text-xs uppercase tracking-wider">{mentor.name}</h4>
                          <p className="text-[9px] sm:text-[10px] text-purple-400 font-semibold">{mentor.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* Student Reviews Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Student Experiences</h3>
            <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl hover-glow transition-all duration-300 glow-box-purple flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-purple-400 text-purple-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-6 flex-1 text-justify">
                  "{testimonial.review}"
                </p>
                <div className="pt-4 border-t border-purple-500/10">
                  <h4 className="font-heading font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-purple-400">Finvision Student</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
