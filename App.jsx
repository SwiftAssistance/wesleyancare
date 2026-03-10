import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Heart,
  UserCheck,
  Brain,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Star,
  Shield,
  Clock,
  Users,
  Home as HomeIcon,
  Activity,
  Stethoscope,
  HandHeart,
} from 'lucide-react';

/* ─── Scroll reveal hook ─────────────────────────────────── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, className = '', delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── Data ───────────────────────────────────────────────── */
const NAV_LINKS = [
  { name: 'Home',     href: '#home' },
  { name: 'About',    href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Funding',  href: '#funding' },
  { name: 'Contact',  href: '#contact' },
];

const SERVICES = [
  {
    icon: Brain,
    title: 'Dementia Care',
    desc: 'Specialist support for individuals living with dementia, delivered with patience, consistency, and compassion to preserve dignity and independence.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Heart,
    title: 'Palliative Care',
    desc: 'Sensitive end-of-life support focused on comfort and quality of life — for the individual and their family — every step of the way.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Activity,
    title: 'Cardiac Care',
    desc: 'Tailored care plans for those managing heart conditions, helping with medication, mobility, and daily routines to support recovery and wellbeing.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: Stethoscope,
    title: 'Spinal Injury Support',
    desc: 'Specialist personal care and rehabilitation assistance for individuals living with spinal cord injuries, supporting mobility and daily living.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: HandHeart,
    title: 'Mental Health Support',
    desc: 'Caring, consistent support for adults managing mental health challenges, helping to build routine, confidence, and connection.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: HomeIcon,
    title: 'Home & Personal Care',
    desc: 'From personal care and medication support to household tasks and companionship — flexible packages built around your actual daily needs.',
    color: 'bg-amber-50 text-amber-600',
  },
];

const STATS = [
  { value: '10+', label: 'Years of experience' },
  { value: '500+', label: 'Families supported' },
  { value: '24/7', label: 'Local availability' },
  { value: '100%', label: 'Private, person-centred' },
];

const VALUES = [
  { icon: UserCheck, title: 'Person-Centred', desc: 'We build care plans around you — your preferences, your routine, your life.' },
  { icon: Shield,    title: 'Safe & Vetted',  desc: 'Every carer is fully DBS-checked, trained, and supervised to the highest standards.' },
  { icon: Users,     title: 'Local Team',     desc: 'We are a Slough-based business — not a national call centre. Your community is ours too.' },
  { icon: Clock,     title: 'Flexible Hours', desc: 'From hourly visits to overnight stays, we adapt to what you actually need.' },
];

const TESTIMONIALS = [
  {
    quote: "Wesleyan Care have been outstanding for our family. The carers are professional, warm, and genuinely caring. My father's quality of life has improved so much.",
    name: 'Sarah T.',
    location: 'Slough',
  },
  {
    quote: "Finding the right care for my mum was daunting. Wesleyan made the whole process simple and reassuring. They truly listen and adapt to what she needs.",
    name: 'James O.',
    location: 'Berkshire',
  },
  {
    quote: "Compassionate, reliable and professional. We couldn't have asked for better support during such a difficult time. Highly recommend to any family in the area.",
    name: 'Priya M.',
    location: 'Slough',
  },
];

/* ─── Component ──────────────────────────────────────────── */
export default function App() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(i => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1B2A4A] antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
        * { font-family: 'DM Sans', sans-serif; }
        .font-serif { font-family: 'Libre Baskerville', Georgia, serif !important; }
        html { scroll-behavior: smooth; }
        ::selection { background: #D4A855; color: white; }
      `}</style>

      {/* ── NAV ─────────────────────────────────────────── */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-sm py-3' : 'bg-white/80 backdrop-blur-sm py-5'}`}>
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
          <a href="#home" className="flex flex-col leading-tight">
            <span className="text-lg font-serif font-bold text-[#1B2A4A] tracking-tight">Wesleyan Care</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4A855] font-semibold">Slough · Berkshire</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a key={l.name} href={l.href} className="text-sm font-medium text-[#1B2A4A]/70 hover:text-[#1B2A4A] transition-colors">
                {l.name}
              </a>
            ))}
            <a href="tel:01753424473" className="flex items-center gap-2 bg-[#D4A855] hover:bg-[#c09040] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm">
              <Phone size={14} /> 01753 424 473
            </a>
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-1 shadow-lg">
            {NAV_LINKS.map(l => (
              <a key={l.name} href={l.href} onClick={() => setMenuOpen(false)} className="py-3 text-base font-medium border-b border-gray-50 last:border-0">
                {l.name}
              </a>
            ))}
            <a href="tel:01753424473" className="mt-3 flex items-center justify-center gap-2 bg-[#D4A855] text-white py-3 rounded-full font-semibold">
              <Phone size={16} /> Call: 01753 424 473
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ────────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 bg-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'radial-gradient(#1B2A4A 1px, transparent 1px)', backgroundSize:'28px 28px'}} />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FAF7F2] to-transparent pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-5 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#7BA68D]/10 text-[#5a7e69] text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-8">
              <MapPin size={13} /> Private Care · Slough & Berkshire
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1B2A4A] leading-[1.05] mb-6">
              Care That Puts <br />
              <span className="italic text-[#D4A855]">People First.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10 max-w-md">
              High-quality private care for individuals living with dementia, mental health challenges, cardiac conditions, spinal injuries, and more — delivered by a team who genuinely care.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#243860] text-white px-8 py-4 rounded-full font-semibold shadow-md transition-all">
                Get in Touch <ArrowRight size={16} />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 border-2 border-[#1B2A4A]/20 text-[#1B2A4A] hover:border-[#1B2A4A] px-8 py-4 rounded-full font-semibold transition-all">
                Our Services <ChevronDown size={16} />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {['#7BA68D','#D4A855','#1B2A4A'].map((c, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold" style={{background:c}}>
                    {['J','A','K'][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-[#1B2A4A]">Trusted by 500+ families</span> across Slough & Berkshire
              </p>
            </div>
          </div>

          {/* Hero card */}
          <div className="relative hidden md:block">
            <div className="relative bg-[#FAF7F2] rounded-2xl p-10 border border-gray-100 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#D4A855]/10 flex items-center justify-center text-[#D4A855]">
                  <Heart size={24} />
                </div>
                <div>
                  <p className="font-semibold text-[#1B2A4A]">Wesleyan Care</p>
                  <p className="text-xs text-gray-400">Private Care Provider · Est. 2014</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {['Dementia & Complex Care', 'Palliative & End-of-Life Care', 'Mental Health Support', 'Cardiac & Spinal Care'].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-3.5 shadow-sm border border-gray-50">
                    <CheckCircle2 size={18} className="text-[#7BA68D] flex-shrink-0" />
                    <span className="text-sm font-medium">{s}</span>
                  </div>
                ))}
              </div>

              <a href="tel:01753424473" className="flex items-center justify-center gap-2 w-full bg-[#D4A855] hover:bg-[#c09040] text-white py-4 rounded-xl font-semibold transition-colors">
                <Phone size={16} /> 01753 424 473
              </a>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg p-4 border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#7BA68D]/10 flex items-center justify-center text-[#7BA68D]">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400">Availability</p>
                <p className="text-sm font-bold text-[#1B2A4A]">24/7 Support</p>
              </div>
            </div>
          </div>
        </div>

        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-[#1B2A4A] transition-colors text-xs">
          <span>Scroll</span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </section>

      {/* ── STATS BAR ───────────────────────────────────── */}
      <div className="bg-[#1B2A4A]">
        <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="text-center md:text-left">
                <p className="text-3xl font-serif font-bold text-[#D4A855]">{s.value}</p>
                <p className="text-sm text-white/60 mt-1">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── ABOUT ───────────────────────────────────────── */}
      <section id="about" className="py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#1B2A4A] to-[#2d4070] flex flex-col items-center justify-center text-white p-12 shadow-2xl">
                <Heart size={56} className="text-[#D4A855] mb-6 opacity-80" />
                <p className="font-serif italic text-xl text-center leading-relaxed text-white/80">
                  "We believe that great care starts with truly listening to the people we support."
                </p>
                <div className="mt-8 pt-8 border-t border-white/10 w-full text-center">
                  <p className="text-sm text-white/50 uppercase tracking-widest font-semibold">89 Whitby Road, Slough</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#D4A855] rounded-2xl p-6 shadow-xl">
                <p className="text-white font-serif text-2xl font-bold">10+</p>
                <p className="text-white/80 text-xs mt-1">Years serving<br/>Berkshire</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-4">Who We Are</p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight mb-6">
                A local team with a genuine commitment to your wellbeing.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-gray-500 text-lg leading-relaxed mb-5">
                Wesleyan Care is a privately run care provider based in Slough, Berkshire. We specialise in supporting adults with complex needs — including dementia, mental health challenges, cardiac conditions, and spinal injuries — helping them live safely and comfortably in their own homes.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                We believe that inviting someone into your home is a major decision. That's why every member of our team is carefully selected, fully trained, and DBS checked — and why we take the time to truly understand each person before building a care plan.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {VALUES.map((v, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-9 h-9 rounded-lg bg-[#7BA68D]/10 text-[#7BA68D] flex items-center justify-center mb-3">
                      <v.icon size={18} />
                    </div>
                    <p className="font-semibold text-sm mb-1">{v.title}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────── */}
      <section id="services" className="py-24 md:py-36 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-4">What We Do</p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight mb-4">
                Specialist care for complex needs.
              </h2>
              <p className="text-gray-500 text-lg">
                We provide flexible, private care packages tailored to each individual — from regular visits to full-time live-in support.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group bg-[#FAF7F2] rounded-2xl p-7 border border-gray-100 hover:border-[#D4A855]/40 hover:shadow-lg transition-all cursor-default h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${s.color} group-hover:scale-110 transition-transform`}>
                    <s.icon size={22} />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{s.desc}</p>
                  <a href="#contact" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#1B2A4A] hover:text-[#D4A855] transition-colors mt-6">
                    Enquire <ArrowRight size={13} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FUNDING / DIRECT PAYMENTS ───────────────────── */}
      <section id="funding" className="py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-4">Funding Your Care</p>
                <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight mb-6">
                  Direct Payments & Private Funding
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-gray-500 text-lg leading-relaxed mb-5">
                  If you have been assessed by your local council as needing care, you may be eligible for <strong className="text-[#1B2A4A]">Direct Payments</strong> — funding that lets you choose and manage your own care services rather than having them arranged for you.
                </p>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  Direct Payments are considered income and <strong className="text-[#1B2A4A]">will not affect your existing benefits</strong>. Wesleyan Care works with clients funded through Direct Payments as well as those paying privately.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="space-y-3">
                  {[
                    'Eligible if assessed by your local council',
                    'You choose who provides your care',
                    'Will not affect your existing benefits',
                    'We can guide you through the process',
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-[#7BA68D] flex-shrink-0" />
                      <span className="text-gray-600">{point}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="bg-[#1B2A4A] rounded-2xl p-10 text-white">
                <div className="w-14 h-14 rounded-2xl bg-[#D4A855]/20 flex items-center justify-center text-[#D4A855] mb-8">
                  <Shield size={28} />
                </div>
                <h3 className="font-serif text-2xl mb-4">Not sure how to fund your care?</h3>
                <p className="text-white/60 leading-relaxed mb-8">
                  Our team can help you understand your options — whether that's Direct Payments, private funding, or a combination. Get in touch for a free, no-obligation conversation.
                </p>
                <a href="tel:01753424473" className="flex items-center gap-2 bg-[#D4A855] hover:bg-[#c09040] text-white py-4 px-6 rounded-full font-semibold transition-colors w-full justify-center">
                  <Phone size={16} /> 01753 424 473
                </a>
                <a href="mailto:support@wesleyancare.onmicrosoft.com" className="flex items-center gap-2 border border-white/20 hover:border-white/50 text-white/80 hover:text-white py-4 px-6 rounded-full font-semibold transition-all w-full justify-center mt-3">
                  <Mail size={16} /> Email Us
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────── */}
      <section className="py-24 bg-[#1B2A4A] overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-12">What Families Say</p>
          </Reveal>

          <div className="relative min-h-[200px]">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ${i === activeTestimonial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
              >
                <div className="flex justify-center mb-6 gap-1">
                  {[...Array(5)].map((_, j) => <Star key={j} size={18} className="text-[#D4A855] fill-[#D4A855]" />)}
                </div>
                <p className="font-serif italic text-2xl md:text-3xl text-white/90 leading-relaxed mb-8">
                  "{t.quote}"
                </p>
                <p className="font-semibold text-[#D4A855] uppercase tracking-widest text-sm">
                  — {t.name}, {t.location}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-16">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === activeTestimonial ? 'bg-[#D4A855] w-6' : 'bg-white/20 hover:bg-white/40'}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────── */}
      <section id="contact" className="py-24 md:py-36 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-4">Get In Touch</p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight mb-4">
                Let's talk about your care needs.
              </h2>
              <p className="text-gray-500 text-lg">
                We're happy to have an informal conversation about how we can help — no pressure, no obligation.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Phone, label: 'Call Us', value: '01753 424 473', href: 'tel:01753424473', sub: 'Mon–Fri 8am–6pm' },
              { icon: Mail,  label: 'Email Us', value: 'support@wesleyancare.onmicrosoft.com', href: 'mailto:support@wesleyancare.onmicrosoft.com', sub: 'We reply within 1 working day' },
              { icon: MapPin, label: 'Our Base', value: '89 Whitby Road, Slough, SL1 3DR', href: 'https://maps.google.com/?q=89+Whitby+Road+Slough', sub: 'Serving all of Berkshire' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <a
                  href={item.href}
                  target={item.icon === MapPin ? '_blank' : undefined}
                  rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                  className="flex flex-col items-center text-center bg-[#FAF7F2] hover:bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#D4A855]/30 hover:shadow-md transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#1B2A4A] text-white flex items-center justify-center mb-5 group-hover:bg-[#D4A855] transition-colors">
                    <item.icon size={22} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{item.label}</p>
                  <p className="font-semibold text-[#1B2A4A] text-sm mb-1 break-all">{item.value}</p>
                  <p className="text-xs text-gray-400">{item.sub}</p>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="bg-[#FAF7F2] rounded-2xl border border-gray-100 p-10 md:p-16 text-center">
              <h3 className="font-serif text-3xl text-[#1B2A4A] mb-4">Ready to talk?</h3>
              <p className="text-gray-500 mb-8 max-w-lg mx-auto">Call us on <strong className="text-[#1B2A4A]">01753 424 473</strong> or send an email — we're happy to answer any questions about our services or the funding options available to you.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="tel:01753424473" className="inline-flex items-center gap-2 bg-[#D4A855] hover:bg-[#c09040] text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-md">
                  <Phone size={16} /> Call 01753 424 473
                </a>
                <a href="mailto:support@wesleyancare.onmicrosoft.com" className="inline-flex items-center gap-2 border-2 border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white px-8 py-4 rounded-full font-semibold transition-all">
                  <Mail size={16} /> Send an Email
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────── */}
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
                  <a key={l.name} href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">{l.name}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">Contact</p>
              <div className="space-y-3 text-sm text-white/60">
                <div className="flex items-center gap-3"><Phone size={14} className="text-[#D4A855] flex-shrink-0" /><a href="tel:01753424473" className="hover:text-white transition-colors">01753 424 473</a></div>
                <div className="flex items-start gap-3"><Mail size={14} className="text-[#D4A855] flex-shrink-0 mt-0.5" /><a href="mailto:support@wesleyancare.onmicrosoft.com" className="hover:text-white transition-colors break-all">support@wesleyancare.onmicrosoft.com</a></div>
                <div className="flex items-start gap-3"><MapPin size={14} className="text-[#D4A855] flex-shrink-0 mt-0.5" /><span>89 Whitby Road, Slough, SL1 3DR</span></div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
            <p>© {new Date().getFullYear()} Wesleyan Care. All rights reserved.</p>
            <p>Registered in England & Wales · Private Care Provider</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
