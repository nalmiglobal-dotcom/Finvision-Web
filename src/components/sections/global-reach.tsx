'use client';

import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { motion } from 'framer-motion';

export default function GlobalReach() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [19.0760, 72.8777], size: 0.1 }, // Mumbai
        { location: [40.7128, -74.0060], size: 0.1 }, // New York
        { location: [51.5074, -0.1278], size: 0.1 }, // London
        { location: [25.2048, 55.2708], size: 0.1 }, // Dubai
        { location: [-33.8688, 151.2093], size: 0.1 }, // Sydney
        { location: [1.3521, 103.8198], size: 0.1 }, // Singapore
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <section className="py-24 bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Empowering Traders <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Across The Globe
              </span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-lg leading-relaxed">
              Our community spans across continents, bringing together elite minds to master the financial markets. We provide the tools, the network, and the expertise to trade from anywhere in the world.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="text-white font-bold text-2xl mb-1">Global Hubs</h4>
                <p className="text-zinc-500 text-sm italic">Strategically located for 24/7 market coverage.</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-2xl mb-1">Seamless Access</h4>
                <p className="text-zinc-500 text-sm italic">High-performance trading infrastructure for everyone.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full" />
            <canvas
              ref={canvasRef}
              style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: 1 }}
              className="relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
