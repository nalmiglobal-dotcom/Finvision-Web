"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Zap, TrendingUp, Download } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

const personalityTraits = [
  {
    title: "Communication",
    description: "Master the art of expressing ideas clearly and listening actively. Build strong interpersonal connections through effective verbal and non-verbal communication.",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6/generated_images/modern-minimalist-icon-for-communication-c9f8a53f-20251117161908.jpg",
    gradient: "from-primary to-cyan-400"
  },
  {
    title: "Teamwork",
    description: "Collaborate seamlessly with diverse groups. Learn to leverage collective strengths and achieve shared goals through unity and cooperation.",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6/generated_images/modern-minimalist-icon-for-teamwork-mult-e6ebfb0d-20251117161908.jpg",
    gradient: "from-accent to-yellow-500"
  },
  {
    title: "Problem-Solving",
    description: "Develop critical thinking skills to analyze challenges and create innovative solutions. Turn obstacles into opportunities for growth.",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6/generated_images/modern-minimalist-icon-for-problem-solvi-b89c7420-20251117161909.jpg",
    gradient: "from-yellow-500 to-amber-400"
  },
  {
    title: "Leadership",
    description: "Inspire and guide others toward success. Cultivate vision, decision-making abilities, and the courage to lead by example.",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6/generated_images/modern-minimalist-icon-for-leadership-pe-88541690-20251117161907.jpg",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Work Ethics",
    description: "Build a foundation of integrity, responsibility, and professionalism. Demonstrate commitment to excellence in every endeavor.",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6/generated_images/modern-minimalist-icon-for-work-ethics-s-40d6868d-20251117161908.jpg",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Empathy",
    description: "Connect with others on a deeper level by understanding their feelings and perspectives. Build meaningful relationships through compassion.",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6/generated_images/modern-minimalist-icon-for-empathy-two-h-f08ca0eb-20251117161908.jpg",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Creativity",
    description: "Unlock your innovative potential and think outside the box. Transform imagination into reality with original ideas and unique approaches.",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6/generated_images/modern-minimalist-icon-for-creativity-ar-ef6bc4bd-20251117161907.jpg",
    gradient: "from-indigo-500 to-purple-500"
  }
];

export default function PersonalityDevelopment() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    wpNumber: '',
    address: '',
    dateOfJoining: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hello! I want to enroll in the Personality Development Program.\n\nName: ${formData.name}\nWhatsApp Number: ${formData.wpNumber}\nAddress: ${formData.address}\nPreferred Date of Joining: ${formData.dateOfJoining}`;
    
    const whatsappUrl = `https://wa.me/919630065800?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsDialogOpen(false);
    setFormData({ name: '', wpNumber: '', address: '', dateOfJoining: '' });
  };

  return (
    <section className="relative section-padding-y overflow-hidden section-dark">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-20 right-[10%] w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '3s' }} />
      </div>

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '30px 30px'
      }} />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold gradient-text-orange glow-text-accent mb-4 text-[clamp(1.75rem,4vw,2.5rem)] font-heading">
            Personality Development
          </h2>
          <p className="text-[clamp(0.9rem,1.5vw,1rem)] text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform yourself into a well-rounded professional with essential life skills that drive success in both personal and professional spheres.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {personalityTraits.map((trait, index) => (
            <div
              key={trait.title}
              className="group relative glass-card rounded-2xl p-6 hover-lift hover-glow transition-all duration-300 glow-box-accent overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${trait.gradient} rounded-t-2xl`} />
              
              <div className="relative w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${trait.gradient} rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                <div className="relative w-full h-full rounded-xl overflow-hidden glass-card">
                  <Image
                    src={trait.icon}
                    alt={trait.title}
                    fill
                    className="object-cover p-2"
                  />
                </div>
              </div>

              <h3 className="text-[clamp(1.1rem,2vw,1.25rem)] font-bold text-foreground mb-3 text-center group-hover:text-accent transition-colors font-heading">
                {trait.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center text-[clamp(0.85rem,1.2vw,0.9rem)]">
                {trait.description}
              </p>

              <div className={`absolute bottom-0 left-0 right-0 h-0 group-hover:h-1 bg-gradient-to-r ${trait.gradient} rounded-b-2xl transition-all duration-500`} />
            </div>
          ))}
        </div>

        <div className="mt-12 relative overflow-hidden rounded-2xl glass-card glow-box">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[100px] animate-blob" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-0 left-1/2 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '4s' }} />
          </div>

          <div className="relative z-10 text-center p-8 lg:p-12">
            <div className="flex justify-center items-center gap-6 mb-6">
              <Sparkles className="w-8 h-8 text-accent animate-pulse" />
              <Zap className="w-10 h-10 text-primary animate-bounce" />
              <TrendingUp className="w-8 h-8 text-purple-400 animate-pulse" />
            </div>

            <h3 className="text-[clamp(1.5rem,4vw,2.5rem)] font-black mb-6 gradient-text glow-text font-heading">
              Ready to Transform Yourself?
            </h3>
            
            <p className="text-[clamp(1rem,2vw,1.25rem)] mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join our comprehensive personality development program and unlock your full potential. 
              Build skills that last a lifetime and set yourself apart in today's competitive world.
            </p>
            
            <button 
              onClick={() => setIsDialogOpen(true)}
              className="group relative bg-gradient-to-r from-primary to-accent text-background px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <span className="relative flex items-center gap-3">
                <Sparkles className="w-5 h-5" />
                Enroll Now
                <Zap className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <a
            href="https://pdflink.to/0a226e8d/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 glass-card text-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-accent/10 transition-all duration-300 hover:scale-105 border border-accent/30 hover-glow"
          >
            <Download className="w-4 h-4 text-accent group-hover:animate-bounce" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px] glass-card border-white/10">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold gradient-text">Enroll in Personality Development</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Fill in your details to start your transformation journey. We'll connect with you on WhatsApp.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-foreground">
                Full Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full bg-white/5 border-white/10 text-foreground"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="wpNumber" className="text-sm font-semibold text-foreground">
                WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <Input
                id="wpNumber"
                name="wpNumber"
                type="tel"
                placeholder="Enter your WhatsApp number"
                value={formData.wpNumber}
                onChange={handleInputChange}
                required
                className="w-full bg-white/5 border-white/10 text-foreground"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="address" className="text-sm font-semibold text-foreground">
                Address <span className="text-red-500">*</span>
              </label>
              <Input
                id="address"
                name="address"
                type="text"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full bg-white/5 border-white/10 text-foreground"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="dateOfJoining" className="text-sm font-semibold text-foreground">
                Preferred Date of Joining <span className="text-red-500">*</span>
              </label>
              <Input
                id="dateOfJoining"
                name="dateOfJoining"
                type="date"
                value={formData.dateOfJoining}
                onChange={handleInputChange}
                required
                className="w-full bg-white/5 border-white/10 text-foreground"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-accent text-background py-3 rounded-lg font-bold text-base hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:scale-105 transition-all duration-300"
            >
              Submit & Connect on WhatsApp
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
