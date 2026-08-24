"use client";

import { testimonials } from "@/lib/data/community";
import { Quote } from "lucide-react";

export default function TestimonialCarousel() {
  return (
    <section className="bg-oss-bg py-24 border-t border-oss-border" id="testimonials">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-oss-green-deep mb-3">
            Voices from our community
          </h3>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-oss-text">
            Real journeys. Real impact.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i}
              className="bg-white p-8 rounded-2xl border border-oss-border shadow-sm flex flex-col"
            >
              <Quote size={40} className="text-oss-green-deep/20 mb-6" />
              <p className="text-oss-text text-lg leading-relaxed mb-8 flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-oss-card border border-oss-border flex items-center justify-center">
                  <span className="font-semibold text-oss-muted">{testimonial.author.charAt(0)}</span>
                </div>
                <span className="font-semibold text-oss-text">{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
