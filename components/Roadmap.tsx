"use client";

import { motion } from "framer-motion";
import { roadmapStats, roadmapSteps } from "@/lib/data";
import WavyUnderline from "./WavyUnderline";

export default function Roadmap() {
  return (
    <section className="w-full bg-black py-32 px-6 border-t border-white/5" id="roadmap">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20 mb-6 tracking-widest uppercase">
            09 — Our Next Chapter
          </div>
          <h2 className="text-4xl md:text-6xl font-display tracking-tight text-white mb-6 relative inline-block">
            Roadmap 2026 – 27.
            <WavyUnderline />
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mb-6">
            From a fast-growing community to a national open-source contributor ecosystem.
          </p>
          <div className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-mono tracking-widest text-orange-400 uppercase">
            Targets — Not current achievements
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {roadmapStats.map((s, i) => (
            <div key={s.label} className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 text-center hover:border-emerald-500/30 transition-colors">
              <div className="font-display text-4xl md:text-5xl font-semibold text-emerald-400 mb-3">
                {s.value}
              </div>
              <div className="text-sm font-medium text-neutral-400">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="relative mt-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 relative z-10 gap-12 lg:gap-0">
            {/* The horizontal connecting line that splits the 2 rows */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent -translate-y-1/2 hidden lg:block pointer-events-none" />

            {roadmapSteps.map((step, i) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className={`relative group flex flex-col items-center text-center w-full px-4
                  ${i === 0 ? "lg:col-start-1 lg:row-start-1 lg:justify-end" : ""}
                  ${i === 1 ? "lg:col-start-2 lg:row-start-2 lg:justify-start" : ""}
                  ${i === 2 ? "lg:col-start-3 lg:row-start-1 lg:justify-end" : ""}
                  ${i === 3 ? "lg:col-start-4 lg:row-start-2 lg:justify-start" : ""}
                `}
              >
                {/* Node dot exactly at the row boundary */}
                <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-emerald-500 rounded-full z-20 hidden lg:block group-hover:bg-emerald-400 group-hover:scale-125 group-hover:shadow-[0_0_20px_#10b981] transition-all duration-300
                  ${i % 2 === 0 ? "bottom-0 translate-y-1/2" : "top-0 -translate-y-1/2"}
                `} />
                
                {/* Short vertical connector line spanning the padding */}
                <div className={`absolute left-1/2 -translate-x-1/2 w-[2px] h-12 bg-emerald-500/20 hidden lg:block z-10 group-hover:bg-emerald-500/60 transition-colors duration-300
                  ${i % 2 === 0 ? "bottom-0" : "top-0"}
                `} />

                {/* Text Content */}
                <div className={`relative z-30 flex flex-col items-center max-w-[250px] mx-auto bg-black lg:bg-transparent ${
                  i % 2 === 0 ? "lg:mb-12" : "lg:mt-12"
                }`}>
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-sm tracking-widest mb-4 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-300">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-display text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">{step.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-sm">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 text-center text-sm font-mono tracking-widest text-neutral-500 uppercase"
        >
          Community → Contributors → Mentors → Maintainers
        </motion.div>
      </div>
    </section>
  );
}
