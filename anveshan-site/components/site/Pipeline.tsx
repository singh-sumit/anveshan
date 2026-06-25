"use client";

import { motion } from 'motion/react';
import { Database, Binary, Cpu, FileText } from 'lucide-react';

export default function Pipeline() {
  const steps = [
    {
      id: "01",
      title: "Acquisition",
      icon: <Database className="w-5 h-5 text-secondary" />,
      description: "Secure, forensically sound imaging of physical drives, logical volumes, and volatile RAM."
    },
    {
      id: "02",
      title: "Processing",
      icon: <Cpu className="w-5 h-5 text-secondary" />,
      description: "Automated extraction and indexing of artifacts, file systems, and registry hives."
    },
    {
      id: "03",
      title: "Analysis",
      icon: <Binary className="w-5 h-5 text-secondary" />,
      description: "Deep dive inspection using built-in hex viewers, timeline analysis, and malware sandboxing."
    },
    {
      id: "04",
      title: "Reporting",
      icon: <FileText className="w-5 h-5 text-secondary" />,
      description: "Generate comprehensive, court-admissible reports with full chain of custody documentation."
    }
  ];

  return (
    <section id="pipeline" className="py-32 border-b border-divider">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-24">
          <h2 className="text-[10px] font-mono text-quaternary tracking-[0.3em] uppercase mb-6">
            Analysis Pipeline
          </h2>
          <p className="text-[40px] md:text-[60px] font-black tracking-tighter text-primary leading-none uppercase">
            From Raw Data<br/>To Court Ready
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="border-t border-divider-light pt-6 group"
            >
              <div className="flex justify-between items-baseline mb-8">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest">{step.title}</span>
                <span className="text-[10px] font-mono text-quaternary">[ {step.id} ]</span>
              </div>
              
              <div className="mb-6 flex items-center justify-between">
                 <div className="text-4xl font-light tracking-tighter text-primary">{step.id}</div>
                 <div className="w-10 h-10 border border-divider-light flex items-center justify-center group-hover:border-accent transition-colors">
                   {step.icon}
                 </div>
              </div>
              
              <p className="text-secondary text-sm leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
