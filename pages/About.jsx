import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin, Shield, Award, Users, CheckCircle2 } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO, { buildBreadcrumbLD } from '../components/SEO.jsx';

const VALUES = [
  { title: 'Person-centred', desc: 'Every care plan is built around the individual — their preferences, their existing routine, and what actually makes their day better. Not a package pulled off a shelf.' },
  { title: 'Locally run',    desc: 'I am based in Slough. Not a national franchise with a regional manager somewhere else. The person making decisions about your care is the same person you\'ll speak to on the phone.' },
  { title: 'Fully vetted',   desc: 'Every carer is DBS-checked, reference-verified, and trained before they begin. I don\'t cut corners on this — it\'s the foundation everything else rests on.' },
  { title: 'Adaptable',      desc: 'Needs change. I expect that. Care packages are reviewed regularly and adjusted without bureaucracy or delay. If something isn\'t working, I fix it.' },
];

const CREDENTIALS = [
  { icon: Shield,       title: 'CQC Registered',      desc: 'Registered with the Care Quality Commission — England\'s independent regulator of health and social care.' },
  { icon: Award,        title: 'DBS-Checked Staff',   desc: 'Every carer undergoes enhanced DBS checks and reference verification before placement.' },
  { icon: Users,        title: 'Ongoing Training',    desc: 'Regular supervision, mandatory training updates, and specialist modules in dementia, mental health, and complex care.' },
  { icon: CheckCircle2, title: 'Insured & Compliant', desc: 'Fully insured with comprehensive public liability and professional indemnity cover.' },
];

const AREAS = [
  'Slough', 'Windsor', 'Maidenhead', 'Eton', 'Langley', 'Burnham',
  'Farnham Common', 'Stoke Poges', 'Iver', 'Gerrards Cross', 'Taplow', 'Reading',
];

const STEPS = [
  { n: '1', title: 'A real conversation', desc: 'You speak to me directly — not a form or a chatbot. I listen to your situation and answer questions honestly. No sales pitch.' },
  { n: '2', title: 'A home assessment',   desc: 'I visit you at home to understand your needs properly: your routine, your preferences, the things that matter most to you day to day.' },
  { n: '3', title: 'Care that fits',      desc: 'I match you with the right carer, introduce them before care starts, and check in regularly. If anything needs adjusting, I adjust it.' },
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
        title={<>A care provider.<br /><em className="text-terracotta">Not a care factory.</em></>}
        lead="Wesleyan Care is a privately run provider based in Slough. I specialise in supporting adults with complex needs — and I've been doing it for over a decade."
      />

      {/* ── MISSION ───────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-start">
          <Reveal>
            <figure className="bg-evergreen text-cream rounded-[2rem] p-9 md:p-12 relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-terracotta/25 blur-3xl pointer-events-none"
              />
              <blockquote className="relative font-display text-2xl md:text-3xl leading-snug mb-7">
                "Inviting someone into your home is one of the most significant decisions a family can make. I don't take that lightly."
              </blockquote>
              <figcaption className="relative text-sm text-cream/50">Wesleyan Care · Founded in Slough</figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5 text-evergreen/60 text-lg leading-relaxed">
              <p>
                Wesleyan Care was founded on a straightforward belief: that people with complex care needs deserve support that is consistent, attentive, and genuinely adapted to them. Not a rigid package that suits the provider.
              </p>
              <p>
                I specialise in dementia care, mental health support, cardiac and spinal injury care, palliative care, and home and personal care. I have built experience in these areas over many years of real, day-to-day work with clients and their families.
              </p>
              <p>
                Every carer I place is supervised, trained, and supported. When things change — and they do — I respond quickly and without fuss. That's what being a local, independent provider actually means.
              </p>
              <div className="pt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-parchment border border-evergreen/15 hover:border-evergreen/50 text-evergreen px-7 py-3.5 rounded-full font-semibold transition-colors text-sm"
                >
                  Talk to me <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-sand/60">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="mb-14">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-terracotta mb-5">Values</p>
              <h2 className="font-display text-4xl md:text-5xl text-evergreen leading-tight tracking-tight max-w-xl">
                What I actually stand for.
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {VALUES.map((v, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-parchment border border-evergreen/5 rounded-3xl p-8 h-full">
                  <p className="font-display text-2xl text-evergreen mb-3">{v.title}</p>
                  <p className="text-evergreen/55 leading-relaxed text-sm">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ──────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="mb-14">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-terracotta mb-5">Standards &amp; compliance</p>
              <h2 className="font-display text-4xl md:text-5xl text-evergreen leading-tight tracking-tight max-w-xl">
                The standards I hold myself to.
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CREDENTIALS.map((c, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-parchment border border-evergreen/5 rounded-3xl p-7 h-full">
                  <span className="w-11 h-11 rounded-2xl bg-sand text-evergreen flex items-center justify-center mb-5">
                    <c.icon size={19} />
                  </span>
                  <h3 className="font-semibold text-evergreen text-base mb-2.5">{c.title}</h3>
                  <p className="text-sm text-evergreen/55 leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-sand/60">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <img
              src="https://images.pexels.com/photos/8439648/pexels-photo-8439648.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Carer speaking with elderly clients at home in Berkshire"
              className="w-full aspect-[4/3] object-cover rounded-[2.5rem]"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-terracotta mb-5">My background</p>
              <h2 className="font-display text-4xl text-evergreen leading-tight tracking-tight mb-7">
                Over a decade of complex care in Berkshire.
              </h2>
              <div className="space-y-5 text-evergreen/60 text-lg leading-relaxed">
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
      </section>

      {/* ── COVERAGE AREAS ───────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-start">
          <Reveal>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-terracotta mb-5">Where I work</p>
              <h2 className="font-display text-4xl text-evergreen leading-tight tracking-tight mb-6">
                Based in Slough. Covering Berkshire and beyond.
              </h2>
              <p className="text-evergreen/55 leading-relaxed max-w-sm">
                I provide care across Berkshire and surrounding areas. If you're unsure whether I cover your area, call me — I'll tell you honestly.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap gap-2.5">
              {AREAS.map((area, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 bg-parchment border border-evergreen/10 rounded-full px-5 py-2.5 text-sm text-evergreen font-medium"
                >
                  <MapPin size={12} className="text-terracotta" /> {area}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── GETTING STARTED ───────────────────────────── */}
      <section className="py-16 md:py-24 bg-sand/60">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-14 items-start">
            <Reveal>
              <div className="md:sticky md:top-32">
                <h2 className="font-display text-4xl text-evergreen leading-tight tracking-tight mb-7">
                  What happens when you contact me.
                </h2>
                <a
                  href="tel:01753424473"
                  className="inline-flex items-center gap-2.5 bg-evergreen hover:bg-evergreen-light text-cream px-7 py-3.5 rounded-full font-semibold transition-colors text-sm"
                >
                  <Phone size={14} /> 01753 424 473
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
    </>
  );
}
