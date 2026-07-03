import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="border-b border-evergreen/20">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-t border-evergreen/20">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-6 text-left group"
              aria-expanded={isOpen}
            >
              <span className="label-mono text-terracotta">0{i + 1}</span>
              <span className={`font-display text-xl sm:text-2xl leading-snug transition-colors ${isOpen ? 'text-terracotta' : 'text-evergreen group-hover:text-terracotta'}`}>
                {item.q}
              </span>
              <Plus
                size={18}
                className={`self-center text-evergreen/40 transition-transform duration-300 ${isOpen ? 'rotate-45 text-terracotta' : ''}`}
              />
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <p className="text-evergreen/60 leading-relaxed pb-7 pl-[4rem] pr-10 max-w-2xl">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
