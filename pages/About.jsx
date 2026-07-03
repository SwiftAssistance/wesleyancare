import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import SEO, { buildBreadcrumbLD } from '../components/SEO.jsx';

const VALUES = [
  { n: '01', title: 'Person-centred', desc: 'Every care plan is built around the individual — their preferences, their existing routine, and what actually makes their day better. Not a package pulled off a shelf.' },
  { n: '02', title: 'Locally run',    desc: 'I am based in Slough. Not a national franchise with a regional manager somewhere else. The person making decisions about your care is the same person you\'ll speak to on the phone.' },
  { n: '03', title: 'Fully vetted',   desc: 'Every carer is DBS-checked, reference-verified, and trained before they begin. I don\'t cut corners on this — it\'s the foundation everything else rests on.' },
  { n: '04', title: 'Adaptable',      desc: 'Needs change. I expect that. Care packages are reviewed regularly and adjusted without bureaucracy or delay. If something isn\'t working, I fix it.' },
];

const CREDENTIALS = [
  { title: 'CQC Registered',      desc: 'Registered with the Care Quality Commission — England\'s independent regulator of health and social care.' },
  { title: 'DBS-Checked Staff',   desc: 'Every carer undergoes enhanced DBS checks and reference verification before placement.' },
  { title: 'Ongoing Training',    desc: 'Regular supervision, mandatory training updates, and specialist modules in dementia, mental health, and complex care.' },
  { title: 'Insured & Compliant', desc: 'Fully insured with comprehensive public liability and professional indemnity cover.' },
];

const AREAS = [
  'Slough', 'Windsor', 'Maidenhead', 'Eton', 'Langley', 'Burnham',
  'Farnham Common', 'Stoke Poges', 'Iver', 'Gerrards Cross', 'Taplow', 'Reading',
];

const STEPS = [
  { n: '01', title: 'A real conversation', desc: 'You speak to me directly — not a form or a chatbot. I listen to your situation and answer questions honestly. No sales pitch.' },
  { n: '02', title: 'A home assessment',   desc: 'I visit you at home to understand your needs properly: your routine, your preferences, the things that matter most to you day to day.' },
  { n: '03', title: 'Care that fits',      desc: 'I match you with the right carer, introduce them before care starts, and check in regularly. If anything needs adjusting, I adjust it.' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About – Independent Private Care Provider, Slough"
        description="Wesleyan Care is a privately run home care provider based in Slough, Berkshire. Over a decade of specialist support for adults with dementia, mental health needs, cardiac conditions, and more. CQC registered, locally run."
        canonical="/about"
        extraSchema={[buildBreadcrumbLD([{ name: 'Home', path: '/' }, { name: 'About' }])]}
      />

      <PageHero
        crumbs={[{ name: 'Home', path: '/' }, { name: 'About' }]}
        n="02"
        title={<>A care provider.<br /><em className="text-terracotta">Not a care factory.</em></>}
        lead="Wesleyan Care is a privately run provider based in Slough. I specialise in supporting adults with complex needs — and I've been doing it for over a decade."
      />

      {/* ── MISSION ───────────────────────────────────── */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal><SectionHead n="01" label="The idea" /></Reveal>
          <div className="grid md:grid-cols-12 gap-10 md:gap-8 mt-10 sm:mt-14">
            <Reveal className="md:col-span-5" delay={60}>
              <div className="border-l-2 border-terracotta pl-7">
                <blockquote className="font-display italic text-2xl sm:text-3xl text-evergreen leading-snug mb-5">
                  "Inviting someone into your home is one of the most significant decisions a family can make. I don't take that lightly."
                </blockquote>
                <p className="label-mono text-evergreen/50">Wesleyan Care · Founded in Slough</p>
              </div>
            </Reveal>
            <Reveal className="md:col-span-7" delay={120}>
              <div className="space-y-5 text-evergreen/60 text-lg leading-relaxed md:pl-8">
                <p>
                  Wesleyan Care was founded on a straightforward belief: that people with complex care needs deserve support that is consistent, attentive, and genuinely adapted to them. Not a rigid package that suits the provider.
                </p>
                <p>
                  I specialise in dementia care, mental health support, cardiac and spinal injury care, palliative care, and home and personal care. I have built experience in these areas over many years of real, day-to-day work with clients and their families.
                </p>
                <p>
                  Every carer I place is supervised, trained, and supported. When things change — and they do — I respond quickly and without fuss. That's what being a local, independent provider actually means.
                </p>
                <div className="pt-4">
                  <Link to="/contact" className="btn btn-outline">
                    Talk to me <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────── */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal><SectionHead n="02" label="Values" /></Reveal>
          <Reveal delay={60}>
            <h2 className="font-display text-4xl sm:text-5xl text-evergreen tracking-tight leading-tight mt-10 mb-12 sm:mb-16 max-w-xl">
              What I actually stand for.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className={`border-t border-evergreen/20 pt-6 pb-10 pr-8 ${i % 2 === 1 ? 'sm:border-l sm:border-evergreen/20 sm:pl-10' : ''}`}>
                  <p className="label-mono text-terracotta mb-6">{v.n}</p>
                  <h3 className="font-display text-2xl sm:text-3xl text-evergreen tracking-tight mb-4">{v.title}</h3>
                  <p className="text-evergreen/60 leading-relaxed max-w-md">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ────────────────────────────────── */}
      <section className="bg-evergreen text-cream py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal><SectionHead n="03" label="My background" dark /></Reveal>
          <div className="grid md:grid-cols-12 gap-10 md:gap-8 mt-10 sm:mt-14 items-start">
            <Reveal className="md:col-span-5" delay={60}>
              <figure>
                <img
                  src="https://images.pexels.com/photos/8439648/pexels-photo-8439648.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Carer speaking with elderly clients at home in Berkshire"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="font-mono text-[10px] uppercase tracking-[0.15em] text-cream/50 pt-3">
                  Day-to-day work, Berkshire
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="md:col-span-7" delay={120}>
              <div className="md:pl-8">
                <h2 className="font-display text-4xl sm:text-5xl tracking-tight leading-tight mb-8 max-w-lg">
                  Over a decade of complex care in Berkshire.
                </h2>
                <div className="space-y-5 text-cream/65 text-lg leading-relaxed max-w-xl">
                  <p>
                    I have been supporting adults with complex care needs in Slough and across Berkshire for over ten years. In that time I've worked with hundreds of families — through dementia diagnoses, hospital discharges, mental health crises, and end-of-life care.
                  </p>
                  <p>
                    That experience shapes how I approach every new client. I know what good care looks like in practice, not just in theory — consistency of carer, honest communication, and not having to fight to get things changed when they're not working.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ──────────────────────────────── */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal><SectionHead n="04" label="Standards & compliance" /></Reveal>
          <Reveal delay={60}>
            <h2 className="font-display text-4xl sm:text-5xl text-evergreen tracking-tight leading-tight mt-10 mb-12 sm:mb-16 max-w-xl">
              The standards I hold myself to.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {CREDENTIALS.map((c, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className={`border-t border-evergreen/20 pt-6 pb-8 pr-8 ${i > 0 ? 'lg:border-l lg:border-evergreen/20 lg:pl-8' : ''} ${i % 2 === 1 ? 'sm:border-l sm:border-evergreen/20 sm:pl-8' : ''}`}>
                  <p className="label-mono text-terracotta mb-6">0{i + 1}</p>
                  <h3 className="font-display text-xl text-evergreen tracking-tight mb-3">{c.title}</h3>
                  <p className="text-sm text-evergreen/60 leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COVERAGE AREAS ───────────────────────────── */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal><SectionHead n="05" label="Where I work" /></Reveal>
          <div className="grid md:grid-cols-12 gap-10 md:gap-8 mt-10 sm:mt-14">
            <Reveal className="md:col-span-5" delay={60}>
              <div>
                <h2 className="font-display text-4xl text-evergreen tracking-tight leading-tight mb-6">
                  Based in Slough. Covering Berkshire and beyond.
                </h2>
                <p className="text-evergreen/60 leading-relaxed max-w-sm">
                  If you're unsure whether I cover your area, call me — I'll tell you honestly.
                </p>
              </div>
            </Reveal>
            <Reveal className="md:col-span-7" delay={120}>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:pl-8">
                {AREAS.map((area, i) => (
                  <li key={i} className="border-t border-evergreen/20 py-3.5 pr-4 flex items-baseline gap-3">
                    <span className="font-mono text-[10px] text-terracotta">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-evergreen">{area}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── GETTING STARTED ───────────────────────────── */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal><SectionHead n="06" label="Getting started" /></Reveal>
          <div className="grid md:grid-cols-12 gap-10 md:gap-8 mt-10 sm:mt-14">
            <Reveal className="md:col-span-4" delay={60}>
              <div className="md:sticky md:top-28">
                <h2 className="font-display text-4xl text-evergreen tracking-tight leading-tight mb-8">
                  What happens when you contact me.
                </h2>
                <a href="tel:01753424473" className="btn btn-accent">
                  <Phone size={13} /> 01753 424 473
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
    </>
  );
}
