import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

export default function MobileCallBar() {
  const { pathname } = useLocation();
  if (pathname === '/contact') return null;

  return (
    <div className="md:hidden no-print fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 border-t border-cream/20">
      <a
        href="tel:01753424473"
        className="flex items-center justify-center gap-2.5 bg-terracotta text-white py-4 font-mono text-[11px] uppercase tracking-[0.18em]"
      >
        <Phone size={13} /> Call now
      </a>
      <Link
        to="/contact"
        className="flex items-center justify-center gap-2.5 bg-evergreen text-cream py-4 font-mono text-[11px] uppercase tracking-[0.18em]"
      >
        <Mail size={13} /> Message
      </Link>
    </div>
  );
}
