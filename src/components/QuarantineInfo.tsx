import { motion } from 'framer-motion';
import { ShieldCheck, Thermometer, FlaskConical, ClipboardCheck } from 'lucide-react';

const steps = [
  {
    icon: Thermometer,
    title: 'Acclimation',
    desc: 'Incoming specimens are slowly acclimated to controlled water parameters to minimize stress.',
  },
  {
    icon: FlaskConical,
    title: 'Health Monitoring',
    desc: 'Each fish is observed for 14-21 days, receiving preventive treatments and high-quality nutrition.',
  },
  {
    icon: ShieldCheck,
    title: 'Biosecurity',
    desc: 'Our facility uses isolated filtration systems to prevent any cross-contamination between batches.',
  },
  {
    icon: ClipboardCheck,
    title: 'Final Clearance',
    desc: 'Only specimens that meet our strict health and vitality standards are cleared for international export.',
  },
];

export const QuarantineInfo = () => {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-zinc-900/50 border border-white/5 rounded-3xl"
                >
                  <step.icon className="text-primary mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2">
            <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-6 block">
              Biosecurity Protocol
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-8 leading-[0.9] tracking-tighter">
              ADVANCED <span className="text-primary italic">QUARANTINE</span>
            </h2>
            <p className="text-zinc-500 font-medium leading-relaxed mb-8">
              Every specimen that passes through West Africa Fish Farm undergoes a rigorous multi-stage 
              quarantine process. This ensures that you receive only the healthiest, most stable 
              livestock possible.
            </p>
            <div className="p-8 bg-primary/5 border border-primary/20 rounded-3xl">
              <p className="text-primary text-sm font-bold leading-relaxed">
                "Our quarantine protocols exceed international standards, ensuring that every 
                fish we ship is ready for its new home immediately upon arrival."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};