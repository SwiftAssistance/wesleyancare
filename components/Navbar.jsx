import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home',     to: '/' },
  { name: 'About',    to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Funding',  to: '/funding' },
  { name: 'Contact',  to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Scroll to top on page change
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-sm py-3' : 'bg-white/80 backdrop-blur-sm py-5'}`}>
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-lg font-serif font-bold text-[#1B2A4A] tracking-tight">Wesleyan Care</span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4A855] font-semibold">Slough · Berkshire</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <Link
              key={l.name}
              to={l.to}
              className={`text-sm font-medium transition-colors ${
                pathname === l.to
                  ? 'text-[#D4A855]'
                  : 'text-[#1B2A4A]/60 hover:text-[#1B2A4A]'
              }`}
            >
              {l.name}
            </Link>
          ))}
          <a
            href="tel:01753424473"
            className="flex items-center gap-2 bg-[#D4A855] hover:bg-[#c09040] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm"
          >
            <Phone size={14} /> 01753 424 473
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-1 shadow-lg">
          {NAV_LINKS.map(l => (
            <Link
              key={l.name}
              to={l.to}
              className={`py-3 text-base font-medium border-b border-gray-50 last:border-0 ${pathname === l.to ? 'text-[#D4A855]' : ''}`}
            >
              {l.name}
            </Link>
          ))}
          <a
            href="tel:01753424473"
            className="mt-3 flex items-center justify-center gap-2 bg-[#D4A855] text-white py-3 rounded-full font-semibold"
          >
            <Phone size={16} /> Call: 01753 424 473
          </a>
        </div>
      )}
    </nav>
  );
}
