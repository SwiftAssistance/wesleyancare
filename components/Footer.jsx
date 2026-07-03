import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home',     to: '/' },
  { name: 'About',    to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Blog',     to: '/blogs' },
  { name: 'Contact',  to: '/contact' },
];

const SERVICE_LINKS = [
  'Dementia Care',
  'Palliative Care',
  'Cardiac Care',
  'Mental Health Support',
  'Spinal Injury Support',
  'Home & Personal Care',
];

export default function Footer() {
  return (
    <footer className="bg-evergreen text-cream">
      {/* CTA band */}
      <div className="border-b border-cream/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-24">
          <p className="label-mono text-cream/50 mb-8">Talk to me — no obligation, no pressure</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <a
              href="tel:01753424473"
              className="font-display text-[13.5vw] sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight hover:text-terracotta-light transition-colors"
            >
              01753 424 473
            </a>
            <div className="flex flex-col items-start gap-5 lg:pb-2">
              <p className="font-mono text-xs text-cream/50 leading-relaxed">
                Mon–Fri 8am–6pm<br />Sat 9am–1pm
              </p>
              <Link to="/contact" className="btn border border-cream/40 text-cream hover:bg-cream hover:text-evergreen hover:border-cream">
                Send a message <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.3fr_1.5fr]">
        <div>
          <p className="font-display text-2xl tracking-tight mb-1.5">Wesleyan Care<span className="text-terracotta-light">.</span></p>
          <p className="label-mono text-terracotta-light mb-7">Slough · Berkshire</p>
          <p className="text-sm text-cream/50 leading-relaxed max-w-[28ch]">
            Independent private care for adults with complex needs across Berkshire.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="label-mono text-cream/40 border-t border-cream/20 pt-4 mb-5">Pages</p>
          <ul className="flex flex-col gap-2.5">
            {NAV_LINKS.map(l => (
              <li key={l.name}>
                <Link to={l.to} className="text-sm text-cream/60 hover:text-cream transition-colors">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="label-mono text-cream/40 border-t border-cream/20 pt-4 mb-5">Services</p>
          <ul className="flex flex-col gap-2.5">
            {SERVICE_LINKS.map(s => (
              <li key={s}>
                <Link to="/services" className="text-sm text-cream/60 hover:text-cream transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label-mono text-cream/40 border-t border-cream/20 pt-4 mb-5">Contact</p>
          <div className="flex flex-col gap-3 text-sm text-cream/60">
            <a href="tel:01753424473" className="hover:text-cream transition-colors">01753 424 473</a>
            <a href="mailto:support@wesleyancare.onmicrosoft.com" className="hover:text-cream transition-colors break-all">
              support@wesleyancare.onmicrosoft.com
            </a>
            <p>18 Teesdale Road<br />Slough, SL2 1UD</p>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-cream/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-cream/35">
          <p>© {new Date().getFullYear()} Wesleyan Care</p>
          <p>Registered in England &amp; Wales · Private Care Provider</p>
        </div>
      </div>

      {/* Spacer so the fixed mobile call bar never covers footer content */}
      <div className="h-14 md:hidden" aria-hidden="true" />
    </footer>
  );
}
