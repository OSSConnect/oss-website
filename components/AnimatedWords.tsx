"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.035 },
  },
};

const word = {
  hidden: { opacity: 0, y: "0.4em", filter: "blur(5px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function AnimatedWords({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      initial="hidden"
      animate="show"
      transition={{ delayChildren: delay }}
      variants={container}
      className={className}
    >
      {text.split(" ").map((w, i) => (
        <motion.span key={i} variants={word} className="inline-block will-change-transform">
          {w}
          {i < text.split(" ").length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
