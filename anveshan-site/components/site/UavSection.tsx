"use client";

import Image from 'next/image';

import { motion } from 'motion/react';

export default function UavSection() {
  return (
    <section className="py-32 border-b border-divider relative overflow-hidden bg-background">
      {/* Minimal background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none">
        <h1 className="text-[150px] md:text-[250px] font-black tracking-tighter whitespace-nowrap">AERIAL.INTEL</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="border border-divider-light p-2 bg-surface relative group">
              {/* Corner accents */}
              <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-accent"></div>
              <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-accent"></div>
              <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-accent"></div>
              <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-accent"></div>
              
              <div className="relative overflow-hidden">
                <Image
                  src="/images/uav_forensics_analysis_1782403604892.jpg"
                  alt="UAV Drone Forensics Analysis" 
                  className="w-full h-auto object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  width={1280}
                  height={853}
                />
                
                {/* Scanning line animation */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-accent shadow-[0_0_10px_var(--accent)] opacity-50 animate-[scan_3s_ease-in-out_infinite]" />
              </div>

              <div className="mt-4 flex justify-between items-center px-2">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Target: Unidentified UAV</span>
                <span className="text-[10px] font-mono text-quaternary uppercase tracking-widest">Status: Analyzing</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-tertiary">Module: UAV Forensics</span>
            </div>
            
            <h2 className="text-[40px] md:text-[60px] font-black leading-[0.85] tracking-tighter text-primary mb-8 uppercase">
              Extract Aerial<br/><span className="text-accent">Intelligence.</span>
            </h2>
            
            <p className="text-lg text-secondary leading-relaxed font-light mb-12">
              Advanced forensic analysis of downed, captured, or intercepted drones. Parse proprietary flight logs, recover deleted waypoints, and analyze onboard multimedia to trace origins and operators.
            </p>

            <div className="space-y-6">
              <div className="border-l border-divider-light pl-6 hover:border-accent transition-colors">
                <h3 className="text-primary font-mono text-[11px] uppercase tracking-widest mb-2">Telemetry Extraction</h3>
                <p className="text-tertiary text-sm font-light">Recover precise GPS coordinates, altitude data, and speed metrics from flight control modules.</p>
              </div>
              <div className="border-l border-divider-light pl-6 hover:border-accent transition-colors">
                <h3 className="text-primary font-mono text-[11px] uppercase tracking-widest mb-2">Payload Decryption</h3>
                <p className="text-tertiary text-sm font-light">Analyze and decrypt onboard storage, including steganographic payloads and hidden partitions.</p>
              </div>
              <div className="border-l border-divider-light pl-6 hover:border-accent transition-colors">
                <h3 className="text-primary font-mono text-[11px] uppercase tracking-widest mb-2">Base Station Tracking</h3>
                <p className="text-tertiary text-sm font-light">Triangulate operator origin through radio frequency logs and pairing signatures.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
