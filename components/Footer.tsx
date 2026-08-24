"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function Footer() {
  return (
    <footer className="bg-oss-green-deep text-white">
      {/* Final CTA Section */}
      <div className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to build in the open?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join the community and start your open-source journey. Whether you are looking for your first PR or your next maintainer role.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#join"
              className="group flex items-center gap-2 rounded-full bg-white text-oss-green-deep px-8 py-4 text-base font-semibold transition-all hover:bg-gray-100"
            >
              Join Community
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Links & Info */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight mb-6">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-oss-green-deep">
                <span className="text-sm">{"<."}</span>
              </div>
              <span>OSS | Let&rsquo;s Connect</span>
            </Link>
            <p className="text-white/60 text-sm mb-8 max-w-xs">
              Building India&apos;s Next Generation of Open Source Contributors. Helping people discover open source and make meaningful contributions.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/placeholder" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href="https://linkedin.com/placeholder" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://wa.me/placeholder" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Navigation</h3>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li><Link href="#explore" className="hover:text-white transition-colors">Explore</Link></li>
              <li><Link href="#community" className="hover:text-white transition-colors">Community</Link></li>
              <li><Link href="#programs" className="hover:text-white transition-colors">Programs</Link></li>
              <li><Link href="#impact" className="hover:text-white transition-colors">Impact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Resources</h3>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li><Link href="/resources" className="hover:text-white transition-colors">Guides & Tutorials</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Upcoming Events</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/members" className="hover:text-white transition-colors">Member Directory</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <Mail size={18} className="shrink-0 mt-0.5" />
                <span>hello@placeholder.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} OSS | Let&rsquo;s Connect. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
