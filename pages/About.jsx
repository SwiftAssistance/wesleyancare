import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';

const VALUES = [
  { title: 'Person-centred',  desc: 'Every care plan is built around the individual — their preferences, their existing routine, and what actually makes their day better. Not a package pulled off a shelf.' },
  { title: 'Locally run',     desc: 'We are based in Slough. Not a national franchise with a regional manager somewhere else. The people making decisions about your care are the same people you\'ll speak to on the phone.' },
  { title: 'Fully vetted',    desc: 'Every carer is DBS-checked, reference-verified, and trained before they begin. We don\'t cut corners on this — it\'s the foundation everything else rests on.' },
  { title: 'Adaptable',       desc: 'Needs change. We expect that. Care packages are reviewed regularly and adjusted without bureaucracy or delay. If something isn\'t working, we fix it.' },
];

export default function About() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="pt-36 pb-24 bg-[#1B2A4A]">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 max-w-3xl">
              We are a care provider.<br />
              <em className="text-[#D4A855] not-italic">Not a care factory.</em>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl mb-8">
              Wesleyan Care is a privately run team based in Slough. We specialise in supporting adults with complex needs — and we've been doing it for over a decade.
            </p>
            <hr className="border-white/10" />
          </Reveal>
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-start">
          {/* Left: editorial blockquote */}
          <Reveal>
            <div>
              <blockquote className="border-l-4 border-[#D4A855] pl-8 mb-10">
                <p className="font-serif text-2xl md:text-3xl text-[#1B2A4A] leading-snug">
                  "Inviting someone into your home is one of the most significant decisions a family can make. We don't take that lightly."
                </p>
              </blockquote>
              <p className="text-sm text-gray-400 pl-8">Wesleyan Care, founded in Slough</p>
            </div>
          </Reveal>

          {/* Right: prose */}
          <Reveal delay={120}>
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                Wesleyan Care was founded on a straightforward belief: that people with complex care needs deserve support that is consistent, attentive, and genuinely adapted to them. Not a rigid package that suits the provider.
              </p>
              <p>
                We specialise in dementia care, mental health support, cardiac and spinal injury care, palliative care, and home and personal care. Our team has built experience in these areas over many years of real, day-to-day work with clients and their families.
              </p>
              <p>
                Every carer we place is supervised, trained, and supported. When things change — and they do — we respond quickly and without fuss. That's what being a local, independent provider actually means.
              </p>
              <div className="pt-4">
                <Link to="/contact" className="inline-flex items-center gap-2 font-semibold text-[#1B2A4A] border-b-2 border-[#D4A855] pb-0.5 hover:text-[#D4A855] transition-colors text-sm">
                  Talk to our team <ArrowRight size={14} />
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
              What we actually stand for.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {VALUES.map((v, i) => (
              <Reveal key={i} delay={i * 80}>
                <div>
                  <p className="font-bold text-[#1B2A4A] text-lg mb-2">{v.title}</p>
                  <p className="text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-6">Our Background</p>
              <p className="font-serif text-4xl text-[#1B2A4A] leading-tight">Over a decade of complex care in Berkshire.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                We have been supporting adults with complex care needs in Slough and across Berkshire for over ten years. In that time we've worked with hundreds of families — through dementia diagnoses, hospital discharges, mental health crises, and end-of-life care.
              </p>
              <p>
                That experience shapes how we approach every new client. We know what good care looks like in practice, not just in theory. We know the things that matter to families — consistency of carer, honest communication, and not having to fight to get things changed when they're not working.
              </p>
              <p>
                We have built a team who reflect those values. People who stay, who build relationships with clients, and who understand that care work is skilled work that deserves to be done properly.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── GETTING STARTED ───────────────────────────── */}
      <section className="py-24 bg-[#FAF7F2] border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight mb-16 max-w-xl">
              What happens when you contact us.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { n: '01', title: 'A real conversation', desc: 'You speak to someone on our team — not a form or a chatbot. We listen to your situation and answer questions honestly. No sales pitch.' },
              { n: '02', title: 'A home assessment',   desc: 'We visit you at home to understand your needs properly: your routine, your preferences, the things that matter most to you day to day.' },
              { n: '03', title: 'Care that fits',      desc: 'We match you with the right carer, introduce them before care starts, and check in regularly. If anything needs adjusting, we adjust it.' },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <div>
                  <p className="font-serif text-6xl text-[#D4A855]/20 font-bold leading-none mb-5 select-none">{step.n}</p>
                  <h3 className="font-bold text-xl text-[#1B2A4A] mb-3">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-24 bg-[#1B2A4A]">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
              We're easy to reach.
            </h2>
            <p className="text-white/50 text-lg">No automated system, no waiting in a queue. Call and someone will answer.</p>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <a href="tel:01753424473" className="block font-serif text-4xl text-[#D4A855] hover:text-white transition-colors leading-none tracking-tight mb-6">
                01753 424 473
              </a>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#D4A855] hover:bg-[#c09040] text-white px-7 py-3.5 rounded-full font-semibold transition-colors text-sm">
                  Send a message <ArrowRight size={14} />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-7 py-3.5 rounded-full font-semibold transition-colors text-sm">
                  Our services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
