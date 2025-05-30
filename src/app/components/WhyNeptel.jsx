"use client";

import React, { useState, useEffect } from 'react';
import { BentoGrid, BentoCard } from "@/app/components/magicui/bento-grid";
import { Shield, Server, Smartphone, Cloud, Building2, BarChart, MessageSquare, Files } from 'lucide-react';
import { IconCloud } from "@/app/components/magicui/icon-cloud";
import Image from 'next/image';

const llmLogos = [
  "/llm-logos/meta.svg",
  "/llm-logos/huggingface.svg",
  "/llm-logos/mistral.svg",
  "/llm-logos/deepseek.svg",
  "/llm-logos/grok.svg",
  "/llm-logos/qwen.svg",
  "/llm-logos/gemma.svg",
  "/llm-logos/google.svg",
  "/llm-logos/phi.svg",
  "/llm-logos/yi.svg",
  "/llm-logos/tii.svg",
  "/llm-logos/ollama.svg",
  "/llm-logos/openchat.svg",
  "/llm-logos/baichun.svg",
];

const features = [
  {
    Icon: () => <Shield className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />,
    name: "Military-Grade Security",
    description: "Advanced encryption and security protocols protect your sensitive data at every level. Zero data leaves your infrastructure.",
    href: "/security",
    cta: "Get Started",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent transition-all duration-300 group-hover:from-white/[0.12] group-hover:to-white/[0.04]" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 backdrop-blur-sm border border-white/[0.08] group hover:border-white/[0.15] transition-colors",
  },
  {
    Icon: () => <Files className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />,
    name: "AI-Powered Knowledge Vault",
    description: "Transform internal documents into a knowledge base — fully secured within your infrastructure.",
    href: "/rag-capabilities",
    cta: "Learn More",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent transition-all duration-300 group-hover:from-white/[0.12] group-hover:to-white/[0.04]" />
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 backdrop-blur-sm border border-white/[0.08] group hover:border-white/[0.15] transition-colors",
  },
  {
    Icon: () => <MessageSquare className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />,
    name: "Extensive LLM Library",
    description: "Choose from hundreds of open-source and enterprise LLMs, all running privately in your infrastructure.",
    href: "/models",
    cta: "Get Started",
    background: (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent transition-all duration-300 group-hover:from-white/[0.12] group-hover:to-white/[0.04]" />
        <div className="absolute inset-0 flex items-center justify-center pt-35">
          <IconCloud 
            images={llmLogos}
            backgroundOpacity={100}
            speed={100}
          />
        </div>
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3 backdrop-blur-sm border border-white/[0.08] group hover:border-white/[0.15] transition-colors overflow-hidden",
  },
  {
    Icon: () => <Smartphone className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />,
    name: "Seamless Integration",
    description: "Access your AI capabilities from any device while maintaining strict security standards. API-first architecture.",
    href: "/integration",
    cta: "Get Started",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent transition-all duration-300 group-hover:from-white/[0.12] group-hover:to-white/[0.04]" />
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 backdrop-blur-sm border border-white/[0.08] group hover:border-white/[0.15] transition-colors",
  },
  {
    Icon: () => <BarChart className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />,
    name: "Advanced Analytics",
    description: "Comprehensive insights into your AI operations. Monitor performance, usage patterns, and optimization opportunities.",
    href: "/analytics",
    cta: "Get Started",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent transition-all duration-300 group-hover:from-white/[0.12] group-hover:to-white/[0.04]" />
    ),
    className: "lg:col-span-3 lg:row-start-3 lg:row-end-4 backdrop-blur-sm border border-white/[0.08] group hover:border-white/[0.15] transition-colors",
  },
];

const WhyNeptel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.6
      }
    );

    const section = document.getElementById('why-neptel-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="why-neptel-section" className="w-full py-24 px-6 sm:px-12 bg-[#0B0F14] relative isolate">
      <div 
        className="absolute inset-0 -top-24 transition-opacity duration-1000" 
        style={{
          background: 'radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 0.90), rgba(11, 15, 20, 0.05) 80%, transparent 90%)',
          pointerEvents: 'none',
          opacity: isVisible ? 1 : 0,
          zIndex: -1
        }}
      />
      <div className="text-center mb-16 relative">
        <h2 className="text-4xl font-bold text-white mb-4">
          Why Choose Neptel?
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Enterprise-grade AI infrastructure that puts you in control
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <BentoGrid className="lg:grid-rows-3 gap-4">
          {features.map((feature) => (
            <BentoCard 
              key={feature.name} 
              {...feature}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default WhyNeptel;
