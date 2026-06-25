"use client";

import { motion } from 'motion/react';
import { ArrowRight, Terminal } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="relative min-h-[100svh] md:min-h-[90vh] flex items-center pt-28 md:pt-32 pb-12 md:pb-16 overflow-hidden border-b border-divider">
      {/* Minimal background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none">
        <h1 className="text-[96px] sm:text-[140px] md:text-[220px] lg:text-[320px] font-black tracking-tighter whitespace-nowrap">ANVESHAN</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="max-w-2xl relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-tertiary">Terminal Active: Dev_v2.0</span>
              </div>
              <h1 className="text-[52px] sm:text-[72px] md:text-[92px] lg:text-[120px] font-black leading-[0.85] tracking-tighter text-primary mb-6 md:mb-8 uppercase">
                Anveshan<span className="text-accent">.</span>
              </h1>
              <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-xl font-light mb-8 md:mb-12">
                The next-generation digital forensics and incident response platform. 
                Built for elite cyber units to acquire, analyze, and report on complex digital evidence with unprecedented speed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button className={buttonVariants({ variant: 'accent', size: 'hero' })}>
                  Request Early Access
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className={buttonVariants({ variant: 'outline', size: 'hero' })}>
                  <Terminal className="w-4 h-4" />
                  View Documentation
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[320px] sm:h-[420px] lg:h-[600px] flex items-center justify-center"
          >
            {/* Restyled Abstract Tech Visualization */}
            <div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-lg aspect-square rounded-full border border-divider flex items-center justify-center bg-surface">
              <div className="absolute inset-0 rounded-full border border-accent/20 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-divider-light animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-16 rounded-full border border-divider animate-[spin_30s_linear_infinite]" />

              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                  boxShadow: [
                    '0 0 0 rgba(172, 255, 54, 0)',
                    '0 0 32px rgba(172, 255, 54, 0.14)',
                    '0 0 0 rgba(172, 255, 54, 0)',
                  ],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 bg-background rounded-full border border-divider-light flex items-center justify-center"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    animate={{ rotate: [0, 6, -6, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Terminal className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-accent mb-2" />
                  </motion.div>
                  <motion.span
                    animate={{ opacity: [0.72, 1, 0.72], letterSpacing: ['0.18em', '0.26em', '0.18em'] }}
                    transition={{
                      duration: 3.6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="font-mono text-[9px] sm:text-[10px] tracking-widest text-accent uppercase"
                  >
                    SYS.ANALYSIS
                  </motion.span>
                </motion.div>
              </motion.div>

              {/* Orbital nodes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-10"
              >
                <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-2 h-2 bg-[#888]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
