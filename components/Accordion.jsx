import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-6 py-6 text-left group"
          >
            <span className="font-semibold text-[#1B2A4A] text-base leading-snug group-hover:text-[#D4A855] transition-colors">
              {item.q}
            </span>
            <ChevronDown
              size={18}
              className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180 text-[#D4A855]' : ''}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-64 pb-6' : 'max-h-0'}`}
          >
            <p className="text-gray-500 leading-relaxed pr-8">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
