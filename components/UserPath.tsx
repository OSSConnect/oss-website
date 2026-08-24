"use client";

import { ArrowRight, Sparkles, GitPullRequest, Code, Briefcase } from "lucide-react";
import Link from "next/link";

export default function UserPath() {
  const paths = [
    {
      title: "I'm new to open source",
      action: "Start discovering",
      href: "#explore",
      icon: Sparkles,
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      title: "I want to contribute",
      action: "Find your first issue",
      href: "#programs",
      icon: GitPullRequest,
      color: "bg-green-50 text-oss-green-deep border-green-200",
    },
    {
      title: "I'm already contributing",
      action: "Grow with the community",
      href: "#community",
      icon: Code,
      color: "bg-purple-50 text-purple-600 border-purple-200",
    },
    {
      title: "I'm a maintainer",
      action: "Explore collaboration",
      href: "#join",
      icon: Briefcase,
      color: "bg-orange-50 text-orange-600 border-orange-200",
    },
  ];

  return (
    <section className="bg-oss-card py-24" id="paths">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-oss-text">
            What brings you here?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((path, i) => (
            <Link 
              key={i}
              href={path.href}
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-oss-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-6 border ${path.color} transition-transform group-hover:scale-110`}>
                <path.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-oss-text mb-4">{path.title}</h3>
              <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-oss-muted group-hover:text-oss-green-deep transition-colors">
                {path.action}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}
