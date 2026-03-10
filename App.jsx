import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Heart, 
  UserCheck, 
  Home as HomeIcon, 
  Brain, 
  CheckCircle2,
  Calendar,
  ArrowRight
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1B2A4A] font-sans antialiased">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;700&display=swap');
          .font-serif { font-family: 'Libre Baskerville', serif; }
          .font-sans { font-family: 'DM Sans', sans-serif; }
          .reveal { opacity: 0; transform: translateY(20px); transition: all 0.6s ease-out; }
          .reveal.active { opacity: 1; transform: translateY(0); }
        `}
      </style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-2' : 'bg-white/90 py-4'}`}>
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold tracking-tight text-[#1B2A4A]">Wesleyan Care</span>
            <span className="text-[10px] uppercase tracking-widest text-[#D4A855] font-bold">Slough & Berkshire</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-sm font-medium hover:text-[#D4A855] transition-colors">{link.name}</a>
            ))}
            <a href="tel:07739661432" className="bg-[#D4A855] text-white px-5 py-2.5 rounded font-bold text-sm flex items-center gap-2 hover:bg-[#c19748]">
              <Phone size={16} /> 07739 661432
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-lg">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium py-2 border-b border-gray-50">{link.name}</a>
            ))}
            <a href="tel:07739661432" className="block bg-[#D4A855] text-white p-4 text-center rounded font-bold">Call: 07739 661432</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#7BA68D]/10 text-[#5a7e69] px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-6">
              <MapPin size={14} /> Registered Slough Care Provider
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1B2A4A] leading-[1.1] mb-6">
              Compassionate Care, <br /><span className="italic text-[#D4A855]">Tailored to Your Life.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              We provide high-quality disability support, aged care, and personal assistance for families across Slough and Berkshire. Real care, delivered by local people who genuinely value your dignity.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="bg-[#D4A855] text-white px-8 py-4 rounded font-bold shadow-md hover:bg-[#c19748] transition-all">View Our Services</a>
              <a href="#contact" className="border-2 border-[#1B2A4A] text-[#1B2A4A] px-8 py-4 rounded font-bold hover:bg-[#1B2A4A] hover:text-white transition-all">Contact Us</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-[#FAF7F2] rounded-lg border-8 border-white shadow-xl overflow-hidden flex items-center justify-center">
              <div className="text-center p-12">
                <Heart size={64} className="mx-auto text-[#D4A855]/20 mb-4" />
                <p className="font-serif italic text-gray-400">Locally trusted support for your loved ones in Berkshire.</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#7BA68D] text-white p-4 rounded shadow-lg hidden md:block">
              <p className="text-xs uppercase font-bold tracking-tighter opacity-80">Registration</p>
              <p className="font-bold">CQC Registered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <div className="bg-[#1B2A4A] py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between gap-8 text-white">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#D4A855]" size={24} />
            <span className="font-bold">8+ Years Experience</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#D4A855]" size={24} />
            <span className="font-bold">500+ Families Supported</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#D4A855]" size={24} />
            <span className="font-bold">24/7 Local Care</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#D4A855]" size={24} />
            <span className="font-bold">CQC Registered</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <div className="aspect-square bg-white border border-gray-200 rounded p-4 rotate-1 shadow-sm">
                <div className="w-full h-full bg-gray-50 flex items-center justify-center border border-dashed border-gray-300">
                  <span className="font-serif italic text-gray-400">Photo of our Slough-based team</span>
                </div>
             </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-sm font-bold text-[#D4A855] uppercase tracking-[0.2em] mb-4">Our Mission</h2>
            <h3 className="text-3xl md:text-4xl font-serif mb-6 text-[#1B2A4A]">Enhancing quality of life through real, human connection.</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Wesleyan Care Ltd is a Slough-based care provider built on the principles of dignity and professional integrity. We understand that inviting someone into your home is a major decision.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Whether it’s disability support or aged care, our mission is to ensure that residents across Berkshire receive the specific, compassionate care they deserve to live independently and safely.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 font-bold text-[#1B2A4A] border-b-2 border-[#D4A855] pb-1 hover:text-[#D4A855] transition-all">
              Learn more about our standards <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#1B2A4A]">How We Can Help</h2>
            <p className="text-gray-600">We provide flexible care packages designed to meet the actual daily needs of Slough families.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Palliative Care', desc: 'Expert end-of-life support focusing on comfort, dignity, and family peace of mind.', icon: Heart },
              { title: 'Adult Care Services', desc: 'From hourly check-ins to overnight personal care, we adapt to your schedule.', icon: UserCheck },
              { title: 'Household Support', desc: 'Assistance with shopping, cleaning, gardening, and keeping the home running.', icon: HomeIcon },
              { title: 'Mental Health Support', desc: 'Specialist care for those living with mental health challenges and recovery.', icon: Brain },
            ].map((s, idx) => (
              <div key={idx} className="bg-[#FAF7F2] p-8 border border-gray-100 rounded-sm hover:border-[#D4A855] transition-all hover:shadow-md group">
                <div className="w-12 h-12 bg-white rounded border border-gray-200 flex items-center justify-center text-[#D4A855] mb-6 group-hover:bg-[#D4A855] group-hover:text-white transition-all">
                  <s.icon size={24} />
                </div>
                <h4 className="font-bold text-xl mb-3">{s.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{s.desc}</p>
                <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-[#1B2A4A] hover:text-[#D4A855]">Inquire</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 bg-[#7BA68D]/10 text-[#7BA68D] flex items-center justify-center rounded mb-6">
                <UserCheck />
              </div>
              <h4 className="font-bold text-lg mb-3">Person-Centred</h4>
              <p className="text-gray-600 text-sm leading-relaxed">No generic schedules. We build our service around your specific health needs and personal preferences.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#7BA68D]/10 text-[#7BA68D] flex items-center justify-center rounded mb-6">
                <CheckCircle2 />
              </div>
              <h4 className="font-bold text-lg mb-3">Experienced Pros</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Every member of the Wesleyan Care team is fully vetted, trained, and locally based in Berkshire.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#7BA68D]/10 text-[#7BA68D] flex items-center justify-center rounded mb-6">
                <MapPin />
              </div>
              <h4 className="font-bold text-lg mb-3">Local & Trusted</h4>
              <p className="text-gray-600 text-sm leading-relaxed">We aren't a national call centre. We are a Slough business that cares about our reputation in the town.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#1B2A4A] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="mb-8 text-[#D4A855]">
            <Heart size={40} className="mx-auto" />
          </div>
          <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8">
            "Wesleyan Care has been incredible for our family. The carers are professional, kind, and genuinely caring. It's made all the difference to my mother's daily life."
          </p>
          <p className="font-bold uppercase tracking-widest text-sm text-[#D4A855]">— Sarah T., Slough Resident</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-[#FAF7F2] rounded border border-gray-100 overflow-hidden grid md:grid-cols-5">
            <div className="md:col-span-2 bg-[#1B2A4A] p-10 md:p-16 text-white">
              <h3 className="text-3xl font-serif mb-8">Discuss Your Care Needs</h3>
              <p className="opacity-70 mb-12">We’re available to chat about how we can support you or your loved ones in the Slough area.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="text-[#D4A855]" />
                  <span className="font-bold">07739 661432</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-[#D4A855]" />
                  <span className="text-sm">Support@Wesleyancare.onmicrosoft.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-[#D4A855]" />
                  <span className="text-sm">18 Teesdale Road, Slough, Berkshire</span>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center text-[#7BA68D]">
                  <Calendar />
                </div>
                <div>
                  <h4 className="font-bold">Book a Consultation</h4>
                  <p className="text-sm text-gray-500">Free, no-obligation chat about care pathways.</p>
                </div>
              </div>
              
              <div className="grid gap-4">
                <button className="w-full bg-[#D4A855] text-white p-4 rounded font-bold hover:bg-[#c19748] shadow-sm">Get in Touch via Phone</button>
                <button className="w-full border-2 border-[#1B2A4A] text-[#1B2A4A] p-4 rounded font-bold hover:bg-[#1B2A4A] hover:text-white transition-all">Email for Information</button>
              </div>
              <p className="mt-6 text-xs text-gray-400 text-center italic">We usually respond to all local inquiries within 1 working day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#FAF7F2] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="text-lg font-serif font-bold text-[#1B2A4A]">Wesleyan Care Ltd</div>
              <p className="text-xs text-gray-400 mt-1">Professional Care Services in Slough & Berkshire.</p>
            </div>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
              <a href="#home" className="hover:text-[#1B2A4A]">Home</a>
              <a href="#about" className="hover:text-[#1B2A4A]">About</a>
              <a href="#services" className="hover:text-[#1B2A4A]">Services</a>
              <a href="#contact" className="hover:text-[#1B2A4A]">Contact</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            <p>© {new Date().getFullYear()} Wesleyan Care Ltd. Registered in England & Wales.</p>
            <p>18 Teesdale Road, Slough, SL2 1DA</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
