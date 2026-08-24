"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { stats } from "@/lib/data/community";

export default function MindsetShift() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Calculate opacity/y for the text sequence based on scroll position
  const step1Opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.3, 0.4], [0, 1, 1, 0]);
  const step2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0]);
  const step3Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const step4Opacity = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1.0], [0, 1, 1, 1]); // Stays visible

  const step1Y = useTransform(scrollYProgress, [0.1, 0.2, 0.3, 0.4], [50, 0, 0, -50]);
  const step2Y = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6], [50, 0, 0, -50]);
  const step3Y = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [50, 0, 0, -50]);
  const step4Y = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1.0], [50, 0, 0, 0]);

  return (
    <section ref={containerRef} className="bg-white py-32" id="impact">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Mindset Shift Animation */}
        <div className="h-[400px] flex items-center justify-center relative overflow-hidden border-b border-oss-border pb-20 mb-20">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.h2 
              className="absolute font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gray-300 text-center"
              style={{ opacity: step1Opacity, y: step1Y }}
            >
              I CAN&rsquo;T
            </motion.h2>
            <motion.h2 
              className="absolute font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gray-400 text-center"
              style={{ opacity: step2Opacity, y: step2Y }}
            >
              I DON&rsquo;T KNOW WHERE TO START
            </motion.h2>
            <motion.h2 
              className="absolute font-display text-5xl md:text-7xl lg:text-8xl font-bold text-oss-green text-center"
              style={{ opacity: step3Opacity, y: step3Y }}
            >
              FIRST PR MERGED
            </motion.h2>
            <motion.h2 
              className="absolute font-display text-6xl md:text-8xl lg:text-9xl font-bold text-oss-green-deep text-center"
              style={{ opacity: step4Opacity, y: step4Y }}
            >
              I DID.
            </motion.h2>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div className="flex flex-col gap-2">
            <span className="font-display text-5xl md:text-6xl font-bold text-oss-text">{stats.members}</span>
            <span className="text-oss-muted font-medium uppercase tracking-wider text-sm">Community Members</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-display text-5xl md:text-6xl font-bold text-oss-text">{stats.sessions}</span>
            <span className="text-oss-muted font-medium uppercase tracking-wider text-sm">Sessions Conducted</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-display text-5xl md:text-6xl font-bold text-oss-text">{stats.reach}</span>
            <span className="text-oss-muted font-medium uppercase tracking-wider text-sm">People Reached</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-display text-5xl md:text-6xl font-bold text-oss-green">I did</span>
            <span className="text-oss-muted font-medium uppercase tracking-wider text-sm">Mindset Shift</span>
          </div>
        </div>

      </div>
    </section>
  );
}
