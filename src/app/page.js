"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#0D1117] text-white font-sans">
      {/* 1. Hero Section */}
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

      {/* 2. Features / Value Propositions */}
      <section className="py-24 px-6 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Why Neptel</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            ["Full Data Sovereignty", "Your data stays on your terms — no leaks, no vendors."],
            ["Built-in Compliance", "Compliant with financial, legal, and healthcare standards."],
            ["Private LLMs", "Custom large language models running fully in-house."],
            ["Modular Architecture", "Plug-and-play with your tools, from EHRs to Rhino."],
            ["End-to-End Encryption", "Encrypted AI flows — even during inference."],
            ["No Black Boxes", "Transparent, auditable decision processes by design."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="bg-[#141A1F] rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="bg-[#10151B] py-24 px-6 sm:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Vision</h2>
          <p className="text-gray-300 mb-8 text-lg">
            To redefine the future of AI by giving every organization full sovereignty over their data and digital intelligence.
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-300 text-lg">
            We empower teams with local AI systems that guarantee privacy, independence, and control — free from Big Tech.
          </p>
        </div>
      </section>

      {/* 4. Why Neptel (Benefits) */}
      <section className="py-24 px-6 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Why Choose Neptel?</h2>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
          <p>✔️ Full control over data & infrastructure</p>
          <p>✔️ Custom AI workflows for your exact domain</p>
          <p>✔️ Works offline & on-prem — no cloud dependency</p>
          <p>✔️ Loved by legal, financial, and healthcare teams</p>
        </div>
      </section>

      {/* 5. How It Works */}
      <section className="bg-[#0B0F14] py-24 px-6 sm:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">How It Works</h2>
        <div className="grid sm:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {["Upload", "Index", "Customize", "Use"].map((step, i) => (
            <div key={i} className="bg-[#141A1F] p-6 rounded-xl shadow hover:shadow-lg">
              <div className="text-2xl font-bold mb-4">{step}</div>
              <p className="text-gray-400 text-sm">
                {[
                  "Import your private documents securely.",
                  "Data is vectorized & indexed locally.",
                  "Define your workflows or use built-in ones.",
                  "Run queries and generate answers — privately.",
                ][i]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Use Case Examples */}
      <section className="py-24 px-6 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Use Cases</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ["Financial Services", "/finance-icon.svg", "Analyze contracts, ensure compliance, detect anomalies — securely."],
            ["Legal Firms", "/legal-icon.svg", "Private clause search, precedent discovery, and contract summaries."],
            ["Healthcare", "/health-icon.svg", "EHR assistance, symptom support, and patient Q&A with full privacy."],
            ["Architecture", "/arch-icon.svg", "BR18 compliance, Rhino workflows, and material guidance in one click."],
            ["Municipalities", "/city-icon.svg", "Query public documents, answer citizen requests — locally."],
          ].map(([title, icon, desc]) => (
            <div key={title} className="bg-[#141A1F] p-6 rounded-2xl text-center hover:shadow-lg transition">
              <Image src={icon} alt={`${title} icon`} width={48} height={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Call to Action */}
      <section className="bg-gradient-to-br from-[#0D1117] to-[#1A1F25] py-24 px-6 sm:px-12 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Take Control?</h2>
        <p className="text-gray-300 mb-8 text-lg">Start building with local AI — secure, compliant, and under your command.</p>
        <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition">
          Book a Demo
        </button>
      </section>
    </div>
  );
}
