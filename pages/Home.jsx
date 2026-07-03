import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Phone, MapPin, Shield, Users, Clock,
  HeartHandshake, Brain, Heart, Activity, Stethoscope, HandHeart,
  Home as HomeIcon, Star, BadgeCheck,
} from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SEO from '../components/SEO.jsx';
import POSTS from '../data/posts.js';

const SERVICES_PREVIEW = [
  { icon: Brain,       title: 'Dementia Care',         desc: 'Consistent, patient support for individuals living with dementia — building routine and calm in familiar surroundings.' },
  { icon: Heart,       title: 'Palliative Care',       desc: 'Sensitive end-of-life care focused on comfort, dignity, and being present for both the individual and their family.' },
  { icon: Activity,    title: 'Cardiac Care',          desc: 'Structured support for those managing heart conditions — medication, mobility, and daily routine, all attended to.' },
  { icon: HandHeart,   title: 'Mental Health Support', desc: 'Practical, non-judgemental help for adults navigating mental health challenges, building confidence day by day.' },
  { icon: Stethoscope, title: 'Spinal Injury Support', desc: 'Skilled personal care and rehabilitation assistance for individuals living with spinal cord injuries.' },
  { icon: HomeIcon,    title: 'Home & Personal Care',  desc: 'Flexible packages covering personal care, household support, and companionship — built around your actual routine.' },
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
  { icon: Users,          title: 'Consistent carers',      desc: 'A small, regular team — not a revolving door of strangers. Your carer knows you, your routine, and what matters.' },
  { icon: Shield,         title: 'Fully vetted & trained', desc: 'Every carer is DBS-checked, reference-verified, and trained before they step into your home.' },
  { icon: Clock,          title: 'Flexible hours',         desc: 'From one-hour morning visits to full-time live-in care. I build around your schedule, not mine.' },
  { icon: HeartHandshake, title: 'Locally run',            desc: 'Based in Slough, not a national franchise. When you call, you speak to someone who makes decisions.' },
];

const STEPS = [
  { n: '1', title: 'A real conversation', desc: 'You call or message me. I listen to your situation, answer questions honestly, and discuss what kind of support might help. No sales pitch.' },
  { n: '2', title: 'A home assessment',   desc: 'I visit to understand your needs properly: your routine, your preferences, and the things that matter most day to day. Then I put together a plan.' },
  { n: '3', title: 'Care that fits',      desc: 'I match you with the right carer, introduce them before care begins, and check in regularly. If anything needs adjusting, I adjust it.' },
];

export default function Home() {
  const latestPosts = POSTS.slice(0, 3);

  return (
    <>
      <SEO
        title="Private Home Care in Slough &amp; Berkshire"
        description="Private home care in Slough and Berkshire — dementia care, palliative care, cardiac care, mental health support, spinal injury care, and home &amp; personal care. Local, independent, fully vetted. Call 01753 424 473."
        canonical="/"
      />

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-sand blur-3xl opacity-80 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute top-72 -left-48 w-[24rem] h-[24rem] rounded-full bg-terracotta/10 blur-3xl pointer-events-none"
        />

        <div className="relative max-w-6xl mx-auto px-5 grid lg:grid-cols-[7fr_5fr] gap-14 lg:gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-parchment border border-evergreen/10 rounded-full pl-3 pr-4 py-1.5 text-xs font-semibold text-evergreen/70 mb-8">
              <MapPin size={12} className="text-terracotta" /> Private care · Slough &amp; Berkshire
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-[5rem] text-evergreen leading-[1.02] tracking-tight mb-7">
              Care that starts with{' '}
              <em className="text-terracotta">listening</em>.
            </h1>
            <p className="text-lg md:text-xl text-evergreen/60 leading-relaxed mb-10 max-w-xl">
              I'm a Slough-based private care provider supporting adults with complex needs — dementia, mental health, cardiac conditions, spinal injuries, and more. Every care plan is built around the individual, not a template.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 bg-evergreen hover:bg-evergreen-light text-cream px-8 py-4 rounded-full font-semibold transition-colors text-sm"
              >
                Get in touch <ArrowRight size={15} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2.5 bg-parchment border border-evergreen/15 text-evergreen hover:border-evergreen/50 px-8 py-4 rounded-full font-semibold transition-colors text-sm"
              >
                Explore services
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-evergreen/55 font-medium">
              <span className="flex items-center gap-2"><BadgeCheck size={15} className="text-moss" /> CQC registered</span>
              <span className="flex items-center gap-2"><BadgeCheck size={15} className="text-moss" /> DBS-checked carers</span>
              <span className="flex items-center gap-2"><BadgeCheck size={15} className="text-moss" /> 10+ years local</span>
            </div>
          </div>

          <Reveal delay={100}>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8088906/pexels-photo-8088906.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Elderly couple at home receiving private care in Slough"
                className="w-full aspect-[4/5] object-cover rounded-[2.5rem] shadow-soft"
                fetchpriority="high"
                decoding="async"
              />
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-parchment rounded-3xl shadow-lift border border-evergreen/5 p-6 max-w-[16rem]">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-evergreen/40 mb-2">Call me directly</p>
                <a href="tel:01753424473" className="font-display text-2xl text-evergreen hover:text-terracotta transition-colors tracking-tight">
                  01753 424 473
                </a>
                <p className="text-xs text-evergreen/45 mt-2">Mon–Fri 8am–6pm · Sat 9am–1pm</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── STATS BAND ────────────────────────────────── */}
      <section className="px-3 sm:px-5">
        <div className="max-w-7xl mx-auto bg-evergreen rounded-[2rem] sm:rounded-[2.5rem]">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 sm:py-16 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="lg:text-center">
                  <p className="font-display text-5xl sm:text-6xl text-terracotta-light leading-none">{s.value}</p>
                  <p className="text-[11px] text-cream/45 uppercase tracking-[0.22em] mt-3.5">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ─────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8439648/pexels-photo-8439648.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Carer speaking with elderly clients at home in Berkshire"
                className="w-full aspect-[4/5] object-cover rounded-[2.5rem]"
                loading="lazy"
                decoding="async"
              />
              <figure className="absolute -bottom-8 right-0 sm:-right-6 bg-terracotta text-white rounded-3xl p-7 max-w-[19rem] shadow-lift">
                <blockquote className="font-display text-lg leading-snug">
                  "Inviting someone into your home is one of the most significant decisions a family makes. I don't take that lightly."
                </blockquote>
              </figure>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-terracotta mb-6">Who I am</p>
              <h2 className="font-display text-4xl md:text-5xl text-evergreen leading-tight tracking-tight mb-7">
                Local, independent, and personally accountable.
              </h2>
              <p className="text-evergreen/60 text-lg leading-relaxed mb-5">
                Wesleyan Care is a privately run care provider based in Slough. I support adults with complex needs — including dementia, mental health challenges, cardiac conditions, and spinal injuries. I've been doing this for over ten years.
              </p>
              <p className="text-evergreen/60 text-lg leading-relaxed mb-9">
                I am not a national franchise. Every carer I place is fully vetted, trained, and regularly supervised. When your circumstances change, I adapt. When you have a concern, you speak to me directly — not a call centre.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-parchment border border-evergreen/15 hover:border-evergreen/50 text-evergreen px-7 py-3.5 rounded-full font-semibold transition-colors text-sm"
              >
                More about me <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-sand/60">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-terracotta mb-5">Services</p>
                <h2 className="font-display text-4xl md:text-5xl text-evergreen leading-tight tracking-tight max-w-xl">
                  Specialist support for complex needs.
                </h2>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-evergreen hover:text-terracotta transition-colors whitespace-nowrap"
              >
                View all services <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES_PREVIEW.map((s, i) => (
              <Reveal key={i} delay={i * 60}>
                <Link
                  to="/services"
                  className="group block bg-parchment rounded-3xl p-8 h-full border border-evergreen/5 hover:border-terracotta/30 hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="w-12 h-12 rounded-2xl bg-sand text-evergreen flex items-center justify-center mb-6 group-hover:bg-terracotta group-hover:text-white transition-colors">
                    <s.icon size={20} />
                  </span>
                  <h3 className="font-display text-xl text-evergreen mb-3">{s.title}</h3>
                  <p className="text-sm text-evergreen/55 leading-relaxed mb-6">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-evergreen/30 group-hover:text-terracotta transition-colors">
                    Find out more <ArrowRight size={11} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────── */}
      <section className="px-3 sm:px-5 py-20 md:py-28">
        <div className="max-w-7xl mx-auto bg-evergreen rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-terracotta/20 blur-3xl pointer-events-none"
          />
          <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 md:py-24 relative">
            <Reveal>
              <div className="mb-14">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-terracotta-light mb-5">Why families choose me</p>
                <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight tracking-tight max-w-lg">
                  What makes Wesleyan Care different.
                </h2>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-5">
              {WHY_US.map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="bg-cream/[0.04] border border-cream/10 rounded-3xl p-7 h-full">
                    <span className="w-11 h-11 rounded-2xl bg-terracotta/15 text-terracotta-light flex items-center justify-center mb-5">
                      <item.icon size={19} />
                    </span>
                    <h3 className="font-semibold text-cream text-lg mb-2.5">{item.title}</h3>
                    <p className="text-cream/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────── */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-terracotta mb-5">Kind words</p>
              <h2 className="font-display text-4xl md:text-5xl text-evergreen leading-tight tracking-tight">
                What families say.
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 90}>
                <figure className="bg-parchment border border-evergreen/5 rounded-3xl p-8 h-full flex flex-col">
                  <div className="flex gap-1 text-terracotta mb-5" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="text-evergreen/70 leading-relaxed mb-7 flex-1">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="flex items-center gap-3 pt-5 border-t border-evergreen/8">
                    <span className="w-9 h-9 rounded-full bg-sand text-evergreen font-display flex items-center justify-center text-sm">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-evergreen">{t.name}</span>
                      <span className="block text-xs text-evergreen/45">{t.location}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────── */}
      <section className="py-20 md:py-28 bg-sand/60">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-14 items-start">
            <Reveal>
              <div className="md:sticky md:top-32">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-terracotta mb-5">Getting started</p>
                <h2 className="font-display text-4xl md:text-5xl text-evergreen leading-tight tracking-tight mb-7">
                  Three simple steps.
                </h2>
                <p className="text-evergreen/60 leading-relaxed mb-8 max-w-sm">
                  No forms to fight through, no call centres. Arranging care starts with an honest conversation.
                </p>
                <a
                  href="tel:01753424473"
                  className="inline-flex items-center gap-2.5 bg-evergreen hover:bg-evergreen-light text-cream px-7 py-3.5 rounded-full font-semibold transition-colors text-sm"
                >
                  <Phone size={14} /> Start with a call
                </a>
              </div>
            </Reveal>
            <div className="space-y-5">
              {STEPS.map((step, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="bg-parchment border border-evergreen/5 rounded-3xl p-7 sm:p-8 flex gap-6 items-start">
                    <span className="w-11 h-11 rounded-full bg-terracotta text-white font-display text-lg flex items-center justify-center flex-shrink-0">
                      {step.n}
                    </span>
                    <div>
                      <h3 className="font-semibold text-lg text-evergreen mb-2">{step.title}</h3>
                      <p className="text-evergreen/55 leading-relaxed text-sm">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG TEASER ──────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-terracotta mb-5">From my blog</p>
                <h2 className="font-display text-4xl md:text-5xl text-evergreen leading-tight tracking-tight max-w-xl">
                  Advice for families navigating care.
                </h2>
              </div>
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 text-sm font-semibold text-evergreen hover:text-terracotta transition-colors whitespace-nowrap"
              >
                View all posts <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {latestPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link
                  to={`/blogs/${post.slug}`}
                  className="group block bg-parchment border border-evergreen/5 rounded-3xl overflow-hidden h-full hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
                >
                  {post.coverImage && (
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  )}
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-terracotta bg-terracotta/10 px-3 py-1 rounded-full">
                        {post.tag}
                      </span>
                      <span className="text-xs text-evergreen/40">{post.readTime}</span>
                    </div>
                    <h3 className="font-display text-xl text-evergreen leading-snug mb-3 group-hover:text-terracotta transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-evergreen/55 leading-relaxed">{post.summary}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
