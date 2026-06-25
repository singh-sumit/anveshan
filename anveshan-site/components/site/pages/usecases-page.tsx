"use client";

import { motion } from 'motion/react';
import { Network, DatabaseZap, SearchCode, Gavel, FileLock, ShieldCheck } from 'lucide-react';

export default function Usecases() {
  const usecases = [
    {
      id: "UC-01",
      title: "Incident Response",
      icon: <Network className="w-6 h-6 text-accent" />,
      description: "Rapidly triage compromised endpoints. Memory analysis and artifact extraction happen in real-time, allowing IR teams to contain breaches before lateral movement occurs.",
      features: ["Live memory capture", "Automated threat hunting", "YARA rule scanning"]
    },
    {
      id: "UC-02",
      title: "Corporate Espionage",
      icon: <SearchCode className="w-6 h-6 text-accent" />,
      description: "Detect unauthorized data exfiltration. Analyze USB registry history, recent file access, and cloud storage synchronization logs to track intellectual property theft.",
      features: ["USB device tracking", "LNK file analysis", "Browser history reconstruction"]
    },
    {
      id: "UC-03",
      title: "UAV / Drone Investigation",
      icon: <DatabaseZap className="w-6 h-6 text-accent" />,
      description: "Extract flight telemetry and payload data from downed or captured UAVs. Identify operator locations, flight paths, and intended targets.",
      features: ["Flight log parsing", "Waypoint recovery", "Base station pairing analysis"]
    },
    {
      id: "UC-04",
      title: "Legal & E-Discovery",
      icon: <Gavel className="w-6 h-6 text-accent" />,
      description: "Process massive datasets for litigation. Maintain strict chain-of-custody with cryptographic hashing and generate court-admissible reports.",
      features: ["SHA-256 integrity checks", "Advanced keyword searching", "Automated reporting"]
    },
    {
      id: "UC-05",
      title: "Malware Reverse Engineering",
      icon: <FileLock className="w-6 h-6 text-accent" />,
      description: "Isolate and dissect advanced persistent threats (APTs). Built-in sandboxing allows analysts to safely execute and monitor malicious behavior.",
      features: ["API hooking", "Process injection detection", "Network traffic capture"]
    },
    {
      id: "UC-06",
      title: "Multimedia Steganography",
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      description: "Uncover hidden communications in digital media. Advanced algorithms detect structural anomalies in image and video files used to conceal illicit data.",
      features: ["LSB anomaly detection", "Metadata extraction", "Payload decryption"]
    }
  ];

  return (
    <main className="flex-1 pt-24 md:pt-28">
      {/* Header Section */}
      <section className="py-16 md:py-24 border-b border-divider relative overflow-hidden bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none">
          <h1 className="text-[88px] sm:text-[120px] md:text-[250px] font-black tracking-tighter whitespace-nowrap">USE.CASES</h1>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
          <div className="flex justify-center items-center gap-4 mb-8">
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-tertiary">Deployment Scenarios</span>
          </div>
          
          <h1 className="text-[38px] sm:text-[52px] md:text-[80px] font-black leading-[0.85] tracking-tighter text-primary mb-6 md:mb-8 uppercase">
            Real-World <span className="text-accent">Application.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-secondary leading-relaxed font-light max-w-2xl mx-auto">
            From battlefield intelligence to corporate network defense, Anveshan provides the capabilities required for the most demanding digital investigations.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16 md:py-24 border-b border-divider bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {usecases.map((usecase, index) => (
              <motion.div
                key={usecase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-divider bg-surface p-8 hover:border-divider-light transition-colors group relative"
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-divider-light group-hover:border-accent transition-colors"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-divider-light group-hover:border-accent transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-divider-light group-hover:border-accent transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-divider-light group-hover:border-accent transition-colors"></div>

                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 border border-divider-light flex items-center justify-center group-hover:border-accent transition-colors bg-background">
                    {usecase.icon}
                  </div>
                  <span className="text-[10px] font-mono text-quaternary tracking-widest">[ {usecase.id} ]</span>
                </div>

                <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-tight">{usecase.title}</h3>
                
                <p className="text-secondary font-light text-sm leading-relaxed mb-8 min-h-[4.5rem] lg:h-24">
                  {usecase.description}
                </p>

                <div className="border-t border-divider pt-6">
                  <ul className="space-y-3">
                    {usecase.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-accent" />
                        <span className="text-[11px] font-mono text-tertiary uppercase tracking-widest">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
