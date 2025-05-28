import { Particles } from "@/app/components/magicui/particles";


export default function Hero() {
  return (


    <section className="min-h-screen flex items-center justify-center px-6 sm:px-12 text-center">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">Privacy-first AI for Modern Organizations</h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          Empowering businesses with secure, local AI tools that protect data sovereignty and ensure compliance.
        </p>
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
