"use client";

import Image from 'next/image';

import { motion } from 'motion/react';
import { Play, Scan, Focus, Cpu } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="py-32 border-b border-divider relative overflow-hidden bg-background">
      {/* Minimal background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none">
        <h1 className="text-[150px] md:text-[250px] font-black tracking-tighter whitespace-nowrap">VISUAL.INTEL</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-tertiary">Module: Video Forensics</span>
            </div>
            
            <h2 className="text-[40px] md:text-[60px] font-black leading-[0.85] tracking-tighter text-primary mb-8 uppercase">
              Multimedia<br/><span className="text-accent">Analysis.</span>
            </h2>
            
            <p className="text-lg text-secondary leading-relaxed font-light mb-12">
              Advanced frame-by-frame analysis of CCTV, drone footage, and mobile video. Employ AI-driven enhancement, deepfake detection, and object tracking to extract actionable intelligence from degraded visual evidence.
            </p>

            <div className="space-y-6">
              <div className="border-l border-divider-light pl-6 hover:border-accent transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Focus className="w-4 h-4 text-accent" />
                  <h3 className="text-primary font-mono text-[11px] uppercase tracking-widest">Frame Enhancement</h3>
                </div>
                <p className="text-tertiary text-sm font-light">Clarify low-light or low-resolution footage using neural upscaling and noise reduction algorithms.</p>
              </div>
              <div className="border-l border-divider-light pl-6 hover:border-accent transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Scan className="w-4 h-4 text-accent" />
                  <h3 className="text-primary font-mono text-[11px] uppercase tracking-widest">Object Tracking</h3>
                </div>
                <p className="text-tertiary text-sm font-light">Automated identification and path-mapping of vehicles, individuals, and specific assets across multiple camera feeds.</p>
              </div>
              <div className="border-l border-divider-light pl-6 hover:border-accent transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Cpu className="w-4 h-4 text-accent" />
                  <h3 className="text-primary font-mono text-[11px] uppercase tracking-widest">Deepfake Detection</h3>
                </div>
                <p className="text-tertiary text-sm font-light">Verify the authenticity of video evidence by analyzing compression artifacts, lighting inconsistencies, and AI generation signatures.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="border border-divider-light p-2 bg-surface relative group">
              {/* Corner accents */}
              <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-accent"></div>
              <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-accent"></div>
              <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-accent"></div>
              <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-accent"></div>
              
              <div className="relative overflow-hidden aspect-video flex items-center justify-center bg-background">
                <Image
                  src="/images/video_forensics_1782403937750.jpg"
                  alt="Video Forensics Analysis" 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                
                {/* HUD Overlay Elements */}
                <div className="absolute inset-0 border border-accent/20 pointer-events-none">
                  {/* Target Box */}
                  <div className="absolute top-[30%] left-[40%] w-32 h-32 border border-accent opacity-50 group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-accent" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-accent" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-accent" />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-accent" />
                    <span className="absolute -top-5 left-0 text-accent text-[8px] font-mono tracking-widest uppercase">ID_MATCH: 98.4%</span>
                  </div>
                </div>

                {/* Play Button Overlay */}
                <div className="relative z-10 w-16 h-16 rounded-full border border-accent bg-[#000]/50 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-accent/20 transition-colors group/play">
                  <Play className="w-6 h-6 text-accent ml-1 group-hover/play:scale-110 transition-transform" />
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center px-2">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Feed: CAM_04_SOUTH</span>
                <span className="text-[10px] font-mono text-quaternary uppercase tracking-widest">Rec: 04:22:11 GMT</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
