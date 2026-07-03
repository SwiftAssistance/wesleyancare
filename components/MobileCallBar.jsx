import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';

export default function MobileCallBar() {
  const { pathname } = useLocation();
  if (pathname === '/contact') return null;

  return (
    <div className="md:hidden fixed bottom-4 inset-x-4 z-40">
      <div className="flex gap-2 bg-evergreen rounded-full p-2 shadow-soft">
        <a
          href="tel:01753424473"
          className="flex-1 flex items-center justify-center gap-2 bg-terracotta text-white py-3 rounded-full font-semibold text-sm"
        >
          <Phone size={15} /> Call now
        </a>
        <Link
          to="/contact"
          className="flex-1 flex items-center justify-center gap-2 text-cream py-3 rounded-full font-semibold text-sm hover:bg-cream/10 transition-colors"
        >
          <MessageCircle size={15} /> Message
        </Link>
      </div>
    </div>
  );
}
