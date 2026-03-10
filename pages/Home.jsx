import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Mail, MapPin, Heart, UserCheck, Brain,
  CheckCircle2, ArrowRight, ChevronDown, Star,
  Shield, Clock, Users, Home as HomeIcon,
  Activity, Stethoscope, HandHeart,
} from 'lucide-react';
import Reveal from '../components/Reveal.jsx';

const SERVICES_PREVIEW = [
  { icon: Brain,       title: 'Dementia Care',         desc: 'Specialist support for individuals living with dementia, delivered with patience, consistency, and compassion.' },
  { icon: Heart,       title: 'Palliative Care',        desc: 'Sensitive end-of-life support focused on comfort and quality of life — for the individual and their family.' },
  { icon: Activity,    title: 'Cardiac Care',           desc: 'Tailored care plans for those managing heart conditions, helping with medication, mobility, and daily routines.' },
  { icon: HandHeart,   title: 'Mental Health Support',  desc: 'Caring, consistent support for adults managing mental health challenges, building routine and confidence.' },
  { icon: Stethoscope, title: 'Spinal Injury Support',  desc: 'Specialist personal care and rehabilitation assistance for individuals living with spinal cord injuries.' },
  { icon: HomeIcon,    title: 'Home & Personal Care',   desc: 'Flexible packages built around your actual daily needs — from personal care to household support.' },
];

const STATS = [
  { value: '10+',  label: 'Years of experience' },
  { value: '500+', label: 'Families supported' },
  { value: '24/7', label: 'Local availability' },
  { value: '100%', label: 'Private, person-centred' },
];

const TESTIMONIALS = [
  { quote: "Wesleyan Care have been outstanding for our family. The carers are professional, warm, and genuinely caring. My father's quality of life has improved so much.", name: 'Sarah T.', location: 'Slough' },
  { quote: "Finding the right care for my mum was daunting. Wesleyan made the whole process simple and reassuring. They truly listen and adapt to what she needs.", name: 'James O.', location: 'Berkshire' },
  { quote: "Compassionate, reliable and professional. We couldn't have asked for better support during such a difficult time. Highly recommend to any family in the area.", name: 'Priya M.', location: 'Slough' },
];

const VALUES = [
  { icon: UserCheck, title: 'Person-Centred', desc: 'We build care plans around you — your preferences, your routine, your life.' },
  { icon: Shield,    title: 'Safe & Vetted',  desc: 'Every carer is fully DBS-checked, trained, and supervised to the highest standards.' },
  { icon: Users,     title: 'Local Team',     desc: 'A Slough-based business — not a national call centre. Your community is ours too.' },
  { icon: Clock,     title: 'Flexible Hours', desc: 'From hourly visits to overnight stays, we adapt to what you actually need.' },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(i => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-20 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1B2A4A 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
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
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#243860] text-white px-8 py-4 rounded-full font-semibold shadow-md transition-all">
                Get in Touch <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 border-2 border-[#1B2A4A]/20 text-[#1B2A4A] hover:border-[#1B2A4A] px-8 py-4 rounded-full font-semibold transition-all">
                Our Services <ChevronDown size={16} />
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {['#7BA68D', '#D4A855', '#1B2A4A'].map((c, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold" style={{ background: c }}>
                    {['J', 'A', 'K'][i]}
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
              <div className="space-y-3 mb-8">
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

        <a href="#about-preview" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-[#1B2A4A] transition-colors text-xs">
          <span>Scroll</span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </section>

      {/* ── STATS BAR ──────────────────────────────────── */}
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

      {/* ── ABOUT PREVIEW ──────────────────────────────── */}
      <section id="about-preview" className="py-24 md:py-32">
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
                <p className="text-white/80 text-xs mt-1">Years serving<br />Berkshire</p>
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
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Wesleyan Care is a privately run care provider based in Slough, Berkshire. We specialise in supporting adults with complex needs — including dementia, mental health challenges, cardiac conditions, and spinal injuries.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {VALUES.map((v, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                    <div className="w-9 h-9 rounded-lg bg-[#7BA68D]/10 text-[#7BA68D] flex items-center justify-center mb-3">
                      <v.icon size={18} />
                    </div>
                    <p className="font-semibold text-sm mb-1">{v.title}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={200}>
              <Link to="/about" className="inline-flex items-center gap-2 font-semibold text-[#1B2A4A] border-b-2 border-[#D4A855] pb-1 hover:text-[#D4A855] transition-colors">
                Learn more about us <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ───────────────────────────── */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-4">Our Services</p>
                <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight">
                  Specialist care for complex needs.
                </h2>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-[#1B2A4A] border-b-2 border-[#D4A855] pb-1 hover:text-[#D4A855] transition-colors whitespace-nowrap">
                View all services <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_PREVIEW.map((s, i) => (
              <Reveal key={i} delay={i * 70}>
                <Link to="/services" className="group block bg-[#FAF7F2] rounded-2xl p-7 border border-gray-100 hover:border-[#D4A855]/40 hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#1B2A4A]/5 text-[#1B2A4A] flex items-center justify-center mb-5 group-hover:bg-[#D4A855] group-hover:text-white transition-all">
                    <s.icon size={22} />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────── */}
      <section className="py-24 bg-[#1B2A4A] overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-12">What Families Say</p>
          </Reveal>
          <div className="relative min-h-[200px]">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`absolute inset-0 transition-all duration-700 ${i === activeTestimonial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <div className="flex justify-center mb-6 gap-1">
                  {[...Array(5)].map((_, j) => <Star key={j} size={18} className="text-[#D4A855] fill-[#D4A855]" />)}
                </div>
                <p className="font-serif italic text-2xl md:text-3xl text-white/90 leading-relaxed mb-8">"{t.quote}"</p>
                <p className="font-semibold text-[#D4A855] uppercase tracking-widest text-sm">— {t.name}, {t.location}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-16">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)} className={`h-2 rounded-full transition-all ${i === activeTestimonial ? 'bg-[#D4A855] w-6' : 'bg-white/20 hover:bg-white/40 w-2'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FUNDING TEASER ─────────────────────────────── */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="bg-white rounded-2xl border border-gray-100 p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center shadow-sm">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-4">Funding Your Care</p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#1B2A4A] leading-tight mb-5">
                  You may be eligible for Direct Payments.
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  If assessed by your local council as needing care, you could receive Direct Payments to fund your own care services — including with Wesleyan Care. This will not affect your existing benefits.
                </p>
                <Link to="/funding" className="inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#243860] text-white px-7 py-3.5 rounded-full font-semibold transition-colors">
                  Learn about funding options <ArrowRight size={16} />
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {['Eligible if assessed by your local council', 'You choose who provides your care', 'Will not affect your existing benefits', 'We can guide you through the process'].map((p, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#FAF7F2] rounded-xl p-4">
                    <CheckCircle2 size={18} className="text-[#7BA68D] flex-shrink-0" />
                    <span className="text-sm text-gray-600">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT CTA ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-4">Ready to Talk?</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight mb-5">
              Let's discuss your care needs.
            </h2>
            <p className="text-gray-500 text-lg mb-10">
              Call us on <strong className="text-[#1B2A4A]">01753 424 473</strong> or get in touch online — no pressure, no obligation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:01753424473" className="inline-flex items-center gap-2 bg-[#D4A855] hover:bg-[#c09040] text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-md">
                <Phone size={16} /> Call 01753 424 473
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white px-8 py-4 rounded-full font-semibold transition-all">
                <Mail size={16} /> Contact Page
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
