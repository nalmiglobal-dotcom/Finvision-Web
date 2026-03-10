import React from "react";
import { Target, Eye, Goal } from "lucide-react";

interface MissionCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  glowColor: string;
}

const cardsData: MissionCardProps[] = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To democratize financial knowledge and empower individuals to achieve financial independence through expert guidance, innovative teaching methodologies, and a focus on practical application.",
    gradient: "from-primary to-cyan-400",
    glowColor: "glow-box"
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To foster financial growth by empowering individuals to become successful investors. We aim to create a financially stable society through education and mentorship.",
    gradient: "from-purple-500 to-pink-500",
    glowColor: "glow-box-purple"
  },
  {
    icon: Goal,
    title: "Our Goal",
    description:
      "To be India's leading financial education provider. We aim to empower individuals with the knowledge and skills needed to succeed in the stock market and create a brighter financial future.",
    gradient: "from-accent to-yellow-500",
    glowColor: "glow-box-accent"
  },
];

const MissionVisionGoals = () => {
  return (
    <section id="mission-vision-goals" className="relative section-padding-y overflow-hidden section-dark">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-[20%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-[20%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 2xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 2xl:gap-12">
          {cardsData.map((card) => (
            <div key={card.title} className={`glass-card rounded-2xl p-6 lg:p-8 2xl:p-12 text-center hover-lift hover-glow transition-all duration-300 ${card.glowColor}`}>
              <div className={`mx-auto w-16 h-16 2xl:w-20 2xl:h-20 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 2xl:mb-10`}>
                <card.icon className="w-8 h-8 2xl:w-10 2xl:h-10 text-background" />
              </div>
              <h3 className={`font-heading text-[clamp(1.5rem,2.5vw,1.75rem)] 2xl:text-[clamp(2rem,2.5vw,2.25rem)] font-bold mb-4 2xl:mb-6 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                {card.title}
              </h3>
              <p className="text-muted-foreground text-[clamp(0.85rem,1.2vw,0.95rem)] 2xl:text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionGoals;
