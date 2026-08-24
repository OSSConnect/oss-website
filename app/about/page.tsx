import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import WhyWeExist from "@/components/WhyWeExist";
import Roadmap from "@/components/Roadmap";

export const metadata = {
  title: "About Us | OSS Community",
  description: "Learn about our vision, mission, and roadmap.",
};

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-display font-bold text-oss-lime mb-12">About Us</h1>
      </div>
      <About />
      <VisionMission />
      <WhyWeExist />
      <Roadmap />
    </main>
  );
}
