import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Award, Briefcase } from 'lucide-react';

const compliancePoints = [
  {
    icon: ShieldCheck,
    title: 'Regulatory Adherence',
    desc: 'We strictly follow all local and international regulations governing the sustainable export of freshwater aquatic specimens.',
  },
  {
    icon: Leaf,
    title: 'Ethical Sourcing',
    desc: 'All our specimens are sourced responsibly. We are committed to environmental stewardship and the conservation of our natural water habitats.',
  },
  {
    icon: Award,
    title: 'Quality Standards',
    desc: 'We maintain high standards in the handling, packaging, and shipping of our stock to ensure they reach you in healthy condition.',
  },
  {
    icon: Briefcase,
    title: 'Business Conduct',
    desc: 'We believe in honest, fair trade. We do not engage in deceptive practices and ensure that every transaction is conducted safely and professionally.',
  },
];

export const Compliance = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-6 tracking-tight">
            Our Commitment to <span className="text-primary">Compliance</span>
          </h2>
          <p className="text-zinc-500 font-medium">
            At West Africa Fish Farm, we operate with integrity and full transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {compliancePoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-start gap-6"
            >
              <div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex-shrink-0 flex items-center justify-center">
                <point.icon size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};