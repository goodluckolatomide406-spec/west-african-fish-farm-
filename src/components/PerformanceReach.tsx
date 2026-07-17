import { motion, useReducedMotion } from 'framer-motion';

const metrics = [
  { value: '25+', label: 'Years of Expertise in Aquatic Cultivation' },
  { value: '98%', label: 'Secure Global Arrival Rate' },
  { value: '120+', label: 'Premium Freshwater Species Available' },
  { value: '100%', label: 'Certified Ethical Export Standards' },
];

export const PerformanceReach = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 bg-zinc-900/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-serif font-bold text-white">Performance & Reach</h2>
          <p className="text-zinc-400 mt-2">A testament to our dedication and quality.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={prefersReducedMotion ? {} : { y: -6, scale: 1.02, transition: { type: "spring", stiffness: 200, damping: 18 } }}
              className="bg-zinc-800/50 p-8 rounded-2xl text-center border border-white/5 hover:border-primary/30 transition-colors duration-500"
            >
              <motion.p
                initial={prefersReducedMotion ? {} : { scale: 0.5, opacity: 0 }}
                whileInView={prefersReducedMotion ? {} : { scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 + 0.2, type: "spring", stiffness: 150, damping: 12 }}
                className="text-5xl font-extrabold text-primary mb-3"
              >
                {metric.value}
              </motion.p>
              <p className="text-zinc-300 font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};