"use client";

import { motion } from 'motion/react';
import { Lock, ShieldAlert, Fingerprint, Database, GitMerge, CheckCircle2 } from 'lucide-react';

export default function Security() {
  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8 text-accent" />,
      title: "Zero-Trust Architecture",
      description: "Anveshan assumes compromise by default. All internal communication channels require mutual TLS (mTLS) authentication, and operator access is strictly governed by least-privilege RBAC."
    },
    {
      icon: <Fingerprint className="w-8 h-8 text-accent" />,
      title: "Cryptographic Chain of Custody",
      description: "Every byte of acquired data is instantly hashed using SHA-3. Subsequent reads, modifications, or exports are appended to an immutable, cryptographically verifiable ledger to guarantee court admissibility."
    },
    {
      icon: <Database className="w-8 h-8 text-accent" />,
      title: "Encrypted Data at Rest",
      description: "All collected forensic images, flight logs, and artifacts are encrypted at rest using AES-256-GCM. Encryption keys are managed through hardware security modules (HSM)."
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-accent" />,
      title: "Air-Gapped Operation Support",
      description: "Anveshan can be fully deployed in highly classified, isolated network environments. No external telemetry or license validation connections are required after initial provisioning."
    },
    {
      icon: <GitMerge className="w-8 h-8 text-accent" />,
      title: "Automated Evidence Redaction",
      description: "PII, PHI, and non-pertinent sensitive data can be automatically identified and redacted from investigator views while maintaining the integrity of the original master evidence file."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-accent" />,
      title: "FIPS 140-2 Compliance",
      description: "Built upon certified cryptographic modules ensuring that Anveshan meets the stringent security requirements mandated by federal law enforcement and defense agencies."
    }
  ];

  return (
    <main className="flex-1 pt-24 md:pt-28">
      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-divider relative overflow-hidden bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none">
          <h1 className="text-[88px] sm:text-[120px] md:text-[250px] font-black tracking-tighter whitespace-nowrap">SECURITY.</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-[38px] sm:text-[52px] md:text-[80px] font-black leading-[0.85] tracking-tighter text-primary mb-6 md:mb-8 uppercase">
            Military-Grade <span className="text-accent">Integrity.</span>
          </h1>
          <p className="text-base sm:text-lg text-secondary leading-relaxed font-light max-w-2xl mx-auto">
            Evidentiary integrity is the bedrock of digital forensics. Anveshan secures evidence from the point of acquisition to the final courtroom presentation.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24 border-b border-divider bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {securityFeatures.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border border-divider hover:border-accent transition-colors bg-surface relative group"
              >
                <div className="mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-secondary font-light text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
