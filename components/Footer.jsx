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
      <div className="max-w-6xl mx-auto px-5 pt-16 pb-10">

        {/* Top: wordmark + tagline spanning full width */}
        <div className="border-b border-white/8 pb-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-serif text-2xl font-bold mb-1 tracking-tight">Wesleyan Care</div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">Slough · Berkshire</p>
          </div>
          <p className="text-white/35 text-sm leading-relaxed max-w-xs md:text-right">
            Private care for adults with complex needs across Slough, Berkshire and surrounding areas.
          </p>
        </div>

        {/* Grid: links + contact */}
        <div className="grid md:grid-cols-3 gap-12 mb-14">
          <div className="md:col-span-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-5">Pages</p>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map(l => (
                <Link key={l.name} to={l.to} className="text-sm text-white/50 hover:text-white transition-colors">
                  {l.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-5">Get in touch</p>
            <div className="grid sm:grid-cols-2 gap-5 text-sm text-white/50">
              <div className="flex items-center gap-3">
                <Phone size={13} className="text-[#D4A855] flex-shrink-0" />
                <a href="tel:01753424473" className="hover:text-white transition-colors">01753 424 473</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={13} className="text-[#D4A855] flex-shrink-0" />
                <span>89 Whitby Road, Slough, SL1 3DR</span>
              </div>
              <div className="flex items-start gap-3 sm:col-span-2">
                <Mail size={13} className="text-[#D4A855] flex-shrink-0 mt-0.5" />
                <a href="mailto:support@wesleyancare.onmicrosoft.com" className="hover:text-white transition-colors break-all">
                  support@wesleyancare.onmicrosoft.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-7 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-[11px] text-white/25">
          <p>© {new Date().getFullYear()} Wesleyan Care. All rights reserved.</p>
          <p>Registered in England & Wales · Private Care Provider</p>
        </div>
      </div>
    </footer>
  );
}
