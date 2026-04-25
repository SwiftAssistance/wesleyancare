import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home',     to: '/' },
  { name: 'About',    to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Blogs',    to: '/blogs' },
  { name: 'Contact',  to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B2A4A] text-white">
      <div className="max-w-6xl mx-auto px-5 py-16">

        <div className="grid md:grid-cols-[2fr_1fr_1.5fr] gap-12 pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <div className="font-serif text-xl font-bold tracking-tight mb-1">Wesleyan Care</div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mb-6">Slough · Berkshire</p>
            <p className="text-sm text-white/40 leading-relaxed max-w-[22ch]">
              Independent private care for adults with complex needs across Berkshire.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25 mb-5">Pages</p>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map(l => (
                <Link key={l.name} to={l.to} className="text-sm text-white/45 hover:text-white transition-colors">
                  {l.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25 mb-5">Contact</p>
            <div className="flex flex-col gap-4">
              <a href="tel:01753424473" className="flex items-center gap-3 text-sm text-white/45 hover:text-white transition-colors group">
                <Phone size={12} className="text-[#D4A855] flex-shrink-0" />
                01753 424 473
              </a>
              <a href="mailto:support@wesleyancare.onmicrosoft.com" className="flex items-start gap-3 text-sm text-white/45 hover:text-white transition-colors break-all">
                <Mail size={12} className="text-[#D4A855] flex-shrink-0 mt-0.5" />
                support@wesleyancare.onmicrosoft.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/45">
                <MapPin size={12} className="text-[#D4A855] flex-shrink-0 mt-0.5" />
                <span>18 Teesdale Road<br />Slough, SL2 1UD</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal bar */}
        <div className="pt-7 flex flex-col sm:flex-row justify-between gap-2 text-[11px] text-white/20">
          <p>© {new Date().getFullYear()} Wesleyan Care. All rights reserved.</p>
          <p>Registered in England & Wales · Private Care Provider</p>
        </div>

      </div>
    </footer>
  );
}
