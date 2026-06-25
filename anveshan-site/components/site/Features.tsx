"use client";

import { motion } from 'motion/react';
import { Search, Navigation, Activity, ScanLine, Code, Fingerprint } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Search className="w-6 h-6 text-accent" />,
      title: "Memory Analysis",
      id: "01",
      description: "Extract volatile memory artifacts to uncover stealthy, fileless malware and advanced persistent threats."
    },
    {
      icon: <Navigation className="w-6 h-6 text-accent" />,
      title: "UAV Forensics",
      id: "02",
      description: "Extract flight logs, telemetry, waypoints, and multimedia from downed or captured unmanned aerial vehicles."
    },
    {
      icon: <Activity className="w-6 h-6 text-accent" />,
      title: "Threat Hunting",
      id: "03",
      description: "Leverage heuristic analysis and YARA rule matching to rapidly identify anomalous behaviors."
    },
    {
      icon: <ScanLine className="w-6 h-6 text-accent" />,
      title: "Steganography",
      id: "04",
      description: "Detect and extract hidden malicious payloads or sensitive data embedded within seemingly innocuous media files."
    },
    {
      icon: <Code className="w-6 h-6 text-accent" />,
      title: "Reverse Eng",
      id: "05",
      description: "Built-in sandboxing and disassembler integration to safely analyze suspicious executables."
    },
    {
      icon: <Fingerprint className="w-6 h-6 text-accent" />,
      title: "Cross-Platform",
      id: "06",
      description: "Seamlessly acquire and analyze forensic images across Windows, Linux, macOS, and mobile environments."
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden border-b border-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl mb-14 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-mono text-accent tracking-[0.3em] uppercase mb-6"
          >
            Core Capabilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] sm:text-[40px] md:text-[60px] font-black tracking-tighter text-primary leading-none uppercase"
          >
            Forensic Precision<br/>At Enterprise Scale
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-10 md:gap-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-t border-divider-light pt-6 relative group"
            >
              <div className="flex justify-between items-baseline mb-8">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest">{feature.title}</span>
                <span className="text-[10px] font-mono text-quaternary">[ {feature.id} ]</span>
              </div>
              
              <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                {feature.icon}
              </div>
              
              <p className="text-secondary font-light leading-relaxed text-sm">
                {feature.description}
              </p>
              
              {/* Progress bar aesthetic element */}
              <div className="mt-8 w-full bg-divider-light h-[2px]">
                <div className="bg-accent w-0 h-full group-hover:w-full transition-all duration-1000 ease-out"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
