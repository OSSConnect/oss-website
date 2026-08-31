"use client";

import { motion } from "framer-motion";
import WavyUnderline from "./WavyUnderline";

const testimonials = [
  {
    quote: "Everyone is so kind and humble here. I love to talk to them.",
    author: "Avinash",
    role: "Community Member"
  },
  {
    quote: "An absolute gem of a group with great people who are up for any kind of help — literally the best thing in the India OSS community.",
    author: "Ankit Ram",
    role: "Community Member"
  },
  {
    quote: "It took me around 20 days of effort to see my first PR merged, and that moment was truly special. Still learning, still contributing, just getting started.",
    author: "Vijay Fulwariya",
    role: "Contributor"
  },
  {
    quote: "The people here helped me understand how to approach open source, choose the right projects, and contribute more effectively.",
    author: "Mohammad Sakib",
    role: "Contributor"
  },
  {
    quote: "The meets, the insights, the people around, and the mentorship — not just from the mods but the entire community — helped me a lot. Exactly like OSS!",
    author: "Atishay Jain",
    role: "Community Member"
  },
  {
    quote: "There is no unnecessary hierarchy. Anyone can ask questions, share their thoughts, or help others — that makes the community very welcoming.",
    author: "Mithul Nama",
    role: "GitMCP Contributor"
  },
  {
    quote: "Being able to see how the community works together made all the difference. Thanks to that support, I merged my very first PR in Meshery!",
    author: "Akshita Singh",
    role: "Meshery Contributor"
  },
  {
    quote: "I've got 4 PRs merged on pandas-stubs and pandas — slow but steady, thanks to such good mentors and the weekly meets.",
    author: "Krishna Garg",
    role: "Pandas Contributor"
  }
];

export default function Testimonials() {
  const items = [...testimonials, ...testimonials];

  return (
    <section className="w-full bg-black py-32 overflow-hidden border-t border-white/5" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 mb-20 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20 mb-8 tracking-widest uppercase">
          06 — In Their Words
        </div>
        <h2 className="text-4xl md:text-6xl font-display tracking-tight text-white relative inline-block">
          what the community says
          <WavyUnderline />
        </h2>
      </div>

      <div className="relative flex whitespace-nowrap group">
        <div className="flex shrink-0 animate-[marquee_70s_linear_infinite] group-hover:[animation-play-state:paused] min-w-full justify-around">
          {items.map((item, i) => (
            <div
              key={i}
              className="w-[400px] md:w-[500px] mx-4 md:mx-6 flex-shrink-0 border border-white/10 bg-[#0a0a0a] p-8 md:p-10 rounded-tl-[48px] rounded-br-[48px] rounded-tr-xl rounded-bl-xl hover:border-emerald-500/30 transition-colors whitespace-normal"
            >
              <div className="text-emerald-500 text-4xl font-display mb-4 leading-none">"</div>
              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-8 font-sans">
                {item.quote}
              </p>
              <div>
                <p className="text-white font-medium font-display text-lg">{item.author}</p>
                <p className="text-neutral-500 text-sm">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex shrink-0 animate-[marquee_70s_linear_infinite] group-hover:[animation-play-state:paused] min-w-full justify-around">
          {items.map((item, i) => (
            <div
              key={`dup-${i}`}
              className="w-[400px] md:w-[500px] mx-4 md:mx-6 flex-shrink-0 border border-white/10 bg-[#0a0a0a] p-8 md:p-10 rounded-tl-[48px] rounded-br-[48px] rounded-tr-xl rounded-bl-xl hover:border-emerald-500/30 transition-colors whitespace-normal"
            >
              <div className="text-emerald-500 text-4xl font-display mb-4 leading-none">"</div>
              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-8 font-sans">
                {item.quote}
              </p>
              <div>
                <p className="text-white font-medium font-display text-lg">{item.author}</p>
                <p className="text-neutral-500 text-sm">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
