import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Globe, Lock, FileText } from 'lucide-react';

const terms = [
  {
    icon: ShieldCheck,
    title: 'Live Arrival Guarantee',
    desc: 'We guarantee live delivery of all aquatic livestock. In the unlikely event of DOA, we provide immediate replacements or credit — no questions asked.',
  },
  {
    icon: Heart,
    title: 'Health Standards',
    desc: 'Every specimen undergoes strict quarantine protocols, disease screening, and acclimation before shipment to ensure robust health upon arrival.',
  },
  {
    icon: Globe,
    title: 'Ethical Sourcing',
    desc: 'We partner exclusively with certified, sustainable fisheries and ethical breeders who prioritize the well-being of aquatic life and natural habitats.',
  },
  {
    icon: Lock,
    title: 'Payment Security',
    desc: 'All transactions are processed through encrypted, PCI-compliant gateways. Your financial data is protected with bank-grade security at every step.',
  },
  {
    icon: FileText,
    title: 'Transit Compliance',
    desc: 'Every shipment complies with international wildlife trade regulations (CITES), customs documentation, and IATA live animal transport standards.',
  },
];

export const TradeTerms = () => {
  return (
    <section className="py-24 px-4 bg-zinc-900/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start">
            <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-6 block">
              Trade Assurance
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-8 leading-[0.9] tracking-tighter">
              OUR COMMITMENT <br />
              <span className="text-primary italic">TO EXCELLENCE</span>
            </h2>
            <p className="text-zinc-500 font-medium leading-relaxed">
              Every trade partnership is backed by ironclad guarantees and
              transparent policies designed to protect your investment.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {terms.map((term, i) => (
              <motion.div
                key={term.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: 'easeOut' }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-6 bg-black/40 border border-white/5 rounded-3xl hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <term.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-base font-bold text-white mb-3 leading-snug">
                  {term.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {term.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};