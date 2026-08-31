"use client";

import { motion } from "framer-motion";
import { values } from "@/lib/data";
import { Eye, Rocket, Zap, Heart, Shield, RefreshCcw, ArrowRight, ArrowDown } from "lucide-react";
import WavyUnderline from "./WavyUnderline";

const valueIcons = [
  <Zap key="zap" className="w-5 h-5" />,
  <Heart key="heart" className="w-5 h-5" />,
  <Shield key="shield" className="w-5 h-5" />,
  <RefreshCcw key="refresh" className="w-5 h-5" />
];

export default function Purpose() {
  return (
    <section className="w-full bg-black py-32 px-6 border-t border-white/5 relative overflow-hidden" id="purpose">
      {/* Deep ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20 mb-6 tracking-widest uppercase">
            07 — Purpose & Direction
          </div>
          <h2 className="text-4xl md:text-6xl font-display tracking-tight text-white relative inline-block">
            Vision & mission.
            <WavyUnderline />
          </h2>
        </motion.div>

        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* Vision (Takes up 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 rounded-[2rem] border border-white/10 bg-[#050505] p-10 md:p-14 relative overflow-hidden group hover:border-emerald-500/30 transition-colors duration-500"
          >
            <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
              <Eye className="w-64 h-64 text-emerald-500" />
            </div>
            
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              01 — Our Vision
            </span>
            <p className="text-3xl md:text-5xl lg:text-[56px] font-display leading-[1.15] text-white relative z-10 tracking-tight">
              Make India one of the world's most <span className="text-emerald-400">trusted</span>, <span className="text-emerald-400">collaborative</span> and <span className="text-emerald-400">impact-driven</span> open-source contributor ecosystems.
            </p>
          </motion.div>

          {/* Mission (Takes up 1 column) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-[2rem] border border-emerald-500/20 bg-emerald-500/[0.03] p-10 md:p-12 relative overflow-hidden group hover:bg-emerald-500/[0.08] transition-colors duration-500 flex flex-col justify-between"
          >
            <div className="absolute -bottom-10 -right-10 opacity-[0.05] group-hover:opacity-[0.15] transition-all group-hover:-translate-y-4 group-hover:-translate-x-4 duration-700 pointer-events-none">
              <Rocket className="w-48 h-48 text-emerald-500" />
            </div>
            <div>
              <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase block mb-8">
                02 — Our Mission
              </span>
              <p className="text-xl md:text-2xl leading-relaxed text-neutral-300 relative z-10 font-sans">
                Create accessible pathways for developers to learn open source, make meaningful contributions, collaborate with global communities, and grow into mentors and maintainers.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 4 Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div 
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center text-neutral-500 mb-6 group-hover:text-emerald-400 group-hover:border-emerald-500/30 group-hover:scale-110 group-hover:bg-emerald-500/5 transition-all duration-500">
                {valueIcons[i]}
              </div>
              <div className="font-display text-2xl font-medium text-white mb-3 group-hover:text-emerald-300 transition-colors">{v.title}</div>
              <div className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors">{v.detail}</div>
            </motion.div>
          ))}
        </div>

        {/* Pipeline / Flow */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 font-mono tracking-widest uppercase text-[11px] md:text-sm w-full max-w-[250px] md:max-w-none mx-auto"
        >
          <span className="w-full md:w-auto text-center px-5 py-3 md:py-2.5 rounded-full border border-white/10 bg-[#0a0a0a] text-neutral-400">Access</span>
          
          <ArrowRight className="w-4 h-4 text-emerald-500/50 hidden md:block" />
          <ArrowDown className="w-4 h-4 text-emerald-500/50 block md:hidden" />
          
          <span className="w-full md:w-auto text-center px-5 py-3 md:py-2.5 rounded-full border border-white/10 bg-[#0a0a0a] text-neutral-400">Contribution</span>
          
          <ArrowRight className="w-4 h-4 text-emerald-500/50 hidden md:block" />
          <ArrowDown className="w-4 h-4 text-emerald-500/50 block md:hidden" />
          
          <span className="w-full md:w-auto text-center px-5 py-3 md:py-2.5 rounded-full border border-white/10 bg-[#0a0a0a] text-neutral-400">Mentorship</span>
          
          <ArrowRight className="w-4 h-4 text-emerald-500/50 hidden md:block" />
          <ArrowDown className="w-4 h-4 text-emerald-500/50 block md:hidden" />
          
          <span className="w-full md:w-auto text-center px-5 py-3 md:py-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]">Leadership</span>
        </motion.div>

      </div>
    </section>
  );
}
