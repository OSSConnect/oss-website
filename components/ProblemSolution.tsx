"use client";

import { motion } from "framer-motion";
import WavyUnderline from "./WavyUnderline";
import { Users, Code, BookOpen, Rocket } from "lucide-react";

const solutionItems = [
  {
    title: "Discover",
    desc: "Where do I start? We help you find projects, understand communities, and learn Git & GitHub contribution workflows.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Contribute",
    desc: "How do real projects actually work? Find issues, improve docs or code, and open a real PR with guidance.",
    icon: <Code className="w-6 h-6" />
  },
  {
    title: "Collaborate",
    desc: "How do I work with maintainers? Learn PR etiquette, gather feedback, iterate and communicate professionally.",
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    title: "Grow",
    desc: "How do I turn a first contribution into long-term impact? Build confidence, contribute consistently and help peers.",
    icon: <Rocket className="w-6 h-6" />
  }
];

export default function ProblemSolution() {
  return (
    <section className="w-full bg-black py-32 px-6" id="about">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* WHO WE ARE */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center space-y-6 max-w-3xl"
          >
            <div className="mb-24">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20 mb-6 tracking-widest uppercase">
                02 — Who We Are
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-display tracking-tight text-white relative inline-block">
              A contributor-driven
              <br />
              <span className="relative inline-block">
                open-source community
                <WavyUnderline className="text-emerald-500/70" />
              </span>
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mt-6">
              OSS | Let's Connect exists to turn curiosity into meaningful contribution. With 800+ members across borders, we connect beginners, active contributors, mentors and maintainers.
            </p>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Through weekly OSS sessions, we help people learn openly, work on real projects, and grow together — from first commit to confident contributor.
            </p>
          </motion.div>
        </div>

        {/* WHY WE EXIST */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 items-start relative">
          
          {/* Sticky Right Content */}
          <div className="lg:sticky lg:top-40 w-full lg:w-1/3 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20 mb-6 tracking-widest uppercase">
                02 — Why We Exist
              </div>
              <h2 className="text-4xl md:text-5xl font-display tracking-tight text-white relative inline-block leading-tight">
                The gap isn't learning to code.
                <br />
                <span className="text-emerald-400">It's learning to contribute.</span>
              </h2>
              <p className="text-neutral-400 text-lg mt-6">
                India has no shortage of developer talent. What many learners lack is a clear pathway into real open-source communities.
              </p>
            </motion.div>
          </div>
          
          {/* Clean List Left */}
          <div className="w-full lg:w-2/3 flex flex-col">
            {solutionItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="py-12 border-t border-white/10 flex flex-col md:flex-row gap-8 items-start first:border-t-0 first:pt-4 group"
              >
                <div className="bg-emerald-500/10 p-4 rounded-2xl shrink-0 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-display tracking-tight text-white mb-3">
                    <span className="text-emerald-500/50 mr-4 font-mono text-lg">0{i + 1}</span>
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
