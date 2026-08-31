"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import WavyUnderline from "./WavyUnderline";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 to-black pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <Image 
            src="/oss-connect-logo.png" 
            alt="OSS Let's Connect Logo" 
            width={64} 
            height={64} 
            className="rounded-full shadow-[0_0_30px_rgba(52,211,153,0.3)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md mb-6 text-emerald-400"
        >
          <span className="text-sm font-medium">OSS | Let's connect</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-[72px] leading-[1.05] tracking-tight font-display mb-6 drop-shadow-2xl"
        >
          Building India's <span className="text-neutral-400">next generation</span><br />
          of open-source <span className="relative text-neutral-400 inline-block">
            contributors.
            <WavyUnderline animate />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-base md:text-lg text-neutral-300 max-w-2xl font-sans mb-8 drop-shadow-lg"
        >
          A contributor-driven open-source community turning curiosity into meaningful contribution — from first commit to confident contributor.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <motion.a 
            href="https://chat.whatsapp.com/Bw3H2hVoUZy8AZZs96QdUy"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium text-base overflow-hidden w-full sm:w-auto justify-center"
          >
            <span className="relative z-10 flex items-center gap-2">
              Join Us <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-neutral-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </motion.a>
          
          <motion.a 
            href="https://github.com/OSSConnect"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-8 py-4 rounded-full font-medium text-base text-white border border-white/20 hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
          >
            <GithubIcon size={20} /> Our Community
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
