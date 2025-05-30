export default function Features() {
  const features = [
    ["Custom AI Models", "Train and deploy specialized models tailored to your industry needs."],
    ["Regulatory Compliance", "GDPR, HIPAA, SOC 2, and other standards built into the core."],
    ["API Integration", "Seamless integration with your existing tools and workflows."],
    ["Real-time Processing", "Process and analyze data in real-time with minimal latency."],
    ["Audit Logging", "Comprehensive audit trails for all AI operations and data access."],
    ["Version Control", "Track and manage model versions and training iterations."],
  ];

  return (
    <section className="py-24 px-6 sm:px-12 bg-[#0D1117]">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Technical Capabilities</h2>
      <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Advanced features that power your AI infrastructure
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map(([title, desc]) => (
          <div key={title} className="bg-[#141A1F] rounded-2xl p-6 shadow-md hover:shadow-lg transition border border-white/5">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
