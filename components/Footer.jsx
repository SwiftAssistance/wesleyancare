import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

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
    <footer className="px-3 pb-3 sm:px-5 sm:pb-5 pt-6">
      <div className="max-w-7xl mx-auto bg-evergreen text-cream rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">

        {/* CTA strip */}
        <div className="border-b border-cream/10">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 py-14 md:py-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-terracotta-light mb-5">Talk to me</p>
              <a
                href="tel:01753424473"
                className="block font-display text-4xl sm:text-5xl md:text-6xl hover:text-terracotta-light transition-colors leading-none tracking-tight"
              >
                01753 424 473
              </a>
              <p className="text-cream/50 mt-5 text-sm">Mon–Fri 8am–6pm · Sat 9am–1pm · No obligation, no pressure.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 self-start md:self-auto bg-cream text-evergreen hover:bg-terracotta hover:text-white px-7 py-4 rounded-full font-semibold text-sm transition-colors"
            >
              Send a message <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        {/* Columns */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 grid gap-10 md:grid-cols-[2fr_1fr_1.2fr_1.4fr]">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-9 h-9 rounded-full bg-cream text-evergreen font-display text-lg flex items-center justify-center">W</span>
              <div className="leading-tight">
                <p className="font-display text-lg tracking-tight">Wesleyan Care</p>
                <p className="text-[9px] uppercase tracking-[0.28em] text-terracotta-light font-semibold">Slough · Berkshire</p>
              </div>
            </div>
            <p className="text-sm text-cream/50 leading-relaxed max-w-[26ch]">
              Independent private care for adults with complex needs across Berkshire.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cream/35 mb-5">Pages</p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map(l => (
                <li key={l.name}>
                  <Link to={l.to} className="text-sm text-cream/55 hover:text-cream transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cream/35 mb-5">Services</p>
            <ul className="flex flex-col gap-2.5">
              {SERVICE_LINKS.map(s => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-cream/55 hover:text-cream transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cream/35 mb-5">Contact</p>
            <div className="flex flex-col gap-4">
              <a href="tel:01753424473" className="flex items-center gap-3 text-sm text-cream/55 hover:text-cream transition-colors">
                <Phone size={13} className="text-terracotta-light flex-shrink-0" />
                01753 424 473
              </a>
              <a href="mailto:support@wesleyancare.onmicrosoft.com" className="flex items-start gap-3 text-sm text-cream/55 hover:text-cream transition-colors break-all">
                <Mail size={13} className="text-terracotta-light flex-shrink-0 mt-0.5" />
                support@wesleyancare.onmicrosoft.com
              </a>
              <p className="flex items-start gap-3 text-sm text-cream/55">
                <MapPin size={13} className="text-terracotta-light flex-shrink-0 mt-0.5" />
                <span>18 Teesdale Road<br />Slough, SL2 1UD</span>
              </p>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 pb-8">
          <div className="pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-2 text-[11px] text-cream/30">
            <p>© {new Date().getFullYear()} Wesleyan Care. All rights reserved.</p>
            <p>Registered in England &amp; Wales · Private Care Provider</p>
          </div>
        </div>
      </div>

      {/* Spacer so the fixed mobile call bar never covers footer content */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </footer>
  );
}
