import Hero from "@/app/components/Hero";
import ProblemStatement from "@/app/components/ProblemStatement";
import VelocityScrollingData from "@/app/components/VelocityScrollingData";
import Features from "@/app/components/Features";
import VisionMission from "@/app/components/VisionMission";
import WhyNeptel from "@/app/components/WhyNeptel";
import HowItWorks from "@/app/components/HowItWorks";
import UseCases from "@/app/components/UseCases";
import CTA from "@/app/components/CTA";

export default function Home() {
  return (
    <div className="bg-[#0D1117] text-white font-sans">
      <Hero />
      <ProblemStatement />
      <VelocityScrollingData />
      <Features />
      <VisionMission />
      <WhyNeptel />
      <HowItWorks />
      <UseCases />
      <CTA />
    </div>
  );
}
