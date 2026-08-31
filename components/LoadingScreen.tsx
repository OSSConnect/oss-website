"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reveal the site after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const text = "OSS Connect";
  
  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.6 
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, display: "none" },
    show: { 
      opacity: 1, 
      display: "inline-block",
      transition: { duration: 0.1 } 
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          exit={{ 
            y: "-100%", 
            opacity: 0,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] bg-[#030303] flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ scale: 0, rotate: -90, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 14, stiffness: 200, delay: 0.2 }}
              className="relative w-16 h-16 md:w-24 md:h-24 shadow-[0_0_40px_rgba(16,185,129,0.3)] rounded-full"
            >
              <Image src="/oss-connect-logo.png" alt="Logo" fill sizes="(max-width: 768px) 64px, 96px" className="object-contain rounded-full" priority />
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex items-center h-24"
            >
              {text.split("").map((char, i) => (
                <motion.span 
                  key={i} 
                  variants={letterVariants}
                  className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              {/* Blinking Terminal Cursor */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[2px] md:w-[3px] h-10 md:h-12 bg-emerald-500 ml-2"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
