export default function HowItWorks() {
  const steps = ["Upload", "Index", "Customize", "Use"];
  const descriptions = [
    "Import your private documents securely.",
    "Data is vectorized & indexed locally.",
    "Define your workflows or use built-in ones.",
    "Run queries and generate answers — privately.",
  ];

  return (
    <section className="bg-[#0B0F14] py-24 px-6 sm:px-12 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12">How It Works</h2>
      <div className="grid sm:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="bg-[#141A1F] p-6 rounded-xl shadow hover:shadow-lg">
            <div className="text-2xl font-bold mb-4">{step}</div>
            <p className="text-gray-400 text-sm">{descriptions[i]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
