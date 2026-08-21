import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import FadeIn from "./FadeIn";
import LinkedinIcon from "./icons/LinkedinIcon";
import { contact } from "@/lib/data";

export default function GetInvolved() {
  return (
    <section id="community" className="border-b border-oss-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn className="relative overflow-hidden rounded-3xl border border-oss-border bg-oss-panel p-10 sm:p-16">
          <div
            className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-oss-lime/10 blur-[100px]"
            aria-hidden
          />

          <div className="relative text-center">
            <span className="mono-tag text-xs text-oss-lime">10 — LET&rsquo;S BUILD TOGETHER</span>
            <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Your first PR is closer than you think.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-oss-muted sm:text-base">
              No prior open-source experience needed — just curiosity and a
              willingness to read someone else&rsquo;s code. We&rsquo;ll
              help with the rest.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-2 rounded-full bg-oss-lime px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
              >
                Say hi
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-oss-border px-6 py-3 text-sm font-medium transition-colors hover:border-oss-lime/50 hover:text-oss-lime"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-3 rounded-xl border border-oss-border bg-oss-card px-4 py-3 text-sm transition-colors hover:border-oss-lime/40"
            >
              <Phone size={16} className="shrink-0 text-oss-lime" />
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 rounded-xl border border-oss-border bg-oss-card px-4 py-3 text-sm transition-colors hover:border-oss-lime/40"
            >
              <Mail size={16} className="shrink-0 text-oss-lime" />
              {contact.email}
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-oss-border bg-oss-card px-4 py-3 text-sm transition-colors hover:border-oss-lime/40"
            >
              <LinkedinIcon size={16} className="shrink-0 text-oss-lime" />
              linkedin.com/company/oss-connected
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-oss-border bg-oss-card px-4 py-3 text-sm">
              <MapPin size={16} className="shrink-0 text-oss-lime" />
              {contact.location}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
