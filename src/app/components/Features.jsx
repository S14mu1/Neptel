export default function Features() {
  const features = [
    ["Full Data Sovereignty", "Your data stays on your terms — no leaks, no vendors."],
    ["Built-in Compliance", "Compliant with financial, legal, and healthcare standards."],
    ["Private LLMs", "Custom large language models running fully in-house."],
    ["Modular Architecture", "Plug-and-play with your tools, from EHRs to Rhino."],
    ["End-to-End Encryption", "Encrypted AI flows — even during inference."],
    ["No Black Boxes", "Transparent, auditable decision processes by design."],
  ];

  return (
    <section className="py-24 px-6 sm:px-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Why Neptel</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map(([title, desc]) => (
          <div key={title} className="bg-[#141A1F] rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
