import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Heart, ShoppingCart, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { InquirePriceModal } from './InquirePriceModal';
import { FISH_STOCK } from '../data';
import { toast } from 'sonner';

type Fish = typeof FISH_STOCK[number];

interface FishCardProps {
  fish: Fish;
  index?: number;
}

const cardSpring = { type: "spring", stiffness: 200, damping: 20, mass: 1 };
const likeSpring = { type: "spring", stiffness: 400, damping: 10 };

export const FishCard = ({ fish, index = 0 }: FishCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(`fish-liked-${fish.id}`);
    if (saved) setIsLiked(JSON.parse(saved));
  }, [fish.id]);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newState = !isLiked;
    setIsLiked(newState);
    localStorage.setItem(`fish-liked-${fish.id}`, JSON.stringify(newState));
    if (newState) {
      toast.success(`Liked ${fish.name}!`);
    } else {
      toast.success(`Removed ${fish.name} from likes`);
    }
  };

  const staggerTransition = prefersReducedMotion
    ? { duration: 0.2 }
    : { delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] };

  return (
    <motion.div
      ref={cardRef}
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.96 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={staggerTransition}
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

        {/* Like Button with spring physics */}
        <motion.button
          onClick={handleLike}
          whileTap={prefersReducedMotion ? {} : { scale: 0.8 }}
          whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
          className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition-colors duration-300 z-10 ${
            isLiked
              ? 'bg-primary text-black'
              : 'bg-black/40 text-white hover:bg-black/60'
          }`}
          aria-label={isLiked ? 'Unlike' : 'Like'}
        >
          <motion.div
            animate={isLiked ? { scale: [1, 1.4, 1], rotate: [0, -15, 0] } : { scale: 1, rotate: 0 }}
            transition={likeSpring}
          >
            <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
          </motion.div>
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
              animate={{ height: isExpanded ? 'auto' : '2.5rem' }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p className={`text-sm text-zinc-400 leading-relaxed ${!isExpanded ? 'line-clamp-2' : ''}`}>
                {fish.note}
              </p>
            </motion.div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-1 text-xs font-bold text-primary/70 hover:text-primary transition-colors flex items-center gap-1"
            >
              {isExpanded ? (
                <>Show less <ChevronUp size={12} /></>
              ) : (
                <>Read more <ChevronDown size={12} /></>
              )}
            </button>
          </div>
        </div>

        <InquirePriceModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          preselectedSpecies={fish.name}
          trigger={
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            >
              <Button
                className="w-full bg-white/5 hover:bg-primary text-white hover:text-black border border-white/10 hover:border-primary transition-all duration-300 rounded-xl font-bold text-xs tracking-widest py-6"
              >
                <ShoppingCart size={16} className="mr-2" />
                INQUIRE FOR MORE INFO
              </Button>
            </motion.div>
          }
        />
      </div>
    </motion.div>
  );
};