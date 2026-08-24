"use client";

import { Search, Code2, Users, TrendingUp } from "lucide-react";

export default function WhyWeExist() {
  const journey = [
    {
      num: "01",
      title: "Discover",
      desc: "Where should I start?",
      icon: Search,
    },
    {
      num: "02",
      title: "Contribute",
      desc: "How do real projects actually work?",
      icon: Code2,
    },
    {
      num: "03",
      title: "Collaborate",
      desc: "How do I work with maintainers and communities professionally?",
      icon: Users,
    },
    {
      num: "04",
      title: "Grow",
      desc: "How do I turn my first contribution into long-term impact?",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="bg-oss-green-deep text-white py-24" id="about">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Narrative */}
          <div className="lg:col-span-5 flex flex-col gap-6 sticky top-32">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-oss-mint">
              Why we exist?
            </h3>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              We exist to make OSS meaningful, accessible and healthy.
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mt-4">
              India has no shortage of talent, but there is a gap in mentorship and awareness. 
              We try to put our hearts and souls into reducing this gap by helping new contributors make genuine, healthy contributions rather than flaky ones.
            </p>
          </div>

          {/* Right: Journey Steps */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
              {journey.map((step, i) => (
                <div 
                  key={i} 
                  className="relative group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-display text-3xl font-bold text-oss-mint/60 group-hover:text-oss-mint transition-colors">
                      {step.num}
                    </span>
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-oss-mint group-hover:scale-110 transition-transform">
                      <step.icon size={24} />
                    </div>
                  </div>
                  <h4 className="text-2xl font-semibold mb-3">{step.title}</h4>
                  <p className="text-white/70">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
