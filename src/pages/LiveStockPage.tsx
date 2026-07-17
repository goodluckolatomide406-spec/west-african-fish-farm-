import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FISH_STOCK } from '../data';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Heart, ShoppingCart, ChevronDown, ChevronUp } from 'lucide-react';
import { InquirePriceModal } from '../components/InquirePriceModal';

const cardSpring = { type: "spring", stiffness: 200, damping: 20, mass: 1 };

const FishCard = ({ fish, index }: { fish: typeof FISH_STOCK[number]; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [inquireOpen, setInquireOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem('liked_fish');
    if (stored) {
      const likedIds = JSON.parse(stored);
      if (likedIds.includes(fish.id)) setLiked(true);
    }
  }, [fish.id]);

  const toggleLike = () => {
    const stored = localStorage.getItem('liked_fish');
    const likedIds: string[] = stored ? JSON.parse(stored) : [];
    if (liked) {
      const updated = likedIds.filter((id: string) => id !== fish.id);
      localStorage.setItem('liked_fish', JSON.stringify(updated));
    } else {
      likedIds.push(fish.id);
      localStorage.setItem('liked_fish', JSON.stringify(likedIds));
    }
    setLiked(!liked);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.96 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={prefersReducedMotion ? {} : { y: -8, scale: 1.01, transition: cardSpring }}
      className="group bg-zinc-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-primary/30 transition-colors duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img 
          src={fish.imageUrl} 
          alt={fish.name}
          className={`w-full h-full ${fish.id === '10' ? 'object-contain bg-zinc-900' : 'object-cover'}`}
          whileHover={prefersReducedMotion ? {} : { scale: 1.12, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
        
        <motion.button
          onClick={toggleLike}
          whileTap={prefersReducedMotion ? {} : { scale: 0.8 }}
          whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 hover:bg-black/60 transition-colors duration-300"
        >
          <Heart
            size={18}
            className={`transition-all duration-300 ${
              liked ? 'fill-red-500 text-red-500 scale-110' : 'text-white/60 hover:text-white'
            }`}
          />
        </motion.button>

        <div className="absolute top-4 left-4">
          <Badge className={`uppercase text-[10px] font-black tracking-widest border-none ${
            fish.status === 'IN STOCK' ? 'bg-primary text-black' : 'bg-zinc-800 text-white/50'
          }`}>
            {fish.status}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-primary transition-colors">
            {fish.name}
          </h3>
          {fish.scientificName && (
            <p className="text-primary/60 text-xs italic font-medium tracking-wide">
              {fish.scientificName}
            </p>
          )}
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between py-3 border-y border-white/5">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Available Sizes</span>
            <span className="text-xs text-white font-bold">{fish.size}</span>
          </div>
          <div>
            <motion.div
              initial={false}
              animate={{ height: expanded ? 'auto' : '2.5rem' }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p className={`text-sm text-zinc-400 leading-relaxed ${!expanded ? 'line-clamp-2' : ''}`}>
                {fish.note}
              </p>
            </motion.div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-1 text-xs font-bold text-primary/70 hover:text-primary transition-colors flex items-center gap-1"
            >
              {expanded ? (
                <>Show less <ChevronUp size={12} /></>
              ) : (
                <>Read more <ChevronDown size={12} /></>
              )}
            </button>
          </div>
        </div>

        <motion.div
          whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
        >
          <Button
            onClick={() => setInquireOpen(true)}
            className="w-full bg-white/5 hover:bg-primary text-white hover:text-black border border-white/10 hover:border-primary transition-all duration-300 rounded-xl font-bold text-xs tracking-widest py-6"
          >
            <ShoppingCart size={16} className="mr-2" />
            INQUIRE FOR MORE INFO
          </Button>
        </motion.div>

        <InquirePriceModal
          open={inquireOpen}
          onOpenChange={setInquireOpen}
          preselectedSpecies={fish.name}
        />
      </div>
    </motion.div>
  );
};

export const LiveStockPage = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="stock" className="py-24 px-4 bg-zinc-950/50 pt-40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-4 tracking-tighter">
              LIVE <span className="text-primary">STOCK</span>
            </h2>
            <p className="text-zinc-500 font-medium max-w-lg">
              Our currently available specimens. Each fish is individually inspected and 
              prepared for its journey to your aquarium.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5">
              {FISH_STOCK.length} Specimens Available
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FISH_STOCK.map((fish, index) => (
            <FishCard key={fish.id} fish={fish} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};