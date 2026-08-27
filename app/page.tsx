import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocials from "@/components/FloatingSocials";
import dynamic from 'next/dynamic';

import LoadingScreen from "@/components/LoadingScreen";
const Marquee = dynamic(() => import('@/components/Marquee'), { ssr: true });
const ProblemSolution = dynamic(() => import('@/components/ProblemSolution'), { ssr: true });
const Metrics = dynamic(() => import('@/components/Metrics'), { ssr: true });
const Achievements = dynamic(() => import('@/components/Achievements'), { ssr: true });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true });
const PoweredBy = dynamic(() => import('@/components/PoweredBy'), { ssr: true });
const CTA = dynamic(() => import('@/components/CTA'), { ssr: true });
const Purpose = dynamic(() => import('@/components/Purpose'), { ssr: true });
const Sessions = dynamic(() => import('@/components/Sessions'), { ssr: true });
const Roadmap = dynamic(() => import('@/components/Roadmap'), { ssr: true });

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-emerald-500/30 selection:text-emerald-200 relative">
      <LoadingScreen />
      <Navbar />
      <FloatingSocials />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <Marquee />
        <PoweredBy />
        <ProblemSolution />
        <Metrics />
        <Achievements />
        <Testimonials />
        <Purpose />
        <Sessions />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
