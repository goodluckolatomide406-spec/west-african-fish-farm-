import { motion, useReducedMotion } from 'framer-motion';
import { CONTACT_INFO } from '../data';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const prefersReducedMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <footer id="contact" className="pt-24 pb-12 px-4 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/attachments/66618de1-fc9f-45e0-b4d3-1b575900a875/1784187403471_IMG-20260709-WA0001_1_.jpg"
                alt="West Africa Fish Farm"
                className="h-12 w-12 object-contain"
              />
              <span className="text-2xl font-serif font-black text-white tracking-tighter">
                WEST AFRICA <span className="text-primary">FISH FARM</span>
              </span>
            </div>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-md mb-8">
              Global leaders in the export of exotic West African freshwater specimens. 
              Dedicated to quality, sustainability, and the aquarist community.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={prefersReducedMotion ? {} : { scale: 1.1, transition: { type: "spring", stiffness: 300, damping: 15 } }}
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-white/50 hover:bg-primary hover:text-black transition-all duration-300"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                whileHover={prefersReducedMotion ? {} : { scale: 1.1, transition: { type: "spring", stiffness: 300, damping: 15 } }}
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-white/50 hover:bg-primary hover:text-black transition-all duration-300"
              >
                <Facebook size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[11px] font-black tracking-[0.3em] text-white uppercase mb-8">Contact Information</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <MapPin size={18} className="text-primary mt-1" />
                <div>
                  <p className="text-xs font-black text-white/40 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-sm text-white/80 font-medium group-hover:text-primary transition-colors">{CONTACT_INFO.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <Mail size={18} className="text-primary mt-1" />
                <div>
                  <p className="text-xs font-black text-white/40 uppercase tracking-widest mb-1">Email Us</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-white/80 font-medium group-hover:text-primary transition-colors">{CONTACT_INFO.email}</a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">
            &copy; {currentYear} WEST AFRICA FISH FARM. ALL RIGHT RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="/privacy" className="text-[10px] font-bold text-zinc-600 hover:text-primary transition-colors uppercase tracking-[0.2em]">Privacy</a>
            <a href="#" className="text-[10px] font-bold text-zinc-600 hover:text-primary transition-colors uppercase tracking-[0.2em]">Compliance</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};