"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import WavyUnderline from "./WavyUnderline";

export default function CTA() {
  return (
    <section className="w-full bg-black py-40 px-6 relative overflow-hidden" id="join-us">
      <div className="absolute inset-0 bg-emerald-500/5 blur-[120px] rounded-full scale-150 transform translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20 mb-4 tracking-widest uppercase">
            10 — Let's build together
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display tracking-tighter text-white relative inline-block">
            your first PR is
            <br />
            closer than you <span className="relative inline-block">think<WavyUnderline className="h-4 md:h-8 -bottom-1 md:-bottom-3" /></span>
          </h2>
          
          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto">
            No prior open-source experience needed — just curiosity and a willingness to read someone else's code. We'll help with the rest.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <motion.a 
              href="https://chat.whatsapp.com/Bw3H2hVoUZy8AZZs96QdUy"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto group relative flex items-center justify-center gap-2 bg-emerald-500 text-black px-10 py-5 rounded-full font-medium text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Say hi <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-emerald-400 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </motion.a>
            
            <motion.a 
              href="https://linkedin.com/company/oss-connected"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md px-10 py-5 rounded-full font-medium text-lg text-white border border-white/10 hover:bg-white/10 transition-colors"
            >
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
