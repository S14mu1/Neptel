import React from 'react';
import { VelocityScroll } from "@/app/components/magicui/scroll-based-velocity";

export default function DataSecurity() {
  return (
    <section className="relative py-24 bg-[#0D1117]">
      {/* Velocity Scroll Text - Full width container */}
      <div className="relative w-full overflow-hidden">
        <VelocityScroll
          className="text-5xl sm:text-7xl font-bold"
          defaultVelocity={0.5}
          numRows={2}
        >
          Your Data in Your Hands
        </VelocityScroll>
      </div>

      <div className="relative container mx-auto mt-24 px-6 sm:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
              Data Security in the AI Era
            </h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                In today's digital landscape, data isn't just an asset—it's the cornerstone of your organization's competitive advantage and future growth.
              </p>
              <p>
                With the rise of AI and machine learning, protecting sensitive information has never been more crucial. Every piece of data that leaves your premises creates potential vulnerabilities and dependencies on external systems.
              </p>
              <p>
                That's why we believe in bringing AI capabilities directly to where your data resides, ensuring complete control and sovereignty over your information assets while leveraging cutting-edge technology.
              </p>
            </div>
            <div className="pt-6">
              <button className="text-sm px-6 py-3 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors">
                Learn About Our Security
              </button>
            </div>
          </div>

          {/* Right side content */}
          <div className="relative flex items-center justify-center">
            <div className="text-center space-y-4">
              <h3 className="text-3xl sm:text-4xl font-semibold">
                Secure by Design
              </h3>
              <p className="text-gray-300">
                Your data never leaves your infrastructure, ensuring maximum security and compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 