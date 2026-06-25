"use client";

import { motion } from 'motion/react';
import { ArrowRight, Lock } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden border-b border-divider">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <Lock className="w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] lg:w-[800px] lg:h-[800px]" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-divider-light bg-surface p-8 sm:p-10 lg:p-24"
        >
          <div className="w-12 h-12 border border-divider-light flex items-center justify-center mx-auto mb-8">
            <Lock className="w-5 h-5 text-accent" />
          </div>
          
          <h2 className="text-[32px] sm:text-[40px] md:text-[60px] font-black tracking-tighter text-primary mb-6 md:mb-8 uppercase leading-none">
            Deploy Anveshan
          </h2>
          <p className="text-base sm:text-lg text-secondary mb-8 md:mb-12 max-w-2xl mx-auto font-light">
            Join the early access program and equip your unit with the most advanced digital forensics platform built for the modern threat landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className={buttonVariants({ variant: 'accent', size: 'hero', fullWidth: true })}>
              Request Deployment
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className={buttonVariants({ variant: 'outline', size: 'hero', fullWidth: true })}>
              Contact Sales
            </button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-divider">
            <p className="text-quaternary text-[10px] font-mono tracking-[0.2em] uppercase">
              // Requires clearance validation for full platform access
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
