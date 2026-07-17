import { motion } from 'framer-motion';

const metrics = [
  { value: '25+', label: 'Years of Expertise in Aquatic Cultivation' },
  { value: '98%', label: 'Secure Global Arrival Rate' },
  { value: '120+', label: 'Premium Freshwater Species Available' },
  { value: '100%', label: 'Certified Ethical Export Standards' },
];

export const Metrics = () => {
  return (
    <section className="py-24 bg-zinc-900/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-white">Performance & Reach</h2>
          <p className="text-zinc-400 mt-2">A testament to our dedication and quality.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-zinc-800/50 p-8 rounded-2xl text-center border border-white/5"
            >
              <p className="text-5xl font-extrabold text-primary mb-3">{metric.value}</p>
              <p className="text-zinc-300 font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};