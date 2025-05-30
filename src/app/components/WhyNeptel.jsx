import React from 'react';
import { BentoGrid } from "@/app/components/magicui/bento-grid";
import { Shield, Server, Smartphone, Cloud, Building2, BarChart } from 'lucide-react';

const WhyNeptel = () => {
  const items = [
    {
      title: "Military-Grade Security",
      description: "Advanced encryption and security protocols protect your sensitive data at every level",
      header: <Shield className="h-8 w-8 text-blue-500" />,
      className: "md:col-span-2"
    },
    {
      title: "Scalable Infrastructure",
      description: "Enterprise-ready infrastructure that grows with your needs",
      header: <Server className="h-8 w-8 text-blue-500" />,
      className: "md:col-span-1"
    },
    {
      title: "Mobile Integration",
      description: "Seamless access and control from any device, anywhere",
      header: <Smartphone className="h-8 w-8 text-blue-500" />,
      className: "md:col-span-1"
    },
    {
      title: "Cloud Flexibility",
      description: "Choose between cloud, on-premise, or hybrid deployment options",
      header: <Cloud className="h-8 w-8 text-blue-500" />,
      className: "md:col-span-1"
    },
    {
      title: "Enterprise Ready",
      description: "Built for organizations that demand the highest standards of reliability",
      header: <Building2 className="h-8 w-8 text-blue-500" />,
      className: "md:col-span-1"
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive insights into your AI operations and performance",
      header: <BarChart className="h-8 w-8 text-blue-500" />,
      className: "md:col-span-2"
    }
  ];

  return (
    <section className="w-full py-24 px-6 sm:px-12 bg-[#0B0F14]">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Why Choose Neptel?
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Enterprise-grade AI infrastructure that puts you in control
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <BentoGrid items={items} />
      </div>
    </section>
  );
};

export default WhyNeptel;
