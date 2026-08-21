"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const match = value.match(/^([\d,]+)(.*)$/);
  const numeric = match ? parseInt(match[1].replace(/,/g, ""), 10) : null;
  const suffix = match ? match[2] : "";
  const hasComma = match ? match[1].includes(",") : false;

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1200, bounce: 0 });

  useEffect(() => {
    if (inView && numeric !== null) motionValue.set(numeric);
  }, [inView, numeric, motionValue]);

  useEffect(() => {
    if (numeric === null || !ref.current) return;
    return spring.on("change", (latest) => {
      if (!ref.current) return;
      const rounded = Math.round(latest);
      ref.current.textContent =
        (hasComma ? rounded.toLocaleString("en-IN") : String(rounded)) + suffix;
    });
  }, [spring, numeric, suffix, hasComma]);

  if (numeric === null) {
    return <span ref={ref}>{value}</span>;
  }

  return <span ref={ref}>0{suffix}</span>;
}
