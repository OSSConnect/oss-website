"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareQuote, BookOpen, Target, Search, HeartHandshake, Mic, FileText } from "lucide-react";
import { sessionTopics, sessionFeedback } from "@/lib/data";
import WavyUnderline from "./WavyUnderline";

const icons = [
  <BookOpen key="1" className="w-6 h-6" />,
  <Target key="2" className="w-6 h-6" />,
  <Search key="3" className="w-6 h-6" />,
  <HeartHandshake key="4" className="w-6 h-6" />,
  <Mic key="5" className="w-6 h-6" />,
  <FileText key="6" className="w-6 h-6" />
];

export default function Sessions() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="w-full bg-black py-32 px-6 border-t border-white/5" id="sessions">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20 mb-6 tracking-widest uppercase">
              08 — Learning In Public
            </div>
            <h2 className="text-4xl md:text-6xl font-display tracking-tight text-white mb-6 relative inline-block">
              Sessions & knowledge sharing.
              <WavyUnderline />
            </h2>
            <p className="text-neutral-400 text-lg">
              Practical sessions turn open-source questions into contribution-ready knowledge. Hover to explore our curriculum.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:text-right"
          >
            <div className="font-display text-5xl md:text-7xl font-semibold text-emerald-400 tracking-tighter">10</div>
            <div className="text-sm text-neutral-500 max-w-[200px] ml-auto">
              Distinct community meet links shared during the first months
            </div>
          </motion.div>
        </div>

        {/* Interactive Accordion Gallery */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[500px] w-full gap-4 mb-24">
          {sessionTopics.map((topic, i) => {
            const isActive = activeIdx === i;
            return (
              <motion.div
                layout
                key={topic.number}
                onMouseEnter={() => setActiveIdx(i)}
                onClick={() => setActiveIdx(i)}
                animate={{
                  flex: isActive ? (typeof window !== 'undefined' && window.innerWidth >= 1024 ? 4 : 1) : 1,
                }}
                className={`relative overflow-hidden rounded-[2rem] border ${
                  isActive ? "border-emerald-500/50 bg-[#0c0c0c]" : "border-white/10 bg-[#050505] hover:bg-[#0a0a0a]"
                } transition-colors cursor-pointer flex flex-col group`}
                style={{
                  minHeight: "100px",
                }}
              >
                {/* Background Glow when active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-50"
                    />
                  )}
                </AnimatePresence>

                <div className="relative h-full flex flex-col lg:flex-row items-start lg:items-center p-6 gap-6">
                  {/* Icon & Number (Always visible) */}
                  <div className="flex lg:flex-col items-center gap-4 shrink-0 h-full justify-between">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isActive ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400" : "bg-white/5 border-white/10 text-white/50"
                    }`}>
                      {icons[i % icons.length]}
                    </div>
                    <div className="font-mono text-sm tracking-widest text-neutral-600 lg:-rotate-90 origin-center whitespace-nowrap">
                      {topic.number}
                    </div>
                  </div>

                  {/* Content (Visible when active or on mobile) */}
                  <motion.div 
                    layout
                    className={`flex-col justify-center h-full ${isActive ? 'flex' : 'hidden lg:hidden'}`}
                  >
                    <motion.h3 
                      layout="position"
                      className="text-2xl md:text-3xl font-display text-white mb-4 leading-tight"
                    >
                      {topic.title}
                    </motion.h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                          className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-sm"
                        >
                          {topic.detail}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Small Feedback Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          <div className="absolute inset-0 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />
          {sessionFeedback.map((quote, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="flex items-center gap-6 rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/0 group-hover:bg-emerald-500/50 transition-colors" />
              <MessageSquareQuote className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors shrink-0 w-10 h-10" />
              <p className="text-neutral-300 text-lg font-medium italic leading-relaxed">"{quote}"</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
