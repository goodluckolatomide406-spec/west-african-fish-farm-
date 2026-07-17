import { FISH_STOCK } from '../data';
import { FishCard } from '../components/FishCard';

export const StockList = () => {
  return (
    <div className="pt-32 pb-24 px-4 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-[11px] font-black tracking-[0.5em] text-primary uppercase mb-4 block">
            Current Inventory
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-black text-white leading-none tracking-tighter mb-6">
            PREMIUM <span className="text-primary italic">LIVESTOCK</span>
          </h1>
          <p className="text-zinc-500 text-lg font-medium max-w-2xl">
            Browse our selection of wild-caught and sustainably sourced West African specimens. 
            All livestock undergoes a strict quarantine period before being cleared for export.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FISH_STOCK.map((fish) => (
            <FishCard key={fish.id} fish={fish} />
          ))}
        </div>
      </div>
    </div>
  );
};