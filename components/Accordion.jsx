import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`rounded-3xl border transition-colors ${
              isOpen ? 'bg-parchment border-terracotta/30 shadow-card' : 'bg-parchment/60 border-evergreen/10 hover:border-evergreen/25'
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 px-6 sm:px-8 py-5 sm:py-6 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-evergreen text-base leading-snug">
                {item.q}
              </span>
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  isOpen ? 'bg-terracotta text-white rotate-45' : 'bg-evergreen/[0.06] text-evergreen group-hover:bg-terracotta/15 group-hover:text-terracotta'
                }`}
              >
                <Plus size={16} />
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <p className="text-evergreen/60 leading-relaxed px-6 sm:px-8 pb-6 pr-16">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
