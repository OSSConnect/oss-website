"use client";

import { motion } from "framer-motion";
import WavyUnderline from "./WavyUnderline";

export default function Metrics() {
  return (
    <section className="w-full bg-black py-32 px-6 border-t border-white/5" id="impact">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20 mb-6 tracking-widest uppercase">
            03 — Our Impact
          </div>
          <h2 className="text-4xl md:text-6xl font-display tracking-tight text-white relative inline-block">
            From curiosity to contribution.
            <WavyUnderline />
          </h2>
          <p className="text-neutral-400 text-lg mt-6 max-w-2xl mx-auto">
            Since launch, 500+ students have been supported through their first open-source milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center space-y-4 group"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tighter text-white group-hover:scale-105 transition-transform duration-500">
              800+
            </h2>
            <div className="space-y-2 flex flex-col items-center">
              <h3 className="text-xl font-display tracking-tight text-emerald-400">
                Members
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                Contributors across borders
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center text-center space-y-4 group"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tighter text-white group-hover:scale-105 transition-transform duration-500">
              500+
            </h2>
            <div className="space-y-2 flex flex-col items-center">
              <h3 className="text-xl font-display tracking-tight text-emerald-400">
                Students Supported
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                Through first OSS milestones
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center space-y-4 group"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tighter text-white group-hover:scale-105 transition-transform duration-500">
              20+
            </h2>
            <div className="space-y-2 flex flex-col items-center">
              <h3 className="text-xl font-display tracking-tight text-emerald-400">
                Projects
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                Across the OSS ecosystem
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center text-center space-y-4 group"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tighter text-white group-hover:scale-105 transition-transform duration-500">
              10
            </h2>
            <div className="space-y-2 flex flex-col items-center">
              <h3 className="text-xl font-display tracking-tight text-emerald-400">
                Knowledge Sessions
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                Shared in the first months
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
