import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin, Shield, Users, Clock, HeartHandshake } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import POSTS from '../data/posts.js';

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

const WHY_US = [
  { icon: Users,          title: 'Consistent carers',    desc: 'A small, regular team — not a revolving door of strangers. Your carer knows you, your routine, and what matters.' },
  { icon: Shield,         title: 'Fully vetted & trained', desc: 'Every carer is DBS-checked, reference-verified, and trained before they step into your home.' },
  { icon: Clock,          title: 'Flexible hours',       desc: 'From one-hour morning visits to full-time live-in care. I build around your schedule, not mine.' },
  { icon: HeartHandshake, title: 'Locally run',          desc: 'Based in Slough, not a national franchise. When you call, you speak to someone who makes decisions.' },
];

export default function Home() {
  const latestPosts = POSTS.slice(0, 3);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-20 bg-[#FAF7F2] overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-5 py-24 md:py-32 grid md:grid-cols-[3fr_2fr] gap-16 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 text-[#5a7e69] text-xs font-medium uppercase tracking-wider mb-10">
              <MapPin size={12} /> Private Care · Slough & Berkshire
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.75rem] text-[#1B2A4A] leading-[1.04] mb-7">
              Care that starts<br />
              with <em className="text-[#D4A855] not-italic">listening.</em>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg">
              I'm a Slough-based private care provider supporting adults with complex needs — dementia, mental health, cardiac conditions, spinal injuries, and more. Every care plan is built around the individual, not a template.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2.5 bg-[#1B2A4A] hover:bg-[#243860] text-white px-7 py-4 font-semibold transition-colors text-sm">
                Get in touch <ArrowRight size={14} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2.5 border border-[#1B2A4A]/20 text-[#1B2A4A] hover:border-[#1B2A4A] px-7 py-4 font-semibold transition-colors text-sm">
                My services
              </Link>
            </div>
          </div>

          <Reveal>
            <div className="border border-[#1B2A4A]/10 bg-white">
              <div className="p-7 border-b border-gray-100">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Call me directly</p>
                <a href="tel:01753424473" className="block font-serif text-3xl text-[#1B2A4A] hover:text-[#D4A855] transition-colors leading-none tracking-tight">
                  01753 424 473
                </a>
                <p className="text-xs text-gray-400 mt-2.5">Monday – Friday, 8am – 6pm</p>
              </div>
              <div className="p-7 border-b border-gray-100">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Write to me</p>
                <a href="mailto:support@wesleyancare.onmicrosoft.com" className="text-xs text-[#1B2A4A] hover:text-[#D4A855] transition-colors break-all leading-relaxed">
                  support@wesleyancare.onmicrosoft.com
                </a>
              </div>
              <div className="p-7 bg-[#FAF7F2]">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Find me</p>
                <p className="text-xs text-gray-600 leading-relaxed">89 Whitby Road<br />Slough, SL1 3DR</p>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#D4A855] hover:text-[#c09040] transition-colors mt-4">
                  Send a message <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── STATS BAND ────────────────────────────────── */}
      <div className="bg-[#1B2A4A]">
        <div className="max-w-6xl mx-auto px-5 py-14">
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div>
                  <p className="font-serif text-5xl text-[#D4A855] leading-none">{s.value}</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-2.5">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT PREVIEW ─────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8088906/pexels-photo-8088906.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Elderly couple at home"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1B2A4A]/90 via-[#1B2A4A]/50 to-transparent p-8 pt-20">
                <p className="font-serif text-xl md:text-2xl text-white leading-snug">
                  "Inviting someone into your home is one of the most significant decisions a family makes. I don't take that lightly."
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="pt-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4A855] mb-7">Who I Am</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Wesleyan Care is a privately run care provider based in Slough. I support adults with complex needs — including dementia, mental health challenges, cardiac conditions, and spinal injuries. I've been doing this for over ten years.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                I am a local, independent provider, not a national franchise. Every carer I place is fully vetted, trained, and regularly supervised. When your circumstances change, I adapt. When you have a concern, you speak to me directly — not a call centre.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B2A4A] border-b border-[#D4A855] pb-0.5 hover:text-[#D4A855] transition-colors">
                Learn more about me <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────── */}
      <section className="py-24 bg-[#1B2A4A]">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="mb-14">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4A855] mb-4">Why Families Choose Me</p>
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight max-w-lg">
                What makes Wesleyan Care different.
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-10">
            {WHY_US.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="flex gap-5 items-start">
                  <div className="text-[#D4A855] mt-0.5 flex-shrink-0">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base mb-2">{item.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────── */}
      <section className="py-24 bg-[#FAF7F2] border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4A855] mb-4">Services</p>
                <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight max-w-xl">
                  Specialist support for complex needs.
                </h2>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B2A4A] border-b border-[#D4A855] pb-0.5 hover:text-[#D4A855] transition-colors whitespace-nowrap">
                View all services <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {SERVICES_PREVIEW.map((s, i) => (
              <Reveal key={i} delay={i * 50}>
                <Link to="/services" className="group block bg-white hover:bg-[#FAF7F2] p-8 transition-colors h-full">
                  <h3 className="font-semibold text-[#1B2A4A] text-base mb-3 group-hover:text-[#D4A855] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-300 group-hover:text-[#D4A855] transition-colors">
                    Find out more <ArrowRight size={10} />
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
            <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight mb-14 max-w-xl">
              What families say about me.
            </h2>
          </Reveal>

          {/* Featured testimonial */}
          <Reveal>
            <div className="mb-12 pb-12 border-b border-gray-100">
              <p className="font-serif text-2xl md:text-3xl text-[#1B2A4A] leading-snug mb-6 max-w-3xl">
                "{TESTIMONIALS[0].quote}"
              </p>
              <div className="flex items-center gap-3">
                <p className="text-sm font-semibold text-[#1B2A4A]">{TESTIMONIALS[0].name}</p>
                <span className="text-gray-300">·</span>
                <p className="text-sm text-gray-400">{TESTIMONIALS[0].location}</p>
              </div>
            </div>
          </Reveal>

          {/* Secondary testimonials */}
          <div className="grid md:grid-cols-2 gap-12">
            {TESTIMONIALS.slice(1).map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <div>
                  <p className="font-serif italic text-gray-500 leading-relaxed mb-5 text-base">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <p className="text-sm font-semibold text-[#1B2A4A]">{t.name}</p>
                    <span className="text-gray-300">·</span>
                    <p className="text-sm text-gray-400">{t.location}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────── */}
      <section className="py-24 bg-[#FAF7F2] border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4A855] mb-5">Getting Started</p>
                <h2 className="font-serif text-4xl text-[#1B2A4A] leading-tight">
                  Three simple steps.
                </h2>
              </div>
              <div className="space-y-10">
                {[
                  { n: '01', title: 'A real conversation', desc: 'You call or message me. I listen to your situation, answer questions honestly, and discuss what kind of support might help. No sales pitch.' },
                  { n: '02', title: 'A home assessment',   desc: 'I visit to understand your needs properly: your routine, your preferences, and the things that matter most day to day. Then I put together a plan.' },
                  { n: '03', title: 'Care that fits',      desc: 'I match you with the right carer, introduce them before care begins, and check in regularly. If anything needs adjusting, I adjust it.' },
                ].map((step, i) => (
                  <Reveal key={i} delay={i * 100}>
                    <div className="flex gap-8 items-start">
                      <p className="font-serif text-2xl text-[#D4A855]/25 font-bold leading-none flex-shrink-0 w-8 pt-1 select-none">{step.n}</p>
                      <div>
                        <h3 className="font-semibold text-base text-[#1B2A4A] mb-2">{step.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
                <Reveal delay={350}>
                  <div className="pt-2 pl-16">
                    <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B2A4A] border-b border-[#D4A855] pb-0.5 hover:text-[#D4A855] transition-colors">
                      Learn more about my process <ArrowRight size={13} />
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── BLOG TEASER ──────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4A855] mb-4">From My Blog</p>
                <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight max-w-xl">
                  Advice for families navigating care.
                </h2>
              </div>
              <Link to="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B2A4A] border-b border-[#D4A855] pb-0.5 hover:text-[#D4A855] transition-colors whitespace-nowrap">
                View all posts <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link to={`/blogs/${post.slug}`} className="group block border border-gray-100 hover:border-[#1B2A4A]/15 transition-all bg-white h-full">
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#D4A855] bg-[#D4A855]/8 px-2.5 py-1">
                        {post.tag}
                      </span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h3 className="font-serif text-lg text-[#1B2A4A] leading-snug mb-3 group-hover:text-[#D4A855] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6">{post.summary}</p>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-300 group-hover:text-[#D4A855] transition-colors">
                      Read article <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ───────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#1B2A4A]">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4A855] mb-7">Talk to Me</p>
            <a href="tel:01753424473" className="block font-serif text-5xl md:text-7xl text-white hover:text-[#D4A855] transition-colors leading-none tracking-tight mb-8 max-w-max">
              01753 424 473
            </a>
            <p className="text-white/40 text-base">
              Or <Link to="/contact" className="text-white/70 font-medium hover:text-[#D4A855] transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-[#D4A855]">send me a message</Link> — no obligation, no pressure.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
