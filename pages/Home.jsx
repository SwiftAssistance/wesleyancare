import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';

const SERVICES_PREVIEW = [
  { title: 'Dementia Care',         desc: 'Consistent, patient support for individuals living with dementia — building routine and calm in familiar surroundings.' },
  { title: 'Palliative Care',       desc: 'Sensitive end-of-life care focused on comfort, dignity, and being present for both the individual and their family.' },
  { title: 'Cardiac Care',          desc: 'Structured support for those managing heart conditions — medication, mobility, and daily routine, all attended to.' },
  { title: 'Mental Health Support', desc: 'Practical, non-judgemental help for adults navigating mental health challenges, building confidence day by day.' },
  { title: 'Spinal Injury Support', desc: 'Skilled personal care and rehabilitation assistance for individuals living with spinal cord injuries.' },
  { title: 'Home & Personal Care',  desc: 'Flexible packages covering personal care, household support, and companionship — built around your actual routine.' },
];

const TESTIMONIALS = [
  { quote: 'Wesleyan Care have been outstanding. The carers are professional, warm, and genuinely invested in my father\'s wellbeing. His quality of life has improved enormously.', name: 'Sarah T.', location: 'Slough' },
  { quote: 'Finding the right care felt overwhelming. Wesleyan made the whole process simple and reassuring — they really listened, and they adapt as my mum\'s needs change.', name: 'James O.', location: 'Windsor' },
  { quote: 'Compassionate, reliable and professional. We couldn\'t have asked for better support during such a difficult time. I would recommend them without hesitation.', name: 'Priya M.', location: 'Slough' },
];

const STATS = [
  { value: '10+',  label: 'Years in Berkshire' },
  { value: '500+', label: 'Families supported' },
  { value: '24/7', label: 'Local availability' },
  { value: '5★',   label: 'Consistently rated' },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-20 bg-[#FAF7F2] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(#1B2A4A 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="relative max-w-6xl mx-auto px-5 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left: typographic hero */}
          <div>
            <div className="inline-flex items-center gap-2 text-[#5a7e69] text-xs font-semibold uppercase tracking-wider mb-8">
              <MapPin size={13} /> Private Care · Slough & Berkshire
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] text-[#1B2A4A] leading-[1.05] mb-6">
              Care that starts<br />
              with <em className="text-[#D4A855] not-italic">listening.</em>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-md">
              We're a Slough-based private care provider supporting adults with complex needs — dementia, mental health, cardiac conditions, spinal injuries, and more. Every care plan is built around the individual, not a template.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#243860] text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-sm">
                Get in touch <ArrowRight size={15} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 border border-[#1B2A4A]/25 text-[#1B2A4A] hover:border-[#1B2A4A] px-8 py-4 rounded-full font-semibold transition-colors">
                Our services
              </Link>
            </div>
          </div>

          {/* Right: grounded contact panel */}
          <Reveal>
            <div className="border border-[#1B2A4A]/12 rounded-2xl overflow-hidden bg-white shadow-sm">
              <div className="p-8 border-b border-gray-100">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Call us directly</p>
                <a href="tel:01753424473" className="block font-serif text-4xl text-[#1B2A4A] hover:text-[#D4A855] transition-colors leading-none tracking-tight">
                  01753 424 473
                </a>
                <p className="text-sm text-gray-400 mt-2">Monday – Friday, 8am – 6pm</p>
              </div>
              <div className="p-8 border-b border-gray-100">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Write to us</p>
                <a href="mailto:support@wesleyancare.onmicrosoft.com" className="text-sm text-[#1B2A4A] hover:text-[#D4A855] transition-colors break-all leading-relaxed">
                  support@wesleyancare.onmicrosoft.com
                </a>
              </div>
              <div className="p-8 bg-[#FAF7F2]">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Find us</p>
                <p className="text-sm text-gray-600 leading-relaxed">89 Whitby Road<br />Slough, SL1 3DR</p>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D4A855] hover:text-[#c09040] transition-colors mt-4">
                  Send a message <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── STATS BAND ────────────────────────────────── */}
      <div className="bg-[#1B2A4A]">
        <div className="max-w-6xl mx-auto px-5 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="text-center px-6 py-2">
                  <p className="font-serif text-4xl text-[#D4A855] leading-none mb-2">{s.value}</p>
                  <p className="text-xs text-white/50 uppercase tracking-widest">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT PREVIEW ─────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-start">
          {/* Left: pull quote */}
          <Reveal>
            <div>
              <p className="font-serif text-3xl md:text-4xl text-[#1B2A4A] leading-snug border-l-4 border-[#D4A855] pl-8">
                "Inviting someone into your home is one of the most significant decisions a family makes. We don't take that lightly."
              </p>
            </div>
          </Reveal>

          {/* Right: prose */}
          <Reveal delay={120}>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-6">Who We Are</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Wesleyan Care is a privately run care provider based in Slough. We support adults with complex needs — including dementia, mental health challenges, cardiac conditions, and spinal injuries. We've been doing this for over ten years.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We are a local team, not a national franchise. Every carer we place is fully vetted, trained, and regularly supervised. When your circumstances change, we adapt. When you have a concern, you speak to a person — not a call centre.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 font-semibold text-[#1B2A4A] border-b-2 border-[#D4A855] pb-0.5 hover:text-[#D4A855] transition-colors text-sm">
                Learn more about us <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────── */}
      <section className="py-24 bg-[#FAF7F2] border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-4">Services</p>
                <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight max-w-xl">
                  Specialist support for complex needs.
                </h2>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-[#1B2A4A] border-b-2 border-[#D4A855] pb-0.5 hover:text-[#D4A855] transition-colors text-sm whitespace-nowrap">
                View all services <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {SERVICES_PREVIEW.map((s, i) => (
              <Reveal key={i} delay={i * 50}>
                <Link to="/services" className="group block bg-white hover:bg-[#FAF7F2] p-8 transition-colors h-full">
                  <h3 className="font-bold text-[#1B2A4A] text-lg mb-3 group-hover:text-[#D4A855] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-gray-300 group-hover:text-[#D4A855] transition-colors">
                    Find out more <ArrowRight size={11} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight mb-16 max-w-xl">
              What families say about us.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-10 md:divide-x divide-gray-100">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="md:px-10 first:pl-0 last:pr-0">
                  <p className="font-serif text-5xl text-[#D4A855] leading-none mb-4 select-none">"</p>
                  <p className="text-gray-600 leading-relaxed mb-6 text-base">{t.quote}</p>
                  <p className="text-sm font-semibold text-[#1B2A4A]">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG TEASER ──────────────────────────────── */}
      <section className="py-24 bg-[#1B2A4A]">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-6">From Our Blog</p>
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6">
                Advice, insights & updates.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Practical guidance for families navigating care — from understanding your options to supporting a loved one at home. Written by our team in Slough.
              </p>
              <Link to="/blogs" className="inline-flex items-center gap-2 bg-[#D4A855] hover:bg-[#c09040] text-white px-7 py-3.5 rounded-full font-semibold transition-colors text-sm">
                Read our latest posts <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-white/70 text-lg leading-relaxed">
              <p><strong className="text-white font-semibold">Understanding dementia care.</strong> What to look for, what questions to ask, and how to support someone living with dementia at home.</p>
              <p><strong className="text-white font-semibold">Choosing the right provider.</strong> A straightforward guide to finding a care provider that genuinely fits your family's needs.</p>
              <p><strong className="text-white font-semibold">Looking after yourself too.</strong> Caring for a family member is demanding. Practical steps to protect your own wellbeing while supporting theirs.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT CTA ───────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Talk to Us</p>
            <a href="tel:01753424473" className="block font-serif text-5xl md:text-7xl text-[#D4A855] hover:text-[#c09040] transition-colors leading-none tracking-tight mb-6">
              01753 424 473
            </a>
            <p className="text-gray-500 text-lg mb-10">
              Or <Link to="/contact" className="text-[#1B2A4A] font-semibold hover:text-[#D4A855] transition-colors underline underline-offset-4">send us a message</Link> — no obligation, no pressure.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
