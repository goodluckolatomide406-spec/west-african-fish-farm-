import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const specimens = [
  {
    title: 'Mormyrops',
    subtitle: 'The Elephantfish',
    desc: 'Remarkable specimens known for their intelligence and unique electrical sensing organs.',
    image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Polypterus',
    subtitle: 'Living Fossils',
    desc: 'Ancient predators with primitive lungs and a history dating back millions of years.',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&q=80&w=800',
  },
];

export const SpeciesShowcase = () => {
  return (
    <section className="py-24 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-7xl font-serif font-black text-white mb-6 leading-[0.9] tracking-tighter">
              BEYOND THE <br />
              <span className="text-primary italic">ORDINARY</span>
            </h2>
            <p className="text-zinc-500 font-medium">
              We specialize in rare and hard-to-find freshwater species from West African river systems, 
              ensuring health and vitality in every export.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/30">
              <ArrowRight size={20} className="rotate-180" />
            </div>
            <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white">
              <ArrowRight size={20} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specimens.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative h-[600px] rounded-[2.5rem] overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase mb-4 block">
                  Featured Specimen
                </span>
                <h3 className="text-4xl font-serif font-black text-white mb-2">{item.title}</h3>
                <p className="text-xl text-white/60 font-medium italic mb-6">{item.subtitle}</p>
                <p className="text-zinc-400 max-w-sm mb-8">{item.desc}</p>
                <button className="flex items-center gap-3 text-white text-[11px] font-black tracking-widest uppercase group-hover:text-primary transition-colors">
                  View Specifications <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};