import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-24 px-4 overflow-hidden">
      {/* Background Image with slow zoom */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f220127d-b1ac-4831-82ec-f4c02abca8e1/exotic-fish-background-5ca97150-1783513372320.webp"
          alt="Exotic fish background"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.span
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-6"
          >
            West Africa Fish Farm
          </motion.span>

          <motion.h1 
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-serif font-black text-white tracking-tight leading-tight mb-8 max-w-3xl"
          >
            PREMIUM FISH STOCK <br />
            <span className="text-primary italic text-2xl md:text-4xl">Available for Global Export</span>
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mb-10 font-medium leading-relaxed"
          >
            Directly sourcing the finest freshwater specimens. Connect with our experts via WhatsApp for the latest stock arrivals, live pricing, and shipping logistics.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            className="group"
          >
            <a
              href="/live-stock"
              className="inline-flex items-center gap-3 bg-[#EAB308] hover:bg-[#FACC15] text-black font-black text-[11px] tracking-[0.15em] uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:shadow-[0_0_50px_rgba(234,179,8,0.5)]"
            >
              CLICK TO VIEW LIVE STOCK
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <motion.div 
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" 
        />
      </motion.div>
    </section>
  );
};