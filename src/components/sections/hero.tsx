"use client";

import { useEffect, useState, useActionState } from "react";
import Image from "next/image";
import { Download, IndianRupee, ArrowDown, ArrowUp, Sparkles, AppWindow, Smartphone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { sendEnquiryEmail } from "@/app/actions/send-enquiry";
import { usePWAInstall } from "@/hooks/use-pwa-install";
import { motion, AnimatePresence } from "framer-motion";

const BitcoinRain = () => {
  const [coins, setCoins] = useState<{ id: number; x: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoins((prev) => [
        ...prev.slice(-20),
        {
          id: Date.now() + Math.random(),
          x: (Math.random() - 0.5) * 40, // Tighter spread from center
          delay: Math.random() * 0.2,
          size: 12 + Math.random() * 8, // Smaller size: 12px to 20px
        },
      ]);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 -z-10 w-48 h-[500px] pointer-events-none">
      <AnimatePresence>
        {coins.map((coin) => (
          <motion.div
            key={coin.id}
            initial={{ opacity: 0, y: -40, x: coin.x, rotate: 0 }}
            animate={{ opacity: [0, 1, 1, 0], y: 400, rotate: 360 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "linear", delay: coin.delay }}
            className="absolute top-0 left-1/2 -translate-x-1/2"
            style={{ width: coin.size, height: coin.size }}
          >
            <img
              src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025"
              alt="Bitcoin"
              className="w-full h-full object-contain filter drop-shadow-[0_0_5px_rgba(247,147,26,0.5)]"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const Hero = () => {
  const { isInstallable, install, isInstalled, showIOSInstructions, setShowIOSInstructions } = usePWAInstall();
  const [animate, setAnimate] = useState(false);
  const [state, formAction, isPending] = useActionState(sendEnquiryEmail, {
    success: undefined,
    error: undefined,
    message: undefined,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (state.success && state.formData) {
      toast.success(state.message || 'Enquiry submitted successfully!');
      
      const message = `*New Enquiry from FINVISION Website*

📝 *Full Name:* ${state.formData.name}
📱 *Mobile:* +91 ${state.formData.mobile}
📧 *Email:* ${state.formData.email}

_Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}_`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappNumber = '919630065800';
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }, 1500);
    } else if (state.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center mesh-gradient">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-40 right-[10%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/3 w-[450px] h-[450px] bg-purple-500/20 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20 2xl:py-28">
          <div className="flex justify-center items-center pb-8 lg:pb-12 2xl:pb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse" />
              <div className="relative glass-card p-4 lg:p-6 2xl:p-8 rounded-full glow-box">
                <IndianRupee className="h-8 w-8 lg:h-10 lg:w-10 2xl:h-12 2xl:w-12 text-primary" />
                <BitcoinRain />
              </div>
            </div>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 2xl:gap-x-20 gap-y-12 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="font-heading font-extrabold leading-tight">
              <span className="text-foreground block text-[clamp(1.5rem,4vw,2.5rem)] 2xl:text-[clamp(2rem,4vw,3.5rem)]">
                READY TO TRANSFORM YOUR PORTFOLIO WITH
              </span>
              <span className="gradient-text block text-[clamp(2rem,5vw,3.5rem)] 2xl:text-[clamp(3rem,5vw,4.5rem)] mt-2 glow-text">
                FINVISION
              </span>
              <span className="text-foreground/80 block text-[clamp(1.2rem,3vw,1.8rem)] 2xl:text-[clamp(1.5rem,3vw,2.2rem)] mt-1">
                INSTITUTE OF TRAINING
              </span>
            </h1>

            <div className="relative mt-8 lg:mt-12 2xl:mt-16">
              <h3 className="font-numbers text-[clamp(1.5rem,3vw,2rem)] 2xl:text-[clamp(2rem,3vw,2.5rem)] font-bold uppercase text-foreground pb-4">
                READY TO TRANSFORM
              </h3>
              <span
                className={`block absolute bottom-[10px] left-0 w-full h-[3px] bg-gradient-to-r from-primary to-accent transition-transform duration-700 ease-out rounded-full ${
                  animate ? "scale-x-100" : "scale-x-0"
                }`}
                style={{ transformOrigin: "left", transitionDelay: "200ms" }}
              />
              <span
                className={`block absolute bottom-[5px] left-0 w-full h-[2px] bg-primary/50 blur-sm transition-transform duration-700 ease-out ${
                  animate ? "scale-x-100" : "scale-x-0"
                }`}
                style={{ transformOrigin: "left" }}
              />
            </div>

              <button
                onClick={install}
                className="mt-8 glass-card text-foreground rounded-lg px-6 py-3 font-semibold text-sm flex items-center gap-2 hover:bg-primary/10 transition-all hover:scale-105 hover-glow border border-primary/30"
              >
                <AppWindow className="h-5 w-5 text-primary" />
                <span>Install FINVISION App</span>
              </button>
          </div>

          <div className="glass-card rounded-2xl p-6 lg:p-8 w-full max-w-md mx-auto gradient-border hover-glow transition-all duration-300">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <h2 className="text-[clamp(1.25rem,3vw,1.75rem)] font-bold text-center gradient-text">
                Enquire Now
              </h2>
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <form action={formAction} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter Full Name*"
                    className="h-12 rounded-lg px-4 bg-foreground/5 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
                    required
                    disabled={isPending}
                  />
                </div>
                <div>
                  <div className="relative">
                    <Input
                      type="tel"
                      name="mobile"
                      placeholder="Enter Mobile No.*"
                      className="h-12 pl-[85px] rounded-lg bg-foreground/5 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
                      required
                      disabled={isPending}
                      pattern="[0-9]{10}"
                      title="Please enter a 10-digit mobile number"
                    />
                    <div className="absolute left-0 top-0 h-full flex items-center border-r border-border/50 bg-foreground/5 rounded-l-lg px-3">
                      <span role="img" aria-label="India flag">🇮🇳</span>
                      <span className="ml-1.5 text-sm font-medium text-foreground/80">+91</span>
                    </div>
                  </div>
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter Email ID*"
                    className="h-12 rounded-lg px-4 bg-foreground/5 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
                    required
                    disabled={isPending}
                  />
                </div>

              <div className="pt-2 text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-background rounded-lg px-12 h-auto text-base font-semibold py-3.5 disabled:opacity-50 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:scale-105 transition-all duration-300"
                  disabled={isPending}
                >
                  {isPending ? 'Submitting...' : 'Submit'}
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16">
          <div className="flex items-center gap-4 glass-card px-6 py-4 rounded-xl hover:scale-105 transition-all duration-300 hover-glow border border-red-500/20">
            <span className="font-heading text-lg font-semibold uppercase text-foreground">
              Before Joining
            </span>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6-thetradinginstitute-in/assets/images/Untitled-1s-4.png"
              alt="Declining chart"
              width={135}
              height={45}
              className="opacity-80"
            />
            <ArrowDown className="text-red-500 h-7 w-7" />
          </div>
          <div className="flex items-center gap-4 glass-card px-6 py-4 rounded-xl hover:scale-105 transition-all duration-300 hover-glow border border-green-500/20">
            <span className="font-heading text-lg font-semibold uppercase text-foreground">
              After Joining
            </span>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6-thetradinginstitute-in/assets/images/Untitled-1s-copy-3.png"
              alt="Ascending chart"
              width={135}
              height={45}
              className="opacity-80"
            />
            <ArrowUp className="text-green-500 h-7 w-7" />
          </div>
        </div>
      </div>

      {showIOSInstructions && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-background border border-primary/20 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setShowIOSInstructions(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-6">
              <div className="bg-gradient-to-br from-primary to-accent w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/20">
                <Smartphone className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Install on iOS</h3>
              <p className="text-muted-foreground text-sm">Add FINVISION to your home screen for quick access</p>
            </div>

            <div className="space-y-4 text-left">
              <div className="flex gap-4">
                <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <p className="text-foreground font-semibold">Tap the Share button</p>
                  <p className="text-muted-foreground text-sm">Look for the share icon in Safari (square with arrow)</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <p className="text-foreground font-semibold">Select "Add to Home Screen"</p>
                  <p className="text-muted-foreground text-sm">Scroll down and tap this option</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <p className="text-foreground font-semibold">Tap "Add"</p>
                  <p className="text-muted-foreground text-sm">Confirm to add the app to your home screen</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowIOSInstructions(false)}
              className="w-full mt-8 bg-gradient-to-r from-primary to-accent text-background font-bold py-3.5 rounded-xl hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-300 hover:scale-[1.02]"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
