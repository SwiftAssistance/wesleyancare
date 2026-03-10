import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home',     to: '/' },
  { name: 'About',    to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Blog',     to: '/blog' },
  { name: 'Contact',  to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B2A4A] text-white">
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-serif text-xl font-bold mb-2">Wesleyan Care</div>
            <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Slough · Berkshire</p>
            <p className="text-white/60 text-sm leading-relaxed">
              Private care for adults with complex needs across Slough, Berkshire and surrounding areas.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">Quick Links</p>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map(l => (
                <Link key={l.name} to={l.to} className="text-sm text-white/60 hover:text-white transition-colors">
                  {l.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">Contact</p>
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-[#D4A855] flex-shrink-0" />
                <a href="tel:01753424473" className="hover:text-white transition-colors">01753 424 473</a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={14} className="text-[#D4A855] flex-shrink-0 mt-0.5" />
                <a href="mailto:support@wesleyancare.onmicrosoft.com" className="hover:text-white transition-colors break-all">
                  support@wesleyancare.onmicrosoft.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-[#D4A855] flex-shrink-0 mt-0.5" />
                <span>89 Whitby Road, Slough, SL1 3DR</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Wesleyan Care. All rights reserved.</p>
          <p>Registered in England & Wales · Private Care Provider</p>
        </div>
      </div>
    </footer>
  );
}
