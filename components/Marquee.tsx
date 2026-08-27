"use client";

import { Code2, Shield, Users, Zap } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";

const words = [
  { text: "discover", icon: <Users className="w-5 h-5 text-emerald-400" /> },
  { text: "contribute", icon: <Code2 className="w-5 h-5 text-emerald-400" /> },
  { text: "collaborate", icon: <GithubIcon size={20} className="text-emerald-400" /> },
  { text: "grow", icon: <Zap className="w-5 h-5 text-emerald-400" /> },
  { text: "community", icon: <Shield className="w-5 h-5 text-emerald-400" /> },
];

export default function Marquee() {
  const items = [...words, ...words, ...words, ...words, ...words, ...words];

  return (
    <div className="w-full bg-[#050505] py-5 border-y border-white/10 overflow-hidden flex whitespace-nowrap">
      <div className="flex shrink-0 animate-[marquee_50s_linear_infinite] min-w-full justify-around">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-6 mx-8">
            <span className="font-display text-xl tracking-widest text-white/80 uppercase">{item.text}</span>
            {item.icon}
          </div>
        ))}
      </div>
      <div className="flex shrink-0 animate-[marquee_50s_linear_infinite] min-w-full justify-around">
        {items.map((item, i) => (
          <div key={`dup-${i}`} className="flex items-center gap-6 mx-8">
            <span className="font-display text-xl tracking-widest text-white/80 uppercase">{item.text}</span>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
