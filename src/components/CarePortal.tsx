import { motion, useReducedMotion } from 'framer-motion';
import { Heart, Stethoscope, Droplets, FlaskConical } from 'lucide-react';

export const CarePortal = () => {
  const prefersReducedMotion = useReducedMotion();

  const protocols = [
    {
      icon: FlaskConical,
      title: 'Quarantine',
      desc: '24/7 monitoring period with specialized water chemistry adjustments.',
    },
    {
      icon: Stethoscope,
      title: 'Health Screening',
      desc: 'Rigorous pathogen detection and prophylactic treatments for wild specimens.',
    },
    {
      icon: Droplets,
      title: 'Water Maturity',
      desc: 'Advanced filtration systems replicating native West African river conditions.',
    },
    {
      icon: Heart,
      title: 'Ethical Sourcing',
      desc: 'Partnerships with local communities ensuring sustainable collection.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="care" className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-6 tracking-tight">
            THE <span className="text-primary italic">GOLD</span> STANDARD
          </h2>
          <p className="text-zinc-500 font-medium">
            Our Care Portal ensures that every specimen arrives healthy, vibrant, and ready 
            to thrive in its new environment through industry-leading husbandry.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {protocols.map((p, i) => (
            <motion.div
              key={p.title}
              variants={cardVariants}
              whileHover={prefersReducedMotion ? {} : { y: -8, scale: 1.02, transition: { type: "spring", stiffness: 200, damping: 18 } }}
              className="p-8 bg-zinc-900/40 border border-white/5 rounded-3xl hover:bg-zinc-800/50 transition-colors duration-500 group"
            >
              <motion.div
                initial={prefersReducedMotion ? {} : { scale: 0.8, opacity: 0 }}
                whileInView={prefersReducedMotion ? {} : { scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 150, damping: 12 }}
                className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300"
              >
                <p.icon size={20} className="text-white group-hover:text-black transition-colors duration-300" />
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{p.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};