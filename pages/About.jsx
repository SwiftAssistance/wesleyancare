import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin, Shield, Award, Users, CheckCircle2 } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';

const VALUES = [
  { title: 'Person-centred',  desc: 'Every care plan is built around the individual — their preferences, their existing routine, and what actually makes their day better. Not a package pulled off a shelf.' },
  { title: 'Locally run',     desc: 'I am based in Slough. Not a national franchise with a regional manager somewhere else. The person making decisions about your care is the same person you\'ll speak to on the phone.' },
  { title: 'Fully vetted',    desc: 'Every carer is DBS-checked, reference-verified, and trained before they begin. I don\'t cut corners on this — it\'s the foundation everything else rests on.' },
  { title: 'Adaptable',       desc: 'Needs change. I expect that. Care packages are reviewed regularly and adjusted without bureaucracy or delay. If something isn\'t working, I fix it.' },
];

const CREDENTIALS = [
  { icon: Shield,       title: 'CQC Registered',           desc: 'Registered with the Care Quality Commission — England\'s independent regulator of health and social care.' },
  { icon: Award,        title: 'DBS-Checked Staff',        desc: 'Every carer undergoes enhanced DBS checks and reference verification before placement.' },
  { icon: Users,        title: 'Ongoing Training',         desc: 'Regular supervision, mandatory training updates, and specialist modules in dementia, mental health, and complex care.' },
  { icon: CheckCircle2, title: 'Insured & Compliant',      desc: 'Fully insured with comprehensive public liability and professional indemnity cover.' },
];

const AREAS = [
  'Slough', 'Windsor', 'Maidenhead', 'Eton', 'Langley', 'Burnham',
  'Farnham Common', 'Stoke Poges', 'Iver', 'Gerrards Cross', 'Taplow', 'Reading',
];

export default function About() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="pt-36 pb-24 bg-[#1B2A4A]">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="flex items-center gap-2 text-[#D4A855] text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/25">/</span>
              <span>About</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.04] mb-8 max-w-3xl">
              I am a care provider.<br />
              <em className="text-[#D4A855] not-italic">Not a care factory.</em>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed max-w-2xl mb-10">
              Wesleyan Care is a privately run provider based in Slough. I specialise in supporting adults with complex needs — and I've been doing it for over a decade.
            </p>
            <hr className="border-white/10" />
          </Reveal>
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div>
              <blockquote className="border-l-2 border-[#D4A855] pl-7 mb-8">
                <p className="font-serif text-2xl md:text-3xl text-[#1B2A4A] leading-snug">
                  "Inviting someone into your home is one of the most significant decisions a family can make. I don't take that lightly."
                </p>
              </blockquote>
              <p className="text-xs text-gray-400 pl-7">Wesleyan Care, founded in Slough</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
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
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B2A4A] border-b border-[#D4A855] pb-0.5 hover:text-[#D4A855] transition-colors">
                  Talk to me <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────── */}
      <section className="py-24 bg-[#FAF7F2] border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight mb-14 max-w-xl">
              What I actually stand for.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-0">
            {VALUES.map((v, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-t border-gray-200 py-8 md:px-8 first:border-t md:even:border-l md:even:border-gray-200">
                  <p className="font-semibold text-[#1B2A4A] text-base mb-3">{v.title}</p>
                  <p className="text-gray-500 leading-relaxed text-sm">{v.desc}</p>
                </div>
              </Reveal>
            ))}
            {/* Close the last border */}
            <div className="border-t border-gray-200 md:col-span-2" />
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ──────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="mb-14">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4A855] mb-4">Standards & Compliance</p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight max-w-xl">
                The standards I hold myself to.
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100">
            {CREDENTIALS.map((c, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-white p-8">
                  <div className="text-[#D4A855] mb-5">
                    <c.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-[#1B2A4A] text-sm mb-3">{c.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ────────────────────────────────── */}
      <section className="py-24 bg-[#FAF7F2] border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4A855] mb-6">My Background</p>
              <p className="font-serif text-4xl text-[#1B2A4A] leading-tight mb-8">Over a decade of complex care in Berkshire.</p>
              <img
                src="https://images.pexels.com/photos/8439648/pexels-photo-8439648.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Carer speaking with elderly clients at home"
                className="w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                I have been supporting adults with complex care needs in Slough and across Berkshire for over ten years. In that time I've worked with hundreds of families — through dementia diagnoses, hospital discharges, mental health crises, and end-of-life care.
              </p>
              <p>
                That experience shapes how I approach every new client. I know what good care looks like in practice, not just in theory. I know the things that matter to families — consistency of carer, honest communication, and not having to fight to get things changed when they're not working.
              </p>
              <p>
                I have built a team who reflect those values. People who stay, who build relationships with clients, and who understand that care work is skilled work that deserves to be done properly.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── COVERAGE AREAS ───────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4A855] mb-5">Where I Work</p>
              <h2 className="font-serif text-4xl text-[#1B2A4A] leading-tight mb-6">
                Based in Slough.<br />Covering Berkshire and beyond.
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm max-w-sm">
                I am based in Slough and provide care across Berkshire and surrounding areas. If you're unsure whether I cover your area, call me — I'll tell you honestly.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 border-t border-l border-gray-100">
              {AREAS.map((area, i) => (
                <div key={i} className="border-b border-r border-gray-100 px-4 py-3 text-sm text-[#1B2A4A]">
                  {area}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── GETTING STARTED ───────────────────────────── */}
      <section className="py-24 bg-[#FAF7F2] border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
              <div>
                <h2 className="font-serif text-4xl text-[#1B2A4A] leading-tight">
                  What happens when you contact me.
                </h2>
              </div>
              <div className="space-y-10">
                {[
                  { n: '01', title: 'A real conversation', desc: 'You speak to me directly — not a form or a chatbot. I listen to your situation and answer questions honestly. No sales pitch.' },
                  { n: '02', title: 'A home assessment',   desc: 'I visit you at home to understand your needs properly: your routine, your preferences, the things that matter most to you day to day.' },
                  { n: '03', title: 'Care that fits',      desc: 'I match you with the right carer, introduce them before care starts, and check in regularly. If anything needs adjusting, I adjust it.' },
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
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-24 bg-[#1B2A4A]">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
              Ready to have a conversation?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap gap-4">
              <a href="tel:01753424473" className="inline-flex items-center gap-2 bg-[#D4A855] hover:bg-[#c09040] text-white px-7 py-4 font-semibold transition-colors text-sm">
                <Phone size={14} /> 01753 424 473
              </a>
              <Link to="/services" className="inline-flex items-center gap-2 border border-white/25 hover:border-white text-white px-7 py-4 font-semibold transition-colors text-sm">
                View my services <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
