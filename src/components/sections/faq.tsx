"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What is the duration of the course?",
    answer: "The Basic course duration is 2 weeks and the Advanced course duration is 4 weeks.",
  },
  {
    question: "What will I learn in this course?",
    answer: "You'll learn everything related to forex trading and currency markets – Currency pair analysis, Technical indicators, Chart patterns, Fundamental analysis, Risk management strategies, Trading psychology, and various forex trading strategies including scalping, day trading, and swing trading.",
  },
  {
    question: "Is the course beginner friendly?",
    answer: "Yes, all our courses are beginner friendly.",
  },
  {
    question: "What if I miss the class?",
    answer: "You'll be getting recordings access for lifetime with your registered email ID.",
  },
  {
    question: "Will I get lifetime mentorship in this course?",
    answer: "Yes, you get lifetime support and mentorship from the finvision institute of training team.",
  },
  {
    question: "Will I get a certificate after this course?",
    answer: "Yes, you will be given a certificate after the successful completion of the course.",
  },
  {
    question: "Will there be live trading classes?",
    answer: "Yes, we provide live trading classes.",
  },
  {
    question: "Is our institute NISM registered?",
    answer: "NISM registration requires a licence. Our institute Finvision is in the process of obtaining the required NISM licence to become a registered entity.",
  },
];

const Faq = () => {
  const middleIndex = Math.ceil(faqData.length / 2);
  const leftColumnFaqs = faqData.slice(0, middleIndex);
  const rightColumnFaqs = faqData.slice(middleIndex);

  return (
    <section className="relative section-padding-y overflow-hidden section-purple">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-10 left-1/2 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '30px 30px'
      }} />

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-center gradient-text-purple glow-text-purple mb-4 font-heading">
          Ask FAQ
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-[clamp(0.9rem,1.5vw,1rem)]">
          Find answers to commonly asked questions about our courses
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
          <div>
            <Accordion type="multiple">
              {leftColumnFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card rounded-xl mb-4 border-0 hover-glow transition-all duration-300 glow-box-purple"
                >
                  <AccordionTrigger className="p-5 text-[clamp(0.9rem,1.3vw,1rem)] font-semibold text-left text-foreground hover:no-underline group">
                    {faq.question}
                    <Plus className="h-5 w-5 text-purple-400 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 pt-0 text-[clamp(0.85rem,1.2vw,0.95rem)] text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div>
            <Accordion type="multiple">
              {rightColumnFaqs.map((faq, index) => (
                <AccordionItem
                  key={index + leftColumnFaqs.length}
                  value={`item-${index + leftColumnFaqs.length}`}
                  className="glass-card rounded-xl mb-4 border-0 hover-glow transition-all duration-300 glow-box-purple"
                >
                  <AccordionTrigger className="p-5 text-[clamp(0.9rem,1.3vw,1rem)] font-semibold text-left text-foreground hover:no-underline group">
                    {faq.question}
                    <Plus className="h-5 w-5 text-purple-400 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 pt-0 text-[clamp(0.85rem,1.2vw,0.95rem)] text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
