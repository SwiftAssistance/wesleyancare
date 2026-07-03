import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home',     to: '/' },
  { name: 'About',    to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Blog',     to: '/blogs' },
  { name: 'Contact',  to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  const isActive = (to) => to === '/' ? pathname === '/' : pathname.startsWith(to);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={`max-w-6xl mx-auto rounded-full border transition-all duration-300 ${
          scrolled
            ? 'bg-parchment/95 backdrop-blur border-evergreen/10 shadow-card'
            : 'bg-parchment/80 backdrop-blur-sm border-evergreen/5'
        }`}
      >
        <div className="pl-6 pr-2.5 py-2.5 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 group" aria-label="Wesleyan Care — home">
            <span className="w-9 h-9 rounded-full bg-evergreen text-cream font-display text-lg flex items-center justify-center transition-colors group-hover:bg-terracotta">
              W
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg text-evergreen tracking-tight">Wesleyan Care</span>
              <span className="text-[9px] uppercase tracking-[0.28em] text-terracotta font-semibold">Slough · Berkshire</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(l => (
              <Link
                key={l.name}
                to={l.to}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  isActive(l.to)
                    ? 'bg-evergreen/[0.06] text-evergreen font-semibold'
                    : 'text-evergreen/60 hover:text-evergreen hover:bg-evergreen/[0.04] font-medium'
                }`}
              >
                {l.name}
              </Link>
            ))}
            <a
              href="tel:01753424473"
              className="ml-3 flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white text-sm font-semibold pl-4 pr-5 py-2.5 rounded-full transition-colors"
            >
              <Phone size={14} /> 01753 424 473
            </a>
          </div>

          <button
            className="md:hidden p-2.5 mr-1 text-evergreen rounded-full hover:bg-evergreen/5 transition-colors"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 bg-parchment rounded-3xl border border-evergreen/10 shadow-lift p-4">
          <div className="flex flex-col">
            {NAV_LINKS.map(l => (
              <Link
                key={l.name}
                to={l.to}
                className={`px-4 py-3.5 rounded-2xl text-base transition-colors ${
                  isActive(l.to)
                    ? 'bg-evergreen/[0.06] text-evergreen font-semibold'
                    : 'text-evergreen/65 font-medium'
                }`}
              >
                {l.name}
              </Link>
            ))}
          </div>
          <a
            href="tel:01753424473"
            className="mt-3 flex items-center justify-center gap-2 bg-terracotta text-white py-3.5 rounded-full font-semibold text-sm"
          >
            <Phone size={15} /> Call 01753 424 473
          </a>
        </div>
      )}
    </header>
  );
}
