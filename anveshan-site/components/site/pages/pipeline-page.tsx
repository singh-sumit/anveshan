"use client";

import { motion } from 'motion/react';
import { Database, Binary, Cpu, FileText, ChevronRight } from 'lucide-react';

import Pipeline from '@/components/site/Pipeline';

export default function PipelinePage() {
  const steps = [
    {
      id: "01",
      title: "Acquisition",
      icon: <Database className="w-6 h-6 text-accent" />,
      description: "Secure, forensically sound imaging of physical drives, logical volumes, and volatile RAM. Utilizing custom write-blockers and memory dumpers to ensure zero data alteration.",
      details: ["Physical & Logical Imaging", "Volatile Memory Capture", "Mobile Device Extraction", "Cloud Instance Snapshots"]
    },
    {
      id: "02",
      title: "Processing",
      icon: <Cpu className="w-6 h-6 text-accent" />,
      description: "Automated extraction and indexing of artifacts, file systems, and registry hives. The engine parses thousands of file types simultaneously, optimizing for rapid triage.",
      details: ["Automated Indexing", "Registry Hive Parsing", "Email & Chat Thread Reassembly", "Multimedia Carver"]
    },
    {
      id: "03",
      title: "Analysis",
      icon: <Binary className="w-6 h-6 text-accent" />,
      description: "Deep dive inspection using built-in hex viewers, timeline analysis, and malware sandboxing. Apply YARA rules and heuristic behavioral analysis to uncover stealthy APTs.",
      details: ["Hex & Binary Inspection", "Timeline Generation", "Malware Sandboxing", "YARA Rule Matching"]
    },
    {
      id: "04",
      title: "Reporting",
      icon: <FileText className="w-6 h-6 text-accent" />,
      description: "Generate comprehensive, court-admissible reports with full chain of custody documentation. Export to multiple formats (PDF, HTML, STIX/TAXII) tailored for legal, executive, or technical audiences.",
      details: ["Automated Summary Generation", "Court-Admissible Exports", "Chain of Custody Logs", "STIX/TAXII Integration"]
    }
  ];

  return (
    <main className="flex-1 pt-24">
      {/* Hero */}
      <section className="py-24 border-b border-divider relative overflow-hidden bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none">
          <h1 className="text-[150px] md:text-[250px] font-black tracking-tighter whitespace-nowrap">WORKFLOW.</h1>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-[60px] md:text-[80px] font-black leading-[0.85] tracking-tighter text-primary mb-8 uppercase">
            Investigation <span className="text-accent">Pipeline.</span>
          </h1>
          <p className="text-lg text-secondary leading-relaxed font-light max-w-2xl mx-auto">
            A linear, methodical progression from raw byte acquisition to structured intelligence reporting, ensuring speed without compromising evidentiary integrity.
          </p>
        </div>
      </section>

      {/* Embedded Component */}
      <Pipeline />

      {/* Deep Dive Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-24">
            {steps.map((step, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2"
                >
                  <div className="text-[120px] font-black text-divider leading-none select-none">
                    {step.id}
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {step.icon}
                    <h2 className="text-3xl font-black text-primary tracking-tight uppercase">{step.title}</h2>
                  </div>
                  <p className="text-secondary font-light leading-relaxed mb-8">
                    {step.description}
                  </p>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-accent" />
                        <span className="text-[12px] font-mono text-tertiary uppercase tracking-widest">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
