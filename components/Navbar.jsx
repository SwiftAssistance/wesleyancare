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
  const { pathname } = useLocation();

  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  const isActive = (to) => to === '/' ? pathname === '/' : pathname.startsWith(to);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-evergreen/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="h-16 sm:h-[4.5rem] flex items-center justify-between gap-6">
          <Link to="/" className="flex items-baseline gap-3 group" aria-label="Wesleyan Care — home">
            <span className="font-display text-xl sm:text-[1.35rem] text-evergreen tracking-tight group-hover:text-terracotta transition-colors">
              Wesleyan&nbsp;Care<span className="text-terracotta">.</span>
            </span>
            <span className="hidden sm:inline label-mono text-evergreen/50">Slough, Berks.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
            {NAV_LINKS.map(l => (
              <Link
                key={l.name}
                to={l.to}
                aria-current={isActive(l.to) ? 'page' : undefined}
                className={`label-mono py-2 border-b transition-colors ${
                  isActive(l.to)
                    ? 'text-terracotta border-terracotta'
                    : 'text-evergreen/60 border-transparent hover:text-evergreen'
                }`}
              >
                {l.name}
              </Link>
            ))}
            <a
              href="tel:01753424473"
              className="btn btn-outline !py-2.5 !px-5 ml-2"
            >
              <Phone size={12} /> 01753 424 473
            </a>
          </nav>

          <button
            className="md:hidden p-2 -mr-2 text-evergreen"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-cream border-t border-evergreen/20" aria-label="Primary">
          {NAV_LINKS.map((l, i) => (
            <Link
              key={l.name}
              to={l.to}
              aria-current={isActive(l.to) ? 'page' : undefined}
              className={`flex items-baseline justify-between px-5 py-4 border-b border-evergreen/10 ${
                isActive(l.to) ? 'text-terracotta' : 'text-evergreen/70'
              }`}
            >
              <span className="font-display text-xl">{l.name}</span>
              <span className="label-mono text-evergreen/35">0{i + 1}</span>
            </Link>
          ))}
          <a href="tel:01753424473" className="btn btn-solid w-full !py-4">
            <Phone size={13} /> Call 01753 424 473
          </a>
        </nav>
      )}
    </header>
  );
}
