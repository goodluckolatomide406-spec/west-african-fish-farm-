import { motion, useReducedMotion } from 'framer-motion';
import { SHIPPING_INFO } from '../data';
import { ShieldCheck, Box, Wind } from 'lucide-react';

const icons = [Wind, Box, ShieldCheck];

export const ShippingPackaging = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-zinc-900/30 border border-white/5 rounded-[40px] p-8 md:p-16 relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mb-16 relative z-10"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif font-black text-white mb-6 tracking-tight">
              WORLDWIDE <span className="text-primary">TRANSIT</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-zinc-400 text-lg leading-relaxed">
              {SHIPPING_INFO.description}
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
          >
            {SHIPPING_INFO.steps.map((step, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  whileHover={prefersReducedMotion ? {} : { y: -8, transition: { type: "spring", stiffness: 200, damping: 18 } }}
                  className="flex flex-col group"
                >
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] group-hover:shadow-[0_0_50px_rgba(var(--primary-rgb),0.5)] transition-shadow duration-300">
                    <Icon size={24} className="text-black" />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-primary font-black font-serif text-3xl opacity-20">0{index + 1}</span>
                    <h3 className="text-xl font-bold text-white tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 pt-12 border-t border-white/5 relative z-10"
          >
            <div className="bg-zinc-800/40 p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-3">Comprehensive & Authorized Documentation</h3>
              <p className="text-zinc-400 font-medium">
                We provide comprehensive and verified export documentation to ensure seamless international transit and full legal compliance for every shipment.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};