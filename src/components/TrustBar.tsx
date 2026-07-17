import { motion, useReducedMotion } from 'framer-motion';
import { TRUST_POINTS } from '../data';
import { CircleCheck } from 'lucide-react';

export const TrustBar = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-12 border-y border-white/5 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {TRUST_POINTS.map((point, index) => (
            <motion.div
              key={point.title}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: index * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={prefersReducedMotion ? {} : { y: -4, transition: { type: "spring", stiffness: 200, damping: 18 } }}
              className="flex flex-col items-center text-center group"
            >
              <motion.div
                initial={prefersReducedMotion ? {} : { scale: 0 }}
                whileInView={prefersReducedMotion ? {} : { scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 + 0.15, type: "spring", stiffness: 200, damping: 15 }}
              >
                <CircleCheck size={16} className="text-primary mb-3 group-hover:scale-125 transition-transform duration-300" />
              </motion.div>
              <h3 className="text-[10px] font-black tracking-[0.2em] text-white uppercase mb-1">
                {point.title}
              </h3>
              <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};