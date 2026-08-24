import { createClient } from "@/lib/supabase/server";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EcosystemStrip from "@/components/EcosystemStrip";
import WhyWeExist from "@/components/WhyWeExist";
import MindsetShift from "@/components/MindsetShift";
import ProgramsGrid from "@/components/ProgramsGrid";
import CommunityCarousel from "@/components/CommunityCarousel";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import UserPath from "@/components/UserPath";
import Footer from "@/components/Footer";

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <main className="bg-oss-bg min-h-screen">
      <Navbar user={user} />
      
      {/* 1. Hero with Ecosystem Orbits */}
      <Hero />
      
      {/* 2. Ecosystem Logo Strip */}
      <EcosystemStrip />
      
      {/* 3. Narrative & Journey */}
      <WhyWeExist />
      
      {/* 4. Scroll Animation & Metrics */}
      <MindsetShift />
      
      {/* 5. Collaboration Programs */}
      <ProgramsGrid />
      
      {/* 6. People Building in the Open */}
      <CommunityCarousel />
      
      {/* 7. Community Testimonials */}
      <TestimonialCarousel />
      
      {/* 8. What Brings You Here? */}
      <UserPath />
      
      <Footer />
    </main>
  );
}
