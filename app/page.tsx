import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyWeExist from "@/components/WhyWeExist";
import Impact from "@/components/Impact";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import VisionMission from "@/components/VisionMission";
import Sessions from "@/components/Sessions";
import Ecosystem from "@/components/Ecosystem";
import Roadmap from "@/components/Roadmap";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <WhyWeExist />
      <Impact />
      <Achievements />
      <Testimonials />
      <VisionMission />
      <Sessions />
      <Ecosystem />
      <Roadmap />
      <GetInvolved />
      <Footer />
    </main>
  );
}
