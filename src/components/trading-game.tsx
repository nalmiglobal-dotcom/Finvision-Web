'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, X, Trophy, RefreshCcw, TrendingUp } from 'lucide-react';

const GRAVITY = 0.6;
const JUMP_STRENGTH = -10;
const SPAWN_RATE = 1500;
const COIN_SPAWN_RATE = 2000;

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const TradingGame = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'crashed'>('idle');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameLoopRef = useRef<number>();
  
  // Game values
  const bullY = useRef(200);
  const bullVelocity = useRef(0);
  const obstacles = useRef<GameObject[]>([]);
  const coins = useRef<GameObject[]>([]);
  const frameCount = useRef(0);

  useEffect(() => {
    const saved = localStorage.getItem('bull-run-high-score');
    if (saved) setHighScore(parseInt(saved));
  }, []);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    bullY.current = 150;
    bullVelocity.current = 0;
    obstacles.current = [];
    coins.current = [];
    frameCount.current = 0;
  };

  const jump = () => {
    if (gameState === 'playing') {
      bullVelocity.current = JUMP_STRENGTH;
    }
  };

  useEffect(() => {
    if (!isOpen || gameState !== 'playing') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const update = () => {
      frameCount.current++;
      
      // Update Bull
      bullVelocity.current += GRAVITY;
      bullY.current += bullVelocity.current;

      // Ground collision
      if (bullY.current > canvas.height - 40) {
        bullY.current = canvas.height - 40;
        bullVelocity.current = 0;
      }
      if (bullY.current < 0) {
        bullY.current = 0;
        bullVelocity.current = 0;
      }

      // Spawn obstacles (Red candles/Red bars)
      if (frameCount.current % Math.floor(SPAWN_RATE / 16) === 0) {
        obstacles.current.push({
          x: canvas.width,
          y: canvas.height - 60 - Math.random() * 100,
          width: 20,
          height: 60 + Math.random() * 100
        });
      }

      // Spawn coins (Gold currency)
      if (frameCount.current % Math.floor(COIN_SPAWN_RATE / 16) === 0) {
        coins.current.push({
          x: canvas.width,
          y: 50 + Math.random() * 150,
          width: 25,
          height: 25
        });
      }

      // Move & Filter
      obstacles.current.forEach(o => o.x -= 4);
      coins.current.forEach(c => c.x -= 4);
      obstacles.current = obstacles.current.filter(o => o.x > -50);
      coins.current = coins.current.filter(c => c.x > -50);

      // Collisions
      const bullRect = { x: 50, y: bullY.current, width: 40, height: 40 };

      for (const o of obstacles.current) {
        if (
          bullRect.x < o.x + o.width &&
          bullRect.x + bullRect.width > o.x &&
          bullRect.y < o.y + o.height &&
          bullRect.y + bullRect.height > o.y
        ) {
          setGameState('crashed');
          if (score > highScore) {
            setHighScore(score);
            localStorage.setItem('bull-run-high-score', score.toString());
          }
          return;
        }
      }

      for (let i = coins.current.length - 1; i >= 0; i--) {
        const c = coins.current[i];
        if (
          bullRect.x < c.x + c.width &&
          bullRect.x + bullRect.width > c.x &&
          bullRect.y < c.y + c.height &&
          bullRect.y + bullRect.height > c.y
        ) {
          coins.current.splice(i, 1);
          setScore(s => s + 10);
        }
      }

      // Draw
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Grid lines (trading background)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw Bull
      ctx.font = '40px Arial';
      ctx.fillText('🐂', 50, bullY.current + 35);

      // Draw Obstacles (Red Candles)
      obstacles.current.forEach(o => {
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(o.x + 8, o.y, 4, o.height); // Wick
        ctx.fillRect(o.x, o.y + o.height * 0.2, o.width, o.height * 0.6); // Body
      });

      // Draw Coins
      coins.current.forEach(c => {
        ctx.font = '25px Arial';
        ctx.fillText('💰', c.x, c.y + 20);
      });

      gameLoopRef.current = requestAnimationFrame(update);
    };

    gameLoopRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(gameLoopRef.current!);
  }, [isOpen, gameState, score, highScore]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        jump();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState]);

  return (
    <>
      {/* Game Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 group flex items-center gap-3 bg-primary text-white px-5 py-3.5 rounded-full shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-110"
      >
        <div className="relative flex items-center gap-3">
          <TrendingUp className="h-6 w-6 text-white group-hover:rotate-12 transition-transform" />
          <div className="flex flex-col items-start">
            <span className="text-[10px] font-medium opacity-90 uppercase tracking-wider">Play Now</span>
            <span className="text-sm font-bold">Bull Run</span>
          </div>
        </div>
      </button>

      {/* Game Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md p-4"
          >
            <div className="relative w-full max-w-2xl bg-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="h-6 w-6 text-foreground" />
              </button>

              <div className="p-8 text-center">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-left">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <TrendingUp className="text-primary h-6 w-6" />
                      Bull Market Run
                    </h2>
                    <p className="text-muted-foreground text-sm">Collect coins, avoid the crash!</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-right">
                      <p className="text-[10px] text-muted-foreground uppercase">Score</p>
                      <p className="text-xl font-mono font-bold text-primary">{score}</p>
                    </div>
                    <div className="text-right border-l border-white/10 pl-4">
                      <p className="text-[10px] text-muted-foreground uppercase">High Score</p>
                      <p className="text-xl font-mono font-bold text-foreground">{highScore}</p>
                    </div>
                  </div>
                </div>

                <div 
                  className="relative aspect-[16/9] bg-black/40 rounded-2xl overflow-hidden cursor-pointer touch-none"
                  onPointerDown={gameState === 'playing' ? jump : undefined}
                >
                  <canvas
                    ref={canvasRef}
                    width={800}
                    height={450}
                    className="w-full h-full object-contain"
                  />

                  {gameState === 'idle' && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60">
                      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 animate-bounce">
                        <TrendingUp className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Ready for the Bull Run?</h3>
                      <button
                        onClick={startGame}
                        className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
                      >
                        Start Trading
                      </button>
                    </div>
                  )}

                  {gameState === 'crashed' && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-500/20 backdrop-blur-sm">
                      <div className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-2 animate-pulse">
                        MARKET CRASHED! 📉
                      </div>
                      <h3 className="text-4xl font-black mb-4 tracking-tighter">ALL COINS LOST</h3>
                      <div className="flex gap-3">
                        <button
                          onClick={startGame}
                          className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
                        >
                          <RefreshCcw className="h-5 w-5" />
                          Try Again
                        </button>
                        <button
                          onClick={() => setIsOpen(false)}
                          className="bg-white/10 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition-colors"
                        >
                          Exit
                        </button>
                      </div>
                    </div>
                  )}

                  {gameState === 'playing' && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 md:hidden">
                      <p className="text-white/50 text-xs font-medium animate-pulse">Tap anywhere to Jump</p>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Space/Click/Tap to Jump</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span>Avoid Red Candles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span>Collect 💰 for Profit</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
