import { Particles } from "@/app/components/magicui/particles";
import { AuroraText } from "@/app/components/magicui/aurora-text";



export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start justify-center px-6 sm:px-12 text-center overflow-hidden pt-44 sm:pt-62">
      <Particles
        className="absolute inset-0 -z-0"
        quantity={300}
        staticity={20}
        color="#ffffff"
        ease={20}
        size={1}
      />
      <div className="max-w-5xl relative z-10">
        <span className="text-4xl sm:text-8xl font-bold">Privacy-first <AuroraText colors={["#0549ff", "#5d3ac7", "#0549ff", "#0549ff", "#5d3ac7", "#0549ff"]} speed={2}>AI</AuroraText> for <br/> <span className="sm:text-7xl tracking-wider">Modern Organizations</span></span>
  
        <h1 className="text-4xl sm:text-lg mt-4 mb-8">Neptel empoweres businesses with secure, local AI tools that protect data sovereignty and ensure compliance.</h1>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
