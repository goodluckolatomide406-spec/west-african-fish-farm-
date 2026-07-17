import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FISH_STOCK } from '../data';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Heart, ShoppingCart, ChevronDown, ChevronUp } from 'lucide-react';
import { InquirePriceModal } from './InquirePriceModal';

const FishCard = ({ fish, index }: { fish: typeof FISH_STOCK[number]; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [inquireOpen, setInquireOpen] = useState(false);

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-zinc-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={fish.imageUrl} 
          alt={fish.name}
          className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${fish.id === '10' ? 'object-contain bg-zinc-900' : 'object-cover'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
        
        <button
          onClick={toggleLike}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 hover:bg-black/60 transition-all duration-300"
        >
          <Heart
            size={18}
            className={`transition-all duration-300 ${
              liked ? 'fill-red-500 text-red-500 scale-110' : 'text-white/60 hover:text-white'
            }`}
          />
        </button>

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
            <p className={`text-sm text-zinc-400 leading-relaxed ${!expanded ? 'line-clamp-2' : ''}`}>
              {fish.note}
            </p>
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

        <Button
          onClick={() => setInquireOpen(true)}
          className="w-full bg-white/5 hover:bg-primary text-white hover:text-black border border-white/10 hover:border-primary transition-all duration-300 rounded-xl font-bold text-xs tracking-widest py-6"
        >
          <ShoppingCart size={16} className="mr-2" />
          INQUIRE FOR MORE INFO
        </Button>

        <InquirePriceModal
          open={inquireOpen}
          onOpenChange={setInquireOpen}
          preselectedSpecies={fish.name}
        />
      </div>
    </motion.div>
  );
};

export const StockGallery = () => {
  return (
    <section id="stock" className="py-24 px-4 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FISH_STOCK.map((fish, index) => (
            <FishCard key={fish.id} fish={fish} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};