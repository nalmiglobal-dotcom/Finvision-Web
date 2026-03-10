"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IntroVideo() {
  const [showIntro, setShowIntro] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Play every time component mounts
    setShowIntro(true);
  }, []);

  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => {
        setAnimationComplete(true);
        setTimeout(() => {
          sessionStorage.setItem("finvision-intro-seen", "true");
          setShowIntro(false);
        }, 500);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  const handleSkip = () => {
    sessionStorage.setItem("finvision-intro-seen", "true");
    setShowIntro(false);
  };

  if (!showIntro) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: animationComplete ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[10000] flex items-center justify-center bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3a] to-[#0a0a1a] overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
            animate={{
              rotate: [0, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="relative mb-6"
          >
            <motion.div
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 p-1 shadow-2xl shadow-purple-500/30"
              animate={{
                boxShadow: [
                  "0 0 40px rgba(147, 51, 234, 0.3)",
                  "0 0 80px rgba(147, 51, 234, 0.5)",
                  "0 0 40px rgba(147, 51, 234, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-full h-full rounded-xl bg-[#0a0a1a] flex items-center justify-center">
                <motion.span
                  className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  FV
                </motion.span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-black tracking-tight mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                FIN
              </span>
              <span className="text-white">VISION</span>
            </motion.h1>
            
            <motion.p
              className="text-gray-400 text-sm md:text-base tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Financial Education Institute
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-8 flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>

        <motion.button
          onClick={handleSkip}
          className="absolute bottom-8 right-8 text-gray-500 hover:text-white text-sm tracking-wide transition-colors flex items-center gap-2 group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Skip
          <motion.span
            className="group-hover:translate-x-1 transition-transform"
          >
            →
          </motion.span>
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
