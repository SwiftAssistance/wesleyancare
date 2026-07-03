import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Ticker from '../components/Ticker.jsx';
import SEO from '../components/SEO.jsx';
import POSTS from '../data/posts.js';

const AREAS = [
  'Slough', 'Windsor', 'Maidenhead', 'Eton', 'Langley', 'Burnham',
  'Farnham Common', 'Stoke Poges', 'Iver', 'Gerrards Cross', 'Taplow', 'Reading',
];

const SERVICES_PREVIEW = [
  { title: 'Dementia Care',         desc: 'Consistent, patient support — building routine and calm in familiar surroundings.' },
  { title: 'Palliative Care',       desc: 'Sensitive end-of-life care focused on comfort, dignity, and being present.' },
  { title: 'Cardiac Care',          desc: 'Structured support for heart conditions — medication, mobility, daily routine.' },
  { title: 'Mental Health Support', desc: 'Practical, non-judgemental help for adults, building confidence day by day.' },
  { title: 'Spinal Injury Support', desc: 'Skilled personal care and rehabilitation assistance, adapted as needs change.' },
  { title: 'Home & Personal Care',  desc: 'Flexible packages built around your actual routine — from one hour to live-in.' },
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
  { n: '01', title: 'Consistent carers',      desc: 'A small, regular team — not a revolving door of strangers. Your carer knows you, your routine, and what matters.' },
  { n: '02', title: 'Fully vetted & trained', desc: 'Every carer is DBS-checked, reference-verified, and trained before they step into your home.' },
  { n: '03', title: 'Flexible hours',         desc: 'From one-hour morning visits to full-time live-in care. I build around your schedule, not mine.' },
  { n: '04', title: 'Locally run',            desc: 'Based in Slough, not a national franchise. When you call, you speak to someone who makes decisions.' },
];

const STEPS = [
  { n: '01', title: 'A real conversation', desc: 'You call or message me. I listen to your situation, answer questions honestly, and discuss what kind of support might help. No sales pitch.' },
  { n: '02', title: 'A home assessment',   desc: 'I visit to understand your needs properly: your routine, your preferences, and the things that matter most day to day. Then I put together a plan.' },
  { n: '03', title: 'Care that fits',      desc: 'I match you with the right carer, introduce them before care begins, and check in regularly. If anything needs adjusting, I adjust it.' },
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
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="rule pt-4 flex items-baseline justify-between gap-4 mb-10 sm:mb-14">
              <p className="label-mono text-evergreen/70">Private home care — Slough &amp; Berkshire</p>
              <p className="label-mono text-terracotta hidden sm:block">Est. ten years</p>
            </div>
            <h1 className="font-display text-[14vw] sm:text-7xl md:text-8xl lg:text-[7rem] text-evergreen leading-[0.96] tracking-tight mb-12 sm:mb-16">
              Care that starts<br />with <em className="text-terracotta">listening</em>.
            </h1>
          </Reveal>

          <div className="grid md:grid-cols-12 gap-10 md:gap-8 items-start">
            <Reveal className="md:col-span-5" delay={80}>
              <div>
                <p className="text-lg md:text-xl text-evergreen/65 leading-relaxed mb-9">
                  I'm a Slough-based private care provider supporting adults with complex needs — dementia, mental health, cardiac conditions, spinal injuries, and more. Every care plan is built around the individual, not a template.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <Link to="/contact" className="btn btn-solid">
                    Get in touch <ArrowRight size={13} />
                  </Link>
                  <Link to="/services" className="btn btn-outline">
                    Services
                  </Link>
                </div>
                <p className="font-mono text-xs text-evergreen/55 mb-10">
                  Or call directly —{' '}
                  <a href="tel:01753424473" className="text-evergreen underline underline-offset-4 decoration-evergreen/30 hover:text-terracotta transition-colors">
                    01753 424 473
                  </a>
                </p>
                <ul className="font-mono text-xs text-evergreen/55 space-y-2">
                  <li>— CQC registered</li>
                  <li>— DBS-checked, reference-verified carers</li>
                  <li>— Direct Payments accepted</li>
                </ul>
              </div>
            </Reveal>

            <Reveal className="md:col-span-7" delay={140}>
              <figure>
                <img
                  src="https://images.pexels.com/photos/8088906/pexels-photo-8088906.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Elderly couple at home receiving private care in Slough"
                  className="w-full aspect-[16/10] object-cover"
                  fetchpriority="high"
                  decoding="async"
                />
                <figcaption className="flex items-baseline justify-between gap-4 pt-3 border-b border-evergreen/20 pb-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-evergreen/50">At home, on your own terms</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-evergreen/50">Slough, Berkshire</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────── */}
      <section className="border-y border-evergreen/20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={i}
                className={`py-8 sm:py-10 pr-6 ${i > 0 ? 'lg:border-l lg:border-evergreen/20 lg:pl-8' : ''} ${i % 2 === 1 ? 'border-l border-evergreen/20 pl-6 lg:pl-8' : ''} ${i > 1 ? 'border-t border-evergreen/20 lg:border-t-0' : ''}`}
              >
                <p className="font-display text-4xl sm:text-5xl text-evergreen leading-none mb-2.5">{s.value}</p>
                <p className="label-mono text-evergreen/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO I AM ──────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal><SectionHead n="01" label="Who I am" /></Reveal>
          <div className="grid md:grid-cols-12 gap-10 md:gap-8 mt-10 sm:mt-14">
            <Reveal className="md:col-span-7" delay={60}>
              <div>
                <p className="font-display text-3xl sm:text-4xl md:text-[2.75rem] text-evergreen leading-[1.15] tracking-tight mb-10 max-w-2xl">
                  Wesleyan Care is a privately run provider based in Slough — local, independent, and personally accountable.
                </p>
                <div className="grid sm:grid-cols-2 gap-8 text-evergreen/60 leading-relaxed">
                  <p>
                    I support adults with complex needs — including dementia, mental health challenges, cardiac conditions, and spinal injuries. I've been doing this for over ten years.
                  </p>
                  <p>
                    I am not a national franchise. Every carer I place is fully vetted, trained, and regularly supervised. When you have a concern, you speak to me directly — not a call centre.
                  </p>
                </div>
                <Link to="/about" className="btn btn-outline mt-10">
                  More about me <ArrowRight size={13} />
                </Link>
              </div>
            </Reveal>
            <Reveal className="md:col-span-5" delay={120}>
              <div className="border-l-2 border-terracotta pl-7 md:mt-2">
                <blockquote className="font-display italic text-2xl sm:text-[1.7rem] text-evergreen leading-snug mb-5">
                  "Inviting someone into your home is one of the most significant decisions a family makes. I don't take that lightly."
                </blockquote>
                <p className="label-mono text-evergreen/50">Wesleyan Care, Slough</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES INDEX ────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal><SectionHead n="02" label="Services" /></Reveal>
          <Reveal delay={60}>
            <h2 className="font-display text-4xl sm:text-5xl text-evergreen tracking-tight leading-tight mt-10 mb-12 sm:mb-16 max-w-2xl">
              Specialist support for complex needs.
            </h2>
          </Reveal>
          <div>
            {SERVICES_PREVIEW.map((s, i) => (
              <Reveal key={i} delay={i * 40}>
                <Link
                  to="/services"
                  className="group grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[4rem_2fr_3fr_auto] items-baseline gap-4 sm:gap-8 py-6 sm:py-7 border-t border-evergreen/20 last:border-b transition-colors hover:bg-sand/50"
                >
                  <span className="label-mono text-terracotta">0{i + 1}</span>
                  <span className="font-display text-2xl sm:text-3xl text-evergreen tracking-tight group-hover:text-terracotta transition-colors">
                    {s.title}
                  </span>
                  <span className="hidden sm:block text-sm text-evergreen/55 leading-relaxed max-w-md">
                    {s.desc}
                  </span>
                  <ArrowUpRight size={18} className="self-center text-evergreen/30 group-hover:text-terracotta group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div className="mt-10">
              <Link to="/services" className="btn btn-solid">
                All services in detail <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── COVERAGE TICKER ───────────────────────────── */}
      <Ticker items={AREAS} label="Covering" />

      {/* ── WHY CHOOSE US ─────────────────────────────── */}
      <section className="bg-evergreen text-cream py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal><SectionHead n="03" label="Why families choose me" dark /></Reveal>
          <Reveal delay={60}>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight leading-tight mt-10 mb-12 sm:mb-16 max-w-xl">
              What makes Wesleyan Care different.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((item, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className={`border-t border-cream/25 pt-6 pb-8 pr-8 ${i > 0 ? 'lg:border-l lg:border-cream/15 lg:pl-8' : ''} ${i % 2 === 1 ? 'sm:border-l sm:border-cream/15 sm:pl-8 lg:pl-8' : ''}`}>
                  <p className="label-mono text-terracotta-light mb-6">{item.n}</p>
                  <h3 className="font-display text-2xl tracking-tight mb-3.5">{item.title}</h3>
                  <p className="text-cream/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal><SectionHead n="04" label="Kind words" /></Reveal>
          <div className="grid md:grid-cols-3 mt-12 sm:mt-16 gap-y-12 md:gap-y-0">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <figure className={`h-full flex flex-col ${i > 0 ? 'md:border-l md:border-evergreen/20 md:pl-10' : ''} md:pr-10`}>
                  <span className="font-display text-6xl text-terracotta leading-none select-none" aria-hidden="true">&ldquo;</span>
                  <blockquote className="font-display text-xl leading-normal text-evergreen mt-3 mb-8 flex-1">
                    {t.quote}
                  </blockquote>
                  <figcaption className="label-mono text-evergreen/50">
                    {t.name} — {t.location}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT BEGINS ─────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal><SectionHead n="05" label="How it begins" /></Reveal>
          <div className="grid md:grid-cols-12 gap-10 md:gap-8 mt-10 sm:mt-14">
            <Reveal className="md:col-span-4" delay={60}>
              <div className="md:sticky md:top-28">
                <h2 className="font-display text-4xl sm:text-5xl text-evergreen tracking-tight leading-tight mb-8">
                  Three simple steps.
                </h2>
                <p className="text-evergreen/60 leading-relaxed mb-9 max-w-xs">
                  No forms to fight through, no call centres. Arranging care starts with an honest conversation.
                </p>
                <a href="tel:01753424473" className="btn btn-accent">
                  <Phone size={13} /> Start with a call
                </a>
              </div>
            </Reveal>
            <div className="md:col-span-8">
              {STEPS.map((step, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[5rem_1fr] gap-4 sm:gap-6 py-8 border-t border-evergreen/20 last:border-b">
                    <p className="font-display text-3xl sm:text-4xl text-terracotta/40 leading-none select-none">{step.n}</p>
                    <div>
                      <h3 className="font-display text-2xl text-evergreen tracking-tight mb-3">{step.title}</h3>
                      <p className="text-evergreen/60 leading-relaxed max-w-lg">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── JOURNAL ───────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal><SectionHead n="06" label="From the journal" /></Reveal>
          <div className="mt-12 sm:mt-16">
            {latestPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 60}>
                <Link
                  to={`/blogs/${post.slug}`}
                  className="group grid sm:grid-cols-[10rem_1fr_auto] items-baseline gap-2 sm:gap-8 py-7 border-t border-evergreen/20 last:border-b transition-colors hover:bg-sand/50"
                >
                  <span className="font-mono text-xs text-evergreen/50">{post.date}</span>
                  <span>
                    <span className="block font-display text-2xl sm:text-[1.65rem] text-evergreen tracking-tight leading-snug group-hover:text-terracotta transition-colors mb-1.5">
                      {post.title}
                    </span>
                    <span className="label-mono text-evergreen/40">{post.tag} · {post.readTime}</span>
                  </span>
                  <ArrowUpRight size={18} className="hidden sm:block self-center text-evergreen/30 group-hover:text-terracotta transition-colors" />
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div className="mt-10">
              <Link to="/blogs" className="btn btn-outline">
                All articles <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
