import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';
import { InquirePriceModal } from './InquirePriceModal';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLogoZoomed, setIsLogoZoomed] = React.useState(false);
  const [inquireOpen, setInquireOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const prefersReducedMotion = useReducedMotion();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const logoUrl = 'https://storage.googleapis.com/dala-prod-public-storage/attachments/66618de1-fc9f-45e0-b4d3-1b575900a875/1784187403471_IMG-20260709-WA0001_1_.jpg';

  return (
    <motion.nav
      animate={{ height: scrolled ? 64 : 80 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setIsLogoZoomed(true)}>
            <img 
              src={logoUrl} 
              alt="West Africa Fish Farm" 
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-serif font-bold tracking-tighter text-white leading-none">
                WEST AFRICA <span className="text-primary">FISH FARM</span>
              </span>
              <span className="text-[8px] md:text-[10px] text-zinc-500 uppercase tracking-[0.3em] mt-1 font-bold">
                Premium Exotic Stock
              </span>
            </div>
          </div>

          <Dialog open={isLogoZoomed} onOpenChange={setIsLogoZoomed}>
            <DialogContent className="max-w-lg border-none bg-transparent shadow-none">
              <DialogTitle className="sr-only">Company Logo Zoom</DialogTitle>
              <img src={logoUrl} alt="Company Logo" className="w-full h-auto rounded-lg" />
            </DialogContent>
          </Dialog>

          <div className="hidden md:flex items-center gap-10">
            <nav className="flex items-center gap-8">
              <Link 
                to="/" 
                className="text-[11px] font-bold tracking-[0.2em] text-white/70 hover:text-primary transition-all duration-300 uppercase relative group"
              >
                HOME
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link 
                to="/live-stock" 
                className="text-[11px] font-bold tracking-[0.2em] text-white/70 hover:text-primary transition-all duration-300 uppercase relative group"
              >
                LIVE STOCK
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
              <a 
                href="#care" 
                className="text-[11px] font-bold tracking-[0.2em] text-white/70 hover:text-primary transition-all duration-300 uppercase relative group"
              >
                CARE PORTAL
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
              <a 
                href="#contact" 
                className="text-[11px] font-bold tracking-[0.2em] text-white/70 hover:text-primary transition-all duration-300 uppercase relative group"
              >
                CONTACT
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </nav>
            
            <button
              onClick={() => setInquireOpen(true)}
              className="bg-primary text-black px-6 py-3 rounded-full font-black text-[10px] tracking-[0.05em] hover:bg-white transition-all duration-300"
            >
              INQUIRE NOW
            </button>
            <InquirePriceModal open={inquireOpen} onOpenChange={setInquireOpen} />
          </div>

          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => setInquireOpen(true)}
              className="bg-primary text-black px-4 py-2 rounded-full font-black text-[10px] tracking-[0.05em] transition-all hover:bg-white"
            >
              INQUIRE NOW
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-1 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold tracking-[0.3em] text-white/90 hover:text-primary transition-colors flex items-center justify-between group"
              >
                HOME
                <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link 
                to="/live-stock" 
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold tracking-[0.3em] text-white/90 hover:text-primary transition-colors flex items-center justify-between group"
              >
                LIVE STOCK
                <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <a 
                href="#care" 
                onClick={() => setIsOpen(false)} 
                className="text-sm font-bold tracking-[0.3em] text-white/90 hover:text-primary transition-colors flex items-center justify-between group"
              >
                CARE PORTAL
                <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)} 
                className="text-sm font-bold tracking-[0.3em] text-white/90 hover:text-primary transition-colors flex items-center justify-between group"
              >
                CONTACT
                <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              {/* Integrated from Hero boards */}
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold tracking-[0.3em] text-white/90 hover:text-primary transition-colors flex items-center justify-between group"
              >
                WHATSAPP INTEGRATION
                <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="#care" 
                onClick={() => setIsOpen(false)} 
                className="text-sm font-bold tracking-[0.3em] text-white/90 hover:text-primary transition-colors flex items-center justify-between group"
              >
                FISH CARE & TIPS
                <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Integrated from Footer Quick Navigation */}
              <div className="pt-4 border-t border-white/5 mt-2">
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4">Quick Navigation</p>
                <div className="flex flex-col gap-4">
                  <a 
                    href="#shipping" 
                    onClick={() => setIsOpen(false)} 
                    className="text-sm font-bold tracking-[0.3em] text-white/90 hover:text-primary transition-colors flex items-center justify-between group"
                  >
                    SHIPPING
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a 
                    href="#" 
                    onClick={() => setIsOpen(false)} 
                    className="text-sm font-bold tracking-[0.3em] text-white/90 hover:text-primary transition-colors flex items-center justify-between group"
                  >
                    TERMS
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 mt-2">
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4">Direct Communication</p>
                <div className="flex gap-4">
                  <a 
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="flex-1 bg-zinc-900 text-white py-4 rounded-xl flex flex-col items-center justify-center gap-2 border border-white/5 active:bg-zinc-800 transition-colors"
                  >
                    <Phone size={18} className="text-primary" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">Call Us</span>
                  </a>
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-zinc-900 text-white py-4 rounded-xl flex flex-col items-center justify-center gap-2 border border-white/5 active:bg-zinc-800 transition-colors"
                  >
                    <MessageSquare size={18} className="text-primary" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};