import Hero from "./components/Hero";
import Features from "./components/Features";
import VisionMission from "./components/VisionMission";
import WhyNeptel from "./components/WhyNeptel";
import HowItWorks from "./components/HowItWorks";
import UseCases from "./components/UseCases";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div className="bg-[#0D1117] text-white font-sans">
      <Hero />
      <Features />
      <VisionMission />
      <WhyNeptel />
      <HowItWorks />
      <UseCases />
      <CTA />
    </div>
  );
}
