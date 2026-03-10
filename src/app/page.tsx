'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import ImageCarousel from '@/components/sections/image-carousel';
import Welcome from '@/components/sections/welcome';
import NewsFeature from '@/components/sections/news-feature';
import MissionVisionGoals from '@/components/sections/mission-vision-goals';
import Courses from '@/components/sections/courses';
import ServicesSection from '@/components/sections/services';
import WhyChooseUs from '@/components/sections/why-choose-us';
import Faq from '@/components/sections/faq';
import TrustedBrands from '@/components/sections/trusted-brands';
import InstituteBanner from '@/components/sections/institute-banner';
import ConnectSection from '@/components/sections/connect';
import Footer from '@/components/sections/footer';
import { LaunchPopup } from '@/components/launch-popup';
import { DisclaimerPopup } from '@/components/disclaimer-popup';
import { RegulatoryDisclaimer } from '@/components/sections/regulatory-disclaimer';
import DailyMarketNews from '@/components/sections/daily-market-news';
import { IntroVideo } from '@/components/intro-video';
import MarketTicker from '@/components/sections/market-ticker';
import StatsSection from '@/components/sections/stats-section';
import LeaderboardPreview from '@/components/sections/leaderboard-preview';
import GlobalReach from '@/components/sections/global-reach';
import { motion } from 'framer-motion';

const Reveal = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <IntroVideo />
      <DisclaimerPopup />
      <LaunchPopup />
      
      {/* High-end Ticker at the absolute top */}
      <MarketTicker />
      
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        <Reveal>
          <StatsSection />
        </Reveal>

        <Reveal>
          <LeaderboardPreview />
        </Reveal>

        <Reveal>
          <DailyMarketNews />
        </Reveal>

        <Reveal>
          <GlobalReach />
        </Reveal>

        <Reveal>
          <ImageCarousel />
        </Reveal>

        <Reveal>
          <Welcome />
        </Reveal>

        <Reveal>
          <NewsFeature />
        </Reveal>

        <Reveal>
          <MissionVisionGoals />
        </Reveal>

        <Reveal>
          <div id="courses">
            <Courses />
          </div>
        </Reveal>

        <Reveal>
          <ServicesSection />
        </Reveal>

        <Reveal>
          <WhyChooseUs />
        </Reveal>

        <Reveal>
          <Faq />
        </Reveal>

        <Reveal>
          <TrustedBrands />
        </Reveal>

        <Reveal>
          <InstituteBanner />
        </Reveal>

        <Reveal>
          <div id="connect">
            <ConnectSection />
          </div>
        </Reveal>

        <Reveal>
          <RegulatoryDisclaimer />
        </Reveal>
      </main>
      
      <Footer />
    </div>
  );
}
