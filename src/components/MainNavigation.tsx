import { Anchor, ShoppingCart } from 'lucide-react';
import { InquirePriceModal } from './InquirePriceModal';
import { Link, useLocation } from 'react-router-dom';

export const MainNavigation = () => {
  const location = useLocation();
  const isStockPage = location.pathname === '/live-stock';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
            <Anchor size={20} className="text-black" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-black text-white tracking-tighter leading-none">
              WEST AFRICA <span className="text-primary">FISH FARM</span>
            </span>
            <span className="text-[9px] font-black text-zinc-500 tracking-[0.2em] uppercase">Premium Exotic Stock</span>
          </div>
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link 
            to="/" 
            className="text-[11px] font-black text-white/70 hover:text-primary tracking-widest uppercase transition-colors px-4"
          >
            Home
          </Link>
          <Link 
            to="/live-stock" 
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-black text-[11px] tracking-[0.1em] transition-all duration-300 border-2 ${
              isStockPage 
                ? 'bg-white text-black border-white' 
                : 'bg-black/40 text-white border-white/10 hover:border-primary hover:text-primary'
            }`}
          >
            <ShoppingCart size={14} />
            LIVESTOCK
          </Link>
          <InquirePriceModal />
        </div>
      </div>
    </nav>
  );
};