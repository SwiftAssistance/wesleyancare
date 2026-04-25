import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home',     to: '/' },
  { name: 'About',    to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Blogs',    to: '/blogs' },
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

  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  const isActive = (to) => to === '/' ? pathname === '/' : pathname.startsWith(to);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/97 backdrop-blur shadow-[0_1px_0_rgba(0,0,0,0.06)] py-3' : 'bg-white/90 backdrop-blur-sm py-5'}`}>
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-base font-serif font-bold text-[#1B2A4A] tracking-tight">Wesleyan Care</span>
          <span className="text-[8px] uppercase tracking-[0.25em] text-[#D4A855] font-semibold">Slough · Berkshire</span>
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map(l => (
            <Link
              key={l.name}
              to={l.to}
              className={`text-sm transition-colors ${
                isActive(l.to)
                  ? 'text-[#1B2A4A] font-semibold'
                  : 'text-[#1B2A4A]/50 hover:text-[#1B2A4A] font-medium'
              }`}
            >
              {l.name}
            </Link>
          ))}
          <a
            href="tel:01753424473"
            className="flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#243860] text-white text-sm font-semibold px-5 py-2.5 transition-colors"
          >
            <Phone size={13} /> 01753 424 473
          </a>
        </div>

        <button
          className="md:hidden p-2 text-[#1B2A4A] hover:text-[#D4A855] transition-colors"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="4" x2="16" y2="16" /><line x1="16" y1="4" x2="4" y2="16" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="6" x2="17" y2="6" /><line x1="3" y1="10" x2="17" y2="10" /><line x1="3" y1="14" x2="17" y2="14" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 pt-2 pb-5 flex flex-col gap-0 shadow-lg">
          {NAV_LINKS.map(l => (
            <Link
              key={l.name}
              to={l.to}
              className={`py-3.5 text-base border-b border-gray-50 last:border-0 ${isActive(l.to) ? 'text-[#1B2A4A] font-semibold' : 'text-[#1B2A4A]/60'}`}
            >
              {l.name}
            </Link>
          ))}
          <a
            href="tel:01753424473"
            className="mt-4 flex items-center justify-center gap-2 bg-[#1B2A4A] text-white py-3.5 font-semibold text-sm"
          >
            <Phone size={14} /> 01753 424 473
          </a>
        </div>
      )}
    </nav>
  );
}
